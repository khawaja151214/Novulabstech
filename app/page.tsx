import type { Metadata } from 'next';
import HeroSection from '@/components/sections/home/HeroSection';
import AboutSection from '@/components/sections/home/AboutSection';
import ServicesSection from '@/components/sections/home/ServicesSection';
import WhyUsSection from '@/components/sections/home/WhyUsSection';
import IndustriesSection from '@/components/sections/home/IndustriesSection';
import TechStackSection from '@/components/sections/home/TechStackSection';
import PortfolioPreviewSection from '@/components/sections/home/PortfolioPreviewSection';
import ProcessSection from '@/components/sections/home/ProcessSection';
import FaqSection from '@/components/sections/home/FaqSection';
import CtaSection from '@/components/sections/home/CtaSection';

export const metadata: Metadata = {
  title: 'NovuLabs – Enterprise Software House | Fintech, AML & Healthcare IT',
  description:
    'NovuLabs engineers mission-critical enterprise software for fintech institutions, healthcare networks, AML/CFT compliance, and government agencies. 200+ projects in 40+ countries. Based in Islamabad, Pakistan.',
  keywords: [
    'enterprise software house Pakistan',
    'AML software Pakistan',
    'fintech development company',
    'healthcare IT software Pakistan',
    'NovuLabs Islamabad',
    'custom software development',
    'government portal software',
    'GOAML compliance software',
    'PCI-DSS payment software',
    'software outsourcing Pakistan',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'NovuLabs – Enterprise Software House',
    description: 'Mission-critical fintech, AML compliance, healthcare, and government software. 200+ projects. 40+ countries.',
    url: 'https://www.novulabs.net',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NovuLabs' }],
  },
};

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'NovuLabs – Enterprise Software House',
  url: 'https://www.novulabs.net',
  description: 'Mission-critical enterprise software for fintech, healthcare, AML compliance, and government sectors.',
  specialty: ['Fintech Software', 'AML Compliance', 'Healthcare IT', 'Government Software'],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <HeroSection />
      <AboutSection />
      <div className="divider"></div>
      <ServicesSection />
      <WhyUsSection />
      <div className="divider"></div>
      <IndustriesSection />
      <TechStackSection />
      <PortfolioPreviewSection />
      <ProcessSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
