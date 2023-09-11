/*
  Warnings:

  - You are about to alter the column `width` on the `AluUploads` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `height` on the `AluUploads` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `ordering` on the `CmsAluFrameTreatments` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `ordering` on the `CmsAluLiftSupports` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `codeNumber` on the `CmsAluOrders` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `codeMonth` on the `CmsAluOrders` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `codeYear` on the `CmsAluOrders` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `cornerCoverCount` on the `CmsAluOrders` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `totalFrameCount` on the `CmsAluOrders` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `lft` on the `CmsFills` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `rght` on the `CmsFills` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `ordering` on the `CmsHingeTypes` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `ordering` on the `CmsMechanisms` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `openingDoors` on the `CmsOrders` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `totalDeceleratorPairs` on the `CmsOrders` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "AluUploads" ALTER COLUMN "width" SET DATA TYPE INTEGER,
ALTER COLUMN "height" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "CmsAluFrameTreatments" ALTER COLUMN "ordering" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "CmsAluLiftSupports" ALTER COLUMN "ordering" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "CmsAluOrders" ALTER COLUMN "codeNumber" SET DATA TYPE INTEGER,
ALTER COLUMN "codeMonth" SET DATA TYPE INTEGER,
ALTER COLUMN "codeYear" SET DATA TYPE INTEGER,
ALTER COLUMN "cornerCoverCount" SET DATA TYPE INTEGER,
ALTER COLUMN "totalFrameCount" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "CmsFills" ALTER COLUMN "lft" SET DATA TYPE INTEGER,
ALTER COLUMN "rght" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "CmsHingeTypes" ALTER COLUMN "ordering" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "CmsMechanisms" ALTER COLUMN "ordering" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "CmsOrders" ALTER COLUMN "openingDoors" SET DATA TYPE INTEGER,
ALTER COLUMN "totalDeceleratorPairs" SET DATA TYPE INTEGER;
