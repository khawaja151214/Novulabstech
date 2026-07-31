import type { Metadata } from 'next';
import IndustriesHero from '@/components/sections/industries/IndustriesHero';
import FintechDeepDive from '@/components/sections/industries/FintechDeepDive';
import HealthcareDeepDive from '@/components/sections/industries/HealthcareDeepDive';
import GovernmentDeepDive from '@/components/sections/industries/GovernmentDeepDive';
import MoreSectorsSection from '@/components/sections/industries/MoreSectorsSection';
import IndustriesCta from '@/components/sections/industries/IndustriesCta';

export const metadata: Metadata = {
  title: 'Industries Served – Banking, Healthcare, Government & Enterprise IT',
  description:
    'Domain expertise across banking & fintech (AML/CFT, RAAST, Mastercard), healthcare (HIPAA, HL7 FHIR, EHR), government (NADRA, FBR, e-government), and 6+ more enterprise sectors. Pakistan, UAE, UK, and global.',
  keywords: [
    'fintech software company Pakistan',
    'banking software development',
    'AML compliance banking Pakistan',
    'healthcare IT company Pakistan',
    'HIPAA compliant software',
    'HL7 FHIR integration',
    'government software Pakistan',
    'NADRA integration software',
    'FBR tax software Pakistan',
    'e-government portal',
    'retail ecommerce software',
    'manufacturing ERP Pakistan',
  ],
  alternates: { canonical: '/industries' },
  openGraph: {
    title: 'Industries – Banking, Healthcare & Government IT | NovuLabs',
    description: 'Software built for critical industries: fintech, healthcare, government, retail, manufacturing and more.',
    url: 'https://www.novulabstech.com/industries',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NovuLabs Industries' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries – Banking, Healthcare & Government | NovuLabs',
    description: 'Mission-critical software for banking, healthcare IT, government portals and enterprise sectors globally.',
    images: ['/og-image.png'],
  },
};

const industriesSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Industries Served by NovuLabs',
  url: 'https://www.novulabstech.com/industries',
  description: 'Enterprise IT solutions for banking, fintech, healthcare, government, retail, manufacturing, education, and telecom.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.novulabstech.com' },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.novulabstech.com/industries' },
    ],
  },
};

export default function IndustriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesSchema) }} />
      <IndustriesHero />
      <div className="divider"></div>
      <FintechDeepDive />
      <HealthcareDeepDive />
      <GovernmentDeepDive />
      <MoreSectorsSection />
      <IndustriesCta />
    </>
  );
}
