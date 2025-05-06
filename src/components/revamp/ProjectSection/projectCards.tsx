import { ProjectCardProps } from "@/context/types";
import { Inter, Roboto } from "next/font/google";
import React from "react";
  
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["greek"], weight: "400" });

const ProjectCard = ({
  name,
  description,
  projectImgUrl,
  topic,
}: ProjectCardProps) => {
  return (
    <div className="w-[20rem] md:w-[25rem] rounded-[28px] border border-[#D7D7D7] p-4 md:p-6 shadow-sm">
      <div className="mb-3 overflow-hidden rounded-[13px] border border-[#D7D7D7]">
        <img
          src={projectImgUrl}
          alt="Project preview"
          className="h-48 w-full object-cover"
        />
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className={` font-medium text-[#6D6C80] ${inter.className}`}>
            {name}
          </h2>
          <span
            className={`rounded-full bg-[#EFEFF2] px-3 py-1 text-xs md:text-sm text-[#161439] ${inter.className}`}
          >
            {topic}
          </span>
        </div>
        <p
          className={`mb-4 line-clamp-4 text-[14px] leading-6 text-[#000000b2] ${inter.className}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
