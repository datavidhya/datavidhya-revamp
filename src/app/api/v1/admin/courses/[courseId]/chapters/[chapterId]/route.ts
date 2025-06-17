// import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";

// const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
// const prisma = globalForPrisma.prisma ?? new PrismaClient();
// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;


// export async function PATCH(
//    req: Request,
//    {params}: {params:Promise<{courseId: string; chapterId: string}>}
// ){
//    try {
//       const newParams = await params;
//       const { courseId: courseSlug, chapterId } = newParams;

//       const values = await req.json();

//       const ownCourse = await prisma.course.findUnique({
//          where:{
//             slug: courseSlug,
//          }
//       })

//       const chapter = await prisma.chapter.update({
//          where:{
//             id: chapterId,
//             course: {
//                slug: courseSlug,
//             },
//          },
//          data: {
//             ...values
//          },
//       });


//       return NextResponse.json(chapter)


//    } catch (error) {
//       console.log("[CHAPTER_ID]", error);
//       return new NextResponse("Internal Error", {status:500})
//    }
// }

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ courseId: string; chapterId: string }> }
) {
  try {
    const newParams = await params;
    const { courseId: courseSlug, chapterId } = newParams;

    const values = await req.json();

    const ownCourse = await prisma.course.findUnique({
      where: {
        slug: courseSlug,
      },
    });

    const chapter = await prisma.chapter.update({
      where: {
        id: chapterId,
        course: {
          slug: courseSlug,
        },
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(chapter);
  } catch (error) {
    console.log("[CHAPTER_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ courseId: string; chapterId: string }> }
) {
  try {
    const resolvedParams = await params;
    const { courseId: courseSlug, chapterId } = resolvedParams;

    const chapter = await prisma.chapter.findFirst({
      where: {
        id: chapterId,
        course: {
          slug: courseSlug,
        },
      },
      include: {
        course: true,
      },
    });

    if (!chapter) {
      return new NextResponse("Chapter not found", { status: 404 });
    }

    return NextResponse.json(chapter);
  } catch (error) {
    console.error("[CHAPTER_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}