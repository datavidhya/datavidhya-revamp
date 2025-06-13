import React from "react";
import { Inter } from "next/font/google";
import ContactForm from "@/components/ui/ContactForm";
const inter = Inter({ subsets: ["latin"] });

const YoutubeSection = () => {
  return (
    <div className="my-16 mt-40">
      <h1 className="text-2xl md:text-5xl font-semibold md:font-bold text-center text-black">
        Why you should buy this course ?
      </h1>

      <div className="w-[90%] max-w-[1260px] mx-auto my-10 md:my-16">
        <div className="relative w-full h-0 pb-[56.25%] max-h-[400px] overflow-hidden rounded-xl">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-xl"
          />
        </div>
      </div>
         <div className="w-full px-4 flex flex-col md:flex-row justify-center gap-1.5 md:gap-4 mb-12 md:mb-12 mt-4 items-center">
        <a
          href={"/combopack"}
          className={`w-full md:w-auto text-center rounded-[12px] bg-gradient-to-r from-[#4044ED] to-[#B832E9] px-6 py-2.5 font-normal md:font-semibold text-white transition-transform hover:scale-105 sm:py-3 ${inter.className}`}
        >
          Buy Now
        </a>{" "}
        <a
          href={"https://code.datavidhya.com/"}
          className={`w-full md:w-auto text-center rounded-[12px] bg-[#2E2E2E] px-6 py-2.5 font-normal md:font-semibold text-white transition-transform hover:scale-105  sm:py-3 ${inter.className}`}
        >
          Have a Question ? Contact US
        </a>
        <ContactForm />
      </div>
    </div>
  );
};

export default YoutubeSection;
