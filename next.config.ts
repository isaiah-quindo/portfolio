import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ["www.byhuy.com"],
    },
    experimental: {
        scrollRestoration: false,
    },
};

export default nextConfig;
