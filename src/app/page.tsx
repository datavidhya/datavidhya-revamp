// import CoursesSection from "@/components/revamp/CourseSection/CoursesSection";
import FAQsSection from "@/components/revamp/FaqSection/FaqsSection";
import Footer from "@/components/revamp/Footer/Footer";
import HeroSection from "@/components/revamp/hero/HeroSection";
import NavigationBar from "@/components/revamp/hero/NavigationBar";
import LeetcodeProblem from "@/components/revamp/LeetcodeSection/LeetcodeProblem";
import ProjectSection from "@/components/revamp/ProjectSection/projectSection";
import ViewCounter from "@/components/revamp/socialMediaCounter/ViewCounter";
import Testimony from "@/components/revamp/Testimony/Testimony";
import UltimateCourse from "@/components/revamp/UltimateCourseSection/UltimateCourse";
import React from "react";

const Page = () => {
  return (
    <div className="bg-white pt-4">
      <NavigationBar />
      <HeroSection />
      <UltimateCourse />
      {/* <CoursesSection /> */}
      <ProjectSection />
      <LeetcodeProblem />
      <Testimony />
      <FAQsSection />
      <ViewCounter />
      <Footer />
    </div>
  );
};

export default Page;
