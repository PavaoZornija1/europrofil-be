/*
  Warnings:

  - You are about to drop the `_CmsHandrailDecorationsToCmsMechanisms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CmsHandrailDecorationsToCmsMechanisms" DROP CONSTRAINT "_CmsHandrailDecorationsToCmsMechanisms_A_fkey";

-- DropForeignKey
ALTER TABLE "_CmsHandrailDecorationsToCmsMechanisms" DROP CONSTRAINT "_CmsHandrailDecorationsToCmsMechanisms_B_fkey";

-- AlterTable
ALTER TABLE "CmsHandrailDecorations" ADD COLUMN     "cmsMechanismsId" TEXT;

-- DropTable
DROP TABLE "_CmsHandrailDecorationsToCmsMechanisms";

-- AddForeignKey
ALTER TABLE "CmsHandrailDecorations" ADD CONSTRAINT "CmsHandrailDecorations_cmsMechanismsId_fkey" FOREIGN KEY ("cmsMechanismsId") REFERENCES "CmsMechanisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;
