import React from "react";
import Marquee from "react-fast-marquee";
import {
  Topicarray1,
  Topicarray2,
  Topicarray3,
  Topicarray4,
  Topicarray5,
} from "../marquee/Topics";

interface MyComponentProps {
  topicArray: string[];
}

const TopicMarquee: React.FC<MyComponentProps> = ({ topicArray }) => {
  // Corrected props type
  return (
    <div className="z-20 mt-3 flex w-full gap-5 max-md:mt-2 max-md:gap-0">
      {topicArray.map((item, index) => (
        <p
          key={index}
          className="flex-center courseCoveredInnerShadow mx-4 rounded-full border-neutral-800  bg-neutral-900 px-5 py-2 text-center text-white dark:bg-gray-200 dark:text-white max-md:mx-3 max-md:py-2.5 max-md:text-[13px]"
        >
          {item}
        </p>
      ))}
    </div>
  );
};

const TopicCovered = () => {
  return (
    <div className=" w-full">
      <h3 className="h2-bold mb-2 mt-16 text-center ">100+ topics taught...</h3>
      <div className=" h-96 w-full">
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
