"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface FormData {
  darshilEmail: string;
  darshilPassword: string;
  userEmail: string;
  userPassword: string;
}

const AddAdmin: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    darshilEmail: "",
    darshilPassword: "",
    userEmail: "",
    userPassword: "",
  });

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    const { darshilEmail, darshilPassword, userEmail, userPassword } = formData;

    if (!darshilEmail || !darshilPassword || !userEmail || !userPassword) {
      toast.error("All fields are required!");
      return;
    }

    try {
      const token = localStorage.getItem("token"); // Get token from local storage
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_baseUrl}api/add-admin`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to headers
          },
        }
      );

      if (response.data.success) {
        toast.success("Admin added successfully!");
        router.push("/admin-board"); // Navigate to the admin board if applicable
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to add admin. Please try again later.");
      console.error("Error adding admin:", error);
    }
  };

  return (
    <div className="flex-center h-[83vh] w-full max-md:h-screen">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="w-2/5 bg-gray-800 p-6 text-white dark:text-black max-md:w-[95%]">
        <h3 className="h3-bold">Add More Admins</h3>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="darshilEmail"
              className="mb-2 block text-sm font-medium"
            >
              Darshil Email
            </label>
            <input
              type="email"
              name="darshilEmail"
              id="darshilEmail"
              className="block w-full rounded-lg border border-gray-300 bg-transparent p-2.5 sm:text-sm"
              placeholder="name@company.com"
              value={formData.darshilEmail}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="darshilPassword"
              className="mb-2 block text-sm font-medium"
            >
              Darshil Password
            </label>
            <input
              type="password"
              name="darshilPassword"
              id="darshilPassword"
              placeholder="••••••••"
              className="block w-full rounded-lg border border-gray-300 bg-transparent p-2.5 sm:text-sm"
              value={formData.darshilPassword}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="userEmail"
              className="mb-2 block text-sm font-medium"
            >
              User Email
            </label>
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              className="block w-full rounded-lg border border-gray-300 bg-transparent p-2.5 sm:text-sm"
              placeholder="name@company.com"
              value={formData.userEmail}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="userPassword"
              className="mb-2 block text-sm font-medium"
            >
              User Password
            </label>
            <input
              type="password"
              name="userPassword"
              id="userPassword"
              placeholder="••••••••"
              className="block w-full rounded-lg border border-gray-300 bg-transparent p-2.5 sm:text-sm"
              value={formData.userPassword}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-purple-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
          >
            Add Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAdmin;
