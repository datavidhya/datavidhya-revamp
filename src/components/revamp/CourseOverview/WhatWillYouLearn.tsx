import React from "react";
import { SlCheck } from "react-icons/sl";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
interface prop {
  text: string;
}
const Items = ({ text }: prop) => {
  return (
    <div className="w-full flex items-center gap-2">
      <SlCheck color="purple-400" className="size-5" /> <p className="w-[90%] font-medium tracking-wide">{text}</p>
    </div>
  );
};
const WhatWillYouLearn = () => {
  return (
    <div>
      <p className={`text-4xl mt-12 mb-8 font-bold ${inter.className}`}>
        What Will You Learn ?
      </p>
      <div className="grid grid-cols-2 gap-6 mt-3">
        <Items text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum numquam cumque" />
        <Items text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum numquam cumque" />
        <Items text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum numquam cumque" />
        <Items text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum numquam cumque" />
        <Items text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum numquam cumque" />
        <Items text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum numquam cumque" />
      </div>
    </div>
  );
};

export default WhatWillYouLearn;
