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
      <img
        src="/combopack/heroImage.png"
        className="hidden md:block mx-auto mt-12"
        alt=""
      />
      <img
        src="/combopack/heroImageMobile.png"
        className="block md:hidden mx-auto mt-6"
        alt=""
      />
      {/* <CombeHeroSection /> */}
      <img
        src={"/combopack/techStack.png"}
        className="hidden md:block mx-auto my-36"
      ></img>{" "}
      <img
        src={"/combopack/techStackMobile.png"}
        className="block md:hidden  mx-auto my-6"
      ></img>
      <DataStackSection />
      <ComboProjectReview />
      <CourseDetailSection />
      <FAQsSection />
      <Footer />
    </div>
  );
};

export default combopack;
