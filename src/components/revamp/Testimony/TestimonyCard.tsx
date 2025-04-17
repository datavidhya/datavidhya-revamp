import Image from "next/image";
import React from "react";
interface prop {
  text: string;
  pfp: string;
  Name: string;
  position: string;
  companyName: string;
}
const TestimonyCard = ({ text, pfp, Name, position, companyName }: prop) => {
  return (
    <div className="w-[20rem] md:w-[25rem] p-5 my-3 rounded-2xl border-[1px] border-[#D7D7D7] flex flex-col justify-between">
      <div className="w-full  text-black text-left">
        <p className="text-xl mb-8">⭐⭐⭐⭐⭐</p>
        <p className="text-[16px] md:text-xl font-400 leading-[150%]">"{text}"</p>
      </div>
      <div className="mt-5 flex justify-between">
        <Image
          alt="pfp"
          src={pfp}
          height={56}
          width={56}
          className="rounded-full"
        ></Image>
        <span className="text-left ml-0 md:-ml-8">
          <h2 className="text-lg font-semibold leading-[150%] text-black">
            {Name}
          </h2>
          <h4 className="font-normal leading-[150%] text-[1rem] text-black">
            {position}, {companyName}
          </h4>
        </span>
        <Image
          alt="linkedIn"
          src={"/linkedin.png"}
          height={56}
          width={56}
          className="rounded-full"
        ></Image>
      </div>
    </div>
  );
};

export default TestimonyCard;
