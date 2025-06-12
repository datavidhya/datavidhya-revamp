import Box from "@/components/revamp/Box";
import React from "react";
export const metadata = {
  title: "DataVidhya Admin Panel",
};
function page() {
  return (
    <div className="w-full p-8 ">
      {" "}
      <p className=" text-4xl text-black font-bold text-center ">
        Welcome Admin!!
      </p>
      <div className="p-8 flex gap-6 mx-auto  justify-center">
        <Box text="Testimony" bgColor="bg-teal-400" href="/admin/testimonial" />
        <Box text="Courses" bgColor="bg-orange-400" href="/admin/courses" />
        <Box text="Projects" bgColor="bg-rose-400" href="/admin/projects" />
        <Box
          text="Project  Feedbacks"
          bgColor="bg-emerald-400"
          href="/admin/projectFeedback"
        />
        <Box
          text="Recently Purchased"
          bgColor="bg-blue-400"
          href="/admin/recently-purchase"
        />
        <Box
          text="Course Detail (ComboPack)"
          bgColor="bg-green-400"
          href="/admin/CourseDetail"
        />
      </div>
    </div>
  );
}

export default page;
