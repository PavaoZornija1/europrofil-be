/*
  Warnings:

  - You are about to drop the column `cmsFrameTypeSet` on the `CmsAluHandleProfiles` table. All the data in the column will be lost.
  - You are about to drop the column `cmsMechanismSet` on the `CmsFills` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CmsAluHandleProfiles" DROP COLUMN "cmsFrameTypeSet";

-- AlterTable
ALTER TABLE "CmsFills" DROP COLUMN "cmsMechanismSet";
