"use client";
import React from "react";
import { motion } from "framer-motion";
// import { Roboto } from "next/font/google";
import TestimonyCard from "./TestimonyCard";
import Marquee from "react-fast-marquee";
// const roboto = Roboto({
//   variable: "--font-roboto",
//   subsets: ["latin"],
// });

const Testimony = () => {
  return (
    // ${roboto.className}
    <div className={` w-full flex flex-col items-center justify-center my-6 md:my-28`}>
      <h1 className="text-4xl md:text-5xl text-black text-center  font-bold leading-[120%] ">
        Customer <br className="block md:hidden" />{" "}
        <span className="relative inline-block">
          Testimonials
          <svg
            className="absolute -bottom-5 left-1/2 w-full max-w-[120px] -translate-x-1/2 sm:-bottom-6 md:-bottom-3 sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px]"
            height="35"
            viewBox="0 0 200 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M10,25 Q100,10 190,25"
              stroke="#a855f7"
              strokeWidth="3"
              fill="transparent"
            />
            <path
              d="M10,30 Q100,15 190,30"
              stroke="#a855f7"
              strokeWidth="3"
              fill="transparent"
            />
          </svg>
        </span>
      </h1>
      <p className="text-lg md:text-xl font-normal leading-[150%] text-center text-black my-6 md:mb-20">
        What our customers say about us!
      </p>
      <div className="hidden md:flex justify-around relative max-w-[85vw] h-[100vh]  overflow-hidden gap-2 md:gap-4 mb-6 md:mb-28">
        <div className="absolute top-0 w-full h-[10%] bg-gradient-to-b from-white to-transparent z-20"></div>
        <div className="absolute bottom-0 w-full h-[10%] bg-gradient-to-t from-white to-transparent z-20"></div>
        <div className="w-1/2 xl:w-1/3 h-full overflow-hidden ">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: -2000 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className=""
          >
            {" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
        mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
        perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
        incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
      mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
      perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
      incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
    mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
    perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
    incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
  mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
  perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
  incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
    mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
    perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
    incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
  mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
  perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
  incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
    mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
    perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
    incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />
          </motion.div>
        </div>
        <div className="w-1/2 xl:w-1/3 h-full">
          <motion.div
            initial={{ y: -2000 }}
            animate={{ y: 0 }}
            transition={{
              duration: 45,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="hidden md:flex flex-col"
          >
            {" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
          mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
          perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
          incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
      mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
      perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
      incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
    mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
    perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
    incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
  mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
  perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
  incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
      mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
      perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
      incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
    mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
    perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
    incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
  mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
  perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
  incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
        mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
        perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
        incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
      mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
      perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
      incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
          </motion.div>
        </div>
        <div className="w-1/3 overflow-hidden hidden xl:flex flex-col">
          <motion.div
            className=" "
            initial={{ y: 0 }}
            animate={{ y: -2000 }}
            transition={{
              duration: 32,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            {" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
          mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
          perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
          incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
        mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
        perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
        incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
      mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
      perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
      incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
    mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
    perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
    incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
  mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
  perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
  incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
      mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
      perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
      incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
        mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
        perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
        incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
  mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
  perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
  incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />
          </motion.div>
        </div>
      </div>
      <div className="h-[78%] flex flex-col justify-center md:hidden">
        <div className="w-full  overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: -1000 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className=" flex  gap-6"
          >
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
        mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
        perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
        incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
      mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
      perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
      incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
    mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
    perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
    incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
  mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
  perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
  incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
      mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
      perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
      incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
    mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
    perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
    incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
  mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
  perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
  incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
  mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
  perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
  incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
          </motion.div>
        </div>
        <div className="w-full overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 1000 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="flex gap-6"
          >
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
        mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
        perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
        incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
      mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
      perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
      incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
    mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
    perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
    incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
  mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
  perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
  incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
      mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
      perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
      incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
    mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
    perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
    incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
  mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
  perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
  incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
          </motion.div>
        </div>
      </div>
      {/* <div className="flex flex-col md:hidden ">
        <Marquee className="" direction="left">

          {" "}
          <div className=" flex gap-2">
            {" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
      mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
      perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
      incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
    mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
    perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
    incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
  mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
  perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
  incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
          </div>
        </Marquee>
        <Marquee className="relative ">
          <div className=" flex gap-2">
            {" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
      mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
      perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
      incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
    mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
    perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
    incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
  mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
  perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
  incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
            <TestimonyCard
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
incidunt cum."
              Name="Name SurName"
              position="AI Engineer"
              companyName="Google"
              pfp="/revamp/author.svg"
            />{" "}
          </div>
        </Marquee>
      </div> */}
    </div>
  );
};

export default Testimony;

// "use client";

// import React, { useEffect, useState } from "react";
// import TestimonyCard from "./TestimonyCard";

// type Testimonial = {
//   id: string;
//   name: string;
//   profileImg: string;
//   userReview: string;
//   linkedinUrl: string;
//   starRating: number;
// };

// const Testimony = () => {
//   const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const res = await fetch("/api/testimonials");
//         const json = await res.json();
//         if (json.success) {
//           setTestimonials(json.data);
//         } else {
//           console.error("Failed to fetch:", json.message);
//         }
//       } catch (err) {
//         console.error("Error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   return (
//     <div className="w-full flex flex-col items-center justify-center">
//       <h1 className="text-3xl md:text-5xl text-black text-center font-bold leading-[120%] mt-28">
//         Customer Testimonials
//       </h1>
//       <p className="text-lg font-normal leading-[150%] text-center text-black mt-6 mb-6 md:mb-20">
//         This platform transformed my data engineering skills!
//       </p>

//       {loading ? (
//         <p className="text-center text-gray-500">Loading testimonials...</p>
//       ) : (
//         <div className="w-[85%] flex flex-col md:flex-row justify-center gap-5 mb-6 md:mb-28 flex-wrap">
//           {testimonials.map((t) => (
//             <TestimonyCard
//               key={t.id}
//               text={t.userReview}
//               Name={t.name}
//               position="Engineer"
//               companyName="x"
//               pfp={t.profileImg}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Testimony;
