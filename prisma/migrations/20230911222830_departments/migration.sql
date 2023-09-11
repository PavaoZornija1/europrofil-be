-- AlterTable
ALTER TABLE "CmsUsers" ADD COLUMN     "cmsDepartmentId" TEXT;

-- CreateTable
CREATE TABLE "CmsDepartments" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CmsDepartments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CmsUsers" ADD CONSTRAINT "CmsUsers_cmsDepartmentId_fkey" FOREIGN KEY ("cmsDepartmentId") REFERENCES "CmsDepartments"("id") ON DELETE SET NULL ON UPDATE CASCADE;
