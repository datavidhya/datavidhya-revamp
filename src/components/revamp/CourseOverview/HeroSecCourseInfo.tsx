import React from "react";
import { Inter } from "next/font/google";
import { Course } from "@/types";
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
        className={`sticky top-0 my-6 bg-white text-5xl text-[#222] font-black  ${poppins.className}`}
      >
        {course.title}
      </h1>
      <p
        className={`${inter.className} w-[85%] my-6 text-[16px] text-neutral-800 font-light  leading-[140%]`}
      >
        {course.description}
      </p>
      <div className="flex gap-3 items-center ">
        <img src="/revamp/author.svg" className="rounded-full size-12" alt="" />
        <span className="flex flex-col">
          <h1 className={`text-[16px] font-bold `}>Darshil Parmar</h1>
          <h2 className="text-neutral-700">Data Engineer</h2>
        </span>
      </div>
      <span className="flex text-md gap-6 my-b mt-8 text-neutral-700 font-medium">
        <p>
          {course.rating}⭐ ({course.ratingCount})
        </p>
        <p>25000+ Students</p>
        <p>Last Updated on 06/2025</p>
      </span>
    </div>
  );
};

export default HeroSecCourseInfo;
