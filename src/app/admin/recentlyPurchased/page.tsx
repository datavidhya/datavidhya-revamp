"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { Trash } from "lucide-react";
import { convertToISO8601 } from "@/helper/convertToISO8601";
import { useRouter } from "next/navigation";

interface Purchase {
  _id: string;
  studentName: string;
  courseName: string;
  date: string;
}

interface PurchaseFormData {
  studentName: string;
  courseName: string;
  date: string;
}

interface InputProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
}

const PurchaseCard: React.FC<Purchase> = ({
  studentName,
  courseName,
  date,
  _id,
}) => {
  const router = useRouter();
  // useEffect(() => {
  //   const checkAdminLogin = () => {
  //     const token = localStorage.getItem("token");

  //     if (!token) {
  //       router.push("/admin-logIn");
  //     }
  //   };
  //   checkAdminLogin();
  // }, []);

  const deletePuchasedCard = async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve the token from local storage
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_baseUrl}api/delete-recently-purchased`,
        { _id },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
        }
      );
      if (res.status === 200) {
        toast.success("Purchased Card deleted successfully");
        window.location.reload();
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error("Error deleting purchased card:", error);
      toast.error("Failed to delete purchased card");
    }
  };

  return (
    <div className="my-3  mr-6 w-96 bg-gray-900 p-2 text-black dark:bg-gray-200 dark:text-black">
      <div className="flex justify-between">
        <p>{studentName}</p>
        <Trash className="cursor-pointer" onClick={deletePuchasedCard} />
      </div>
      <p>{courseName}</p>
      <p>{date}</p>
    </div>
  );
};

const InputField: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  name,
}) => (
  <div className="text-black dark:text-black">
    <p>{label}</p>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="mt-1 w-64 border bg-transparent px-4 py-2 outline-none max-md:w-full"
      name={name}
    />
  </div>
);

const AddRecentlyPurchased: React.FC = () => {
  const [formData, setFormData] = useState<PurchaseFormData>({
    studentName: "",
    courseName: "",
    date: "",
  });

  const [purchaseData, setPurchaseData] = useState<Purchase[]>([]);

  useEffect(() => {
    const fetchAllPurchasedData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_baseUrl}api/all-Purchased`
        );
        setPurchaseData(res.data.data);
      } catch (error) {
        toast.error("Failed to fetch purchase data");
      }
    };
    fetchAllPurchasedData();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const formattedDate = convertToISO8601(formData.date);
      const token = localStorage.getItem("token"); // Retrieve the token from local storage
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_baseUrl}api/add-rencently-purchased`,
        { ...formData, date: formattedDate },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
        }
      );
      if (response.status === 201) {
        toast.success("Data added successfully");
        setPurchaseData([...purchaseData, response.data.data]);
      } else {
        toast.error("Failed to add data");
      }
    } catch (error) {
      toast.error("Failed to add data");
    }
  };

  return (
    <div className="mx-auto mt-36 w-4/5 pt-6 max-sm:w-[90%]">
      <Toaster />
      <form onSubmit={handleSubmit} className="flex gap-6 max-md:flex-col">
        <InputField
          label="Student Name"
          value={formData.studentName}
          onChange={handleChange}
          placeholder="Bhanu Singh"
          name="studentName"
        />
        <InputField
          label="Course Name"
          value={formData.courseName}
          onChange={handleChange}
          placeholder="Data engineering using python"
          name="courseName"
        />
        <InputField
          label="Date"
          value={formData.date}
          onChange={handleChange}
          placeholder="20-05-2024 12:55 pm"
          name="date"
        />
        <button
          type="submit"
          className="mt-7 h-10 w-36 bg-purple-500 px-6 text-black max-md:mt-0 max-md:w-full"
        >
          Add
        </button>
      </form>

      <div className="mt-6 flex w-full flex-wrap">
        {purchaseData.map((item, index) => {
          if (!item) return null; // Skip rendering if item is undefined
          return <PurchaseCard key={index} {...item} _id={item._id} />;
        })}
      </div>
    </div>
  );
};

export default AddRecentlyPurchased;
