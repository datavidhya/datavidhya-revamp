"use client";
import { JSX, useEffect, useState } from "react";
import { motion } from "framer-motion";

type BubbleProps = {
  size: number;
  image: string;
  dx: number;
  dy: number;
};

export function Bubble({ size, image, dx, dy }: BubbleProps) {
  return (
    <motion.div
      drag
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "50%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-40%, -40%)",
        opacity: 1,
        cursor: "grab",
      }}
      animate={{
        x: [
          dx,
          dx + Math.random() * 50,
          dx - Math.random() * 50,
          dx + Math.random() * 40,
          dx - Math.random() * 40,
          dx,
        ],
        y: [
          dy,
          dy + Math.random() * 50,
          dy - Math.random() * 50,
          dy + Math.random() * 40,
          dy - Math.random() * 40,
          dy,
        ],
        scale: [1, 1.2, 1.1, 1.3, 1, 1.1],
        opacity: [0.6, 1, 0.9, 1, 0.6, 0.7],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    />
  );
}

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
      const size = Math.random() * 40 + 30;
      const dx = Math.random() * window.innerWidth - window.innerWidth / 2;
      const dy = Math.random() * window.innerHeight - window.innerHeight / 2;
      const image = imageUrls[i % imageUrls.length];

      return <Bubble key={i} size={55} dx={dx} dy={dy} image={image} />;
    });

    setBubbles(newBubbles);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-screen h-[90vh] overflow-hidden ">
      {bubbles}
    </div>
  );
}
