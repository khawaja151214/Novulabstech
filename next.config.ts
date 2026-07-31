import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // --- Compiler Optimizations ---
  experimental: {
    // Treeshake large icon/util packages to only include what is actually used
    optimizePackageImports: ['bootstrap-icons'],
  },

  // --- External packages that run on the server (moved from experimental in Next.js 15) ---
  serverExternalPackages: [],

  // --- Image Optimization ---
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
    // Serve modern WebP/AVIF formats for smaller payloads
    formats: ['image/avif', 'image/webp'],
  },

  // --- HTTP Headers ---
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/(.*)',
        headers: [
          // Preconnect hints to CDN (reduces DNS lookup + TLS handshake time)
          {
            key: 'Link',
            value: '<https://cdn.jsdelivr.net>; rel=preconnect, <https://fonts.gstatic.com>; rel=preconnect; crossorigin',
          },
          // Security headers for Lighthouse Best Practices
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
      {
        // Cache static assets for 1 year (images, fonts, icons)
        source: '/:path*.png',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/:path*.jpg',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/:path*.svg',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/:path*.ico',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/:path*.woff2',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },

  // Gzip/Brotli compress responses
  compress: true,
};

export default nextConfig;
