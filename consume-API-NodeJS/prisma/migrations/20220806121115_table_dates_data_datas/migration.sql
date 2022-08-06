/*
  Warnings:

  - You are about to drop the column `data` on the `datas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "datas" DROP COLUMN "data",
ADD COLUMN     "datas" TIMESTAMP(3);
