-- AlterTable
ALTER TABLE "CmsSupportedProfiles" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "isActive" SET DEFAULT true;
