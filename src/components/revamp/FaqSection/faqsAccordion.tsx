import React from "react";
import { Roboto } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  border?: boolean;
  onToggle: () => void;
}

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const FaqsAccordion: React.FC<AccordionProps> = ({
  title,
  content,
  isOpen,
  border,
  onToggle,
}) => {
  const handleClick = () => {
    onToggle();
  };

  return (
    <div
      className={`my-4 rounded-[16px] border border-[#D7D7D7] bg-white max-md:my-2.5`}
    >
      <div
        className={`flex cursor-pointer items-center justify-between px-4 ${
          isOpen ? "dark:bg-gray-100" : ""
        }`}
        onClick={handleClick}
      >
        <h5
          className={`py-4 text-[18px] font-bold text-[#333333] max-md:py-2 max-md:text-[14px] ${roboto.className}`}
        >
          {title}
        </h5>
        <div>
          <motion.div
            className="text-[28px] text-[#7C7C7C]"
            animate={{ rotate: isOpen ? 0 : 180 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {isOpen ? "-" : "+"}
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="w-full rounded-b-[20px] px-4 pb-3 text-[14px] md:text-[16px] leading-6 md:leading-8 text-[#7C7C7C] shadow-md dark:bg-gray-100">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqsAccordion;
