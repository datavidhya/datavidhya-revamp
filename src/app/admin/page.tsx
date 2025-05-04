"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TestimonyForm from "./testimonyForm";
const page = () => {
  const [form, setForm] = useState([0]);
  const handleAddForm = () => {
    setForm((prev) => [...prev, prev.length]);
  };
  const handleRemoveForm = () => {
    setForm((prev) => prev.slice(0, -1));
  };
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
      <div className="bg-sky-300 h-auto w-full p-4 flex flex-col items-center gap-4">
        <h1 className="text-5xl text-black font-bold">Testimony</h1>
        <div className="flex flex-wrap">
          {form.map((formId, index) => (
            <TestimonyForm key={formId} index={index} />
          ))}
        </div>
        <button
          onClick={handleAddForm}
          className="px-3 py-2 bg-blue-600 text-white h-12 w-28 rounded-lg"
        >
          Add another
        </button>
        <button
          onClick={handleRemoveForm}
          className="px-3 py-2 bg-blue-600 text-white h-12 w-28 rounded-lg"
        >
          Remove a form
        </button>
      </div>
    </div>
  );
};

export default page;
