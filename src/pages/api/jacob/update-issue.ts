import { type NextApiRequest, type NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";
import { env } from "~/env";
import { type Issue } from "~/types";

interface PostSchema {
  issue: Issue;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const serverUrl = env.JACOB_SERVER_URL ?? "http://localhost:5173";

    const session = await getServerAuthSession({ req, res });

    if (!session) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    // Retrieve the access token from the database
    const account = await prisma.account.findFirst({
      where: {
        userId: session.user.id,
      },
    });

    if (!account?.access_token) {
      return res.status(404).json({ error: "GitHub access token not found" });
    }

    // Get the issue from the request body
    const { issue }: PostSchema = req.body;
    if (!issue) {
      return res.status(400).json({ message: "No issue provided" });
    }

    // Post the issue to the /api/updateIssue endpoint
    const apiPath = new URL("/api/updateIssue", serverUrl).toString();
    const response = await fetch(apiPath, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${account.access_token}`,
      },
      body: JSON.stringify({ issue }),
    });

    if (!response.ok) {
      console.log("Failed to update GitHub issue:", response.status);
      return res
        .status(500)
        .json({ message: "Failed to update GitHub issue:" + response.status });
    }

    res.status(200).json({ message: "Success", issue });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
