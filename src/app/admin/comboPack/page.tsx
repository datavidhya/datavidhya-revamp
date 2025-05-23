"use client";
import React, { useState, ChangeEvent, FC, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  type?: string;
  isTextArea?: boolean;
}

const InputField: FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  isTextArea = false,
}) => (
  <div className="mb-4  text-black dark:text-black">
    <p>{label}</p>
    {isTextArea ? (
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1 w-3/5 border bg-transparent px-4 py-3 outline-none max-md:w-full text-black"
      />
    ) : (
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1 w-3/5 border bg-transparent px-4 py-3 outline-none max-md:w-full text-black"
      />
    )}
  </div>
);

const AddComboPackCourse: FC = () => {
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

  const [comboPackTitle, setComboPackTitle] = useState<string>("");
  const [comboPackDescription, setComboPackDescription] = useState<string>("");
  const [comboPackPoints, setComboPackPoints] = useState<string>("");
  const [comboPackAccess, setComboPackAccess] = useState<string>("");
  const [comboPackPaymentLink, setComboPackPaymentLink] = useState<string>("");
  const [comboPackThumbnail, setComboPackThumbnail] = useState<string>("");

  const handleProjectPicChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setComboPackThumbnail(reader.result as string);
      };
    }
  };

  const handleSubmit = async () => {
    const comboPackData = {
      comboPackTitle,
      comboPackDescription,
      comboPackPoints,
      comboPackAccess,
      comboPackPaymentLink,
      comboPackThumbnail,
    };

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("User not authenticated. Please log in.");
        return;
      }

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_baseUrl}api/add-combo-pack`,
        comboPackData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Combo pack course upserted successfully!");
    } catch (error) {
      toast.error("There was an error upserting the combo pack course.");
      console.error("There was an error!", error);
    }
  };
  return (
    <div className="mx-auto mt-36 h-screen w-[85%] pt-4 max-md:w-[92%] text-black">
      <Toaster />
      <InputField
        label="Course Title"
        value={comboPackTitle}
        onChange={(e) => setComboPackTitle(e.target.value)}
        placeholder="All in One Courses (Combopack)"
      />
      <InputField
        label="Combo Pack Description"
        value={comboPackDescription}
        onChange={(e) => setComboPackDescription(e.target.value)}
        placeholder="Master Apache Spark with Databricks, Snowflake Data Warehousing, Python, and SQL-all in one high-quality package. From big data processing to machine learning, we cover it all with hands-on projects and expert guidance."
      />
      <InputField
        label="Combo Points Points(Separate them with +/+)"
        value={comboPackPoints}
        onChange={(e) => setComboPackPoints(e.target.value)}
        placeholder="Master Apache Spark, Snowflake, Python, and SQL efficiently. +/+ Access multiple courses at a discounted bundled price. +/+ Courses complement each other for cohesive skill development."
        isTextArea
      />
      <InputField
        label="Duration || Access || Reviews"
        value={comboPackAccess}
        onChange={(e) => setComboPackAccess(e.target.value)}
        placeholder="200+ Reviews | Lifetime Access | 4 courses in 1"
      />
      <InputField
        label="Payment Link"
        value={comboPackPaymentLink}
        onChange={(e) => setComboPackPaymentLink(e.target.value)}
        placeholder="https://pay.datavidhya.com/cop/Ik3o3w7n1J?code=EARLYSPARK"
      />

      <div className="flex flex-col">
        <input
          type="file"
          placeholder="choose user profile pic"
          className="text-black dark:text-black"
          onChange={handleProjectPicChange}
          required // Make the input required
        />

        <button
          onClick={handleSubmit}
          className="mt-6 w-3/5 bg-purple-600 py-4 font-semibold text-white  "
        >
          Add Combo Pack
        </button>
      </div>
    </div>
  );
};

export default AddComboPackCourse;
