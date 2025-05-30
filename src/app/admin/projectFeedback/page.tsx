"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ProjectFeedbackForm from "@/components/revamp/ProjectSection/ProjectFeedbackForm";

interface projectFeedback {
  id: number;
  name: string;
  description: string;
  linkedInUrl: string;
  image: string;
  projectImage: string;
  createdAt: string;
}

export default function ProjectFeedbackPage() {
  const [projectFeedback, setProjectFeedback] = useState<projectFeedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [addBtn, setAddBtn] = useState(false);

  const fetchProjectFeedback = async () => {
    try {
      const res = await axios.get("/api/v1/admin/projectFeedback");
      setProjectFeedback(res.data.projectFeedbacks);
    } catch (err) {
      console.error("Error fetching courses:", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteProjectFeedback = async (id: number) => {
    if (!confirm("Are you sure you want to delete this Feedback?")) return;

    try {
      await axios.delete(`/api/v1/admin/projectFeedback/${id}`);
      toast.success("Feedback deleted");
      setProjectFeedback((prev) =>
        prev.filter((feedback) => feedback.id !== id)
      );
    } catch (err) {
      console.error("Error deleting Feedback:", err);
      toast.error("Failed to delete Feedback");
    }
  };

  useEffect(() => {
    fetchProjectFeedback();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Feedbacks</h1>
      {loading ? (
        <p>Loading...</p>
      ) : projectFeedback.length === 0 ? (
        <p>No Feedback found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectFeedback.map((feedback) => (
            <div
              key={feedback.id}
              className="border p-4 rounded shadow relative"
            >
              <img
                src={feedback.image}
                alt={feedback.name}
                className="w-full h-40 object-cover mb-2"
              />
              <div className="w-full bg-red-50 flex flex-row">
                  <div className="flex items-center justify-center px-5"><img
                  src={feedback.projectImage}
                  alt={feedback.name}
                  className="rounded-full  size-28"
                />{" "}</div>
                <div className="w-1/2 pl-8">
                  <h2 className="text-lg font-semibold">{feedback.name}</h2>
                  <p>{feedback.description}</p>
                  <p>{feedback.linkedInUrl}</p>
                </div>
              </div>
              <button
                onClick={() => deleteProjectFeedback(feedback.id)}
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
        {addBtn ? <ProjectFeedbackForm /> : ""}
      </div>
    </div>
  );
}
