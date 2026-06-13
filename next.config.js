/** @type {import('next').NextConfig} */
const repo = 'real-estate-next-app';
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: { unoptimized: true },
};
module.exports = nextConfig;
