import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages alt klasörde çalıştığı için bu iki satır şart:
  basePath: "/alp-s-portfolio",
  assetPrefix: "/alp-s-portfolio/",
};

export default nextConfig;