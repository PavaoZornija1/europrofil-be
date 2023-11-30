-- AlterTable
ALTER TABLE "CmsOrders" ADD COLUMN     "cmsSupportedDecorationId" TEXT;

-- AddForeignKey
ALTER TABLE "CmsOrders" ADD CONSTRAINT "CmsOrders_cmsSupportedDecorationId_fkey" FOREIGN KEY ("cmsSupportedDecorationId") REFERENCES "CmsSupportedDecorations"("id") ON DELETE SET NULL ON UPDATE CASCADE;
