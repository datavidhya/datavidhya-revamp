import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().url("Must be a valid URL"),
  topic: z.string().min(1, "Topic is required"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validationResult = projectSchema.safeParse(body);

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

    const existingProject = await prisma.project.findUnique({
      where: { slug: data.slug },
    });

    if (existingProject) {
      return NextResponse.json(
        { message: "A project with this slug already exists" },
        { status: 409 }
      );
    }

    const project = await prisma.project.create({
      data: {
        title: data.title,
        slug: data.slug,
        description: data.description,
        topic: data.topic,
        image: data.image,
      },
    });

    return NextResponse.json(
      {
        message: "Project created successfully",
        project: {
          id: project.id,
          title: project.title,
          slug: project.slug,
          createdAt: project.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating project:", error);

    if (error instanceof Error) {
      if ("code" in error && error.code === "P2002") {
        return NextResponse.json(
          { message: "A project with this slug already exists" },
          { status: 409 }
        );
      }
    }

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
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
      take: 20,
    });

    return NextResponse.json({ projects });
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
