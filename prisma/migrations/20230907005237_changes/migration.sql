-- AlterTable
ALTER TABLE "CmsHorizontalProfiles" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "isActive" SET DEFAULT true;
