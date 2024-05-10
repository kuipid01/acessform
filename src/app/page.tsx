import { FormProvider } from "@/context/formContext";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <FormProvider>
      <main className="flex px-[53px] relative h-screen flex-col items-center justify-center ">
        {/* <Nav/> */}

        <h1 className=" text-4xl">Your Custom Form Builder</h1>
        <p className=" max-w-[650px] mb-5 mt-2 leading-9">
          Create and crafts form easily Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ipsam ducimus voluptatem mollitia modi sit corrupti
          in saepe maxime fuga aperiam.
        </p>
        <Link
          className="w-[250px] rounded-md flex justify-center items-center font-bold  h-[58px] bg-black text-white  "
          href="/register"
        >
          Start Now
        </Link>
      </main>
    </FormProvider>
  );
}
