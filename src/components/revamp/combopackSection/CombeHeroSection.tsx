import React from "react";
import { HiCheckCircle } from "react-icons/hi";
import { Lily_Script_One } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import { Gantari } from "next/font/google";
import { Inter } from "next/font/google";
import { RippleButton } from "@/components/magicui/ripple-button";

const gantari = Gantari({ subsets: ["latin"], weight: "400" });
const lily = Lily_Script_One({ subsets: ["latin"], weight: "400" });
const Roboto = Roboto_Slab({ subsets: ["latin"], weight: "500" });

const inter = Inter({ subsets: ["latin"] });
interface prop {
  text: string;
  num?: number;
}
export const WhiteBox = ({ text, num }: prop) => {
  return (
    <div className="w-[100px]  h-[60px] flex flex-col items-center justify-center bg-[#f4f0fc] rounded-[6px] hover:scale-103 transition-all">
      <p
        className={`font-semibold text-[20px] leading-[140%] text-[#5a31c3] ${inter.className}`}
      >
        {num}+
      </p>
      <p className="font-bold text-[12px] leading-[160%] text-[#5a31c3]">
        {text}
      </p>
    </div>
  );
};
export const TickText = ({ text }: prop) => {
  return (
    <div className="w-full md:w-2/5 flex gap-2  items-center">
      <HiCheckCircle className="w-[6%]  text-white " />
      <p
        className={`text-white text-[20px] leading-[24px] font-medium lg:font-semibold ${inter.className}`}
      >
        {text}
      </p>
    </div>
  );
};

const CombeHeroSection = () => {
  return (
    <div className=" relative w-full max-w-[1260px] mx-auto border border-[#d7d7d7d] rounded-2xl flex flex-col md:flex-row gap-3 justify-around bg-gradient-to-r from-[#7154f2] to-[#9b49ed] px-6 p-10 mt-6 md:mt-16">
      <div className=" absolute top-0 left-0 h-full w-full bg-[url('/combopack/background.png')] 	bg-[length:50px_50px] bg-repeat">
        <div className="shine w-[100%] h-[100%]"></div>
      </div>
      <div className="w-full md:w-[30%] flex flex-col z-10 items-center bg-white p-5 border rounded-2xl hover:scale-103 transition-all">
        <img src="/combopack/fileIcon.png" alt="" />
        <h1 className={`${lily.className} text-4xl text-[#5A31C3] mt-2`}>
          Zero to Hero
        </h1>
        <h1
          className={`${Roboto.className} font-medium text-center text-3xl md:text-4xl text-[#441B65]`}
        >
          Data Engineering
        </h1>
        <p
          className={`${gantari.className} text-[16px] text-center leading-[24px] mt-2 text-[#441B65]`}
        >
          Designed for Data Engineering
        </p>
        <button className="w-full bg-[#282828] rounded-[12px] py-[14px] px-[26px] mt-6 text-white hover:bg-[#000]">
          <p className="text-sm font-semibold leading-[16px]"> Buy Now</p>
        </button>
        {/* <RippleButton>Buy Now</RippleButton> */}
      </div>
      <div className="w-full md:w-[65%] flex flex-col md:flex-row lg:flex-col justify-between gap-8 ">
        <div className="h-4/5 flex flex-col  md:flex-row gap-6 flex-wrap mt-6">
          <TickText text="6 Courses" />
          <TickText text="Free Resources" />
          <TickText text="Coding Exercises" />
          <TickText text="Life Time access" />
          <TickText text="Quizes" />
          <TickText text="Real-time Projects" />
          <TickText text="Coding Exercises" />
          <TickText text="Certificate After Completion" />
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-8">
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
