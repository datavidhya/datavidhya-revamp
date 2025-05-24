"use client";

import React, { useState } from "react";

interface TestimonialFormData {
  name: string;
  image: string;
  description: string;
  stars: number;
  linkedInUrl: string;
}

interface TestimonialFormProps {
  onSuccess?: (testimonial: any) => void;
  onError?: (error: string) => void;
}

const TestimonialForm: React.FC<TestimonialFormProps> = ({
  onSuccess,
  onError,
}) => {
  const [formData, setFormData] = useState<TestimonialFormData>({
    name: "",
    image: "",
    description: "",
    stars: 5,
    linkedInUrl: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [errors, setErrors] = useState<Partial<TestimonialFormData>>({});

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "stars" ? parseInt(value) || 1 : value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof TestimonialFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Handle star rating
  const handleStarClick = (rating: number) => {
    setFormData((prev) => ({ ...prev, stars: rating }));
    if (errors.stars) {
      setErrors((prev) => ({ ...prev, stars: undefined }));
    }
  };

  // Handle image upload
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      onError?.("Please select a valid image file");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      onError?.("Image size should be less than 5MB");
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file); // Changed from 'image' to 'file'

      const response = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const result = await response.json();

      // Your upload API returns { success: true, url: 'image-url' }
      const imageUrl = result.url;

      if (imageUrl) {
        setFormData((prev) => ({ ...prev, image: imageUrl }));
        setImagePreview(imageUrl);
        setErrors((prev) => ({ ...prev, image: undefined }));
      } else {
        throw new Error("No image URL returned from upload");
      }
    } catch (error) {
      console.error("Image upload error:", error);
      onError?.("Failed to upload image. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Partial<TestimonialFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.image.trim()) {
      newErrors.image = "Image is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (formData.stars < 1 || formData.stars > 5) {
      newErrors.stars = "Stars must be between 1 and 5";
    }

    if (!formData.linkedInUrl.trim()) {
      newErrors.linkedInUrl = "LinkedIn URL is required";
    } else if (!isValidUrl(formData.linkedInUrl)) {
      newErrors.linkedInUrl = "Please enter a valid URL";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // URL validation helper
  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/v1/user/testimonial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit testimonial");
      }

      // Reset form on success
      setFormData({
        name: "",
        image: "",
        description: "",
        stars: 5,
        linkedInUrl: "",
      });
      setImagePreview("");

      onSuccess?.(result.data);
    } catch (error) {
      console.error("Submit error:", error);
      onError?.(
        error instanceof Error ? error.message : "Failed to submit testimonial"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Testimonial</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Image Upload Field */}
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Profile Image *
          </label>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={isUploading}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.image ? "border-red-500" : "border-gray-300"
                }`}
              />
              {isUploading && (
                <p className="mt-1 text-sm text-blue-600">Uploading image...</p>
              )}
            </div>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
              />
            )}
          </div>
          {errors.image && (
            <p className="mt-1 text-sm text-red-600">{errors.image}</p>
          )}
        </div>

        {/* Description Field */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Testimonial *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical ${
              errors.description ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Share your experience..."
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description}</p>
          )}
        </div>

        {/* Star Rating Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rating *
          </label>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleStarClick(star)}
                className={`text-2xl transition-colors duration-200 ${
                  star <= formData.stars
                    ? "text-yellow-400 hover:text-yellow-500"
                    : "text-gray-300 hover:text-gray-400"
                }`}
              >
                ★
              </button>
            ))}
            <span className="ml-2 text-sm text-gray-600">
              ({formData.stars} star{formData.stars !== 1 ? "s" : ""})
            </span>
          </div>
          {errors.stars && (
            <p className="mt-1 text-sm text-red-600">{errors.stars}</p>
          )}
        </div>

        {/* LinkedIn URL Field */}
        <div>
          <label
            htmlFor="linkedInUrl"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            LinkedIn Profile URL *
          </label>
          <input
            type="url"
            id="linkedInUrl"
            name="linkedInUrl"
            value={formData.linkedInUrl}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.linkedInUrl ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="https://linkedin.com/in/yourprofile"
          />
          {errors.linkedInUrl && (
            <p className="mt-1 text-sm text-red-600">{errors.linkedInUrl}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || isUploading}
          className={`w-full py-3 px-4 rounded-md font-medium transition-colors duration-200 ${
            isSubmitting || isUploading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          } text-white`}
        >
          {isSubmitting ? "Submitting..." : "Submit Testimonial"}
        </button>
      </form>
    </div>
  );
};

export default TestimonialForm;
