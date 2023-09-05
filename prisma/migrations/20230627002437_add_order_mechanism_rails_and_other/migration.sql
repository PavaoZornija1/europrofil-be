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
    "firstHandrailEnding" BIGINT,
    "secondHandrailEnding" BIGINT,
    "openingHeight" DECIMAL(65,30),
    "openingWidth" DECIMAL(65,30),
    "openingDoors" BIGINT,
    "railsType" TEXT,
    "railsLengthTopValue" DECIMAL(65,30),
    "railsLengthTopManual" BOOLEAN NOT NULL DEFAULT false,
    "railsLengthBottomValue" DECIMAL(65,30),
    "railsLengthBottomManual" BOOLEAN NOT NULL DEFAULT false,
    "handrailHeight" DECIMAL(65,30),
    "totalDeceleratorPairs" BIGINT,
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
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsOrders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsDoorMechanisms" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "productCode" TEXT NOT NULL,
    "deceleratorSupport" BOOLEAN NOT NULL DEFAULT false,
    "deceleratorOpposites" TEXT,
    "price" DECIMAL(65,30),
    "cmsMechanismSet" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsDoorMechanisms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsHandrails" (
    "id" TEXT NOT NULL,
    "cmsMechanismSet" TEXT,
    "cmsDoorMechanismSet" TEXT,
    "roundingSteps" TEXT,
    "name" TEXT,
    "doorWidth" DECIMAL(65,30),
    "profileLength" DECIMAL(65,30),
    "fillWidthGlass" DECIMAL(65,30),
    "fillWidthWood" DECIMAL(65,30),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsHandrails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsPvcProfiles" (
    "id" TEXT NOT NULL,
    "productCode" TEXT,
    "cmsMechanismSet" TEXT,
    "name" TEXT,
    "pricePerM" DECIMAL(65,30),
    "ralCode" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsPvcProfiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CmsFills" (
    "id" TEXT NOT NULL,
    "parentId" TEXT,
    "name" TEXT,
    "productCode" TEXT,
    "cmsMechanismSet" TEXT,
    "requiresPvcProfile" BOOLEAN NOT NULL DEFAULT false,
    "requiresThinning" BOOLEAN NOT NULL DEFAULT false,
    "customNameAllowed" BOOLEAN NOT NULL DEFAULT false,
    "lft" BIGINT,
    "rght" BIGINT,
    "foilAvailable" BOOLEAN NOT NULL DEFAULT false,
    "pricePerMSquare" DECIMAL(65,30),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "deleted" TIMESTAMP(3),
    "modified" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CmsFills_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CmsFills" ADD CONSTRAINT "CmsFills_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "CmsFills"("id") ON DELETE SET NULL ON UPDATE CASCADE;
