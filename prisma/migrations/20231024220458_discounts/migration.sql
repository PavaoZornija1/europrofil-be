/*
  Warnings:

  - The `discountHardware` column on the `CmsUsers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `discountFillings` column on the `CmsUsers` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "CmsUsers" DROP COLUMN "discountHardware",
ADD COLUMN     "discountHardware" DECIMAL(65,30),
DROP COLUMN "discountFillings",
ADD COLUMN     "discountFillings" DECIMAL(65,30);
