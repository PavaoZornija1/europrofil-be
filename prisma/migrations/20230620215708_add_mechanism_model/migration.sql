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
