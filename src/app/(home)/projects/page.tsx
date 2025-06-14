import NavigationBar from "@/components/revamp/hero/NavigationBar";
import ProjectSection from "@/components/revamp/ProjectSection/projectSection";
import React from "react";
export const metadata = {
  title: "DataVidhya Projects",
};
const page = () => {
  return (
    <div className="bg-white mb-32 ">
      <NavigationBar />
      <ProjectSection />
    </div>
  );
};

export default page;
