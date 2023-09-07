-- AlterTable
ALTER TABLE "CmsHandrails" ADD COLUMN     "cmsDoorMechanismsId" TEXT;

-- AddForeignKey
ALTER TABLE "CmsHandrails" ADD CONSTRAINT "CmsHandrails_cmsDoorMechanismsId_fkey" FOREIGN KEY ("cmsDoorMechanismsId") REFERENCES "CmsDoorMechanisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;
