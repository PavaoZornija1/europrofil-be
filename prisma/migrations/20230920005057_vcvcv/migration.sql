/*
  Warnings:

  - You are about to drop the column `cmsMechanismsId` on the `CmsFills` table. All the data in the column will be lost.
  - You are about to drop the column `cmsMechanismsId` on the `CmsHorizontalProfiles` table. All the data in the column will be lost.
  - You are about to drop the column `cmsMechanismsId` on the `CmsPvcProfiles` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CmsFills" DROP CONSTRAINT "CmsFills_cmsMechanismsId_fkey";

-- DropForeignKey
ALTER TABLE "CmsHorizontalProfiles" DROP CONSTRAINT "CmsHorizontalProfiles_cmsMechanismsId_fkey";

-- DropForeignKey
ALTER TABLE "CmsPvcProfiles" DROP CONSTRAINT "CmsPvcProfiles_cmsMechanismsId_fkey";

-- AlterTable
ALTER TABLE "CmsFills" DROP COLUMN "cmsMechanismsId";

-- AlterTable
ALTER TABLE "CmsHorizontalProfiles" DROP COLUMN "cmsMechanismsId";

-- AlterTable
ALTER TABLE "CmsPvcProfiles" DROP COLUMN "cmsMechanismsId";

-- CreateTable
CREATE TABLE "_CmsHorizontalProfilesToCmsMechanisms" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CmsMechanismsToCmsPvcProfiles" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CmsFillsToCmsMechanisms" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CmsHorizontalProfilesToCmsMechanisms_AB_unique" ON "_CmsHorizontalProfilesToCmsMechanisms"("A", "B");

-- CreateIndex
CREATE INDEX "_CmsHorizontalProfilesToCmsMechanisms_B_index" ON "_CmsHorizontalProfilesToCmsMechanisms"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CmsMechanismsToCmsPvcProfiles_AB_unique" ON "_CmsMechanismsToCmsPvcProfiles"("A", "B");

-- CreateIndex
CREATE INDEX "_CmsMechanismsToCmsPvcProfiles_B_index" ON "_CmsMechanismsToCmsPvcProfiles"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CmsFillsToCmsMechanisms_AB_unique" ON "_CmsFillsToCmsMechanisms"("A", "B");

-- CreateIndex
CREATE INDEX "_CmsFillsToCmsMechanisms_B_index" ON "_CmsFillsToCmsMechanisms"("B");

-- AddForeignKey
ALTER TABLE "_CmsHorizontalProfilesToCmsMechanisms" ADD CONSTRAINT "_CmsHorizontalProfilesToCmsMechanisms_A_fkey" FOREIGN KEY ("A") REFERENCES "CmsHorizontalProfiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CmsHorizontalProfilesToCmsMechanisms" ADD CONSTRAINT "_CmsHorizontalProfilesToCmsMechanisms_B_fkey" FOREIGN KEY ("B") REFERENCES "CmsMechanisms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CmsMechanismsToCmsPvcProfiles" ADD CONSTRAINT "_CmsMechanismsToCmsPvcProfiles_A_fkey" FOREIGN KEY ("A") REFERENCES "CmsMechanisms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CmsMechanismsToCmsPvcProfiles" ADD CONSTRAINT "_CmsMechanismsToCmsPvcProfiles_B_fkey" FOREIGN KEY ("B") REFERENCES "CmsPvcProfiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CmsFillsToCmsMechanisms" ADD CONSTRAINT "_CmsFillsToCmsMechanisms_A_fkey" FOREIGN KEY ("A") REFERENCES "CmsFills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CmsFillsToCmsMechanisms" ADD CONSTRAINT "_CmsFillsToCmsMechanisms_B_fkey" FOREIGN KEY ("B") REFERENCES "CmsMechanisms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
