
// // "use client";
// // import React, { useState, useEffect } from "react";
// // import { ChevronDown, ChevronRight, Lock, Star } from "lucide-react";

// // // Type definitions
// // interface Course {
// //   id: number;
// //   title: string;
// //   slug: string;
// //   description: string;
// //   originalPrice: number;
// //   discountPrice: number;
// //   image: string;
// //   language: string;
// //   rating: number;
// //   ratingCount: number;
// //   instructorName: string;
// //   chapters?: Chapter[];
// // }

// // interface Chapter {
// //   id: string;
// //   title: string;
// //   description?: string;
// //   position: number;
// //   isPublished: boolean;
// //   isFree: boolean;
// //   courseId: number;
// // }

// // const CoursesDisplay: React.FC = () => {
// //   const [courses, setCourses] = useState<Course[]>([]);
// //   const [expandedCourses, setExpandedCourses] = useState<Set<number>>(
// //     new Set()
// //   );
// //   const [expandedChapters, setExpandedChapters] = useState<Set<string>>(
// //     new Set()
// //   );
// //   const [chapterDescriptions, setChapterDescriptions] = useState<
// //     Record<string, string>
// //   >({});
// //   const [loadingChapters, setLoadingChapters] = useState<Set<string>>(
// //     new Set()
// //   );
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [error, setError] = useState<string | null>(null);

// //   // Fetch courses data
// //   useEffect(() => {
// //     const fetchCourses = async () => {
// //       try {
// //         setLoading(true);
// //         const response = await fetch("/api/v1/admin/courses");

// //         if (!response.ok) {
// //           throw new Error("Failed to fetch courses");
// //         }

// //         const data = await response.json();
// //         setCourses(data.courses || []);
// //       } catch (err) {
// //         setError(
// //           err instanceof Error ? err.message : "An unknown error occurred"
// //         );
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchCourses();
// //   }, []);

// //   // Fetch chapters for a specific course
// //   const fetchChapters = async (courseSlug: string): Promise<Chapter[]> => {
// //     try {
// //       const response = await fetch(
// //         `/api/v1/admin/courses/${courseSlug}/chapters`
// //       );

// //       if (!response.ok) {
// //         console.warn(`Chapters endpoint not found for course: ${courseSlug}`);
// //         return [];
// //       }

// //       const courseData = await response.json();
// //       return courseData.chapters || [];
// //     } catch (err) {
// //       console.error("Error fetching chapters:", err);
// //       return [];
// //     }
// //   };

// //   // Toggle chapter expansion and fetch description
// //   const toggleChapter = async (courseSlug: string, chapterId: string) => {
// //     const chapterKey = `${courseSlug}-${chapterId}`;
// //     const newExpanded = new Set(expandedChapters);

// //     if (expandedChapters.has(chapterKey)) {
// //       newExpanded.delete(chapterKey);
// //     } else {
// //       newExpanded.add(chapterKey);

// //       // Fetch description if not already loaded
// //       if (!chapterDescriptions[chapterKey]) {
// //         await fetchChapterDescription(courseSlug, chapterId);
// //       }
// //     }

// //     setExpandedChapters(newExpanded);
// //   };

// //   // Fetch individual chapter description
// //   const fetchChapterDescription = async (
// //     courseSlug: string,
// //     chapterId: string
// //   ) => {
// //     const key = `${courseSlug}-${chapterId}`;

// //     if (chapterDescriptions[key] || loadingChapters.has(key)) {
// //       return;
// //     }

// //     setLoadingChapters((prev) => new Set([...prev, key]));

// //     try {
// //       const response = await fetch(
// //         `/api/v1/admin/courses/${courseSlug}/chapters/${chapterId}`
// //       );

// //       if (response.ok) {
// //         const chapterData = await response.json();
// //         setChapterDescriptions((prev) => ({
// //           ...prev,
// //           [key]: chapterData.description || "No description available",
// //         }));
// //       }
// //     } catch (err) {
// //       console.error("Error fetching chapter description:", err);
// //       setChapterDescriptions((prev) => ({
// //         ...prev,
// //         [key]: "Failed to load description",
// //       }));
// //     } finally {
// //       setLoadingChapters((prev) => {
// //         const newSet = new Set(prev);
// //         newSet.delete(key);
// //         return newSet;
// //       });
// //     }
// //   };

// //   // Toggle course expansion
// //   const toggleCourse = async (courseId: number, courseSlug: string) => {
// //     const newExpanded = new Set(expandedCourses);

// //     if (expandedCourses.has(courseId)) {
// //       newExpanded.delete(courseId);
// //     } else {
// //       newExpanded.add(courseId);

// //       // Fetch chapters if not already loaded
// //       const courseIndex = courses.findIndex((c) => c.id === courseId);
// //       if (courseIndex !== -1 && !courses[courseIndex].chapters) {
// //         const chapters = await fetchChapters(courseSlug);
// //         const updatedCourses = [...courses];
// //         updatedCourses[courseIndex] = {
// //           ...updatedCourses[courseIndex],
// //           chapters: chapters,
// //         };
// //         setCourses(updatedCourses);
// //       }
// //     }

// //     setExpandedCourses(newExpanded);
// //   };

// //   const formatPrice = (price: number): string => {
// //     return new Intl.NumberFormat("en-US", {
// //       style: "currency",
// //       currency: "USD",
// //     }).format(price);
// //   };

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// //         <div className="text-center">
// //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
// //           <p className="text-gray-600">Loading courses...</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// //         <div className="text-center">
// //           <div className="text-red-500 text-6xl mb-4">⚠️</div>
// //           <h2 className="text-2xl font-bold text-gray-800 mb-2">
// //             Error Loading Courses
// //           </h2>
// //           <p className="text-gray-600">{error}</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-8">
// //       <div className="max-w-4xl mx-auto px-4">
// //         <div className="mb-8">
// //           <h1 className="text-3xl font-bold text-gray-800 mb-2">All Courses</h1>
// //           <p className="text-gray-600">Total courses: {courses.length}</p>
// //         </div>

// //         {courses.length === 0 ? (
// //           <div className="text-center py-12">
// //             <div className="text-gray-400 text-6xl mb-4">📚</div>
// //             <h2 className="text-xl font-semibold text-gray-600 mb-2">
// //               No Courses Available
// //             </h2>
// //             <p className="text-gray-500">
// //               There are no courses to display at the moment.
// //             </p>
// //           </div>
// //         ) : (
// //           <div className="space-y-4">
// //             {courses.map((course: Course) => (
// //               <div
// //                 key={course.id}
// //                 className="bg-white rounded-lg shadow border"
// //               >
// //                 {/* Course Header */}
// //                 <div className="p-4">
// //                   <div className="flex items-start justify-between">
// //                     <div className="flex-1">
// //                       <h2 className="text-xl font-bold text-gray-800 mb-2">
// //                         {course.title}
// //                       </h2>
// //                       <p className="text-gray-600 text-sm mb-3">
// //                         {course.description}
// //                       </p>

// //                       <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
// //                         <div className="flex items-center gap-1">
// //                           <Star className="w-4 h-4 text-yellow-500 fill-current" />
// //                           <span>
// //                             {course.rating} ({course.ratingCount})
// //                           </span>
// //                         </div>
// //                         <span>{course.language}</span>
// //                         <span>{course.instructorName}</span>
// //                       </div>

// //                       <div className="flex items-center gap-2">
// //                         <span className="text-lg font-bold text-green-600">
// //                           {formatPrice(course.discountPrice)}
// //                         </span>
// //                         {course.originalPrice !== course.discountPrice && (
// //                           <span className="text-sm text-gray-500 line-through">
// //                             {formatPrice(course.originalPrice)}
// //                           </span>
// //                         )}
// //                       </div>
// //                     </div>

// //                     <button
// //                       onClick={() => toggleCourse(course.id, course.slug)}
// //                       className="p-2 rounded hover:bg-gray-100"
// //                     >
// //                       {expandedCourses.has(course.id) ? (
// //                         <ChevronDown className="w-5 h-5 text-gray-600" />
// //                       ) : (
// //                         <ChevronRight className="w-5 h-5 text-gray-600" />
// //                       )}
// //                     </button>
// //                   </div>
// //                 </div>

// //                 {/* Chapters Section */}
// //                 {expandedCourses.has(course.id) && (
// //                   <div className="border-t bg-gray-50 p-4">
// //                     <h3 className="text-lg font-semibold text-gray-800 mb-3">
// //                       Chapters
// //                     </h3>

// //                     {course.chapters && course.chapters.length > 0 ? (
// //                       <div className="space-y-3">
// //                         {course.chapters.map((chapter: Chapter) => {
// //                           const chapterKey = `${course.slug}-${chapter.id}`;
// //                           const isExpanded = expandedChapters.has(chapterKey);
// //                           const isLoadingDesc = loadingChapters.has(chapterKey);

// //                           return (
// //                             <div
// //                               key={chapter.id}
// //                               className="bg-white rounded p-3 border"
// //                             >
// //                               <div
// //                                 className="flex items-start justify-between cursor-pointer"
// //                                 onClick={() =>
// //                                   toggleChapter(course.slug, chapter.id)
// //                                 }
// //                               >
// //                                 <div className="flex items-center gap-2">
// //                                   <span className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full text-xs font-medium text-blue-600">
// //                                     {chapter.position}
// //                                   </span>
// //                                   <h4 className="font-medium text-gray-800">
// //                                     {chapter.title}
// //                                   </h4>
// //                                   <button className="ml-1">
// //                                     {isExpanded ? (
// //                                       <ChevronDown className="w-4 h-4 text-gray-600" />
// //                                     ) : (
// //                                       <ChevronRight className="w-4 h-4 text-gray-600" />
// //                                     )}
// //                                   </button>
// //                                 </div>

// //                                 <div className="flex items-center gap-2">
// //                                   {chapter.isFree && (
// //                                     <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
// //                                       Free
// //                                     </span>
// //                                   )}
// //                                   {!chapter.isFree && (
// //                                     <Lock className="w-4 h-4 text-gray-400" />
// //                                   )}
// //                                   {chapter.isPublished ? (
// //                                     <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
// //                                       Published
// //                                     </span>
// //                                   ) : (
// //                                     <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
// //                                       Draft
// //                                     </span>
// //                                   )}
// //                                 </div>
// //                               </div>

// //                               {/* Chapter Description */}
// //                               {isExpanded && (
// //                                 <div className="mt-3 pl-8 border-t pt-3">
// //                                   {isLoadingDesc ? (
// //                                     <div className="flex items-center gap-2 text-sm text-gray-500">
// //                                       <div className="animate-spin rounded-full h-3 w-3 border border-gray-300 border-t-gray-600"></div>
// //                                       Loading description...
// //                                     </div>
// //                                   ) : (
// //                                     <div
// //                                       className="text-sm text-gray-600 prose prose-sm max-w-none"
// //                                       dangerouslySetInnerHTML={{
// //                                         __html:
// //                                           chapterDescriptions[chapterKey] ||
// //                                           "No description available",
// //                                       }}
// //                                     />
// //                                   )}
// //                                 </div>
// //                               )}
// //                             </div>
// //                           );
// //                         })}
// //                       </div>
// //                     ) : (
// //                       <div className="text-center py-6 text-gray-500">
// //                         <p>No chapters available for this course</p>
// //                       </div>
// //                     )}
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CoursesDisplay;


// "use client";
// import React, { useEffect, useState } from "react";
// import { Inter } from "next/font/google";

// import { ChevronDown, ChevronRight } from "lucide-react";

// const inter = Inter({ subsets: ["latin"] });

// interface Course {
//   id: number;
//   title: string;
//   slug: string;
//   description: string;
//   originalPrice: number;
//   discountPrice: number;
//   image: string;
//   language: string;
//   rating: number;
//   ratingCount: number;
//   instructorName: string;
// }

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

// const ChapterAccordion = ({ 
//   course,
//   isOpen, 
//   onToggle,
//   chapters,
//   isLoadingChapters,
//   chapterDescriptions,
//   loadingChapterDescriptions,
//   onChapterToggle
// }: {
//   course: Course;
//   isOpen: boolean;  
//   onToggle: () => void;
//   chapters?: Chapter[];
//   isLoadingChapters: boolean;
//   chapterDescriptions: Record<string, string>;
//   loadingChapterDescriptions: Set<string>;
//   onChapterToggle: (courseSlug: string, chapterId: string) => void;
// }) => {
//   return (
//     <div className="border-b border-gray-200 last:border-b-0">
//       <div
//         className="flex items-center justify-between py-4 px-2 cursor-pointer hover:bg-gray-50"
//         onClick={onToggle}
//       >
//         <div className="flex items-center gap-3">
//           <h3 className={`text-lg font-medium text-black ${inter.className}`}>
//             {course.title}
//           </h3>
//         </div>
        
//         <div className="flex items-center gap-3">
//           <span className="text-sm text-gray-500">
//             {chapters ? `${chapters.length} chapters` : ''}
//           </span>
//           {isOpen ? (
//             <ChevronDown className="w-5 h-5 text-gray-600" />
//           ) : (
//             <ChevronRight className="w-5 h-5 text-gray-600" />
//           )}
//         </div>
//       </div>
      
//       {isOpen && (
//         <div className="px-2 pb-4 ml-9">
//           {isLoadingChapters ? (
//             <div className="flex items-center gap-2 text-sm text-gray-500">
//               <div className="animate-spin rounded-full h-4 w-4 border border-gray-300 border-t-gray-600"></div>
//               Loading chapters...
//             </div>
//           ) : chapters && chapters.length > 0 ? (
//             <div className="space-y-2">
//               {chapters.map((chapter) => {
//                 const chapterKey = `${course.slug}-${chapter.id}`;
//                 const isChapterOpen = chapterDescriptions[chapterKey] !== undefined;
//                 const isLoadingDesc = loadingChapterDescriptions.has(chapterKey);
                
//                 return (
//                   <div key={chapter.id} className="border rounded p-3 bg-white">
//                     <div
//                       className="flex items-center justify-between cursor-pointer"
//                       onClick={() => onChapterToggle(course.slug, chapter.id)}
//                     >
//                       <div className="flex items-center gap-2">
//                         <span className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full text-xs font-medium text-blue-600">
//                           {chapter.position}
//                         </span>
//                         <h4 className={`font-medium text-gray-800 ${inter.className}`}>
//                           {chapter.title}
//                         </h4>
//                       </div>
//                       {isChapterOpen ? (
//                         <ChevronDown className="w-4 h-4 text-gray-600" />
//                       ) : (
//                         <ChevronRight className="w-4 h-4 text-gray-600" />
//                       )}
//                     </div>
                    
//                     {isChapterOpen && (
//                       <div className="mt-3 pl-8">
//                         {isLoadingDesc ? (
//                           <div className="flex items-center gap-2 text-sm text-gray-500">
//                             <div className="animate-spin rounded-full h-3 w-3 border border-gray-300 border-t-gray-600"></div>
//                             Loading description...
//                           </div>
//                         ) : (
//                           <div
//                             className={`text-sm md:text-base leading-[160%] text-[#807A82] ${inter.className}`}
//                             dangerouslySetInnerHTML={{
//                               __html: chapterDescriptions[chapterKey] || "No description available",
//                             }}
//                           />
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           ) : (
//             <div className="text-center py-4 text-gray-500">
//               No chapters available
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// const OverviewDetailSection = () => {
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [openCourse, setOpenCourse] = useState<string | null>(null);
//   const [courseChapters, setCourseChapters] = useState<Record<string, Chapter[]>>({});
//   const [loadingCourseChapters, setLoadingCourseChapters] = useState<Set<string>>(new Set());
//   const [chapterDescriptions, setChapterDescriptions] = useState<Record<string, string>>({});
//   const [loadingChapterDescriptions, setLoadingChapterDescriptions] = useState<Set<string>>(new Set());
//   const [loading, setLoading] = useState(true);

//   // Fetch all courses
//   const fetchCourses = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch("/api/v1/admin/courses");
//       if (!response.ok) {
//         throw new Error("Failed to fetch courses");
//       }
      
//       const data = await response.json();
//       setCourses(data.courses || []);
//     } catch (err) {
//       console.error("Error fetching courses:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch chapters for a specific course by slug
//   const fetchCourseChapters = async (courseSlug: string) => {
//     if (courseChapters[courseSlug] || loadingCourseChapters.has(courseSlug)) {
//       return;
//     }

//     setLoadingCourseChapters(prev => new Set([...prev, courseSlug]));

//     try {
//       const response = await fetch(`/api/v1/admin/courses/${courseSlug}/chapters`);
      
//       if (response.ok) {
//         const data = await response.json();
//         setCourseChapters(prev => ({
//           ...prev,
//           [courseSlug]: data.chapters || []
//         }));
//       } else {
//         setCourseChapters(prev => ({
//           ...prev,
//           [courseSlug]: []
//         }));
//       }
//     } catch (err) {
//       console.error(`Error fetching chapters for course ${courseSlug}:`, err);
//       setCourseChapters(prev => ({
//         ...prev,
//         [courseSlug]: []
//       }));
//     } finally {
//       setLoadingCourseChapters(prev => {
//         const newSet = new Set(prev);
//         newSet.delete(courseSlug);
//         return newSet;
//       });
//     }
//   };

//   // Fetch description for a specific chapter
//   const fetchChapterDescription = async (courseSlug: string, chapterId: string) => {
//     const key = `${courseSlug}-${chapterId}`;

//     if (chapterDescriptions[key] || loadingChapterDescriptions.has(key)) {
//       return;
//     }

//     setLoadingChapterDescriptions(prev => new Set([...prev, key]));

//     try {
//       const response = await fetch(`/api/v1/admin/courses/${courseSlug}/chapters/${chapterId}`);

//       if (response.ok) {
//         const data = await response.json();
//         setChapterDescriptions(prev => ({
//           ...prev,
//           [key]: data.description || "No description available"
//         }));
//       } else {
//         setChapterDescriptions(prev => ({
//           ...prev,
//           [key]: "Failed to load description"
//         }));
//       }
//     } catch (err) {
//       console.error("Error fetching chapter description:", err);
//       setChapterDescriptions(prev => ({
//         ...prev,
//         [key]: "Failed to load description"
//       }));
//     } finally {
//       setLoadingChapterDescriptions(prev => {
//         const newSet = new Set(prev);
//         newSet.delete(key);
//         return newSet;
//       });
//     }
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   // Handle course accordion toggle
//   const handleCourseToggle = async (courseSlug: string) => {
//     const isCurrentlyOpen = openCourse === courseSlug;
//     setOpenCourse(isCurrentlyOpen ? null : courseSlug);
    
//     // Fetch chapters if opening and not already loaded
//     if (!isCurrentlyOpen && !courseChapters[courseSlug]) {
//       await fetchCourseChapters(courseSlug);
//     }
//   };

//   // Handle chapter accordion toggle
//   const handleChapterToggle = async (courseSlug: string, chapterId: string) => {
//     const key = `${courseSlug}-${chapterId}`;
//     const isCurrentlyOpen = chapterDescriptions[key] !== undefined;
    
//     if (isCurrentlyOpen) {
//       // Remove from descriptions to close
//       setChapterDescriptions(prev => {
//         const newDescriptions = { ...prev };
//         delete newDescriptions[key];
//         return newDescriptions;
//       });
//     } else {
//       // Fetch description to open
//       await fetchChapterDescription(courseSlug, chapterId);
//     }
//   };

//   // Calculate total chapters
//   const totalChapters = Object.values(courseChapters).reduce((total, chapters) => total + chapters.length, 0);

//   if (loading) {
//     return (
//       <div className="mx-auto px-2 mb-16 mt-20">
//         <div className="flex items-center justify-center py-12">
//           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
//           <span className="ml-3 text-gray-600">Loading courses...</span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="mx-auto px-2 mb-16 mt-20">
//       <h1
//         className={`w-full text-3xl md:text-5xl text-black font-semibold md:font-bold leading-[120%] mb-6 md:mb-10 ${inter.className}`}
//       >
//         Course & Chapter Details
//       </h1>
//       <div>
//         <div className="flex mx-auto max-md:w-[98%]">
//           <span className="flex flex-col md:flex-row ml-6 gap-2 md:gap-5 items-start md:items-center">
//             <SumUpText text={`${courses.length} Courses`} />
//             <SumUpText text={`${totalChapters} Chapters`} />
//             <SumUpText text="Interactive Content" />
//           </span>
//         </div>

//         <div className="mx-auto mt-4 w-full">
//           <div className="mx-auto flex w-full max-lg:flex-col">
//             <div className="mt-0 md:mt-2 size-full max-lg:w-full mb-16 border-b">
//               {courses.length === 0 ? (
//                 <div className="text-center py-8 text-gray-500">
//                   No courses available
//                 </div>
//               ) : (
//                 courses.map((course) => (
//                   <ChapterAccordion
//                     key={course.slug}
//                     course={course}
//                     isOpen={openCourse === course.slug}
//                     onToggle={() => handleCourseToggle(course.slug)}
//                     chapters={courseChapters[course.slug]}
//                     isLoadingChapters={loadingCourseChapters.has(course.slug)}
//                     chapterDescriptions={chapterDescriptions}
//                     loadingChapterDescriptions={loadingChapterDescriptions}
//                     onChapterToggle={handleChapterToggle}
//                   />
//                 ))
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OverviewDetailSection;
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page