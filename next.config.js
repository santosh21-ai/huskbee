/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "127.0.0.1",
      "picsum.photos",
      "source.unsplash.com",
      "randomuser.me",
    ],
  },
};

module.exports = nextConfig;
