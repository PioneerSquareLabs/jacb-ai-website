import { type NextApiRequest, type NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";
import { env } from "~/env";
import { type Issue } from "~/types";

interface QueryParams {
  repo?: string;
  issues?: string;
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
    // pass the query params to the server
    const { repo, issues: _issues }: QueryParams = req.query;
    const params = new URLSearchParams({
      repo: repo ?? "",
      issues: _issues ?? "",
    });

    // Append the query string to the URL
    const apiPath = new URL(
      `/api/extractedIssues?${params.toString()}`,
      serverUrl,
    ).toString();

    const response = await fetch(apiPath, {
      headers: {
        Authorization: `Bearer ${account.access_token}`,
      },
    });

    if (!response.ok) {
      console.log("Failed to fetch GitHub issues:", response.status);
      return res
        .status(500)
        .json({ message: "Failed to fetch GitHub issues:" + response.status });
    }

    const issues: Issue[] = await response.json();

    res.status(200).json({ message: "Success", issues });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
