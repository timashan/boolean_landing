import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/boolean-landing", // replace with your repo name
  assetPrefix: "/boolean-landing/",
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
