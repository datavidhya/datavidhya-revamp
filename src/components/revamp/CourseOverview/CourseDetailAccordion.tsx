import React from "react";
import { Roboto } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionProps {
  title: string;
  content: string;
  content2?: string;
  content3?: string;
  content4?: string;
  content5?: string;
  content6?: string;
  time: string;
  time2: string;
  time3: string;
  time4: string;
  time5: string;
  time6: string;
  mins: number;
  Sections: number;
  isOpen: boolean;
  border?: boolean;
  onToggle: () => void;
}

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const CourseDetailAccordion: React.FC<AccordionProps> = ({
  title,
  content,
  content2,
  content3,
  content4,
  content5,
  content6,
  time,
  time2,
  time3,
  time4,
  time5,
  time6,
  mins,
  Sections,
  isOpen,
  border,
  onToggle,
}) => {
  const handleClick = () => {
    onToggle();
  };

  return (
    <div
      className={`  border rounded-2xl border-[#D7D7D7] bg-[#353535] md:my-5 overflow-hidden`}
    >
      <div
        className={`flex cursor-pointer items-center justify-between gap-3 py-1.5 px-2 md:px-6 ${
          isOpen ? "dark:bg-white" : ""
        }`}
        onClick={handleClick}
      >
        <span className="flex items-center gap-2 md:gap-6">
          <motion.div
            className="text-lg md:text-[28px] text-[#fff] flex  items-center"
            animate={{ rotate: isOpen ? 0 : 180 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {isOpen ? "-" : "+"}
          </motion.div>
          <h5
            className={`py-4 text-[20px] font-medium text-[#fff] max-md:py-2 max-md:text-[14px] ${roboto.className}`}
          >
            {title}
          </h5>
        </span>
        <div className="flex flex-row gap-2 text-white">
          <p className="text-xs md:text-lg">{Sections} Sections</p>
          <p className="text-xs md:text-lg hidden md:block">{mins} Minutes</p>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-neutral-200"
          >
            <div className="w-full pl-2 md:px-12 pt-4 rounded-b-[2px] px-4 pb-3 text-[14px] md:text-[16px] font-medium leading-6 md:leading-8 text-[#000] shadow-md ">
              <span className="w-full flex justify-between">
                {" "}
                <p> {content}</p>
                <p> {time} </p>
              </span>
              <span className="w-full flex justify-between">
                {" "}
                <p className="flex items-center gap-2">{content2}</p>
                <p> {time2} </p>
              </span>
              <span className="w-full flex justify-between">
                <p> {content3}</p>
                <p> {time3} </p>
              </span>
              <span className="w-full flex justify-between">
                <p> {content4}</p>
                <p> {time4} </p>
              </span>
              <span className="w-full flex justify-between">
                {" "}
                <p> {content5}</p>
                <p> {time5} </p>
              </span>
              <p className="w-full   flex justify-between">
                <p> {content6}</p>
                <p> {time6} </p>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CourseDetailAccordion;
