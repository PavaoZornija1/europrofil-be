-- CreateTable
CREATE TABLE "CmsSettings" (
    "id" TEXT NOT NULL,
    "orderEmail" TEXT,
    "currency" TEXT,
    "vat" DECIMAL(65,30),
    "introText" TEXT,
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsSettings_pkey" PRIMARY KEY ("id")
);
