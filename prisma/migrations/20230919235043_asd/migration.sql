/*
  Warnings:

  - You are about to drop the column `cmsMechanismsId` on the `CmsExtras` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CmsExtras" DROP CONSTRAINT "CmsExtras_cmsMechanismsId_fkey";

-- AlterTable
ALTER TABLE "CmsExtras" DROP COLUMN "cmsMechanismsId";

-- CreateTable
CREATE TABLE "_CmsExtrasToCmsMechanisms" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CmsExtrasToCmsMechanisms_AB_unique" ON "_CmsExtrasToCmsMechanisms"("A", "B");

-- CreateIndex
CREATE INDEX "_CmsExtrasToCmsMechanisms_B_index" ON "_CmsExtrasToCmsMechanisms"("B");

-- AddForeignKey
ALTER TABLE "_CmsExtrasToCmsMechanisms" ADD CONSTRAINT "_CmsExtrasToCmsMechanisms_A_fkey" FOREIGN KEY ("A") REFERENCES "CmsExtras"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CmsExtrasToCmsMechanisms" ADD CONSTRAINT "_CmsExtrasToCmsMechanisms_B_fkey" FOREIGN KEY ("B") REFERENCES "CmsMechanisms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
