/*
  Warnings:

  - You are about to drop the column `decelaratorSupport` on the `CmsMechanisms` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CmsMechanisms" DROP COLUMN "decelaratorSupport",
ADD COLUMN     "deceleratorSupport" BOOLEAN,
ALTER COLUMN "constantsHeight" DROP NOT NULL,
ALTER COLUMN "constantsHandrailHeight" DROP NOT NULL,
ALTER COLUMN "constantsDeceleratorHeight" DROP NOT NULL,
ALTER COLUMN "constantsProfileTopWood" DROP NOT NULL,
ALTER COLUMN "constantsProfileTopGlass" DROP NOT NULL,
ALTER COLUMN "constantsProfileBottomWood" DROP NOT NULL,
ALTER COLUMN "constantsProfileBottomGlass" DROP NOT NULL,
ALTER COLUMN "constantsSeparatorThickness" DROP NOT NULL,
ALTER COLUMN "constantsSeparatorGlassGap" DROP NOT NULL,
ALTER COLUMN "constantsSeparatorWoodGap" DROP NOT NULL,
ALTER COLUMN "pvcProfileAvailable" DROP NOT NULL,
ALTER COLUMN "thinningAvailable" DROP NOT NULL,
ALTER COLUMN "differentHandrails" DROP NOT NULL,
ALTER COLUMN "withoutTopAndBottomProfiles" DROP NOT NULL,
ALTER COLUMN "loadMin" DROP NOT NULL,
ALTER COLUMN "loadMax" DROP NOT NULL,
ALTER COLUMN "widthMin" DROP NOT NULL,
ALTER COLUMN "widthMax" DROP NOT NULL,
ALTER COLUMN "heightMin" DROP NOT NULL,
ALTER COLUMN "heightMax" DROP NOT NULL,
ALTER COLUMN "fillThicknessMin" DROP NOT NULL,
ALTER COLUMN "fillThicknessMax" DROP NOT NULL,
ALTER COLUMN "ordering" DROP NOT NULL;
