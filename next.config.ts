import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configuración para GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/front-nextjs' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/front-nextjs/' : '',
};

export default nextConfig;
