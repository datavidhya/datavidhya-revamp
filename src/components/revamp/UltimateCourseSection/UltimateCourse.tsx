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
          className={`text-[16px] leading-[1.5rem] font-medium text-[#5751E1] hover:text-purple-400 ${inter.className}`}
        >
          {text}
        </p>
      </span>
    </Link>
  );
};
const UltimateCourse = () => {
  // console.log(Linkitems);
  return (
    <div className="flex flex-col items-center py-[40px] md:py-28 bg-[#F7F7FB] mx-1">
      <div>
        <div className="flex justify-center">
          <h2
            className={`mt-5 w-full max-w-xs text-center text-3xl font-bold leading-[120%] text-[#000000] sm:max-w-md md:max-w-lg md:text-5xl lg:max-w-xl lg:text-[48px] xl:max-w-2xl ${inter.className}`}
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
            className={`text-center text-[18px] text-[#000000] ${inter.className}`}
          >
            Go from data novice to engineering pro, faster than{" "}
            <br className="hidden md:block" /> you thought possible.
          </p>
        </div>
      </div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
        className="relative max-w-[845px] p-6 bg-white flex flex-col rounded-[28px]  mt-[46px]"
      >
        {" "}
        <ShineBorder shineColor={"#AB47BC"} borderWidth={3} />{" "}
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row gap-[24px]">
            {" "}
            <div>
              <img src="/revamp/ultimatecourse.png" alt="" />
            </div>
            <div className=" flex flex-col  justify-between items-center py-[5px]">
              <h2 className="w-full text-[24px] text-center md:text-[28px] leading-[24px] font-semibold tracking-[-1.5%] text-[#333333]">
                Data Engineering Simplified
              </h2>{" "}
              <div className="w-full my-3 md:my-0 flex justify-between items-center">
                <span className="flex items-center">
                  <img
                    src={"/revamp/author.svg"}
                    alt={"course instructor"}
                    className="size-8 rounded-full border"
                  />
                  <p className="ml-2 text-[15px] font-medium text-[#51515b]">
                    Darshil Parmar
                  </p>
                </span>{" "}
                <span
                  className={`flex items-center gap-1 text-sm leading-5 font-medium text-[#9EA1AE] ${inter.className}`}
                >
                  <img src={"/revamp/star.svg"} className="size-4" />
                  <span className="text-black">5</span> (800+ Reviews)
                </span>
              </div>{" "}
              <div className="w-full flex items-center justify-start gap-2">
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
              </div>
              <div className="w-full flex justify-between md:justify-start gap-4">
                <Link href={"/"}>
                  {" "}
                  <button
                    className={`block w-[144px] rounded-[12px] bg-gradient-to-r from-[#4044ED] to-[#B832E9] px-4 py-3 text-center text-sm font-semibold text-white ${inter.className}`}
                  >
                    Enroll Now
                  </button>
                </Link>
                <Link href={"/"}>
                  <button
                    className={`block w-[144px] rounded-[12px] bg-neutral-300 px-4 py-3 text-center text-sm font-semibold text-black ${inter.className}`}
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <hr className="my-[14px]" />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
            <Linkitems text="230+ Videos" href="/" />
            <hr className="hidden md:flex rotate-90 bg-neutral-300 w-[25px]" />
            <Linkitems text="15+ Project" href="/" />{" "}
            <hr className="hidden md:flex rotate-90 bg-neutral-300 w-[25px]" />
            <Linkitems text="Downloadable Resources" href="/" />{" "}
            <hr className="hidden md:flex rotate-90 bg-neutral-300 w-[25px]" />
            <Linkitems text="Resume + Interview Prep EBooks" href="/" />
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

export default UltimateCourse;
