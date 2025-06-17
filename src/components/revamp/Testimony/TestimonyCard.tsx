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
const TestimonyCard = ({ testimony }: testimony) => {
  return (
    <div className="max-sm:w-[18rem] max-md:w-[19rem] max-lg:w-[20rem] max-w-[22rem] p-5 my-3 rounded-2xl border-[1px] border-[#D7D7D7] flex flex-col justify-between hover:shadow-lg hover:bg-gradient-to-br from-white to-purple-100">
      <div className="w-full  text-black text-left">
        {/* <p className="text-xl mb-8">⭐⭐⭐⭐⭐</p> */}
        <span className="flex gap-1">
          {" "}
          <img
            src="/revamp/star.svg"
            className="size-5 md:size-6 mb-6 md:mb-8"
            alt="star"
          />{" "}
          <img
            src="/revamp/star.svg"
            className=" size-5 md:size-6  mb-6 md:mb-8"
            alt="star"
          />{" "}
          <img
            src="/revamp/star.svg"
            className="size-5 md:size-6 mb-6 md:mb-8"
            alt="star"
          />{" "}
          <img
            src="/revamp/star.svg"
            className="size-5 md:size-6 mb-6 md:mb-8"
            alt="star"
          />{" "}
          <img
            src="/revamp/star.svg"
            className="size-5 md:size-6 mb-6 md:mb-8"
            alt="star"
          />
        </span>
        <blockquote>
          {" "}
          <p className="text-[16px] italic md:text-lg lg:text-xl font-400 leading-[150%]">
            "{testimony.description}"
          </p>
        </blockquote>
      </div>
      <div className="mt-5 flex justify-between">
        <span className="flex gap-4 items-center">
          {" "}
          <Image
            alt="pfp"
            src={testimony.image}
            height={56}
            width={56}
            className="rounded-full size-10 md:size-12"
          ></Image>
          <span className="text-left flex flex-col justify-center">
            <h2 className="text-[16px] md:text-lg font-semibold leading-[150%] text-black">
              {testimony.name}
            </h2>
          </span>
        </span>
        <Image
          alt="linkedIn"
          src={"/revamp/linkedin.png"}
          height={56}
          width={56}
          className="rounded-full size-12 md:size-12"
        ></Image>
      </div>
    </div>
  );
};

export default TestimonyCard;
