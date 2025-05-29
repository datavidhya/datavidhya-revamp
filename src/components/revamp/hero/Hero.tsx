"use client";
import { JSX, useEffect, useState, CSSProperties } from "react";

interface BubbleProps {
  size: number;
  dx: number;
  dy: number;
  image: string;
  animationDuration: number;
  floatDistance: number;
  horizontalDrift: number;
  delay: number;
  keyframeId: number;
}

function Bubble({
  size,
  dx,
  dy,
  image,
  animationDuration,
  floatDistance,
  horizontalDrift,
  delay,
  keyframeId,
}: BubbleProps) {
  const bubbleStyle: CSSProperties = {
    position: "absolute",
    left: `${dx}px`,
    top: `${dy}px`,
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
    background: `url(${image}) center/cover`,
    opacity: Math.random() * 0.4 + 0.8,
    animation: `
      float-${keyframeId} ${animationDuration}s ease-in-out infinite,
      linear infinite,
      
      fade-in 2s ease-out
    `,
    animationDelay: `${delay}s`,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(1px)",
  };
  return (
    <>
      <style jsx>{`
        @keyframes float-${keyframeId} {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          25% {
            transform: translateY(-${floatDistance * 0.7}px)
              translateX(${horizontalDrift * 0.5}px) scale(1.05);
          }
          50% {
            transform: translateY(-${floatDistance}px)
              translateX(${horizontalDrift}px) scale(0.95);
          }
          75% {
            transform: translateY(-${floatDistance * 0.3}px)
              translateX(${horizontalDrift * 0.9}px) scale(1.02);
          }
        }

      
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: ${bubbleStyle.opacity};
            transform: scale(1);
          }
        }
      `}</style>
      <div style={bubbleStyle} className="bubble-element" />
    </>
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
    const generateBubbles = () => {
      const containerWidth = window.innerWidth * 1;
      const containerHeight = window.innerHeight * 0.9; // 90vh

      const newBubbles = new Array(8).fill(null).map((_, i) => {
        const size = Math.random() * 50 + 30;

        const startX = Math.random() * (containerWidth - size);
        const startY = Math.random() * (containerHeight - size);

        const image = imageUrls[i % imageUrls.length];

        const animationDuration = Math.random() * 8 + 8;
        const floatDistance = Math.random() * 60 + 40;
        const horizontalDrift = (Math.random() - 0.3) * 80; // -40 to 40px horizontal drift

        const delay = Math.random() * 4;
        const keyframeId = Math.floor(Math.random() * 10000) + i;
        return (
          <Bubble
            key={i}
            size={size}
            dx={startX}
            dy={startY}
            image={image}
            animationDuration={animationDuration}
            floatDistance={floatDistance}
            horizontalDrift={horizontalDrift}
            delay={delay}
            keyframeId={keyframeId}
          />
        );
      });

      setBubbles(newBubbles);
    };

    generateBubbles();

    const handleResize = () => {
      generateBubbles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="hidden md:block absolute -z-20 top-0 left-0 w-screen h-[90%] overflow-hidden pointer-events-none">
      {bubbles}
    </div>
  );
}
