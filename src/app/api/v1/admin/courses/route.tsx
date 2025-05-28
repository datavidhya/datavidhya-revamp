import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const courseSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  description: z.string().min(1, 'Description is required'),
  originalPrice: z.number().min(0, 'Original price must be positive'),
  discountPrice: z.number().min(0, 'Discount price must be positive'),
  image: z.string().url('Must be a valid URL'),
  language: z.string().min(1, 'Language is required'),
  rating: z.number().min(0).max(5, 'Rating must be between 0 and 5'),
  ratingCount: z.number().int().min(0, 'Rating count must be a positive integer'),
  instructorName: z.string().min(1, 'Instructor name is required'),
  instructorImage: z.string().url('Must be a valid URL'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validationResult = courseSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          message: 'Validation failed', 
          errors: validationResult.error.errors 
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    if (data.discountPrice > data.originalPrice) {
      return NextResponse.json(
        { message: 'Discount price cannot be higher than original price' },
        { status: 400 }
      );
    }

    const existingCourse = await prisma.course.findUnique({
      where: { slug: data.slug }
    });

    if (existingCourse) {
      return NextResponse.json(
        { message: 'A course with this slug already exists' },
        { status: 409 }
      );
    }

    const course = await prisma.course.create({
      data: {
        title: data.title,
        slug: data.slug,
        description: data.description,
        originalPrice: data.originalPrice,
        discountPrice: data.discountPrice,
        image: data.image,
        language: data.language,
        rating: data.rating,
        ratingCount: data.ratingCount,
        instructorName: data.instructorName,
        instructorImage: data.instructorImage,
      }
    });

    return NextResponse.json(
      {
        message: 'Course created successfully',
        course: {
          id: course.id,
          title: course.title,
          slug: course.slug,
          createdAt: course.createdAt
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error creating course:', error);
    
    if (error instanceof Error) {
      if ('code' in error && error.code === 'P2002') {
        return NextResponse.json(
          { message: 'A course with this slug already exists' },
          { status: 409 }
        );
      }
    }

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      orderBy: { createdAt: 'desc' },
      take: 20, 
    });

    return NextResponse.json({ courses });
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}