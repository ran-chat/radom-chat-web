/** @type {import('next').NextConfig} */

const config = {
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://occu.shop/:path*',
      },
    ];
  },
  images: {
    domains: ['hellotaehwan.s3.ap-northeast-2.amazonaws.com'],
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = config;
