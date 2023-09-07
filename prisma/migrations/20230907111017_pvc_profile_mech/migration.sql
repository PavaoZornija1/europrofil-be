/*
  Warnings:

  - You are about to drop the column `cmsMechanismSet` on the `CmsPvcProfiles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CmsPvcProfiles" DROP COLUMN "cmsMechanismSet",
ADD COLUMN     "cmsMechanismsId" TEXT;

-- AddForeignKey
ALTER TABLE "CmsPvcProfiles" ADD CONSTRAINT "CmsPvcProfiles_cmsMechanismsId_fkey" FOREIGN KEY ("cmsMechanismsId") REFERENCES "CmsMechanisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;
