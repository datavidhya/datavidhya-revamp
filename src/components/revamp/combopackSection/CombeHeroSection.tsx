import React from "react";
import { HiCheckCircle } from "react-icons/hi";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
interface prop {
  text: string;
  num?: number;
}
export const WhiteBox = ({ text, num }: prop) => {
  return (
    <div className="w-[100px] h-[60px] flex flex-col items-center justify-center bg-[#f4f0fc] rounded-[6px]">
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
export const TickText = ({ text }: prop) => {
  return (
    <div className="flex items-center">
      <HiCheckCircle className="text-white size-[20px]" />
      <p className="text-white text-xl leading-[24px] font-semibold">{text}</p>
    </div>
  );
};

const CombeHeroSection = () => {
  return (
    <div className="w-full max-w-[1260px] mx-auto border border-[#d7d7d7d] rounded-2xl flex bg-gradient-to-r from-[#7154f2] to-[#9b49ed] p-10">
      <div className="flex flex-col items-center bg-white p-5 border rounded-2xl">
        <img src="" alt="" />
        <h1>Zero to Hero</h1>
        <h1>Data Engineering</h1>
        <p>Designed for Data Engineering</p>
        <button className="bg-[#282828] rounded-[12px] py-[14px] px-[26px] text-white">
          Buy Now
        </button>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8 flex-wrap">
          <TickText text="afasdca" />
          <TickText text="afasdca" />
          <TickText text="afasdca" />
          <TickText text="afasdca" />

          <TickText text="afasdca" />
          <TickText text="afasdca" />
          <TickText text="afasdca" />
          <TickText text="afasdca" />
        </div>
        <div className="flex gap-8">
          <WhiteBox num={12} text="adfgba" />
          <WhiteBox num={12} text="adfgba" />
          <WhiteBox num={12} text="adfgba" />
          <WhiteBox num={12} text="adfgba" />
          <WhiteBox num={12} text="adfgba" />
        </div>
      </div>
    </div>
  );
};

export default CombeHeroSection;
