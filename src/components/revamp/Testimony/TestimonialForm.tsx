import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Define the testimonial schema with Zod
const testimonialSchema = z.object({
  username: z.string().min(2, { message: 'Username must be at least 2 characters' }),
  review: z.string().min(10, { message: 'Review must be at least 10 characters' }),
  stars: z.number().min(1).max(5, { message: 'Rating must be between 1 and 5 stars' }),
  position: z.string().min(2, { message: 'Position must be at least 2 characters' }),
  company: z.string().min(2, { message: 'Company must be at least 2 characters' }),
});

// TypeScript type derived from the Zod schema
type TestimonialFormData = z.infer<typeof testimonialSchema>;

interface TestimonialFormProps {
  onSubmit: (data: TestimonialFormData, profileImage: File | null) => void;
  onCancel?: () => void;
  isOpen: boolean;
}

const TestimonialForm: React.FC<TestimonialFormProps> = ({ onSubmit, onCancel, isOpen }) => {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  
  const { 
    register, 
    handleSubmit, 
    control,
    reset, 
    formState: { errors, isSubmitting } 
  } = useForm<TestimonialFormData>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      username: '',
      review: '',
      stars: 5,
      position: '',
      company: '',
    }
  });

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setProfileImage(file);
    
    // Create preview URL
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl('');
    }
  };

  // Handle form submission
  const submitForm = (data: TestimonialFormData) => {
    onSubmit(data, profileImage);
    reset();
    setProfileImage(null);
    setPreviewUrl('');
  };

  // Handle cancel
  const handleCancel = () => {
    reset();
    setProfileImage(null);
    setPreviewUrl('');
    if (onCancel) onCancel();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Add New Testimonial</h2>
        
        <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              {...register('username')}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Full Name"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Position</label>
            <input
              {...register('position')}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Job Title"
            />
            {errors.position && (
              <p className="text-red-500 text-sm mt-1">{errors.position.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Company</label>
            <input
              {...register('company')}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Company Name"
            />
            {errors.company && (
              <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Rating</label>
            <Controller
              name="stars"
              control={control}
              render={({ field }) => (
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => field.onChange(star)}
                      className="text-2xl focus:outline-none"
                    >
                      {star <= field.value ? '★' : '☆'}
                    </button>
                  ))}
                  <span className="ml-2">{field.value}/5</span>
                </div>
              )}
            />
            {errors.stars && (
              <p className="text-red-500 text-sm mt-1">{errors.stars.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Review</label>
            <textarea
              {...register('review')}
              rows={4}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Write your testimonial..."
            />
            {errors.review && (
              <p className="text-red-500 text-sm mt-1">{errors.review.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full"
            />
            {previewUrl && (
              <div className="mt-2">
                <img 
                  src={previewUrl} 
                  alt="Preview" 
                  className="h-20 w-20 object-cover rounded-full" 
                />
              </div>
            )}
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 border rounded-md"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Testimonial'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestimonialForm;