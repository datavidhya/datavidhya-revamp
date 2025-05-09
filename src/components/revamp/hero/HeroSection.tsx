"use client";
import { FaCheckCircle } from "react-icons/fa";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Carousel from "./Carousel";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { AuroraText } from "@/components/magicui/aurora-text";
// import Reordering from "./Reordering";
const inter = Inter({ subsets: ["latin"] });
interface prop {
  src: string;
  href: string;
  classname?: string;
}
export const CourseImg = ({ src, href, classname }: prop) => {
  return (
    <Link href={href}>
      <img
        alt="+3"
        src={src}
        className={`${classname} h-full w-full object-cover rounded-md`}
      />
    </Link>
  );
};

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };
  const cardContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const cardItem = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <div className="left-0 top-0 flex h-full inset-0 overflow-hidden bg-white">
        <RetroGrid angle={55} cellSize={40} />
        {/* <img
          src="/revamp/tiltgrid.jpg"
          className="absolute bottom-0 h-[40%] w-full min-w-full object-cover opacity-25"
          alt="Grid background"
        /> */}
      </div>
      <div className="absolute left-0 top-0 hidden h-full w-screen max-w-none items-end justify-between overflow-hidden md:flex">
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex h-full w-1/2 overflow-hidden"
        >
          <img
            src="/revamp/realBg1.svg"
            className="absolute -bottom:[35%] xl:-bottom-[15%] -left-1/4 xl:-left-1/4 h-[740px] w-full -rotate-12"
            alt="Background decoration img 1"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-full w-1/2 overflow-hidden"
        >
          <img
            src="/revamp/realBg2.svg"
            className="absolute -bottom-[30%] -right-1/5 h-[900px] w-full -rotate-12 max-2xl:-bottom-[35%] max-2xl:w-[800px]"
            alt="Background decoration 2"
          />
        </motion.div>
      </div>

      <div className="relative w-full">
        {/* <NavigationBar /> */}

        {isMounted && (
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="mx-auto  max-w-full px-4 py-3 sm:px-6 md:px-8 lg:w-[80rem] lg:px-5"
          >
            <motion.h1
              variants={item}
              className="relative max-w-full text-3xl font-bold leading-[1.2] text-[#333333] sm:text-4xl md:text-[44px] md:leading-[100%] lg:text-[61px] my-0  md:my-6"
            >
              Unlock your
              <br className="block md:hidden" />
              {/* <span className="bg-gradient-to-r from-[#2D3BF2] to-[#B832E9] bg-clip-text text-transparent">
               {" "}
              </span> */}
              <AuroraText className="mx-0 md:mx-1.5">
                {" "}
                Data Engineering
              </AuroraText>
              <br className="block md:hidden" />
              potential today{" "}
            </motion.h1>{" "}
            <motion.div
              variants={item}
              className="my-4 flex flex-row flex-wrap gap-3 max-sm:flex-col md:my-6 lg:my-8 md:gap-4"
            >
              <p
                className={`flex items-center gap-1.5 text-sm font-light text-[#3D3D3D] md:text-base ${inter.className}`}
              >
                <FaCheckCircle className="size-4 text-[#1DBA0C] md:size-5" />
                Engage In Real-time Projects
              </p>
              <p
                className={`flex items-center gap-1.5 text-sm font-light text-[#3D3D3D] md:text-base ${inter.className}`}
              >
                <FaCheckCircle className="size-4 text-[#1DBA0C] md:size-5" />
                Solve leet-code like problems
              </p>
              <p
                className={`flex items-center gap-1.5 text-sm font-light text-[#3D3D3D] md:text-base ${inter.className}`}
              >
                <FaCheckCircle className="size-4 text-[#1DBA0C] md:size-5" />
                Learn latest trends from our courses
              </p>
            </motion.div>
            <motion.div
              variants={item}
              className="flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <button
                className={`rounded-[12px] bg-gradient-to-r from-[#4044ED] to-[#B832E9] px-6 py-2.5 font-normal md:font-semibold text-white transition-transform hover:scale-105 sm:px-8 sm:py-3 ${inter.className}`}
              >
                Explore Courses
              </button>
              <button
                className={`rounded-[12px] bg-[#2E2E2E] px-6 py-2.5 font-normal md:font-semibold text-white transition-transform hover:scale-105 sm:px-8 sm:py-3 ${inter.className}`}
              >
                Solve Questions
              </button>
            </motion.div>
            <motion.div
              variants={cardContainer}
              initial="hidden"
              animate="show"
              className="mt-6 flex w-full flex-col gap-6 md:mt-10 md:flex-row justify-between md:gap-8 lg:gap-16"
            >
              <motion.div
                variants={cardItem}
                className="w-full rounded-[20px] border  border-[#D7D7D7] bg-gradient-to-br from-neutral-50 to-neutral-100 p-4 sm:p-6 md:w-1/2 lg:w-[45%] md:rounded-[28px] md:p-5 "
              >
                <div className="w-full mb-4 ">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                    <CourseImg href="/" src="/revamp/course1.jpeg" />
                    <CourseImg href="/" src="/revamp/course4.webp" />
                    <CourseImg href="/" src="/revamp/course6.webp" />
                    <div className="flex lg:hidden">
                      {" "}
                      <CourseImg href="/" src="/revamp/3img.jpg" />
                    </div>
                    <CourseImg
                      href="/"
                      src="/revamp/course2.png"
                      classname="hidden lg:block"
                    />
                    <CourseImg
                      href="/"
                      src="/revamp/course3.png"
                      classname="hidden lg:block"
                    />
                    <CourseImg
                      href="/"
                      src="/revamp/course5.webp"
                      classname="hidden lg:block"
                    />
                  </div>
                  {/* <Reordering /> */}
                </div>
                <div className="mt-auto">
                  <h3
                    className={`${inter.className} text-lg font-semibold text-[#333333] md:text-xl`}
                  >
                    Data Vidhya{" "}
                    <Link href={"/courses"}>
                      {" "}
                      <span className="font-bold text-[#1455BE]">Courses</span>
                    </Link>
                  </h3>
                  <p
                    className={`mt-1 font-medium text-[#333333B2]/70 md:text-base ${inter.className}`}
                  >
                    Our extensive course catalogue keeps you in trend with data
                    Engineering
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={cardItem}
                className="w-full rounded-[20px] border border-[#D7D7D7] bg-[#FAFAFA] p-4 sm:p-6 md:w-1/2  lg:w-[45%] md:rounded-[28px] md:p-6 "
              >
                <div className="flex w-full justify-center mb-4">
                  <div className="w-full max-w-[520px] overflow-hidden rounded-lg shadow-lg">
                    <Carousel />
                    {/* <div className="h-64 rounded-lg overflow-hidden">
                      {" "}
                      <img
                        src="/revamp/orange.png"
                        alt=""
                        className=" object-cover"
                      />
                    </div> */}
                  </div>
                </div>
                <div className="mt-auto">
                  <h3
                    className={`${inter.className} text-lg font-semibold text-[#333333] md:text-xl`}
                  >
                    Data Vidhya{" "}
                    <Link href={"/platform"}>
                      {" "}
                      <span className="font-bold text-[#1455BE]">Platform</span>
                    </Link>
                  </h3>
                  <p
                    className={`mt-1 font-medium text-[#333333B2]/70 md:text-base ${inter.className}`}
                  >
                    Our extensive course catalogue keeps you in trend with data
                    Engineering
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
