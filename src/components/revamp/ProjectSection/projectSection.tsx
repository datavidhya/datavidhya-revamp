"use client";

import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
import ProjectFeedbackCard from "./projectFeedbackCard";
import ProjectCard from "./projectCards";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import axios from "axios";
import Shimmer from "@/components/ui/Shimmer";

const inter = Inter({ subsets: ["latin"] });
interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  topic: string;
  image: string;
  createdAt: string;
}
interface projectFeedback {
  id: number;
  name: string;
  description: string;
  linkedInUrl: string;
  image: string;
  projectImage: string;
  createdAt: string;
}
const ProjectSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectloading, setProjectLoading] = useState(true);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const res = await axios.get("/api/v1/admin/projects");
      setProjects(res.data.projects);
    } catch (err) {
      console.error("Error fetching projects:", err);
    } finally {
      setProjectLoading(false);
    }
  };

  const [projectFeedback, setProjectFeedback] = useState<projectFeedback[]>([]);
  const fetchProjectFeedback = async () => {
    try {
      const res = await axios.get("/api/v1/admin/projectFeedback");
      setProjectFeedback(res.data.projectFeedbacks);
    } catch (err) {
      console.error("Error fetching courses:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
    fetchProjectFeedback();
  }, []);

  const [activeTab, setActiveTab] = useState("projects");
  const pathName = usePathname();
  // console.log(pathName);
  const projectArray =
    pathName === "/projects" ? projects : projects.slice(0, 3);

  const projectReview =
    pathName === "/projects" ? projectFeedback : projectFeedback.slice(0, 3);

  // console.log(projectArray);
  return (
    <div
      className={`w-full bg-[#FFFFFF] ${
        pathName === "/projects" ? "" : "pt-8"
      }`}
    >
      <p
        className={`text-center ${inter.className} mt-4 md:mt-20 font-bold text-[#8B90A1]`}
      >
        PROJECTS
      </p>
      <div className="flex justify-center">
        <h2
          className={`mt-5 -mb-2 w-full max-w-xs text-center text-3xl font-bold leading-[120%] text-[#000000] sm:max-w-md md:max-w-lg md:text-5xl lg:max-w-xl lg:text-[48px] xl:max-w-2xl ${inter.className}`}
        >
          Work on Real Time{" "}
          <span className="relative inline-block">
            Projects
            <svg
              className="absolute -bottom-5 left-1/2 w-full max-w-[120px] -translate-x-1/2 sm:-bottom-6 md:-bottom-3 sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px]"
              height="35"
              viewBox="0 0 200 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M10,25 Q100,10 190,25"
                stroke="#a855f7"
                strokeWidth="3"
                fill="transparent"
              />
              <path
                d="M10,30 Q100,15 190,30"
                stroke="#a855f7"
                strokeWidth="3"
                fill="transparent"
              />
            </svg>
          </span>
        </h2>
      </div>
      <div className="mx-auto mt-[30px] flex w-full justify-center mb-10 md:mb-20">
        <p
          className={`text-center text-[17px] text-[#000000] ${inter.className}`}
        >
          Gain proficiency with 14+ extensive projects designed to provide
          practical, real-world <br className="flex md:hidden" /> data
          engineering experience
        </p>
      </div>

      <div className="mt-5 flex justify-center">
        <div className="inline-flex overflow-hidden mb-2 md:mb-10">
          <button
            className={`rounded-l-2xl px-6 py-2.5 text-sm font-medium transition-colors focus:outline-none sm:text-base ${
              activeTab === "projects"
                ? "bg-gradient-to-r from-[#4044ED] to-[#B832E9] text-white"
                : "border border-gray-200 bg-white text-[#33333366] hover:bg-gray-100"
            } ${inter.className}`}
            onClick={() => setActiveTab("projects")}
          >
            Data Vidhya Projects
          </button>
          <button
            className={`rounded-r-2xl px-6 py-2.5 text-sm font-medium transition-colors focus:outline-none sm:text-base ${
              activeTab === "reviews"
                ? "bg-gradient-to-r from-[#4044ED] to-[#B832E9] text-white"
                : "border border-gray-200 bg-white text-[#33333366] hover:bg-gray-100"
            } ${inter.className}`}
            onClick={() => setActiveTab("reviews")}
          >
            Student Reviews
          </button>
        </div>
      </div>
      {projects.length === 0 || projectFeedback.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="mx-auto my-10 max-w-7xl px-4">
          {activeTab === "projects" ? (
            <div className="flex flex-wrap items-center justify-center gap-4">
              {projectArray.map((project, index) => (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  key={project.id + 10}
                >
                  <ProjectCard
                    title={project.title}
                    slug={project.slug}
                    description={project.description}
                    topic={project.topic}
                    image={project.image}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap items-center justify-center gap-4">
              {projectReview.map((feedback, index) => (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  key={feedback.id}
                >
                  <ProjectFeedbackCard
                    description={feedback.description}
                    name={feedback.name}
                    image={feedback.image}
                    projectImage={feedback.projectImage}
                    linkedInUrl={feedback.linkedInUrl}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      )}
      <div
        className={`w-full  ${
          pathName === "/projects"
            ? "hidden"
            : "flex items-center justify-center"
        }`}
      >
        {" "}
        <Link href={"/projects"}>
          <button
            className={`w-40 rounded-[12px] bg-[#2E2E2E] px-4 py-3 text-center text-sm font-semibold text-white ${inter.className} mt-6 md:mt-16 mb-6 md:mb-28  cursor-pointer`}
          >
            View All {activeTab === "projects" ? " Projects" : " Reviews"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
