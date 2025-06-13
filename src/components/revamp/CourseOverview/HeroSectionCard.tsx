import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

interface prop {
  text: string;
}
const Includes = ({ text }: prop) => {
  return (
    <div>
      <div></div>
      <p className={`font-medium ${inter.className}`}>{text}</p>
    </div>
  );
};
const HeroSectionCard = () => {
  return (
    <div className=" w-full p-4 bg-neutral-300 rounded-2xl">
      <div className="relative w-full h-0 pb-[56.25%] max-h-[400px] overflow-hidden rounded-xl">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-xl"
        />
      </div>
      {/* <div className="flex items-center gap-2">
        <span
          className={`text-[26px] font-bold text-[#5751E1] ${inter.className}`}
        >
          6000
        </span>
        <span
          className={`text-[20px] text-[#7F7E97] line-through ${inter.className}`}
        >
          11000
        </span>
      </div> */}
      <div className="w-full px-4 flex flex-col justify-center gap-1.5 md:gap-2 mb-12 md:mb-6 mt-6">
        <button
          className={`rounded-[12px] bg-gradient-to-r from-[#4044ED] to-[#B832E9] px-6 py-2.5 font-normal md:font-semibold text-white transition-transform hover:scale-105 sm:py-3 ${inter.className}`}
        >
          Buy Now
        </button>
        <button
          className={`rounded-[12px] bg-[#2E2E2E] px-6 py-2.5 font-normal md:font-semibold text-white transition-transform hover:scale-105  sm:py-3 ${inter.className}`}
        >
          Try For Free
        </button>
      </div>
      <hr />
      <div className="my-4">
        <p className="text-xl font-normal mb-2">This Course Includes : </p>
        <span className="gap-1.5">
          <Includes text="qweqeqwqwe" />
          <Includes text="wrwfwerfwf" />
          <Includes text="edawdfc" />
          <Includes text="sdffvsdfgvb" />
          <Includes text="sdvbsdfgb" />
          <Includes text="s bsfgb bs" />
        </span>
      </div>
    </div>
  );
};

export default HeroSectionCard;
