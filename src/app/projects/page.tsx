import NavigationBar from "@/components/revamp/hero/NavigationBar";
import ProjectSection from "@/components/revamp/ProjectSection/projectSection";
import React from "react";

const page = () => {
  return (
    <div className="bg-white">
      <NavigationBar />
      <ProjectSection />
    </div>
  );
};

export default page;
