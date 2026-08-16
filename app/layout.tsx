import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';

import JsonLd from '@/components/seo/JsonLd';
import { organizationSchema, websiteSchema } from '@/lib/schema';

// ClientShell is a 'use client' wrapper — holds all ssr:false dynamic imports
// (next/dynamic with ssr:false is only allowed inside Client Components)
import ClientShell from '@/components/ui/ClientShell';
import Preloader from '@/components/ui/Preloader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// ---------------------------------------------------------------------------
// Viewport
// ---------------------------------------------------------------------------
export const viewport: Viewport = {
  themeColor: '#C9A84C',
  width: 'device-width',
  initialScale: 1,
};

// ---------------------------------------------------------------------------
// Global Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL('https://www.novulabs.net'),
  title: {
    // 58 chars — inside the ~60 char SERP render budget.
    default: 'NovuLabs — Enterprise Software House in Pakistan',
    // Page-level `title` strings must NOT contain the brand; this template
    // appends it exactly once. (Previously several pages included it too,
    // producing "… | NovuLabs | NovuLabs" and 90–101 char truncated titles.)
    template: '%s | NovuLabs',
  },
  description:
    'Enterprise software house in Islamabad building AML/CFT compliance systems for SBP-regulated banks, HIPAA healthcare platforms and PCI-DSS payment infrastructure.',
  keywords: [
    'enterprise software house Pakistan',
    'AML compliance software Pakistan',
    'GOAML FMU Pakistan software',
    'fintech software development Islamabad',
    'healthcare IT HIPAA EHR software',
    'PCI-DSS payment gateway development',
    'government portal software Pakistan',
    'core banking software',
    'enterprise ERP CRM development',
    'NovuLabs Islamabad',
    'custom software development UAE',
    'software outsourcing Pakistan',
    'ISO 27001 software development',
  ],
  authors: [{ name: 'NovuLabs Technology', url: 'https://www.novulabs.net' }],
  creator: 'NovuLabs Technology',
  publisher: 'NovuLabs Technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  // ⚠️ DO NOT re-add `alternates: { canonical: '/' }` here.
  // Next.js metadata is inherited: a canonical set on the root layout is
  // applied to every descendant route that does not set its own. That is what
  // made all three blog posts declare rel=canonical → the homepage, telling
  // Google to de-index the entire /blog/ tree. Canonicals are now set
  // per-route, and app/blog/[slug]/page.tsx generates its own dynamically.
  openGraph: {
    type: 'website',
    url: 'https://www.novulabs.net/',
    // Message consistency: og/twitter/title now say the same thing. They
    // previously carried three different value sets for the same page.
    title: 'NovuLabs — Enterprise Software House in Pakistan',
    // "certified" removed: HIPAA has no certification regime (organisations
    // attest to compliance), and no ISO 27001 certificate number or registrar
    // is published anywhere on the site. Claiming certification you cannot
    // evidence is an E-E-A-T liability in a YMYL vertical.
    description:
      'Architect-led engineering for regulated industries: AML/CFT compliance systems for SBP-regulated banks, HIPAA and HL7 FHIR healthcare platforms, PCI-DSS payment infrastructure.',
    images: [
      { url: '/og-image.png', width: 1200, height: 630, alt: 'NovuLabs — enterprise software for regulated industries' },
    ],
    siteName: 'NovuLabs',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    // TODO(client): verify @NovuLabsTech exists and is controlled by NovuLabs.
    // If the handle is not live, delete these two lines — pointing twitter:site
    // at a non-existent account breaks card attribution.
    site: '@NovuLabsTech',
    creator: '@NovuLabsTech',
    title: 'NovuLabs — Enterprise Software House in Pakistan',
    description:
      'AML/CFT compliance systems, HIPAA healthcare platforms and PCI-DSS payment infrastructure, built by senior architects in Islamabad.',
    images: ['/og-image.png'],
  },
  category: 'technology',
};

// ---------------------------------------------------------------------------
// Root Layout
// ---------------------------------------------------------------------------
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Sitewide entity graph — ProfessionalService + WebSite, linked by @id.
            Server-rendered so non-JS crawlers (GPTBot, ClaudeBot, PerplexityBot,
            CCBot) can read it. Definitions live in lib/schema.ts. */}
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </head>
      <body>
        {/* Render preloader in initial markup for instant painting, fades out safely after hydration */}
        <Preloader />
        
        {/* Single client boundary — all other heavy UI lazy-loads live inside ClientShell */}
        <ClientShell />

        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />

        {/* Both scripts self-hosted from /vendor. They were loaded from
            cdn.jsdelivr.net, which put a third-party DNS lookup and TLS
            handshake in front of each one and disclosed every visitor's IP and
            user agent to that CDN. Same-origin now, immutably cached, and no
            longer a third-party dependency for the site to function. */}
        <Script src="/vendor/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/vendor/aos.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
