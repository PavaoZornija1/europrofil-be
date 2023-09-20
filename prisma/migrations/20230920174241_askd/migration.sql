-- CreateTable
CREATE TABLE "_CmsAluFrameTypesToCmsAluHinges" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CmsAluFrameTypesToCmsAluHinges_AB_unique" ON "_CmsAluFrameTypesToCmsAluHinges"("A", "B");

-- CreateIndex
CREATE INDEX "_CmsAluFrameTypesToCmsAluHinges_B_index" ON "_CmsAluFrameTypesToCmsAluHinges"("B");

-- AddForeignKey
ALTER TABLE "_CmsAluFrameTypesToCmsAluHinges" ADD CONSTRAINT "_CmsAluFrameTypesToCmsAluHinges_A_fkey" FOREIGN KEY ("A") REFERENCES "CmsAluFrameTypes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CmsAluFrameTypesToCmsAluHinges" ADD CONSTRAINT "_CmsAluFrameTypesToCmsAluHinges_B_fkey" FOREIGN KEY ("B") REFERENCES "CmsAluHinges"("id") ON DELETE CASCADE ON UPDATE CASCADE;
