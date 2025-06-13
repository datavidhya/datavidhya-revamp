import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();


const CourseIdPage = async ({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) => {
  const { courseId } = await params;
  const course = await prisma.course.findUnique({
    where: {
      slug: courseId,
    },
  });

  if (!course) {
    return redirect("/");
  }
  return <div>CourseId: {courseId}</div>;
};

export default CourseIdPage;
