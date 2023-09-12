-- CreateEnum
CREATE TYPE "ApprovalStatus" AS ENUM ('Pending', 'Postponed', 'Rejected', 'Accepted');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mechanism" (
    "id" TEXT NOT NULL,
    "src" TEXT,
    "alt" TEXT,
    "title" TEXT NOT NULL,
    "filler" TEXT NOT NULL,
    "thickness" TEXT NOT NULL,
    "doorWidth" TEXT NOT NULL,
    "doorHeight" TEXT NOT NULL,

    CONSTRAINT "Mechanism_pkey" PRIMARY KEY ("id")
);

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
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

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
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Administrator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsUsers" (
    "id" TEXT NOT NULL,
    "isAdministrator" BOOLEAN NOT NULL DEFAULT false,
    "isEmployee" BOOLEAN NOT NULL DEFAULT false,
    "username" TEXT,
    "email" TEXT,
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
    "cmsDepartmentId" TEXT,
    "orderCount" INTEGER NOT NULL DEFAULT 0,
    "accessCount" INTEGER NOT NULL DEFAULT 0,
    "approvalStatus" "ApprovalStatus" NOT NULL DEFAULT 'Pending',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CmsUsers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsHorizontalProfiles" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "cmsMechanismsId" TEXT,
    "constantsThickness" DECIMAL(65,30),
    "constantsGlassGap" DECIMAL(65,30),
    "constantsWoodGap" DECIMAL(65,30),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

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
    "numberOfFields" INTEGER,
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CmsOrderDoors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsOrders" (
    "id" TEXT NOT NULL,
    "customerName" TEXT,
    "customerPhone" TEXT,
    "customerAddress" TEXT,
    "customerDeliveryAddress" TEXT,
    "customerDesiredDeliveryDate" TIMESTAMP(3),
    "customerDiscountFrame" DECIMAL(65,30),
    "customerDiscountFills" DECIMAL(65,30),
    "customerShowPriceBreakdown" BOOLEAN NOT NULL DEFAULT false,
    "customerLockedDiscounts" BOOLEAN NOT NULL DEFAULT false,
    "customerOwnOrderNumber" TEXT,
    "notes" TEXT,
    "givenOrderNumber" TEXT,
    "orderDate" TIMESTAMP(3),
    "cmsMechanismId" TEXT,
    "cmsHandrailId" TEXT,
    "cmsHandrailDecorationId" TEXT,
    "cmsHorizontalProfileid" TEXT,
    "handrailDecorationCustomColor" TEXT,
    "firstHandrailEnding" DECIMAL(65,30),
    "secondHandrailEnding" DECIMAL(65,30),
    "cmsHandrailEndingId" TEXT,
    "openingHeight" DECIMAL(65,30),
    "openingWidth" DECIMAL(65,30),
    "openingDoors" INTEGER,
    "railsType" TEXT,
    "railsLengthTopValue" DECIMAL(65,30),
    "railsLengthTopManual" BOOLEAN NOT NULL DEFAULT false,
    "railsLengthBottomValue" DECIMAL(65,30),
    "railsLengthBottomManual" BOOLEAN NOT NULL DEFAULT false,
    "handrailHeight" DECIMAL(65,30),
    "totalDeceleratorPairs" INTEGER,
    "servicesFrameName" TEXT,
    "servicesFrameChosen" BOOLEAN NOT NULL DEFAULT false,
    "servicesFillName" TEXT,
    "servicesFillChosen" BOOLEAN NOT NULL DEFAULT false,
    "servicesConfectionName" TEXT,
    "servicesConfectionChosen" BOOLEAN NOT NULL DEFAULT false,
    "servicesInstallationName" TEXT,
    "servicesInstallationChosen" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CmsOrders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsSupportedProfiles" (
    "id" TEXT NOT NULL,
    "cmsHorizontalProfileId" TEXT,
    "cmsHandrailDecorationId" TEXT,
    "price" DECIMAL(65,30),
    "productCode" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CmsSupportedProfiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsHandrailDecorations" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "cmsMechanismsId" TEXT,
    "customColorAvailable" BOOLEAN NOT NULL,
    "isSilverGloss" BOOLEAN NOT NULL,
    "priceTopRailSingle" DECIMAL(65,30),
    "priceTopRailDouble" DECIMAL(65,30),
    "priceBottomRailSingle" DECIMAL(65,30),
    "priceBottomRailDouble" DECIMAL(65,30),
    "priceDivider" DECIMAL(65,30),
    "priceTopProfile" DECIMAL(65,30),
    "priceBottomProfile" DECIMAL(65,30),
    "productCodeTopRailSingle" TEXT,
    "productCodeBottomRailSingle" TEXT,
    "productCodeTopRailDouble" TEXT,
    "productCodeBottomRailDouble" TEXT,
    "productCodeDivider" TEXT,
    "productCodeTopProfile" TEXT,
    "productCodeBottomProfile" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

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
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CmsSupportedDecorations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsHandrailEndings" (
    "id" TEXT NOT NULL,
    "parentId" TEXT,
    "name" TEXT,
    "productCode" TEXT,
    "cmsMechanismsId" TEXT,
    "pricePerM" DECIMAL(65,30) NOT NULL,
    "cmsHandrailId" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CmsHandrailEndings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsMechanisms" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "productCode" TEXT,
    "constantsHeight" DECIMAL(65,30),
    "constantsHandrailHeight" DECIMAL(65,30),
    "constantsDeceleratorHeight" DECIMAL(65,30),
    "constantsProfileTopWood" DECIMAL(65,30),
    "constantsProfileTopGlass" DECIMAL(65,30),
    "constantsProfileBottomWood" DECIMAL(65,30),
    "constantsProfileBottomGlass" DECIMAL(65,30),
    "constantsSeparatorThickness" DECIMAL(65,30),
    "constantsSeparatorGlassGap" DECIMAL(65,30),
    "constantsSeparatorWoodGap" DECIMAL(65,30),
    "pvcProfileAvailable" BOOLEAN,
    "thinningAvailable" BOOLEAN,
    "deceleratorSupport" BOOLEAN,
    "differentHandrails" BOOLEAN,
    "withoutTopAndBottomProfiles" BOOLEAN,
    "loadMin" DECIMAL(65,30),
    "loadMax" DECIMAL(65,30),
    "widthMin" DECIMAL(65,30),
    "widthMax" DECIMAL(65,30),
    "heightMin" DECIMAL(65,30),
    "heightMax" DECIMAL(65,30),
    "fillThicknessMin" DECIMAL(65,30),
    "fillThicknessMax" DECIMAL(65,30),
    "heavyThreshold" DECIMAL(65,30),
    "fillTypes" TEXT,
    "detailsLink" TEXT,
    "confectionPricePerDoor" DECIMAL(65,30),
    "installationPricePerDoor" DECIMAL(65,30),
    "confectionProductCode" TEXT,
    "installationProductCode" TEXT,
    "ordering" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CmsMechanisms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsDoorMechanisms" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "productCode" TEXT NOT NULL,
    "deceleratorSupport" BOOLEAN NOT NULL DEFAULT false,
    "deceleratorOpposites" TEXT,
    "price" DECIMAL(65,30),
    "cmsMechanismsId" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CmsDoorMechanisms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsHandrails" (
    "id" TEXT NOT NULL,
    "cmsMechanismsId" TEXT,
    "cmsDoorMechanismsId" TEXT,
    "roundingSteps" TEXT,
    "name" TEXT,
    "doorWidth" DECIMAL(65,30),
    "profileLength" DECIMAL(65,30),
    "fillWidthGlass" DECIMAL(65,30),
    "fillWidthWood" DECIMAL(65,30),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CmsHandrails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsPvcProfiles" (
    "id" TEXT NOT NULL,
    "productCode" TEXT,
    "cmsMechanismsId" TEXT,
    "name" TEXT,
    "pricePerM" DECIMAL(65,30),
    "ralCode" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CmsPvcProfiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsExtras" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "productCode" TEXT,
    "cmsMechanismsId" TEXT,
    "unit" TEXT,
    "pricePerUnit" DECIMAL(65,30) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

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
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

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
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CmsFoils_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsFills" (
    "id" TEXT NOT NULL,
    "cmsMechanismsId" TEXT,
    "parentId" TEXT,
    "name" TEXT,
    "productCode" TEXT,
    "cmsMechanismSet" TEXT,
    "requiresPvcProfile" BOOLEAN NOT NULL DEFAULT false,
    "requiresThinning" BOOLEAN NOT NULL DEFAULT false,
    "customNameAllowed" BOOLEAN NOT NULL DEFAULT false,
    "lft" INTEGER,
    "rght" INTEGER,
    "foilAvailable" BOOLEAN NOT NULL DEFAULT false,
    "pricePerMSquare" DECIMAL(65,30),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CmsFills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsAluOrders" (
    "id" TEXT NOT NULL,
    "code" TEXT,
    "codeNumber" INTEGER,
    "codeMonth" INTEGER,
    "codeYear" INTEGER,
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
    "cornerCoverCount" INTEGER,
    "costVatRate" DECIMAL(65,30),
    "costBase" DECIMAL(65,30),
    "costVat" DECIMAL(65,30),
    "costTotal" DECIMAL(65,30),
    "costPerMeterBase" DECIMAL(65,30),
    "costPerMeterTotal" DECIMAL(65,30),
    "totalFrameCount" INTEGER,
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
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CmsAluOrders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsAluFrameTreatments" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "productCode" TEXT,
    "customColorAvailable" BOOLEAN NOT NULL DEFAULT false,
    "pricePerMeter" DECIMAL(65,30),
    "priceIncrease" DECIMAL(65,30),
    "ordering" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

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
    "ordering" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

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
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

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
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CmsAluFoils_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "CmsAluLiftSupports" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "productCode" TEXT,
    "pricePerUnit" DECIMAL(65,30),
    "cmsFrameTypeSet" TEXT,
    "description" TEXT,
    "ordering" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

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
    "ordering" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

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
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CmsAluFills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsAluHinges" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "productCode" TEXT,
    "price" DECIMAL(65,30),
    "cmsHingeTypeId" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CmsAluHinges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsHingeTypes" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "code" TEXT,
    "ordering" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

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
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CmsAluSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsSettings" (
    "id" TEXT NOT NULL,
    "orderEmail" TEXT,
    "currency" TEXT,
    "vat" DECIMAL(65,30),
    "introText" TEXT,
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CmsSettings_pkey" PRIMARY KEY ("id")
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
    "width" INTEGER,
    "height" INTEGER,
    "isImage" BOOLEAN,
    "extra" TEXT,
    "alt" TEXT,
    "source" TEXT,
    "meta" TEXT,
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AluUploads_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Acos" ADD CONSTRAINT "Acos_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Acos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aros" ADD CONSTRAINT "Aros_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Aros"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Administrator" ADD CONSTRAINT "Administrator_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsUsers" ADD CONSTRAINT "CmsUsers_cmsDepartmentId_fkey" FOREIGN KEY ("cmsDepartmentId") REFERENCES "CmsDepartments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsHorizontalProfiles" ADD CONSTRAINT "CmsHorizontalProfiles_cmsMechanismsId_fkey" FOREIGN KEY ("cmsMechanismsId") REFERENCES "CmsMechanisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE "CmsHandrailDecorations" ADD CONSTRAINT "CmsHandrailDecorations_cmsMechanismsId_fkey" FOREIGN KEY ("cmsMechanismsId") REFERENCES "CmsMechanisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsSupportedDecorations" ADD CONSTRAINT "CmsSupportedDecorations_cmsHandrailId_fkey" FOREIGN KEY ("cmsHandrailId") REFERENCES "CmsHandrails"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsSupportedDecorations" ADD CONSTRAINT "CmsSupportedDecorations_cmsHandrailDecorationId_fkey" FOREIGN KEY ("cmsHandrailDecorationId") REFERENCES "CmsHandrailDecorations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsHandrailEndings" ADD CONSTRAINT "CmsHandrailEndings_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "CmsHandrailEndings"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsHandrailEndings" ADD CONSTRAINT "CmsHandrailEndings_cmsMechanismsId_fkey" FOREIGN KEY ("cmsMechanismsId") REFERENCES "CmsMechanisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsHandrailEndings" ADD CONSTRAINT "CmsHandrailEndings_cmsHandrailId_fkey" FOREIGN KEY ("cmsHandrailId") REFERENCES "CmsHandrails"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsDoorMechanisms" ADD CONSTRAINT "CmsDoorMechanisms_cmsMechanismsId_fkey" FOREIGN KEY ("cmsMechanismsId") REFERENCES "CmsMechanisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsHandrails" ADD CONSTRAINT "CmsHandrails_cmsMechanismsId_fkey" FOREIGN KEY ("cmsMechanismsId") REFERENCES "CmsMechanisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsHandrails" ADD CONSTRAINT "CmsHandrails_cmsDoorMechanismsId_fkey" FOREIGN KEY ("cmsDoorMechanismsId") REFERENCES "CmsDoorMechanisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsPvcProfiles" ADD CONSTRAINT "CmsPvcProfiles_cmsMechanismsId_fkey" FOREIGN KEY ("cmsMechanismsId") REFERENCES "CmsMechanisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsExtras" ADD CONSTRAINT "CmsExtras_cmsMechanismsId_fkey" FOREIGN KEY ("cmsMechanismsId") REFERENCES "CmsMechanisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsFills" ADD CONSTRAINT "CmsFills_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "CmsFills"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsFills" ADD CONSTRAINT "CmsFills_cmsMechanismsId_fkey" FOREIGN KEY ("cmsMechanismsId") REFERENCES "CmsMechanisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsAluFills" ADD CONSTRAINT "CmsAluFills_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "CmsAluFills"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CmsAluHinges" ADD CONSTRAINT "CmsAluHinges_cmsHingeTypeId_fkey" FOREIGN KEY ("cmsHingeTypeId") REFERENCES "CmsHingeTypes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
