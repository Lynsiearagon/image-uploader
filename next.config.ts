import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [new URL("https://api.artic.edu/api/v1/artworks")],
  },
};

export default nextConfig;
