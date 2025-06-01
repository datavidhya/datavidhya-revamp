"use client";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import CourseCard from "./courseCard";
import axios from "axios";

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
  instructorImage: string;
  createdAt: string;
}

const inter = Inter({ subsets: ["latin"] });

const CoursesSection = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const fetchCourses = async () => {
    try {
      const res = await axios.get("/api/v1/admin/courses");
      setCourses(res.data.courses);
    } catch (err) {
      console.error("Error fetching courses:", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <div className="bg-[#fff] py-3 md:py-12 text-center">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-2 md:mb-12 text-center">
          <h2
            className={`mb-2 text-3xl md:text-5xl font-bold leading-[120%] text-[#000000] ${inter.className}`}
          >
            Explore Our Data Engineering
            <br className="hidden md:block" />
            <span className="ml-2 relative inline-block">
              Courses
              <svg
                className="absolute -bottom-5 left-1/2 w-full max-w-[120px] -translate-x-1/2 sm:-bottom-6 md:-bottom-3 sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px]"
                width="200"
                height="35"
                viewBox="0 0 200 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
          <p className={`mt-5 text-[18px] text-[#000000] ${inter.className}`}>
            Unlock your potential with our expert-led courses.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center xl:justify-start gap-x-5 gap-y-5 mx-auto">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={{
                img: course.image,
                language: course.language,
                originalPrice: course.originalPrice,
                price: course.discountPrice,
                name: course.title,
                instructor: course.instructorName,
                instructorImg: course.instructorImage,
                rating: course.rating,
                reviews: course.ratingCount,
                courseLink: `/courses/${course.slug}`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="w-full text-center mt-9 md:mt-12"></div>
    </div>
  );
};
export default CoursesSection;
