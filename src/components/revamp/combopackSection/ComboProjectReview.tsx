// "use client";
// import React, { useEffect, useState } from "react";
// import { Inter } from "next/font/google";
// import ProjectCard from "../ProjectSection/projectCards";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { LoaderCircle } from "lucide-react";
// import Shimmer from "@/components/ui/Shimmer";
// const inter = Inter({ subsets: ["latin"] });
// interface Project {
//   id: number;
//   title: string;
//   slug: string;
//   description: string;
//   topic: string;
//   image: string;
//   createdAt: string;
// }

// const ComboProjectReview = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [projectloading, setProjectLoading] = useState(true);

//   const fetchProjects = async () => {
//     try {
//       const res = await axios.get("/api/v1/admin/projects");
//       setProjects(res.data.projects);
//     } catch (err) {
//       console.error("Error fetching projects:", err);
//     } finally {
//       setProjectLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchProjects();
//   }, []);
//   return (
//     <div className="flex flex-col items-center mt-28">
//       <h1
//         className={`text-3xl md:text-5xl text-center font-bold leading-[120%] text-black mb-4 ${inter.className}`}
//       >
//         Project reviews from students
//       </h1>
//       <p
//         className={`text-sm md:text-lg text-center font-normal leading-[150%] text-black mb-10 md:mb-16 ${inter.className}`}
//       >
//         Perfect for those eager to build robust data pipelines and advance their
//         career in data engineering
//       </p>
//       {projects.length === 0 ? (
//         <Shimmer />
//       ) : (
//         <div className="flex flex-wrap items-center justify-center gap-4">
//           {projects.map((project, index) => (
//             <motion.div
//               initial={{ y: 100, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               key={project.id + 10}
//             >
//               <ProjectCard
//                 title={project.title}
//                 slug={project.slug}
//                 description={project.description}
//                 topic={project.topic}
//                 image={project.image}
//               />
//             </motion.div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ComboProjectReview;
"use client";

import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import axios from "axios";
import Shimmer from "@/components/ui/Shimmer";
import ProjectFeedbackCard from "../ProjectSection/projectFeedbackCard";

const inter = Inter({ subsets: ["latin"] });

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
  const [loading, setLoading] = useState(true);

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
    fetchProjectFeedback();
  }, []);

  const [activeTab, setActiveTab] = useState("projects");

  // console.log(projectArray);
  return (
    <div className={`w-full bg-[#FFFFFF]`}>
      {projectFeedback.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="mx-auto my-10 max-w-7xl px-4">
          <h1 className="text-5xl font-bold mx-auto text-center mt-20 mb-14">
            Project Reviews from Students
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {projectFeedback.map((feedback, index) => (
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
        </div>
      )}
    </div>
  );
};

export default ProjectSection;
