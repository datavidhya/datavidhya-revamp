"use client";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import DetailAccordion from "./DetailAccordion";
import axios from "axios";
import toast from "react-hot-toast";
import { CourseDetail } from "@prisma/client";
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
const CourseDetailSection = () => {
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

  const deleteCourseDetail = async (id: string) => {
    if (!confirm("Are you sure you want to delete this course detail?")) return;

    try {
      await axios.delete(`/api/v1/admin/courseDetail/${id}`);
      toast.success("Course detail deleted");
      setCourseDetails((prev) => prev.filter((detail) => detail.id !== id));
    } catch (err) {
      console.error("Error deleting course detail:", err);
      toast.error("Failed to delete course detail");
    }
  };

  useEffect(() => {
    fetchCourseDetails();
  }, []);
  const handleAccordionToggle = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };
  return (
    <div className="mx-auto px-2 md:px-28 my-16">
      <h1
        className={`w-full text-3xl md:text-5xl text-black font-semibold md:font-bold leading-[120%] text-center mb-6 md:mb-10 ${inter.className}`}
      >
        Course Details
      </h1>
      <div>
        <div className="flex  justify-left">
          <span className="flex flex-col md:flex-row ml-6 gap-2 md:gap-5 items-start md:items-center">
            <SumUpText text="10 Lessons" />
            <SumUpText text="20 Videos" />
            <SumUpText text="20 Articles" />
            <SumUpText text="18 Assignments" />
            <SumUpText text="24h 32min Completion Time" />
          </span>
         
        </div>{" "}
        <div className="mx-auto mt-8 md:mt-[65px] max-md:w-[98%] max-lg:w-3/4 lg:w-4/5">
          <div className="mx-auto flex w-full max-lg:flex-col">
            <div className="mt-0 md:mt-2 size-full max-lg:w-full mb-16 border-b">
              {courseDetails.map((item: any, index: any) => (
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
