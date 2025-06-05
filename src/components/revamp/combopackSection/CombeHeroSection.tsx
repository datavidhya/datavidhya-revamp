import React from "react";
import { Inter } from "next/font/google";
import { AuroraText } from "@/components/magicui/aurora-text";
import { FcOk } from "react-icons/fc";
const inter = Inter({ subsets: ["latin"] });
interface prop {
  num: number;
  text: string;
}
interface Tick {
  title: string;
}
export const HeroItem = ({ num, text }: prop) => {
  return (
    <div className="flex flex-row  md:flex-col items-center gap-2 md:gap-0 text-[#6B6B6B]">
      <p
        className={`text-[18px] md:text-[20px] font-normal md:font-semibold leading-[140%] text-center ${inter.className}`}
      >
        {num}+
      </p>
      <p
        className={`text-[14px] md:text-[10px] font-normal md:font-bold leading-[160%] ${inter.className}`}
      >
        {text}
      </p>
    </div>
  );
};
export const GreenTick = ({ title }: Tick) => {
  return (
    <span className="flex items-center gap-3 my-3 md:my-5">
      <FcOk className="size-5 md:size-6" />
      <p
        className={`text-[#363636] text-[16px] md:text-[20px] font-semibold leading-[24px] ${inter.className}`}
      >
        {title}
      </p>
    </span>
  );
};
const CombeHeroSection = () => {
  return (
    <div className="max-w-[1260px] mx-auto mt-6 md:mt-14">
      <div className="border border-[#000]/18 rounded-[8px] p-3">
        <div className="flex flex-col-reverse md:flex-row gap bg-[#8D35EC03]/1 border-0 md:border border-[#000]/18 rounded-2xl p-0 md:p-16">
          <div className="w-full  md:w-1/2">
            <div className="mt-6">
              <p
                className={`text-[23px] text-center md:text-left font-bold text-[#393737] leading-[120%] ${inter.className}`}
              >
                ZERO to HERO
              </p>
              <AuroraText className="text-[36px] mx-auto md:text-[51px] text-center font-bold mb-6 leading-[120%]">
                Data Engineering{" "}
              </AuroraText>
            </div>
            <div>
              <GreenTick title="6 Courses" />
              <GreenTick title="Free Resources" />
              <GreenTick title="Coding Exercise" />
              <GreenTick title="Lifetime access" />
              <GreenTick title="Quizes" />
              <GreenTick title="Real Time Projects" />
              <GreenTick title="Coding Exercises" />
              <GreenTick title="Certificate After Completion" />
            </div>
          </div>
          <div className="flex flex-col justify-evenly gap-5 border border-[#d7d7d7] rounded-[16px] p-3 md:p-5">
            <div className="w-full md:w-[500px]">
              <img
                src="/combopack/utube.png"
                className="rounded-lg"
                alt="youtubethumbnail"
              />
            </div>
            <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-left md:justify-evenly">
              <HeroItem text="Hours of Content" num={100} />
              <HeroItem text="Tech stack Project" num={11} />
              <HeroItem text="Students Enrolled" num={4312} />
              <HeroItem text="Projects" num={15} />
              <HeroItem text="Chapters" num={70} />
            </div>
            <div className=" flex justify-around md:justify-between py-[14px] px-10 bg-gradient-to-r from-[#2D3BF2] to-[#B832E9] rounded-[12px] text-white">
              <p
                className={`text-xs md:text-[16px] font-semibold ${inter.className}`}
              >
                BUY NOW <br className="flex md:hidden" /> @ 7,999 Rs
              </p>{" "}
              <p
                className={`text-xs md:text-[16px] text-center font-light  ${inter.className}`}
              >
                Offer Ends in <br className="flex md:hidden" /> 2:37
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombeHeroSection;
