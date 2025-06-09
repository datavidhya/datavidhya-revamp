import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
interface prop {
  text: string;
  num: number;
}
export const WhiteBox = ({ text, num }: prop) => {
  return (
    <div className="flex flex-col bg-[#f4f0fc] rounded-[6px]">
      <p
        className={`font-semibold text-[20px] leading-[140%] text-[#5a31c3] ${inter.className}`}
      >
        {num}+
      </p>
      <p className="font-bold text-[8.6px] leading-[160%] text-[#5a31c3]">
        {text}
      </p>
    </div>
  );
};

const CombeHeroSection = () => {
  return (
    <div className="w-full flex bg-gradient-to-r from-[#7154f2] to-[#9b49ed] p-10">
      <div className="flex flex-col items-center bg-white p-5 border ">
        <img src="" alt="" />
        <h1>Zero to Hero</h1>
        <h1>Data Engineering</h1>
        <p>Designed for Data Engineering</p>
        <button className="bg-[#282828] rounded-[12px] py-[14px] px-[26px] text-white">
          Buy Now
        </button>
      </div>
      <div>
        <div></div>
        <div className="flex">
          <WhiteBox num={12} text="" />
          <WhiteBox num={12} text="" />
          <WhiteBox num={12} text="" />
          <WhiteBox num={12} text="" />
          <WhiteBox num={12} text="" />
        </div>
      </div>
    </div>
  );
};

export default CombeHeroSection;
