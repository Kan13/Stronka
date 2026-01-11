import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['10.254.132.154'],
  output: 'export',
  trailingSlash: true,
  basePath: '/Stronka',
};

export default nextConfig;
