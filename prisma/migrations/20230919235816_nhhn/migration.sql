/*
  Warnings:

  - You are about to drop the column `cmsMechanismsId` on the `CmsHandrailDecorations` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CmsHandrailDecorations" DROP CONSTRAINT "CmsHandrailDecorations_cmsMechanismsId_fkey";

-- AlterTable
ALTER TABLE "CmsHandrailDecorations" DROP COLUMN "cmsMechanismsId";

-- CreateTable
CREATE TABLE "_CmsHandrailDecorationsToCmsMechanisms" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CmsHandrailDecorationsToCmsMechanisms_AB_unique" ON "_CmsHandrailDecorationsToCmsMechanisms"("A", "B");

-- CreateIndex
CREATE INDEX "_CmsHandrailDecorationsToCmsMechanisms_B_index" ON "_CmsHandrailDecorationsToCmsMechanisms"("B");

-- AddForeignKey
ALTER TABLE "_CmsHandrailDecorationsToCmsMechanisms" ADD CONSTRAINT "_CmsHandrailDecorationsToCmsMechanisms_A_fkey" FOREIGN KEY ("A") REFERENCES "CmsHandrailDecorations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CmsHandrailDecorationsToCmsMechanisms" ADD CONSTRAINT "_CmsHandrailDecorationsToCmsMechanisms_B_fkey" FOREIGN KEY ("B") REFERENCES "CmsMechanisms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
