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
  const projectId = parseInt(id, 10);

  if (isNaN(projectId)) {
    return NextResponse.json({ message: "Invalid project ID" }, { status: 400 });
  }

  try {
    await prisma.project.delete({
      where: { id: projectId },
    });

    return NextResponse.json(
      { message: "project deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error deleting project:", error);

    if (error.code === "P2025") {
      return NextResponse.json(
        { message: "project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Failed to delete project" },
      { status: 500 }
    );
  }
}
