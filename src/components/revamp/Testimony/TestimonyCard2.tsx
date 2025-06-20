import Image from "next/image";
import React from "react";
interface prop {
  description: string;
  image: string;
  name: string;
  linkedInUrl: string;
  stars: number;
}
interface testimony {
  testimony: prop;
}
const TestimonyCard2 = ({ testimony }: testimony) => {
  return (
    <div className="w-full  p-6 rounded-lg bg-neutral-900 border border-neutral-800 flex flex-col justify-between hover:shadow-lg ">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="flex gap-4">
            {" "}
            <Image
              alt="pfp"
              src={testimony.image}
              height={50}
              width={50}
              className="rounded-full size-9 md:size-16 border-2 border-blue-500"
            ></Image>
            <div className="flex flex-col">
              <h2 className="text-lg md:text-xl font-normal  text-white">
                {testimony.name}
              </h2>
              <p className="text-sm text-neutral-400">Frontend Engineer</p>
              <p className="text-sm text-[#2db6ec]">amazon</p>
            </div>
          </div>
          <Image
            alt="linkedIn"
            src={"/revamp/linknew.png"}
            height={56}
            width={56}
            className=" size-12 md:size-9"
          ></Image>
        </div>
        <div className="h-28 overflow-hidden ">
          {" "}
          <blockquote>
            {" "}
            <p className="text-sm line-clamp-5 text-neutral-400 font-light ">
              {testimony.description}
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard2;
