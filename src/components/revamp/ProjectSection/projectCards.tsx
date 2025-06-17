import { ProjectCardProps } from "@/context/types";
import { Inter, Roboto } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["greek"], weight: "400" });

const ProjectCard = ({
  title,
  description,
  image,
  topic,
  slug,
}: ProjectCardProps) => {
  return (
    <div className=" rounded-[28px] shadow-[0_15px_30px_-12px_rgba(0,0,0,0.25)] transition-transform duration-600 ease-in-out hover:[transform:perspective(1500px)_rotateY(18deg)] [transform:perspective(3000px)_rotateY(0deg)] ">
      <div className="w-[20rem] md:w-[25rem] h-auto rounded-[28px] border border-[#d7d7d7] p-4 md:p-3 ">
        <div className="mb-3 overflow-hidden rounded-[13px] border border-[#D7D7D7]">
          <img src={image} alt={slug} className="h-auto w-full object-cover" />
        </div>
        {/* <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className={` font-medium text-[#6D6C80] ${inter.className}`}>
              {title}
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
        </div>{" "} */}
      </div>
    </div>
  );
};

export default ProjectCard;
