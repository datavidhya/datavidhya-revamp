import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, image, description, stars, linkedInUrl } = body;

    const testimonial = await prisma.testimonial.create({
      data: {
        name: name.trim(),
        image: image.trim(),
        description: description.trim(),
        stars,
        linkedInUrl: linkedInUrl.trim(),
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Testimonial created successfully",
        data: testimonial,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating testimonial:", error);

    return NextResponse.json(
      {
        error: "Internal server error",
        message: "Failed to save testimonial to database",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: testimonials,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching testimonials:", error);

    return NextResponse.json(
      {
        error: "Internal server error",
        message: "Failed to fetch testimonials from database",
      },
      { status: 500 }
    );
  }
}
