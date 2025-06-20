import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface buttonInterface {
  href?: string;
  text?: string;
}

const BlueGlobalBtn = ({ href, text }: buttonInterface) => {
  return (
    <Link
      href={`${href}`}
      className="comboPackBtn relative flex h-[45px] w-[160px] items-center justify-center overflow-hidden rounded-[15px] bg-[#3C5BFF] text-white"
    >
      <span className="Blue_shadow-inner absolute inset-0 rounded-[15px] bg-[#3C5BFF]"></span>
      <span className="relative z-10 flex items-center ">
        {text}
        <span className="">
          <ChevronRight size={20} />
        </span>
      </span>
    </Link>
  );
};

export default BlueGlobalBtn;
