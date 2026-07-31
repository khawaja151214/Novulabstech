import type { Metadata } from 'next';
import ContactHero from '@/components/sections/contact/ContactHero';
import ContactProcessSection from '@/components/sections/contact/ContactProcessSection';
import ContactFormSection from '@/components/sections/contact/ContactFormSection';
import ContactFaqSection from '@/components/sections/contact/ContactFaqSection';

export const metadata: Metadata = {
  title: 'Book a Free Consultation – Enterprise Software Development | NovuLabs',
  description:
    'Book a free 45-minute technical consultation with a senior NovuLabs architect. No demos, no sales scripts. Discuss your fintech, AML compliance, healthcare IT, or enterprise software project — get honest advice and a custom proposal.',
  keywords: [
    'contact NovuLabs',
    'book enterprise software consultation',
    'software development consultation Pakistan',
    'fintech consultation Islamabad',
    'AML compliance consultation',
    'hire enterprise software developer Pakistan',
    'enterprise software quote',
    'software outsourcing Pakistan inquiry',
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Book a Free Technical Consultation | NovuLabs',
    description: 'Free 45-minute call with a senior architect. Fintech, AML, healthcare, and enterprise software consulting.',
    url: 'https://www.novulabstech.com/contact',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact NovuLabs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Free Consultation | NovuLabs',
    description: 'Talk to a senior architect about your enterprise software project. No sales reps, no demos.',
    images: ['/og-image.png'],
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact NovuLabs',
  url: 'https://www.novulabstech.com/contact',
  description: 'Contact NovuLabs for a free technical consultation on enterprise software development.',
  mainEntity: {
    '@type': 'Organization',
    name: 'NovuLabs Technology',
    email: 'Info@novulabstech.net',
    address: { '@type': 'PostalAddress', addressLocality: 'Islamabad', addressCountry: 'PK' },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'Info@novulabstech.net',
      availableLanguage: ['English', 'Urdu'],
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <ContactHero />
      <div className="divider"></div>
      <ContactProcessSection />
      <ContactFormSection />
      <ContactFaqSection />
    </>
  );
}
