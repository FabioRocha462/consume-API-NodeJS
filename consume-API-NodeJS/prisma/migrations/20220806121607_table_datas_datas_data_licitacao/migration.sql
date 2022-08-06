/*
  Warnings:

  - You are about to drop the column `datas` on the `datas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "datas" DROP COLUMN "datas",
ADD COLUMN     "data_licitacao" TIMESTAMP(3);
