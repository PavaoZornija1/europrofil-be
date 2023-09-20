/*
  Warnings:

  - You are about to drop the column `cmsDoorMechanismsId` on the `CmsHandrails` table. All the data in the column will be lost.
  - You are about to drop the column `cmsMechanismsId` on the `CmsHandrails` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CmsHandrails" DROP CONSTRAINT "CmsHandrails_cmsDoorMechanismsId_fkey";

-- DropForeignKey
ALTER TABLE "CmsHandrails" DROP CONSTRAINT "CmsHandrails_cmsMechanismsId_fkey";

-- AlterTable
ALTER TABLE "CmsHandrails" DROP COLUMN "cmsDoorMechanismsId",
DROP COLUMN "cmsMechanismsId";

-- CreateTable
CREATE TABLE "_CmsDoorMechanismsToCmsHandrails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CmsHandrailsToCmsMechanisms" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CmsDoorMechanismsToCmsHandrails_AB_unique" ON "_CmsDoorMechanismsToCmsHandrails"("A", "B");

-- CreateIndex
CREATE INDEX "_CmsDoorMechanismsToCmsHandrails_B_index" ON "_CmsDoorMechanismsToCmsHandrails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CmsHandrailsToCmsMechanisms_AB_unique" ON "_CmsHandrailsToCmsMechanisms"("A", "B");

-- CreateIndex
CREATE INDEX "_CmsHandrailsToCmsMechanisms_B_index" ON "_CmsHandrailsToCmsMechanisms"("B");

-- AddForeignKey
ALTER TABLE "_CmsDoorMechanismsToCmsHandrails" ADD CONSTRAINT "_CmsDoorMechanismsToCmsHandrails_A_fkey" FOREIGN KEY ("A") REFERENCES "CmsDoorMechanisms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CmsDoorMechanismsToCmsHandrails" ADD CONSTRAINT "_CmsDoorMechanismsToCmsHandrails_B_fkey" FOREIGN KEY ("B") REFERENCES "CmsHandrails"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CmsHandrailsToCmsMechanisms" ADD CONSTRAINT "_CmsHandrailsToCmsMechanisms_A_fkey" FOREIGN KEY ("A") REFERENCES "CmsHandrails"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CmsHandrailsToCmsMechanisms" ADD CONSTRAINT "_CmsHandrailsToCmsMechanisms_B_fkey" FOREIGN KEY ("B") REFERENCES "CmsMechanisms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
