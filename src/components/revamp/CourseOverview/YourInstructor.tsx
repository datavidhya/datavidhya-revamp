import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
const inter = Inter({ subsets: ["latin"] });
const YourInstructor = () => {
  return (
    <div>
      <h1 className={`text-5xl mb-12 font-bold ${inter.className}`}>
        Meet Your Instructor
      </h1>
      <div className="flex items-center my-6 gap-6">
        <img src="/darshilicon.png" className="rounded-full size-52" alt="" />
        <div className="flex flex-col justify-between">
          <h1 className={`text-4xl font-bold text-black ${inter.className}`}>Darshil Parmar</h1>
          <h3 className="text-lg font-normal text-neutral-700 ">
            Data Engineer{" "}
          </h3>
          <p className="leading-[125%] my-3 text-neutral-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            non placeat amet esse quaerat temporibus ab saepe dolores iure in,
            Blanditiis inventore facere corporis totam veniam. Asperiores nulla
            ab est nihil! Laudantium!
          </p>
          <span className="flex gap-4 mt-2.5">
            <Link
              target="_blank"
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:text-blue-400"
            >
              <FaTwitter className="size-6 text-[#333333]" />
            </Link>
            <Link
              target="_blank"
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:text-blue-700"
            >
              <FaLinkedinIn className="size-6 text-[#333333]" />
            </Link>
            <Link
              target="_blank"
              href="https://youtube.com"
              aria-label="YouTube"
              className="hover:text-red-600"
            >
              <FaYoutube className="size-6 text-[#333333]" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default YourInstructor;
