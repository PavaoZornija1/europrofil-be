/*
  Warnings:

  - You are about to drop the column `cmsMechanismSet` on the `CmsExtras` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CmsExtras" DROP COLUMN "cmsMechanismSet",
ADD COLUMN     "cmsMechanismsId" TEXT;

-- AddForeignKey
ALTER TABLE "CmsExtras" ADD CONSTRAINT "CmsExtras_cmsMechanismsId_fkey" FOREIGN KEY ("cmsMechanismsId") REFERENCES "CmsMechanisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;
