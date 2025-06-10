"use client";
import Link from "next/link";
import { useState } from "react";
import { Inter, Manrope } from "next/font/google";
import { motion } from "framer-motion";
import SaleBanner from "./SaleBanner";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });
interface prop {
  href: string;
  text: string;
  textColor: string;
}
export const NavItems = ({ href, text, textColor }: prop) => {
  return (
    <Link href={href} className={` transition-colors hover:text-purple-600`}>
      <p className={`font-medium text-[16px] leading-5 ${textColor}`}>{text}</p>
    </Link>
  );
};

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <SaleBanner />
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-[1262px] bg-white mx-auto mt-3 px-4 h-[68px] "
      >
        {" "}
        <div className="flex items-center justify-between z-50">
          <Link href="/" className="flex items-center gap-2 ">
            <img
              src="/revamp/logo.svg"
              alt="Data Vidhya"
              width={36}
              height={36}
              className="-mt-0.5 size-[58px]"
            />
            <span
              className={`-ml-[16px] font-bold text-[#333333] leading-6 ${manrope.className}`}
            >
              Data Vidhya
            </span>
          </Link>

          <div
            className={`hidden items-center ml-10 space-x-10 md:flex z-50 ${inter.className}`}
          >
            <NavItems href="/" textColor="text-grey-800" text="Home" />
            <NavItems
              href="/courses"
              text="Courses"
              textColor="text-grey-800"
            />
            <NavItems
              textColor="text-grey-800"
              href="https://code.datavidhya.com/dashboard"
              text="Platform"
            />
            <NavItems
              href="/combopack"
              textColor=" text-grey-500"
              text="Combo Pack"
            />
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
            className={`w-full mt-4 bg-gradient-to-br from-white to-purple-200 shadow-sm mx-auto border border-neutral-400 rounded-xl py-2  md:hidden z-50 ${inter.className}`}
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
              href="/combopack"
              className="block rounded-lg px-4 py-2 font-medium text-purple-900 hover:bg-gray-100"
            >
              Combo Pack
            </Link>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default NavigationBar;
