"use client";
import React, { useState, useEffect } from "react";
import { LuX } from "react-icons/lu";

const SaleBanner = () => {
  const targetDate = new Date("2025-06-30T00:00:00"); // Target date
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [cross, setCross] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 10);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div
      className={`${
        cross ? "hidden" : "block"
      } inset-x-0 top-0 w-full bg-purple-200 `}
    >
      <div className="mx-auto max-w-8xl p-2">
        <div className="relative flex flex-col items-center justify-center gap-2 md:gap-12 sm:flex-row">
          <span className="flex gap-2 md:gap-6   justify-evenly px-4">
            <div className="flex w-full flex-row md:flex-co items-center gap-3 sm:w-auto ">
              <img
                src="/combopack/icon.gif"
                className="size-6 md:size-10"
                alt=""
              />
              <div className="text-center sm:text-left">
                <p className="font-medium text-sm max-md:text-xl lg:text-2xl mr-8 text-black ">
                  Don’t Miss Out!
                </p>
                <p className="text-xs max-md:text-[15px] lg:text-lg text-neutral-900">
                  Use code <strong className="mx-2">COMBO50</strong> at checkout
                  to unlock your special discount!
                </p>
              </div>
            </div>
            <div className="hidden md:flex w-full items-center justify-center gap-2 sm:w-auto md:mx-4 xl:mx-12">
              <TimeUnit value={timeLeft.days} label="DAYS" />:
              <TimeUnit value={timeLeft.hours} label="HOURS" />:
              <TimeUnit value={timeLeft.minutes} label="MINS" />:
              <TimeUnit value={timeLeft.seconds} label="SECS" />
            </div>
          </span>

          <div className="flex w-full flex-col items-center gap-1 sm:w-auto sm:flex-row md:gap-8">
            <a
              href="https://com.rpy.club/pdp/combo6?code=COMBO50"
              className="w-full rounded-[8px] bg-neutral-800 max-md:px-8 px-8 py-2.5 text-white transition-colors hover:bg-neutral-700 hover:scale-[1.05] sm:w-auto text-center text-sm max-md:text-lg xl:text-xl"
            >
              Buy Now
            </a>
            <span
              onClick={() => {
                setCross(true);
              }}
            >
              <LuX className="size-5 md:size-7" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="min-w-[40px] rounded bg-neutral-00 px-2 py-1 text-center">
      <div className="font-bold text-[#282828] md:text-xl xl:text-2xl">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-[16px] text-neutral-900">{label}</div>
    </div>
  </div>
);

export default SaleBanner;
