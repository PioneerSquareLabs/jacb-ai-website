import { type Message } from "~/types";
import { Models } from "~/utils/openai_completion";
import { OpenAIStream } from "~/utils/openai_streaming";

export const config = {
  runtime: "edge",
};

const handler = async (req: Request): Promise<Response> => {
  try {
    const { messages } = (await req.json()) as {
      messages: Message[];
    };

    const systemPrompt = "You are a helpful friendly assistant.";
    const temperature = 0.3;
    const model = Models.GPT4;

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