import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "k2inked.pl" }],
        destination: "https://www.k2inked.pl/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
