import { FormProvider } from "@/context/formContext";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <FormProvider>
      <main className="flex px-[53px] relative h-screen flex-col items-center justify-center ">
        {/* <Nav/> */}

        <h1 className=" text-4xl">Your Custom Form Builder</h1>
        <p className=" max-w-[650px] text-[20px] text-center mb-5 mt-4 leading-9">
          Create and crafts form easily with our custom drag and drop feature,
          Easily preview forms, share link for others to see.
        </p>
        <Link
          className="w-[250px] relative cursor-pointer rounded-md flex justify-center items-center font-bold  h-[58px] bg-black text-white  "
          href="/register"
        >
          Start Now
        </Link>
        <div className="w-full   absolute bottom-0 left-0  h-[200px]">
          <Image
            src="/waves.svg"
            className="relative object-cover"
            alt="waves "
            fill
          />
        </div>
      </main>
    </FormProvider>
  );
}
