import React from "react";
import { Inter } from "next/font/google";
import { Course } from "@/types";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";
const inter = Inter({ subsets: ["latin"] });
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["800"] });

interface prop {
  course: Course;
}
const HeroSecCourseInfo = ({ course }: prop) => {
  return (
    <div className=" my-6">
      <h1
        className={`md:sticky top-0 my-6 bg-white text-2xl max-sm:ml-4 md:text-5xl text-[#222] font-black leading-[130%]  ${poppins.className}`}
      >
        {course.title}
      </h1>
      <p
        className={`${inter.className} w-[85%] my-6 text-[16px] max-sm:mx-auto  max-sm:ml-4 text-neutral-800 font-light  leading-[140%]`}
      >
        {course.description}
      </p>
      <div className="hidden md:flex gap-3 mt-2 items-center ">
        <img src="/revamp/author.svg" className="rounded-full size-12" alt="" />
        <span className="flex flex-col justify-center">
          <h1 className={`text-[18px] font-bold `}>Darshil Parmar</h1>
          <h2 className="text-neutral-700">Data Engineer</h2>
        </span>
      </div>
      <span className="flex text-md gap-6 max-sm:ml-4 my-b mt-8 text-neutral-700 font-medium">
        <p>
          ⭐ {course.rating} ({course.ratingCount}+)
        </p>
        <div className="flex flex-col md:flex-row md:justify-center items-center gap-2">
          <FaPeopleGroup color="black" /> <p>25000+ Students</p>
        </div>
        <p className="flex items-center gap-2">
          <IoIosInformationCircle />
          Last Updated on 06/2025
        </p>
      </span>
    </div>
  );
};

export default HeroSecCourseInfo;
