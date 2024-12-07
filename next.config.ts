import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.notion.so',
        pathname: '/images/**',
      },
    ],
  },
  typescript:{
    ignoreBuildErrors:true
  },
};

export default nextConfig;
