import CourseDetailPage from "@/components/revamp/CourseSection/courseDetails";
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
console.log(course)
  if (!course) {
    return redirect("/");
  }
  return (
    <div>
      <CourseDetailPage courseInfo={course} />
    </div>
  );
};

export default CourseIdPage;
