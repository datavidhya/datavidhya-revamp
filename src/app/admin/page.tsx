"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TestimonyForm from "./testimonyForm";
const page = () => {
  const { register, handleSubmit } = useForm();
  const [user, setUser] = useState({
    name: "",
    surname: "",
    company: "",
    position: "",
    image: "",
  });
  const submitFunction = () => {};
  return (
    <div className="bg-zinc-300 h-full w-full flex flex-col items-center p-4">
      <div className="bg-sky-300 h-auto w-auto p-4 flex flex-col items-center gap-4">
        <h1 className="text-5xl text-black font-bold">Testimony</h1>
        <TestimonyForm />
        {/* {TestimonyForm.map(items, key)} */}
        <button className="px-3 py-2 bg-blue-600 text-white h-12 w-28 rounded-lg">
          Add another
        </button>
      </div>
    </div>
  );
};

export default page;
