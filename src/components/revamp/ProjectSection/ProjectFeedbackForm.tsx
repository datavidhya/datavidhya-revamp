"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const projectFeedbackSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  linkedInUrl: z.string().url(),
  image: z.string().url(),
  projectImage: z.string().url(),
});

type ProjectFeedbackFormData = z.infer<typeof projectFeedbackSchema>;

export default function ProjectFeedbackForm() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [projectImage, setProjectImage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ProjectFeedbackFormData>({
    resolver: zodResolver(projectFeedbackSchema),
  });

  const onSubmit = async (data: ProjectFeedbackFormData) => {
    setLoading(true);
    try {
      const res = await axios.post("/api/v1/admin/projectFeedback", data);
      toast.success("ProjectFeedback created!");
      reset();
    } catch (err: any) {
      console.error(err);
      toast.error(
        err.response?.data?.message || "Failed to create ProjectFeedback"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-6 w-3xl flex flex-col items-center mx-auto"
    >
      <h1 className="text-2xl font-bold mb-2">Create a New ProjectFeedback</h1>

      <input placeholder="name" {...register("name")} className="input" />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      <input
        placeholder="linkedInUrl"
        {...register("linkedInUrl")}
        className="input"
      />
      {errors.linkedInUrl && (
        <p className="text-red-500">{errors.linkedInUrl.message}</p>
      )}
      <textarea
        placeholder="Description"
        {...register("description")}
        className="input"
      />
      {errors.description && (
        <p className="text-red-500">{errors.description.message}</p>
      )}

      <div className="input">
        <label className="block font-medium mb-1">Project  Image</label>
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

              setImage(imageUrl);
              setValue("image", imageUrl);
              toast.success("Image uploaded successfully");
            } catch (err) {
              console.error("Upload error:", err);
              toast.error("Image upload failed");
            }
          }}
        />
        {image && (
          <p className="text-sm text-green-600 mt-1">
            Uploaded{" "}
            <a href={image} target="_blank">
              View
            </a>
          </p>
        )}
      </div>

      <div className="input">
        <label className="block font-medium mb-1">User Image</label>
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
              setValue("projectImage", imageUrl);
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
            <a
              href={projectImage}
              target="_blank"
              className="bg-green-200 rounded-2xl px-1.5 text-sm"
            >
              View
            </a>
          </p>
        )}
      </div>
      {errors.projectImage && (
        <p className="text-red-500">{errors.projectImage.message}</p>
      )}

      <button type="submit" disabled={loading} className="btn-primary">
        {loading ? "Creating..." : "Create Project Feedback"}
      </button>
    </form>
  );
}
