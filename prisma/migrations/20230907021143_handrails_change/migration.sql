/*
  Warnings:

  - You are about to drop the column `cmsHandrailSet` on the `CmsHandrailEndings` table. All the data in the column will be lost.
  - You are about to drop the column `cmsMechanismSet` on the `CmsHandrailEndings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CmsHandrailEndings" DROP COLUMN "cmsHandrailSet",
DROP COLUMN "cmsMechanismSet",
ADD COLUMN     "cmsHandrailId" TEXT,
ADD COLUMN     "cmsMechanismsId" TEXT;

-- AddForeignKey
ALTER TABLE "CmsHandrailEndings" ADD CONSTRAINT "CmsHandrailEndings_cmsMechanismsId_fkey" FOREIGN KEY ("cmsMechanismsId") REFERENCES "CmsMechanisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsHandrailEndings" ADD CONSTRAINT "CmsHandrailEndings_cmsHandrailId_fkey" FOREIGN KEY ("cmsHandrailId") REFERENCES "CmsHandrails"("id") ON DELETE SET NULL ON UPDATE CASCADE;
