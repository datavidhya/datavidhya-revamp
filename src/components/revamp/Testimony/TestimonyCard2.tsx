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
    <div className="w-full  p-10 rounded-lg bg-[#292C34]/95 border-[1px] border-[#D7D7D7] flex flex-col justify-between hover:shadow-lg ">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="flex gap-4">
            {" "}
            <Image
              alt="pfp"
              src={testimony.image}
              height={56}
              width={56}
              className="rounded-full size-10 md:size-20"
            ></Image>
            <div className="flex flex-col">
              <h2 className="text-[20px] md:text-2xl font-normal leading-[150%] text-white">
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
        <div className="h-22 overflow-hidden ">
          {" "}
          <blockquote>
            {" "}
            <p className="text-[17px] text-white tracking-tight font-light leading-[130%]">
              {testimony.description}
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard2;
