import React from "react";

const CourseShimmer = () => {
  return (
    <div className="flex gap-3 mx-auto justify-center mt-6 md:mt-16">
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

export default CourseShimmer;
