-- AlterTable
ALTER TABLE "CmsUsers" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isAdministrator" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isEmployee" BOOLEAN NOT NULL DEFAULT false;
