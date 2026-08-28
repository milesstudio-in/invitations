import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/amritha',
        destination: 'https://client-amritha.vercel.app/',
        permanent: true, // or false if it's temporary
      },
    ];
  },
};

export default nextConfig;
