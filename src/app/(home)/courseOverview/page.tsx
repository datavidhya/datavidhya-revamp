import CourseDetailSection from "@/components/revamp/combopackSection/CourseDetailSection";
import HeroSecCourseInfo from "@/components/revamp/CourseOverview/HeroSecCourseInfo";
import HeroSectionCard from "@/components/revamp/CourseOverview/HeroSectionCard";
import WhatWillYouLearn from "@/components/revamp/CourseOverview/WhatWillYouLearn";
import YourInstructor from "@/components/revamp/CourseOverview/YourInstructor";
import FAQsSection from "@/components/revamp/FaqSection/FaqsSection";
import Footer from "@/components/revamp/Footer/Footer";
import NavigationBar from "@/components/revamp/hero/NavigationBar";
import Testimony from "@/components/revamp/Testimony/Testimony";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <NavigationBar />
      <div className=" max-w-[1360px] mx-auto my-10 flex justify-between">
        <div className="w-[67%] ">
          <HeroSecCourseInfo />
          <hr className="my-16" />
          <WhatWillYouLearn />
          <CourseDetailSection />
          <YourInstructor />
        </div>
        <div className="w-[28%] ">
          <HeroSectionCard />
        </div>
      </div>
      <Testimony />
      <FAQsSection />
      <Footer /> */}
    </div>
  );
};

export default page;
