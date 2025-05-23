"use client";
import { JSX, useEffect, useState } from "react";
import Bubble from "@/components/revamp/hero/bubble";
export default function Hero() {
  const [bubbles, setBubbles] = useState<JSX.Element[]>([]);

  const imageUrls = [
    "/floatings/icon1.png",
    "/floatings/icon2.png",
    "/floatings/icon3.png",
    "/floatings/icon4.png",
    "/floatings/icon5.png",
    "/floatings/icon6.png",
  ];

  useEffect(() => {
    const newBubbles = new Array(10).fill(null).map((_, i) => {
      const size = Math.random() * 40 + 40;
      const dx = Math.random() * window.innerWidth - window.innerWidth / 2;
      const dy = Math.random() * window.innerHeight - window.innerHeight / 3;
      const image = imageUrls[i % imageUrls.length];

      return <Bubble key={i} size={size} dx={dx} dy={dy} image={image} />;
    });

    setBubbles(newBubbles);
  }, []);

  return (
    <div className="hidden md:block absolute z-20 top-0 left-0 w-screen h-[90vh] overflow-hidden ">
      {bubbles}
    </div>
  );
}
