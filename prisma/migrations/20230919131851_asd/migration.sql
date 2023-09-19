/*
  Warnings:

  - You are about to drop the column `cmsAluFrameTypesId` on the `CmsAluFills` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CmsAluFills" DROP CONSTRAINT "CmsAluFills_cmsAluFrameTypesId_fkey";

-- AlterTable
ALTER TABLE "CmsAluFills" DROP COLUMN "cmsAluFrameTypesId",
ADD COLUMN     "cmsAluFrameTypeId" TEXT;

-- AddForeignKey
ALTER TABLE "CmsAluFills" ADD CONSTRAINT "CmsAluFills_cmsAluFrameTypeId_fkey" FOREIGN KEY ("cmsAluFrameTypeId") REFERENCES "CmsAluFrameTypes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
