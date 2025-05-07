// // "use client";
// // import React, { useState } from "react";
// // import { useForm } from "react-hook-form";

// // const TestimonyForm = ({ index, onSubmitToParent }: any) => {
// //   const { register, handleSubmit } = useForm();
// //   const onSubmit = (data: any) => {
// //     onSubmitToParent(data); // Send data to parent
// //   };

// //   return (
// //     <form
// //       className="h-auto w-auto p-4 px-12 text-black flex flex-col items-center gap-2 bg-white/30 border m-1 rounded-xl"
// //       onSubmit={handleSubmit(onSubmit)}
// //     >
// //       <h5 className="text-lg">Form {index + 1}</h5>
// //       <input
// //         className="px-3 py-2 bg-white h-12 w-64 rounded-lg"
// //         {...register("name")}
// //         type="text"
// //         placeholder="Name"
// //       />
// //       {/* <input
// //         className="px-3 py-2 bg-white h-12 w-64 rounded-lg"
// //         {...register("lastname")}
// //         type="text"
// //         placeholder="Surname"
// //       /> */}
// //       <input
// //         className="px-3 py-2 bg-white h-12 w-64 rounded-lg"
// //         {...register("company")}
// //         type="text"
// //         placeholder="Company"
// //       />
// //       <input
// //         className="px-3 py-2 bg-white h-12 w-64 rounded-lg"
// //         {...register("position")}
// //         type="text"
// //         placeholder="Position"
// //       />
// //       <input
// //         className="px-3 py-2 bg-white h-12 w-64 rounded-lg"
// //         {...register("LinkedInLink")}
// //         type="text"
// //         placeholder="LinkedIn Profile Link"
// //       />
// //       <input
// //         {...register("profileImage")}
// //         type="file"
// //         placeholder="profileImg"
// //         className="px-3 py-2 bg-white h-12 w-64 rounded-lg"
// //       />
// //       <input
// //         {...register("starRating")}
// //         type="text"
// //         placeholder="Star Rating"
// //         className="px-3 py-2 bg-white h-12 w-64 rounded-lg"
// //       />
// //       <textarea
// //         name="userReview"
// //         id=""
// //         placeholder="User Review"
// //         className="px-3 py-2 bg-white h-24 w-64 rounded-lg"
// //       ></textarea>{" "}
// //       <input
// //         className="px-3 py-2 bg-blue-600 text-white h-12 w-24 rounded-lg"
// //         type="submit"
// //         // onChange={() => console.log(user)}
// //       />
// //       <button
// //         className="px-3 py-2 bg-blue-800 text-white h-12 w-24 rounded-lg"
// //         // type="submit"
// //         // onClick={() =>
// //         //   // setUser({
// //         //   //   name: "",
// //         //   //   surname: "",
// //         //   //   company: "",
// //         //   //   position: "",
// //         //   //   image: "",
// //         //   // })
// //         // }
// //       />
// //     </form>
// //   );
// // };

// // export default TestimonyForm;
// "use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";

// // Schema definition matching the API schema
// const testimonialSchema = z.object({
//   name: z.string().min(3, "Name is required (minimum 3 characters)"),
//   profileImg: z.string().url("Invalid profile image URL"),
//   userReview: z.string().min(10, "Review is required (minimum 10 characters)"),
//   linkedinUrl: z.string().url("Invalid LinkedIn URL"),
//   starRating: z
//     .number()
//     .min(1, "Star rating is required")
//     .max(5, "Star rating must be between 1 and 5"),
// });

// // Type for our form values
// type TestimonialFormValues = z.infer<typeof testimonialSchema>;

// export default function TestimonialForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<{
//     success: boolean;
//     message: string;
//   } | null>(null);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<TestimonialFormValues>({
//     resolver: zodResolver(testimonialSchema),
//     defaultValues: {
//       name: "",
//       profileImg: "",
//       userReview: "",
//       linkedinUrl: "",
//       starRating: 5,
//     },
//   });

//   const onSubmit = async (data: TestimonialFormValues) => {
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       const response = await fetch("/api/v1/user/testimonial/route.ts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();

//       if (result.success) {
//         setSubmitStatus({
//           success: true,
//           message: "Testimonial added successfully!",
//         });
//         reset(); // Reset form on success
//       } else {
//         setSubmitStatus({
//           success: false,
//           message: result.message || "Failed to add testimonial",
//         });
//       }
//     } catch (error) {
//       setSubmitStatus({
//         success: false,
//         message: "An error occurred while submitting the form",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md text-black">
//       <h1 className="text-2xl font-bold mb-6">Add New Testimonial</h1>

//       {submitStatus && (
//         <div
//           className={`p-4 mb-6 rounded-md ${
//             submitStatus.success
//               ? "bg-green-100 text-green-800"
//               : "bg-red-100 text-red-800"
//           }`}
//         >
//           {submitStatus.message}
//         </div>
//       )}

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//         {/* Name Input */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Client Name
//           </label>
//           <input
//             {...register("name")}
//             type="text"
//             className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//             placeholder="John Doe"
//           />
//           {errors.name && (
//             <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
//           )}
//         </div>

//         {/* Profile Image URL */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Profile Image URL
//           </label>
//           <input
//             {...register("profileImg")}
//             type="url"
//             className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//             placeholder="https://example.com/image.jpg"
//           />
//           {errors.profileImg && (
//             <p className="mt-1 text-sm text-red-600">
//               {errors.profileImg.message}
//             </p>
//           )}
//         </div>

//         {/* User Review */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Testimonial Review
//           </label>
//           <textarea
//             {...register("userReview")}
//             rows={4}
//             className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//             placeholder="Write the client's review here..."
//           ></textarea>
//           {errors.userReview && (
//             <p className="mt-1 text-sm text-red-600">
//               {errors.userReview.message}
//             </p>
//           )}
//         </div>

//         {/* LinkedIn URL */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             LinkedIn URL
//           </label>
//           <input
//             {...register("linkedinUrl")}
//             type="url"
//             className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//             placeholder="https://linkedin.com/in/username"
//           />
//           {errors.linkedinUrl && (
//             <p className="mt-1 text-sm text-red-600">
//               {errors.linkedinUrl.message}
//             </p>
//           )}
//         </div>

//         {/* Star Rating */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Star Rating (1-5)
//           </label>
//           <input
//             {...register("starRating", { valueAsNumber: true })}
//             type="number"
//             min="1"
//             max="5"
//             className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//           />
//           {errors.starRating && (
//             <p className="mt-1 text-sm text-red-600">
//               {errors.starRating.message}
//             </p>
//           )}
//         </div>

//         {/* Submit Button */}
//         <div>
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition disabled:bg-blue-300"
//           >
//             {isSubmitting ? "Submitting..." : "Add Testimonial"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Schema definition matching the API schema
const testimonialSchema = z.object({
  name: z.string().min(3, "Name is required (minimum 3 characters)"),
  profileImg: z.string().url("Invalid profile image URL"),
  userReview: z.string().min(10, "Review is required (minimum 10 characters)"),
  linkedinUrl: z.string().url("Invalid LinkedIn URL"),
  starRating: z
    .number()
    .min(1, "Star rating is required")
    .max(5, "Star rating must be between 1 and 5"),
});

// Type for our form values
type TestimonialFormValues = z.infer<typeof testimonialSchema>;

type TestimonialFormProps = {
  onSuccess?: () => void;
};

export default function TestimonialForm({ onSuccess }: TestimonialFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TestimonialFormValues>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      name: "",
      profileImg: "",
      userReview: "",
      linkedinUrl: "",
      starRating: 5,
    },
  });

  const onSubmit = async (data: TestimonialFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/v1/user/testimonial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          success: true,
          message: "Testimonial added successfully!",
        });
        reset(); // Reset form on success

        // Call the onSuccess callback if provided
        if (onSuccess) {
          onSuccess();
        }
      } else {
        setSubmitStatus({
          success: false,
          message: result.message || "Failed to add testimonial",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "An error occurred while submitting the form",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md text-black border border-neutral-500">
      <h1 className="text-2xl font-bold mb-6">Add New Testimonial</h1>

      {submitStatus && (
        <div
          className={`p-4 mb-6 rounded-md ${
            submitStatus.success
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            User Name
          </label>
          <input
            {...register("name")}
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="User Name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Profile Image URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Profile Image URL
          </label>
          <input
            {...register("profileImg")}
            type="url"
            className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="https://example.com/image.jpg"
          />
          {errors.profileImg && (
            <p className="mt-1 text-sm text-red-600">
              {errors.profileImg.message}
            </p>
          )}
        </div>

        {/* User Review */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Testimonial Review
          </label>
          <textarea
            {...register("userReview")}
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Client's review here..."
          ></textarea>
          {errors.userReview && (
            <p className="mt-1 text-sm text-red-600">
              {errors.userReview.message}
            </p>
          )}
        </div>

        {/* LinkedIn URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            LinkedIn URL
          </label>
          <input
            {...register("linkedinUrl")}
            type="url"
            className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="https://linkedin.com/in/username"
          />
          {errors.linkedinUrl && (
            <p className="mt-1 text-sm text-red-600">
              {errors.linkedinUrl.message}
            </p>
          )}
        </div>

        {/* Star Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Star Rating (1-5)
          </label>
          <input
            {...register("starRating", { valueAsNumber: true })}
            type="number"
            min="1"
            max="5"
            className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.starRating && (
            <p className="mt-1 text-sm text-red-600">
              {errors.starRating.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md transition disabled:bg-blue-300"
          >
            {isSubmitting ? "Submitting..." : "Add Testimonial"}
          </button>
        </div>
      </form>
    </div>
  );
}
