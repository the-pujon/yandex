/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // Accept images from any hostname
                port: '', // No specific port
            },
        ],
    },
};

export default nextConfig;
