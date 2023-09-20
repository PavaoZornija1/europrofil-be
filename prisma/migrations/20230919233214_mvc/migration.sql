/*
  Warnings:

  - You are about to drop the column `cmsHandrailId` on the `CmsHandrailEndings` table. All the data in the column will be lost.
  - You are about to drop the column `cmsMechanismsId` on the `CmsHandrailEndings` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CmsHandrailEndings" DROP CONSTRAINT "CmsHandrailEndings_cmsHandrailId_fkey";

-- DropForeignKey
ALTER TABLE "CmsHandrailEndings" DROP CONSTRAINT "CmsHandrailEndings_cmsMechanismsId_fkey";

-- AlterTable
ALTER TABLE "CmsHandrailEndings" DROP COLUMN "cmsHandrailId",
DROP COLUMN "cmsMechanismsId";

-- CreateTable
CREATE TABLE "_CmsHandrailEndingsToCmsMechanisms" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CmsHandrailEndingsToCmsHandrails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CmsHandrailEndingsToCmsMechanisms_AB_unique" ON "_CmsHandrailEndingsToCmsMechanisms"("A", "B");

-- CreateIndex
CREATE INDEX "_CmsHandrailEndingsToCmsMechanisms_B_index" ON "_CmsHandrailEndingsToCmsMechanisms"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CmsHandrailEndingsToCmsHandrails_AB_unique" ON "_CmsHandrailEndingsToCmsHandrails"("A", "B");

-- CreateIndex
CREATE INDEX "_CmsHandrailEndingsToCmsHandrails_B_index" ON "_CmsHandrailEndingsToCmsHandrails"("B");

-- AddForeignKey
ALTER TABLE "_CmsHandrailEndingsToCmsMechanisms" ADD CONSTRAINT "_CmsHandrailEndingsToCmsMechanisms_A_fkey" FOREIGN KEY ("A") REFERENCES "CmsHandrailEndings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CmsHandrailEndingsToCmsMechanisms" ADD CONSTRAINT "_CmsHandrailEndingsToCmsMechanisms_B_fkey" FOREIGN KEY ("B") REFERENCES "CmsMechanisms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CmsHandrailEndingsToCmsHandrails" ADD CONSTRAINT "_CmsHandrailEndingsToCmsHandrails_A_fkey" FOREIGN KEY ("A") REFERENCES "CmsHandrailEndings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CmsHandrailEndingsToCmsHandrails" ADD CONSTRAINT "_CmsHandrailEndingsToCmsHandrails_B_fkey" FOREIGN KEY ("B") REFERENCES "CmsHandrails"("id") ON DELETE CASCADE ON UPDATE CASCADE;
