"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ProjectForm from "@/components/revamp/ProjectSection/projectsForm";
export const metadata = {
  title: "Add Projects",
};
interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  topic: string;
  image: string;
  createdAt: string;
}

export default function AllProjectPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [addBtn, setAddBtn] = useState(false);

  const fetchProjects = async () => {
    try {
      const res = await axios.get("/api/v1/admin/projects");
      setProjects(res.data.projects);
    } catch (err) {
      console.error("Error fetching projects:", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteProjects = async (id: number) => {
    if (!confirm("Are you sure you want to delete this Project?")) return;

    try {
      await axios.delete(`/api/v1/admin/projects/${id}`);
      toast.success("Course deleted");
      setProjects((prev) => prev.filter((project) => project.id !== id));
    } catch (err) {
      console.error("Error deleting project:", err);
      toast.error("Failed to delete project");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Projects</h1>
      {loading ? (
        <p>Loading...</p>
      ) : projects.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border p-4 rounded shadow relative"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover mb-2"
              />
              <div className="w-full bg-red-50 flex flex-row">
                <div className="w-1/2 pl-8">
                  <h2 className="text-lg font-semibold">{project.title}</h2>
                  <p>{project.description}</p>
                  <p>{project.topic}</p>
                </div>
              </div>
              <button
                onClick={() => deleteProjects(project.id)}
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
          Add project
        </button>
        {addBtn ? <ProjectForm /> : ""}
      </div>
    </div>
  );
}
