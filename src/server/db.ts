import { PrismaClient } from "@prisma/client";

import { env } from "~/env";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
    datasources: {
      db: {
        url: env.DATABASE_URL,
      },
    },
  });

prisma.$use(async (params, next) => {
  if (params.model && params.model === "Subscription" && params.action === "create") {
    // Ensure all subscriptions have a valid user and plan
    if (!params.args.data.userId || !params.args.data.planId) {
      throw new Error("Subscription must have a valid user and plan.");
    }
  }
  return next(params);
});

if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;