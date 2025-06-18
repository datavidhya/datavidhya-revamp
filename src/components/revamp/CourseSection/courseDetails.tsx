"use client";
import HeroSecCourseInfo from "@/components/revamp/CourseOverview/HeroSecCourseInfo";
import HeroSectionCard from "@/components/revamp/CourseOverview/HeroSectionCard";
import WhatWillYouLearn from "@/components/revamp/CourseOverview/WhatWillYouLearn";
import YourInstructor from "@/components/revamp/CourseOverview/YourInstructor";
import FAQsSection from "@/components/revamp/FaqSection/FaqsSection";
import Testimony from "@/components/revamp/Testimony/Testimony";
import { Course } from "@/types";
import React from "react";
import OverviewDetailSection from "../CourseOverview/OverviewDetailSection";

interface courseDetailInterface {
  courseInfo: Course;
}

const CourseDetailPage = ({ courseInfo }: courseDetailInterface) => {
  console.log(courseInfo);
  let youtubeUrl = "";
  switch (courseInfo.slug) {
    case "workflow-orchestration":
      youtubeUrl = "https://youtube.com/embed/5peQThvQmQk";
      break;
    case "sql-data-engineering":
      youtubeUrl = "https://www.youtube.com/embed/JDRfdFBxDJ8";
      break;
    case "python-data-engineering":
      youtubeUrl = "https://www.youtube.com/embed/5mpUFFtSxKk";
      break;
    case "apache-kafka":
      youtubeUrl = "https://youtube.com/embed/Ydts27Qa8H0";
      break;
    case "spark-with-databricks":
      youtubeUrl = "https://www.youtube.com/embed/V7ue-tM2aYU";
      break;
    case "data-warehouse-snowflake":
      youtubeUrl = "https://www.youtube.com/embed/5Nh9aCpvo6w";
      break;
    default:
      " https//www.youtube.com/embed/5Nh9aCpvo6w";
      break;
  }

  return (
    <div>
      {" "}
      <div className=" max-w-[1360px] mx-auto my-10 flex flex-col-reverse md:flex-row justify-between">
        <div className="relative w-full md:w-[67%] ">
          <HeroSecCourseInfo course={courseInfo} />
          <hr className="my-16" />
          <WhatWillYouLearn />
          <OverviewDetailSection />
          <YourInstructor />
        </div>
        <div className="w-full md:w-[28%] md:sticky md:top-6 h-fit self-start">
          <HeroSectionCard youtubeUrl={youtubeUrl} />
        </div>
      </div>
      <Testimony />
      <FAQsSection />
    </div>
  );
};

export default CourseDetailPage;
