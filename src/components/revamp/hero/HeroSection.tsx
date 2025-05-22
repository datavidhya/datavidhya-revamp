import React from "react";
import { ChevronRight } from "lucide-react";
import { Inter } from "next/font/google";
import { AuroraText } from "@/components/magicui/aurora-text";
import Link from "next/link";
import Hero from "./Hero";
// import RadialGlow from "./RadialGlow";
const inter = Inter({ subsets: ["latin"] });
const HeroSection = () => {
  // const item = {
  //   hidden: { y: 20, opacity: 0 },
  //   show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  // };
  return (
    <section className="relative flex flex-col justify-center items-center mb-6">
    
      <Hero />
      <Link href={"/"} className=" md:z-10">
        {" "}
        <div
          className={` h-[37px] p-1 md:p-3 flex items-center justify-evenly rounded-[30px] mt-8 md:mt-[80px] mx-auto border-[0.6px] md:border border-[#2c2c2c]/22 md:border-[#2c2c2c] mb-8 z-10`}
        >
          <div className=" rounded-[25px] py-0.5 px-2 bg-gradient-to-r from-[#4044ED] to-[#B832E9]  md:z-10 mr-1 flex items-center justify-center">
            <p className="text-white text-center my-auto text-sm"> new</p>
          </div>{" "}
          <p className="text-[12.5px]">Introducing datavidhya platform </p>
          <ChevronRight size={20} strokeWidth={1} />
        </div>
      </Link>

      <h1
        className={`font-bold text-2xl md:text-[61px]  text-center leading-[120%] tracking-[-2%] text-[#333] mb-10 md:mb-4 ${inter.className}`}
      >
        The #1 Job Transition <br className="flex md:hidden" /> Platform for{" "}
        <br className="hidden md:flex" />
        <AuroraText className="mx-0 md:mx-1.5 leading-[120%]">
          Data Engineers.{" "}
        </AuroraText>
      </h1>
      <p
        className={`hidden md:flex font-normal text-[22px] leading-[100%] tracking-[-2%] text-[#000]/60 mb-10  md:z-10 ${inter.className}`}
      >
        Crush System Design and AI Interview for breakfast!{" "}
      </p>
      <div className="flex flex-row gap-1.5 md:gap-4 mb-12 md:mb-24 ">
        <button
          className={` rounded-[12px] bg-gradient-to-r from-[#4044ED] to-[#B832E9] px-6 py-2.5 font-normal md:font-semibold text-white transition-transform hover:scale-105 sm:py-3 ${inter.className}`}
        >
          Explore Courses
        </button>
        <button
          className={`rounded-[12px] bg-[#2E2E2E] px-6 py-2.5 font-normal md:font-semibold text-white transition-transform hover:scale-105  sm:py-3 ${inter.className}`}
        >
          Solve Questions
        </button>
      </div>
      <p
        className={` font-medium text-[12px] md:text-2xl leading-[100%] tracking-[-2%] text-[#929292] z-10 ${inter.className}`}
      >
        Trusted by 25934 Engineers who got their dream job at
      </p>
      <img
        className="p-3 mb-10 md:mb-32  "
        src="/revamp/brand.svg"
        alt="brands"
      />

      <div className="p-1.5 md:p-4 mx-2 rounded-[8px] bg-[#A434EA]/10 border border-[#000]/20  md:z-10">
        <img src="/revamp/heroScreenshot.svg" alt="background" />
      </div>
    </section>
  );
};

export default HeroSection;
