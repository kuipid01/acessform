import React from "react";

const EmailComponent: React.FC<{
  setData: React.Dispatch<React.SetStateAction<any>>;
  data: any;
}> = ({ setData, data }) => {
  return (
    <div className="flex gap-3 flex-col p-5">
      <label htmlFor="email">Email</label>
      <div className="w-full flex gap-4">
        <input
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="flex-1 h-[45px] px-5 rounded-[10px] border outline-none"
          placeholder="kuipid01@gmail.com"
          type="email"
        />
      </div>
    </div>
  );
};

export default EmailComponent;
