import { type NextApiRequest, type NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";
import { env } from "~/env";

type Repository = {
  id: number;
  node_id: string;
  full_name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
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

  // Append the query string to the URL
  const apiPath = new URL(`/api/repos`, serverUrl).toString();

  const response = await fetch(apiPath, {
    headers: {
      Authorization: `Bearer ${account.access_token}`,
    },
  });

  if (!response.ok) {
    console.log("Failed to fetch GitHub repos:", response.status);
    return res
      .status(500)
      .json({ message: "Failed to fetch GitHub repos:" + response.status });
  }

  const respositories: Repository[] = await response.json();
  const repos = respositories.map((repo) => repo.full_name);

  res.status(200).json({ message: "Success", repos });
}
