import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NEXT_BASE_PATH ?? "",
  images: {
    unoptimized: true,
    remotePatterns: [
      new URL('https://assets.example.com/account123/**'),
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;