import type { Metadata } from 'next';
import TeamHero from '@/components/sections/team/TeamHero';
import TeamGridSection from '@/components/sections/team/TeamGridSection';
import TeamCta from '@/components/sections/team/TeamCta';

export const metadata: Metadata = {
  title: 'Our Engineering Team – Senior Architects & Compliance Experts | NovuLabs',
  description:
    'Meet the NovuLabs engineering team: senior architects, fintech compliance engineers, healthcare IT specialists, and AML/CFT experts. Every team member is an active practitioner — no sales reps.',
  keywords: [
    'NovuLabs team',
    'software engineers Pakistan',
    'fintech engineers Pakistan',
    'AML compliance engineers',
    'enterprise software architects',
    'healthcare IT engineers',
    'software development team Islamabad',
    'senior software engineers',
  ],
  alternates: { canonical: '/team' },
  openGraph: {
    title: 'Engineering Team – NovuLabs',
    description: 'Senior architects, fintech engineers and AML/CFT compliance experts at NovuLabs.',
    url: 'https://www.novulabs.net/team',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NovuLabs Team' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Team | NovuLabs',
    description: 'Senior architects, fintech, AML, and healthcare IT engineers at NovuLabs.',
    images: ['/og-image.png'],
  },
};

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <div className="divider"></div>
      <TeamGridSection />
      <TeamCta />
    </>
  );
}
