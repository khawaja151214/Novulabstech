import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { servicePages } from '@/content/servicePages';
import { serviceSpokes } from '@/content/serviceSpokes';
import { caseStudies } from '@/content/caseStudies';
import { blogPosts } from '@/content/blogPosts';
import { legalPages } from '@/content/legalPages';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema';
import { canonical } from '@/lib/seo';

/**
 * Human-readable sitemap.
 *
 * Lives at /site-map rather than /sitemap because app/sitemap.ts already owns
 * the /sitemap route segment to generate /sitemap.xml, and Next.js will not
 * allow two routes to resolve into the same segment.
 *
 * This complements, and does not replace, sitemap.xml; it gives every page a
 * second internal link from a crawlable hub, which is the cheapest available
 * fix for orphan and near-orphan pages.
 */
export const metadata: Metadata = {
  title: 'Sitemap',
  // 148 chars: was 112, which left SERP real estate unused.
  description:
    'Every page on novulabs.net in one place: services, platforms, case studies, technical articles, testimonials, company pages, FAQs and policies.',
  alternates: { canonical: canonical('/site-map') },
  // Same inherited-og:url problem as /legal, see the note there.
  openGraph: {
    type: 'website',
    title: 'Sitemap — NovuLabs',
    description: 'Every page on novulabs.net, in one list.',
    url: canonical('/site-map'),
    images: [
      {
        url: '/og/enterprise-software-development.jpg',
        width: 1200,
        height: 630,
        alt: 'NovuLabs — enterprise software for regulated industries',
      },
    ],
  },
};

/**
 * Sitemap group.
 *
 * Previously rendered with .ft-head and .ft-links, which are the FOOTER
 * classes. The footer sits on a near-black ground, so those rules set white
 * headings (#FFFFFF) and pale grey links (#AEBBCB). On this page, whose
 * section background is white, that measured 1.00:1 for all ten group
 * headings and 1.95:1 for all eighty links: the headings were literally
 * invisible and the links close to it.
 *
 * The heading is also a real <h2> now. A directory of eighty links with no
 * heading elements gives a screen reader and a crawler no outline of the
 * document at all, which for a page whose entire job is structure is the
 * whole point missed.
 */
function Group({
  heading,
  links,
}: {
  heading: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <h2 className="sm-head">{heading}</h2>
      <ul className="sm-links">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href}>
              <i className="bi bi-chevron-right" aria-hidden="true"></i>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteMapPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: 'Sitemap',
          description: 'All pages on novulabs.net.',
          path: '/site-map',
          type: 'CollectionPage',
        })}
      />
      <section className="phero" style={{ minHeight: 'auto', paddingTop: '140px', paddingBottom: '60px' }}>
        <div className="phero-ov"></div>
        <div className="phero-grid"></div>
        <div className="container phero-inner">
          <Breadcrumbs className="mb-4" items={[{ name: 'Sitemap' }]} />
          <h1 className="hero-title mt-3" style={{ fontSize: '2.4rem' }}>
            Sitemap
          </h1>
          <p className="hero-sub">Every page on this site, in one list.</p>
        </div>
      </section>
      <div className="divider"></div>

      <section className="sec bg-w">
        <div className="container">
          <div className="row">
            <Group
              heading="Company"
              links={[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About NovuLabs' },
                { href: '/software-house-in-islamabad', label: 'Software house in Islamabad' },
                { href: '/software-development-in-pakistan', label: 'Software development in Pakistan' },
                { href: '/team', label: 'Engineering & compliance team' },
                { href: '/team/muneeb-ali-jaffari', label: 'Muneeb Ali Jaffari' },
                { href: '/team/shamroz-ali-zaidi', label: 'Shamroz Ali Zaidi' },
                { href: '/team/ali-zaidi', label: 'Ali Zaidi' },
                { href: '/industries', label: 'Industries served' },
                { href: '/testimonials', label: 'Client testimonials & reviews' },
                { href: '/faq', label: 'Frequently asked questions' },
                { href: '/contact', label: 'Contact & consultation' },
              ]}
            />
            <Group
              heading="Services"
              links={[
                { href: '/services', label: 'All services' },
                ...servicePages.map((s) => ({ href: `/services/${s.slug}`, label: s.h1 })),
              ]}
            />
            <Group
              heading="All 22 services"
              links={serviceSpokes.map((s) => ({ href: `/services/${s.slug}`, label: s.h1 }))}
            />
            <Group
              heading="Platforms"
              links={[{ href: '/solutions', label: 'NovuERP, NovuCRM, NovuPay & NovuShield' }]}
            />
            <Group
              heading="Case studies"
              links={[
                { href: '/portfolio', label: 'All case studies' },
                ...caseStudies.map((c) => ({ href: `/portfolio/${c.slug}`, label: c.title })),
              ]}
            />
            <Group
              heading="Insights"
              links={[
                { href: '/blog', label: 'All articles' },
                ...blogPosts.map((p) => ({ href: `/blog/${p.slug}`, label: p.title })),
              ]}
            />
            <Group
              heading="Legal"
              links={[
                { href: '/legal', label: 'Legal & policies' },
                ...legalPages.map((p) => ({ href: `/legal/${p.slug}`, label: p.title })),
              ]}
            />
          </div>
          <p className="mt-4" style={{ fontSize: '0.85rem', color: 'var(--tx3)' }}>
            Machine-readable version: <a href="/sitemap.xml">sitemap.xml</a> · Crawler guidance:{' '}
            <a href="/robots.txt">robots.txt</a> · LLM index: <a href="/llms.txt">llms.txt</a>
          </p>
        </div>
      </section>
    </>
  );
}
