import React, { useContext } from "react";
import { FormContext } from "@/context/formContext"; // Assuming this is the correct path to your context
import { X } from "lucide-react"; // Assuming this is the correct import for the X component
import { PublishForm } from "../../actions/form";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

interface PreviewSecProps {
  setPreview: (value: boolean) => void;
  id: {
    id: number;
  };
}

const PreviewSec: React.FC<PreviewSecProps> = ({ setPreview, id }) => {
  const router = useRouter();
  const handlePublish = async () => {
    console.log(id.id);

    const idsOfcomponents = formData.map((data) => data.id.toLocaleString());
    console.log(idsOfcomponents);

    const form = await PublishForm(Number(id.id), idsOfcomponents);
    console.log(form);
    toast({
      description:
        "Form published succesfully, you will be redirected to homepage",
    });
    router.push("/dashboard");
  };

  const handlePreview = () => {
    setPreview(false);
  };

  const { formData } = useContext(FormContext);

  return (
    <div className="w-full fixed h-screen z-30 ter flex-col gap-3p-5 top-0 left-0">
      <div className="w-full h-screen bg-gray-600 absolute top-0 left-0"></div>
      <X
        onClick={handlePreview}
        className="absolute right-10 top-10 size-8 text-white cursor-pointer"
      />
      <h1 className="relative uppercase text-white mb-3 text-3xl">
        Simple Preview
      </h1>
      {formData.length > 0 && (
        <button
          onClick={handlePublish}
          className=" w-[140px] absolute top-14 right-10 rounded-xl ter text-white h-10 bg-orange-600"
        >
          Publish Form
        </button>
      )}
      <div className="bg-white overflow-y-auto relative p-5 h-fit flex-col rounded-xl ter">
        {formData.map((item, idx) => (
          <div key={idx} className="w-full">
            <item.component />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewSec;
