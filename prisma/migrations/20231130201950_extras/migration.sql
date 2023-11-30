-- AlterTable
ALTER TABLE "CmsExtras" ADD COLUMN     "cmsOrderId" TEXT;

-- AddForeignKey
ALTER TABLE "CmsExtras" ADD CONSTRAINT "CmsExtras_cmsOrderId_fkey" FOREIGN KEY ("cmsOrderId") REFERENCES "CmsOrders"("id") ON DELETE SET NULL ON UPDATE CASCADE;
