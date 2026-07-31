import type { Metadata } from 'next';
import PortfolioHero from '@/components/sections/portfolio/PortfolioHero';
import PortfolioGridSection from '@/components/sections/portfolio/PortfolioGridSection';
import PortfolioCta from '@/components/sections/portfolio/PortfolioCta';

export const metadata: Metadata = {
  title: 'Portfolio – 200+ Enterprise Software Projects | NovuLabs Case Studies',
  description:
    'Explore NovuLabs delivered projects: AML/CFT compliance engines for Tier-1 banks, HIPAA EHR for hospitals, GOAML integrations, national identity portals, payment switches, and enterprise ERP/CRM systems. 200+ projects across 40+ countries.',
  keywords: [
    'enterprise software portfolio Pakistan',
    'AML compliance software case study',
    'GOAML integration project',
    'HIPAA EHR software project',
    'payment switch development',
    'banking software project Pakistan',
    'government portal case study',
    'enterprise ERP project',
    'NovuLabs portfolio',
    'software house work samples',
  ],
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Portfolio – Enterprise Software Projects | NovuLabs',
    description: 'AML engines, HIPAA EHR, payment switches, government portals and 200+ enterprise projects.',
    url: 'https://www.novulabstech.com/portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NovuLabs Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio – 200+ Enterprise Projects | NovuLabs',
    description: 'AML compliance, healthcare, payments, and government software. Explore our work.',
    images: ['/og-image.png'],
  },
};

const portfolioSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'NovuLabs Portfolio – Enterprise Software Projects',
  url: 'https://www.novulabstech.com/portfolio',
  description: '200+ enterprise software projects delivered across fintech, healthcare, government, and corporate sectors.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.novulabstech.com' },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://www.novulabstech.com/portfolio' },
    ],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }} />
      <PortfolioHero />
      <div className="divider"></div>
      <PortfolioGridSection />
      <PortfolioCta />
    </>
  );
}
