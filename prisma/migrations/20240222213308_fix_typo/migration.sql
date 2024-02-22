/*
  Warnings:

  - You are about to drop the column `refresh_token_expires_at` on the `accounts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "refresh_token_expires_at",
ADD COLUMN     "refresh_token_expires_in" INTEGER;
