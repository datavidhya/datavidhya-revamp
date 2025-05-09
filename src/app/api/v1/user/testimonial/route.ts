// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
// import { z } from "zod";
// // import { sanitizeInput } from "@/utils/senitize";

// export const dynamic = "force-dynamic";

// const testimonialSchema = z.object({
//   name: z.string().min(3, "Name is required"),
//   profileImg: z.string().url("Invalid profile image url"),
//   userReview: z.string().min(10, "Review is required"),
//   linkedinUrl: z.string().url("Invalid linkedin url"),
//   starRating: z
//     .number()
//     .min(1, "Star rating is required")
//     .max(5, "Star rating must be between 1 and 5"),
// });

// const testimonialIdSchema = z.object({
//   id: z.string().uuid("Invalid testimonial ID"),
// });

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();

//     const validateResult = testimonialSchema.safeParse(body);

//     if (!validateResult.success) {
//       const errorMessages = validateResult.error.errors.map((error) => ({
//         field: error.path.join("."),
//         message: error.message,
//       }));

//       return NextResponse.json({
//         success: false,
//         message: "Validation failed",
//         errors: errorMessages,
//       });
//     }

//     const { name, profileImg, userReview, linkedinUrl, starRating } =
//       validateResult.data;

//     const saveTestimonial = await prisma.testimonial.create({
//       data: {
//         // sanitizeInput
//         name: (name),
//         profileImg,
//         // sanitizeInput
//         userReview:(userReview),
//         linkedinUrl,
//         starRating,
//       },
//     });

//     return NextResponse.json({
//       success: true,
//       message: "testimonial created successfully",
//       data: saveTestimonial,
//     });
//   } catch (error) {
//     console.error("Error creating testimonial:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to create project",
//         error:
//           error instanceof Error ? error.message : "Unknown error occurred",
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function GET() {
//   try {
//     const allTestimonials = await prisma.testimonial.findMany({
//       orderBy: {
//         name: "asc",
//       },
//     });

//     return NextResponse.json({
//       success: true,
//       message: "All testimonials fetched successfully",
//       data: allTestimonials,
//     });
//   } catch (error) {
//     console.error("Error fetching testimonials:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to fetch testimonial",
//         error:
//           error instanceof Error ? error.message : "Unknown error occurred",
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function DELETE(request: Request) {
//   try {
//     const { id } = await request.json();

//     const validateId = testimonialIdSchema.safeParse({ id });

//     if (!validateId.success) {
//       const errorMessages = validateId.error.errors.map((error) => ({
//         field: error.path.join("."),
//         message: error.message,
//       }));

//       return NextResponse.json({
//         success: false,
//         message: "Validation failed",
//         errors: errorMessages,
//       });
//     }

//     const existingTestimonial = await prisma.testimonial.findUnique({
//       where: { id },
//     });

//     if (!existingTestimonial) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Testimonial not found",
//         },
//         { status: 404 }
//       );
//     }
//     await prisma.testimonial.delete({
//       where: { id },
//     });

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Testimonial deleted successfully",
//         data: existingTestimonial,
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error deleting testimonial:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to delete testimonial",
//         error:
//           error instanceof Error ? error.message : "Unknown error occurred",
//       },
//       { status: 500 }
//     );
//   }
// }





import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";

export const dynamic = "force-dynamic";

const testimonialSchema = z.object({
  name: z.string().min(3, "Name is required"),
  profileImg: z.string().url("Invalid profile image url"),
  userReview: z.string().min(10, "Review is required"),
  linkedinUrl: z.string().url("Invalid linkedin url"),
  starRating: z
    .number()
    .min(1, "Star rating is required")
    .max(5, "Star rating must be between 1 and 5"),
});

const testimonialIdSchema = z.object({
  id: z.string().uuid("Invalid testimonial ID"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validateResult = testimonialSchema.safeParse(body);

    if (!validateResult.success) {
      const errorMessages = validateResult.error.errors.map((error) => ({
        field: error.path.join("."),
        message: error.message,
      }));

      return NextResponse.json({
        success: false,
        message: "Validation failed",
        errors: errorMessages,
      });
    }

    const { name, profileImg, userReview, linkedinUrl, starRating } =
      validateResult.data;

    const saveTestimonial = await prisma.testimonial.create({
      data: {
        name,
        profileImg,
        userReview,
        linkedinUrl,
        starRating,
      },
    });

    return NextResponse.json({
      success: true,
      message: "testimonial created successfully",
      data: saveTestimonial,
    });
  } catch (error) {
    console.error("Error creating testimonial:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create testimonial",
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const allTestimonials = await prisma.testimonial.findMany({
      orderBy: {
        name: "asc",
      },
    });

    return NextResponse.json({
      success: true,
      message: "All testimonials fetched successfully",
      data: allTestimonials,
    });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch testimonial",
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    const validateId = testimonialIdSchema.safeParse({ id });

    if (!validateId.success) {
      const errorMessages = validateId.error.errors.map((error) => ({
        field: error.path.join("."),
        message: error.message,
      }));

      return NextResponse.json({
        success: false,
        message: "Validation failed",
        errors: errorMessages,
      });
    }

    const existingTestimonial = await prisma.testimonial.findUnique({
      where: { id },
    });

    if (!existingTestimonial) {
      return NextResponse.json(
        {
          success: false,
          message: "Testimonial not found",
        },
        { status: 404 }
      );
    }
    await prisma.testimonial.delete({
      where: { id },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Testimonial deleted successfully",
        data: existingTestimonial,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete testimonial",
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}