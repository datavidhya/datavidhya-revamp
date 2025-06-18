// "use client";
// import React, { useEffect, useState } from "react";
// import { Inter } from "next/font/google";
// import { Course } from "@/types";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, ChevronRight } from "lucide-react";

// const inter = Inter({ subsets: ["latin"] });

// interface Chapter {
//   id: string;
//   title: string;
//   description?: string;
//   position: number;
//   isPublished: boolean;
//   isFree: boolean;
//   courseId: number;
//   courseTitle?: string;
//   courseSlug?: string;
// }

// interface prop {
//   text: string;
// }

// export const SumUpText = ({ text }: prop) => {
//   return (
//     <div className="flex gap-2 items-center">
//       <span className="size-1.5 md:size-3 bg-slate-300 rounded-full "></span>{" "}
//       <p
//         className={`text-xs md:text-[16px] leading-[160%] font-medium text-[#807A82] ${inter.className}`}
//       >
//         {text}
//       </p>
//     </div>
//   );
// };

// const ChapterItem = ({
//   chapter,
//   courseSlug,
//   chapterDescriptions,
//   loadingChapterDescriptions,
//   onChapterToggle,
// }: {
//   chapter: Chapter;
//   courseSlug: string;
//   chapterDescriptions: Record<string, string>;
//   loadingChapterDescriptions: Set<string>;
//   onChapterToggle: (courseSlug: string, chapterId: string) => void;
// }) => {
//   const chapterKey = `${courseSlug}-${chapter.id}`;
//   const isChapterOpen = chapterDescriptions[chapterKey] !== undefined;
//   const isLoadingDesc = loadingChapterDescriptions.has(chapterKey);

//   return (
//     <div className="border rounded-2xl border-[#D7D7D7] bg-[#353535] my-5 overflow-hidden">
//       <div
//         className={`flex cursor-pointer items-center justify-between gap-3 py-1.5 px-2 md:px-6 ${
//           isChapterOpen ? "dark:bg-white" : ""
//         }`}
//         onClick={() => onChapterToggle(courseSlug, chapter.id)}
//       >
//         <span className="flex items-center gap-2 md:gap-6">
//           <motion.div
//             className="text-lg md:text-[28px] text-[#fff] flex items-center"
//             animate={{ rotate: isChapterOpen ? 0 : 180 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//           >
//             {isChapterOpen ? "-" : "+"}
//           </motion.div>
//           <h5
//             className={`py-4 text-[20px] font-medium text-[#fff] max-md:py-2 max-md:text-[14px] ${inter.className}`}
//           >
//             {chapter.title}
//           </h5>
//           {chapter.isFree && (
//             <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded-full">
//               Free
//             </span>
//           )}
//         </span>
//       </div>

//       <AnimatePresence>
//         {isChapterOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="overflow-hidden bg-neutral-200"
//           >
//             <div className="w-full pl-2 md:px-12 pt-4 rounded-b-[2px] px-4 pb-3 text-[14px] md:text-[16px] font-medium leading-6 md:leading-8 text-[#000] shadow-md">
//               <div className="mt-3 pl-2">
//                 {isLoadingDesc ? (
//                   <div className="flex items-center gap-2 text-sm text-gray-500">
//                     <div className="animate-spin rounded-full h-3 w-3 border border-gray-300 border-t-gray-600"></div>
//                     Loading description...
//                   </div>
//                 ) : (
//                   <div
//                     className={`text-sm md:text-base leading-[160%] font-semibold text-[#3a3a3a] ${inter.className}`}
//                     dangerouslySetInnerHTML={{
//                       __html:
//                         chapterDescriptions[chapterKey] ||
//                         "No description available",
//                     }}
//                   />
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// interface OverviewDetailSectionProps {
//   course: Course;
// }

// const OverviewDetailSection = ({ course }: OverviewDetailSectionProps) => {
//   const [chapters, setChapters] = useState<Chapter[]>([]);
//   const [chapterDescriptions, setChapterDescriptions] = useState<
//     Record<string, string>
//   >({});
//   const [loadingChapterDescriptions, setLoadingChapterDescriptions] = useState<
//     Set<string>
//   >(new Set());
//   const [loading, setLoading] = useState(true);

//   const fetchCourseChapters = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(
//         `/api/v1/admin/courses/${course.slug}/chapters`
//       );

//       if (response.ok) {
//         const data = await response.json();
//         setChapters(data.chapters || []);
//       } else {
//         setChapters([]);
//       }
//     } catch (err) {
//       console.error(`Error fetching chapters for course ${course.slug}:`, err);
//       setChapters([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchChapterDescription = async (
//     courseSlug: string,
//     chapterId: string
//   ) => {
//     const key = `${courseSlug}-${chapterId}`;

//     if (chapterDescriptions[key] || loadingChapterDescriptions.has(key)) {
//       return;
//     }

//     setLoadingChapterDescriptions((prev) => new Set([...prev, key]));

//     try {
//       const response = await fetch(
//         `/api/v1/admin/courses/${courseSlug}/chapters/${chapterId}`
//       );

//       if (response.ok) {
//         const data = await response.json();
//         setChapterDescriptions((prev) => ({
//           ...prev,
//           [key]: data.description || "No description available",
//         }));
//       } else {
//         setChapterDescriptions((prev) => ({
//           ...prev,
//           [key]: "Failed to load description",
//         }));
//       }
//     } catch (err) {
//       console.error("Error fetching chapter description:", err);
//       setChapterDescriptions((prev) => ({
//         ...prev,
//         [key]: "Failed to load description",
//       }));
//     } finally {
//       setLoadingChapterDescriptions((prev) => {
//         const newSet = new Set(prev);
//         newSet.delete(key);
//         return newSet;
//       });
//     }
//   };

//   useEffect(() => {
//     if (course?.slug) {
//       fetchCourseChapters();
//     }
//   }, [course?.slug]);

//   const handleChapterToggle = async (courseSlug: string, chapterId: string) => {
//     const key = `${courseSlug}-${chapterId}`;
//     const isCurrentlyOpen = chapterDescriptions[key] !== undefined;

//     if (isCurrentlyOpen) {
//       setChapterDescriptions((prev) => {
//         const newDescriptions = { ...prev };
//         delete newDescriptions[key];
//         return newDescriptions;
//       });
//     } else {
//       await fetchChapterDescription(courseSlug, chapterId);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="mx-auto px-2 mb-16 mt-20">
//         <div className="flex items-center justify-center py-12">
//           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
//           <span className="ml-3 text-gray-600">Loading chapters...</span>
//         </div>
//       </div>
//     );
//   }

//   if (!chapters.length) {
//     return (
//       <div className="mx-auto px-2 mb-16 mt-20">
//         <h2
//           className={`w-full text-2xl md:text-3xl text-black font-semibold leading-[120%] mb-6 ${inter.className}`}
//         >
//           Course Content
//         </h2>
//         <div className="text-center py-8 text-gray-500 border rounded-lg">
//           No chapters available for this course
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="mx-auto px-2 mb-16 mt-20">
//       <h2
//         className={`w-full text-2xl md:text-3xl lg:text-5xl text-black font-semibold md:font-bold leading-[120%] mb-6 ${inter.className}`}
//       >
//         Course Content
//       </h2>

//       <div className="flex mx-auto max-md:w-[98%] mb-6">
//         <span className="flex flex-col md:flex-row ml-6 gap-2 md:gap-5 items-start md:items-center">
//           <SumUpText text={`${chapters.length} Chapters`} />
//           <SumUpText
//             text={`${chapters.filter((ch) => ch.isFree).length} Free Chapters`}
//           />
//           <SumUpText text="Interactive Content" />
//         </span>
//       </div>

//       <div className="mx-auto mt-4 w-full">
//         <div className="mx-auto flex w-full max-lg:flex-col">
//           <div className="mt-0 md:mt-2 size-full max-lg:w-full mb-16">
//             <div className="space-y-3">
//               {chapters
//                 .sort((a, b) => a.position - b.position)
//                 .map((chapter) => (
//                   <ChapterItem
//                     key={chapter.id}
//                     chapter={chapter}
//                     courseSlug={course.slug}
//                     chapterDescriptions={chapterDescriptions}
//                     loadingChapterDescriptions={loadingChapterDescriptions}
//                     onChapterToggle={handleChapterToggle}
//                   />
//                 ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OverviewDetailSection;

"use client";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";

import { ChevronDown, ChevronRight } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  image: string;
  language: string;
  rating: number;
  ratingCount: number;
  instructorName: string;
}

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

const ChapterAccordion = ({
  course,
  isOpen,
  onToggle,
  chapters,
  isLoadingChapters,
  chapterDescriptions,
  loadingChapterDescriptions,
  onChapterToggle,
}: {
  course: Course;
  isOpen: boolean;
  onToggle: () => void;
  chapters?: Chapter[];
  isLoadingChapters: boolean;
  chapterDescriptions: Record<string, string>;
  loadingChapterDescriptions: Set<string>;
  onChapterToggle: (courseSlug: string, chapterId: string) => void;
}) => {
  return (
    <div className="">
      <div
        className="flex items-center justify-between bg-[#333] rounded-2xl  py-6 px-6 cursor-pointer my-4"
        onClick={onToggle}
      >
        <div className="flex items-center gap-3">
          <h3 className={`text-xl font-medium text-white ${inter.className}`}>
            {course.title}
          </h3>
        </div>

        <div className="flex items-center gap-3 ">
          <span className="text-sm text-gray-100">
            {chapters ? `${chapters.length} chapters` : ""}
          </span>
          {isOpen ? (
            <ChevronDown className="w-5 h-5 text-gray-100" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-100" />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="px-2 pb-4 ml-9">
          {isLoadingChapters ? (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="animate-spin rounded-full h-4 w-4 "></div>
              Loading chapters...
            </div>
          ) : chapters && chapters.length > 0 ? (
            <div className="space-y-2">
              {chapters.map((chapter) => {
                const chapterKey = `${course.slug}-${chapter.id}`;
                const isChapterOpen =
                  chapterDescriptions[chapterKey] !== undefined;
                const isLoadingDesc =
                  loadingChapterDescriptions.has(chapterKey);

                return (
                  <div
                    key={chapter.id}
                    className="border rounded p-3 bg-[#555]"
                  >
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => onChapterToggle(course.slug, chapter.id)}
                    >
                      <div className="flex items-center gap-2 p-2">
                        {/* <span className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full text-xs font-medium text-blue-600">
                          {chapter.position}
                        </span> */}
                        <div
                          className={`flex items-center gap-3 font-medium text-white ${inter.className}`}
                        >
                          {chapter.title}{" "}
                          <ChevronRight className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      {isChapterOpen ? (
                        <ChevronDown className="w-4 h-4 text-gray-600" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                      )}
                    </div>

                    {isChapterOpen && (
                      <div className="mt-3 pl-8">
                        {isLoadingDesc ? (
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="animate-spin rounded-full h-3 w-3  border-gray-300 border-t-gray-600"></div>
                            Loading description...
                          </div>
                        ) : (
                          <div
                            className={`text-sm md:text-base leading-[160%] text-[#fff]  ${inter.className}`}
                            dangerouslySetInnerHTML={{
                              __html:
                                chapterDescriptions[chapterKey] ||
                                "No description available",
                            }}
                          />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-4 text-gray-500">
              No chapters available
            </div>
          )}
        </div>
      )}
    </div>
  );
};

import { Roboto } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

const OverviewDetailSection = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [openCourse, setOpenCourse] = useState<string | null>(null);
  const [courseChapters, setCourseChapters] = useState<
    Record<string, Chapter[]>
  >({});
  const [loadingCourseChapters, setLoadingCourseChapters] = useState<
    Set<string>
  >(new Set());
  const [chapterDescriptions, setChapterDescriptions] = useState<
    Record<string, string>
  >({});
  const [loadingChapterDescriptions, setLoadingChapterDescriptions] = useState<
    Set<string>
  >(new Set());
  const [loading, setLoading] = useState(true);

  // Fetch all courses
  const fetchCourses = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/v1/admin/courses");
      if (!response.ok) {
        throw new Error("Failed to fetch courses");
      }

      const data = await response.json();
      setCourses(data.courses || []);
    } catch (err) {
      console.error("Error fetching courses:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch chapters for a specific course by slug
  const fetchCourseChapters = async (courseSlug: string) => {
    if (courseChapters[courseSlug] || loadingCourseChapters.has(courseSlug)) {
      return;
    }

    setLoadingCourseChapters((prev) => new Set([...prev, courseSlug]));

    try {
      const response = await fetch(
        `/api/v1/admin/courses/${courseSlug}/chapters`
      );

      if (response.ok) {
        const data = await response.json();
        setCourseChapters((prev) => ({
          ...prev,
          [courseSlug]: data.chapters || [],
        }));
      } else {
        setCourseChapters((prev) => ({
          ...prev,
          [courseSlug]: [],
        }));
      }
    } catch (err) {
      console.error(`Error fetching chapters for course ${courseSlug}:`, err);
      setCourseChapters((prev) => ({
        ...prev,
        [courseSlug]: [],
      }));
    } finally {
      setLoadingCourseChapters((prev) => {
        const newSet = new Set(prev);
        newSet.delete(courseSlug);
        return newSet;
      });
    }
  };

  // Fetch description for a specific chapter
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
    fetchCourses();
  }, []);

  // Handle course accordion toggle
  const handleCourseToggle = async (courseSlug: string) => {
    const isCurrentlyOpen = openCourse === courseSlug;
    setOpenCourse(isCurrentlyOpen ? null : courseSlug);

    // Fetch chapters if opening and not already loaded
    if (!isCurrentlyOpen && !courseChapters[courseSlug]) {
      await fetchCourseChapters(courseSlug);
    }
  };

  // Handle chapter accordion toggle
  const handleChapterToggle = async (courseSlug: string, chapterId: string) => {
    const key = `${courseSlug}-${chapterId}`;
    const isCurrentlyOpen = chapterDescriptions[key] !== undefined;

    if (isCurrentlyOpen) {
      // Remove from descriptions to close
      setChapterDescriptions((prev) => {
        const newDescriptions = { ...prev };
        delete newDescriptions[key];
        return newDescriptions;
      });
    } else {
      // Fetch description to open
      await fetchChapterDescription(courseSlug, chapterId);
    }
  };

  // Calculate total chapters
  const totalChapters = Object.values(courseChapters).reduce(
    (total, chapters) => total + chapters.length,
    0
  );

  if (loading) {
    return (
      <div className="mx-auto px-2 mb-16 mt-20">
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-600">Loading courses...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto px-2 mb-16 mt-20">
      <h1
        className={`w-full text-3xl md:text-5xl text-black font-semibold md:font-bold leading-[120%] mb-6 md:mb-10 ${inter.className}`}
      >
        Course & Chapter Details
      </h1>
      <div>
        <div className="mx-auto mt-4 w-full">
          <div className="mx-auto flex w-full max-lg:flex-col">
            <div className="mt-0 md:mt-2 size-full max-lg:w-full mb-16 border-b">
              {courses.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No courses available
                </div>
              ) : (
                courses.map((course) => (
                  <ChapterAccordion
                    key={course.slug}
                    course={course}
                    isOpen={openCourse === course.slug}
                    onToggle={() => handleCourseToggle(course.slug)}
                    chapters={courseChapters[course.slug]}
                    isLoadingChapters={loadingCourseChapters.has(course.slug)}
                    chapterDescriptions={chapterDescriptions}
                    loadingChapterDescriptions={loadingChapterDescriptions}
                    onChapterToggle={handleChapterToggle}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewDetailSection;
