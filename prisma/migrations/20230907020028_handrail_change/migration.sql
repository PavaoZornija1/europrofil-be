/*
  Warnings:

  - You are about to drop the column `cmsDoorMechanismSet` on the `CmsHandrails` table. All the data in the column will be lost.
  - You are about to drop the column `cmsMechanismSet` on the `CmsHandrails` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CmsHandrails" DROP COLUMN "cmsDoorMechanismSet",
DROP COLUMN "cmsMechanismSet",
ADD COLUMN     "cmsMechanismsId" TEXT;

-- AddForeignKey
ALTER TABLE "CmsHandrails" ADD CONSTRAINT "CmsHandrails_cmsMechanismsId_fkey" FOREIGN KEY ("cmsMechanismsId") REFERENCES "CmsMechanisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;
