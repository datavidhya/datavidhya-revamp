"use client";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import axios from "axios";
import { CourseDetail } from "@prisma/client";
import CourseDetailAccordion from "./CourseDetailAccordion";
const inter = Inter({ subsets: ["latin"] });

interface prop {
  text: string;
}
export const SumUpText = ({ text }: prop) => {
  return (
    <div className="flex  gap-2 items-center">
      <span className="size-1.5 md:size-3 bg-slate-300 rounded-full "></span>{" "}
      <p
        className={`text-xs md:text-[16px] leading-[160%] font-medium text-[#807A82] ${inter.className}`}
      >
        {text}
      </p>
    </div>
  );
};
const OverviewDetailSection = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [courseDetails, setCourseDetails] = useState<CourseDetail[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCourseDetails = async () => {
    try {
      const res = await axios.get("/api/v1/admin/courseDetail");
      setCourseDetails(res.data.courseDetails);
    } catch (err) {
      console.error("Error fetching course details:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourseDetails();
  }, []);
  const handleAccordionToggle = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };
  return (
    <div className="mx-auto px-2 mb-16 mt-20">
      <h1
        className={`w-full text-3xl md:text-5xl text-black font-semibold md:font-bold leading-[120%]  mb-6 md:mb-10 ${inter.className}`}
      >
        Course Details
      </h1>
      <div>
        <div className="flex mx-auto max-md:w-[98%] ">
          <span className="flex flex-col md:flex-row ml-6 gap-2 md:gap-5 items-start md:items-center">
            <SumUpText text="10 Lessons" />
            <SumUpText text="20 Videos" />
          </span>
        </div>{" "}



        <div className="mx-auto mt-4 w-full">
          <div className="mx-auto flex w-full max-lg:flex-col">
            <div className="mt-0 md:mt-2 size-full max-lg:w-full mb-16 border-b">
              {courseDetails.map((item: any, index: any) => (
                <CourseDetailAccordion
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

export default OverviewDetailSection;
