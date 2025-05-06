import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-full w-full bg-white p-4 flex flex-col justify-around items-center">
      <h1 className="text-4xl text-black text-center font-bold">
        Hey Admin !! What do you wanna do today ?
      </h1>
      <div className="flex items-center justify-center p-8">
        <Link href={"/admin/testimony"}>
          {" "}
          <button className="bg-blue-500 text-white shadow-lg rounded-lg py-3 px-4 ">
            Edit Testimony
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
