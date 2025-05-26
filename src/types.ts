// types/testimonial.ts
export interface Testimonial {
  id: number;
  name: string;
  image: string;
  description: string;
  stars: number;
  linkedInUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateTestimonialRequest {
  name: string;
  image: string;
  description: string;
  stars: number;
  linkedInUrl?: string;
}

export interface UpdateTestimonialRequest {
  name?: string;
  image?: string;
  description?: string;
  stars?: number;
  linkedInUrl?: string;
}

export interface TestimonialsResponse {
  testimonials: Testimonial[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiError {
  error: string;
  details?: any;
}
