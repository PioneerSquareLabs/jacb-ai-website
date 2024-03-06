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

const sortByRatingDesc = (a: any, b: any) => b.rating - a.rating;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const K = 32;
    const defaultRating = 1000;
    const snippetEloScores: Record<string, any[]> = {
      "1_hero": [],
      "2_quote": [],
      "3_chart": [],
      "4_toast": [],
    };

    const userIdParam = req.query.user_id as string | undefined;

    const calculateElo = (winnerRating: number, loserRating: number) => {
      const expectedScore = (otherRating: number) =>
        1 / (1 + Math.pow(10, (otherRating - winnerRating) / 400));
      const newWinnerRating =
        winnerRating + K * (1 - expectedScore(loserRating));
      const newLoserRating =
        loserRating + K * (0 - expectedScore(winnerRating));
      return [newWinnerRating, newLoserRating];
    };

    const allChoices = await prisma.choice.findMany({
      where: {
        isActive: true,
        ...(userIdParam ? { userId: userIdParam } : {}),
      },
    });

    const pluginRatings: Record<string, number> = {
      anima: defaultRating,
      builder: defaultRating,
      codia: defaultRating,
      jacob: defaultRating,
      locofy: defaultRating,
      replit: defaultRating,
      v0: defaultRating,
      human: defaultRating,
      screenshot: defaultRating,
    };

    allChoices.forEach((choice) => {
      const [newWinnerRating, newLoserRating] = calculateElo(
        pluginRatings[choice.winningPlugin ?? ""] ?? defaultRating,
        pluginRatings[choice.losingPlugin ?? ""] ?? defaultRating,
      );
      pluginRatings[choice.winningPlugin] = newWinnerRating ?? defaultRating;
      pluginRatings[choice.losingPlugin] = newLoserRating ?? defaultRating;
    });

    for (const snippetName of Object.keys(snippetEloScores)) {
      for (const [pluginName, rating] of Object.entries(pluginRatings)) {
        snippetEloScores[snippetName]?.push({
          pluginName,
          rating,
        });
      }
    }

    const snippetNameParam = req.query.snippet_name;

    let responseArray;
    if (snippetNameParam === "all") {
      const pluginScores = Object.entries(pluginRatings)
        .map(([pluginName, rating]) => ({
          pluginName,
          rating,
        }))
        .sort(sortByRatingDesc);
      responseArray = [
        {
          snippetName: "all",
          pluginScores,
        },
      ];
    } else if (snippetNameParam) {
      const pluginScores =
        // @ts-expect-error - snippetNameParam is not a number
        snippetEloScores[snippetNameParam]
          ?.map(({ pluginName, rating }: any) => ({
            pluginName,
            rating,
          }))
          .sort(sortByRatingDesc) ?? [];
      responseArray = [
        {
          snippetName: snippetNameParam,
          pluginScores,
        },
      ];
    } else {
      responseArray = Object.entries(snippetEloScores).map(
        ([snippetName, pluginScores]) => ({
          snippetName,
          pluginScores: pluginScores.sort(sortByRatingDesc),
        }),
      );
    }

    res.status(200).json(responseArray);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error calculating Elo ratings", error: error.message });
  }
}
