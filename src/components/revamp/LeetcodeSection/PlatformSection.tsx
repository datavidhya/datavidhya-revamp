"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PlatformCarousel from "./PlatformCarousel";
// import Carousel from "../hero/Carousel";

const platformCards = [
  {
    title: "Choose Your Path",
    description: [
      "Choose your path and have a personalized roadmap. We offer:",
      "Pyspark",
      "Scala",
      "DBT",
      "Postgre SQL ",
      "Python",
    ],
    imgSrc: "/revamp/first.png",
    carousel: false,
  },
  {
    title: "Solve Questions",
    description:
      "Engage in real-world coding challenges and get instant feedback to enhance your skills.",
    imgSrc: "/revamp/second.png",
    carousel: false,
  },
  {
    title: "AI Review✨",
    description:
      "Engage in real-world coding challenges and get instant feedback to enhance your skills.",
    imgSrc: "/revamp/third.png",
    carousel: true,
  },
  {
    title: "Gamified Learning",
    description:
      "Level up skills through challenges, rewards and competition making learning addictive & effective",
    imgSrc: ["/revamp/img2.png", "/revamp/image.png"],
    carousel: false,
  },
];

const PlatformSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleArrowClick = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <section
      id="platform"
      className="mt-6 md:mt-28 px-4 max-w-7xl mx-auto text-center"
    >
      <div className="flex flex-col md:flex-row justify-center overflow-hidden  border border-neutral-200 md:border-0 rounded-2xl mt-1 ">
        {platformCards.map((card, index) => {
          const isFirst = index === 0;
          const isLast = index === platformCards.length - 1;

          const clipPath = isFirst
            ? " polygon(90% 0, 100% 50%, 90% 100%, 0 100%, 0 0) "
            : isLast
            ? "polygon(0 0, 100% 0, 100% 10px, 100% 90%, 100% 100%, 0 100%, 0 50%)"
            : "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)";

          return (
            <>
              <button
                key={index}
                onClick={() => handleArrowClick(index)}
                className={`hidden md:flex  relative w-[100%] md:w-1/4 h-20 md:h-14  text-xs md:text-lg text-center overflow-hidden items-center justify-center font-thin md:font-semibold  ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-[#573efa] to-[#B832E9] text-white"
                    : "bg-white text-[#333333]/50"
                }  ${isFirst ? "rounded-l-xl" : ""} ${
                  isLast ? "rounded-r-xl" : ""
                }`}
                style={{
                  clipPath,
                  marginLeft: index !== 0 ? "-30px" : "0",
                  zIndex: platformCards.length - index,
                  border: "1px solid #cccccc ",
                }}
              >
                <span className="font-light text-lg">{card.title}</span>
              </button>
              <button
                key={index}
                onClick={() => handleArrowClick(index)}
                className={`flex md:hidden items-center justify-center w-full h-11   ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-[#573efa] to-[#B832E9] text-white"
                    : "bg-white text-[#333333]/50"
                }  ${isFirst ? "rounded-t-xl" : ""} ${
                  isLast ? "rounded-b-xl" : ""
                } `}
              >
                {" "}
                <span className="font-medium text-sm">{card.title}</span>
              </button>
            </>
          );
        })}
      </div>

      <div className="mt-6 w-[96%] md:mt-20 flex flex-wrap md:flex-nowrap gap-8 justify-between items-center">
        <motion.div
          initial={{ x: -70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-full md:w-[45%] text-left ml-6 p-6"
        >
          <h3 className="text-2xl font-bold mb-4 text-black ">
            {activeIndex === 2 ? (
              <>
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text">
                  1/4{" "}
                </span>
                AI Review✨
              </>
            ) : (
              platformCards[activeIndex].title
            )}
          </h3>

          {Array.isArray(platformCards[activeIndex].description) ? (
            <div className="text-gray-600 text-lg leading-relaxed">
              <p className="mb-2 md:mb-3">
                {platformCards[activeIndex].description[0]}
              </p>
              <ol className="list-decimal text-[16px] md:text-lg ml-6">
                {platformCards[activeIndex].description
                  .slice(1)
                  .map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
              </ol>
            </div>
          ) : (
            <div className="text-gray-600 text-lg leading-relaxed">
              {platformCards[activeIndex].description}
            </div>
          )}
        </motion.div>
        <motion.div
          initial={{ x: 70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={` w-full md:w-[90%] flex justify-center items-center gap-6 flex-wrap border-[0px] ${
            activeIndex === 3 ? "" : "shadow-lg"
          } border-neutral-300 rounded-xl `}
        >
          {Array.isArray(platformCards[activeIndex].imgSrc) ? (
            platformCards[activeIndex].imgSrc.map((src, i) => (
              <Image
                key={i}
                src={`${src}`}
                alt={`Platform Feature ${i + 1}`}
                width={500}
                height={300}
                className="w-full sm:w-[45%] h-auto max-w-md rounded-xl object-cover"
              />
            ))
          ) : platformCards[activeIndex].carousel ? (
            <PlatformCarousel />
          ) : (
            <Image
              src={`${platformCards[activeIndex].imgSrc}`}
              alt="Platform Feature"
              width={600}
              height={400}
              className="w-full h-auto max-w-5xl rounded-xl object-cover"
            />
          )}
        </motion.div>{" "}
      </div>

      <div className="my-6 md:my-28 flex justify-center">
        <button className="px-6 py-3 bg-gradient-to-r from-[#573efa] to-[#B832E9] text-white rounded-xl font-medium transition-all hover:bg-violet-700 mb-6 md:mb-28">
          Try Platform
        </button>
      </div>
    </section>
  );
};

export default PlatformSection;
