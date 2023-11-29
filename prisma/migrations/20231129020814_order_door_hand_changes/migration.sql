/*
  Warnings:

  - You are about to drop the column `doorHandrailLeft` on the `CmsOrderDoors` table. All the data in the column will be lost.
  - You are about to drop the column `doorHandrailRight` on the `CmsOrderDoors` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CmsOrderDoors" DROP COLUMN "doorHandrailLeft",
DROP COLUMN "doorHandrailRight",
ADD COLUMN     "doorHandrailLeftId" TEXT,
ADD COLUMN     "doorHandrailRightId" TEXT;

-- AddForeignKey
ALTER TABLE "CmsOrderDoors" ADD CONSTRAINT "CmsOrderDoors_doorHandrailLeftId_fkey" FOREIGN KEY ("doorHandrailLeftId") REFERENCES "CmsHandrails"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsOrderDoors" ADD CONSTRAINT "CmsOrderDoors_doorHandrailRightId_fkey" FOREIGN KEY ("doorHandrailRightId") REFERENCES "CmsHandrails"("id") ON DELETE SET NULL ON UPDATE CASCADE;
