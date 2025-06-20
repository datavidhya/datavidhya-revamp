"use client";
import React from "react";

const ZeroToHeroAnimation = () => {
  return (
    <div className="flex h-[278px] w-full items-center justify-center gap-10 max-md:mb-10 max-md:h-[444px] max-md:flex-col max-md:gap-5">
      <p className="text-[32px] text-white dark:text-black">From Zero</p>
      <div className="flex h-[147px] w-[400px] items-center justify-between max-md:h-[400px] max-md:flex-col max-md:gap-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`animate-sequential-pulse h-full w-[82.5px] rounded-[17.6px] bg-[#303030] max-md:h-[65px] max-md:w-[120px]`}
            style={{ animationDelay: `${i * 1}s` }}
          />
        ))}
      </div>
      <p className="text-[32px] text-white dark:text-black">To Hero</p>
    </div>
  );
};

export default ZeroToHeroAnimation;
