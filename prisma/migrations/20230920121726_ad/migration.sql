/*
  Warnings:

  - You are about to drop the column `aluFrameTypeId` on the `CmsAluFrameTreatments` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CmsAluFrameTreatments" DROP CONSTRAINT "CmsAluFrameTreatments_aluFrameTypeId_fkey";

-- AlterTable
ALTER TABLE "CmsAluFrameTreatments" DROP COLUMN "aluFrameTypeId";
