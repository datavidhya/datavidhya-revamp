import React from "react";
import Marquee from "react-fast-marquee";
import {
  Topicarray1,
  Topicarray2,
  Topicarray3,
  Topicarray4,
  Topicarray5,
} from "./Topics";

interface MyComponentProps {
  topicArray: string[];
}

const TopicMarquee: React.FC<MyComponentProps> = ({ topicArray }) => {
 
  return (
    <div className="z-20 mt-3 flex w-full gap-5 max-md:mt-2 max-md:gap-0">
      {topicArray.map((item, index) => (
        <p
          key={index}
          className="flex-center courseCoveredInnerShadow mx-4 rounded-full border-neutral-800  bg-[#f7f7fb] px-5 py-2 text-center text-neutral-700  max-md:mx-3 max-md:py-2.5 max-md:text-[13px]"
        >
          {item}
        </p>
      ))}
    </div>
  );
};

const TopicCovered = () => {
  return (
    <div className="relative flex flex-col mx-auto w-[90%]">
      <div className="absolute z-10 h-full w-1/4 left-0 bg-gradient-to-r from-white to-transparent"></div>
      <div className="absolute z-10 h-full w-1/4 right-0 bg-gradient-to-l from-white to-transparent"></div>
      <h3 className="text-3xl md:text-5xl  font-black mb-6 mt-16 text-center text-black">
        100+ Topics taught...
      </h3>
      <div className=" h-80 w-full">
        <Marquee>
          <TopicMarquee topicArray={Topicarray1} />
        </Marquee>
        <Marquee direction="right">
          <TopicMarquee topicArray={Topicarray2} />
        </Marquee>
        <Marquee speed={130}>
          <TopicMarquee topicArray={Topicarray3} />
        </Marquee>
        <Marquee direction="right">
          <TopicMarquee topicArray={Topicarray4} />
        </Marquee>
        <Marquee>
          <TopicMarquee topicArray={Topicarray5} />
        </Marquee>
      </div>
    </div>
  );
};

export default TopicCovered;
