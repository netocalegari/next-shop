/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    // domains: ["files.stripe.com"],
    remotePatterns: [
      {
        hostname: "files.stripe.com",
      },
    ],
  },
};

export default nextConfig;
