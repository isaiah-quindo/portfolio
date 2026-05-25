import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.byhuy.com",
            },
        ],
    },
};

export default nextConfig;
