import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get all purchased data (GET)
export async function GET() {
  try {
    console.log('GET request received');
    const purchases = await prisma.purchase.findMany({
      orderBy: { date: "desc" },
    });
    
    console.log('Fetched purchases:', purchases.length);
    return NextResponse.json({ data: purchases }, { status: 200 });
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { message: "Failed to fetch data", error: error instanceof Error ? error.message : 'Unknown error' }, 
      { status: 500 }
    );
  }
}

// Add recently purchased data (POST)
export async function POST(req: NextRequest) {
  try {
    console.log('POST request received');
    
    // Parse request body
    let body;
    try {
      body = await req.json();
      console.log('Parsed body:', body);
    } catch (parseError) {
      console.error('Failed to parse request body:', parseError);
      return NextResponse.json(
        { message: "Invalid JSON in request body" }, 
        { status: 400 }
      );
    }

    // If "id" exists → treat as delete request
    if (body.id) {
      console.log('Delete request for ID:', body.id);
      
      try {
        await prisma.purchase.delete({ 
          where: { id: body.id } 
        });
        console.log('Successfully deleted purchase:', body.id);
        return NextResponse.json({ message: "Deleted successfully" }, { status: 200 });
      } catch (deleteError) {
        console.error('Delete error:', deleteError);
        return NextResponse.json(
          { message: "Failed to delete purchase" }, 
          { status: 500 }
        );
      }
    }

    // Create new purchase
    const { studentName, courseName, date } = body;
    console.log('Create request data:', { studentName, courseName, date });

    // Validate required fields
    if (!studentName || !courseName || !date) {
      console.error('Missing required fields:', { studentName: !!studentName, courseName: !!courseName, date: !!date });
      return NextResponse.json(
        { message: "Missing required fields: studentName, courseName, and date are required" }, 
        { status: 400 }
      );
    }

    // Validate date format
    let parsedDate;
    try {
      parsedDate = new Date(date);
      if (isNaN(parsedDate.getTime())) {
        throw new Error('Invalid date');
      }
    } catch (dateError) {
      console.error('Date parsing error:', dateError);
      return NextResponse.json(
        { message: "Invalid date format" }, 
        { status: 400 }
      );
    }

    try {
      const newPurchase = await prisma.purchase.create({
        data: {
          studentName: studentName.trim(),
          courseName: courseName.trim(),
          date: parsedDate,
        },
      });

      console.log('Successfully created purchase:', newPurchase);
      return NextResponse.json({ data: newPurchase }, { status: 201 });
    } catch (createError) {
      console.error('Database create error:', createError);
      return NextResponse.json(
        { message: "Failed to create purchase in database" }, 
        { status: 500 }
      );
    }

  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json(
      { message: "Internal server error", error: error instanceof Error ? error.message : 'Unknown error' }, 
      { status: 500 }
    );
  }
}