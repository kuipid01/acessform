/*
  Warnings:

  - You are about to drop the column `componentId` on the `FormData` table. All the data in the column will be lost.
  - The `Data` column on the `FormData` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "FormData" DROP COLUMN "componentId",
DROP COLUMN "Data",
ADD COLUMN     "Data" JSONB[];
