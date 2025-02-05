import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  experimental: {
    serverActions: {
      bodySizeLimit: "20mb",
      allowedOrigins: ["192.168.4.12"],
    },
  },
};

export default nextConfig;
