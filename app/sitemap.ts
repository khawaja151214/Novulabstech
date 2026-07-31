import { MetadataRoute } from 'next';

/**
 * Generates the XML sitemap dynamically for search engine crawlers (Google, Bing).
 * Accessible automatically at /sitemap.xml.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.novulabs.net';

  // Static pages
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/solutions',
    '/industries',
    '/portfolio',
    '/team',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic blog routes (matches the slugs in content/siteData or dynamic files)
  const blogPosts = [
    'navigating-aml-cft-regulations-pakistan-2026',
    'scaling-healthcare-software-hipaa-hl7-fhir',
    'why-custom-saas-outperforms-off-the-shelf-erp',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogPosts];
}
