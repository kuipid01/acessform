-- CreateTable
CREATE TABLE "FormData" (
    "formId" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,
    "componentId" INTEGER NOT NULL,
    "Data" TEXT[],

    CONSTRAINT "FormData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FormData" ADD CONSTRAINT "FormData_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
