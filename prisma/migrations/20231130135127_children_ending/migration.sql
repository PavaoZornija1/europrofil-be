-- AlterTable
ALTER TABLE "CmsOrders" ADD COLUMN     "cmsHandrailEndingChildId" TEXT;

-- AddForeignKey
ALTER TABLE "CmsOrders" ADD CONSTRAINT "CmsOrders_cmsHandrailEndingChildId_fkey" FOREIGN KEY ("cmsHandrailEndingChildId") REFERENCES "CmsHandrailEndings"("id") ON DELETE SET NULL ON UPDATE CASCADE;
