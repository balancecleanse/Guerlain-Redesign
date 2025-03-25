import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    appDir: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    remotePatterns: [],
    unoptimized: true,
  },
};

export default nextConfig;
