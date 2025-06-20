import { Inter } from "next/font/google";
import React from "react";

interface CourseProps {
  img?: string;
  language: string;
  originalPrice: number;
  price: number;
  name: string;
  instructor: string;
  instructorImg: string;
  rating: number;
  reviews: number;
  courseLink: string;
}

interface CourseCardProps {
  course: CourseProps;
}

const inter = Inter({ subsets: ["latin"] });

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="w-[20rem] lg:w-[25rem]  overflow-hidden rounded-3xl border border-neutral-800  bg-neutral-900 p-4 md:p-6">
      <div className="relative">
        <img
          src={course.img || "/api/placeholder/400/250"}
          alt={course.name}
          className="h-48 w-full rounded-[8px] object-cover"
        />
      </div>

      <div className="mt-3">
        <div className="mb-2 flex items-center justify-between">
          <div className="rounded-[50px] bg-neutral-800 px-3  py-1">
            <p
              className={`bg-transparent text-[13px] font-medium text-neutral-400 ${inter.className}`}
            >
              {course.language}
            </p>
          </div>
        </div>

        <h3
          className={`my-4 text-start line-clamp-2 text-lg font-semibold leading-6 text-white ${inter.className}`}
        >
          {course.name}
        </h3>

        <div className="flex justify-between">
          <div className="mb-4 flex items-center">
            <img
              src={course.instructorImg}
              alt={course.instructor}
              className="size-8 rounded-full border"
            />
            <span className="ml-2 text-[15px] font-medium text-neutral-400">
              {course.instructor}
            </span>
          </div>

          <div className="mb-6 flex flex-col md:flex-row items-center">
            <div className="mr-1 flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={
                    i < Math.floor(course.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                >
                  ★
                </span>
              ))}
            </div>
            <span
              className={`text-sm font-medium text-neutral-400 ${inter.className}`}
            >
              ({course.reviews}+ Reviews)
            </span>
          </div>
        </div>

        <div className="flex w-full justify-end">
          <a
            href={course.courseLink}
            className={`block w-[124px] rounded-[10px] bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white ${inter.className}`}
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
