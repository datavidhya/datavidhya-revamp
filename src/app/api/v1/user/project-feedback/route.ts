import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";

const projectFeedbackSchema = z.object({
  name: z.string().min(1, "Name is required"),
  profileImg: z.string().url("Invalid profile image URL"),
  projectImgUrl: z.string().url("Invalid project image URL"),
  userReview: z.string().min(1, "Review is required"),
  userProjectUrl: z.string().url("Invalid project URL"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validatedData = projectFeedbackSchema.parse(body);

    const feedback = await prisma.projectFeedback.create({
      data: validatedData,
    });

    return NextResponse.json(
      {
        message: "Project feedback created successfully",
        data: feedback,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: error.errors,
        },
        { status: 400 }
      );
    }

    console.error("Failed to create project feedback:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const feedbacks = await prisma.projectFeedback.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(
      {
        data: feedbacks,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to fetch project feedback:", error);
    return NextResponse.json(
      {
        message: "Internal server error",
        error,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        {
          error: "ID is required",
        },
        { status: 400 }
      );
    }

    await prisma.projectFeedback.delete({
      where: { id },
    });

    return NextResponse.json(
      {
        message: "Project feedback deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to delete project feedback:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}