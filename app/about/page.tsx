import type { Metadata } from 'next';
import AboutHero from '@/components/sections/about/AboutHero';
import MissionSection from '@/components/sections/about/MissionSection';
import AboutPhotos from '@/components/sections/about/AboutPhotos';
import AboutCta from '@/components/sections/about/AboutCta';

export const metadata: Metadata = {
  title: 'About NovuLabs – Pakistan Enterprise Software House Since 2015',
  description:
    'NovuLabs is a premier enterprise software house based in Islamabad, Pakistan. We engineer mission-critical platforms for fintech, healthcare, government, and regulated industries across 40+ countries. Trusted by 200+ organizations worldwide.',
  keywords: [
    'about NovuLabs',
    'enterprise software company Pakistan',
    'software house Islamabad',
    'fintech software company Pakistan',
    'healthcare software development team',
    'AML compliance engineers',
    'government software Pakistan',
    'custom enterprise development',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About NovuLabs – Pakistan Enterprise Software House',
    description:
      'Founded in Islamabad, NovuLabs engineers mission-critical platforms for fintech institutions, healthcare networks, and government agencies globally.',
    url: 'https://www.novulabs.net/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NovuLabs Team' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About NovuLabs – Enterprise Software House',
    description: 'Islamabad-based software house delivering fintech, healthcare, and government platforms since 2015.',
    images: ['/og-image.png'],
  },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About NovuLabs',
  url: 'https://www.novulabs.net/about',
  description: 'NovuLabs is an enterprise software house specializing in AML/CFT compliance, fintech, healthcare IT, and government systems.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.novulabs.net' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.novulabs.net/about' },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutHero />
      <div className="divider"></div>
      <MissionSection />
      <AboutPhotos />
      <AboutCta />
    </>
  );
}
