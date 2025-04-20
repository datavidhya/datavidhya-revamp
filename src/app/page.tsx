// import CoursesSection from "@/components/revamp/CourseSection/CoursesSection";
import FAQsSection from "@/components/revamp/FaqSection/FaqsSection";
import Footer from "@/components/revamp/Footer/Footer";
import HeroSection from "@/components/revamp/hero/HeroSection";
import NavigationBar from "@/components/revamp/hero/NavigationBar";
import LeetcodeProblem from "@/components/revamp/LeetcodeSection/LeetcodeProblem";
import TopicCovered from "@/components/revamp/marquee/TopicCovered";
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
      <ProjectSection />
      <LeetcodeProblem />
      <Testimony />
      <FAQsSection />
      <TopicCovered />
      <ViewCounter />
      <div className="hidden md:flex justify-center my-8">
        <img src="/revamp/bottomimage.png" alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
