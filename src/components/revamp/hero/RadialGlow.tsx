import React from "react";

/**
 * Renders a radial gradient that fades to transparent.
 * Props:
 * - fromColor (Tailwind color class, e.g. 'purple-100')
 * - size (any valid CSS size string like '400px', '100%', etc.)
 * - opacity (number 0–1 for mid-opacity fade)
 */
const RadialGlow = ({
  fromColor = "purple-100",
  size = "400px",
  opacity = 0.4,
}) => {
  // Get the actual RGB color value for Tailwind class
  const tailwindColors = {
    "purple-100": "rgba(233,213,255)",
    "blue-100": "rgba(219,234,254",
    "pink-100": "rgba(252,231,243",
    "indigo-100": "rgba(224,231,255",
    "green-100": "rgba(209,250,229",
    // Add more as needed
  };

  const baseColor = tailwindColors["purple-100"];

  const gradient = `radial-gradient(circle, ${baseColor}, ${baseColor}, ${baseColor}, ${baseColor.slice(
    0,
    -1
  )},${opacity}) 50%, ${baseColor.slice(0, -1)},0) 100%)`;

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "9999px",
        backgroundImage: gradient,
      }}
      className="flex items-center justify-center backdrop-blur-3xl"
    ></div>
  );
};

export default RadialGlow;
