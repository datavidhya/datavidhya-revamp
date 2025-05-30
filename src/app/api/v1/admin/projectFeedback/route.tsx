import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const projectFeedbackSchema = z.object({
  name: z.string().min(1, "name is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().url("Must be a valid URL"),
  projectImage: z.string().url("Must be a valid URL"),
  linkedInUrl: z.string().url("Must be a valid URL"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validationResult = projectFeedbackSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: validationResult.error.errors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    const projectFeedback = await prisma.projectFeedback.create({
      data: {
        name: data.name,
        linkedInUrl: data.linkedInUrl,
        description: data.description,
        projectImage: data.projectImage,
        image: data.image,
      },
    });

    return NextResponse.json(
      {
        message: "projectFeedback created successfully",
        projectFeedback: {
          id: projectFeedback.id,
          name: projectFeedback.name,
          createdAt: projectFeedback.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating projectFeedback:", error);

    // if (error instanceof Error) {
    //   if ("code" in error && error.code === "P2002") {
    //     return NextResponse.json(
    //       { message: "A project Feedback with this slug already exists" },
    //       { status: 409 }
    //     );
    //   }
    // }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET() {
  try {
    const projectFeedbacks = await prisma.projectFeedback.findMany({
      orderBy: { createdAt: "desc" },
      take: 20,
    });

    return NextResponse.json({ projectFeedbacks });
  } catch (error) {
    console.error("Error fetching projectFeedbacks:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
