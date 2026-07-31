import type { Metadata } from 'next';
import BlogHero from '@/components/sections/blog/BlogHero';
import BlogGrid from '@/components/sections/blog/BlogGrid';

export const metadata: Metadata = {
  title: 'Insights & Technical Articles – Enterprise Software, AML & Healthcare IT | NovuLabs',
  description:
    'Expert articles and deep technical guides on AML/CFT compliance, HIPAA healthcare software, enterprise ERP architecture, cloud scalability, payment systems, and regulated industry technology from NovuLabs engineers.',
  keywords: [
    'enterprise software articles',
    'AML compliance blog Pakistan',
    'HIPAA healthcare IT articles',
    'fintech blog Pakistan',
    'software architecture guides',
    'enterprise development insights',
    'GOAML compliance guide',
    'payment gateway articles',
    'cloud architecture enterprise',
    'NovuLabs blog',
  ],
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Insights & Technical Articles | NovuLabs',
    description: 'Deep technical articles on AML compliance, HIPAA healthcare IT, enterprise architecture, and fintech from NovuLabs engineers.',
    url: 'https://www.novulabs.net/blog',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NovuLabs Insights' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights & Technical Articles | NovuLabs',
    description: 'AML compliance, HIPAA, fintech, and enterprise architecture guides from our engineering team.',
    images: ['/og-image.png'],
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'NovuLabs Insights',
  url: 'https://www.novulabs.net/blog',
  description: 'Technical articles and regulatory insights on enterprise software, AML/CFT, healthcare IT, fintech, and cloud architecture.',
  publisher: {
    '@type': 'Organization',
    name: 'NovuLabs Technology',
    logo: { '@type': 'ImageObject', url: 'https://www.novulabs.net/logo.png' },
  },
};

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <BlogHero />
      <div className="divider"></div>
      <BlogGrid />
    </>
  );
}
