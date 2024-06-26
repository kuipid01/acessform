import React from "react";

const NumberComponent: React.FC<{
  setData: React.Dispatch<React.SetStateAction<any>>;
  data: any;
}> = ({ setData, data }) => {
  return (
    <div className="flex gap-3 flex-col w-full p-5">
      <label htmlFor="number">Phone Number</label>
      <div className="w-full flex gap-4">
        <input
          onChange={(e) => setData({ ...data, number: e.target.value })}
          className="flex-1 h-[45px] px-5 rounded-[10px] border outline-none"
          placeholder="+234 56789"
          type="number"
        />
      </div>
    </div>
  );
};

export default NumberComponent;
