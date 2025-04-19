import CoursesSection from "@/components/revamp/CourseSection/CoursesSection";
import FAQsSection from "@/components/revamp/FaqSection/FaqsSection";
import Footer from "@/components/revamp/Footer/Footer";
import HeroSection from "@/components/revamp/hero/HeroSection";
import LeetcodeProblem from "@/components/revamp/LeetcodeSection/LeetcodeProblem";
import ProjectSection from "@/components/revamp/ProjectSection/projectSection";
import Testimony from "@/components/revamp/Testimony/Testimony";
import UltimateCourse from "@/components/revamp/UltimateCourseSection/UltimateCourse";
import React from "react";

const Page = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <UltimateCourse />
      {/* <CoursesSection /> */}
      <ProjectSection />
      <LeetcodeProblem />
      <Testimony />
      <FAQsSection />
      <Footer />
    </div>
  );
};

export default Page;
