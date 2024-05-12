/*
  Warnings:

  - Changed the type of `Data` on the `FormData` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "FormData" DROP COLUMN "Data",
ADD COLUMN     "Data" JSONB NOT NULL;
