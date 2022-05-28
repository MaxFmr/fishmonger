/*
  Warnings:

  - You are about to drop the column `idAcheteur` on the `MvtTracabapp` table. All the data in the column will be lost.
  - You are about to drop the `Acheteur` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `nomCriee` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Acheteur" DROP CONSTRAINT "Acheteur_idAcheteur_fkey";

-- DropForeignKey
ALTER TABLE "nomCriee" DROP CONSTRAINT "nomCriee_codeCriee_fkey";

-- DropIndex
DROP INDEX "MvtTracabapp_id2_key";

-- AlterTable
ALTER TABLE "MvtTracabapp" DROP COLUMN "idAcheteur",
ADD COLUMN     "IdAcheteur" INTEGER,
ALTER COLUMN "libelleEngin" DROP NOT NULL,
ALTER COLUMN "cotegorieEngin" DROP NOT NULL;

-- DropTable
DROP TABLE "Acheteur";

-- DropTable
DROP TABLE "nomCriee";
