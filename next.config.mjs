/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'scontent.fdac14-1.fna.fbcdn.net',
            port: '',
            },
        ]
    }
};

export default nextConfig;
