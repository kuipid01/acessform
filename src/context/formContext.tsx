"use client";
import React, { createContext, useState } from "react";

const initialType = {
  formData: [],
  setFormData: () => [],
};

export interface FormData {
  id: number;
  name: string;
  component: React.FC;
}

export interface FormContextType {
  formData: FormData[];
  setFormData: React.Dispatch<React.SetStateAction<FormData[]>>;
}

// Create context for panel state with initial value
export const FormContext = createContext<FormContextType>(initialType);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<any>([]);
  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
