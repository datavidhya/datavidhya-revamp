import React from "react";
import { Inter } from "next/font/google";
import CourseCard from "./courseCard";
// import { courseCovered } from "@/context/GlobalData";
// import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
export const courseCovered = [
  {
    img: "/revamp/course2.png",
    courseLink:
      "https://datavidhya.com/all-course:Workflow%20Orchestration%20with%20Apache%20Airflow%20for%20Data%20Engineering",
    name: "Workflow Orchestration with Apache Airflow for Data Engineering",
    rating: 5,
    reviews: 867,
    description:
      "Learn to automate, schedule, and monitor data pipelines with Apache Airflow. This course covers the basics, building efficient DAGs, and real-world projects on AWS & GCP. Perfect for anyone looking to manage modern data workflows easily!",
    price: 9.0,
    originalPrice: 29.0,
    language: "ENGLISH",
    instructor: "Darshil Parmar",
  },
  {
    img: "/revamp/course1.jpeg",
    courseLink:
      "https://datavidhya.com/all-course:Apache%20Spark%20with%20Databricks%20for%20Data%20Engineers",
    name: "Apache Spark with Databricks for Data Engineers",
    rating: 5,
    reviews: 680,
    description:
      "Master Apache Spark and Databricks to build and manage large-scale data pipelines! Learn Spark internals, structured and core APIs, Lakehouse and Medallion architectures, and tackle real-world projects on AWS and Azure. Gain practical skills to advance your data engineering career!",
    price: 9.0,
    originalPrice: 29.0,
    language: "ENGLISH",
    instructor: "Darshil Parmar",
  },
  {
    img: "/revamp/course3.png",
    courseLink:
      "https://datavidhya.com/all-course:Data%20Warehouse%20for%20Data%20Engineering%20with%20Snowflake",
    name: "Data Warehouse for Data Engineering with Snowflake",
    rating: 4,
    reviews: 280,
    description:
      "Master data warehousing with Snowflake! Learn core fundamentals, dimension modeling, and advanced concepts like SCD types and surrogate keys. Dive into Snowflake's architecture, store and query data, and tackle end-to-end projects using Snowflake, Python, and the cloud.",
    price: 9.0,
    originalPrice: 29.0,
    language: "ENGLISH",
    instructor: "Darshil Parmar",
  },
  {
    img: "/revamp/course4.webp  ",
    courseLink:
      "https://datavidhya.com/all-course:Python%20for%20Data%20Engineering",
    name: "Python for Data Engineering",
    rating: 4,
    reviews: 720,
    description:
      "Learn Python for real-world data engineering! This course covers Python basics, advanced OOP, ETL processes, and libraries like Pandas and NumPy. Gain hands-on experience with data pipelines through 3 end-to-end projects and master clean, efficient coding for practical problem-solving!",
    price: 9.0,
    originalPrice: 29.0,
    language: "ENGLISH",
    instructor: "Darshil Parmar",
  },
  {
    img: "/revamp/course2.png",
    courseLink:
      "https://datavidhya.com/all-course:SQL%20for%20Data%20Engineering",
    name: "SQL for Data Engineering",
    rating: 4,
    reviews: 400,
    description:
      "Master SQL for data engineering! Build strong database fundamentals, design and optimize relational databases, and write advanced SQL queries. Gain hands-on experience with 4 projects, covering data modeling, ETL processes, and integrating SQL with Python for real-world tasks.",
    price: 9.0,
    originalPrice: 29.0,
    language: "ENGLISH",
    instructor: "Darshil Parmar",
  },
];

const CoursesSection = () => {
  return (
    <div className="bg-[#FAFAFA] py-3 md:py-12 text-center">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-2 md:mb-12 text-center">
          {/* <p
            className={`mb-1 font-bold uppercase tracking-wider text-[#8B90A1] ${inter.className}`}
          >
            COURSES
          </p> */}
          <h2
            className={`mb-2 text-3xl md:text-5xl font-bold leading-[120%] text-[#000000] ${inter.className}`}
          >
            Explore Our Data Engineering
            <br className="hidden md:block"/>
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
          {courseCovered.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
      <div className="w-full text-center mt-9 md:mt-12">
        {/* <Link href={"/"}>
          {" "}
          <button className="px-7 py-3 bg-[#282828] rounded-xl text-white font-normal md:font-medium">
            View All
          </button>
        </Link> */}
      </div>
    </div>
  );
};
// <div key={index} className={index >= 3 ? "hidden" : ""}>            {/* </div> */}
export default CoursesSection;
