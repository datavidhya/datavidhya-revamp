import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const testimonialSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  image: z.string().url("Invalid image URL"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(500, "Description too long"),
  stars: z
    .number()
    .int()
    .min(1, "Stars must be at least 1")
    .max(5, "Stars cannot exceed 5"),
  linkedInUrl: z
    .string()
    .url("Invalid LinkedIn URL")
    .optional()
    .or(z.literal("")),
});

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = parseInt(url.searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    if (page < 1 || limit < 1 || limit > 100) {
      return NextResponse.json(
        { error: "Invalid pagination parameters" },
        { status: 400 }
      );
    }

    const testimonials = await prisma.testimonial.findMany({
      skip,
      take: limit,
    });

    const total = await prisma.testimonial.count();

    return NextResponse.json({
      testimonials,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = testimonialSchema.parse(body);

    const testimonial = await prisma.testimonial.create({
      data: {
        name: validatedData.name.trim(),
        image: validatedData.image,
        description: validatedData.description.trim(),
        stars: validatedData.stars,
        linkedInUrl: validatedData.linkedInUrl || "",
      },
    });

    return NextResponse.json(testimonial, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Error creating testimonial:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
