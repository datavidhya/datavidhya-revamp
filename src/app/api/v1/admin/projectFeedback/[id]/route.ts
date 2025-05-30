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
  const projectFeedbackId = parseInt(id, 10);

  if (isNaN(projectFeedbackId)) {
    return NextResponse.json({ message: "Invalid Project Feedback ID" }, { status: 400 });
  }

  try {
    await prisma.projectFeedback.delete({
      where: { id: projectFeedbackId },
    });

    return NextResponse.json(
      { message: "Project Feedback deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error deleting project Feedback:", error);

    if (error.code === "P2025") {
      return NextResponse.json(
        { message: "project Feedback not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Failed to delete projectFeedback" },
      { status: 500 }
    );
  }
}
