/*
  Warnings:

  - You are about to drop the column `plugin` on the `choices` table. All the data in the column will be lost.
  - Added the required column `losingPlugin` to the `choices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `winningPlugin` to the `choices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "choices" DROP COLUMN "plugin",
ADD COLUMN     "losingPlugin" TEXT NOT NULL,
ADD COLUMN     "winningPlugin" TEXT NOT NULL;
