import type { NextConfig } from "next";

// Path: next.config.js
const nextConfig = {
  webpack: (config:NextConfig) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

export default nextConfig;
