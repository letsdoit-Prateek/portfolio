/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com'],
  },
  eslint: {
    // Ne bloque PAS le build en cas d'erreurs eslint
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  // Optimize for production deployment
  experimental: {
    // Enable SWC minification for better performance
    swcMinify: true,
  },
  // Ensure proper asset prefix for standalone builds
  trailingSlash: false,
  // Configure for Azure deployment
  poweredByHeader: false,
};

module.exports = nextConfig;
