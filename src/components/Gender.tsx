import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const GenderComponent: React.FC<{
  setData: React.Dispatch<React.SetStateAction<any>>;
  data: any;
}> = ({ setData, data }) => {
  return (
    <div className="flex gap-3 flex-col w-full p-5">
      <h1>Gender</h1>
      <Select onValueChange={(value) => setData({ ...data, gender: value })}>
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
