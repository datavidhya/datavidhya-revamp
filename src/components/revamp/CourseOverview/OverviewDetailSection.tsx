"use client";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { Course } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

interface Chapter {
  id: string;
  title: string;
  description?: string;
  position: number;
  isPublished: boolean;
  isFree: boolean;
  courseId: number;
  courseTitle?: string;
  courseSlug?: string;
}

interface prop {
  text: string;
}

export const SumUpText = ({ text }: prop) => {
  return (
    <div className="flex gap-2 items-center">
      <span className="size-1.5 md:size-3 bg-slate-300 rounded-full "></span>{" "}
      <p
        className={`text-xs md:text-[16px] leading-[160%] font-medium text-[#807A82] ${inter.className}`}
      >
        {text}
      </p>
    </div>
  );
};

const ChapterItem = ({
  chapter,
  courseSlug,
  chapterDescriptions,
  loadingChapterDescriptions,
  onChapterToggle,
}: {
  chapter: Chapter;
  courseSlug: string;
  chapterDescriptions: Record<string, string>;
  loadingChapterDescriptions: Set<string>;
  onChapterToggle: (courseSlug: string, chapterId: string) => void;
}) => {
  const chapterKey = `${courseSlug}-${chapter.id}`;
  const isChapterOpen = chapterDescriptions[chapterKey] !== undefined;
  const isLoadingDesc = loadingChapterDescriptions.has(chapterKey);

  return (
    <div className="border rounded-2xl border-[#D7D7D7] bg-[#353535] my-5 overflow-hidden">
      <div
        className={`flex cursor-pointer items-center justify-between gap-3 py-1.5 px-2 md:px-6 ${
          isChapterOpen ? "dark:bg-white" : ""
        }`}
        onClick={() => onChapterToggle(courseSlug, chapter.id)}
      >
        <span className="flex items-center gap-2 md:gap-6">
          <motion.div
            className="text-lg md:text-[28px] text-[#fff] flex items-center"
            animate={{ rotate: isChapterOpen ? 0 : 180 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {isChapterOpen ? "-" : "+"}
          </motion.div>
          <h5
            className={`py-4 text-[20px] font-medium text-[#fff] max-md:py-2 max-md:text-[14px] ${inter.className}`}
          >
            {chapter.title}
          </h5>
          {chapter.isFree && (
            <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded-full">
              Free
            </span>
          )}
        </span>
      </div>

      <AnimatePresence>
        {isChapterOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-neutral-200"
          >
            <div className="w-full pl-2 md:px-12 pt-4 rounded-b-[2px] px-4 pb-3 text-[14px] md:text-[16px] font-medium leading-6 md:leading-8 text-[#000] shadow-md">
              <div className="mt-3 pl-2">
                {isLoadingDesc ? (
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="animate-spin rounded-full h-3 w-3 border border-gray-300 border-t-gray-600"></div>
                    Loading description...
                  </div>
                ) : (
                  <div
                    className={`text-sm md:text-base leading-[160%] font-semibold text-[#3a3a3a] ${inter.className}`}
                    dangerouslySetInnerHTML={{
                      __html:
                        chapterDescriptions[chapterKey] ||
                        "No description available",
                    }}
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface OverviewDetailSectionProps {
  course: Course;
}

const OverviewDetailSection = ({ course }: OverviewDetailSectionProps) => {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [chapterDescriptions, setChapterDescriptions] = useState<
    Record<string, string>
  >({});
  const [loadingChapterDescriptions, setLoadingChapterDescriptions] = useState<
    Set<string>
  >(new Set());
  const [loading, setLoading] = useState(true);

  const fetchCourseChapters = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/v1/admin/courses/${course.slug}/chapters`
      );

      if (response.ok) {
        const data = await response.json();
        setChapters(data.chapters || []);
      } else {
        setChapters([]);
      }
    } catch (err) {
      console.error(`Error fetching chapters for course ${course.slug}:`, err);
      setChapters([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchChapterDescription = async (
    courseSlug: string,
    chapterId: string
  ) => {
    const key = `${courseSlug}-${chapterId}`;

    if (chapterDescriptions[key] || loadingChapterDescriptions.has(key)) {
      return;
    }

    setLoadingChapterDescriptions((prev) => new Set([...prev, key]));

    try {
      const response = await fetch(
        `/api/v1/admin/courses/${courseSlug}/chapters/${chapterId}`
      );

      if (response.ok) {
        const data = await response.json();
        setChapterDescriptions((prev) => ({
          ...prev,
          [key]: data.description || "No description available",
        }));
      } else {
        setChapterDescriptions((prev) => ({
          ...prev,
          [key]: "Failed to load description",
        }));
      }
    } catch (err) {
      console.error("Error fetching chapter description:", err);
      setChapterDescriptions((prev) => ({
        ...prev,
        [key]: "Failed to load description",
      }));
    } finally {
      setLoadingChapterDescriptions((prev) => {
        const newSet = new Set(prev);
        newSet.delete(key);
        return newSet;
      });
    }
  };

  useEffect(() => {
    if (course?.slug) {
      fetchCourseChapters();
    }
  }, [course?.slug]);

  const handleChapterToggle = async (courseSlug: string, chapterId: string) => {
    const key = `${courseSlug}-${chapterId}`;
    const isCurrentlyOpen = chapterDescriptions[key] !== undefined;

    if (isCurrentlyOpen) {
      setChapterDescriptions((prev) => {
        const newDescriptions = { ...prev };
        delete newDescriptions[key];
        return newDescriptions;
      });
    } else {
      await fetchChapterDescription(courseSlug, chapterId);
    }
  };

  if (loading) {
    return (
      <div className="mx-auto px-2 mb-16 mt-20">
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-600">Loading chapters...</span>
        </div>
      </div>
    );
  }

  if (!chapters.length) {
    return (
      <div className="mx-auto px-2 mb-16 mt-20">
        <h2
          className={`w-full text-2xl md:text-3xl text-black font-semibold leading-[120%] mb-6 ${inter.className}`}
        >
          Course Content
        </h2>
        <div className="text-center py-8 text-gray-500 border rounded-lg">
          No chapters available for this course
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto px-2 mb-16 mt-20">
      <h2
        className={`w-full text-2xl md:text-3xl lg:text-5xl text-black font-semibold md:font-bold leading-[120%] mb-6 ${inter.className}`}
      >
        Course Content
      </h2>

      <div className="flex mx-auto max-md:w-[98%] mb-6">
        <span className="flex flex-col md:flex-row ml-6 gap-2 md:gap-5 items-start md:items-center">
          <SumUpText text={`${chapters.length} Chapters`} />
          <SumUpText
            text={`${chapters.filter((ch) => ch.isFree).length} Free Chapters`}
          />
          <SumUpText text="Interactive Content" />
        </span>
      </div>

      <div className="mx-auto mt-4 w-full">
        <div className="mx-auto flex w-full max-lg:flex-col">
          <div className="mt-0 md:mt-2 size-full max-lg:w-full mb-16">
            <div className="space-y-3">
              {chapters
                .sort((a, b) => a.position - b.position)
                .map((chapter) => (
                  <ChapterItem
                    key={chapter.id}
                    chapter={chapter}
                    courseSlug={course.slug}
                    chapterDescriptions={chapterDescriptions}
                    loadingChapterDescriptions={loadingChapterDescriptions}
                    onChapterToggle={handleChapterToggle}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewDetailSection;
