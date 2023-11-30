/*
  Warnings:

  - You are about to drop the column `cmsOrderId` on the `CmsExtras` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CmsExtras" DROP CONSTRAINT "CmsExtras_cmsOrderId_fkey";

-- AlterTable
ALTER TABLE "CmsExtras" DROP COLUMN "cmsOrderId";
