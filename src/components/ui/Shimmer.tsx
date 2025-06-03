import React from "react";

const Shimmer = () => {
  return (
    <div className="flex gap-3 mx-auto justify-center">
      <div className="shimmer-wrapper  ">
        <div className="shimmer"></div>
      </div>{" "}
      <div className="shimmer-wrapper hidden md:block ">
        <div className="shimmer"></div>
      </div>{" "}
      <div className="shimmer-wrapper hidden md:block ">
        <div className="shimmer"></div>
      </div>
    </div>
  );
};

export default Shimmer;
