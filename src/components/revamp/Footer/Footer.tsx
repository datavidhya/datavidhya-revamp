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
    <footer className="w-full border-t bg-white px-4 py-8 md:py-12">
      <div className="flex flex-col ">
        {" "}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo + Social */}
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
                className={`text-xl font-semibold text-[#333333] ${poppins.className}`}
              >
                Data Vidhya
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Learn Data Engineering with ease and efficiency.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-blue-600"
              >
                <FaFacebookF className="h-5 w-5 text-[#333333]" />
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-pink-600"
              >
                <FaInstagram className="h-5 w-5 text-[#333333]" />
              </Link>
              <Link
                href="https://twitter.com"
                aria-label="Twitter"
                className="hover:text-blue-400"
              >
                <FaTwitter className="h-5 w-5 text-[#333333]" />
              </Link>
              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="hover:text-blue-700"
              >
                <FaLinkedinIn className="h-5 w-5 text-[#333333]" />
              </Link>
              <Link
                href="https://youtube.com"
                aria-label="YouTube"
                className="hover:text-red-600"
              >
                <FaYoutube className="h-5 w-5 text-[#333333]" />
              </Link>
            </div>
          </div>

          {/* Support Links */}
          <div className="flex flex-col md:flex-row justify-between">
            <div className={`${inter.className}`}>
              <h2 className="text-[16px] font-semibold text-neutral-500 mb-2 mt-6">
                SUPPORT
              </h2>
              <ul className="space-y-1 text-sm text-[#333333]">
                <li>FAQ</li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* Company Links */}
            <div className={`${inter.className}`}>
              <h2 className="text-[16px] font-semibold text-neutral-500 mb-2 mt-6">

                COMPANY
              </h2>
              <ul className="space-y-1 text-sm text-[#333333]">
                <li>Home</li>
                <li>About Us</li>
                <li>Testimonials</li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className={`${inter.className} flex flex-col gap-2 text-sm`}>
              <h2 className="text-[16px] font-semibold text-neutral-500 mb-2 mt-6">
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
          <span className="text-[#333333]">
            © 2025 Data Vidhya. All rights reserved.
          </span>
        </div>
      </div>
    </footer>

    // <footer className="w-full border-t pb-6 md:pb-20 pt-4 md:pt-6 flex items-center ">
    //   <div className="container px-4 mx-auto md:px-6 flex justify-around">
    //     <div className="-ml-4 flex flex-col justify-center md:justify-start ">
    //       <div className="flex items-center gap-2">
    //         <div className="relative h-12 w-12">
    //           <Image
    //             src="/revamp/logo.svg"
    //             alt="Data Vidhya Logo"
    //             fill
    //             className="object-contain"
    //             priority
    //           />
    //         </div>
    //         <span
    //           className={`text-xl font-semibold text-[#333333] ${poppins.className}`}
    //         >
    //           Data Vidhya
    //         </span>
    //       </div>
    //       <p className="w-full md:w-[500px] mb-4">
    //         Learn Data Engineering with ease and efficiency.
    //       </p>
    //       <div className="flex items-center gap-4 mt-4 md:mt-0">
    //         <Link
    //           href="https://facebook.com"
    //           aria-label="Facebook"
    //           className="text-[#333333] hover:text-blue-600"
    //         >
    //           <FaFacebookF className="h-5 w-5" />
    //         </Link>
    //         <Link
    //           href="https://instagram.com"
    //           aria-label="Instagram"
    //           className="text-[#333333] hover:text-pink-600"
    //         >
    //           <FaInstagram className="h-5 w-5" />
    //         </Link>
    //         <Link
    //           href="https://twitter.com"
    //           aria-label="Twitter"
    //           className="text-[#333333] hover:text-blue-400"
    //         >
    //           <FaTwitter className="h-5 w-5" />
    //         </Link>
    //         <Link
    //           href="https://linkedin.com"
    //           aria-label="LinkedIn"
    //           className="text-[#333333] hover:text-blue-700"
    //         >
    //           <FaLinkedinIn className="h-5 w-5" />
    //         </Link>
    //         <Link
    //           href="https://youtube.com"
    //           aria-label="YouTube"
    //           className="text-[#333333] hover:text-red-600"
    //         >
    //           <FaYoutube className="h-5 w-5" />
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="w-full flex  items-center justify-around gap-4 pt-4 sm:flex-row">
    //     <div
    //       className={`w-full flex flex-col items-center justify-center md:justify-start  gap-6 gap-y-2 text-sm sm:mb-0 ${inter.className}`}
    //     >
    //       <span className="text-[14px] text-[#333333] ">
    //         © 2025 Your Company. All rights reserved.
    //       </span>
    //       <Link
    //         href="/privacy-policy"
    //         className="text-[14px] text-[#333333] "
    //       >
    //         Privacy Policy
    //       </Link>
    //       <Link
    //         href="/terms-of-service"
    //         className="text-[14px] text-[#333333] "
    //       >
    //         Terms of Service
    //       </Link>
    //       <button className="text-[14px] text-[#333333] ">
    //         Cookies Settings
    //       </button>
    //     </div>
    //   </div>
    //   <div className={`${inter.className}`}>
    //     <h2 className={`text-[16px] font-semibold text-neutral-500`}>
    //       SUPPORT
    //     </h2>
    //     <p>FAQ</p>
    //     <p>Contact Us</p>
    //   </div>
    //   <div className={`${inter.className}`}>
    //     <h2 className={` text-[16px] font-semibold text-neutral-500`}>
    //       COMPANY
    //     </h2>
    //     <p>Home</p>
    //     <p>About Us</p>
    //     <p>Testimonials</p>
    //   </div>
    // </footer>
  );
}
