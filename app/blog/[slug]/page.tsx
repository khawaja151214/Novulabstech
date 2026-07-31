import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/content/blogPosts';
import Button from '@/components/ui/Button';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Statically pre-render paths at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found | NovuLabs',
    };
  }

  return {
    title: `${post.title} | NovuLabs Insights`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://www.novulabstech.com/blog/${post.slug}`,
      images: [{ url: post.coverImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Blog Post Hero */}
      <section className="phero">
        <div className="phero-bg">
          <img src={post.coverImage} alt={post.title} />
        </div>
        <div className="phero-ov"></div>
        <div className="phero-grid"></div>
        <div className="container phero-inner">
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item"><Link href="/blog">Blog</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{post.category}</li>
            </ol>
          </nav>
          <span className="stag">{post.category} • {post.readTime}</span>
          <h1 className="hero-title mt-3" style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>{post.title}</h1>
          <div className="mt-4" style={{ fontSize: '0.9rem', color: 'var(--tx3)' }}>
            <span>By <strong>{post.author}</strong></span> • <span>{post.date}</span>
          </div>
        </div>
      </section>
      <div className="divider"></div>

      {/* Main Blog Post Content */}
      <section className="sec bg-w">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <article 
                className="blog-post-content"
                style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'var(--tx2)',
                }}
              >
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                
                {/* Tags */}
                <div className="d-flex gap-2 flex-wrap mt-5 pt-4" style={{ borderTop: '1px solid var(--bg-2)' }}>
                  {post.tags.map((tag) => (
                    <span className="tbadge" key={tag} style={{ fontSize: '0.8rem', padding: '6px 14px' }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section at bottom of blog post */}
      <section id="cta-banner">
        <div className="container">
          <div className="cta-inner" data-aos="fade-up">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <span className="stag">Consult Our Team</span>
                <h2 className="stitle mt-3">Need guidance implementing<br /><span className="gtxt">these solutions?</span></h2>
                <p className="ssub mt-4 mb-0">Our engineers build compliance databases, scale payment switches, and set up HIPAA-ready cloud layouts daily. Let's look at your systems architecture together and chart a compliant path forward.</p>
              </div>
              <div className="col-lg-5 text-lg-end">
                <div className="cta-card text-start">
                  <div className="cta-card-label">Schedule a free technical review</div>
                  <Button href="/contact" variant="grad" className="w-100 justify-content-center mb-3">
                    <i className="bi bi-calendar-check me-1"></i>Book a Technical Call
                  </Button>
                  <Button href="/portfolio" variant="glass" className="w-100 justify-content-center">
                    <i className="bi bi-folder2-open me-1"></i>Explore Our Systems
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
