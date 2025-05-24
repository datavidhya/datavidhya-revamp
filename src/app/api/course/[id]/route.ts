// app/api/courses/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET single course by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const courseId = parseInt(params.id);

    if (isNaN(courseId)) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation error",
          message: "Invalid course ID",
        },
        { status: 400 }
      );
    }

    const course = await prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!course) {
      return NextResponse.json(
        {
          success: false,
          error: "Not found",
          message: "Course not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: course,
    });
  } catch (error) {
    console.error("Error fetching course:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        message: "Failed to fetch course",
      },
      { status: 500 }
    );
  }
}

// PUT - Update course by ID
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const courseId = parseInt(params.id);
    const body = await request.json();

    if (isNaN(courseId)) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation error",
          message: "Invalid course ID",
        },
        { status: 400 }
      );
    }

    // Check if course exists
    const existingCourse = await prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!existingCourse) {
      return NextResponse.json(
        {
          success: false,
          error: "Not found",
          message: "Course not found",
        },
        { status: 404 }
      );
    }

    // Update course
    const updatedCourse = await prisma.course.update({
      where: { id: courseId },
      data: {
        ...(body.title && { title: body.title.trim() }),
        ...(body.slug && { slug: body.slug.trim() }),
        ...(body.description && { description: body.description.trim() }),
        ...(body.originalPrice !== undefined && {
          originalPrice: body.originalPrice,
        }),
        ...(body.discountPrice !== undefined && {
          discountPrice: body.discountPrice,
        }),
        ...(body.image && { image: body.image.trim() }),
        ...(body.language && { language: body.language.trim() }),
        ...(body.rating !== undefined && { rating: body.rating }),
        ...(body.ratingCount !== undefined && {
          ratingCount: body.ratingCount,
        }),
        ...(body.instructorName && {
          instructorName: body.instructorName.trim(),
        }),
        ...(body.instructorImage && {
          instructorImage: body.instructorImage.trim(),
        }),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Course updated successfully",
      data: updatedCourse,
    });
  } catch (error: any) {
    console.error("Error updating course:", error);

    // Handle unique constraint error for slug
    if (error.code === "P2002" && error.meta?.target?.includes("slug")) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation error",
          message: "Course slug already exists. Please use a different slug.",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        message: "Failed to update course",
      },
      { status: 500 }
    );
  }
}

// DELETE course by ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const courseId = parseInt(params.id);

    if (isNaN(courseId)) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation error",
          message: "Invalid course ID",
        },
        { status: 400 }
      );
    }

    // Check if course exists
    const existingCourse = await prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!existingCourse) {
      return NextResponse.json(
        {
          success: false,
          error: "Not found",
          message: "Course not found",
        },
        { status: 404 }
      );
    }

    // Delete course
    await prisma.course.delete({
      where: { id: courseId },
    });

    return NextResponse.json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting course:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        message: "Failed to delete course",
      },
      { status: 500 }
    );
  }
}
