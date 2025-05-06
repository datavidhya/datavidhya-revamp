"use client";
import Link from "next/link";
import { useState } from "react";
import { Inter, Manrope } from "next/font/google";
import { motion } from "framer-motion";
import { ShineBorder } from "@/components/magicui/shine-border";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });
interface prop {
  href: string;
  text: string;
}
export const NavItems = ({ href, text }: prop) => {
  return (
    <Link
      href={href}
      className=" text-gray-800 transition-colors hover:text-purple-600"
    >
      {text}
    </Link>
  );
};

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative md:sticky top-0  md:top-3 z-50 mx-auto  h-[56px] max-w-[687px] rounded-2xl md:border  border-[#DBDBDB] bg-transparent md:bg-[#F0F0F07A]/50 px-4 md:shadow-sm backdrop-blur-sm md:px-8"
    >
      {" "}
      <ShineBorder
        shineColor={"#000000"}
        borderWidth={0.8}
        className="hidden md:block"
      />
      <div className="flex items-center justify-between md:justify-around">
        <Link href="/" className="flex items-center gap-2 ">
          <img
            src="/revamp/logo.svg"
            alt="Data Vidhya"
            width={36}
            height={36}
            className="-mt-0.5 size-[58px]"
          />
          <span
            className={`-ml-[16px] font-extrabold text-[#2B2B2B] ${manrope.className}`}
          >
            Data Vidhya
          </span>
        </Link>

        <div
          className={`hidden items-center ml-10 space-x-10 md:flex ${inter.className}`}
        >
          <NavItems href="/" text="Home" />
          <NavItems href="/courses" text="Courses" />
          <NavItems
            href="https://code.datavidhya.com/dashboard"
            text="Platform"
          />
          <NavItems href="/" text="Resources" />
        </div>

        <button
          className="text-gray-800 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className={`w-full mt-4 bg-gray-100 shadow-sm  border-[1px] border-neutral-400 backdrop-blur-xl rounded-xl space-y-3 py-2 md:hidden ${inter.className}`}
        >
          <Link
            href="/"
            className="block  px-4 py-2 font-medium text-gray-800 hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="block rounded-lg px-4 py-2 font-medium text-gray-800 hover:bg-gray-100"
          >
            Courses
          </Link>
          <Link
            href="/platform"
            className="block rounded-lg px-4 py-2 font-medium text-gray-800 hover:bg-gray-100"
          >
            Platform
          </Link>
          <Link
            href="/resources"
            className="block rounded-lg px-4 py-2 font-medium text-gray-800 hover:bg-gray-100"
          >
            Resources
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavigationBar;
