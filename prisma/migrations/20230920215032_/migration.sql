/*
  Warnings:

  - You are about to drop the column `cmsFrameTypeSet` on the `CmsAluLiftSupports` table. All the data in the column will be lost.
  - You are about to drop the column `entityId` on the `Files` table. All the data in the column will be lost.
  - You are about to drop the column `entityType` on the `Files` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[mechanismPicId]` on the table `Files` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[mechanismThinningPicId]` on the table `Files` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[horizontalProfilePicId]` on the table `Files` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[handrailPicId]` on the table `Files` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[aluFrameTypePicId]` on the table `Files` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[aluFrameTypeTechnicalPicId]` on the table `Files` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[aluHingeId]` on the table `Files` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[aluLiftSupportId]` on the table `Files` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "CmsAluLiftSupports" DROP COLUMN "cmsFrameTypeSet";

-- AlterTable
ALTER TABLE "Files" DROP COLUMN "entityId",
DROP COLUMN "entityType",
ADD COLUMN     "aluFillId" TEXT,
ADD COLUMN     "aluFrameTreatmentsGalleryId" TEXT,
ADD COLUMN     "aluFrameTypeGalleryId" TEXT,
ADD COLUMN     "aluFrameTypePicId" TEXT,
ADD COLUMN     "aluFrameTypeTechnicalPicId" TEXT,
ADD COLUMN     "aluHingeId" TEXT,
ADD COLUMN     "aluLiftSupportId" TEXT,
ADD COLUMN     "handrailPicId" TEXT,
ADD COLUMN     "horizontalProfilePicId" TEXT,
ADD COLUMN     "mechanismPicId" TEXT,
ADD COLUMN     "mechanismThinningPicId" TEXT;

-- CreateTable
CREATE TABLE "_CmsAluFrameTypesToCmsAluLiftSupports" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CmsAluFrameTypesToCmsAluLiftSupports_AB_unique" ON "_CmsAluFrameTypesToCmsAluLiftSupports"("A", "B");

-- CreateIndex
CREATE INDEX "_CmsAluFrameTypesToCmsAluLiftSupports_B_index" ON "_CmsAluFrameTypesToCmsAluLiftSupports"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Files_mechanismPicId_key" ON "Files"("mechanismPicId");

-- CreateIndex
CREATE UNIQUE INDEX "Files_mechanismThinningPicId_key" ON "Files"("mechanismThinningPicId");

-- CreateIndex
CREATE UNIQUE INDEX "Files_horizontalProfilePicId_key" ON "Files"("horizontalProfilePicId");

-- CreateIndex
CREATE UNIQUE INDEX "Files_handrailPicId_key" ON "Files"("handrailPicId");

-- CreateIndex
CREATE UNIQUE INDEX "Files_aluFrameTypePicId_key" ON "Files"("aluFrameTypePicId");

-- CreateIndex
CREATE UNIQUE INDEX "Files_aluFrameTypeTechnicalPicId_key" ON "Files"("aluFrameTypeTechnicalPicId");

-- CreateIndex
CREATE UNIQUE INDEX "Files_aluHingeId_key" ON "Files"("aluHingeId");

-- CreateIndex
CREATE UNIQUE INDEX "Files_aluLiftSupportId_key" ON "Files"("aluLiftSupportId");

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_mechanismPicId_fkey" FOREIGN KEY ("mechanismPicId") REFERENCES "CmsMechanisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_mechanismThinningPicId_fkey" FOREIGN KEY ("mechanismThinningPicId") REFERENCES "CmsMechanisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_horizontalProfilePicId_fkey" FOREIGN KEY ("horizontalProfilePicId") REFERENCES "CmsHorizontalProfiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_handrailPicId_fkey" FOREIGN KEY ("handrailPicId") REFERENCES "CmsHandrails"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_aluFrameTypePicId_fkey" FOREIGN KEY ("aluFrameTypePicId") REFERENCES "CmsAluFrameTypes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_aluFrameTypeTechnicalPicId_fkey" FOREIGN KEY ("aluFrameTypeTechnicalPicId") REFERENCES "CmsAluFrameTypes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_aluFrameTypeGalleryId_fkey" FOREIGN KEY ("aluFrameTypeGalleryId") REFERENCES "CmsAluFrameTypes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_aluFrameTreatmentsGalleryId_fkey" FOREIGN KEY ("aluFrameTreatmentsGalleryId") REFERENCES "CmsAluFrameTreatments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_aluFillId_fkey" FOREIGN KEY ("aluFillId") REFERENCES "CmsAluFills"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_aluHingeId_fkey" FOREIGN KEY ("aluHingeId") REFERENCES "CmsAluHinges"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_aluLiftSupportId_fkey" FOREIGN KEY ("aluLiftSupportId") REFERENCES "CmsAluLiftSupports"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CmsAluFrameTypesToCmsAluLiftSupports" ADD CONSTRAINT "_CmsAluFrameTypesToCmsAluLiftSupports_A_fkey" FOREIGN KEY ("A") REFERENCES "CmsAluFrameTypes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CmsAluFrameTypesToCmsAluLiftSupports" ADD CONSTRAINT "_CmsAluFrameTypesToCmsAluLiftSupports_B_fkey" FOREIGN KEY ("B") REFERENCES "CmsAluLiftSupports"("id") ON DELETE CASCADE ON UPDATE CASCADE;
