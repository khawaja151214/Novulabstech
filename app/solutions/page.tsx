import type { Metadata } from 'next';
import SolutionsHero from '@/components/sections/solutions/SolutionsHero';
import ErpSection from '@/components/sections/solutions/ErpSection';
import CrmSection from '@/components/sections/solutions/CrmSection';
import PaySection from '@/components/sections/solutions/PaySection';
import AmlSection from '@/components/sections/solutions/AmlSection';
import SolutionsCta from '@/components/sections/solutions/SolutionsCta';

export const metadata: Metadata = {
  title: 'Enterprise Product Platforms – NovuERP, NovuCRM, NovuPay & NovuShield AML',
  description:
    'Four battle-tested enterprise platforms: NovuERP (ERP for finance/HR/supply chain), NovuCRM (AI-powered CRM), NovuPay (Mastercard & Visa certified payments), and NovuShield (AML/CFT compliance engine). FATF, PCI-DSS, SBP compliant.',
  keywords: [
    'enterprise ERP software Pakistan',
    'NovuERP enterprise resource planning',
    'AI CRM software Pakistan',
    'Mastercard Visa payment switch Pakistan',
    'AML compliance platform Pakistan',
    'GOAML AML software',
    'FATF compliance software',
    'FMU Pakistan AML',
    'RAAST payment system integration',
    '1LINK payment switch',
    'NovuShield AML',
    'NovuPay payment gateway',
  ],
  alternates: { canonical: '/solutions' },
  openGraph: {
    title: 'Enterprise Platforms – NovuERP, CRM, Pay & Shield | NovuLabs',
    description: 'Production-ready enterprise platforms: ERP, AI CRM, Mastercard/Visa payment switch, and AML compliance engine.',
    url: 'https://www.novulabstech.com/solutions',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NovuLabs Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Platforms – NovuLabs Solutions',
    description: 'ERP, AI CRM, PCI-DSS payment, and FATF AML compliance platforms for global enterprises.',
    images: ['/og-image.png'],
  },
};

const solutionsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'NovuLabs Enterprise Product Platforms',
  url: 'https://www.novulabstech.com/solutions',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'NovuERP – Enterprise Resource Planning', url: 'https://www.novulabstech.com/solutions#erp' },
    { '@type': 'ListItem', position: 2, name: 'NovuCRM – AI Customer Relationship Management', url: 'https://www.novulabstech.com/solutions#crm' },
    { '@type': 'ListItem', position: 3, name: 'NovuPay – PCI-DSS Payment Infrastructure', url: 'https://www.novulabstech.com/solutions#pay' },
    { '@type': 'ListItem', position: 4, name: 'NovuShield – AML/CFT Compliance Platform', url: 'https://www.novulabstech.com/solutions#aml' },
  ],
};

export default function SolutionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsSchema) }} />
      <SolutionsHero />
      <div className="divider"></div>
      <ErpSection />
      <CrmSection />
      <PaySection />
      <AmlSection />
      <SolutionsCta />
    </>
  );
}
