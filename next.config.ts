import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Siteyi statik HTML dosyalarına dönüştürür
  images: {
    unoptimized: true, // GitHub Pages resim optimizasyonu yapamadığı için bu gereklidir
  },
};

export default nextConfig;