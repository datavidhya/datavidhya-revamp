import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
  images: {
    domains: ["datavidhya-code-frontend.s3.ap-south-1.amazonaws.com"],
  },
};

export default nextConfig;
