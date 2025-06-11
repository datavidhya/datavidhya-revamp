import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const courseId = parseInt(id, 10);

  if (isNaN(courseId)) {
    return NextResponse.json({ message: "Invalid course ID" }, { status: 400 });
  }

  try {
    await prisma.course.delete({
      where: { id: courseId },
    });

    return NextResponse.json(
      { message: "Course deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error deleting course:", error);

    if (error.code === "P2025") {
      return NextResponse.json(
        { message: "Course not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Failed to delete course" },
      { status: 500 }
    );
  }
}


export async function PATCH(
  req: Request,
  {params} : {params:Promise<{courseId: string}>}
){
  try {
    const {courseId} = await params

    const values = await req.json();

    console.log('Update the course with slug:', courseId)

    const course = await prisma.course.update({
      where:{
        slug: courseId,
      },
      data:{
        ...values,
      }
    });

    return NextResponse.json(course);
    
  } catch (error) {
    console.log("[COURSE_ID]", error);
    return new NextResponse("Internal Error",{status: 500})
  }
}