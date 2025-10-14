/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.tunem.com"], // combine all domains in a single array
  },
  async rewrites() {
    return [
      {
        source: "/songs/:path*",
        destination: "http://103.186.20.110:8002/storage/uploads/songs/:path*", // original server
      },
    ];
  },
};

module.exports = nextConfig;
