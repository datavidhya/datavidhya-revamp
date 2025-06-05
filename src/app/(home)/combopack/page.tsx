import CombeHeroSection from "@/components/revamp/combopackSection/CombeHeroSection";
import ComboProjectReview from "@/components/revamp/combopackSection/ComboProjectReview";
import CourseDetailSection from "@/components/revamp/combopackSection/CourseDetailSection";
import DataStackSection from "@/components/revamp/combopackSection/DataStackSection";
import FAQsSection from "@/components/revamp/FaqSection/FaqsSection";
import Footer from "@/components/revamp/Footer/Footer";
import NavigationBar from "@/components/revamp/hero/NavigationBar";
import React from "react";

const combopack = () => {
  return (
    <div>
      <NavigationBar />
      <CombeHeroSection />
      <DataStackSection />
      <ComboProjectReview />
      <img src={"/combopack/techStack.png"} className="hidden md:block mx-auto scale-[1.25] md:scale-100 my-36"></img>
      <CourseDetailSection />
      <FAQsSection />
      <Footer />
    </div>
  );
};

export default combopack;
