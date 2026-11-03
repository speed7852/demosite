import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This is an informational business website, so export it as static files
  // that can be hosted directly on Cloudflare Pages.
  output: "export",
  images: {
    // Required because Cloudflare Pages static hosting has no Next.js image server.
    unoptimized: true,
    remotePatterns: []
  }
};

export default nextConfig;
