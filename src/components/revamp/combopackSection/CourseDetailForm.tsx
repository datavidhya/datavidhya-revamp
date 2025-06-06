"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const courseDetailSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  content2: z.string().optional(),
  content3: z.string().optional(),
  content4: z.string().optional(),
  content5: z.string().optional(),
  content6: z.string().optional(),
  time: z.string().min(1),
  time2: z.string().optional(),
  time3: z.string().optional(),
  time4: z.string().optional(),
  time5: z.string().optional(),
  time6: z.string().optional(),
  mins: z.coerce.number().int().min(1),
  Sections: z.coerce.number().int().min(1),
});

type CourseDetailFormData = z.infer<typeof courseDetailSchema>;

export default function CourseDetailForm() {
  const [loading, setLoading] = useState(false);
  const contentFields = [
    "content",
    "content2",
    "content3",
    "content4",
    "content5",
    "content6",
  ] as const;
  const timeFields = [
    "time",
    "time2",
    "time3",
    "time4",
    "time5",
    "time6",
  ] as const;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CourseDetailFormData>({
    resolver: zodResolver(courseDetailSchema),
  });

  const onSubmit = async (data: CourseDetailFormData) => {
    setLoading(true);
    try {
      const res = await axios.post("/api/v1/admin/courseDetail", data);
      toast.success("Course Detail created!");
      reset();
    } catch (err: any) {
      console.error(err);
      toast.error(
        err.response?.data?.message || "Failed to create course detail"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-6 max-w-3xl mx-auto"
    >
      <h1 className="text-2xl font-bold mb-4">Create Course Detail</h1>

      <input placeholder="Title" {...register("title")} className="input" />
      {errors.title && <p className="text-red-500">{errors.title.message}</p>}

      {contentFields.map((field) => (
        <div key={field}>
          <input placeholder={field} {...register(field)} className="input" />
          {errors[field] && (
            <p className="text-red-500">{(errors[field] as any)?.message}</p>
          )}
        </div>
      ))}

      {timeFields.map((field) => (
        <div key={field}>
          <input placeholder={field} {...register(field)} className="input" />
          {errors[field] && (
            <p className="text-red-500">{(errors[field] as any)?.message}</p>
          )}
        </div>
      ))}

      <input
        placeholder="Total Minutes"
        {...register("mins")}
        className="input"
      />
      {errors.mins && <p className="text-red-500">{errors.mins.message}</p>}

      <input
        placeholder="Sections Count"
        {...register("Sections")}
        className="input"
      />
      {errors.Sections && (
        <p className="text-red-500">{errors.Sections.message}</p>
      )}

      <button type="submit" disabled={loading} className="btn-primary">
        {loading ? "Submitting..." : "Create Course Detail"}
      </button>
    </form>
  );
}
