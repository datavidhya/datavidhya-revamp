// import { NextApiRequest, NextApiResponse } from 'next';
// import formidable from 'formidable';
// import fs from 'fs';
// import path from 'path';
// import { z } from 'zod';
// import prisma from '@/lib/prisma';
// // Disable the default body parser to handle form data with files
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// // Define the testimonial schema with Zod
// const testimonialSchema = z.object({
//   username: z.string().min(2),
//   review: z.string().min(10),
//   stars: z.number().min(1).max(5),
//   position: z.string().min(2),
//   company: z.string().min(2),
// });

// // Helper function to parse form data
// const parseForm = (req: NextApiRequest): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
//   return new Promise((resolve, reject) => {
//     const form = new formidable.IncomingForm({
//       uploadDir: path.join(process.cwd(), 'public/uploads'),
//       keepExtensions: true,
//       maxFileSize: 5 * 1024 * 1024, // 5MB limit
//     });
    
//     // Ensure upload directory exists
//     const uploadDir = path.join(process.cwd(), 'public/uploads');
//     if (!fs.existsSync(uploadDir)) {
//       fs.mkdirSync(uploadDir, { recursive: true });
//     }
    
//     form.parse(req, (err, fields, files) => {
//       if (err) reject(err);
//       resolve({ fields, files });
//     });
//   });
// };

// // Handler for testimonial API
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   // GET - Fetch all testimonials
//   if (req.method === 'GET') {
//     try {
//       // This is where you would connect to your database
//       // For demonstration, we'll return mock data
//       // In a real app, replace this with actual database queries
      
//       // Example with database code (commented out):
//       const testimonials = await prisma.testimonial.findMany({
//         orderBy: { createdAt: 'desc' },
//       });
      
//       // Mock data for demonstration
//       // const testimonials = [
//       //   {
//       //     id: '1',
//       //     username: 'John Doe',
//       //     review: 'This product has completely transformed our business processes!',
//       //     stars: 5,
//       //     position: 'CTO',
//       //     company: 'Tech Innovations',
//       //     imageUrl: '/uploads/placeholder-1.jpg',
//       //     createdAt: new Date().toISOString(),
//       //   },
//       //   {
//       //     id: '2',
//       //     username: 'Jane Smith',
//       //     review: 'Excellent customer service and amazing features.',
//       //     stars: 4,
//       //     position: 'Marketing Director',
//       //     company: 'Creative Solutions',
//       //     createdAt: new Date().toISOString(),
//       //   },
//       // ];
      
//       return res.status(200).json(testimonials);
//     } catch (error) {
//       console.error('Error fetching testimonials:', error);
//       return res.status(500).json({ error: 'Failed to fetch testimonials' });
//     }
//   }
  
//   // POST - Create a new testimonial
//   else if (req.method === 'POST') {
//     try {
//       const { fields, files } = await parseForm(req);
      
//       // Parse the JSON string from the form data
//       const testimonialData = JSON.parse(fields.testimonialData as string);
      
//       // Validate the testimonial data
//       const validatedData = testimonialSchema.parse(testimonialData);
      
//       // Handle file upload if exists
//       let imageUrl = undefined;
//       const profileImage = files.profileImage as formidable.File;
      
//       if (profileImage && profileImage.filepath) {
//         // In a real app, you might want to process/resize the image here
//         // For this example, we'll just use the uploaded file path
//         const filename = path.basename(profileImage.filepath);
//         imageUrl = `/uploads/${filename}`;
//       }
      
//       // Create a new testimonial
//       // This is where you would save to your database
      
//       // Example with database code (commented out):
//       const newTestimonial = await prisma.testimonial.create({
//         data: {
//           ...validatedData,
//           imageUrl,
//           createdAt: new Date(),
//         },
//       });
      
//       // Mock response for demonstration
//       // const newTestimonial = {
//       //   id: Date.now().toString(),
//       //   ...validatedData,
//       //   imageUrl,
//       //   createdAt: new Date().toISOString(),
//       // };
      
//       return res.status(201).json(newTestimonial);
//     } catch (error) {
//       console.error('Error creating testimonial:', error);
      
//       // Clean up any uploaded files if validation fails
//       if (error instanceof z.ZodError) {
//         return res.status(400).json({ error: 'Invalid testimonial data', details: error.errors });
//       }
      
//       return res.status(500).json({ error: 'Failed to create testimonial' });
//     }
//   }
  
//   // DELETE - Remove a testimonial
//   else if (req.method === 'DELETE') {
//     try {
//       const { id } = req.query;
      
//       if (!id || typeof id !== 'string') {
//         return res.status(400).json({ error: 'Invalid testimonial ID' });
//       }
      
//       // This is where you would delete from your database
      
//       // Example with database code (commented out):
//       const testimonial = await prisma.testimonial.findUnique({ where: { id } });
//       if (!testimonial) {
//         return res.status(404).json({ error: 'Testimonial not found' });
//       }
      
//       // // Delete the associated image if exists
//       if (testimonial.imageUrl) {
//         const imagePath = path.join(process.cwd(), 'public', testimonial.imageUrl);
//         if (fs.existsSync(imagePath)) {
//           fs.unlinkSync(imagePath);
//         }
//       }
//       // 
//       // await prisma.testimonial.delete({ where: { id } });
      
//       // For demonstration, we'll just return success
//       return res.status(200).json({ message: 'Testimonial deleted successfully' });
//     } catch (error) {
//       console.error('Error deleting testimonial:', error);
//       return res.status(500).json({ error: 'Failed to delete testimonial' });
//     }
//   }
  
//   // Unsupported method
//   else {
//     res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
//     return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
//   }
// }