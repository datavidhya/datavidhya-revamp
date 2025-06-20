"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CirclePlay } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const topics = [
  "AWS",
  "Apache Airflow",
  "Microsoft Azure",
  "CSV",
  "Databricks",
  "Azure Data Factory",
  "Docker",
  "Kafka",
  "Google Cloud",
  "Apache NiFi",
  "Snowflake",
  "NumPy",
  "Pandas",
  "PostgreSQL",
  "Python",
  "Apache Spark",
  "SQL",
];

const YOUTUBE_VIDEO_ID = "zZVQluYDwYY";
const YOUTUBE_THUMBNAIL_URL = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`;

export default function LandingPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => setIsVideoModalOpen(true);
  const closeVideoModal = () => setIsVideoModalOpen(false);

  return (
    <div className="bg-[#0A0A0A] text-white dark:bg-white dark:text-black mt-10">
      <main className="container mx-auto px-4 py-10 max-md:py-10">
        <div className="mb-16 space-y-8 text-center">
          <div className="relative space-y-6">
            <h1
              className={`text-6xl herotext font-semibold tracking-tight leading-[4.5rem] max-md:leading-[3.5rem] max-md:text-[38px] ${poppins.className}`}
            >
              <div className="mb-4">
                <div>
                  <span className="inline-block transition-transform duration-200 hover:translate-y-[-2px]">
                    The #1
                  </span>{" "}
                  <span className="inline-block transition-transform duration-200 hover:translate-y-[-2px]">
                    job Transition
                  </span>{" "}
                  <span className="inline-block transition-transform duration-200 hover:translate-y-[-2px]">
                    Platform for
                  </span>
                </div>
                <div>
                  <span className="inline-block transition-transform duration-200 hover:translate-y-[-2px]">
                    Data Engineers
                  </span>
                  <span className="text-blue-600">.</span>
                </div>
              </div>
            </h1>

            <div className="mx-auto max-w-xl space-y-6 mt-8">
              <p className="text-lg text-neutral-500 dark:text-neutral-800">
                Master the art of data engineering with industry-leading courses
                designed for modern tech careers.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <a
                  href="/all-course"
                  className="rounded-md flex gap-2 items-center bg-blue-700 px-6 py-2.5 font-medium text-white hover:bg-blue-600"
                >
                  <CirclePlay size={19} />
                  Explore Courses
                </a>
                <a
                  href="/combo-pack"
                  className="rounded-md border border-neutral-800 bg-neutral-900 px-6 py-2.5 font-medium text-neutral-300 dark:text-black"
                >
                  View Curriculum
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-4/5 mx-auto mb-4 flex flex-wrap justify-center gap-3">
          {topics.map((topic) => (
            <Link
              key={topic}
              href="#"
              className="rounded-full bg-white/5 px-4 py-2 text-sm text-neutral-300 hover:scale-[1.06] transition-transform  hover:bg-white/10 hover:text-white dark:bg-neutral-300 dark:text-neutral-800"
            >
              {topic}
            </Link>
          ))}
        </div>

        <motion.div
          className="p-4 mt-20 rounded-[12px] max-w-5xl mx-auto bg-neutral-900 border border-[#000]/20 md:z-10 cursor-pointer group relative overflow-hidden"
          onClick={openVideoModal}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <img
              src={YOUTUBE_THUMBNAIL_URL}
              alt="Course Preview Video"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-300">
              <motion.div
                className="size-16 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <CirclePlay size={36} />
              </motion.div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Video Title */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold mb-1">
                Watch Course Preview
              </h3>
              <p className="text-sm text-gray-300">
                See what you'll learn in our data engineering course
              </p>
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {isVideoModalOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={closeVideoModal}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              <motion.div
                className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <button
                  onClick={closeVideoModal}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                  title="Course Preview Video"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
