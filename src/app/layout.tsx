import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DynamicTitleSetter from "@/components/revamp/DynamicTitleSetter";
import Footer from "@/components/revamp/Footer/Footer";
import NavigationBar from "@/components/revamp/hero/NavigationBar";
import Footer2 from "@/components/revamp/NEW/Footer2";
import NavigationBar2 from "@/components/revamp/NEW/Navigationbar2";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Data Vidhya",
  description: "best webite for Data Engineering courses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`body ${geistSans.variable} ${geistMono.variable} bg-black antialiased overflow-x-hidden`}
      >
        <NavigationBar2 />
        <DynamicTitleSetter />
        {children}
        <Footer2 />
      </body>
    </html>
  );
}
