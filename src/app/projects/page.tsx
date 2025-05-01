import NavigationBar from "@/components/revamp/hero/NavigationBar";
import ProjectSection from "@/components/revamp/ProjectSection/projectSection";
import Link from "next/link";
import React from "react";
import { SlArrowLeft } from "react-icons/sl";

const page = () => {
  return (
    <div className="bg-white p-4">
      <div className="">
        <Link href={"/"}>
          <SlArrowLeft
            className=" hidden md:block absolute top-6 left-10 text-black"
            size={28}
          />
        </Link>
        <NavigationBar />
      </div>
      <ProjectSection />
    </div>
  );
};

export default page;
