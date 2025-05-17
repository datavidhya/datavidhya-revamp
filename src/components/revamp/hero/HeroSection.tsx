import React from "react";
import { ChevronRight } from "lucide-react";
import { Inter } from "next/font/google";
import { AuroraText } from "@/components/magicui/aurora-text";
import Hero from "@/app/exp/page";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
const HeroSection = () => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };
  return (
    <section className="relative flex flex-col justify-center items-center mb-6">
      <Hero />
      <Link href={"/"}>
        {" "}
        <div
          className={` h-[37px] w-[320px] flex items-center justify-evenly rounded-[30px] mt-[80px] mx-auto border border-[#2c2c2c] mb-4`}
        >
          <div className="w-[47px] h-[27px] rounded-[25px] py-[12px] px-[21px] bg-gradient-to-r from-[#2D3BF2] to-[#B832E9] text-white flex items-center justify-center">
            new
          </div>{" "}
          <p>Introducing datavidhya platform </p>
          <ChevronRight size={20} strokeWidth={1} />
        </div>
      </Link>

      <h1
        className={`font-bold text-[61px] text-center leading-[120%] tracking-[-2%] text-[#333] mb-4 ${inter.className}`}
      >
        The #1 Job Transition Platform for <br />
        <AuroraText className="mx-0 md:mx-1.5 leading-[120%]">
          Data Engineers.{" "}
        </AuroraText>
      </h1>
      <p
        className={`font-normal text-[22px] leading-[100%] tracking-[-2%] text-[#000]/60 mb-10 ${inter.className}`}
      >
        Crush System Design and AI Interview for breakfast!{" "}
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 mb-24">
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
      <p
        className={`h-[58px] font-medium text-2xl leading-[100%] tracking-[-2%] text-[#929292] ${inter.className}`}
      >
        Trusted by 25934 Engineers who got their dream job at
      </p>
      <img className="mb-32" src="/revamp/brand.svg" alt="brands" />

      <div className="p-4  rounded-[8px] bg-[#A434EA]/10 border border-[#000]/20">
        <div className="border rounded-[8px] border-[#000]/13">
          <img src="/revamp/heroScreenshot.svg" alt="background" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
