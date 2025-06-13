import React from "react";

const DataStackCard = () => {
  return (
    <div className="h-52 w-80 rounded-xl border border-[#bfbfbf] ">
      <div className="h-5/6 w-full bg-red-00 overflow-hidden">
        <img src="/combopack/sampleimage.png" alt="" />
      </div>
      <div className="h-1/6 bg-red-00  flex items-center pl-2">
        Sample Text
      </div>
    </div>
  );
};

export default DataStackCard;
