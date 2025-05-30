"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const projectSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().min(1),
  topic: z.string().min(1),
  image: z.string().url(),
});

type ProjectFormData = z.infer<typeof projectSchema>;

export default function ProjectForm() {
  const [loading, setLoading] = useState(false);
  const [projectImage, setProjectImage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
  });

  const onSubmit = async (data: ProjectFormData) => {
    setLoading(true);
    try {
      const res = await axios.post("/api/v1/admin/projects", data);
      toast.success("Project created!");
      reset();
    } catch (err: any) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to create project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-6 w-3xl flex flex-col items-center mx-auto"
    >
      <h1 className="text-2xl font-bold mb-2">Create a Project</h1>

      <input placeholder="Title" {...register("title")} className="input" />
      {errors.title && <p className="text-red-500">{errors.title.message}</p>}

      <input placeholder="Slug" {...register("slug")} className="input" />
      {errors.slug && <p className="text-red-500">{errors.slug.message}</p>}

      <input placeholder="Topic" {...register("topic")} className="input" />
      {errors.topic && <p className="text-red-500">{errors.topic.message}</p>}

      <textarea
        placeholder="Description"
        {...register("description")}
        className="input"
      />
      {errors.description && (
        <p className="text-red-500">{errors.description.message}</p>
      )}

      <div className="input">
        <label className="block font-medium mb-1">Project Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            const formData = new FormData();
            formData.append("file", file);

            try {
              const res = await axios.post("/api/upload", formData);
              const imageUrl = res.data.data.url;

              setProjectImage(imageUrl);
              setValue("image", imageUrl);
              toast.success("Image uploaded successfully");
            } catch (err) {
              console.error("Upload error:", err);
              toast.error("Image upload failed");
            }
          }}
        />
        {projectImage && (
          <p className="text-sm text-green-600 mt-1">
            Uploaded{" "}
            <a href={projectImage} target="_blank">
              View
            </a>
          </p>
        )}
      </div>

      <button type="submit" disabled={loading} className="btn-primary">
        {loading ? "Creating..." : "Create Project"}
      </button>
    </form>
  );
}
