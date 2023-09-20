-- AlterTable
ALTER TABLE "CmsAluFrameTreatments" ADD COLUMN     "aluFrameTypeId" TEXT;

-- AddForeignKey
ALTER TABLE "CmsAluFrameTreatments" ADD CONSTRAINT "CmsAluFrameTreatments_aluFrameTypeId_fkey" FOREIGN KEY ("aluFrameTypeId") REFERENCES "CmsAluFrameTypes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
