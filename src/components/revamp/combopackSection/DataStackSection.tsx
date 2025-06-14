"use client";
import { Inter } from "next/font/google";
import React from "react";
import { motion } from "framer-motion";
import DataStackCard from "./DataStackCard";
import { Divide } from "lucide-react";
const inter = Inter({
  subsets: ["latin"],
});

const DataStackSection = () => {
  const TechStackImages = [
    "/combopack/techStack/t1.webp",
    "/combopack/techStack/t2.webp",
    "/combopack/techStack/t3.webp",
    "/combopack/techStack/t4.webp",
    "/combopack/techStack/t5.webp",
    "/combopack/techStack/t6.webp",
    "/combopack/techStack/t7.webp",
    "/combopack/techStack/t8.webp",
    "/combopack/techStack/t9.webp",
    "/combopack/techStack/t10.webp",
    "/combopack/techStack/t11.webp",
    "/combopack/techStack/t12.webp",
    "/combopack/techStack/t13.webp",
    "/combopack/techStack/t14.webp",
    "/combopack/techStack/t15.webp",
  ];
  return (
    <div className="flex flex-col items-center mt-24">
      <h1
        className={`text-3xl md:text-5xl text-center md:text-left font-bold leading-[120%] text-black mb-5 ${inter.className}`}
      >
        Learn the High-Demand Data Stack
      </h1>
      <p
        className={`text-sm md:text-lg text-center md:text-left font-normal leading-[150%] text-black mb-12 ${inter.className}`}
      >
        Gain proficiency with 14+ extensive projects designed to provide
        practical, real-world data engineering experience
      </p>
      <div className="relative w-full md:w-[90%] flex flex-col gap-7  overflow-hidden">
        <div className="w-full flex flex-wrap gap-8 ">
          {TechStackImages.map((icon, index) => (
            <DataStackCard icon={icon} key={index} />
          ))}{" "}
        </div>

        {/* <div className="absolute z-10 w-1/8 h-full bg-gradient-to-r from-[#040404]/15 to-transparent"></div>
        <div className="absolute z-10 right-0 w-1/8 h-full bg-gradient-to-l from-[#040404]/15 to-transparent"></div>
        <div className="scrollBar overflow-x-auto ">
          {" "}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-40%" }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className=" w-max flex gap-2 md:gap-7 justify-between"
          >
            
            <DataStackCard />
            <DataStackCard />
            <DataStackCard />
            <DataStackCard />
            <DataStackCard />
            <DataStackCard />
          </motion.div>
        </div>
        <div className="scrollBar overflow-x-auto ">
          {" "}
          <motion.div
            initial={{ x: "-40%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className=" w-max flex gap-2 md:gap-7 justify-between"
          >
            <DataStackCard />
            <DataStackCard />
            <DataStackCard />
            <DataStackCard />
            <DataStackCard />
            <DataStackCard />
            <DataStackCard />
          </motion.div>
        </div> */}
      </div>
    </div>
  );
};

export default DataStackSection;
