/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    // Ne bloque PAS le build en cas d'erreurs eslint
    ignoreDuringBuilds: true,
  },
  // output: "standalone",
  // Optimize for production deployment
  experimental: {
    // swcMinify is now enabled by default in Next.js 13+
    // Removed deprecated swcMinify option
  },
  // Ensure proper asset prefix for standalone builds
  trailingSlash: false,
  // Configure for Azure deployment
  poweredByHeader: false,
};

export default nextConfig;
