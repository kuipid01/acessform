import React from "react";

const FullNameComponent: React.FC<{
  setData: React.Dispatch<React.SetStateAction<any>>;
  data: any;
}> = ({ setData, data }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex gap-3 flex-col p-5">
      <label htmlFor="fullname">Fullname</label>
      <div className="w-full flex gap-4">
        <input
          name="firstname"
          onChange={handleChange}
          className="flex-1 h-[45px] px-5 rounded-[10px] border outline-none"
          placeholder="Firstname"
          type="text"
        />
        <input
          name="surname"
          onChange={handleChange}
          className="flex-1 h-[45px] px-5 rounded-[10px] border outline-none"
          placeholder="Surname"
          type="text"
        />
      </div>
    </div>
  );
};

export default FullNameComponent;
