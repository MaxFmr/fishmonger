/*
  Warnings:

  - You are about to drop the column `faoCodeEspece` on the `MvtTracabapp` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id2]` on the table `MvtTracabapp` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `espece` to the `MvtTracabapp` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MvtTracabapp" DROP COLUMN "faoCodeEspece",
ADD COLUMN     "espece" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Especes" (
    "codeEspece" TEXT NOT NULL,
    "nomCommun" TEXT NOT NULL,
    "nomLatin" TEXT NOT NULL,
    "image" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Especes_codeEspece_key" ON "Especes"("codeEspece");

-- CreateIndex
CREATE UNIQUE INDEX "MvtTracabapp_id2_key" ON "MvtTracabapp"("id2");

-- AddForeignKey
ALTER TABLE "MvtTracabapp" ADD CONSTRAINT "MvtTracabapp_espece_fkey" FOREIGN KEY ("espece") REFERENCES "Especes"("codeEspece") ON DELETE RESTRICT ON UPDATE CASCADE;
