import OpenAI from "openai";
import { type Message } from "~/types";
import {
  CONTEXT_WINDOW,
  Models,
  getMaxTokensForResponse,
} from "./openai_completion";
import {
  type ChatCompletionChunk,
  type ChatCompletionCreateParamsStreaming,
} from "openai/resources/index.mjs";
import { type Stream } from "openai/streaming.mjs";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY ?? "" });

export const OpenAIStream = async (
  model: Models = Models.GPT4,
  messages: Message[],
  systemPrompt = "You are a helpful friendly assistant.",
  temperature = 1,
): Promise<Stream<ChatCompletionChunk>> => {
  try {
    let max_tokens = 0;
    const content =
      systemPrompt +
      messages.map((msg) => msg.role + " " + msg.content).join(" ");
    try {
      max_tokens = await getMaxTokensForResponse(content, model);
    } catch (error) {
      // update the model to 16K if the input text is too large
      console.log(
        "NOTE: Input text is too large to fit within the context window.",
      );
      model = Models.CHATGPT;
    }
    try {
      if (!max_tokens) {
        max_tokens = await getMaxTokensForResponse(content, model);
      }
    } catch (error) {
      console.log("Error in getMaxTokensForResponse: ", error);
      max_tokens = Math.round(CONTEXT_WINDOW[model] / 2);
    }
    if (!max_tokens) {
      max_tokens = Math.round(CONTEXT_WINDOW[model] / 2);
    }

    console.log(`\n +++ Calling ${model} with max_tokens: ${max_tokens} `);

    const chatCompletionParams: ChatCompletionCreateParamsStreaming = {
      model: model,
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        ...messages.map((msg) => ({ role: msg.role, content: msg.content })),
      ],
      temperature,
      max_tokens,
      stream: true,
    };

    // Start the streaming session with OpenAI
    return openai.chat.completions.create(chatCompletionParams);
  } catch (error) {
    console.error("Error creating chat completion:", error);
    throw error;
  }
};
