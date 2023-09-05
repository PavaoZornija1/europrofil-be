-- CreateEnum
CREATE TYPE "ApprovalStatus" AS ENUM ('Pending', 'Postponed', 'Rejected', 'Accepted');

-- CreateTable
CREATE TABLE "Acos" (
    "id" TEXT NOT NULL,
    "parentId" TEXT,
    "model" TEXT,
    "foreign_key" INTEGER,
    "alias" TEXT,
    "lft" INTEGER,
    "rght" INTEGER,

    CONSTRAINT "Acos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aros" (
    "id" TEXT NOT NULL,
    "parentId" TEXT,
    "model" TEXT,
    "foreign_key" INTEGER,
    "alias" TEXT,
    "lft" INTEGER,
    "rght" INTEGER,

    CONSTRAINT "Aros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT,
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Administrator" (
    "id" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "recoveryHash" TEXT,
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Administrator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsUsers" (
    "id" TEXT NOT NULL,
    "username" TEXT,
    "password" TEXT,
    "name" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "deliveryAddres" TEXT,
    "discountHardware" BOOLEAN NOT NULL DEFAULT false,
    "discountFillings" BOOLEAN NOT NULL DEFAULT false,
    "useDetailedBilling" BOOLEAN NOT NULL DEFAULT false,
    "lockedDiscount" BOOLEAN NOT NULL DEFAULT true,
    "note" TEXT,
    "orderCount" INTEGER NOT NULL DEFAULT 0,
    "accessCount" INTEGER NOT NULL DEFAULT 0,
    "approvalStatus" "ApprovalStatus" NOT NULL DEFAULT 'Pending',
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsUsers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Acos" ADD CONSTRAINT "Acos_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Acos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aros" ADD CONSTRAINT "Aros_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Aros"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Administrator" ADD CONSTRAINT "Administrator_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
