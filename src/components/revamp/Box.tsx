import Link from "next/link";
import React from "react";
interface prop {
  href: string;
  text: string;
  bgColor: string;
}
const Box: React.FC<prop> = ({ bgColor, href, text }: prop) => {
  return (
    <Link href={href}>
      {" "}
      <div
        className={`h-40 w-48 flex items-center justify-center ${bgColor} inset-2 border border-neutral-400 text-center text-neutral-800 text-2xl font-semibold shadow-lg rounded-lg py-8 px `}
      >
        {text}
      </div>
    </Link>
  );
};
export default Box;
