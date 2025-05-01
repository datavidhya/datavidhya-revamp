import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-center pt-10">
      <p className=" hidden md:block text-[16px] text-[#8B90A1] font-bold my-6 mt-10">
        PLATFORM
      </p>
      <h1 className="text-3xl md:text-5xl text-black text-center font-bold leading-[120%]">
        Solve Leet Code like{" "}<br className="hidden md:block"/>
        <span className=" relative inline-block text-3xl md:text-5xl text-black font-bold mb-[30px]">
          problems
          <svg
            className="absolute -bottom-5 left-1/2 w-full max-w-[120px] -translate-x-1/2 sm:-bottom-6 md:-bottom-3 sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px]"
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
      </h1>
      <h6 className="text-[16px] md:text-lg text-black font-normal leading-[150%] w-[80%] md:w-[80%] text-center">
        Our platform empowers you to advance your career with practical skills
        and real-world applications.{" "}
        <span className="hidden md:block">
          Join a vibrant community that supports your learning journey.
        </span>
      </h6>
    </div>
  );
};

export default Header;
