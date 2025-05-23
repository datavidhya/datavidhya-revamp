import Link from "next/link";
import React from "react";
// import { string } from "zod";
interface prop {
  href: string;
  text: string;
  bgColor: string;
}
export const Box = ({ bgColor, href, text }: prop) => {
  return (
    <Link href={href}>
      {" "}
      <div
        className={`h-40 w-48 flex items-center justify-center ${bgColor} inset-2 border border-neutral-400  text-neutral-800 text-2xl font-semibold shadow-lg rounded-lg py-8 px `}
      >
        {text}
      </div>
    </Link>
  );
};
const page = () => {
  return (
    <div className="h-full w-full bg-white p-4 flex flex-col justify-center items-center mt-12">
      <h1 className="text-4xl text-black text-center font-bold">
        Hey Admin !! What do you wanna do today ?
      </h1>
      <div className="flex items-center justify-evenly gap-6 p-8 mt-6">
        <Box href="" bgColor="bg-red-400" text="" />
        <Box href="/admin/testimony" bgColor="bg-[#FF9B17]" text="Testimony" />
        <Box href="/admin/projects" bgColor="bg-[#B03052]" text="Projects" />
        <Box href="/admin/courses" bgColor="bg-[#309898]" text="Add Course" />
        <Box href="/admin/faq" bgColor="bg-blue-500" text="FAQs" />
      </div>
    </div>
  );
};

export default page;
