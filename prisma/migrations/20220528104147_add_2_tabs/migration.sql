/*
  Warnings:

  - You are about to drop the `mvtTracabapp` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "mvtTracabapp";

-- CreateTable
CREATE TABLE "MvtTracabapp" (
    "id" SERIAL NOT NULL,
    "id2" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "heure" TEXT NOT NULL,
    "acheteur" TEXT NOT NULL,
    "criee" TEXT NOT NULL,
    "numLot" TEXT NOT NULL,
    "faoCodeEspece" TEXT NOT NULL,
    "especeNomCommun" TEXT NOT NULL,
    "especeNomScientifique" TEXT NOT NULL,
    "calibre" TEXT NOT NULL,
    "codePresentation" TEXT NOT NULL,
    "codeFraicheur" TEXT NOT NULL,
    "poidsLot" DOUBLE PRECISION NOT NULL,
    "typeBac" TEXT NOT NULL,
    "nombreBacs" INTEGER NOT NULL,
    "prixKg" DOUBLE PRECISION NOT NULL,
    "codeTransaction" TEXT NOT NULL,
    "montantLot" DOUBLE PRECISION NOT NULL,
    "codeEngin" TEXT NOT NULL,
    "libelleEngin" TEXT NOT NULL,
    "cotegorieEngin" TEXT NOT NULL,
    "zonePeche" TEXT NOT NULL,
    "codeCfrNavire" TEXT NOT NULL,
    "marquageExtNavire" TEXT NOT NULL,
    "nomNavire" TEXT NOT NULL,
    "idAcheteur" INTEGER NOT NULL,

    CONSTRAINT "MvtTracabapp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Acheteur" (
    "id" SERIAL NOT NULL,
    "idAcheteur" INTEGER NOT NULL,
    "nom" TEXT NOT NULL,

    CONSTRAINT "Acheteur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nomCriee" (
    "id" SERIAL NOT NULL,
    "codeCriee" INTEGER NOT NULL,

    CONSTRAINT "nomCriee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MvtTracabapp_id2_key" ON "MvtTracabapp"("id2");

-- AddForeignKey
ALTER TABLE "Acheteur" ADD CONSTRAINT "Acheteur_idAcheteur_fkey" FOREIGN KEY ("idAcheteur") REFERENCES "MvtTracabapp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nomCriee" ADD CONSTRAINT "nomCriee_codeCriee_fkey" FOREIGN KEY ("codeCriee") REFERENCES "MvtTracabapp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
