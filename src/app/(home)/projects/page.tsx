import NavigationBar from "@/components/revamp/hero/NavigationBar";
import ProjectSection from "@/components/revamp/ProjectSection/projectSection";
import React from "react";
export const metadata = {
  title: "DataVidhya Projects",
};
const page = () => {
  return (
    <div className="bg-white mb-32 ">
      <div className="">
        {/* <Link href={"/"}>
          <SlArrowLeft
            className=" hidden md:block absolute top-6 left-10 text-black"
            size={28}
          />
        </Link> */}
        <NavigationBar />
      </div>
      <ProjectSection />
    </div>
  );
};

export default page;
