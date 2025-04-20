import React from "react";

export const Button = ({ text }: { text: string }) => {
  return (
    <button className="w-full h-1/4 flex items-center justify-center">
      {text}{" "}
    </button>
  );
};

const mobileButtons = () => {
  return (
    <div className="">
      <Button text="Choose Your Path" />
      <Button text="Solve Questions" />
      <Button text="" />
      <Button text="" />
    </div>
  );
};

export default mobileButtons;
