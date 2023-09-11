/*
  Warnings:

  - You are about to alter the column `ordering` on the `CmsAluHandleProfiles` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `numberOfFields` on the `CmsOrderDoors` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "CmsAluHandleProfiles" ALTER COLUMN "ordering" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "CmsOrderDoors" ALTER COLUMN "numberOfFields" SET DATA TYPE INTEGER;
