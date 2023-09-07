-- CreateTable
CREATE TABLE "CmsAluOrders" (
    "id" TEXT NOT NULL,
    "code" TEXT,
    "codeNumber" BIGINT,
    "codeMonth" BIGINT,
    "codeYear" BIGINT,
    "customerName" TEXT,
    "customerPhone" TEXT,
    "customerAddress" TEXT,
    "customerDeliveryAddress" TEXT,
    "customerDesiredDeliveryDate" TIMESTAMP(3),
    "customerInternalOrderNumber" TEXT,
    "customerNotes" TEXT,
    "customerDiscount" DECIMAL(65,30),
    "frameTypeCode" TEXT,
    "frameTypeName" TEXT,
    "frameTreatmentCode" TEXT,
    "frameTreatmentName" TEXT,
    "frameTreatmentPrice" DECIMAL(65,30),
    "frameTreatmentPriceIncrease" DECIMAL(65,30),
    "fillCode" TEXT,
    "fillName" TEXT,
    "fillPrice" DECIMAL(65,30),
    "fillPriceIncrease" DECIMAL(65,30),
    "cornerCoverProductCode" TEXT,
    "cornerCoverCount" BIGINT,
    "costVatRate" DECIMAL(65,30),
    "costBase" DECIMAL(65,30),
    "costVat" DECIMAL(65,30),
    "costTotal" DECIMAL(65,30),
    "costPerMeterBase" DECIMAL(65,30),
    "costPerMeterTotal" DECIMAL(65,30),
    "totalFrameCount" BIGINT,
    "totalFrameLength" DECIMAL(65,30),
    "totalFillArea" DECIMAL(65,30),
    "orderDate" TIMESTAMP(3),
    "jsonConfiguration" TEXT,
    "jsonOrder" TEXT,
    "jsonHeader" TEXT,
    "jsonFronts" TEXT,
    "jsonCost" TEXT,
    "confirmed" TEXT,
    "confirmedOn" TIMESTAMP(3),
    "isHandled" BOOLEAN NOT NULL DEFAULT false,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsAluOrders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsAluFrameTreatments" (
    "id" TEXT NOT NULL,
    "cmsFrameTypeId" TEXT,
    "name" TEXT,
    "productCode" TEXT,
    "customColorAvailable" BOOLEAN NOT NULL DEFAULT false,
    "pricePerMeter" DECIMAL(65,30),
    "priceIncrease" DECIMAL(65,30),
    "ordering" BIGINT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsAluFrameTreatments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsAluFrameTypes" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "productCode" TEXT,
    "detailsLink" TEXT,
    "fillingWidthReduction" DECIMAL(65,30),
    "fillingHeightReduction" DECIMAL(65,30),
    "handleHoleInlet" DECIMAL(65,30),
    "handleHoleOffset" DECIMAL(65,30),
    "requiresKp" BOOLEAN NOT NULL DEFAULT false,
    "requiresPvc" BOOLEAN NOT NULL DEFAULT false,
    "requiresSpecialHinges" BOOLEAN NOT NULL DEFAULT false,
    "pricePerMeter" DECIMAL(65,30),
    "priceIncrease" DECIMAL(65,30),
    "corverCoverPrice" DECIMAL(65,30),
    "corverCoverProductCode" TEXT,
    "ordering" BIGINT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsAluFrameTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsAluHandleHoles" (
    "id" TEXT NOT NULL,
    "length" DECIMAL(65,30),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsAluHandleHoles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsAluFoils" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "productCode" TEXT,
    "color" TEXT,
    "ralCode" TEXT,
    "pricePerSquareMeter" DECIMAL(65,30),
    "priceIncrease" DECIMAL(65,30),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsAluFoils_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsAluLiftSupports" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "productCode" TEXT,
    "pricePerUnit" DECIMAL(65,30),
    "cmsFrameTypeSet" TEXT,
    "description" TEXT,
    "ordering" BIGINT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsAluLiftSupports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsAluHandleProfiles" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "productCode" TEXT,
    "cmsFrameTypeSet" TEXT,
    "pricePerMeter" DECIMAL(65,30),
    "priceIncrease" DECIMAL(65,30),
    "frameLengthReduction" DECIMAL(65,30),
    "customColorAvailable" BOOLEAN NOT NULL DEFAULT true,
    "ordering" BIGINT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsAluHandleProfiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsAluFills" (
    "id" TEXT NOT NULL,
    "parentId" TEXT,
    "name" TEXT,
    "productCode" TEXT,
    "cmsFrameTypeSet" TEXT,
    "foilAvailable" BOOLEAN NOT NULL DEFAULT true,
    "pricePerSquareMeter" DECIMAL(65,30),
    "priceIncrease" DECIMAL(65,30),
    "lft" DECIMAL(65,30),
    "rght" DECIMAL(65,30),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsAluFills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsAluHinges" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "cmsHingeTypeId" TEXT,

    CONSTRAINT "CmsAluHinges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsHingeTypes" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "code" TEXT,
    "ordering" BIGINT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsHingeTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsAluSettings" (
    "id" TEXT NOT NULL,
    "iso9001DocumentName" TEXT,
    "orderEmail" TEXT,
    "currency" TEXT,
    "vat" DECIMAL(65,30),
    "introText" TEXT,
    "handleHolePrice" DECIMAL(65,30),
    "hingeHolePrice" DECIMAL(65,30),
    "hingeHoleWithInstallationPrice" DECIMAL(65,30),
    "lockHolePrice" DECIMAL(65,30),
    "serviceCostPercentage" DECIMAL(65,30),
    "serviceCostPerFrame" DECIMAL(65,30),
    "serviceCostPerMeter" DECIMAL(65,30),
    "kpPricePerMeter" DECIMAL(65,30),
    "bevel5mmPricePerMeter" DECIMAL(65,30),
    "bevel10mmPricePerMeter" DECIMAL(65,30),
    "bevel15mmPricePerMeter" DECIMAL(65,30),
    "bevel20mmPricePerMeter" DECIMAL(65,30),
    "sandblastingPricePerMeterSquared" DECIMAL(65,30),
    "sandblastingWithFoilPricePerMeterSquared" DECIMAL(65,30),
    "temperingGlassPerMeterSquared" DECIMAL(65,30),
    "protectiveFoilPerMeterSquared" DECIMAL(65,30),
    "decorativeFoilPerMeterSquared" DECIMAL(65,30),
    "motiveFoilPerMeterSquared" DECIMAL(65,30),
    "sandblastedFoilPerMeterSquared" DECIMAL(65,30),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsAluSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AluUploads" (
    "id" TEXT NOT NULL,
    "locale" TEXT,
    "file" TEXT,
    "filename" TEXT,
    "path" TEXT,
    "filesize" DECIMAL(65,30),
    "extension" TEXT,
    "mimetype" TEXT,
    "width" BIGINT,
    "height" BIGINT,
    "isImage" BOOLEAN,
    "extra" TEXT,
    "alt" TEXT,
    "source" TEXT,
    "meta" TEXT,
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AluUploads_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CmsAluFills" ADD CONSTRAINT "CmsAluFills_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "CmsAluFills"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsAluHinges" ADD CONSTRAINT "CmsAluHinges_cmsHingeTypeId_fkey" FOREIGN KEY ("cmsHingeTypeId") REFERENCES "CmsHingeTypes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
