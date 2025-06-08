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
      <p>{text}</p>
    </div>
  );
};
const HeroSectionCard = () => {
  return (
    <div className="w-full p-3 bg-neutral-300">
      <div>youtube</div>
      <div className="flex items-center gap-2">
        <span
          className={`text-[26px] font-bold text-[#5751E1] ${inter.className}`}
        >
          6000
          {/* {`$ ${course.price.toFixed(2)}`} */}
        </span>
        <span
          className={`text-[20px] text-[#7F7E97] line-through ${inter.className}`}
        >
          11000
          {/* ${course.originalPrice.toFixed(2)} */}
        </span>
      </div>
      <div className="w-full px-4 flex flex-col justify-center gap-1.5 md:gap-4 mb-12 md:mb-6 mt-4">
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
      <div>
        <p> This Course Includes : </p>
        <span>
          <Includes text="" />
          <Includes text="" />
          <Includes text="" />
          <Includes text="" />
          <Includes text="" />
          <Includes text="" />
        </span>
      </div>
    </div>
  );
};

export default HeroSectionCard;
