/*
  Warnings:

  - You are about to alter the column `ordering` on the `CmsAluFrameTypes` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "CmsAluFrameTypes" ALTER COLUMN "ordering" SET DATA TYPE INTEGER;
