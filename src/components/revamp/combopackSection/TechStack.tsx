import React from "react";
interface prop {
  icons: string[];
}
export const IconGrid = ({ icons }: prop) => {
  return (
    <div className="max-w-[1200px] mx-auto justify-center flex gap-4 md:gap-8 flex-wrap m-2 md:m-4">
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon}
          alt={`icon-${index}`}
          className="h-6 md:h-auto object-contain bg-[#fff] hover:scale-[1.08] transition-all rounded-full px-6 py-2"
        />
      ))}
    </div>
  );
};
