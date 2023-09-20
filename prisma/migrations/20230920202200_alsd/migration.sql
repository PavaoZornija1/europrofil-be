/*
  Warnings:

  - You are about to drop the `AluUploads` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "AluUploads";

-- CreateTable
CREATE TABLE "Files" (
    "id" TEXT NOT NULL,
    "locale" TEXT,
    "file" TEXT,
    "filename" TEXT,
    "path" TEXT,
    "entityId" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
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

    CONSTRAINT "Files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CmsAluFrameTypesToCmsAluHandleProfiles" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CmsAluFrameTypesToCmsAluHandleProfiles_AB_unique" ON "_CmsAluFrameTypesToCmsAluHandleProfiles"("A", "B");

-- CreateIndex
CREATE INDEX "_CmsAluFrameTypesToCmsAluHandleProfiles_B_index" ON "_CmsAluFrameTypesToCmsAluHandleProfiles"("B");

-- AddForeignKey
ALTER TABLE "_CmsAluFrameTypesToCmsAluHandleProfiles" ADD CONSTRAINT "_CmsAluFrameTypesToCmsAluHandleProfiles_A_fkey" FOREIGN KEY ("A") REFERENCES "CmsAluFrameTypes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CmsAluFrameTypesToCmsAluHandleProfiles" ADD CONSTRAINT "_CmsAluFrameTypesToCmsAluHandleProfiles_B_fkey" FOREIGN KEY ("B") REFERENCES "CmsAluHandleProfiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
