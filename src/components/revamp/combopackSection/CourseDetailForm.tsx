"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const CourseDetailSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().min(1),
  originalPrice: z.number().min(0),
  discountPrice: z.number().min(0),
  image: z.string().url(),
  language: z.string().min(1),
  rating: z.number().min(0).max(5),
  ratingCount: z.number().int().min(0),
  instructorName: z.string().min(1),
  instructorImage: z.string().url(),
});

type CourseDetailFormData = z.infer<typeof CourseDetailSchema>;

export default function CourseDetailForm() {
  const [loading, setLoading] = useState(false);
  const [courseImage, setCourseImage] = useState("");
  const [instructorImage, setInstructorImage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<CourseDetailFormData>({
    resolver: zodResolver(CourseDetailSchema),
    defaultValues: {
      rating: 0,
      ratingCount: 0,
    },
  });

  const onSubmit = async (data: CourseDetailFormData) => {
    setLoading(true);
    try {
      const res = await axios.post("/api/v1/admin/courses", data);
      toast.success("Course created!");
      reset();
    } catch (err: any) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to create course");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-6 w-3xl flex flex-col items-center mx-auto"
    >
      <h1 className="text-2xl font-bold mb-2">Create a New Course</h1>

      <input placeholder="Title" {...register("title")} className="input" />
      {errors.title && <p className="text-red-500">{errors.title.message}</p>}

      <input placeholder="Slug" {...register("slug")} className="input" />
      {errors.slug && <p className="text-red-500">{errors.slug.message}</p>}

      <textarea
        placeholder="Description"
        {...register("description")}
        className="input"
      />
      {errors.description && (
        <p className="text-red-500">{errors.description.message}</p>
      )}

      <input
        type="number"
        step="0.01"
        placeholder="Original Price"
        {...register("originalPrice", { valueAsNumber: true })}
        className="input"
      />
      {errors.originalPrice && (
        <p className="text-red-500">{errors.originalPrice.message}</p>
      )}

      <input
        type="number"
        step="0.01"
        placeholder="Discount Price"
        {...register("discountPrice", { valueAsNumber: true })}
        className="input"
      />
      {errors.discountPrice && (
        <p className="text-red-500">{errors.discountPrice.message}</p>
      )}
      <div className="input">
        <label className="block font-medium mb-1">Course Image</label>
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

              setCourseImage(imageUrl);
              setValue("image", imageUrl);
              toast.success("Image uploaded successfully");
            } catch (err) {
              console.error("Upload error:", err);
              toast.error("Image upload failed");
            }
          }}
        />
        {courseImage && (
          <p className="text-sm text-green-600 mt-1">
            Uploaded{" "}
            <a href={courseImage} target="_blank">
              View
            </a>
          </p>
        )}
      </div>
      <input
        placeholder="Language"
        {...register("language")}
        className="input"
      />
      {errors.language && (
        <p className="text-red-500">{errors.language.message}</p>
      )}

      <input
        type="number"
        step="0.1"
        placeholder="Rating"
        {...register("rating", { valueAsNumber: true })}
        className="input"
      />
      {errors.rating && <p className="text-red-500">{errors.rating.message}</p>}

      <input
        type="number"
        placeholder="Rating Count"
        {...register("ratingCount", { valueAsNumber: true })}
        className="input"
      />
      {errors.ratingCount && (
        <p className="text-red-500">{errors.ratingCount.message}</p>
      )}

      <input
        placeholder="Instructor Name"
        {...register("instructorName")}
        className="input"
      />
      {errors.instructorName && (
        <p className="text-red-500">{errors.instructorName.message}</p>
      )}

      <div className="input">
        <label className="block font-medium mb-1">Instructor Image</label>
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
              setInstructorImage(imageUrl);
              setValue("instructorImage", imageUrl);
              toast.success("Image uploaded successfully");
            } catch (err) {
              console.error("Upload error:", err);
              toast.error("Image upload failed");
            }
          }}
        />
        {instructorImage && (
          <p className="text-sm text-green-600 mt-1">
            Uploaded{" "}
            <a
              href={instructorImage}
              target="_blank"
              className="bg-green-200 rounded-2xl px-1.5 text-sm"
            >
              View
            </a>
          </p>
        )}
      </div>
      {errors.instructorImage && (
        <p className="text-red-500">{errors.instructorImage.message}</p>
      )}

      <button type="submit" disabled={loading} className="btn-primary">
        {loading ? "Creating..." : "Create Course"}
      </button>
    </form>
  );
}
