import CoursesSection from "@/components/revamp/CourseSection/CoursesSection";
import NavigationBar from "@/components/revamp/hero/NavigationBar";
import React from "react";
export const metadata = {
  title: "DataVidhya Courses",
};
const page = () => {
  return (
    <div>
      <NavigationBar />
      <CoursesSection />
    </div>
  );
};

export default page;
