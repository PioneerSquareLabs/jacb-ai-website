import { type NextApiRequest, type NextApiResponse } from "next";
import { dashboardPlanStatusSystem } from "~/prompts/dashboard_prompts";
import { type Plan, TaskStatus, type Task } from "~/types";
import { z } from "zod";
import { Models, sendGptRequestWithSchema } from "~/utils/openai_completion";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    // if it's not a post request, return a 405
    if (req.method?.toLowerCase() !== "post") {
      return res.status(405).json({ error: "Method not allowed" });
    }
    const { task } = req.body as { task: Task };
    if (!task?.plan?.length) {
      throw new Error("Task or plan not found");
    }
    const lastPlanStep: Partial<Plan> = task.plan.slice(-1)[0] ?? {
      id: "0",
      position: 0,
    };
    const currentPlan = task.plan[task.currentPlanStep ?? 0];

    const systemPrompt = dashboardPlanStatusSystem;
    const userPrompt = `## Plan \n\n\`\`\`json${JSON.stringify(task.plan)}\`\`\`\n
    ## Task Details\n\n
    ${
      task.plan?.length && task.status === TaskStatus.DONE
        ? `The task is complete! Be sure to set the isMostRecentStepCompleted field to true.\n`
        : `The task is not complete. Here are the details:\n
    - Task Name: ${task.name}\n
    - Status: ${task.status}\n
    - GitHub Issue Title: ${task.issue?.title ?? "IMPORTANT! No GitHub Issue Has Been Created Yet"}\n
    - Ten most recent terminal commands: ${task.commands
      ?.slice(-10)
      .map((command) => command.command)
      .join(", ")}\n
    - Code Files Created: ${task.codeFiles?.length ? task.codeFiles?.map((codeFile) => codeFile.fileName).join(", ") : "IMPORTANT! No Code Files Have Been Written Yet"}\n
    - GitHub Pull Request Title: ${task.pullRequest?.title ?? "IMPORTANT! No Pull Request Has Been Created Yet"}\n
    
    ## Most Recent Plan Step - Your Task is to determine if this step is complete\n
      **Step ${currentPlan?.position ?? 0}: ${currentPlan?.title ?? "No plan step found"} - ${currentPlan?.description ?? "No description found"}**
    

    ## Instructions
    Your response MUST be in the format of a JSON object that adheres to the following Zod schema:
    const PlanStatusSchema = z.object({
        statusDescription: z.string(), // a concise, useful, professional but semi-casual non-obvious human-readable description of the current status of the plan. Act as a junior developer reporting status to your lead. Don't give a rationale for why this is your status, just tell the user what you've done (without rationale!). Then tell the user in plain english what specifically you plan to do next and why you're doing that next. If the job is complete, don't say what you're doing next, but let them know you are done! Respond in first person. This should only be 1-2 sentences.
        isMostRecentStepCompleted: z.boolean(), // Based ONLY on the information provided and your expert judgment, determine if the most recent step has been completed or not.
      });
    `
    }`;
    const temperature = 0.4;
    const model = Models.GPT4;

    const PlanStatusSchema = z.object({
      statusDescription: z.string().nullable().optional(),
      isMostRecentStepCompleted: z.boolean().nullable().optional(),
    });

    type PlanStatus = z.infer<typeof PlanStatusSchema>;

    // Initialize the stream
    const planStatus = (await sendGptRequestWithSchema(
      userPrompt,
      systemPrompt,
      PlanStatusSchema,
      3,
      model,
      temperature,
    )) as PlanStatus;

    const { isMostRecentStepCompleted, statusDescription } = planStatus;

    // Update the task with the last step completed. Mark every step before it as complete
    // First find the last step completed using the lastStepCompleted id
    const lastStepCompletedIndex = task.plan.findIndex(
      (step) => step.position === task.currentPlanStep ?? 0,
    );
    if (lastStepCompletedIndex === -1) {
      throw new Error("Last step completed not found");
    }
    let currentPlanStep = task.currentPlanStep ?? 0;
    if (isMostRecentStepCompleted) {
      currentPlanStep += 1;
    }

    currentPlanStep = Math.min(currentPlanStep, lastPlanStep.position ?? 0);

    return res
      .status(200)
      .json({ currentPlanStep, statusDescription, isMostRecentStepCompleted });
  } catch (error: any) {
    console.error(error);
    const message = (error?.message as string) || "Internal server error";
    return res.status(500).json({ error: message });
  }
}
