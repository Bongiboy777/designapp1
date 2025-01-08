import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["cdn.builder.io","images.unsplash.com", "plus.unsplash.com", "lh3.googleusercontent.com"],
    remotePatterns: [{
      hostname:"lh3.googleusercontent.com",
      protocol:'https',
      pathname:"**"
    }]
  },
  
};

export default nextConfig;
