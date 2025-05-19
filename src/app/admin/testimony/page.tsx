"use client"
import TestimonialForm from '@/components/revamp/Testimony/TestimonialForm';
import React, { useState, useEffect } from 'react';

// Define the testimonial type
type Testimonial = {
  id: string;
  username: string;
  review: string;
  stars: number;
  position: string;
  company: string;
  imageUrl?: string;
  createdAt: string;
};

const TestimonialAdmin: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Fetch testimonials on component mount
  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Fetch testimonials from API
  const fetchTestimonials = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/testimonials');
      
      if (!response.ok) {
        throw new Error('Failed to fetch testimonials');
      }
      
      const data = await response.json();
      setTestimonials(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      console.error('Error fetching testimonials:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (formData: any, profileImage: File | null) => {
    try {
      // Create form data for multipart/form-data submission
      const submitData = new FormData();
      
      // Append JSON data as a string
      submitData.append('testimonialData', JSON.stringify(formData));
      
      // Append file if exists
      if (profileImage) {
        submitData.append('profileImage', profileImage);
      }
      
      // Submit the form data
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        body: submitData,
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit testimonial');
      }
      
      // Refresh testimonials after submission
      fetchTestimonials();
      setIsFormOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      console.error('Error submitting testimonial:', err);
    }
  };

  // Delete a testimonial
  const deleteTestimonial = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) {
      return;
    }
    
    try {
      const response = await fetch(`/api/testimonials?id=${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete testimonial');
      }
      
      // Refresh testimonials after deletion
      fetchTestimonials();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      console.error('Error deleting testimonial:', err);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Testimonials Admin</h1>
        <button
          onClick={() => setIsFormOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Add New Testimonial
        </button>
      </div>

      {/* Error message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* Loading state */}
      {isLoading ? (
        <div className="text-center py-10">Loading testimonials...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.length === 0 ? (
            <div className="col-span-full text-center py-10 text-gray-500">
              No testimonials found. Add your first one!
            </div>
          ) : (
            testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="border rounded-lg p-4 bg-white shadow-sm"
              >
                <div className="flex items-center mb-4">
                  {testimonial.imageUrl ? (
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.username}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                      <span className="text-xl">{testimonial.username.charAt(0)}</span>
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold">{testimonial.username}</h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.position} at {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="mb-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        {i < testimonial.stars ? '★' : '☆'}
                      </span>
                    ))}
                </div>

                <p className="text-gray-700 mb-4">{testimonial.review}</p>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>
                    {new Date(testimonial.createdAt).toLocaleDateString()}
                  </span>
                  <button
                    onClick={() => deleteTestimonial(testimonial.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Testimonial Form */}
      <TestimonialForm
        isOpen={isFormOpen}
        onSubmit={handleSubmit}
        onCancel={() => setIsFormOpen(false)}
      />
    </div>
  );
};

export default TestimonialAdmin;