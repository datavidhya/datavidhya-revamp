import React from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const HeroSection = () => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };
  return (
    <section className="flex flex-col ">
      <div className="h-[37px] w-[320px] flex items-center justify-center rounded-[30px] mt-[120px] mx-auto border border-[#2c2c2c]">
        <div className="w-[47px] h-[27px] rounded-[25px] py-[12px] px-[21px] bg-gradient-to-r from-[#2D3BF2] to-[#B832E9] text-white flex items-center justify-center">
          new
        </div>{" "}
        <p>Introducing datavidhya platform </p>
        <ChevronRight />
      </div>

      <h1 className="text-black">
        The #1 Job Transition Platform for <span>Data Engineers</span>
      </h1>
      <p className="text-black">
        Crush System Design and AI Interview for breakfast!{" "}
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
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
      </div>
      <p>Trusted by 25934 Engineers who got their dream job at</p>

      <div className="p-4">
        <div>
          <img src="/" alt="background" />
          <div>
            <img src="/" alt="screenshot of platform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
