/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co', 'imgur.com'], // Add the hostname of your image source here
  },
};

export default nextConfig;
