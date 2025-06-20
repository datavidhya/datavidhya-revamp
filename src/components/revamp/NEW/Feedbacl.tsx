"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import Marquee from "react-fast-marquee";
import { ProjectFeedCard } from "./ProjectFeedCard";

// Define interface for CoveredImage type
interface CoveredImage {
  name: string;
  profileImg: string;
  userReview: string;
  projectImgUrl: string;
  userProjectUrl: string;
}

// Main component to fetch and display project reviews
export const ProjectFeedBack = () => {
  const [projectReviews, setProjectReviews] = useState<CoveredImage[]>([]);
  const hasFetchedData = useRef(false);

  // Fetch project reviews when component mounts
  useEffect(() => {
    const fetchAllProjectReviews = async () => {
      try {
        const res = await axios.get(`/api/v1/admin/projectFeedback`);
        setProjectReviews(res.data.data);
      } catch (error) {
        console.error("Error fetching project reviews:", error);
      }
    };

    // Ensure the data is fetched only once
    if (!hasFetchedData.current) {
      fetchAllProjectReviews();
      hasFetchedData.current = true;
    }
  }, []);

  return (
    <div className=" mx-auto mb-6 mt-16 w-4/5 overflow-hidden max-2xl:w-[90%] max-lg:w-full max-md:mt-16 max-md:w-[95%]">
      <div className="mx-auto flex w-[88%] justify-between max-2xl:w-[88%] max-lg:w-[90%]  max-md:flex-col">
        <h2 className="w-[392px] text-[48px] font-medium leading-[55px] text-white dark:text-black max-2xl:ml-14 max-2xl:w-[380px] max-2xl:text-[44px] max-xl:text-[36px] max-lg:ml-5 max-lg:text-[35px] max-lg:leading-[45px] max-md:ml-0 max-md:w-4/5 max-md:text-[32px] max-md:leading-[35px] ">
          Project reviews from students
        </h2>
        <p className="mt-6 w-[350px] text-[20px] leading-[24px] text-[#787878] max-lg:mt-3 max-lg:text-[16px] max-md:mt-2 max-md:w-4/5 max-md:text-sm max-md:leading-[19px]">
          Perfect for those eager to build robust data pipelines and advance
          their career in data engineering.
        </p>
      </div>
      <ProjectFeedCard projectReviews={projectReviews} />
      <div className="mt-1.5 flex w-full justify-end  pr-36 max-md:text-center">
        <Link
          href={"/students-projects"}
          className="cursor-pointer text-white dark:text-black "
        >
          Show more
        </Link>
      </div>
    </div>
  );
};
