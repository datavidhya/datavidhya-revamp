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

export default function Footer2() {
  return (
    <footer className="w-full border-t bg-black px-4 py-8 md:py-12">
      <div className="flex flex-col ">
        {" "}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
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
                className={`text-xl font-semibold text-[#eee] ${poppins.className}`}
              >
                Data Vidhya
              </span>
            </div>
            <p className="text-sm text-gray-100">
              Learn Data Engineering with ease and efficiency.
            </p>
            <div className="flex gap-4">
              <Link
                target="_blank"
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-blue-600"
              >
                <FaFacebookF className="h-5 w-5 text-[#333333]" />
              </Link>
              <Link
                target="_blank"
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-pink-600"
              >
                <FaInstagram className="h-5 w-5 text-[#333333]" />
              </Link>
              <Link
                target="_blank"
                href="https://twitter.com"
                aria-label="Twitter"
                className="hover:text-blue-400"
              >
                <FaTwitter className="h-5 w-5 text-[#333333]" />
              </Link>
              <Link
                target="_blank"
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="hover:text-blue-700"
              >
                <FaLinkedinIn className="h-5 w-5 text-[#333333]" />
              </Link>
              <Link
                target="_blank"
                href="https://youtube.com"
                aria-label="YouTube"
                className="hover:text-red-600"
              >
                <FaYoutube className="h-5 w-5 text-[#333333]" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between">
            <div className={`${inter.className}`}>
              <h2 className="text-[16px] font-semibold text-neutral-100 mb-2 mt-6">
                SUPPORT
              </h2>
              <ul className="space-y-1 text-sm text-[#eee]">
                <li>FAQ</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className={`${inter.className}`}>
              <h2 className="text-[16px] font-semibold text-neutral-100 mb-2 mt-6">
                COMPANY
              </h2>
              <ul className="space-y-1 text-sm text-[#eee]">
                <li>Home</li>
                <li>About Us</li>
                <li>Testimonials</li>
              </ul>
            </div>

            <div className={`${inter.className} flex flex-col gap-2 text-sm`}>
              <h2 className="text-[16px] font-semibold text-neutral-100 mb-2 mt-6">
                LEGAL
              </h2>

              <Link href="/privacy-policy" className="text-[#333333] ">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-[#333333] ">
                Terms of Service
              </Link>
              {/* <button className="text-[#333333] ">Cookies Settings</button> */}
            </div>
          </div>
        </div>
        <hr className="h-1 w-full my-8 " />
        <div className="flex items-center justify-center">
          {" "}
          <span className="text-[#eee]">
            © 2025 Data Vidhya. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
