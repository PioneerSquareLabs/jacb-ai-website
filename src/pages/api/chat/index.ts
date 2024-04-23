import { type Task, type Message } from "~/types";
import { Models } from "~/utils/openai_completion";
import { OpenAIStream } from "~/utils/openai_streaming";
import {
  chatCreateIssueSystem,
  chatClarifyIssueSystem,
} from "~/prompts/edge_prompts";

export const config = {
  runtime: "edge",
};

const handler = async (req: Request): Promise<Response> => {
  try {
    const { messages, task } = (await req.json()) as {
      messages: Message[];
      task: Task;
    };

    const issue = task?.issue ?? undefined;

    let systemPrompt = issue ? chatClarifyIssueSystem : chatCreateIssueSystem;
    const temperature = 0.3;
    const model = Models.GPT4;

    if (issue) {
      systemPrompt = systemPrompt.replace("{{issue}}", JSON.stringify(issue));
    }
    console.log("systemPrompt", systemPrompt);

    // Initialize the stream
    const completionStream = await OpenAIStream(
      model as Models,
      messages,
      systemPrompt,
      temperature,
    );

    return new Response(completionStream.toReadableStream());
  } catch (error: any) {
    console.error(error);
    const message = (error?.message as string) || "Internal server error";
    return new Response(message, { status: 500 });
  }
};

export default handler;
