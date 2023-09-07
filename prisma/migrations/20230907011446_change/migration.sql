/*
  Warnings:

  - You are about to drop the column `cmsMechanismSet` on the `CmsHorizontalProfiles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CmsHorizontalProfiles" DROP COLUMN "cmsMechanismSet",
ADD COLUMN     "cmsMechanismsId" TEXT;

-- AddForeignKey
ALTER TABLE "CmsHorizontalProfiles" ADD CONSTRAINT "CmsHorizontalProfiles_cmsMechanismsId_fkey" FOREIGN KEY ("cmsMechanismsId") REFERENCES "CmsMechanisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;
