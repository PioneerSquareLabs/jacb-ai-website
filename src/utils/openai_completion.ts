import { type TiktokenEncoding, getEncoding } from "js-tiktoken";
import { parse } from "jsonc-parser";
import OpenAI from "openai";
import { type SafeParseSuccess, type ZodSchema } from "zod";
import { env } from "~/env.js";
import { sendClaudeRequest } from "./claude_handler";

export enum Models {
  // GPT4_1106_PREVIEW = "gpt-4-1106-preview", // "gpt-4-turbo-preview"
  GPT4 = "gpt-4-turbo", //"gpt-4",
  // GPT4 = "gpt-4", //"gpt-4",
  GPT4_0613 = "gpt-4-0613", //"gpt-4",
  GPT4_0314 = "gpt-4-0314",
  GPT4_32K = "gpt-4-32k",
  CHATGPT = "gpt-3.5-turbo-0613", //gpt-3.5-turbo",
  CHATGPT_16K = "gpt-3.5-turbo-16k",
  CLAUDE_INSTANT = "claude-instant-1",
  CLAUDE = "claude-2",
}

export const CONTEXT_WINDOW = {
  // [Models.GPT4_1106_PREVIEW]: 4096,
  // [Models.GPT4]: 8192,
  [Models.GPT4]: 8192,
  [Models.GPT4_0613]: 8192,
  [Models.GPT4_0314]: 8192,
  [Models.GPT4_32K]: 32768,
  [Models.CHATGPT]: 4096,
  [Models.CHATGPT_16K]: 16384,
  [Models.CLAUDE_INSTANT]: 10000,
  [Models.CLAUDE]: 10000,
};

export const MAX_OUTPUT_TOKENS = {
  // [Models.GPT4_1106_PREVIEW]: 4096,
  // [Models.GPT4]: 8192,
  [Models.GPT4]: 4096,
  [Models.GPT4_0613]: 4096,
  [Models.GPT4_0314]: 4096,
  [Models.GPT4_32K]: 16384,
  [Models.CHATGPT]: 4096,
  [Models.CHATGPT_16K]: 16384,
  [Models.CLAUDE_INSTANT]: 10000,
  [Models.CLAUDE]: 10000,
};

const ENCODING = {
  // [Models.GPT4_1106_PREVIEW]: "cl100k_base",
  [Models.GPT4]: "cl100k_base",
  [Models.GPT4_0613]: "cl100k_base",
  [Models.GPT4_0314]: "cl100k_base",
  [Models.GPT4_32K]: "cl100k_base",
  [Models.CHATGPT]: "p50k_base",
  [Models.CHATGPT_16K]: "p50k_base",
  [Models.CLAUDE_INSTANT]: "cl100k_base",
  [Models.CLAUDE]: "cl100k_base",
};

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
  baseURL: "https://api.portkey.ai/v1/proxy",
  defaultHeaders: {
    "x-portkey-api-key": env.PORTKEY_API_KEY,
    "x-portkey-mode": "proxy openai",
    "x-portkey-retry-count": "4",
    "x-portkey-cache": "simple",
  },
});

export const getMaxTokensForResponse = async (
  inputText: string,
  model: Models,
): Promise<number> => {
  try {
    const encodingName = ENCODING[model] as TiktokenEncoding;
    const enc = getEncoding(encodingName);
    const tokens = enc.encode(inputText);
    const numberOfInputTokens = tokens.length;

    const maxContextTokens = CONTEXT_WINDOW[model];
    const padding = Math.ceil(maxContextTokens * 0.01);

    const maxTokensForResponse =
      maxContextTokens - numberOfInputTokens - padding;

    const maxOutputTokens = MAX_OUTPUT_TOKENS[model] - padding;
    if (maxTokensForResponse > maxOutputTokens) {
      console.log(
        `maxTokensForResponse ${maxTokensForResponse} is greater than maxOutputTokens ${maxOutputTokens}. Setting maxTokensForResponse to ${maxOutputTokens}`,
      );
      return maxOutputTokens;
    }

    if (maxTokensForResponse <= 0) {
      throw new Error(
        "Input text is too large to fit within the context window.",
      );
    }

    return maxTokensForResponse;
  } catch (error) {
    console.log("Error in getMaxTokensForResponse: ", error);
    return 0;
  }
};

export const sendGptRequest = async (
  userPrompt:
    | string
    | OpenAI.Chat.Completions.ChatCompletionContentPart[]
    | null,
  systemPrompt = "You are a helpful assistant.",
  temperature = 0.2,
  _model = Models.GPT4,
  retries = 10,
  delay = 30000, // rate limit is 40K tokens per minute, so by default start with 30 seconds
): Promise<string | undefined> => {
  console.log("\n\n --- User Prompt --- \n\n", userPrompt);
  console.log("\n\n --- System Prompt --- \n\n", systemPrompt);
  let model = _model;

  try {
    let max_tokens = 0;
    try {
      max_tokens = await getMaxTokensForResponse(
        userPrompt + systemPrompt,
        model as Models,
      );
    } catch (error) {
      // update the model to 16K if the input text is too large
      console.log(
        "NOTE: Input text is too large to fit within the context window. Using 32K model instead.",
      );
      model = Models.GPT4_32K;
    }
    try {
      if (!max_tokens) {
        max_tokens = await getMaxTokensForResponse(
          userPrompt + systemPrompt,
          model as Models,
        );
      }
    } catch (error) {
      console.log("Error in getMaxTokensForResponse: ", error);
      max_tokens = Math.round(CONTEXT_WINDOW[model] / 2);
    }
    if (!max_tokens) {
      max_tokens = Math.round(CONTEXT_WINDOW[model] / 2);
    }

    console.log(`\n +++ Calling ${model} with max_tokens: ${max_tokens} `);
    const startTime = Date.now();
    const response = await openai.chat.completions.create({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt as string },
      ],
      max_tokens,
      temperature,
    });
    const endTime = Date.now();
    console.log(`\n +++ ${model} Response time ${endTime - startTime} ms`);

    const gptResponse = response.choices[0]?.message ?? { content: "" };
    return gptResponse.content!;
  } catch (error: any) {
    if (retries === 0 || error?.response?.status !== 429) {
      console.error(
        `Error in GPT request: ${error ? error.message ?? "" : error}`,
      );
      // throw error;
    } else {
      console.log(
        `Received 429, retries remaining: ${retries}. Retrying in ${delay} ms...`,
      );

      // choose a random model, either Models.GPT4 or Models.GPT4_0613;
      const model = Math.random() > 0.5 ? Models.GPT4 : Models.GPT4_0613;

      if (delay < 60000) {
        return sendGptRequest(
          userPrompt,
          systemPrompt,
          temperature,
          model,
          retries - 1,
          delay * 2,
        );
      } else {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            sendGptRequest(
              userPrompt,
              systemPrompt,
              temperature,
              model,
              retries - 1,
              delay * 2,
            )
              .then(resolve)
              .catch(reject);
          }, delay);
        });
      }
    }
  }
};

export const sendTreeOfThoughtGptRequestWithSchema = async (
  userPrompt: string,
  systemPrompt: string,
  zodSchema: ZodSchema<any>,
  maxRetries = 3,
  model: Models = Models.GPT4,
  temperature = 0.2,
  currentRetry = 0,
): Promise<ZodSchema<any> | ZodSchema<any>[]> => {
  try {
    // Call this function 10 times in parallel

    const promises = Array.from({ length: 10 }, (_, i) => i).map(() => {
      return sendGptRequestWithSchema(
        userPrompt,
        systemPrompt,
        zodSchema,
        maxRetries,
        model,
        temperature,
      );
    });

    const results = (await Promise.all(promises)) as any as string[];

    // Now we want to send a new request to GPT to get the best response
    // We start by getting the three longest responses. We want to sort each object by the total length of the stringified object
    const longestResponses = results
      .sort((a, b) => {
        return JSON.stringify(b).length - JSON.stringify(a).length;
      })
      .slice(0, 3);

    // Now we want to send a new request to GPT to get the best response
    const bestSystemPrompt = `
  Act as an expert-level developer. You must evaluate three GPT outputs and determine which one is the highest-quality. The user will provide the original prompt and three responses. Please select the highest-quality, most detailed response that adheres to the original prompt.
  INSTRUCTIONS: Please select the highest-quality, most detailed response. Return ONLY the EXACT response as a JSON object. This response will be passed exactly as-is into a Zod schema parser and it will cause the system to crash if it does not exactly match one of the three responses.
  `;

    const bestUserPrompt = `
  Here are the original prompts:
  ===== USER PROMPT =====
  ${userPrompt}
  ===== END USER PROMPT =====
  ===== SYSTEM PROMPT =====
  ${systemPrompt}
  ===== END SYSTEM PROMPT =====

  Here are the three responses:
  ===== RESPONSE 1 =====
  ${longestResponses[0]}
  ===== END RESPONSE 1 =====
  ===== RESPONSE 2 =====
  ${longestResponses[1]}
  ===== END RESPONSE 2 =====
  ===== RESPONSE 3 =====
  ${longestResponses[2]}
  ===== END RESPONSE 3 =====
  INSTRUCTIONS: Please select the highest-quality, most detailed response. Return ONLY the EXACT response as a JSON object. This response will be passed exactly as-is into a Zod schema parser and it will cause the system to crash if it does not exactly match one of the three responses.
  `;
    const bestResponse = await sendGptRequestWithSchema(
      bestUserPrompt,
      bestSystemPrompt,
      zodSchema,
      maxRetries,
      model,
      temperature,
    );

    return bestResponse;
  } catch (error) {
    if (currentRetry < maxRetries) {
      return sendTreeOfThoughtGptRequestWithSchema(
        userPrompt,
        systemPrompt,
        zodSchema,
        maxRetries,
        model,
        temperature,
        currentRetry + 1,
      );
    } else {
      throw error;
    }
  }
};
// This function should be very similar to sendTreeOfThoughtGptRequestWithSchema but it should use sendGptRequest instead of sendGptRequestWithSchema.
export const sendTreeOfThoughtGptRequest = async (
  userPrompt: string,
  systemPrompt: string,
  maxRetries = 3,
  model: Models = Models.GPT4,
  temperature = 0.2,
  currentRetry = 0,
): Promise<string | string[]> => {
  try {
    // Call this function 10 times in parallel
    const promises = Array.from({ length: 8 }, (_, i) => i).map(() => {
      return sendGptRequest(
        userPrompt,
        systemPrompt,
        temperature,
        model,
        maxRetries,
      );
    });
    const results = (await Promise.all(promises)) as string[];

    // Now we want to send a new request to GPT to get the best response
    // We start by getting the three longest responses. We want to sort each object by the total length of the stringified object
    const longestResponses = results
      .sort((a, b) => {
        return b.length - a.length;
      })
      .slice(0, 3);

    // Now we want to send a new request to GPT to get the best response
    const bestSystemPrompt = `
  Act as an expert-level developer. You must evaluate three GPT outputs and determine which one is the highest-quality. The user will provide the original prompt and three responses. Please select the highest-quality, most detailed response that adheres to the original prompt.
  INSTRUCTIONS: Please select the highest-quality, most detailed response. Return ONLY the EXACT response. This response will cause the system to crash if it does not exactly match one of the three responses.
  `;
    const bestUserPrompt = `
  Here are the original prompts:
  ===== USER PROMPT =====
  ${userPrompt}
  ===== END USER PROMPT =====
  ===== SYSTEM PROMPT =====
  ${systemPrompt}
  ===== END SYSTEM PROMPT =====

  Here are the three responses:
  ===== RESPONSE 1 =====
  ${longestResponses[0]}
  ===== END RESPONSE 1 =====
  ===== RESPONSE 2 =====
  ${longestResponses[1]}
  ===== END RESPONSE 2 =====
  ===== RESPONSE 3 =====
  ${longestResponses[2]}
  ===== END RESPONSE 3 =====
  INSTRUCTIONS: Please select the highest-quality, most detailed response. Return ONLY the EXACT response. This response will cause the system to crash if it does not exactly match one of the three responses.
  `;
    const bestResponse = await sendGptRequest(
      bestUserPrompt,
      bestSystemPrompt,
      temperature,
      model,
      maxRetries,
    );

    return bestResponse!;
  } catch (error) {
    if (currentRetry < maxRetries) {
      return sendTreeOfThoughtGptRequest(
        userPrompt,
        systemPrompt,
        maxRetries,
        model,
        temperature,
        currentRetry + 1,
      );
    } else {
      throw error;
    }
  }
};

// Return type should be a ZodSchema or an array of ZodSchema objects
export const sendGptRequestWithSchema = async (
  userPrompt: string,
  systemPrompt: string,
  zodSchema: ZodSchema<any>,
  maxRetries = 3,
  model: Models = Models.GPT4,
  temperature = 0.2,
): Promise<ZodSchema<any> | ZodSchema<any>[]> => {
  let extractedInfo;
  let retries = 0; // Initialize a retries counter

  // Loop until a valid response is received or the maxRetries limit is reached
  while (retries < maxRetries) {
    let gptResponse;

    try {
      const isClaude =
        model === Models.CLAUDE || model === Models.CLAUDE_INSTANT;

      gptResponse = isClaude
        ? await sendClaudeRequest(systemPrompt + " " + userPrompt)
        : (await sendGptRequest(
            userPrompt,
            systemPrompt,
            temperature, // Use a lower temperature for retries
            retries ? Models.GPT4 : model, // Use GPT4 for retries. For some tasks 3.5 could be good enough for most cases.
          ))!;

      if (!gptResponse) {
        throw new Error("/n/n/n/n **** Empty response from GPT **** /n/n/n/n");
      }
      console.log("raw response:", gptResponse);

      // Remove lines that start with ```
      gptResponse = gptResponse.replace(/^`{3}.*$/gm, "") ?? gptResponse;

      extractedInfo = parse(gptResponse);

      // if the response is an array of objects, validate each object individually and return the full array if successful
      if (Array.isArray(extractedInfo)) {
        const validatedInfo = extractedInfo.map((info) =>
          zodSchema.safeParse(info),
        );

        const failedValidations = validatedInfo.filter(
          (result) => result.success === false,
        );

        if (failedValidations.length > 0) {
          throw new Error(
            `Invalid response from GPT - object is not able to be parsed using the provided schema: ${JSON.stringify(
              failedValidations,
            )}`,
          );
        }

        return (validatedInfo as SafeParseSuccess<any>[]).map(
          (result) => result.data,
        );
      }

      // if the response is a single object, validate it and return it if successful
      const validationResult = zodSchema.safeParse(extractedInfo);

      if (validationResult.success) {
        return validationResult.data;
      }

      throw new Error(
        `Invalid response from GPT - object is not able to be parsed using the provided schema: ${JSON.stringify(
          validationResult.error,
        )}`,
      );
    } catch (error: any) {
      console.log(`Error occurred during GPT request: ${error.message}`);
      retries++;
    }
  }

  throw new Error(`Max retries exceeded for GPT request: ${userPrompt}`);
};
