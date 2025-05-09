// import { useState, useEffect } from "react";
// import {
//   AlertCircle,
//   Check,
//   Loader2,
//   PlusCircle,
//   RefreshCw,
//   Trash2,
// } from "lucide-react";

// export default function ProjectAdminPanel() {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     projectImgUrl: "",
//     topic: "",
//     courseName: "",
//   });

//   const [projects, setProjects] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const [validationErrors, setValidationErrors] = useState({});
//   const [deletingId, setDeletingId] = useState(null);

//   // Fetch projects on component mount
//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch("/api/projects");
//       const result = await response.json();

//       if (result.success) {
//         setProjects(result.data);
//       } else {
//         setError("Failed to fetch projects");
//         console.error(result.message);
//       }
//     } catch (err) {
//       setError("Error connecting to the server");
//       console.error(err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     // Clear validation error when field is edited
//     if (validationErrors[name]) {
//       setValidationErrors((prev) => {
//         const updated = { ...prev };
//         delete updated[name];
//         return updated;
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError(null);
//     setSuccess(null);
//     setValidationErrors({});

//     try {
//       const response = await fetch("/api/projects", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setSuccess("Project created successfully");
//         // Reset form
//         setFormData({
//           name: "",
//           description: "",
//           projectImgUrl: "",
//           topic: "",
//           courseName: "",
//         });
//         // Refresh projects list
//         fetchProjects();
//       } else {
//         if (result.errors) {
//           // Format validation errors
//           const errors = {};
//           result.errors.forEach((err) => {
//             errors[err.field] = err.message;
//           });
//           setValidationErrors(errors);
//         }
//         setError(result.message || "Failed to create project");
//       }
//     } catch (err) {
//       setError("Error connecting to the server");
//       console.error(err);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     setIsDeleting(true);
//     setDeletingId(id);
//     setError(null);
//     setSuccess(null);

//     try {
//       const response = await fetch(`/api/projects?id=${id}`, {
//         method: "DELETE",
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setSuccess("Project deleted successfully");
//         fetchProjects();
//       } else {
//         setError(result.message || "Failed to delete project");
//       }
//     } catch (err) {
//       setError("Error connecting to the server");
//       console.error(err);
//     } finally {
//       setIsDeleting(false);
//       setDeletingId(null);
//     }
//   };

//   return (
//     <div className="w-full max-w-6xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-8">Project Admin Panel</h1>

//       {/* Alert messages */}
//       {error && (
//         <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6 flex items-center">
//           <AlertCircle className="w-5 h-5 mr-2" />
//           <span>{error}</span>
//         </div>
//       )}

//       {success && (
//         <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6 flex items-center">
//           <Check className="w-5 h-5 mr-2" />
//           <span>{success}</span>
//         </div>
//       )}

//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Project Form */}
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-xl font-semibold mb-4 flex items-center">
//             <PlusCircle className="w-5 h-5 mr-2" />
//             Add New Project
//           </h2>

//           <div onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label
//                 className="block text-sm font-medium text-gray-700 mb-1"
//                 htmlFor="name"
//               >
//                 Project Name *
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className={`w-full px-3 py-2 border rounded-md ${
//                   validationErrors.name ? "border-red-500" : "border-gray-300"
//                 }`}
//                 required
//               />
//               {validationErrors.name && (
//                 <p className="mt-1 text-sm text-red-600">
//                   {validationErrors.name}
//                 </p>
//               )}
//             </div>

//             <div className="mb-4">
//               <label
//                 className="block text-sm font-medium text-gray-700 mb-1"
//                 htmlFor="description"
//               >
//                 Description *
//               </label>
//               <textarea
//                 id="description"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 rows="3"
//                 className={`w-full px-3 py-2 border rounded-md ${
//                   validationErrors.description
//                     ? "border-red-500"
//                     : "border-gray-300"
//                 }`}
//                 required
//               ></textarea>
//               {validationErrors.description && (
//                 <p className="mt-1 text-sm text-red-600">
//                   {validationErrors.description}
//                 </p>
//               )}
//             </div>

//             <div className="mb-4">
//               <label
//                 className="block text-sm font-medium text-gray-700 mb-1"
//                 htmlFor="projectImgUrl"
//               >
//                 Project Image URL *
//               </label>
//               <input
//                 id="projectImgUrl"
//                 name="projectImgUrl"
//                 type="url"
//                 value={formData.projectImgUrl}
//                 onChange={handleChange}
//                 className={`w-full px-3 py-2 border rounded-md ${
//                   validationErrors.projectImgUrl
//                     ? "border-red-500"
//                     : "border-gray-300"
//                 }`}
//                 placeholder="https://example.com/image.jpg"
//                 required
//               />
//               {validationErrors.projectImgUrl && (
//                 <p className="mt-1 text-sm text-red-600">
//                   {validationErrors.projectImgUrl}
//                 </p>
//               )}
//             </div>

//             <div className="mb-4">
//               <label
//                 className="block text-sm font-medium text-gray-700 mb-1"
//                 htmlFor="topic"
//               >
//                 Topic *
//               </label>
//               <input
//                 id="topic"
//                 name="topic"
//                 type="text"
//                 value={formData.topic}
//                 onChange={handleChange}
//                 className={`w-full px-3 py-2 border rounded-md ${
//                   validationErrors.topic ? "border-red-500" : "border-gray-300"
//                 }`}
//                 required
//               />
//               {validationErrors.topic && (
//                 <p className="mt-1 text-sm text-red-600">
//                   {validationErrors.topic}
//                 </p>
//               )}
//             </div>

//             <div className="mb-6">
//               <label
//                 className="block text-sm font-medium text-gray-700 mb-1"
//                 htmlFor="courseName"
//               >
//                 Course Name *
//               </label>
//               <input
//                 id="courseName"
//                 name="courseName"
//                 type="text"
//                 value={formData.courseName}
//                 onChange={handleChange}
//                 className={`w-full px-3 py-2 border rounded-md ${
//                   validationErrors.courseName
//                     ? "border-red-500"
//                     : "border-gray-300"
//                 }`}
//                 required
//               />
//               {validationErrors.courseName && (
//                 <p className="mt-1 text-sm text-red-600">
//                   {validationErrors.courseName}
//                 </p>
//               )}
//             </div>

//             <button
//               onClick={handleSubmit}
//               disabled={isSubmitting}
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md flex justify-center items-center disabled:bg-blue-400"
//             >
//               {isSubmitting ? (
//                 <>
//                   <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                   Saving...
//                 </>
//               ) : (
//                 "Create Project"
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Projects List */}
//         <div className="bg-white p-6 rounded-lg shadow">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold">Projects List</h2>
//             <button
//               onClick={fetchProjects}
//               disabled={isLoading}
//               className="flex items-center text-blue-600 hover:text-blue-800"
//             >
//               <RefreshCw
//                 className={`w-4 h-4 mr-1 ${isLoading ? "animate-spin" : ""}`}
//               />
//               Refresh
//             </button>
//           </div>

//           {isLoading ? (
//             <div className="flex justify-center items-center h-48">
//               <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
//             </div>
//           ) : projects.length === 0 ? (
//             <div className="text-center py-8 text-gray-500">
//               No projects found. Create your first project.
//             </div>
//           ) : (
//             <div className="overflow-auto max-h-96">
//               {projects.map((project) => (
//                 <div
//                   key={project.id}
//                   className="border-b border-gray-200 py-4 last:border-b-0"
//                 >
//                   <div className="flex justify-between">
//                     <div>
//                       <h3 className="font-medium">{project.name}</h3>
//                       <p className="text-sm text-gray-600 mt-1 line-clamp-2">
//                         {project.description}
//                       </p>
//                       <div className="mt-2 flex flex-wrap gap-2">
//                         <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
//                           {project.topic}
//                         </span>
//                         <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
//                           {project.courseName}
//                         </span>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => handleDelete(project.id)}
//                       disabled={isDeleting && deletingId === project.id}
//                       className="text-red-500 hover:text-red-700 ml-2 self-start"
//                       title="Delete project"
//                     >
//                       {isDeleting && deletingId === project.id ? (
//                         <Loader2 className="w-5 h-5 animate-spin" />
//                       ) : (
//                         <Trash2 className="w-5 h-5" />
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
