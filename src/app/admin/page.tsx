import Box from "@/components/revamp/Box";
import React from "react";

function page() {
  return (
    <div className="p-8">
      {" "}
      <p className=" text-4xl text-black font-bold text-center ">Welcome Admin!!</p>
      <div className="p-8 flex gap-6">
        <Box text="Testimony" bgColor="bg-teal-400" href="/admin/testimonial" />
        <Box text="Courses" bgColor="bg-orange-400" href="/admin/courses" />
        <Box text="Projects" bgColor="bg-rose-400" href="/admin/projects" />
        <Box text="Project Reviews" bgColor="bg-emerald-400" href="/admin/projectReviews" />
      </div>
    </div>
  );
}

export default page;
