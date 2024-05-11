"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const GenderComponent: React.FC = () => {
  return (
    <div className=" flex gap-3 flex-col w-full  p-5">
      <h1>Gender</h1>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Gender" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Male</SelectItem>
          <SelectItem value="dark">Female</SelectItem>
          <SelectItem value="system">Gender Neutral</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default GenderComponent;
