/*
  Warnings:

  - You are about to drop the column `IdAcheteur` on the `MvtTracabapp` table. All the data in the column will be lost.
  - You are about to drop the column `cotegorieEngin` on the `MvtTracabapp` table. All the data in the column will be lost.
  - You are about to drop the column `libelleEngin` on the `MvtTracabapp` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "MvtTracabapp" DROP COLUMN "IdAcheteur",
DROP COLUMN "cotegorieEngin",
DROP COLUMN "libelleEngin";
