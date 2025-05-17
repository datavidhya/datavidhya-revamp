
// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
// import { z } from "zod";
// import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
// import { v4 as uuidv4 } from "uuid";

// export const dynamic = "force-dynamic";
// const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
// const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
// const region = process.env.AWS_REGION;
// if (!accessKeyId || !secretAccessKey || !region) {
//   throw new Error("Missing AWS credentials or region");
// }
// // S3 client setup
// const s3Client = new S3Client({
//   region,
//   credentials: {
//     accessKeyId,
//     secretAccessKey,
//   },
// });

// const testimonialSchema = z.object({
//   name: z.string().min(3, "Name is required"),
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

// // Simple function to upload file to S3
// async function uploadToS3(file: any, fileName: any) {
//   const fileBuffer = Buffer.from(await file.arrayBuffer());

//   const params = {
//     Bucket: process.env.AWS_S3_BUCKET_NAME,
//     Key: fileName,
//     Body: fileBuffer,
//     ContentType: file.type,
//   };

//   await s3Client.send(new PutObjectCommand(params));

//   // Return the S3 URL
//   return `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
// }

// export async function POST(request: any) {
//   try {
//     // Parse incoming form data
//     const formData = await request.formData();

//     // Extract fields
//     const name = formData.get("name");
//     const userReview = formData.get("userReview");
//     const linkedinUrl = formData.get("linkedinUrl");
//     const starRating = Number(formData.get("starRating"));
//     const profileImg = formData.get("profileImg");

//     // Validate text data
//     const validateResult = testimonialSchema.safeParse({
//       name,
//       userReview,
//       linkedinUrl,
//       starRating,
//     });

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

//     // Check if image is provided
//     if (!profileImg || profileImg.size === 0) {
//       return NextResponse.json({
//         success: false,
//         message: "Profile image is required",
//       });
//     }

//     // Validate file type
//     if (!profileImg.type.startsWith("image/")) {
//       return NextResponse.json({
//         success: false,
//         message: "Only image files are allowed",
//       });
//     }

//     // Generate a unique filename
//     const fileExtension = profileImg.name.split(".").pop();
//     const fileName = `testimonials/${uuidv4()}.${fileExtension}`;

//     // Upload to S3
//     const imageUrl = await uploadToS3(profileImg, fileName);

//     // Save testimonial with S3 image URL
//     const saveTestimonial = await prisma.testimonial.create({
//       data: {
//         name,
//         profileImg: imageUrl,
//         userReview,
//         linkedinUrl,
//       },
//     });

//     return NextResponse.json({
//       success: true,
//       message: "Testimonial created successfully",
//       data: saveTestimonial,
//     });
//   } catch (error) {
//     console.error("Error creating testimonial:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to create testimonial",
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

// export async function DELETE(request: any) {
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
