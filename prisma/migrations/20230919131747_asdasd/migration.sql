/*
  Warnings:

  - You are about to drop the column `cmsAluFrameTypeId` on the `CmsAluFills` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CmsAluFills" DROP CONSTRAINT "CmsAluFills_cmsAluFrameTypeId_fkey";

-- AlterTable
ALTER TABLE "CmsAluFills" DROP COLUMN "cmsAluFrameTypeId",
ADD COLUMN     "cmsAluFrameTypesId" TEXT;

-- AddForeignKey
ALTER TABLE "CmsAluFills" ADD CONSTRAINT "CmsAluFills_cmsAluFrameTypesId_fkey" FOREIGN KEY ("cmsAluFrameTypesId") REFERENCES "CmsAluFrameTypes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
