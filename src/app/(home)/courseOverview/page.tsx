import CourseDetailSection from "@/components/revamp/combopackSection/CourseDetailSection";
import HeroSecCourseInfo from "@/components/revamp/CourseOverview/HeroSecCourseInfo";
import HeroSectionCard from "@/components/revamp/CourseOverview/HeroSectionCard";
import WhatWillYouLearn from "@/components/revamp/CourseOverview/WhatWillYouLearn";
import YourInstructor from "@/components/revamp/CourseOverview/YourInstructor";
import NavigationBar from "@/components/revamp/hero/NavigationBar";
import Testimony from "@/components/revamp/Testimony/Testimony";
import React from "react";

const page = () => {
  return (
    <div>
      <NavigationBar />
      <div className="flex">
        <div className="w-[70%]">
          <HeroSecCourseInfo />
          <hr className="" />
          <WhatWillYouLearn />
          <CourseDetailSection />
          <YourInstructor />
        </div>
        <div className="w-[30%]">
          <HeroSectionCard />
        </div>
      </div>
      <Testimony />
    </div>
  );
};

export default page;
