import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { userId, snippetName, winningPlugin, losingPlugin } = req.body;

    try {
      // Save the choice to the database using Prisma
      const choice = await prisma.choice.create({
        data: {
          userId, // Optional, can be null
          snippetName,
          winningPlugin,
          losingPlugin,
        },
      });

      res.status(200).json({ message: "Choice captured successfully", choice });
    } catch (error) {
      console.error("Failed to save choice", error);
      res.status(500).json({ message: "Failed to save choice" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
