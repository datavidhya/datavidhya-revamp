"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import { CourseDetailDemoData } from "@/context/GlobalData";
import DetailAccordion from "./DetailAccordion";
const inter = Inter({ subsets: ["latin"] });

interface prop {
  text: string;
}
export const SumUpText = ({ text }: prop) => {
  return (
    <div className="flex gap-2 items-center">
      <span className=" size-3 bg-slate-300 rounded-full "></span>{" "}
      <p
        className={`text-[16px] leading-[160%] font-medium text-[#807A82] ${inter.className}`}
      >
        {text}
      </p>
    </div>
  );
};
const CourseDetailSection = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const handleAccordionToggle = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };
  return (
    <div className="mx-auto px-28">
      <h1
        className={`text-5xl text-black font-bold leading-[120%] text-center mb-10 ${inter.className}`}
      >
        Course Details
      </h1>
      <div>
        <div className="flex justify-center">
          <span className="flex gap-5 items-center">
            <SumUpText text="10 Lessons" />
            <SumUpText text="20 Videos" />
            <SumUpText text="20 Articles" />
            <SumUpText text="18 Assignments" />
            <SumUpText text="24h 32min Completion Time" />
          </span>
          {/* <p
            className={`text-[14px] leading-[160%] font-medium text-[#807A82] ${inter.className}`}
          >
            Expand All Lessons
          </p> */}
        </div>{" "}
        <div className="mx-auto mt-[65px] max-md:w-[98%] max-lg:w-3/4 lg:w-4/5">
          <div className="mx-auto flex w-full max-lg:flex-col">
            <div className="mt-2 size-full max-lg:w-full mb-16 border-b">
              {CourseDetailDemoData.map((item: any, index: any) => (
                <DetailAccordion
                  mins={item.mins}
                  Sections={item.Sections}
                  key={index}
                  title={item.title}
                  content={item.content}
                  content2={item.content2}
                  content3={item.content3}
                  content4={item.content4}
                  content5={item.content5}
                  content6={item.content6}
                  time={item.time}
                  time2={item.time2}
                  time3={item.time3}
                  time4={item.time4}
                  time5={item.time5}
                  time6={item.time6}
                  border={index !== 5}
                  isOpen={openAccordion === item.title}
                  onToggle={() => handleAccordionToggle(item.title)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailSection;
