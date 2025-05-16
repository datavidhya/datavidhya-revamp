"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios from "axios";
import Image from "next/image";
import { Trash } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  profileImg: string;
  name: string;
  text: string;
  star: string;
  id?: string;
}

const AddProjectReview = () => {
  const [userName, setUserName] = useState("");
  const [userReview, setUserReview] = useState("");
  const [courseName, setCourseName] = useState("");
  const [Stars, setStars] = useState("0");
  const [message, setMessage] = useState<string | null>(null);
  const [userProfilePicBlob, setUserProfilePicBlob] = useState<string | null>(
    null
  );
  const handleProfilePicChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setUserProfilePicBlob(reader.result as string);
      };
    }
  };

  const addTestomonial = async () => {
    try {
      const token = localStorage.getItem("token"); // Get token from local storage
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_baseUrl}api/add-global-testomonial`,
        {
          name: userName,
          profileImg: userProfilePicBlob,
          text: userReview,
          stars: Stars,
          courseName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to headers
          },
        }
      );
      toast.success("Testimonial Added successfully");
      setMessage(res.data.message);
      setUserName("");
      setUserReview("");
      setUserProfilePicBlob(null);
      window.location.reload();
    } catch (error: any) {
      setMessage(error.message);
      toast.error("Something went wrong");
    }
  };

  return (             
    <AlertDialog>
      <AlertDialogTrigger className="mt-2 bg-white px-4 py-1.5 text-black dark:bg-black dark:text-white">
        Add
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white dark:bg-black">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Add global Testomonial for landingpage
          </AlertDialogTitle>
          <AlertDialogDescription className="text-left font-semibold">
            User Name
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="User Name"
              className="w-full border px-3 py-2 outline-none"
              required
            />
          </AlertDialogDescription>
          <AlertDialogDescription className="text-left font-semibold">
            User Review
            <input
              type="text"
              value={userReview}
              onChange={(e) => setUserReview(e.target.value)}
              placeholder="Add user review"
              className="w-full border px-3 py-2 outline-none"
              required
            />
          </AlertDialogDescription>

          <AlertDialogDescription className="text-left font-semibold">
            User given star
            <input
              type="number"
              value={Stars}
              onChange={(e) => setStars(e.target.value)}
              placeholder="Add user text review"
              className="w-full border px-3 py-2 outline-none"
              required
            />
          </AlertDialogDescription>

          <AlertDialogDescription className="text-left font-semibold">
            Course Name
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              placeholder="Apache Spark with Databricks for Data Engineers"
              className="w-full border px-3 py-2 outline-none"
              required
            />
          </AlertDialogDescription>

          <AlertDialogDescription className="text-left font-semibold">
            User Profile Pic
            <input
              type="file"
              placeholder="Choose user profile pic"
              onChange={handleProfilePicChange}
              required
            />
          </AlertDialogDescription>
          <AlertDialogDescription className="text-left font-semibold">
            {message}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border bg-black text-white dark:bg-white dark:text-black">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={addTestomonial}
            className="border bg-black text-white dark:bg-white dark:text-black"
          >
            Add
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const Card = ({ profileImg, name, text, star, id }: Props) => {
  const deleteTestomonial = async () => {
    try {
      const token = localStorage.getItem("token"); // Get token from local storage
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_baseUrl}api/delete-global-testomonial`,
        { id },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to headers
          },
        }
      );
      if (res.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };                                      

  return (
    <div className="my-2 flex gap-4 bg-[#222] px-4 py-2 dark:bg-[#666] text-black border border-black">
      <div>
        <Image src={profileImg} height={250} width={250} alt="" className="" />
      </div>
      <div className="text-white">
        <div className="flex justify-between">
          <p>{name}</p>
          <Trash className="cursor-pointer" onClick={deleteTestomonial} />
        </div>
        <p>Total stars {star}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

interface CoveredImage {
  name: string;
  profileImg: string;
  text: string;
  stars: string;
  _id: string;
}

const UserTestomonial = () => {
  const [projectReviews, setProjectReviews] = useState<CoveredImage[]>([]);

  useEffect(() => {
    const fetchAllProjectReviews = async () => {
      try {
        const token = localStorage.getItem("token"); // Get token from local storage
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_baseUrl}api/all-global-Testomonial`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Add token to headers
            },
          }
        );
        setProjectReviews(res.data.testomonial);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllProjectReviews();
  }, []);

  return (
    <div className="flex w-full justify-around px-2 max-md:justify-between">
      <Toaster />
      <div className="h-full w-1/2 p-4 max-md:w-[90%]">
        {projectReviews.length === 0 ? (
          <div>No Testomonial is there</div>
        ) : (
          projectReviews.map((items, index) => (
            <Card
              name={items.name}
              profileImg={items.profileImg}
              key={index}
              text={items.text}
              star={items.stars}
              id={items._id}
            />
          ))
        )}
      </div>
      <div>
        <AddProjectReview />
      </div>
    </div>
  );
};

export default UserTestomonial;
