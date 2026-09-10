import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema';
import HeroSection from '@/components/sections/home/HeroSection';
import AboutSection from '@/components/sections/home/AboutSection';
import ServicesSection from '@/components/sections/home/ServicesSection';
import WhyUsSection from '@/components/sections/home/WhyUsSection';
import IndustriesSection from '@/components/sections/home/IndustriesSection';
import TechStackSection from '@/components/sections/home/TechStackSection';
import PortfolioPreviewSection from '@/components/sections/home/PortfolioPreviewSection';
import ProcessSection from '@/components/sections/home/ProcessSection';
import FaqSection from '@/components/sections/home/FaqSection';
import CaseStudyRail from '@/components/sections/home/CaseStudyRail';
import InsightsSection from '@/components/sections/home/InsightsSection';
import CtaSection from '@/components/sections/home/CtaSection';

export const metadata: Metadata = {
  // 51 chars. Matches the H1 wording exactly rather than a shortened version of
  // it, so title, H1 and description all target one intent instead of three.
  //
  // "Agency" rather than "house" because that is the wording buyers use as
  // often as the local term, and the page now needs to read naturally for both.
  //
  // The "best software agency in Islamabad" comparison query is owned by
  // /software-house-in-islamabad, not by this page. Putting the same phrase in
  // both H1s would set the homepage and the landing page competing for one
  // query, which is the cannibalisation this cluster was built to avoid. The
  // homepage owns the category term and links down; the landing page owns the
  // comparison term and converts it.
  // Head term moved to "best software house in Islamabad" at the owner's
  // direction. 43 chars rendered.
  title: { absolute: 'Best Software House in Islamabad | NovuLabs' },
  // 158 chars: was 189, which Google truncated mid-clause at ~160.
  description:
    'Choosing the best software house in Islamabad? NovuLabs builds custom software, mobile apps and compliance systems for banks, hospitals and government.',
  keywords: [
    'best software house in Islamabad',
    'best software company in Islamabad',
    'top software house in Islamabad',
    'software agency in Islamabad',
    'software development agency in Islamabad',
    'software house in Islamabad',
    'software company in Islamabad',
    'enterprise software house Pakistan',
    'AML software Pakistan',
    'fintech development company Islamabad',
    'healthcare IT software Pakistan',
    'NovuLabs Islamabad',
    'custom software development Islamabad',
    'government portal software',
    'GOAML compliance software',
    'PCI-DSS payment software',
    'software outsourcing Pakistan',
  ],
  // Renders as `https://www.novulabs.net` with no trailing slash: Next.js
  // normalises that away and an absolute URL here does not override it. The
  // sitemap is matched to this form instead, in app/sitemap.ts.
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Best Software House in Islamabad | NovuLabs',
    // "200+ projects. 40+ countries." removed — neither figure is evidenced
    // anywhere on the site or in lib/seo.ts (which declares five served
    // markets). Same claim class as the certification wording removed in
    // 6daaa0c; see artifacts/FINDINGS.md.
    description:
      'A software house in Islamabad for work a regulator inspects: fintech, AML/CFT compliance, healthcare and government software, with an architect on the first call.',
    url: 'https://www.novulabs.net',
    images: [{ url: '/og/enterprise-software-development.jpg', width: 1200, height: 630, alt: 'NovuLabs' }],
  },
};


export default function Home() {
  return (
    <>
      {/* The homepage WebPage node links back to the sitewide
          ProfessionalService entity by @id. FAQPage schema for the homepage FAQ
          is emitted by FaqSection, alongside the visible Q&A it describes. */}
      <JsonLd
        data={webPageSchema({
          name: 'Best Software House in Islamabad: NovuLabs',
          description:
            'NovuLabs is a software house in Islamabad building custom software, mobile apps and compliance systems for banks, hospitals and government departments.',
          path: '/',
        })}
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
      <CaseStudyRail />
      <InsightsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
