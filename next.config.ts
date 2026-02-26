import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nextlevelchess.com",
      },
    ],
  },
};

export default nextConfig;
