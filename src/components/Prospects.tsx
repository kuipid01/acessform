"use client";
import { User } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { fetchProspects } from "../../actions/form";
import { X } from "lucide-react";

interface ProspectsProps {
  user: User | null;
}

const Prospects: React.FC<ProspectsProps> = ({ user }) => {
  const [data, setData] = useState<any>(null);
  const [form, setForm] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const data = await fetchProspects(user.id);
        setData(data);
      }
    };
    fetchData();
  }, [user]);

  const handleDisplayProspect = (prospect: any) => {
    setForm(prospect);
  };

  return (
    <div className="w-full flex flex-wrap gap-3">
      {form && <ProspectDisplay setForm={setForm} form={form} />}
      <h1 className="font-bold text-left text-2xl my-5">Prospects</h1>

      <div className="flex justify-between gap-5 w-full flex-wrap">
        {data?.map((prospect: any, i: any) => (
          <div
            key={i}
            className="md:w-[calc(33.3333%-20px)] rounded-xl gap-2 p-4 ter flex-col w-full h-[200px] bg-white border shadow-md shadow-gray-300"
          >
            <span className="font-bold">FormId:{prospect.formId}</span>
            <button
              onClick={() => handleDisplayProspect(prospect)}
              className="bg-black w-1/2 h-10 ter rounded-md font-medium text-white"
            >
              Check Out
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prospects;

interface ProspectDisplayProps {
  form: any;
  setForm: React.Dispatch<React.SetStateAction<any>>;
}

const ProspectDisplay: React.FC<ProspectDisplayProps> = ({ form, setForm }) => {
  const { Data } = form;
  console.log(Data);
  return (
    <div className="w-full h-screen text-white ter fixed top-0 left-0">
      <div
        onClick={() => setForm(null)}
        className="w-full h-full ter absolute top-0 bg-gray-600"
      ></div>
      <div className="flex w-full px-10 ter relative flex-col gap-3">
        <X
          size={30}
          onClick={() => setForm(null)}
          className="cursor-pointer right-3 text-white top-3 md:right-20 absolute"
        />
        <h1 className="font-bold text-2xl">User Inputs</h1>
        <div className=" relative  md:w-1/2 h-12 bg-white rounded-xl  text-black gap-4 items-center px-3 w-full flex ">
          <span className=" font-bold">Firstname:</span>{" "}
          <span className=" p-2 text-xs font-bold bg-black text-white rounded-md">
            {" "}
            {Data.firstname || "NOT ADDED BY USER "}
          </span>
        </div>
        <div className=" relative  md:w-1/2 h-12 bg-white rounded-xl  text-black gap-4 items-center px-3 w-full flex ">
          <span className=" font-bold">Surname:</span>{" "}
          <span className=" p-2 text-xs font-bold bg-black text-white rounded-md">
            {" "}
            {Data.surname || "NOT ADDED BY USER "}
          </span>
        </div>
        <div className=" relative  md:w-1/2 h-12 bg-white rounded-xl  text-black gap-4 items-center px-3 w-full flex ">
          <span className=" font-bold">Email:</span>{" "}
          <span className=" p-2 text-xs font-bold bg-black text-white rounded-md">
            {" "}
            {Data.email || "NOT ADDED BY USER "}
          </span>
        </div>
        <div className=" relative  md:w-1/2 h-12 bg-white rounded-xl  text-black gap-4 items-center px-3 w-full flex ">
          <span className=" font-bold">Number:</span>{" "}
          <span className=" p-2 text-xs font-bold bg-black text-white rounded-md">
            {" "}
            {Data.number || "NOT ADDED BY USER "}
          </span>
        </div>
        <div className=" relative  md:w-1/2 h-12 bg-white rounded-xl  text-black gap-4 items-center px-3 w-full flex ">
          <span className=" font-bold">Gender:</span>{" "}
          <span className=" p-2 text-xs font-bold bg-black text-white rounded-md">
            {" "}
            {Data.gender || "NOT ADDED BY USER "}
          </span>
        </div>
        <div className=" relative  md:w-1/2 h-12 bg-white rounded-xl  text-black gap-4 items-center px-3 w-full flex ">
          <span className=" font-bold">Date of birth:</span>{" "}
          <span className=" p-2 text-xs font-bold bg-black text-white rounded-md">
            {" "}
            {Data.date || "NOT ADDED BY USER "}
          </span>
        </div>
        {/* Add other input fields similarly */}
      </div>
    </div>
  );
};
