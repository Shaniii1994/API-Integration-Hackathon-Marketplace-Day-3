/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    reactStrictMode: true,
    images: {
      domains: ['https://next-ecommerce-template-4.vercel.app/api/product'], // Add the external domain here
    },
};

export default nextConfig;
