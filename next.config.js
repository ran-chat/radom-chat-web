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
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = config;
