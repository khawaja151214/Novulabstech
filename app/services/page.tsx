import type { Metadata } from 'next';
import HashScrollHandler from '@/components/ui/HashScrollHandler';
import ServicesHero from '@/components/sections/services/ServicesHero';
import WebServiceSection from '@/components/sections/services/WebServiceSection';
import EnterpriseServiceSection from '@/components/sections/services/EnterpriseServiceSection';
import FintechServiceSection from '@/components/sections/services/FintechServiceSection';
import MobileServiceSection from '@/components/sections/services/MobileServiceSection';
import HealthcareServiceSection from '@/components/sections/services/HealthcareServiceSection';
import ComplianceServiceSection from '@/components/sections/services/ComplianceServiceSection';
import CloudServiceSection from '@/components/sections/services/CloudServiceSection';
import ServicesCta from '@/components/sections/services/ServicesCta';

export const metadata: Metadata = {
  title: 'Enterprise Software Development Services – Fintech, Healthcare, AML & Cloud',
  description:
    'Full-stack enterprise software development: custom web apps, fintech platforms, AML/CFT compliance engines, HIPAA healthcare systems, mobile apps, ERP/CRM, and cloud & AI solutions. PCI-DSS, HIPAA, ISO 27001 certified.',
  keywords: [
    'enterprise software development services',
    'fintech software development Pakistan',
    'AML CFT compliance software',
    'HIPAA healthcare software development',
    'mobile app development Pakistan',
    'ERP CRM software development',
    'cloud software development',
    'PCI-DSS payment development',
    'GOAML integration Pakistan',
    'custom enterprise software Islamabad',
  ],
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Enterprise Software Services – NovuLabs',
    description:
      'Custom fintech, AML compliance, healthcare, mobile, ERP/CRM, and cloud software development for global enterprises.',
    url: 'https://www.novulabs.net/services',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NovuLabs Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Software Development Services – NovuLabs',
    description: 'Fintech, AML, healthcare, mobile and cloud enterprise software. PCI-DSS, HIPAA, ISO 27001 certified.',
    images: ['/og-image.png'],
  },
};

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: { '@type': 'Organization', name: 'NovuLabs Technology' },
  serviceType: 'Enterprise Software Development',
  areaServed: ['PK', 'AE', 'GB', 'US'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Enterprise Software Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web & Enterprise App Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fintech Software Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AML/CFT Compliance Systems' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HIPAA Healthcare IT Software' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud & AI Solutions' } },
    ],
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.novulabs.net' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.novulabs.net/services' },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      {/* Tiny client island for hash-anchor scrolling; page stays Server Component */}
      <HashScrollHandler />
      <ServicesHero />
      <div className="divider"></div>
      <WebServiceSection />
      <EnterpriseServiceSection />
      <FintechServiceSection />
      <MobileServiceSection />
      <HealthcareServiceSection />
      <ComplianceServiceSection />
      <CloudServiceSection />
      <ServicesCta />
    </>
  );
}
