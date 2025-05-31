"use client";
import React, { useState, useEffect } from "react";
import { Trash2, Edit, Star, Upload, X, Plus } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  description: string;
  stars: number;
  linkedInUrl: string;
  createdAt: string;
  updatedAt: string;
}

interface FormData {
  name: string;
  image: string;
  description: string;
  stars: number;
  linkedInUrl: string;
}

const TestimonialManager = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    image: "",
    description: "",
    stars: 5,
    linkedInUrl: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchTestimonials = async (page = 1) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/v1/admin/testimonial?page=${page}&limit=10`
      );
      const data = await response.json();

      if (response.ok) {
        setTestimonials(data.testimonials);
        setCurrentPage(data.pagination.page);
        setTotalPages(data.pagination.totalPages);
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (file: File) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setFormData((prev) => ({ ...prev, image: data.data.url }));
        setErrors((prev) => ({ ...prev, image: "" }));
      } else {
        setErrors((prev) => ({ ...prev, image: data.error }));
      }
    } catch (error) {
      setErrors((prev) => ({ ...prev, image: "Upload failed" }));
    } finally {
      setUploading(false);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.image.trim()) newErrors.image = "Image is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (formData.stars < 1 || formData.stars > 5)
      // @ts-ignore
      newErrors.stars = "Stars must be between 1 and 5";
    if (formData.linkedInUrl && !formData.linkedInUrl.match(/^https?:\/\/.+/)) {
      newErrors.linkedInUrl = "Please enter a valid URL";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const url = editingId
        ? `/api/v1/admin/testimonial/${editingId}`
        : "/api/v1/admin/testimonial";
      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        resetForm();
        fetchTestimonials(currentPage);
      } else {
        const data = await response.json();
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Error submitting testimonial:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;

    setLoading(true);
    try {
      const response = await fetch(`/api/v1/admin/testimonial/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchTestimonials(currentPage);
      }
    } catch (error) {
      console.error("Error deleting testimonial:", error);
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (testimonial: Testimonial) => {
    setFormData({
      name: testimonial.name,
      image: testimonial.image,
      description: testimonial.description,
      stars: testimonial.stars,
      linkedInUrl: testimonial.linkedInUrl,
    });
    setEditingId(testimonial.id);
    setShowForm(true);
    setErrors({});
  };

  const resetForm = () => {
    setFormData({
      name: "",
      image: "",
      description: "",
      stars: 5,
      linkedInUrl: "",
    });
    setEditingId(null);
    setShowForm(false);
    setErrors({});
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Testimonial Manager
        </h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Testimonial
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                {editingId ? "Edit Testimonial" : "Add New Testimonial"}
              </h2>
              <button
                onClick={resetForm}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profile Image *
                </label>
                <div className="space-y-3">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      e.target.files?.[0] &&
                      handleImageUpload(e.target.files[0])
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  {uploading && (
                    <div className="flex items-center gap-2 text-blue-600">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                      <span className="text-sm">Uploading image...</span>
                    </div>
                  )}
                  {formData.image && (
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="w-16 h-16 object-cover rounded-full border-2 border-white shadow-sm"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-700">
                          Image uploaded successfully
                        </p>
                        <p className="text-xs text-gray-500">
                          Click the X to remove
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, image: "" }))
                        }
                        className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                  {errors.image && (
                    <p className="text-red-500 text-sm">{errors.image}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Testimonial Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Enter the testimonial text..."
                />
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.description.length}/500 characters
                </div>
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.description}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating *
                </label>
                <div className="flex gap-2 items-center">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, stars: num }))
                      }
                      className="group"
                    >
                      <Star
                        className={`w-8 h-8 transition-colors ${
                          num <= formData.stars
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300 group-hover:text-yellow-200"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {formData.stars} star{formData.stars !== 1 ? "s" : ""}
                  </span>
                </div>
                {errors.stars && (
                  <p className="text-red-500 text-sm mt-1">{errors.stars}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn Profile (Optional)
                </label>
                <input
                  type="url"
                  value={formData.linkedInUrl}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      linkedInUrl: e.target.value,
                    }))
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="https://linkedin.com/in/username"
                />
                {errors.linkedInUrl && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.linkedInUrl}
                  </p>
                )}
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleSubmit}
                  disabled={loading || uploading}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex-1 font-medium transition-colors"
                >
                  {loading
                    ? "Saving..."
                    : editingId
                    ? "Update Testimonial"
                    : "Create Testimonial"}
                </button>
                <button
                  onClick={resetForm}
                  className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            All Testimonials
          </h2>
        </div>

        {loading && !showForm ? (
          <div className="p-12 text-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading testimonials...</p>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="p-12 text-center text-gray-500">
            <div className="mb-4">
              <Star className="w-16 h-16 mx-auto text-gray-300" />
            </div>
            <p className="text-lg">No testimonials found</p>
            <p className="text-sm">
              Add your first testimonial to get started!
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {testimonial.name}
                        </h3>
                        <div className="flex items-center gap-1 mt-1">
                          {renderStars(testimonial.stars)}
                          <span className="ml-2 text-sm text-gray-600">
                            ({testimonial.stars}/5)
                          </span>
                        </div>
                        {testimonial.linkedInUrl && (
                          <a
                            href={testimonial.linkedInUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-flex items-center gap-1 hover:underline"
                          >
                            View LinkedIn Profile
                           
                          </a>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => startEdit(testimonial)}
                          className="text-blue-600 hover:text-blue-800 p-2 rounded-lg hover:bg-blue-50 transition-colors"
                          title="Edit testimonial"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(testimonial.id)}
                          className="text-red-600 hover:text-red-800 p-2 rounded-lg hover:bg-red-50 transition-colors"
                          title="Delete testimonial"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 mt-3 italic border-l-4 border-blue-200 pl-4">
                      "{testimonial.description}"
                    </blockquote>
                    <p className="text-gray-500 text-sm mt-3">
                      Added on{" "}
                      {new Date(testimonial.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="p-6 border-t border-gray-200 flex justify-center items-center gap-4">
            <button
              onClick={() => fetchTestimonials(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              Previous
            </button>
            <span className="text-gray-600 font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => fetchTestimonials(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialManager;
