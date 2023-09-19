-- AlterTable
ALTER TABLE "CmsAluFills" ADD COLUMN     "cmsAluFrameTypeId" TEXT;

-- AddForeignKey
ALTER TABLE "CmsAluFills" ADD CONSTRAINT "CmsAluFills_cmsAluFrameTypeId_fkey" FOREIGN KEY ("cmsAluFrameTypeId") REFERENCES "CmsAluFrameTypes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
