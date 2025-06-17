// import { PrismaClient } from "@prisma/client";
// import { NextResponse } from "next/server";

// // const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
// const prisma = new PrismaClient();
// // if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// export async function POST(
//    req: Request,
//    {params}: {params: Promise<{courseId: string}>}
// ){
//    const { courseId: courseSlug } = await params;

//    try {

//       const {title, videoUrl} = await req.json();

//       console.log("Course ID:", courseSlug);

//       const courseOwner = await prisma.course.findUnique({
//          where: { slug: courseSlug }
//       });

//       if (!courseOwner) {
//          return new NextResponse("Course not found", { status: 404 });
//       }

//       const lastChapter = await prisma.chapter.findFirst({
//          where: { courseId: courseOwner.id },
//          orderBy: { position: "desc" }
//       });

//       const newPosition = lastChapter ? lastChapter.position + 1 : 1;

//       const chapter = await prisma.chapter.create({
//          data: {
//             title,
//             courseId: courseOwner.id,
//             position: newPosition,
//             videoUrl: videoUrl ?? ""
//          }
//       });

//       return NextResponse.json(chapter);
//    } catch (error) {
//       console.log("[CHAPTERS]", error);
//       return new NextResponse("Internal Error");
//    }
// }

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ courseId: string }> }
) {
  try {
    const { courseId: courseSlug } = await params;

    const course = await prisma.course.findUnique({
      where: { slug: courseSlug }
    });

    if (!course) {
      return NextResponse.json({ message: "Course not found" }, { status: 404 });
    }

    const chapters = await prisma.chapter.findMany({
      where: { courseId: course.id },
      orderBy: { position: "asc" },
      select: {
        id: true,
        title: true,
        position: true,
        videoUrl: true,
        isPublished: true,
        isFree: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({
      course: {
        id: course.id,
        title: course.title,
        slug: course.slug,
      },
      chapters,
      totalChapters: chapters.length,
    });
  } catch (error) {
    console.error("Error fetching chapters:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ courseId: string }> }
) {
  try {
    const { courseId: courseSlug } = await params;
    const { title, videoUrl } = await req.json();

    const course = await prisma.course.findUnique({
      where: { slug: courseSlug }
    });

    if (!course) {
      return new NextResponse("Course not found", { status: 404 });
    }

    const lastChapter = await prisma.chapter.findFirst({
      where: { courseId: course.id },
      orderBy: { position: "desc" },
    });

    const newPosition = lastChapter ? lastChapter.position + 1 : 1;

    const chapter = await prisma.chapter.create({
      data: {
        title,
        courseId: course.id,
        position: newPosition,
        videoUrl: videoUrl ?? "",
      },
    });

    return NextResponse.json(chapter);
  } catch (error) {
    console.error("[CHAPTERS]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
