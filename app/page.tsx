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
  // 43 chars. Matches the H1 wording exactly rather than a shortened version of
  // it, so title, H1 and description all target one intent instead of three.
  //
  // Head term is "best software house in Islamabad", at the owner's direction.
  //
  // Cannibalisation check: /software-house-in-islamabad owns the comparison
  // phrasing ("How to Choose the Best Software Agency in Islamabad") — agency
  // vs house, and how-to vs head term, keep the two pages off one query. The
  // homepage owns the head term and links down; the landing page converts the
  // comparison.
  title: { absolute: 'Best Software House in Islamabad | NovuLabs' },
  // 159 chars, inside the ~160 Google renders before truncating.
  //
  // Structure: the exact head term up front while it is still visible in the
  // SERP, then the four service categories a buyer actually searches by name.
  //
  // The category list is deliberately generic where the rest of the site is
  // specific. "Custom software, web and mobile apps, enterprise systems, AI"
  // is the vocabulary of someone who does not yet know they need AML case
  // management, and the homepage is the page that has to catch them. The
  // named standards (AML/CFT, HIPAA, PCI-DSS) still lead the OG description
  // below, the service cards and every service page, where the reader has
  // already self-selected into the regulated work.
  //
  // "for businesses in Pakistan" is the second geography signal after
  // Islamabad, and it matches the national landing page at
  // /software-development-in-pakistan.
  //
  // A description cannot carry a link of its own, since the whole snippet
  // resolves to this page, so the route to the booking form is made explicit
  // three other ways: the hero's primary button, the ReserveAction on the
  // WebPage node below, and the SiteNavigationElement entry for /contact.
  description:
    'NovuLabs is the best software house in Islamabad, building custom software, web and mobile apps, enterprise systems and AI software for businesses in Pakistan.',
  keywords: [
    'best enterprise software house in Islamabad',
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
          // Declares the booking form as this page's primary action, so a
          // "book a meeting with NovuLabs" query has a machine-readable target
          // rather than leaving the crawler to infer it from a button label.
          reserveActionPath: '/contact',
        })}
      />
      <HeroSection />
      <AboutSection />
      <div className="divider"></div>
      <ServicesSection />
      <div className="divider"></div>
      {/* Order follows the question a buyer asks in sequence: who are you,
          what do you build, have you built it for someone like me, and why
          you rather than the next firm. Industries therefore sits between the
          service list and the reasons-to-choose block, where it used to sit
          after it. */}
      <IndustriesSection />
      <WhyUsSection />
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
