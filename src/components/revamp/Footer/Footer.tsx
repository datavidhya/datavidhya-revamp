import Link from "next/link";
import { Inter, Poppins } from "next/font/google";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Footer() {
  return (
    <footer className="w-full border-t pb-6 md:pb-20 pt-4 md:pt-6">
      <div className="container px-4 mx-auto md:px-6">
        <div className="-ml-4 flex justify-center md:justify-start ">
          <div className="flex items-center gap-2">
            <div className="relative h-12 w-12">
              <Image
                src="/revamp/logo.svg"
                alt="Data Vidhya Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className={`text-xl font-semibold text-[#333333] ${poppins.className}`}
            >
              Data Vidhya
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-4 sm:flex-row">
          <div
            className={`flex flex-wrap items-center justify-center md:justify-start  gap-6 gap-y-2 text-sm sm:mb-0 ${inter.className}`}
          >
            <span className="text-[14px] text-[#333333] underline">
              © 2025 Your Company. All rights reserved.
            </span>
            <Link
              href="/privacy-policy"
              className="text-[14px] text-[#333333] underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-[14px] text-[#333333] underline"
            >
              Terms of Service
            </Link>
            <button className="text-[14px] text-[#333333] underline">
              Cookies Settings
            </button>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-[#333333] hover:text-blue-600"
            >
              <FaFacebookF className="h-5 w-5" />
            </Link>
            <Link
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-[#333333] hover:text-pink-600"
            >
              <FaInstagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-[#333333] hover:text-blue-400"
            >
              <FaTwitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="text-[#333333] hover:text-blue-700"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </Link>
            <Link
              href="https://youtube.com"
              aria-label="YouTube"
              className="text-[#333333] hover:text-red-600"
            >
              <FaYoutube className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
