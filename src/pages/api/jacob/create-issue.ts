import { type NextApiRequest, type NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";
import { env } from "~/env";
import { type NewIssue } from "~/types";

interface PutSchema {
  issue: NewIssue;
}

export default async function createIssueHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "PUT") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const serverUrl = env.JACOB_SERVER_URL ?? "http://localhost:5173";

    const session = await getServerAuthSession({ req, res });

    if (!session) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    const account = await prisma.account.findFirst({
      where: {
        userId: session.user.id,
      },
    });

    if (!account?.access_token) {
      return res.status(404).json({ error: "GitHub access token not found" });
    }

    const { issue }: PutSchema = req.body;
    if (!issue) {
      return res.status(400).json({ error: "No issue provided" });
    }

    const apiPath = new URL("/api/createIssue", serverUrl).toString();
    const response = await fetch(apiPath, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${account.access_token}`,
      },
      body: JSON.stringify({ issue }),
    });

    if (!response.ok) {
      console.log("Failed to create GitHub issue:", response.status);
      return res
        .status(500)
        .json({ message: "Failed to create GitHub issue:" + response.status });
    }

    const responseData = await response.json();
    res
      .status(201)
      .json({ message: "Issue created successfully", issue: responseData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
