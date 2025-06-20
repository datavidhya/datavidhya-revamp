"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import CourseCard from "./courseCard";
import axios from "axios";
import CourseShimmer from "@/components/ui/Shimmer";
import { Course } from "@/types";

const inter = Inter({ subsets: ["latin"] });

const CoursesSection = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCourses = useCallback(async () => {
    try {
      const res = await axios.get("/api/v1/admin/courses");
      setCourses(res.data.courses);
    } catch (err) {
      console.error("Error fetching courses:", err);
      setError("Failed to load courses. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div>
        <CourseShimmer />
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <div className=" py-3 md:py-14 text-center">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-2 md:mb-12 text-center">
          <h2
            className={`mb-2 text-3xl md:text-5xl text-white font-bold leading-[120%]  ${inter.className}`}
          >
            Explore Our Data Engineering
            <br className="hidden md:block" />
            <span className="ml-2 relative inline-block">Courses</span>
          </h2>
          <p className={`mt-5 text-[18px] text-neutral-400 ${inter.className}`}>
            Unlock your potential with our expert-led courses.
          </p>
        </div>
        {courses.length === 0 ? (
          <p className="text-gray-600 mt-4">
            No courses available at the moment. Please check back later.
          </p>
        ) : (
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
        )}
      </div>
    </div>
  );
};
export default CoursesSection;
