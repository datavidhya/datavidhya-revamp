import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[16px] text-[#8B90A1] font-bold my-6 mt-20">
        PLATFORM
      </p>
      <h1 className="text-3xl md:text-5xl text-black text-center font-bold">
        Solve Leet Code like{" "}
      </h1>
      <span className=" relative inline-block text-3xl md:text-5xl text-black font-bold mb-[30px]">
        problems
        <svg
          className="absolute -bottom-5 left-1/2 -translate-x-1/2"
          width="200"
          height="35"
          viewBox="0 0 200 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
      <h6 className="text-lg text-black font-normal leading-[150%] w-[90%] md:w-[55%] text-center">
        Our platform empowers you to advance your career with practical skills
        and real-world applications. Join a vibrant community that supports your
        learning journey.
      </h6>
    </div>
  );
};

export default Header;
