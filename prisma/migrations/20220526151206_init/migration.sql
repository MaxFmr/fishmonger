-- CreateTable
CREATE TABLE "mvtTracabapp" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "heure" TEXT NOT NULL,
    "criee" TEXT NOT NULL,
    "acheteur" TEXT NOT NULL,
    "numLot" INTEGER NOT NULL,
    "faoCodeEspece" INTEGER NOT NULL,
    "especeNomCommun" TEXT NOT NULL,
    "especeNomScientifique" TEXT NOT NULL,
    "calibre" INTEGER NOT NULL,
    "codePresentation" TEXT NOT NULL,
    "codeFraicheur" TEXT NOT NULL,
    "poidsLot" DOUBLE PRECISION NOT NULL,
    "typeBac" TEXT NOT NULL,
    "nombreBacs" INTEGER NOT NULL,
    "prixKg" DOUBLE PRECISION NOT NULL,
    "codeTransaction" INTEGER NOT NULL,
    "montantLot" DOUBLE PRECISION NOT NULL,
    "codeEngin" INTEGER NOT NULL,
    "libelleEngin" TEXT NOT NULL,
    "cotegorieEngin" TEXT NOT NULL,
    "zonePeche" DOUBLE PRECISION NOT NULL,
    "codeCfrNavire" INTEGER NOT NULL,
    "marquageExtNavire" TEXT NOT NULL,
    "nomNavire" TEXT NOT NULL,
    "IdAcheteur" INTEGER NOT NULL,

    CONSTRAINT "mvtTracabapp_pkey" PRIMARY KEY ("id")
);