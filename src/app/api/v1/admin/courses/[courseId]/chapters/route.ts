import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
const prisma = new PrismaClient();
// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function POST(
   req: Request,
   {params}: {params: {courseId: string}}
){
   const { courseId: courseSlug } = params;

   try {
      
      const {title, videoUrl} = await req.json();

      console.log("Course ID:", courseSlug);

      const courseOwner = await prisma.course.findUnique({
         where: { slug: courseSlug }
      });

      if (!courseOwner) {
         return new NextResponse("Course not found", { status: 404 });
      }

      const lastChapter = await prisma.chapter.findFirst({
         where: { courseId: courseOwner.id },
         orderBy: { position: "desc" }
      });

      const newPosition = lastChapter ? lastChapter.position + 1 : 1;

      const chapter = await prisma.chapter.create({
         data: {
            title,
            courseId: courseOwner.id,
            position: newPosition,
            videoUrl: videoUrl ?? ""
         }
      });

      return NextResponse.json(chapter);
   } catch (error) {
      console.log("[CHAPTERS]", error);
      return new NextResponse("Internal Error");
   }
}