import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;


export async function PATCH(
   req: Request,
   {params}: {params:Promise<{courseId: string; chapterId: string}>}
){
   try {
      const newParams = await params;
      const { courseId: courseSlug, chapterId } = newParams;

      const values = await req.json();

      const ownCourse = await prisma.course.findUnique({
         where:{
            slug: courseSlug,
         }
      })

      const chapter = await prisma.chapter.update({
         where:{
            id: chapterId,
            course: {
               slug: courseSlug,
            },
         },
         data: {
            ...values
         },
      });


      return NextResponse.json(chapter)


   } catch (error) {
      console.log("[CHAPTER_ID]", error);
      return new NextResponse("Internal Error", {status:500})
   }
}