"use client";
import React from "react";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShineBorder } from "@/components/magicui/shine-border";
const inter = Inter({ subsets: ["latin"] });
interface LinkitemProp {
  text: string;
  href: string;
}
export const Linkitems = ({ text, href }: LinkitemProp) => {
  return (
    <Link href={href}>
      <span className="flex items-center">
        <img
          src="/revamp/checkbox.svg"
          className="block md:hidden h-5 w-auto mr-1"
        ></img>
        <p
          className={`text-[12px] leading-[1.5rem] font-normal text-gray-300 ${inter.className}`}
        >
          {text}
        </p>
      </span>
    </Link>
  );
};
const UltimateCourse2 = () => {
  // console.log(Linkitems);
  return (
    <div className="flex flex-col items-center mx-1">
      <div>
        <div className="flex justify-center">
          <h2
            className={`mt-5 w-full max-w-xs text-center text-3xl font-bold leading-[120%] text-[#fff] sm:max-w-md md:max-w-lg md:text-5xl lg:max-w-xl lg:text-[48px] xl:max-w-2xl ${inter.className}`}
          >
            The Ultimate <br /> Data Engineering
            <span className="relative inline-block ml-2">
              Course
              <svg
                className="absolute -bottom-5 left-1/2 w-full max-w-[120px] -translate-x-1/2 sm:-bottom-6 md:-bottom-3 sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px]"
                height="35"
                viewBox="0 0 200 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M10,25 Q100,10 190,25"
                  stroke="#a855f7"
                  strokeWidth="3"
                  fill="transparent"
                />
                <path
                  d="M10,30 Q100,15 190,30"
                  stroke="#a855f7"
                  strokeWidth="3"
                  fill="transparent"
                />
              </svg>
            </span>
          </h2>
        </div>
        <div className="mx-auto mt-[30px] flex w-full justify-center">
          <p
            className={`text-center text-[18px] text-neutral-400 ${inter.className}`}
          >
            Go from data novice to engineering pro, faster than{" "}
            <br className="hidden md:block" /> you thought possible.
          </p>
        </div>
      </div>
      <motion.div className="relative max-w-[845px] p-6 bg-neutral-900 flex flex-col rounded-[28px]  mt-[46px]">
        {" "}
        <ShineBorder shineColor={"#a0a0ff"} borderWidth={3} />{" "}
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row gap-[24px]">
            {" "}
            <div>
              <img src="/latest/ultimate2.png" className="rounded-xl" alt="" />
            </div>
            <div className=" flex flex-col  justify-between items-center py-[5px]">
              <h2 className="w-full text-[24px] md:text-[29px] leading-[24px] md:leading-[30px] font-semibold tracking-[-1.5%] text-[#eee]">
                Zero to Hero <br className="hidden md:block" /> Data
                Engineering.
              </h2>{" "}
              <div>
                <h3 className="text-sm w-[90%] text-medium text-neutral-400">
                  Go from zero to job-ready in data engineering - build
                  pipelines, manage big data, succeed.
                </h3>
              </div>
              <div className="w-full my-3 md:my-0 flex gap-4 justify-evenly items-center">
                <span className="flex items-center">
                  <img
                    src={"/revamp/author.svg"}
                    alt={"course instructor"}
                    className="size-8 rounded-full border"
                  />
                  <p className="ml-2 text-[15px] font-medium text-neutral-400">
                    Darshil Parmar
                  </p>
                </span>{" "}
                <span
                  className={`flex items-center gap-1 text-sm leading-5 font-medium text-neutral-400 ${inter.className}`}
                >
                  <img src={"/revamp/star.svg"} className="size-4" />
                  <span className="text-white">5</span> (800+ Reviews)
                </span>
              </div>{" "}
              {/* <div className="w-full flex items-center justify-start gap-2 mb-3">
                <span
                  className={` font-bold text-[26px] md:text-[35px] text-[#5751E1] ${inter.className}`}
                >
                  {`$99.00`}
                </span>
                <span
                  className={`text-[19px] font-normal leading-[24.5px] text-[#7F7E97] line-through ${inter.className}`}
                >
                  ${299.0}
                </span>
              </div> */}
              <div className="w-full flex justify-between md:justify-start gap-4">
                <Link
                  href={"https://learn.datavidhya.com/l/b2b9839f3e"}
                  target="_blank"
                >
                  {" "}
                  <button
                    className={`block w-[144px] rounded-[12px] bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white ${inter.className}`}
                  >
                    Buy Now
                  </button>
                </Link>
                <Link href={"/combopack"}>
                  <button
                    className={`block bg-neutral-800 w-[144px]  rounded-[12px] px-4 py-3 text-center text-sm font-semibold text-neutral-300 ${inter.className}`}
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <hr className="my-[14px] border border-neutral-700 " />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
            <Linkitems text="230+ Videos" href="#" />
            <hr className="hidden md:flex rotate-90 border border-neutral-700  bg-neutral-300 w-[30px]" />
            <Linkitems text="15+ Project" href="#" />{" "}
            <hr className="hidden md:flex rotate-90 border border-neutral-700  bg-neutral-300 w-[30px]" />
            <Linkitems text="Downloadable Resources" href="#" />{" "}
            <hr className="hidden md:flex rotate-90 border border-neutral-700  bg-neutral-300 w-[30px]" />
            <Linkitems text="Resume + Interview Prep EBooks" href="#" />
          </div>
        </div>
      </motion.div>

      <Link href={"/courses"}>
        <button
          className={`w-40 rounded-[12px] bg-[#2E2E2E] px-4 py-3 text-center text-sm font-semibold text-white ${inter.className} mt-16 cursor-pointer`}
        >
          View All Courses
        </button>
      </Link>
    </div>
  );
};

export default UltimateCourse2;
