import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';

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
    default: 'NovuLabs – Enterprise Software Solutions | NovuLabsTech.com',
    template: '%s | NovuLabs',
  },
  description:
    'NovuLabs delivers mission-critical enterprise software for fintech, healthcare, AML/CFT compliance, government, and global enterprises. 200+ projects. 40+ countries.',
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
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://www.novulabs.net/',
    title: 'NovuLabs – Next-Gen Enterprise Software House',
    description:
      'Mission-critical platforms for fintech, healthcare, government & global enterprises. AML/CFT, HIPAA, PCI-DSS, ISO 27001 certified solutions. 200+ projects. 40+ countries.',
    images: [
      { url: '/og-image.png', width: 1200, height: 630, alt: 'NovuLabs – Enterprise Software Solutions' },
    ],
    siteName: 'NovuLabs',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@NovuLabsTech',
    creator: '@NovuLabsTech',
    title: 'NovuLabs – Next-Gen Enterprise Software House',
    description:
      'Mission-critical software for fintech, healthcare & government. AML, HIPAA, PCI-DSS certified. 200+ projects across 40+ countries.',
    images: ['/og-image.png'],
  },
  category: 'technology',
};

// ---------------------------------------------------------------------------
// JSON-LD Structured Data
// ---------------------------------------------------------------------------
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NovuLabs Technology',
  alternateName: 'NovuLabs',
  url: 'https://www.novulabs.net',
  logo: 'https://www.novulabs.net/logo.png',
  description:
    'NovuLabs is a premier enterprise software house headquartered in Islamabad, Pakistan. We build mission-critical platforms for fintech, healthcare, AML/CFT compliance, and government sectors across 40+ countries.',
  foundingDate: '2015',
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 50, maxValue: 200 },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Islamabad',
    addressCountry: 'PK',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: 'Info@novulabstech.net',
      contactType: 'customer service',
      availableLanguage: ['English', 'Urdu'],
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/novulabstech',
    'https://twitter.com/NovuLabsTech',
  ],
  areaServed: ['PK', 'AE', 'GB', 'US', 'SA'],
  knowsAbout: [
    'Enterprise Software Development',
    'AML/CFT Compliance Software',
    'Fintech Platform Development',
    'Healthcare IT and EHR Systems',
    'Government Portal Development',
    'PCI-DSS Payment Gateway',
    'HIPAA Compliant Software',
    'Core Banking Solutions',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'NovuLabs',
  url: 'https://www.novulabs.net',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.novulabs.net/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

// ---------------------------------------------------------------------------
// Root Layout
// ---------------------------------------------------------------------------
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to CDN — reduces TLS + DNS handshake time */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />

        {/* Bootstrap CSS — loaded server-side to prevent flash of unstyled content */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          crossOrigin="anonymous"
        />
        {/* Bootstrap Icons — loaded server-side (icons used in nav/buttons) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
          crossOrigin="anonymous"
        />
        {/* AOS CSS — only needed after scroll, deferred via CDNStyleLoader */}

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        {/* Render preloader in initial markup for instant painting, fades out safely after hydration */}
        <Preloader />
        
        {/* Single client boundary — all other heavy UI lazy-loads live inside ClientShell */}
        <ClientShell />

        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />

        {/* Bootstrap JS: load after user interaction */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        {/* AOS JS: lowest priority */}
        <Script
          src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
