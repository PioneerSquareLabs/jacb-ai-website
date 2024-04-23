import { type NextApiRequest, type NextApiResponse } from "next";
import { z } from "zod";
import { Models, sendGptRequestWithSchema } from "~/utils/openai_completion";

// Define a Zod schema for the expected response format
const IssueSchema = z.object({
  title: z.string(),
  body: z.string(),
});

// Type for the expected issue details parsed from the text block
type Issue = z.infer<typeof IssueSchema>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    if (req.method?.toLowerCase() !== "post") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { issueText } = req.body as { issueText: string };
    const userPrompt = `Extract the title and body from the following GitHub issue text block:
    \`\`\`
    ${issueText}
    \`\`\`
    It is critical that the body is a copy of ALL of the information from the issue, including all markdown formatting, code, examples, etc. 
    If the issue is a task to create a single new file, the title MUST be in the following format: "Create new file => /path/to/file/new_filename.ext".
    Your output MUST be in the format of a JSON object with the title and description fields that adheres to the IssueSchema. 
    `;

    const systemPrompt =
      "## Instructions\n" +
      "Your response MUST be in the format of a JSON object that adheres to the following Zod schema:\n" +
      "const IssueSchema = z.object({\n" +
      "  title: z.string(), // The title of the GitHub issue.\n" +
      "  body: z.string(), // Copy the ENTIRED DETAILED GitHub issue body as the description. Use Markdown.\n" +
      "});\n" +
      "Please provide ONLY an object with the title and description based on the GitHub issue text provided. If there is any extra information or if you do not provide an object that is parsable and passes Zod schema validation for the IssueSchema schema, the system will crash.\n";

    const temperature = 0.1;
    const model = Models.GPT4;

    const issueData = (await sendGptRequestWithSchema(
      userPrompt,
      systemPrompt,
      IssueSchema,
      3,
      model,
      temperature,
    )) as unknown as Issue;

    // Add the @jacob-ai-bot tag to the issue body
    issueData.body += "\n\n@jacob-ai-bot";

    const { title, body } = issueData;

    return res.status(200).json({ title, description: body });
  } catch (error: any) {
    console.error(error);
    const message = (error?.message as string) || "Internal server error";
    return res.status(500).json({ error: message });
  }
}
