import Anthropic, { AI_PROMPT, HUMAN_PROMPT } from "@anthropic-ai/sdk";
import { env } from "~/env.js";

import { Models } from "./openai_completion";

const apiKey = env.ANTHROPIC_API_KEY;
if (!apiKey) {
  throw new Error("The ANTHROPIC_API_KEY environment variable must be set");
}

const anthropic = new Anthropic({ apiKey });

export const sendClaudeRequest = async (
  userPrompt: string,
  model = Models.CLAUDE,
) => {
  try {
    const maxTokens = 90000;
    console.log(`+++ Calling ${model} with maxTokens: ${maxTokens}`);
    const response = await anthropic.completions.create({
      prompt: `${HUMAN_PROMPT} ${userPrompt} ${AI_PROMPT}`,
      max_tokens_to_sample: maxTokens,
      model,
    });
    console.log(`+++ Response from ${model}: `, response);
    const claudeResponse = response.completion;
    return claudeResponse;
  } catch (error: any) {
    console.error(`Error calling Claude: ${error}`);
  }
};
