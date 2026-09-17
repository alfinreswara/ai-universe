import type { NextConfig } from 'next';
const config: NextConfig = {
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  experimental: { cpus: 2 },
  trailingSlash: true,
  images: { unoptimized: true },
};
export default config;
