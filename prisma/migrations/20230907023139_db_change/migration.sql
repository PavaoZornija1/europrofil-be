/*
  Warnings:

  - You are about to drop the column `cmsMechanismSet` on the `CmsHandrailDecorations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CmsHandrailDecorations" DROP COLUMN "cmsMechanismSet",
ADD COLUMN     "cmsMechanismsId" TEXT;

-- AddForeignKey
ALTER TABLE "CmsHandrailDecorations" ADD CONSTRAINT "CmsHandrailDecorations_cmsMechanismsId_fkey" FOREIGN KEY ("cmsMechanismsId") REFERENCES "CmsMechanisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;
