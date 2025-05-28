// app/api/v1/admin/courses/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const courseId = parseInt(params.id, 10);

  if (isNaN(courseId)) {
    return NextResponse.json({ message: 'Invalid course ID' }, { status: 400 });
  }

  try {
    await prisma.course.delete({
      where: { id: courseId },
    });

    return NextResponse.json({ message: 'Course deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting course:', error);
    return NextResponse.json({ message: 'Failed to delete course' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
