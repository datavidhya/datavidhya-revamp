"use client";
import React, { useState, useEffect } from "react";
import { X, Copy, Check } from "lucide-react";

const SaleBanner = () => {
  const targetDate = new Date("2025-05-31T00:00:00"); // Target date
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        const milliseconds = Math.floor((difference % 1000) / 10);

        setTimeLeft({ days, hours, minutes, seconds, milliseconds });
      } else {
        // Timer expired
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0,
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 10);
    return () => clearInterval(timer);
  }, [targetDate]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText("COMBO50");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className=" inset-x-0 top-0 z-50 w-full bg-neutral-100 ">
      <div className="mx-auto max-w-8xl p-2">
        <div className="relative flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Left section with penguin and main message */}
          <span className="flex gap-6   justify-evenly px-4">
            {" "}
            <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
              <div className="animate-bounce text-2xl hidden md:flex">🐧</div>
              <div className="text-center sm:text-left">
                <p className="font-medium text-black ">Save 50%</p>
                <p className="text-sm text-neutral-400 hidden md:flex">
                  Ends in:
                </p>
              </div>
            </div>
            {/* Timer */}
            <div className=" hidden md:flex w-full items-center justify-center space-x-3 sm:w-auto ">
              <TimeUnit value={timeLeft.days} label="Day" />
              <TimeUnit value={timeLeft.hours} label="Hours" />
              <TimeUnit value={timeLeft.minutes} label="Mins" />
              <TimeUnit value={timeLeft.seconds} label="Sec" />
              <TimeUnit value={timeLeft.milliseconds} label="Ms" />
            </div>
          </span>

          {/* Coupon section */}
          <div className="flex w-full flex-col items-center gap-1 md:gap-3 sm:w-auto sm:flex-row">
            <div
              onClick={handleCopyCode}
              className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded bg-purple-400 px-4 py-1.5 transition-colors hover:bg-purple-500/85 sm:w-auto"
            >
              <span className="text-sm text-black">Use code:</span>
              <span className="font-mono font-light md:font-medium text-neutral-900">
                COMBO50
              </span>
              {copied ? (
                <Check className="size-4 text-green-400" />
              ) : (
                <Copy className="size-4 text-neutral-700 transition-colors group-hover:text-white" />
              )}
            </div>

            <a
              href="https://com.rpy.club/pdp/combo6?code=COMBO50"
              className="w-full rounded bg-neutral-800 px-6 py-1.5 text-white transition-colors hover:bg-neutral-700 hover:scale-[1.05] sm:w-auto text-center"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="min-w-[40px] rounded bg-neutral-300 px-2 py-1 text-center">
      <div className="font-semibold text-black">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-xs text-neutral-900">{label}</div>
    </div>
  </div>
);

export default SaleBanner;
