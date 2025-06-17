import React from "react";
import { MdCheckCircle } from "react-icons/md";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
interface prop {
  text: string;
}
const Items = ({ text }: prop) => {
  return (
    <div className="w-full flex items-center gap-2">
      <MdCheckCircle color="#282828" className="size-6 font-bold" />{" "}
      <p className="w-[90%] font-medium leading-[120%] tracking-wide">{text}</p>
    </div>
  );
};
const WhatWillYouLearn = () => {
  return (
    <div>
      <p className={`text-5xl mt-12 mb-8 font-bold ${inter.className}`}>
        What Will You Get ?
      </p>
      <div className="grid grid-cols-2 gap-6 mt-3">
        <Items text="Code template for practice" />{" "}
        <Items text="Access to interactive community" />
        <Items text="All the Python code will be provided with the assignment, and there will be hands-on practice." />
        <Items text="Connect and learn from like-minded peers who share your interests and goals." />
        <Items text="Priority Support" />{" "}
        <Items text="Discount/ Early access in the future" />
        <Items text="We prioritize student queries and feedback to ensure they receive timely assistance." />
        <Items text="You will receive big discounts on my upcoming courses!" />
      </div>
    </div>
  );
};

export default WhatWillYouLearn;
