-- CreateTable
CREATE TABLE "CmsAluBevelOptions" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "code" TEXT,
    "price" DECIMAL(65,30),

    CONSTRAINT "CmsAluBevelOptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsAluSandBlastingOptions" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "code" TEXT,
    "price" DECIMAL(65,30),

    CONSTRAINT "CmsAluSandBlastingOptions_pkey" PRIMARY KEY ("id")
);
