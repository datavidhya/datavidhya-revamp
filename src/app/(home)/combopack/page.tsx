import DataStackSection from "@/components/revamp/combopackSection/DataStackSection";
import FAQsSection from "@/components/revamp/FaqSection/FaqsSection";
import Footer from "@/components/revamp/Footer/Footer";
import NavigationBar from "@/components/revamp/hero/NavigationBar";
import React from "react";

const combopack = () => {
  return (
    <div>
      <NavigationBar />
      <DataStackSection />

      <img src={"/combopack/techStack.png"} className="mx-auto my-36"></img>
      <FAQsSection />
      <Footer />
    </div>
  );
};

export default combopack;
