import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const HeroSecCourseInfo = () => {
  return (
    <div className="my-6">
      <h1 className={`text-5xl text-black font-black tracking-tight ${inter.className}`}>
        Zero To Hero Data Engineering{""}
      </h1>
      <p
        className={`${inter.className} w-[85%] my-6 text-[16px] text-neutral-800 font-light  leading-[140%]`}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit minima
        cumque at consequuntur commodi quisquam repudiandae voluptatem obcaecati
        accusantium voluptatum, dolorum esse placeat quidem maiores sapiente
      </p>
      <div className="flex gap-3 items-center ">
        <img src="/revamp/author.svg" className="rounded-full size-12" alt="" />
        <span className="flex flex-col">
          <h1 className={`text-[16px] font-bold `}>Darshil Parmar</h1>
          <h2 className="text-neutral-700">Data Engineer</h2>
        </span>
      </div>
      <span className="flex text-md gap-6 my-b mt-8 text-neutral-700 font-medium">
        <p>4.9(15845)</p>
        <p>25000+ Students</p>
        <p>Last Updated on 06/2025</p>
      </span>
    </div>
  );
};

export default HeroSecCourseInfo;
