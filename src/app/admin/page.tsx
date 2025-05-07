import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-full w-full bg-white p-4 flex flex-col justify-center items-center mt-12">
      <h1 className="text-4xl text-black text-center font-bold">
        Hey Admin !! What do you wanna do today ?
      </h1>
      <div className="flex items-center justify-evenly gap-6 p-8 mt-6">
        {/* <Link href={"/admin/testimony"}>
          {" "}
          <button className="h-32 w-32 bg-blue-500 text-white shadow-lg rounded-lg py-8 px-4 ">
            Edit Testimony
          </button>
        </Link> */}

        <Link href={"/admin/testimony"}>
          {" "}
          <div className="h-40 w-48 flex items-center justify-center bg-[#FF9B17] inset-2 border border-neutral-400  text-neutral-800 text-2xl font-semibold shadow-lg rounded-lg py-8 px ">
            Testimony
          </div>
        </Link>
        <Link href={"/admin/projects"}>
          {" "}
          <div className="h-40 w-48 flex items-center justify-center bg-[#B03052] inset-2 border border-neutral-400  text-neutral-800 text-2xl font-semibold shadow-lg rounded-lg py-8 px ">
            Projects
          </div>
        </Link>
        <Link href={"/admin/courses"}>
          {" "}
          <div className="h-40 w-48 flex items-center justify-center bg-[#309898] inset-2 border border-neutral-400  text-neutral-800 text-2xl font-semibold shadow-lg rounded-lg py-8 px ">
            Courses
          </div>
        </Link>
        <Link href={"/admin/faq"}>
          {" "}
          <div className="h-40 w-48 flex items-center justify-center bg-blue-500 inset-2 border border-neutral-400  text-neutral-800 text-2xl font-semibold shadow-lg rounded-lg py-8 px ">
            FAQs
          </div>
        </Link>
      </div>
    </div>
  );
};

export default page;
