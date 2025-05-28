"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import CourseForm from "@/components/revamp/CourseSection/courseAdminForm";

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

export default function AllCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [addBtn, setAddBtn] = useState(false);

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

  const deleteCourse = async (id: number) => {
    if (!confirm("Are you sure you want to delete this course?")) return;

    try {
      await axios.delete(`/api/v1/admin/courses/${id}`);
      toast.success("Course deleted");
      setCourses((prev) => prev.filter((course) => course.id !== id));
    } catch (err) {
      console.error("Error deleting course:", err);
      toast.error("Failed to delete course");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Courses</h1>
      {loading ? (
        <p>Loading...</p>
      ) : courses.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map((course) => (
            <div key={course.id} className="border p-4 rounded shadow relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover mb-2"
              />
              <h2 className="text-lg font-semibold">{course.title}</h2>
              <p>{course.description}</p>
              <p className="text-sm text-gray-500">
                Instructor: {course.instructorName}
              </p>
              <p className="text-sm text-gray-500">
                Rating: {course.rating} ({course.ratingCount})
              </p>
              <button
                onClick={() => deleteCourse(course.id)}
                className="absolute top-2 right-2 text-sm bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="w-full ">
        <button
          onClick={() => {
            addBtn ? setAddBtn(false) : setAddBtn(true);
          }}
          className="bg-blue-500 px-3 py-2 rounded-lg text-white m-3"
        >
          {" "}
          Add Course
        </button>
        {addBtn ? <CourseForm /> : ""}
      </div>
    </div>
  );
}
