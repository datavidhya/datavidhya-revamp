"use client";
import React, { useState } from "react";
// import { courseCovered, FAQsData } from "../../../../context/faqData";
import { Roboto, Inter } from "next/font/google";
import FaqsAccordion from "./faqsAccordion";
import { FAQsData } from "@/context/GlobalData";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const inter = Inter({
  subsets: ["latin"],
});

const FAQsSection = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const handleAccordionToggle = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  return (
    <div className="w-full bg-[#F7F7FB]  py-6 md:py-28">
      <div className="faqWidht z-40 mx-auto max-md:my-4 max-md:w-[90%]">
        <h2
          className={`faqheading mx-auto   text-center text-[48px] font-bold text-[#000000] ${roboto.className}`}
        >
          FAQs
        </h2>
        <p
          className={`mx-auto w-full text-center text-[18px] text-[#000000] ${roboto.className}`}
        >
          Find answers to your most pressing questions about our data
          engineering courses and platform.
        </p>
        <div className="mx-auto mt-[65px] max-md:w-[98%] max-lg:w-3/4 lg:w-3/5">
          <div className="mx-auto flex w-full max-lg:flex-col">
            <div className="mt-2 size-full max-lg:w-full max-sm:mt-0">
              {FAQsData.map((item: any, index: any) => (
                <FaqsAccordion
                  key={index}
                  title={item.title}
                  content={item.content}
                  border={index !== 5}
                  isOpen={openAccordion === item.title}
                  onToggle={() => handleAccordionToggle(item.title)}
                />
              ))}
            </div>
          </div>
        </div>
        <h2
          className={`text-center text-[32px] font-bold text-[#000000] ${inter.className} mt-[60px]`}
        >
          Still have questions?
        </h2>
        <p
          className={`text-center text-[18px] font-normal text-[#000000] ${roboto.className} mt-[10px]`}
        >
          We&apos;re here to help you!
        </p>
        <div className=" mt-5 flex w-full justify-center">
          <button
            className={`flex items-center justify-center rounded-[10px] bg-[#282828] font-semibold text-[#FFFFFF] ${inter.className} h-[46px] w-[139px]`}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQsSection;
