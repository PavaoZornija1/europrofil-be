/*
  Warnings:

  - You are about to drop the column `cmsMechanismsId` on the `CmsDoorMechanisms` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CmsDoorMechanisms" DROP CONSTRAINT "CmsDoorMechanisms_cmsMechanismsId_fkey";

-- AlterTable
ALTER TABLE "CmsDoorMechanisms" DROP COLUMN "cmsMechanismsId";

-- CreateTable
CREATE TABLE "_CmsDoorMechanismsToCmsMechanisms" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CmsDoorMechanismsToCmsMechanisms_AB_unique" ON "_CmsDoorMechanismsToCmsMechanisms"("A", "B");

-- CreateIndex
CREATE INDEX "_CmsDoorMechanismsToCmsMechanisms_B_index" ON "_CmsDoorMechanismsToCmsMechanisms"("B");

-- AddForeignKey
ALTER TABLE "_CmsDoorMechanismsToCmsMechanisms" ADD CONSTRAINT "_CmsDoorMechanismsToCmsMechanisms_A_fkey" FOREIGN KEY ("A") REFERENCES "CmsDoorMechanisms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CmsDoorMechanismsToCmsMechanisms" ADD CONSTRAINT "_CmsDoorMechanismsToCmsMechanisms_B_fkey" FOREIGN KEY ("B") REFERENCES "CmsMechanisms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
