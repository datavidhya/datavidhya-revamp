import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const courseDetailSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  content2: z.string().optional(),
  content3: z.string().optional(),
  content4: z.string().optional(),
  content5: z.string().optional(),
  content6: z.string().optional(),
  time: z.string().min(1, "Time is required"),
  time2: z.string().optional(),
  time3: z.string().optional(),
  time4: z.string().optional(),
  time5: z.string().optional(),
  time6: z.string().optional(),
  mins: z.number().int().min(1, "Minutes must be at least 1"),
  Sections: z.number().int().min(1, "Sections must be at least 1"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validationResult = courseDetailSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { message: "Validation failed", errors: validationResult.error.errors },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    const newDetail = await prisma.courseDetail.create({
      data: {
        title: data.title,
        content: data.content,
        content2: data.content2,
        content3: data.content3,
        content4: data.content4,
        content5: data.content5,
        content6: data.content6,
        time: data.time,
        time2: data.time2,
        time3: data.time3,
        time4: data.time4,
        time5: data.time5,
        time6: data.time6,
        mins: data.mins,
        Sections: data.Sections,
      },
    });

    return NextResponse.json(
      {
        message: "Course detail created successfully",
        courseDetail: {
          id: newDetail.id,
          title: newDetail.title,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating course detail:", error);
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
    const courseDetails = await prisma.courseDetail.findMany({
        // orderBy: { createdAt: "desc" },
      take: 50,
    });

    return NextResponse.json({ courseDetails });
  } catch (error) {
    console.error("Error fetching course details:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
