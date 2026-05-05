import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "sacredtrance.ca" }],
        destination: "https://trancemedicine.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.sacredtrance.ca" }],
        destination: "https://trancemedicine.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
