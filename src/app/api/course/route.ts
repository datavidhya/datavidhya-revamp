// app/api/courses/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Type definition for course data
interface CourseData {
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

// Validation function
function validateCourseData(data: any): data is CourseData {
  return (
    typeof data.title === "string" &&
    data.title.trim().length > 0 &&
    typeof data.slug === "string" &&
    data.slug.trim().length > 0 &&
    typeof data.description === "string" &&
    data.description.trim().length > 0 &&
    typeof data.originalPrice === "number" &&
    data.originalPrice >= 0 &&
    typeof data.discountPrice === "number" &&
    data.discountPrice >= 0 &&
    typeof data.image === "string" &&
    data.image.trim().length > 0 &&
    typeof data.language === "string" &&
    data.language.trim().length > 0 &&
    typeof data.rating === "number" &&
    data.rating >= 0 &&
    data.rating <= 5 &&
    typeof data.ratingCount === "number" &&
    data.ratingCount >= 0 &&
    typeof data.instructorName === "string" &&
    data.instructorName.trim().length > 0 &&
    typeof data.instructorImage === "string" &&
    data.instructorImage.trim().length > 0
  );
}

// POST - Create new course
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!validateCourseData(body)) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation error",
          message: "Invalid course data. Please check all required fields.",
        },
        { status: 400 }
      );
    }

    const course = await prisma.course.create({
      data: {
        title: body.title.trim(),
        slug: body.slug.trim(),
        description: body.description.trim(),
        originalPrice: body.originalPrice,
        discountPrice: body.discountPrice,
        image: body.image.trim(),
        language: body.language.trim(),
        rating: body.rating,
        ratingCount: body.ratingCount,
        instructorName: body.instructorName.trim(),
        instructorImage: body.instructorImage.trim(),
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Course created successfully",
        data: course,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating course:", error);

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
        message: "Failed to create course",
      },
      { status: 500 }
    );
  }
}

// GET - Fetch courses
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Query parameters
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";
    const language = searchParams.get("language") || "";
    const minRating = parseFloat(searchParams.get("minRating") || "0");
    const sortBy = searchParams.get("sortBy") || "createdAt";
    const sortOrder = searchParams.get("sortOrder") || "desc";

    // Build where clause
    const where: any = {};

    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
        { instructorName: { contains: search, mode: "insensitive" } },
      ];
    }

    if (language) {
      where.language = { equals: language, mode: "insensitive" };
    }

    if (minRating > 0) {
      where.rating = { gte: minRating };
    }

    // Build orderBy clause
    const orderBy: any = {};
    orderBy[sortBy] = sortOrder;

    // Calculate skip for pagination
    const skip = (page - 1) * limit;

    // Fetch courses with pagination
    const [courses, totalCount] = await Promise.all([
      prisma.course.findMany({
        where,
        orderBy,
        skip,
        take: limit,
      }),
      prisma.course.count({ where }),
    ]);

    // Calculate pagination info
    const totalPages = Math.ceil(totalCount / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    return NextResponse.json({
      success: true,
      data: courses,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        limit,
        hasNextPage,
        hasPrevPage,
      },
    });
  } catch (error) {
    console.error("Error fetching courses:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        message: "Failed to fetch courses",
      },
      { status: 500 }
    );
  }
}

// app/api/courses/[id]/route.ts
// GET single course by ID
export async function GET_BY_ID(
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
