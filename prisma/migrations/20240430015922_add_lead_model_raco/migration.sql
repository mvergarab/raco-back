-- CreateTable
CREATE TABLE "Lead" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'none',
    "email" TEXT NOT NULL DEFAULT 'none',
    "company" TEXT NOT NULL DEFAULT 'none',
    "phone" TEXT NOT NULL DEFAULT '+56976212646',

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lead_email_key" ON "Lead"("email");
