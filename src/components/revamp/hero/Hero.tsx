"use client";
import { useEffect, useState, JSX } from "react";

interface BubbleProps {
  size: number;
  image: string;
  animationDuration: number;
  delay: number;
  keyframeId: number;
}

function Bubble({
  size,
  image,
  animationDuration,
  delay,
  keyframeId,
}: BubbleProps) {
  const opacity = Math.random() * 0.2 + 0.6; 
  const bubbleStyle = {
    position: "absolute" as const,
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
    background: `url(${image}) center/cover`,
    opacity: opacity,
    animation: `planetary-orbit-${keyframeId} ${animationDuration}s ease-in-out infinite ${delay}s, fade-in 12s ease-out`,
    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(2px)",
    zIndex: 1,
    // filter: "brightness(1.1) saturate(1.2)",
  };

  // Create dynamic planetary orbit keyframes
  useEffect(() => {
    const styleId = `planetary-keyframes-${keyframeId}`;

    // Remove existing style if it exists
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
      existingStyle.remove();
    }

    const style = document.createElement("style");
    style.id = styleId;

    // Create a highly curved elliptical orbit with extreme depth effect
    const createEllipticalPoint = (angle: number) => {
      // Use parametric ellipse equations for smooth curved motion
      const radiusX = 45; // Horizontal radius (percentage)
      const radiusY = 35; // Vertical radius (percentage) - much bigger for dramatic curve

      const x = 50 + radiusX * Math.cos(angle); // Center at 50% + ellipse
      const y = 25 + radiusY * Math.sin(angle); // Center lower for better visual

      return {
        left: `${x}%`,
        bottom: `${y}%`,
      };
    };

    // Create 5 key points along the elliptical orbit for smooth animation
    const point1 = createEllipticalPoint(0); // Right side - closest
    const point2 = createEllipticalPoint(Math.PI / 2); // Top - farthest
    const point3 = createEllipticalPoint(Math.PI); // Left side - closest
    const point4 = createEllipticalPoint((3 * Math.PI) / 2); // Bottom - medium distance
    const point5 = createEllipticalPoint(2 * Math.PI); // Back to start

    style.textContent = `
      @keyframes planetary-orbit-${keyframeId} {
        0% {
          left: ${point1.left};
          bottom: ${point1.bottom};
          transform: translateX(-50%) translateY(50%) scale(1.2);
          opacity: ${opacity * 1.0};
          filter: brightness(1) saturate(1) blur(0px);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
        }
        
        25% {
          left: ${point2.left};
          bottom: ${point2.bottom};
          transform: translateX(-50%) translateY(50%) scale(0.3);
          opacity: ${opacity * 0.4};
          filter: brightness(0.7) saturate(0.9) blur(1.5px);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }
        
        50% {
          left: ${point3.left};
          bottom: ${point3.bottom};
          transform: translateX(-50%) translateY(50%) scale(1.2);
          opacity: ${opacity * 1.0};
          filter: brightness(1) saturate(1) blur(0px);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
        }
        
        75% {
          left: ${point4.left};
          bottom: ${point4.bottom};
          transform: translateX(-50%) translateY(50%) scale(0.8);
          opacity: ${opacity * 0.7};
          filter: brightness(0.9) saturate(1.1) blur(0.8px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }
        
        100% {
          left: ${point5.left};
          bottom: ${point5.bottom};
          transform: translateX(-50%) translateY(50%) scale(1.2);
          opacity: ${opacity * 1.0};
          filter: brightness(1) saturate(1) blur(0px);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
        }
      }
      
      @keyframes fade-in {
        from {
          opacity: 0;
          transform: translateX(-50%) translateY(50%) scale(0.2);
          filter: blur(2px);
        }
        to {
          opacity: ${opacity};
          transform: translateX(-50%) translateY(50%) scale(1);
          filter: blur(0px);
        }
      }
    `;

    document.head.appendChild(style);

    // Cleanup function
    return () => {
      const styleToRemove = document.getElementById(styleId);
      if (styleToRemove) {
        styleToRemove.remove();
      }
    };
  }, [keyframeId, opacity]);

  return <div style={bubbleStyle} className="bubble-element" />;
}

export default function Hero() {
  const [bubbles, setBubbles] = useState<JSX.Element[]>([]);

  // Planetary themed gradient bubbles with cosmic colors
  const imageUrls = [
    "/floatings/icon1.png",
    "/floatings/icon2.png",
    "/floatings/icon3.png",
    "/floatings/icon4.png",
    "/floatings/icon6.png",
    "/floatings/icon5.png",
  ];

  useEffect(() => {
    const generatePlanets = () => {
      // Create 8 planets following the same orbital path
      const newBubbles = Array.from({ length: 8 }, (_, i) => {
        const baseSize = Math.random() * 15 + 35; // 35-50px base size
        const image = imageUrls[i % imageUrls.length];

        // Slower, more calm planetary motion (15-18 seconds per orbit)
        const baseDuration = 16; // 16 seconds base
        const animationDuration = baseDuration + (Math.random() - 0.5) * 10; // 14-18 seconds

        // Planets follow each other in the same orbit with spacing
        // Each planet starts 2.5 seconds after the previous one for smooth spacing
        const delay = i * 2.5;

        const keyframeId = Math.floor(Math.random() * 10000) + i + Date.now();

        return (
          <Bubble
            key={`planet-${i}-${Date.now()}`}
            size={baseSize}
            image={image}
            animationDuration={animationDuration + 15}
            delay={delay}
            keyframeId={keyframeId}
          />
        );
      });

      setBubbles(newBubbles);
    };

    generatePlanets();

    const handleResize = () => {
      generatePlanets();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="hidden md:block absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      style={{ zIndex: -20 }}
    >
      {/* Highly curved elliptical orbital path visualization */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <ellipse
            cx="50%"
            cy="25%"
            rx="45%"
            ry="35%"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4,12"
          />
        </svg>
      </div>

     
      <div className="relative w-full h-full">{bubbles}</div>
    </div>
  );
}
