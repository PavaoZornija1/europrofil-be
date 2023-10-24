-- CreateTable
CREATE TABLE "_DoorMechanismDeceleratorOpposites" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DoorMechanismDeceleratorOpposites_AB_unique" ON "_DoorMechanismDeceleratorOpposites"("A", "B");

-- CreateIndex
CREATE INDEX "_DoorMechanismDeceleratorOpposites_B_index" ON "_DoorMechanismDeceleratorOpposites"("B");

-- AddForeignKey
ALTER TABLE "_DoorMechanismDeceleratorOpposites" ADD CONSTRAINT "_DoorMechanismDeceleratorOpposites_A_fkey" FOREIGN KEY ("A") REFERENCES "CmsDoorMechanisms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DoorMechanismDeceleratorOpposites" ADD CONSTRAINT "_DoorMechanismDeceleratorOpposites_B_fkey" FOREIGN KEY ("B") REFERENCES "CmsDoorMechanisms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
