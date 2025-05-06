"use client";
import React, { useState, useEffect } from "react";

interface prop {
  number: number;
}
function Counter({ number }: prop) {
  const [count, setCount] = useState(0);

  const counter = (minimum: number, maximum: number) => {
    let currentCount = minimum;
    const intervalId = setInterval(() => {
      setCount(currentCount);
      currentCount++;
      if (currentCount > maximum) clearInterval(intervalId);
    }, 50);
  };

  useEffect(() => {
    counter(0, number);

    const resetIntervalId = setInterval(() => {
      counter(0, number);
    }, 50000);

    return () => clearInterval(resetIntervalId);
  }, []);

  return (
    <div>
      <h1 className="text-center text-[3rem] font-bold text-black max-sm:text-[2rem]">
        {count}K+
      </h1>
    </div>
  );
}

export default Counter;
