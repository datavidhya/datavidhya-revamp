"use client";

import React, { useState, useEffect } from "react";

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
  updatedAt: string;
}

interface CourseFormData {
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
}

const CourseManagement: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isInstructorUploading, setIsInstructorUploading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const [formData, setFormData] = useState<CourseFormData>({
    title: "",
    slug: "",
    description: "",
    originalPrice: 0,
    discountPrice: 0,
    image: "",
    language: "",
    rating: 0,
    ratingCount: 0,
    instructorName: "",
    instructorImage: "",
  });

  const [errors, setErrors] = useState<Partial<CourseFormData>>({});

  // Fetch courses on component mount
  useEffect(() => {
    fetchCourses();
  }, []);

  // Auto-hide messages after 5 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // Fetch all courses
  const fetchCourses = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/v1/user/course");
      const result = await response.json();

      if (result.success) {
        setCourses(result.data);
      } else {
        setMessage({
          type: "error",
          text: result.message || "Failed to fetch courses",
        });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Failed to fetch courses" });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: [
        "originalPrice",
        "discountPrice",
        "rating",
        "ratingCount",
      ].includes(name)
        ? parseFloat(value) || 0
        : value,
    }));

    // Auto-generate slug from title
    if (name === "title") {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setFormData((prev) => ({ ...prev, slug }));
    }

    // Clear error for this field
    if (errors[name as keyof CourseFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Handle image upload
  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "image" | "instructorImage"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file
    if (!file.type.startsWith("image/")) {
      setMessage({ type: "error", text: "Please select a valid image file" });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setMessage({ type: "error", text: "Image size should be less than 5MB" });
      return;
    }

    const setUploadingState =
      field === "image" ? setIsUploading : setIsInstructorUploading;
    setUploadingState(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setFormData((prev) => ({ ...prev, [field]: result.url }));
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      } else {
        setMessage({
          type: "error",
          text: result.error || "Failed to upload image",
        });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Failed to upload image" });
    } finally {
      setUploadingState(false);
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Partial<CourseFormData> = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.slug.trim()) newErrors.slug = "Slug is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (formData.originalPrice <= 0)
      newErrors.originalPrice = "Original price must be greater than 0";
    if (formData.discountPrice < 0)
      newErrors.discountPrice = "Discount price cannot be negative";
    if (!formData.image.trim()) newErrors.image = "Course image is required";
    if (!formData.language.trim()) newErrors.language = "Language is required";
    if (formData.rating < 0 || formData.rating > 5)
      newErrors.rating = "Rating must be between 0-5";
    if (formData.ratingCount < 0)
      newErrors.ratingCount = "Rating count cannot be negative";
    if (!formData.instructorName.trim())
      newErrors.instructorName = "Instructor name is required";
    if (!formData.instructorImage.trim())
      newErrors.instructorImage = "Instructor image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/v1/user/course", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setMessage({ type: "success", text: "Course created successfully!" });
        setFormData({
          title: "",
          slug: "",
          description: "",
          originalPrice: 0,
          discountPrice: 0,
          image: "",
          language: "",
          rating: 0,
          ratingCount: 0,
          instructorName: "",
          instructorImage: "",
        });
        setShowForm(false);
        fetchCourses();
      } else {
        setMessage({
          type: "error",
          text: result.message || "Failed to create course",
        });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Failed to create course" });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete course
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this course?")) return;

    try {
      const response = await fetch(`/api/v1/user/course/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();

      if (result.success) {
        setMessage({ type: "success", text: "Course deleted successfully!" });
        fetchCourses();
      } else {
        setMessage({
          type: "error",
          text: result.message || "Failed to delete course",
        });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Failed to delete course" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Course Management</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          {showForm ? "Cancel" : "Add New Course"}
        </button>
      </div>

      {/* Message */}
      {message && (
        <div
          className={`mb-4 p-4 rounded-md ${
            message.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Add Course Form */}
      {showForm && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Add New Course</h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.title ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Course title"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title}</p>
              )}
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Slug *
              </label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.slug ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="course-slug"
              />
              {errors.slug && (
                <p className="mt-1 text-sm text-red-600">{errors.slug}</p>
              )}
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.description ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Course description"
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.description}
                </p>
              )}
            </div>

            {/* Prices */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Original Price *
              </label>
              <input
                type="number"
                name="originalPrice"
                value={formData.originalPrice}
                onChange={handleInputChange}
                step="0.01"
                min="0"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.originalPrice ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="99.99"
              />
              {errors.originalPrice && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.originalPrice}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Discount Price *
              </label>
              <input
                type="number"
                name="discountPrice"
                value={formData.discountPrice}
                onChange={handleInputChange}
                step="0.01"
                min="0"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.discountPrice ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="49.99"
              />
              {errors.discountPrice && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.discountPrice}
                </p>
              )}
            </div>

            {/* Course Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Image *
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, "image")}
                  disabled={isUploading}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                />
                {formData.image && (
                  <img
                    src={formData.image}
                    alt="Course"
                    className="w-16 h-16 rounded object-cover"
                  />
                )}
              </div>
              {isUploading && (
                <p className="mt-1 text-sm text-blue-600">Uploading...</p>
              )}
              {errors.image && (
                <p className="mt-1 text-sm text-red-600">{errors.image}</p>
              )}
            </div>

            {/* Language */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language *
              </label>
              <input
                type="text"
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.language ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="English"
              />
              {errors.language && (
                <p className="mt-1 text-sm text-red-600">{errors.language}</p>
              )}
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating *
              </label>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                step="0.1"
                min="0"
                max="5"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.rating ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="4.5"
              />
              {errors.rating && (
                <p className="mt-1 text-sm text-red-600">{errors.rating}</p>
              )}
            </div>

            {/* Rating Count */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating Count *
              </label>
              <input
                type="number"
                name="ratingCount"
                value={formData.ratingCount}
                onChange={handleInputChange}
                min="0"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.ratingCount ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="150"
              />
              {errors.ratingCount && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.ratingCount}
                </p>
              )}
            </div>

            {/* Instructor Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Instructor Name *
              </label>
              <input
                type="text"
                name="instructorName"
                value={formData.instructorName}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.instructorName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="John Doe"
              />
              {errors.instructorName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.instructorName}
                </p>
              )}
            </div>

            {/* Instructor Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Instructor Image *
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, "instructorImage")}
                  disabled={isInstructorUploading}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                />
                {formData.instructorImage && (
                  <img
                    src={formData.instructorImage}
                    alt="Instructor"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                )}
              </div>
              {isInstructorUploading && (
                <p className="mt-1 text-sm text-blue-600">Uploading...</p>
              )}
              {errors.instructorImage && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.instructorImage}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting || isUploading || isInstructorUploading}
                className={`w-full py-3 px-4 rounded-md font-medium text-white transition-colors ${
                  isSubmitting || isUploading || isInstructorUploading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isSubmitting ? "Creating Course..." : "Create Course"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Courses List */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">All Courses ({courses.length})</h2>
        </div>

        {isLoading ? (
          <div className="p-8 text-center text-gray-500">
            Loading courses...
          </div>
        ) : courses.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No courses found</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex items-center mb-2">
                    <img
                      src={course.instructorImage}
                      alt={course.instructorName}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm text-gray-700">
                      {course.instructorName}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <span className="text-lg font-bold text-green-600">
                        ${course.discountPrice}
                      </span>
                      <span className="text-sm text-gray-500 line-through ml-2">
                        ${course.originalPrice}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm ml-1">
                        {course.rating} ({course.ratingCount})
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {course.language}
                    </span>
                    <button
                      onClick={() => handleDelete(course.id)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseManagement;
