import { Download, Eye } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" h-screen   mt-[10vh]">
      <TopSection />
      <div className="flex py-10 px-10 bg-cyan-50 h-[calc(100%-10vh)] gap-5">
        <MidSec />
        <RightBar />
      </div>
    </div>
  );
};

export default page;

const TopSection = () => {
  return (
    <div className=" h-fit  flex  justify-between px-[63px] bg-white border-t py-5 ">
      <h1 className=" text-lg px-[63px] text-gray-600  font-bold">
        Form: <span className=" font-light text-gray-900 text-lg">Test</span>{" "}
      </h1>
      <div className="flex gap-3">
        <Link
          href="/preview"
          className=" font-medium px-10 py-2  rounded-md border border-gray-400 flex gap-2 items-center"
        >
          <Eye />
          <span>Preview</span>
        </Link>
        <div className=" font-medium px-10 py-2  rounded-md border border-gray-400 flex gap-2 items-center">
          <Download />
          <span>Save</span>
        </div>
        <div className="  bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white  font-medium px-10 py-2  rounded-md border border-gray-400 flex gap-2 items-center">
          <Eye />
          <span>Publish</span>
        </div>
      </div>
    </div>
  );
};

const MidSec = () => {
  return (
    <div className=" rounded-3xl border flex-1 h-[80vh] bg-white overflow-y-auto"></div>
  );
};

const RightBar = () => {
  return <div className=" w-[350px] h-full overflow-y-auto bg-white"></div>;
};
