import { type NextApiRequest, type NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
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

  const response = await fetch("https://app.jacb.ai/api/repos", {
    headers: {
      Authorization: `Bearer ${account.access_token}`,
    },
  });

  if (!response.ok) {
    const data = await response.json();
    return res
      .status(500)
      .json({ error: "Failed to fetch GitHub repos:" + data.message });
  }

  const data = await response.json();

  res.status(200).json({ message: "Success", repos: data });
}
