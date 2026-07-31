import { MetadataRoute } from 'next';

/**
 * Generates the robots.txt file dynamically.
 * Accessible automatically at /robots.txt.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://www.novulabs.net/sitemap.xml',
  };
}
