/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.blenheimchalcot.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'exponentia.ai',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fospha.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'agelysis.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
