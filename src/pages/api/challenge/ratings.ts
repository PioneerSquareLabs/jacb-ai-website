import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

/*
Here is a basic ELO rating formula:
Rn = Ro + K * (W - We)

Where:
Rn = new rating
Ro = old rating
K = weight of the competition (e.g., 30)
W = result of the match (1 for win, 0.5 for draw, 0 for loss)
We = expected result of the match
We = 1 / (1 + 10^((Rb - Ra) / 400))
*/

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    // Elo rating logic constants
    const K = 32;
    const defaultRating = 1000;

    // Initialize an object to hold the plugin scores for each snippetName
    const snippetEloScores: Record<string, any[]> = {
      "1_hero": [],
      "2_quote": [],
      "3_chart": [],
      "4_toast": [],
    };

    // Calculate Elo rating
    const calculateElo = (winnerRating: number, loserRating: number) => {
      const expectedScore = (otherRating: number) =>
        1 / (1 + Math.pow(10, (otherRating - winnerRating) / 400));
      const newWinnerRating =
        winnerRating + K * (1 - expectedScore(loserRating));
      const newLoserRating =
        loserRating + K * (0 - expectedScore(winnerRating));
      return [newWinnerRating, newLoserRating];
    };

    // Get all choices from the database
    const allChoices = await prisma.choice.findMany({
      where: { isActive: true },
    });

    // Initialize plugin ratings
    const pluginRatings: Record<string, number> = {
      anima: defaultRating,
      builder: defaultRating,
      codia: defaultRating,
      jacob: defaultRating,
      locofy: defaultRating,
      replit: defaultRating,
    };

    // Process each choice to update Elo ratings
    allChoices.forEach((choice) => {
      const [newWinnerRating, newLoserRating] = calculateElo(
        pluginRatings[choice.winningPlugin ?? ""] ?? defaultRating,
        pluginRatings[choice.losingPlugin ?? ""] ?? defaultRating,
      );
      pluginRatings[choice.winningPlugin] = newWinnerRating ?? defaultRating;
      pluginRatings[choice.losingPlugin] = newLoserRating ?? defaultRating;
    });

    // Assign ratings to snippet names
    for (const snippetName of Object.keys(snippetEloScores)) {
      for (const [pluginName, rating] of Object.entries(pluginRatings)) {
        // @ts-expect-error - snippetEloScores[snippetName] is an array
        snippetEloScores[snippetName].push({
          pluginName,
          rating,
        });
      }
    }

    // Convert the record into an array for the response
    const responseArray = Object.entries(snippetEloScores).map(
      ([snippetName, pluginScores]) => ({
        snippetName,
        pluginScores: pluginScores.sort((a, b) => b.rating - a.rating), // Sort plugin scores by rating
      }),
    );

    res.status(200).json(responseArray);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error calculating Elo ratings", error: error.message });
  }
}
