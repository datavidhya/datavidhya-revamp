import { LoaderCircle } from "lucide-react";
import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-col items-center gap-3 ">
      <p>Loading..</p>
      <LoaderCircle size={48} absoluteStrokeWidth className="animate-spin" />
    </div>
  );
};

export default Shimmer;
