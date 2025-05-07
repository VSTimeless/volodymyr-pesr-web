/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/volodymyr-pesr-web' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/volodymyr-pesr-web/' : '',
}

export default nextConfig
