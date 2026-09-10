import { TestimonialCard } from '@/types';

/**
 * Homepage testimonial cards.
 * ---------------------------------------------------------------------------
 * ⚠️  EVERY QUOTE BELOW IS A PLACEHOLDER. NONE IS FROM A REAL CLIENT.
 *
 * Same rule as content/testimonials.ts, and for the same reason: no genuine,
 * attributable client quote exists anywhere in this repository. These were
 * supplied as sample copy to size and lay out the section, so each carries
 * `placeholder: true`, and that flag is what renders the visible notice above
 * the cards. Nothing here is presented to a visitor as a real review.
 *
 * Two deliberate omissions while that holds:
 *   - No `Review` or `AggregateRating` schema is emitted for this section.
 *     Marking up invented quotes as reviews asserts ratings nobody left, which
 *     is a structured-data violation and can cost the whole site its rich
 *     results, not just this block.
 *   - The star row is `aria-hidden` and labelled as illustrative, so a screen
 *     reader is not told five people rated anything.
 *
 * WHAT MUST HAPPEN BEFORE THIS SECTION IS TRUE
 *   1. Collect real, attributable feedback. A role and a sector alone
 *      ("Head of Compliance, commercial bank") is enough when an NDA prevents
 *      naming the institution; /portfolio already uses that convention.
 *   2. Replace `quote` and `role` with the real words. Do not tidy a real
 *      quote for flow; an edited quote is no longer a quotation.
 *   3. Set `placeholder: false` on each replaced record. The notice disappears
 *      by itself once no record is a placeholder, and only then is it honest to
 *      add Review schema.
 */
export const homeTestimonials: TestimonialCard[] = [
  {
    service: 'Custom Software Development',
    quote:
      'We partnered with NovuLabs for a custom software development project, and the experience exceeded our expectations. As a software house based in Islamabad, they understood the local market while delivering a solution that meets international standards.',
    role: 'Operations lead, sample record',
    stars: 5,
    placeholder: true,
  },
  {
    service: 'Web Development',
    quote:
      'NovuLabs built our company website from the ground up, and the results speak for themselves. Their web development team in Islamabad delivered a fast, responsive, and SEO-friendly site that has significantly increased our organic traffic.',
    role: 'Marketing lead, sample record',
    stars: 5,
    placeholder: true,
  },
  {
    service: 'Mobile App Development',
    quote:
      'Choosing NovuLabs as our mobile app development partner was one of the best decisions we made. They took our idea from concept to a fully functional iOS and Android app, and communication stayed direct the whole way through.',
    role: 'Product owner, sample record',
    stars: 5,
    placeholder: true,
  },
  {
    service: 'IT Solutions & Digital Transformation',
    quote:
      'Our digital transformation with NovuLabs has been seamless. Their team provided end-to-end IT solutions, from cloud integration to custom enterprise software, tailored specifically to how our business actually runs.',
    role: 'IT director, sample record',
    stars: 5,
    placeholder: true,
  },
  {
    service: 'SaaS Development',
    quote:
      'NovuLabs developed our SaaS platform from scratch, handling everything from backend architecture to interface design. Their grasp of multi-tenant architecture saved us from decisions we would have regretted a year in.',
    role: 'Founder, sample record',
    stars: 5,
    placeholder: true,
  },
  {
    service: 'UI/UX Design',
    quote:
      'The design work NovuLabs provided completely changed our product experience. Their attention to detail and understanding of modern interface principles set them apart from other software houses we have worked with in Islamabad.',
    role: 'Head of product, sample record',
    stars: 5,
    placeholder: true,
  },
  {
    service: 'E-commerce Development',
    quote:
      'We needed an e-commerce platform that could handle high traffic and complex inventory management. NovuLabs delivered exactly that. Their custom development work made our store faster, more secure, and far easier to manage.',
    role: 'E-commerce manager, sample record',
    stars: 5,
    placeholder: true,
  },
  {
    service: 'Enterprise Software & Long-Term Partnership',
    quote:
      'We have worked with NovuLabs on multiple projects, from enterprise software development through to ongoing support. Their consistency and technical depth make them a reliable partner for long-term work rather than one-off builds.',
    role: 'COO, sample record',
    stars: 5,
    placeholder: true,
  },
];
