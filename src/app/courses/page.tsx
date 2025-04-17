import CoursesSection from "@/components/revamp/CourseSection/CoursesSection";
import NavigationBar from "@/components/revamp/hero/NavigationBar";
import React from "react";

const page = () => {
  return (
    <div className="bg-white flex flex-col">
      <NavigationBar />
      <CoursesSection />
    </div>
  );
};
CoursesSection;

export default page;
