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
    <div className=" pt-4 overflow-x-hidden">
      <NavigationBar />
      <HeroSection />
      <UltimateCourse />
      <ProjectSection />
      <LeetcodeProblem />
      <Testimony />
      <FAQsSection />
      <TopicCovered />
      <ViewCounter />
      <div className="flex justify-center my-8 mx-2">
        <img
          src="/revamp/bottomimage.png"
          alt="banner"
          className="hidden md:flex"
        />
        <img
          src="/revamp/mobileBanner.jpeg"
          alt="banner"
          className="block md:hidden mx-2"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
