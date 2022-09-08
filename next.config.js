/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    contentfulSpace: process.env.CONTENTFUL_SPACE,
    contentfulToken: process.env.CONTENTFUL_TOKEN
  }
};

module.exports = nextConfig
