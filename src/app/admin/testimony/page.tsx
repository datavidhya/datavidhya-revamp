// // "use client";
// // import React, { useState } from "react";
// // import { useForm } from "react-hook-form";
// // import TestimonyForm from "./testimonyForm";
// // const page = () => {
// //   const [form, setForm] = useState([0]);
// //   const handleAddForm = () => {
// //     setForm((prev) => [...prev, prev.length]);
// //   };
// //   const handleRemoveForm = () => {
// //     setForm((prev) => prev.slice(0, -1));
// //   };
// //   const { register, handleSubmit } = useForm();
// //   const [user, setUser] = useState({
// //     name: "",
// //     surname: "",
// //     company: "",
// //     position: "",
// //     image: "",
// //   });
// //   const handleFormData = async (user: any) => {
// //     console.log("Received from child:", user);
// //   };
// //   // try {
// //   //   const res = await axios.post('/api/submit', formData); // Update with your API endpoint
// //   //   console.log("Data saved:", res.data);
// //   // } catch (error) {
// //   //   console.error("Error uploading data:", error);
// //   // }

// //   // const [user, setUser] = useState({
// //   //   name: "",
// //   //   // surname: "",
// //   //   company: "",
// //   //   position: "",
// //   //   image: "",
// //   // });
// //   const submitFunction = async (e: any) => {
// //     e.preventDefault();

// //     const res = await fetch("api/user/testimonial", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify(form),
// //     });

// //     if (res.ok) {
// //       alert("Testimonial added!");
// //     }
// //   };
// //   // setForm({ name: "", company: "", position: "" });};
// //   return (
// //     <div className="bg-zinc-300 h-screen w-full flex flex-col items-center p-4">
// //       <div className=" h-auto w-full p-4 flex flex-col items-center gap-4">
// //         <h1 className="text-5xl text-black font-bold">Testimony</h1>
// //         <div className="flex flex-wrap">
// //           {form.map((formId, index) => (
// //             <TestimonyForm
// //               key={formId}
// //               index={index}
// //               onSubmi
// //               onSubmitToParent={handleFormData}
// //             />
// //           ))}
// //         </div>
// //         <button
// //           onClick={handleAddForm}
// //           className="px-3 py-2 bg-blue-600 text-white h-12 w-28 rounded-lg"
// //         >
// //           Add another
// //         </button>
// //         <button
// //           onClick={handleRemoveForm}
// //           className="px-3 py-2 bg-blue-600 text-white h-12 w-28 rounded-lg"
// //         >
// //           Remove a form
// //         </button>
// //         {/* <button
// //             onClick={submitFunction}
// //             className="px-3 py-2 bg-blue-600 text-white h-12 w-28 rounded-lg"
// //           >
// //             submit
// //           </button> */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default page;
// "use client";

// import { useState, useEffect } from "react";
// import TestimonialForm from "./TestimonialForm";

// type Testimonial = {
//   id: string;
//   name: string;
//   profileImg: string;
//   userReview: string;
//   linkedinUrl: string;
//   starRating: number;
//   createdAt?: string;
//   updatedAt?: string;
// };

// export default function TestimonialManagement() {
//   const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [deleteStatus, setDeleteStatus] = useState<{
//     id: string | null;
//     loading: boolean;
//     error: string | null;
//   }>({
//     id: null,
//     loading: false,
//     error: null,
//   });

//   // Fetch all testimonials
//   const fetchTestimonials = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch("/api/v1/user/testimonial/route.ts");
//       const result = await response.json();

//       if (result.success) {
//         setTestimonials(result.data);
//       } else {
//         setError(result.message || "Failed to fetch testimonials");
//       }
//     } catch (err) {
//       setError("An error occurred while fetching testimonials");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Delete a testimonial
//   const deleteTestimonial = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this testimonial?")) {
//       return;
//     }

//     setDeleteStatus({
//       id,
//       loading: true,
//       error: null,
//     });

//     try {
//       const response = await fetch("/api/v1/user/testimonial/route.ts", {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ id }),
//       });

//       const result = await response.json();

//       if (result.success) {
//         // Remove deleted testimonial from state
//         setTestimonials((prev) => prev.filter((t) => t.id !== id));
//       } else {
//         setDeleteStatus({
//           id,
//           loading: false,
//           error: result.message || "Failed to delete testimonial",
//         });
//       }
//     } catch (err) {
//       setDeleteStatus({
//         id,
//         loading: false,
//         error: "An error occurred while deleting the testimonial",
//       });
//     } finally {
//       setTimeout(() => {
//         setDeleteStatus({
//           id: null,
//           loading: false,
//           error: null,
//         });
//       }, 3000);
//     }
//   };

//   // Fetch testimonials on component mount
//   useEffect(() => {
//     fetchTestimonials();
//   }, []);

//   // Star rating display helper
//   const renderStars = (rating: number) => {
//     return "★".repeat(rating) + "☆".repeat(5 - rating);
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8 text-black">
//       <h1 className="text-3xl font-bold mb-8">Testimonial Management</h1>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-1">
//           <TestimonialForm />
//         </div>

//         {/* Testimonials List Section */}
//         <div className="lg:col-span-2">
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-xl font-bold">Existing Testimonials</h2>
//               <button
//                 onClick={fetchTestimonials}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//               >
//                 Refresh
//               </button>
//             </div>

//             {loading ? (
//               <div className="text-center py-8">Loading testimonials...</div>
//             ) : error ? (
//               <div className="text-center py-8 text-red-600">{error}</div>
//             ) : testimonials.length === 0 ? (
//               <div className="text-center py-8 text-gray-500">
//                 No testimonials found. Add your first one!
//               </div>
//             ) : (
//               <div className="space-y-6">
//                 {testimonials.map((testimonial) => (
//                   <div
//                     key={testimonial.id}
//                     className="border rounded-lg p-4 hover:bg-gray-50"
//                   >
//                     <div className="flex justify-between items-start">
//                       <div className="flex items-center gap-4">
//                         <img
//                           src={testimonial.profileImg}
//                           alt={testimonial.name}
//                           className="w-12 h-12 rounded-full object-cover"
//                           onError={(e) => {
//                             // Set default image if profile image fails to load
//                             (e.target as HTMLImageElement).src =
//                               "https://via.placeholder.com/50";
//                           }}
//                         />
//                         <div>
//                           <h3 className="font-medium">{testimonial.name}</h3>
//                           <div className="text-yellow-500">
//                             {renderStars(testimonial.starRating)}
//                           </div>
//                         </div>
//                       </div>
//                       <button
//                         onClick={() => deleteTestimonial(testimonial.id)}
//                         disabled={
//                           deleteStatus.loading &&
//                           deleteStatus.id === testimonial.id
//                         }
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         {deleteStatus.loading &&
//                         deleteStatus.id === testimonial.id
//                           ? "Deleting..."
//                           : "Delete"}
//                       </button>
//                     </div>
//                     <p className="mt-3 text-gray-700">
//                       {testimonial.userReview}
//                     </p>
//                     <a
//                       href={testimonial.linkedinUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-600 hover:underline text-sm mt-2 inline-block"
//                     >
//                       LinkedIn Profile
//                     </a>

//                     {deleteStatus.error &&
//                       deleteStatus.id === testimonial.id && (
//                         <p className="mt-2 text-sm text-red-600">
//                           {deleteStatus.error}
//                         </p>
//                       )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import TestimonialForm from "../../../components/revamp/Testimony/TestimonialForm";

type Testimonial = {
  id: string;
  name: string;
  profileImg: string;
  userReview: string;
  linkedinUrl: string;
  starRating: number;
  createdAt?: string;
  updatedAt?: string;
};

export default function TestimonialManagement() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteStatus, setDeleteStatus] = useState<{
    id: string | null;
    loading: boolean;
    error: string | null;
  }>({
    id: null,
    loading: false,
    error: null,
  });

  // Fetch all testimonials
  const fetchTestimonials = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/v1/user/testimonial");
      const result = await response.json();

      if (result.success) {
        setTestimonials(result.data);
      } else {
        setError(result.message || "Failed to fetch testimonials");
      }
    } catch (err) {
      setError("An error occurred while fetching testimonials");
    } finally {
      setLoading(false);
    }
  };

  // Delete a testimonial
  const deleteTestimonial = async (id: string) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) {
      return;
    }

    setDeleteStatus({
      id,
      loading: true,
      error: null,
    });

    try {
      const response = await fetch("/api/v1/user/testimonial", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const result = await response.json();

      if (result.success) {
        // Remove deleted testimonial from state
        setTestimonials((prev) => prev.filter((t) => t.id !== id));
      } else {
        setDeleteStatus({
          id,
          loading: false,
          error: result.message || "Failed to delete testimonial",
        });
      }
    } catch (err) {
      setDeleteStatus({
        id,
        loading: false,
        error: "An error occurred while deleting the testimonial",
      });
    } finally {
      setTimeout(() => {
        setDeleteStatus({
          id: null,
          loading: false,
          error: null,
        });
      }, 3000);
    }
  };

  // Fetch testimonials on component mount
  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Star rating display helper
  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-black">
      <h1 className="text-5xl font-bold mb-12 text-center my-4 ">
        Testimonial Management
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <TestimonialForm onSuccess={fetchTestimonials} />
        </div>

        {/* Testimonials List Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 h-full border border-neutral-600">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Existing Testimonials</h2>
              <button
                onClick={fetchTestimonials}
                className=" text-white px-4 py-2 rounded-md bg-blue-600"
              >
                Refresh
              </button>
            </div>

            {loading ? (
              <div className="text-center py-8">Loading testimonials...</div>
            ) : error ? (
              <div className="text-center py-8 text-red-600">{error}</div>
            ) : testimonials.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No testimonials found. Add your first one!
              </div>
            ) : (
              <div className="space-y-6">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="border rounded-lg p-4 hover:bg-gray-50"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.profileImg}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                          onError={(e) => {
                            // Set default image if profile image fails to load
                            (e.target as HTMLImageElement).src =
                              "https://via.placeholder.com/50";
                          }}
                        />
                        <div>
                          <h3 className="font-medium">{testimonial.name}</h3>
                          <div className="text-yellow-500">
                            {renderStars(testimonial.starRating)}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => deleteTestimonial(testimonial.id)}
                        disabled={
                          deleteStatus.loading &&
                          deleteStatus.id === testimonial.id
                        }
                        className="text-red-500 hover:text-red-700"
                      >
                        {deleteStatus.loading &&
                        deleteStatus.id === testimonial.id
                          ? "Deleting..."
                          : "Delete"}
                      </button>
                    </div>
                    <p className="mt-3 text-gray-700">
                      {testimonial.userReview}
                    </p>
                    <a
                      href={testimonial.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm mt-2 inline-block"
                    >
                      LinkedIn Profile
                    </a>

                    {deleteStatus.error &&
                      deleteStatus.id === testimonial.id && (
                        <p className="mt-2 text-sm text-red-600">
                          {deleteStatus.error}
                        </p>
                      )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
