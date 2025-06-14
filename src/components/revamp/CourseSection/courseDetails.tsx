"use client";
import CourseDetailSection from "@/components/revamp/combopackSection/CourseDetailSection";
import HeroSecCourseInfo from "@/components/revamp/CourseOverview/HeroSecCourseInfo";
import HeroSectionCard from "@/components/revamp/CourseOverview/HeroSectionCard";
import WhatWillYouLearn from "@/components/revamp/CourseOverview/WhatWillYouLearn";
import YourInstructor from "@/components/revamp/CourseOverview/YourInstructor";
import FAQsSection from "@/components/revamp/FaqSection/FaqsSection";
import Footer from "@/components/revamp/Footer/Footer";
import NavigationBar from "@/components/revamp/hero/NavigationBar";
import Testimony from "@/components/revamp/Testimony/Testimony";
import { Course } from "@/types";
import React from "react";

interface courseDetailInterface {
  courseInfo: Course;
}

const CourseDetailPage = ({ courseInfo }: courseDetailInterface) => {
  console.log(courseInfo);
  return (
    <div>
      {" "}
      <NavigationBar />
      <div className=" max-w-[1360px] mx-auto my-10 flex justify-between">
        <div className="relative w-[67%] ">
          <HeroSecCourseInfo course={courseInfo} />
          <hr className="my-16" />
          <WhatWillYouLearn />
          <CourseDetailSection />
          <YourInstructor />
        </div>
        <div className="w-[28%] sticky top-6 h-fit self-start">
          <HeroSectionCard />
        </div>
      </div>
      <Testimony />
      <FAQsSection />
      <Footer />
    </div>
  );
};

export default CourseDetailPage;
