/*
  Warnings:

  - You are about to drop the column `cmsAluFrameTypeId` on the `CmsAluFills` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CmsAluFills" DROP CONSTRAINT "CmsAluFills_cmsAluFrameTypeId_fkey";

-- AlterTable
ALTER TABLE "CmsAluFills" DROP COLUMN "cmsAluFrameTypeId";

-- AlterTable
ALTER TABLE "CmsAluFrameTreatments" ADD COLUMN     "aluFrameTypeId" TEXT;

-- CreateTable
CREATE TABLE "_CmsAluFillsToCmsAluFrameTypes" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CmsAluFillsToCmsAluFrameTypes_AB_unique" ON "_CmsAluFillsToCmsAluFrameTypes"("A", "B");

-- CreateIndex
CREATE INDEX "_CmsAluFillsToCmsAluFrameTypes_B_index" ON "_CmsAluFillsToCmsAluFrameTypes"("B");

-- AddForeignKey
ALTER TABLE "CmsAluFrameTreatments" ADD CONSTRAINT "CmsAluFrameTreatments_aluFrameTypeId_fkey" FOREIGN KEY ("aluFrameTypeId") REFERENCES "CmsAluFrameTypes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CmsAluFillsToCmsAluFrameTypes" ADD CONSTRAINT "_CmsAluFillsToCmsAluFrameTypes_A_fkey" FOREIGN KEY ("A") REFERENCES "CmsAluFills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CmsAluFillsToCmsAluFrameTypes" ADD CONSTRAINT "_CmsAluFillsToCmsAluFrameTypes_B_fkey" FOREIGN KEY ("B") REFERENCES "CmsAluFrameTypes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
