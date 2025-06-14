"use client";
import { Course } from "@/types";
import React from "react";

interface courseDetailInterface {
  courseInfo: Course;
}

const CourseDetailPage = ({ courseInfo }: courseDetailInterface) => {
  console.log(courseInfo);
  return <div>CourseDetailPage</div>;
};

export default CourseDetailPage;
