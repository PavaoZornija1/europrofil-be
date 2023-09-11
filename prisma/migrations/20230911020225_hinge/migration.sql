/*
  Warnings:

  - You are about to drop the column `cmsFrameTypeId` on the `CmsAluFrameTreatments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CmsAluFrameTreatments" DROP COLUMN "cmsFrameTypeId";

-- AlterTable
ALTER TABLE "CmsAluHinges" ADD COLUMN     "productCode" TEXT;
