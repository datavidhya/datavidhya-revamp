"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const TestimonyForm = () => {
  const { register, handleSubmit } = useForm();
  const [user, setUser] = useState({
    name: "",
    surname: "",
    company: "",
    position: "",
    image: "",
  });
  return (
    <form
      className="h-auto w-full p-4 px-12 text-black flex flex-col items-center gap-2 bg-green-200"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <input
        className="px-3 py-2 bg-white h-12 w-64 rounded-lg"
        {...register("name")}
        type="text"
        placeholder="Name"
      />
      {/* <input
        className="px-3 py-2 bg-white h-12 w-64 rounded-lg"
        {...register("lastname")}
        type="text"
        placeholder="Surname"
      /> */}
      <input
        className="px-3 py-2 bg-white h-12 w-64 rounded-lg"
        {...register("company")}
        type="text"
        placeholder="Company"
      />
      <input
        className="px-3 py-2 bg-white h-12 w-64 rounded-lg"
        {...register("position")}
        type="text"
        placeholder="Position"
      />
      <input
        className="px-3 py-2 bg-white h-12 w-64 rounded-lg"
        {...register("LinkedInLink")}
        type="text"
        placeholder="LinkedIn Profile Link"
      />
      {/* <label>Profile Image</label> */}
      <input
        {...register("profileImage")}
        type="file"
        placeholder="profileImg"
        className="px-3 py-2 bg-white h-12 w-64 rounded-lg"
      />
      <input
        {...register("starRating")}
        type="text"
        placeholder="Star Rating"
        className="px-3 py-2 bg-white h-12 w-64 rounded-lg"
      />
      <textarea
        name="userReview"
        id=""
        placeholder="User Review"
        className="px-3 py-2 bg-white h-24 w-64 rounded-lg"
      ></textarea>{" "}
      <input
        className="px-3 py-2 bg-blue-600 text-white h-12 w-24 rounded-lg"
        type="submit"
        onChange={() => console.log(user)}
      />
    </form>
  );
};

export default TestimonyForm;
