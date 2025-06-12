"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import CourseDetailForm from "@/components/revamp/combopackSection/CourseDetailForm";
export const metadata = {
  title: "Course Details",
};
interface CourseDetail {
  id: string;
  title: string;
  content: string;
  content2?: string;
  content3?: string;
  content4?: string;
  content5?: string;
  content6?: string;
  time: string;
  time2?: string;
  time3?: string;
  time4?: string;
  time5?: string;
  time6?: string;
  mins: number;
  Sections: number;
}

export default function AllCourseDetailsPage() {
  const [courseDetails, setCourseDetails] = useState<CourseDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [addFormVisible, setAddFormVisible] = useState(false);

  const fetchCourseDetails = async () => {
    try {
      const res = await axios.get("/api/v1/admin/courseDetail");
      setCourseDetails(res.data.courseDetails);
    } catch (err) {
      console.error("Error fetching course details:", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteCourseDetail = async (id: string) => {
    if (!confirm("Are you sure you want to delete this course detail?")) return;

    try {
      await axios.delete(`/api/v1/admin/courseDetail/${id}`);
      toast.success("Course detail deleted");
      setCourseDetails((prev) => prev.filter((detail) => detail.id !== id));
    } catch (err) {
      console.error("Error deleting course detail:", err);
      toast.error("Failed to delete course detail");
    }
  };

  useEffect(() => {
    fetchCourseDetails();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Course Details</h1>

      {loading ? (
        <p>Loading...</p>
      ) : courseDetails.length === 0 ? (
        <p>No course details found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courseDetails.map((detail) => (
            <div key={detail.id} className="border p-4 rounded shadow relative">
              <h2 className="text-lg font-semibold">{detail.title}</h2>
              <ul className="text-sm list-disc pl-5 my-2">
                {[
                  detail.content,
                  detail.content2,
                  detail.content3,
                  detail.content4,
                  detail.content5,
                  detail.content6,
                ]
                  .filter(Boolean)
                  .map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
              </ul>
              <p className="text-sm text-gray-700">
                Total Time:{" "}
                {[
                  detail.time,
                  detail.time2,
                  detail.time3,
                  detail.time4,
                  detail.time5,
                  detail.time6,
                ]
                  .filter(Boolean)
                  .join(" + ")}{" "}
                = {detail.mins} minutes
              </p>
              <p className="text-sm text-gray-500">
                Sections: {detail.Sections}
              </p>
              <button
                onClick={() => deleteCourseDetail(detail.id)}
                className="absolute top-2 right-2 text-sm bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="w-full mt-6">
        <button
          onClick={() => setAddFormVisible((prev) => !prev)}
          className="bg-blue-500 px-4 py-2 rounded-lg text-white mb-4"
        >
          {addFormVisible ? "Hide" : "Add Course Detail"}
        </button>

        {addFormVisible && <CourseDetailForm />}
      </div>
    </div>
  );
}
