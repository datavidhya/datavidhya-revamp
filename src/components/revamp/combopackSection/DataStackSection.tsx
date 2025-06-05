import { Inter } from "next/font/google";
import React from "react";
import DataStackCard from "./DataStackCard";
const inter = Inter({
  subsets: ["latin"],
});
const DataStackSection = () => {
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
      <div className="relative w-[70%] flex flex-col gap-7 flex-nowrap">
        <div className="absolute w-1/8 h-full bg-gradient-to-r from-[#040404]/15 to-transparent"></div>
        <div className="absolute right-0 w-1/8 h-full bg-gradient-to-l from-[#040404]/15 to-transparent"></div>
        <div className="flex flex-nowrap gap-7 justify-between">
          <DataStackCard />
          <DataStackCard />
          <DataStackCard />
          <DataStackCard />
        </div>
        <div className="flex gap-7 justify-between">
          <DataStackCard />
          <DataStackCard />
          <DataStackCard />
          <DataStackCard />
        </div>
      </div>
    </div>
  );
};

export default DataStackSection;
