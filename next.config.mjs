/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        WEATHER_API_KEY: process.env.API_KEY,
    },
};

export default nextConfig;
