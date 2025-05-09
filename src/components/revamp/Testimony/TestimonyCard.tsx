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
    <div className="max-sm:w-[18rem] max-md:w-[19rem] max-lg:w-[20rem] max-w-[22rem] p-5 my-3 rounded-2xl border-[1px] border-[#D7D7D7] flex flex-col justify-between hover:shadow-lg hover:bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="w-full  text-black text-left">
        {/* <p className="text-xl mb-8">⭐⭐⭐⭐⭐</p> */}
        <span className="flex gap-1">
          {" "}
          <img
            src="/revamp/star.svg"
            className="size-5 md:size-6 mb-6 md:mb-8"
            alt="star"
          />{" "}
          <img
            src="/revamp/star.svg"
            className=" size-5 md:size-6  mb-6 md:mb-8"
            alt="star"
          />{" "}
          <img
            src="/revamp/star.svg"
            className="size-5 md:size-6 mb-6 md:mb-8"
            alt="star"
          />{" "}
          <img
            src="/revamp/star.svg"
            className="size-5 md:size-6 mb-6 md:mb-8"
            alt="star"
          />{" "}
          <img
            src="/revamp/star.svg"
            className="size-5 md:size-6 mb-6 md:mb-8"
            alt="star"
          />
        </span>
        <p className="text-[16px] md:text-lg lg:text-xl font-400 leading-[150%]">
          "{text}"
        </p>
      </div>
      <div className="mt-5 flex justify-between">
        <Image
          alt="pfp"
          src={pfp}
          height={56}
          width={56}
          className="rounded-full size-10 md:size-12"
        ></Image>
        <span className="text-left -ml-7 md:-ml-10 flex flex-col justify-center">
          <h2 className="text-[16px] md:text-lg font-semibold leading-[150%] text-black">
            {Name}
          </h2>
          <h4 className="font-normal leading-[150%] text-[14px] md:text-[1rem] text-black">
            {position}, {companyName}
          </h4>
        </span>
        <Image
          alt="linkedIn"
          src={"/revamp/linkedin.png"}
          height={56}
          width={56}
          className="rounded-full size-12 md:size-12"
        ></Image>
      </div>
    </div>
  );
};

export default TestimonyCard;
