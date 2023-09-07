-- AlterTable
ALTER TABLE "CmsDoorMechanisms" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "CmsOrders" ADD COLUMN     "cmsHandrailDecorationId" TEXT,
ADD COLUMN     "cmsHandrailEndingId" TEXT,
ADD COLUMN     "cmsHandrailId" TEXT,
ADD COLUMN     "cmsHorizontalProfileid" TEXT,
ADD COLUMN     "cmsMechanismId" TEXT,
ADD COLUMN     "handrailDecorationCustomColor" TEXT,
ALTER COLUMN "firstHandrailEnding" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "secondHandrailEnding" SET DATA TYPE DECIMAL(65,30);

-- CreateTable
CREATE TABLE "CmsHorizontalProfiles" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "cmsMechanismSet" TEXT,
    "constantsThickness" DECIMAL(65,30),
    "constantsGlassGap" DECIMAL(65,30),
    "constantsWoodGap" DECIMAL(65,30),
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsHorizontalProfiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsOrderDoors" (
    "id" TEXT NOT NULL,
    "cmsOrderId" TEXT,
    "doorWidthValue" DECIMAL(65,30) NOT NULL,
    "doorWidthManual" DECIMAL(65,30) NOT NULL,
    "doorHandrailLeft" DECIMAL(65,30) NOT NULL,
    "doorHandrailRight" DECIMAL(65,30) NOT NULL,
    "cmsDoorMechanismId" TEXT,
    "confectionOnly" BOOLEAN NOT NULL,
    "forceHeave" BOOLEAN NOT NULL,
    "profileLength" DECIMAL(65,30) NOT NULL,
    "fillWidthGlass" DECIMAL(65,30) NOT NULL,
    "fillWidthWood" DECIMAL(65,30) NOT NULL,
    "deceleratorsLeft" TEXT,
    "deceleratorsRight" TEXT,
    "numberOfFields" BIGINT NOT NULL,
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsOrderDoors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsSupportedProfiles" (
    "id" TEXT NOT NULL,
    "cmsHorizontalProfileId" TEXT,
    "cmsHandrailDecorationId" TEXT,
    "price" DECIMAL(65,30),
    "productCode" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsSupportedProfiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsHandrailDecorations" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "cmsMechanismSet" TEXT,
    "customColorAvailable" BOOLEAN NOT NULL,
    "isSilverGloss" BOOLEAN NOT NULL,
    "priceTopRailSingle" DECIMAL(65,30) NOT NULL,
    "priceTopRailDouble" DECIMAL(65,30) NOT NULL,
    "priceBottomRailSingle" DECIMAL(65,30) NOT NULL,
    "priceBottomRailDouble" DECIMAL(65,30) NOT NULL,
    "priceDivider" DECIMAL(65,30) NOT NULL,
    "priceTopProfile" DECIMAL(65,30) NOT NULL,
    "priceBottomProfile" DECIMAL(65,30) NOT NULL,
    "productCodeTopRailSingle" TEXT,
    "productCodeBottomRailSingle" TEXT,
    "productCodeTopRailDouble" TEXT,
    "productCodeBottomRailDouble" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsHandrailDecorations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsSupportedDecorations" (
    "id" TEXT NOT NULL,
    "cmsHandrailId" TEXT,
    "cmsHandrailDecorationId" TEXT,
    "price" DECIMAL(65,30) NOT NULL,
    "productCode" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsSupportedDecorations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsHandrailEndings" (
    "id" TEXT NOT NULL,
    "parentId" TEXT,
    "name" TEXT,
    "productCode" TEXT,
    "cmsMechanismSet" TEXT,
    "pricePerM" DECIMAL(65,30) NOT NULL,
    "cmsHandrailSet" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsHandrailEndings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsMechanisms" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "productCode" TEXT,
    "constantsHeight" DECIMAL(65,30) NOT NULL,
    "constantsHandrailHeight" DECIMAL(65,30) NOT NULL,
    "constantsDeceleratorHeight" DECIMAL(65,30) NOT NULL,
    "constantsProfileTopWood" DECIMAL(65,30) NOT NULL,
    "constantsProfileTopGlass" DECIMAL(65,30) NOT NULL,
    "constantsProfileBottomWood" DECIMAL(65,30) NOT NULL,
    "constantsProfileBottomGlass" DECIMAL(65,30) NOT NULL,
    "constantsSeparatorThickness" DECIMAL(65,30) NOT NULL,
    "constantsSeparatorGlassGap" DECIMAL(65,30) NOT NULL,
    "constantsSeparatorWoodGap" DECIMAL(65,30) NOT NULL,
    "pvcProfileAvailable" BOOLEAN NOT NULL,
    "thinningAvailable" BOOLEAN NOT NULL,
    "decelaratorSupport" BOOLEAN NOT NULL,
    "differentHandrails" BOOLEAN NOT NULL,
    "withoutTopAndBottomProfiles" BOOLEAN NOT NULL,
    "loadMin" DECIMAL(65,30) NOT NULL,
    "loadMax" DECIMAL(65,30) NOT NULL,
    "widthMin" DECIMAL(65,30) NOT NULL,
    "widthMax" DECIMAL(65,30) NOT NULL,
    "heightMin" DECIMAL(65,30) NOT NULL,
    "heightMax" DECIMAL(65,30) NOT NULL,
    "fillThicknessMin" DECIMAL(65,30) NOT NULL,
    "fillThicknessMax" DECIMAL(65,30) NOT NULL,
    "fillTypes" TEXT,
    "detailsLink" TEXT,
    "confectionPricePerDoor" DECIMAL(65,30),
    "installationPricePerDoor" DECIMAL(65,30),
    "confectionProductCode" TEXT,
    "installationProductCode" TEXT,
    "ordering" BIGINT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsMechanisms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsExtras" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "productCode" TEXT,
    "cmsMechanismSet" TEXT,
    "unit" TEXT,
    "pricePerUnit" DECIMAL(65,30) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsExtras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsOrderExtras" (
    "id" TEXT NOT NULL,
    "cmsOrderId" TEXT NOT NULL,
    "cmsExtraId" TEXT NOT NULL,
    "productCode" TEXT,
    "cmsMechanismSet" TEXT,
    "name" TEXT,
    "pricePerM" DECIMAL(65,30),
    "ralCode" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsOrderExtras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsFoils" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "productCode" TEXT,
    "colorCode" TEXT,
    "ralCode" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsFoils_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CmsOrderDoors" ADD CONSTRAINT "CmsOrderDoors_cmsOrderId_fkey" FOREIGN KEY ("cmsOrderId") REFERENCES "CmsOrders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsOrderDoors" ADD CONSTRAINT "CmsOrderDoors_cmsDoorMechanismId_fkey" FOREIGN KEY ("cmsDoorMechanismId") REFERENCES "CmsDoorMechanisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsOrders" ADD CONSTRAINT "CmsOrders_cmsMechanismId_fkey" FOREIGN KEY ("cmsMechanismId") REFERENCES "CmsMechanisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsOrders" ADD CONSTRAINT "CmsOrders_cmsHandrailId_fkey" FOREIGN KEY ("cmsHandrailId") REFERENCES "CmsHandrails"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsOrders" ADD CONSTRAINT "CmsOrders_cmsHandrailDecorationId_fkey" FOREIGN KEY ("cmsHandrailDecorationId") REFERENCES "CmsHandrailDecorations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsOrders" ADD CONSTRAINT "CmsOrders_cmsHorizontalProfileid_fkey" FOREIGN KEY ("cmsHorizontalProfileid") REFERENCES "CmsHorizontalProfiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsOrders" ADD CONSTRAINT "CmsOrders_cmsHandrailEndingId_fkey" FOREIGN KEY ("cmsHandrailEndingId") REFERENCES "CmsHandrailEndings"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsSupportedProfiles" ADD CONSTRAINT "CmsSupportedProfiles_cmsHorizontalProfileId_fkey" FOREIGN KEY ("cmsHorizontalProfileId") REFERENCES "CmsHorizontalProfiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsSupportedProfiles" ADD CONSTRAINT "CmsSupportedProfiles_cmsHandrailDecorationId_fkey" FOREIGN KEY ("cmsHandrailDecorationId") REFERENCES "CmsHandrailDecorations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsSupportedDecorations" ADD CONSTRAINT "CmsSupportedDecorations_cmsHandrailId_fkey" FOREIGN KEY ("cmsHandrailId") REFERENCES "CmsHandrails"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsSupportedDecorations" ADD CONSTRAINT "CmsSupportedDecorations_cmsHandrailDecorationId_fkey" FOREIGN KEY ("cmsHandrailDecorationId") REFERENCES "CmsHandrailDecorations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsHandrailEndings" ADD CONSTRAINT "CmsHandrailEndings_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "CmsHandrailEndings"("id") ON DELETE SET NULL ON UPDATE CASCADE;
