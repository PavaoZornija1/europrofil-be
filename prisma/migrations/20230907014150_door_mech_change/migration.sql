/*
  Warnings:

  - You are about to drop the column `cmsMechanismSet` on the `CmsDoorMechanisms` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CmsDoorMechanisms" DROP COLUMN "cmsMechanismSet",
ADD COLUMN     "cmsMechanismsId" TEXT;

-- AddForeignKey
ALTER TABLE "CmsDoorMechanisms" ADD CONSTRAINT "CmsDoorMechanisms_cmsMechanismsId_fkey" FOREIGN KEY ("cmsMechanismsId") REFERENCES "CmsMechanisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;
