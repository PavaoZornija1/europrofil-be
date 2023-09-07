-- AlterTable
ALTER TABLE "CmsFills" ADD COLUMN     "cmsMechanismsId" TEXT;

-- AddForeignKey
ALTER TABLE "CmsFills" ADD CONSTRAINT "CmsFills_cmsMechanismsId_fkey" FOREIGN KEY ("cmsMechanismsId") REFERENCES "CmsMechanisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;
