/** @type {import('next').NextConfig} */

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const nextConfig = {
  reactStrictMode: true,
  testEnvironment: "jest-environment-jsdom",
};

module.exports = nextConfig;

export default createJestConfig(config);
