"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

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

interface Props {
  projectImgUrl: string;
  profileImg: string;
  name: string;
  userReview: string;
  courseName: string;
  id: string;
}

const AddProjectReview = () => {
  const [userName, setUserName] = useState("");
  const [userReview, setUserReview] = useState("");
  const [userProjectUrl, setUserProjectUrl] = useState("");
  const [courseName, setCourseName] = useState("");
  const [userProfilePicFile, setUserProfilePicFile] = useState<File | null>(
    null
  );
  const [userProjectPicFile, setUserProjectPicFile] = useState<File | null>(
    null
  );

  const handleProfilePicChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setUserProfilePicFile(e.target.files[0]);
  };

  const handleProjectPicChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setUserProjectPicFile(e.target.files[0]);
  };

  const uploadToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    const response = await axios.post("/api/v1/upload-image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data.data.secure_url; // Return the uploaded image URL
  };

  const addReview = async () => {
    try {
      if (!userProfilePicFile || !userProjectPicFile) {
        toast.error("Please upload both images");
        return;
      }

      // Upload images to Cloudinary
      const profileImgUrl = await uploadToCloudinary(userProfilePicFile);
      const projectImgUrl = await uploadToCloudinary(userProjectPicFile);

      const res = await axios.post(`/api/v1/user/project-feedback`, {
        name: userName,
        profileImg: profileImgUrl,
        projectImgUrl,
        userReview,
        userProjectUrl,
      });

      if (res.status === 201) {
        toast.success("Review added successfully!");
        setUserName("");
        setUserReview("");
        setUserProjectUrl("");
        setCourseName("");
        setUserProfilePicFile(null);
        setUserProjectPicFile(null);
      }
    } catch (error: any) {
      toast.error("Failed to add review. Please try again.");
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
            Add global project reviews by users
          </AlertDialogTitle>
          <AlertDialogDescription className="text-left font-semibold">
            User Name
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Neha Singh"
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
              placeholder="Course Name"
              className="w-full border px-3 py-2 outline-none"
              required
            />
          </AlertDialogDescription>
          <AlertDialogDescription className="text-left font-semibold">
            Project URL (LinkedIn or Twitter)
            <input
              type="text"
              value={userProjectUrl}
              onChange={(e) => setUserProjectUrl(e.target.value)}
              placeholder="Add user project URL"
              className="w-full border px-3 py-2 outline-none"
              required
            />
          </AlertDialogDescription>
          <AlertDialogDescription className="text-left font-semibold">
            User Profile Pic
            <input type="file" onChange={handleProfilePicChange} required />
          </AlertDialogDescription>
          <AlertDialogDescription className="text-left font-semibold">
            User Project Screenshot
            <input type="file" onChange={handleProjectPicChange} required />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border bg-black text-white dark:bg-white dark:text-black">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={addReview}
            className="border bg-purple-400 text-white "
          >
            Add
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const Card = ({
  projectImgUrl,
  profileImg,
  name,
  userReview,
  id,
  courseName,
}: Props) => {
  const deleteProjectReviewTestimonial = async () => {
    try {
      const res = await axios.delete(`/api/v1/user/project-feedback?id=${id}`);
      if (res.status === 200) {
        // Reload the page or update the state to reflect the changes
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deleting project feedback:", error);
    }
  };

  return (
    <div className="my-2 bg-[#222] p-3 dark:bg-[#999]">
      <div className="text-white dark:text-black">
        <p>{name}</p>
        <p>{userReview}</p>
        <h6 className="h6-bold">{courseName}</h6>
      </div>
      <div className="flex gap-10">
        <Image src={profileImg} height={100} width={100} alt="" />
        <Image src={projectImgUrl} height={260} width={260} alt="" />
        <Trash
          color="white"
          onClick={deleteProjectReviewTestimonial}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

interface CoveredImage {
  name: string;
  profileImg: string;
  userReview: string;
  projectImgUrl: string;
  courseName: string;
  _id: string;
}

const ProjectReview = () => {
  const [projectReviews, setProjectReviews] = useState<CoveredImage[]>([]);

  useEffect(() => {
    const fectAllProjectReviews = async () => {
      try {
        const res = await axios.get(`/api/v1/user/project-feedback`);
        console.log(res.data);
        setProjectReviews(res.data.data);
      } catch (error) {}
    };
    fectAllProjectReviews();
  }, []);

  return (
    <div className="pt-6 flex w-full justify-around bg-neutral-100 px-2 max-md:justify-between">
      <div className="h-full w-1/2 max-md:w-[90%]">
        {projectReviews.length === 0 ? (
          <div className="flex-center h-screen w-full text-center text-[3rem] font-semibold text-black">
            No Project review added
          </div>
        ) : (
          projectReviews.map((items, index) => (
            <Card
              id={items._id}
              name={items.name}
              profileImg={items.profileImg}
              key={index}
              userReview={items.userReview}
              courseName={items.courseName}
              projectImgUrl={items.projectImgUrl}
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

export default ProjectReview;
