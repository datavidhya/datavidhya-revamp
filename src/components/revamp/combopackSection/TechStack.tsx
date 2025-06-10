import React from "react";
interface prop {
  icons: string[];
}
export const IconGrid = ({ icons }: prop) => {
  return (
    <div className="max-w-[1200px] mx-auto justify-center flex gap-8 flex-wrap m-4">
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon}
          alt={`icon-${index}`}
          className="h-auto object-contain"
        />
      ))}
    </div>
  );
};

