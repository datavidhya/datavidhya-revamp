import Box from "@/components/revamp/Box";
import React from "react";

const page = () => {
  return (
    <div className="h-full w-full bg-white p-4 flex flex-col justify-center items-center mt-12">
      <h1 className="text-4xl text-black text-center font-bold">
        Hey Admin !! What do you wanna do today ?
      </h1>
      <div className="w-4/5 mx-auto  flex flex-wrap items-center justify-evenly gap-6 p-8 mt-6">
        <Box href="/admin/testimony" bgColor="bg-[#FF9B17]" text="Testimony" />
        <Box href="/admin/projects" bgColor="bg-[#B03052]" text="Projects" />
        <Box href="/admin/courses" bgColor="bg-[#309898]" text="Add Course" />
        <Box href="/admin/faq" bgColor="bg-blue-500" text="FAQs" />
        <Box href="/admin/comboPack" bgColor="bg-red-400" text="Combo Pack" />
        <Box
          href="/admin/recentlyPurchased"
          bgColor="bg-teal-400"
          text="Recently Purchased"
        />
        <Box
          href="/admin/projectReview"
          bgColor="bg-orange-400"
          text="Project Review"
        />
      </div>
    </div>
  );
};

export default page;
