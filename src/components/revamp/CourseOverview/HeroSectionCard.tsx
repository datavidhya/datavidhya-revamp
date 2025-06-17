import React from "react";
import { TiChevronRight } from "react-icons/ti";
import { FaRegCirclePlay } from "react-icons/fa6";
import { LuFileCode2 } from "react-icons/lu";
import { MdQuiz } from "react-icons/md";
import { MdDevices } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { GiTrophy } from "react-icons/gi";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

interface prop {
  text: string;
}
const Includes = ({ text }: prop) => {
  return <p className={`font-medium ${inter.className}`}>{text}</p>;
};
const HeroSectionCard = () => {
  return (
    <div className=" w-full p-4 bg-white md:bg-neutral-200 rounded-2xl">
      <div className="relative w-full h-0 pb-[56.25%] max-h-[400px] overflow-hidden rounded-xl">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-xl"
        />
      </div>

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
      <div className="my-4 px-4">
        <p className="text-xl font-normal mb-2">This Course Includes : </p>
        <div className="gap-1.5">
          <span className="flex gap-2 items-center">
            {" "}
            <FaRegCirclePlay />
            <Includes text="65+ Video Tutorials" />
          </span>
          <span className="flex  gap-2 items-center">
            {" "}
            <LuFileCode2 />
            <Includes text="Coding Exercises" />
          </span>
          <span className="flex  gap-2 items-center">
            {" "}
            <MdQuiz />
            <Includes text="Quiz" />
          </span>
          <span className="flex  gap-2 items-center">
            <MdDevices /> <Includes text="Multiple Device Access" />
          </span>
          <span className="flex  gap-2 items-center">
            <IoTime /> <Includes text="Lifetime Access" />
          </span>
          <span className="flex gap-2  items-center">
            {" "}
            <GiTrophy />
            <Includes text="Completion Certificate" />
          </span>
        </div>
      </div>
      <div className="flex flex-col mt-6 px-4">
        <p className="text-xl font-normal mb-3 ">
          Not sure if this course is for you?
        </p>
        <button
          className={`rounded-[12px] bg-[#2E2E2E] px-6 py-2.5 font-normal md:font-semibold text-white transition-transform hover:scale-105  sm:py-3 ${inter.className}`}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default HeroSectionCard;
