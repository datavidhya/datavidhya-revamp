import React from "react";
import { motion } from "framer-motion";
interface prop {
  icon: string;
}
const DataStackCard = ({ icon }: prop) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="w-[90%] md:w-[40%] lg:w-[30%] mx-auto rounded-[6px] border border-[#bfbfbf]/60 p-2  hover:shadow-xl"
    >
      <div className="h-6/6 w-full bg-red-00 overflow-hidden">
        <img src={icon} alt="" className="rounded-[6px]" />
      </div>
      {/* <div className="h-1/6 bg-red-00  flex items-center pl-2">Sample Text</div> */}
    </motion.div>
  );
};

export default DataStackCard;
