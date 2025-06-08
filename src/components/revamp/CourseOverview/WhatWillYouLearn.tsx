import React from "react";
import { SlCheck } from "react-icons/sl";

interface prop {
  text: string;
}
const Items = ({ text }: prop) => {
  return (
    <div className=" w-1/2 flex">
      <SlCheck color="purple-400" /> <p>{text}</p>
    </div>
  );
};
const WhatWillYouLearn = () => {
  return (
    <div>
      <p>What Will You Learn ?</p>
      <div>
        <Items text="" />
        <Items text="" />
        <Items text="" />
        <Items text="" />
        <Items text="" />
        <Items text="" />
      </div>
    </div>
  );
};

export default WhatWillYouLearn;
