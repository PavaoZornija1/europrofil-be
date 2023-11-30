-- AlterTable
ALTER TABLE "CmsOrders" ADD COLUMN     "cmsPvcProfileId" TEXT;

-- AddForeignKey
ALTER TABLE "CmsOrders" ADD CONSTRAINT "CmsOrders_cmsPvcProfileId_fkey" FOREIGN KEY ("cmsPvcProfileId") REFERENCES "CmsPvcProfiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
