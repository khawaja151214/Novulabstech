import { ServiceItem, WhyUsItem, IndustryItem, TechStackItem, PortfolioItem, FaqItem, TeamMemberProfile } from '../types';

// Each of these 22 cards now links to a dedicated page (content/serviceSpokes.ts)
// instead of straight to /contact. See that file's header comment for why the
// card title and the page it links to sometimes carry a more specific name —
// e.g. "Enterprise Software" links to the Legacy System Modernization page,
// which is the genuinely distinct facet of that work that did not already have
// its own page. Nothing here was renamed for its own sake; every card still
// links to real content about the same underlying capability.
export const services: ServiceItem[] = [
  { icon: 'bi-globe', title: 'Website Development', desc: 'Corporate websites, portals and web applications built as software rather than assembled from templates. Covers information architecture, server-rendered performance, accessibility, and the technical SEO foundations that decide whether pages rank at all. Typical work includes multi-language sites, gated document libraries, and a CMS your marketing team can run without a developer.', color: 'i-b', slug: 'corporate-website-development' },
  { icon: 'bi-cpu-fill', title: 'Enterprise Software', desc: 'Enterprise software development covers the internal systems a business actually runs on: workflow engines, middleware, reporting layers, and the replacement of ageing platforms nobody wants to touch. We modernise in stages, running old and new alongside each other, so finance, operations and reporting keep working while the foundation underneath is rebuilt.', color: 'i-v', slug: 'legacy-system-modernization' },
  { icon: 'bi-bank', title: 'Financial Software', desc: 'Core banking and financial platforms: account ledgers, loan origination, digital wallets, treasury, and investment management. This is double-entry accounting under regulatory supervision, so the engineering is as much about reconciliation, audit trails and State Bank reporting as it is about the screens a customer sees.', color: 'i-t', slug: 'core-banking-software-development' },
  { icon: 'bi-credit-card-2-front', title: 'Payment Gateways', desc: 'Payment gateway development for merchants, acquirers and payment service providers. Covers card capture, tokenisation, 3-D Secure authentication, settlement and reconciliation files, and the PCI-DSS scope decisions that determine how much of the standard applies to you. Local acquirers integrated alongside international card rails.', color: 'i-c', slug: 'payment-gateway-development' },
  // "Certified" removed — scheme certification is issued to the institution operating the
  // platform, not to the development firm. Matches app/layout.tsx:121 and the /services FAQ.
  { icon: 'bi-patch-check-fill', title: 'Mastercard / Visa', desc: 'Direct integration with Mastercard and Visa networks for issuing and acquiring: authorisation messaging, clearing and settlement files, chargeback and dispute handling, and the certification test scripts each scheme requires. Scheme certification is issued to the institution operating the platform, and we build systems to pass it.', color: 'i-o', slug: 'mastercard-visa-integration' },
  { icon: 'bi-phone-fill', title: 'Mobile Apps', desc: 'Cross-platform mobile app development in Flutter and React Native, with native Swift or Kotlin where an app genuinely needs it. One codebase for iOS and Android keeps build cost and release cycles down. Includes offline behaviour, biometric login, push notifications, and submission to both app stores.', color: 'i-g', slug: 'cross-platform-app-development' },
  { icon: 'bi-heart-pulse-fill', title: 'Healthcare Software', desc: 'Clinical software: electronic health records, telemedicine, scheduling, and the workflows clinicians use between patients. Built around HL7 FHIR interoperability, role-based access to patient data, and HIPAA-aligned audit logging, so records move between providers without anyone losing track of who read what, and when.', color: 'i-p', slug: 'ehr-clinical-software-development' },
  { icon: 'bi-clipboard2-pulse-fill', title: 'Medical Billing', desc: 'Medical billing software covering the full revenue cycle: eligibility checks, ICD-10 and CPT coding, claim submission, denial management, and remittance posting. Most of the value sits in the rules engine that catches a claim before a payer rejects it, which is where billing revenue is quietly lost.', color: 'i-c', slug: 'medical-billing-software-development' },
  { icon: 'bi-diagram-3-fill', title: 'ERP Systems', desc: 'ERP development for companies whose processes do not fit a packaged product. Finance, inventory, procurement, manufacturing and HR in one system with a single source of truth. We normally integrate with what you already run rather than replacing everything, and we say so when an off-the-shelf ERP would serve you better.', color: 'i-v', slug: 'erp-software-development' },
  { icon: 'bi-people-fill', title: 'CRM Systems', desc: 'Custom CRM development: contact and account records, pipeline stages that match how your team actually sells, quoting, and reporting managers are willing to trust. Integrates with email, telephony and your ERP so data is entered once. Suited to sales processes a generic CRM forces you to work around.', color: 'i-o', slug: 'crm-software-development' },
  { icon: 'bi-shield-lock-fill', title: 'AML Systems', desc: 'Anti-money-laundering case management: alert queues, customer risk scoring, enhanced due diligence workflows, and the evidence trail an inspector asks to see. Includes rule tuning to bring false positives down to a volume your compliance team can genuinely clear, and reporting mapped to Pakistani and international AML obligations.', color: 'i-t', slug: 'aml-case-management-risk-scoring' },
  { icon: 'bi-flag-fill', title: 'CFT Compliance', desc: 'Sanctions and PEP screening for counter-financing of terrorism: name matching against UN, OFAC, EU and local lists, fuzzy matching tuned for transliterated names, ongoing rescreening as lists change, and automated suspicious transaction reports. Screening quality is decided by the matching logic, not by how many lists are loaded.', color: 'i-b', slug: 'sanctions-pep-screening-software' },
  { icon: 'bi-activity', title: 'Transaction Monitoring', desc: 'Transaction monitoring platforms that score payments in real time and in batch, combining scenario rules with machine learning on customer behaviour. Handles high volumes, typology tuning, alert triage, and the model documentation a regulator expects when a decision to freeze an account or file a report is challenged.', color: 'i-p', slug: 'transaction-monitoring-software-development' },
  { icon: 'bi-filetype-xml', title: 'XML Schema Integration', desc: 'Financial messaging integration: ISO 20022, SWIFT MT and MX, and HL7 FHIR on the healthcare side. Schema-driven validation, mapping between formats, and migration off legacy message types. Unglamorous work in which one malformed field rejects an entire filing, which is precisely why it repays doing carefully.', color: 'i-y', slug: 'financial-messaging-schema-integration' },
  { icon: 'bi-buildings-fill', title: 'Government Portals', desc: 'Government and public sector portals: citizen service platforms, identity verification through NADRA and CNIC APIs, digital signatures and PKI, and departmental workflow. Built for procurement review and public accountability, which in practice means documented decisions, accessibility standards, and data handling a department can defend in an audit.', color: 'i-g', slug: 'government-portal-development' },
  { icon: 'bi-bank2', title: 'FMU Pakistan', desc: 'goAML integration and regulatory reporting for the Financial Monitoring Unit in Pakistan: STR and CTR generation, schema-valid XML filing, submission tracking, and dashboards for SBP inspection. We have had filings rejected on schema detail and fixed them, which is the specific experience worth asking any supplier to describe.', color: 'i-v', slug: 'goaml-fmu-reporting-integration' },
  { icon: 'bi-plug-fill', title: 'API Development', desc: 'API development and integration: REST and GraphQL services with authentication, rate limiting, versioning, and documentation your partners can build against without emailing you. Also the integration work itself, connecting systems never designed to talk. Includes developer portals where third parties self-serve keys and read the specification.', color: 'i-c', slug: 'api-development-integration' },
  { icon: 'bi-cloud-fill', title: 'Cloud Solutions', desc: 'Cloud architecture and migration across AWS, Azure and Google Cloud: infrastructure as code, containers and Kubernetes, CI/CD pipelines, backup and disaster recovery. We plan around the data residency rules that decide where a regulated workload may legally run, and hand over accounts you own outright.', color: 'i-b', slug: 'cloud-migration-services' },
  { icon: 'bi-robot', title: 'AI Automation', desc: 'AI development: document processing and extraction, natural language chatbots, predictive analytics, and machine learning pipelines from data preparation through deployment and monitoring. We start from the process you want changed rather than from the model, and we will say plainly when a rules engine would do the job.', color: 'i-t', slug: 'ai-development-services' },
  { icon: 'bi-layers-fill', title: 'Custom SaaS Platforms', desc: 'Multi-tenant SaaS development: tenant isolation, subscription billing and metering, role permissions, white-labelling, and admin analytics. The decisions that matter get made early, particularly how tenants are separated in the database, because revisiting that after your first hundred paying customers is genuinely expensive.', color: 'i-o', slug: 'custom-saas-development' },
  { icon: 'bi-apple', title: 'iOS Development', desc: 'Native iOS development in Swift and SwiftUI, for apps needing platform features a cross-platform framework cannot reach: secure enclave, HealthKit, background processing, widgets. Includes App Store review preparation, where privacy declarations and data-use disclosures cause considerably more rejections than application code does.', color: 'i-b', slug: 'ios-app-development' },
  { icon: 'bi-android2', title: 'Android Development', desc: 'Native Android development in Kotlin and Jetpack Compose, built for the spread of devices and OS versions real users carry in Pakistan and the wider region. Covers performance on low-end hardware, offline-first behaviour on unreliable networks, enterprise Play Store distribution, and managed device deployment.', color: 'i-g', slug: 'android-app-development' }
];

/**
 * Why-us cards.
 *
 * Rewritten away from the category labels these used to carry ("Infinite
 * Scalability", "Rapid Delivery", "Global Delivery Model"). Every agency's
 * site claims those, which makes them worth nothing to a buyer comparing three
 * suppliers: a differentiator every competitor also asserts is not a
 * differentiator. Each card now states something specific enough that a
 * competitor either cannot copy it or would be caught out if they did, and
 * concrete enough that a buyer can test it on the first call.
 */
export const whyUs: WhyUsItem[] = [
  { num: '', icon: 'bi-cpu', title: 'Deep expertise, narrow on purpose', desc: 'One in-house team in Islamabad across Java, .NET, Python, React, Flutter and cloud. We go deep in regulated finance, healthcare and government rather than claiming every sector equally.', color: 'i-t' },
  { num: '', icon: 'bi-diagram-2', title: 'A development process you can watch', desc: 'Two-week sprints, each ending in a build you can open. A shared backlog visible any day of the week, and architecture decisions recorded with the alternatives we rejected.', color: 'i-b' },
  { num: '', icon: 'bi-person-video3', title: 'The architect takes the first call', desc: 'Not a salesperson who hands you over afterwards. The person who scopes your system is accountable for building it, and stays your point of contact through delivery.', color: 'i-v' },
  { num: '', icon: 'bi-shield-check', title: 'Security built for the examiner', desc: 'Audit trails, access logging, encryption and decision records designed in the first sprint. Retrofitting them before an inspection costs a quarter, and inspectors ask for evidence, not intentions.', color: 'i-o' },
  { num: '', icon: 'bi-life-preserver', title: 'Support that survives the handover', desc: 'Agreed response times, monitoring and alerting configured before launch, documented runbooks. You hold your repository, cloud accounts and data from day one, so staying with us stays a choice.', color: 'i-c' },
  { num: '', icon: 'bi-file-earmark-code', title: 'We have been rejected by the FMU', desc: 'And fixed it. goAML schema work, STR and CTR filing, SBP inspections, HIPAA record handling. Ask any supplier for that story and see how specific the answer gets.', color: 'i-t' }
];

export const industries: IndustryItem[] = [
  { icon: 'bi-bank2', title: 'Finance & Banking', desc: 'Banks, microfinance institutions, lenders and payment companies under State Bank supervision. Core systems, AML and CFT compliance, payment rails, digital wallets.', color: 'i-t' },
  { icon: 'bi-hospital-fill', title: 'Healthcare & MedTech', desc: 'Hospitals, clinics and health technology firms. Electronic health records, telemedicine, medical billing, and HL7 FHIR interoperability with HIPAA-aligned access control.', color: 'i-p' },
  { icon: 'bi-buildings-fill', title: 'Government & Public Sector', desc: 'Federal and provincial departments and their suppliers. Citizen portals, NADRA and CNIC identity verification, digital signatures, and workflows built for procurement review.', color: 'i-b' },
  { icon: 'bi-cart-fill', title: 'E-Commerce & Retail', desc: 'Online retailers and B2B marketplaces. Storefronts, catalogue and inventory systems, order and fulfilment workflows, payment integration, and ERP links that keep stock accurate.', color: 'i-o' },
  { icon: 'bi-truck', title: 'Logistics & Supply Chain', desc: 'Freight, warehousing and distribution businesses. Fleet and shipment tracking, warehouse management, route planning, customs documentation, and IoT sensor data.', color: 'i-v' },
  { icon: 'bi-mortarboard-fill', title: 'Education & EdTech', desc: 'Universities, schools and training providers. Learning management systems, student information and admissions, virtual classrooms, assessment, and fee collection.', color: 'i-c' },
  { icon: 'bi-house-door-fill', title: 'Real Estate & Property', desc: 'Developers, agencies and property managers. Listing portals with map search, CRM for enquiries and viewings, booking and instalment plans, and tenant portals.', color: 'i-g' }
];

export const techStack: TechStackItem[] = [
  { icon: '⚛️', name: 'React' },
  { icon: '🟢', name: 'Node.js' },
  { icon: '🐍', name: 'Python' },
  { icon: '☕', name: 'Java' },
  { icon: '🔷', name: '.NET Core' },
  { icon: '🦋', name: 'Flutter' },
  { icon: '☁️', name: 'AWS' },
  { icon: '🔵', name: 'Azure' },
  { icon: '🐳', name: 'Docker' },
  { icon: '⚙️', name: 'Kubernetes' },
  { icon: '🐘', name: 'PostgreSQL' },
  { icon: '🤖', name: 'TensorFlow' }
];

export interface PortfolioProject extends PortfolioItem {
  cat: string;
}

// TODO(client): the 9 `img` values below are hotlinked Unsplash stock photographs standing in
// for real project work. Same credibility problem as the team photos (CLIENT-ACTIONS.md item 1),
// and hotlinking leaks every visitor to images.unsplash.com on page load. Replace with real
// screenshots, redacted architecture diagrams, or neutral branded panels, self-hosted.
// NOTE: SEO-CHANGELOG.md "Not done, and why" describes these as "~30 CSS background URLs in
// globals.css". That is inaccurate: there are zero external url() references in any CSS file.
// The real exposure is these 9 entries in this file.
export const portfolioProjects: PortfolioProject[] = [
  {
    cat: 'fintech',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75',
    tags: 'Fintech · AML · Compliance',
    title: 'CoreBanking AML Suite',
    desc: 'Real-time transaction monitoring and goAML-integrated compliance for a Tier-1 bank.',
    tech: ['Python', 'React', 'PostgreSQL', 'FMU']
  },
  {
    cat: 'healthcare',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=75',
    tags: 'Healthcare · EHR · HIPAA',
    title: 'MediCore EHR Platform',
    desc: 'HIPAA-compliant Electronic Health Records deployed across 40+ hospitals with integrated telemedicine and billing.',
    tech: ['.NET Core', 'HL7 FHIR', 'Angular']
  },
  {
    cat: 'government',
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=75',
    tags: 'Government · Identity · PKI',
    title: 'NatID Verification Portal',
    desc: 'National identity verification with CNIC/NADRA API, biometric authentication, and PKI digital signatures.',
    tech: ['Java', 'NADRA API', 'PKI']
  },
  {
    cat: 'fintech',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75',
    tags: 'Fintech · Payments · Visa/MC',
    title: 'TranzAxis Payment Gateway',
    // TODO(client): confirm or delete $2.4B annual volume, 99.99% uptime and <200ms
    // authorization. CLIENT-ACTIONS.md item 7. Unevidenced performance figures attached to a
    // named platform are the highest-risk claim class on this site. "certified" removed here
    // for the same reason as app/layout.tsx:121.
    desc: 'Mastercard and Visa payment processing, engineered to PCI-DSS and taken through scheme certification.',
    tech: ['Node.js', 'Mastercard', 'PCI DSS']
  },
  {
    cat: 'enterprise',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=75',
    tags: 'Enterprise · ERP · Manufacturing',
    title: 'OmniERP Manufacturing Suite',
    desc: 'Integrated ERP covering production, inventory, HR, and finance for a multinational conglomerate across 3 countries.',
    tech: ['.NET', 'SQL Server', 'Azure']
  },
  {
    cat: 'mobile',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=75',
    tags: 'Mobile · Fintech · Wallet',
    title: 'FinSync Digital Wallet',
    desc: 'Cross-platform digital wallet with RAAST instant payments, P2P transfers, bill payments. 1M+ active users.',
    tech: ['Flutter', 'RAAST', 'SBP']
  },
  {
    cat: 'healthcare',
    img: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&q=75',
    tags: 'Healthcare · Telemedicine · Mobile',
    title: 'CarePulse Telemedicine App',
    desc: 'HIPAA-compliant telemedicine iOS/Android app with HD video, e-prescriptions, and remote vitals. 500K+ users.',
    tech: ['Swift', 'Kotlin', 'WebRTC']
  },
  {
    cat: 'enterprise',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=75',
    tags: 'Enterprise · CRM · AI',
    title: 'NovuCRM Intelligence Suite',
    desc: 'AI-powered CRM with ML lead scoring, revenue forecasting, and omnichannel engagement with native mobile app.',
    tech: ['React', 'Python ML', 'AWS']
  },
  {
    cat: 'government',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=75',
    tags: 'Government · Tax · FBR',
    title: 'TaxLink Revenue Portal',
    desc: 'Federal tax filing portal integrating FBR APIs, e-signature workflows, automated assessment, and compliance dashboards.',
    tech: ['Java EE', 'FBR API', 'Oracle']
  }
];

/**
 * Homepage FAQ. Rewritten: the previous five were generic, one duplicated a
 * question answered on /faq, and two made claims the site cannot evidence
 * ("live deployments at multiple SBP-regulated institutions", a "4-hour
 * guaranteed response" SLA). Every answer now ends in a link to the page that
 * treats the subject in full. No question here is asked anywhere else.
 */
export const faqs: FaqItem[] = [
  {
    q: 'Is NovuLabs the best software house in Islamabad for my project?',
    a: 'It depends on what you are building, and we would rather tell you that on the first call than after a contract. We are a strong fit for software that someone outside your organisation will inspect: AML and transaction monitoring, payment infrastructure, patient records and government portals. We are the wrong choice for a consumer game or a marketing microsite, and we will say so. The guide to choosing a software house in Islamabad sets out the seven questions that separate the right team from the loudest one.',
    link: { href: '/software-house-in-islamabad', label: 'How to choose a software house in Islamabad' },
  },
  {
    q: 'Why choose a software house in Islamabad rather than one in Lahore or Karachi?',
    a: 'For regulated work, proximity to the regulator matters more than rent. SECP, NADRA, the Financial Monitoring Unit and the federal ministries are here, so a compliance or government question can be settled in a meeting instead of a two-week email thread. Karachi is where the banks are headquartered and Lahore has the largest general technology base; both are good places to hire for other kinds of work.',
    link: { href: '/software-development-in-pakistan', label: 'How the Pakistani software market is laid out' },
  },
  {
    q: 'What kinds of projects does NovuLabs turn down?',
    a: 'Anything a mature commercial product already does well, because building it would sell you years of maintenance for a problem that is already solved. We also will not quote a fixed price on a brief nobody has scoped, and we insist that you, not we, hold the repository, the cloud accounts and the domain from the first day. Saying no early is cheaper for both sides than finding the mismatch in month three.',
    link: { href: '/about', label: 'What we do and do not do' },
  },
  {
    q: 'What do we receive at the end of a paid discovery phase?',
    a: 'A written account of what should be built: the architecture we recommend and the alternatives we rejected, the integration surfaces and regulatory constraints we found, the risks ranked by cost, and a firm estimate. Discovery usually takes two to four weeks. If the honest conclusion is that you should not build, that is the recommendation you get.',
    link: { href: '/contact', label: 'Start with a free technical call' },
  },
  {
    q: 'Will our system pass an SBP or FMU inspection if NovuLabs builds it?',
    a: 'Passing an inspection is your institution\'s outcome, and no supplier can honestly promise it. What we can do is build so the evidence exists: an append-only transaction store so any alert can be reconstructed exactly as the system saw it, goAML XML validated against the schema before it reaches FMU, and screening thresholds versioned with the testing and approval behind every change. Those are the questions an examiner asks.',
    link: { href: '/services/aml-cft-compliance-software', label: 'How we build AML/CFT systems' },
  },
  {
    q: 'Can one team build our backend, web platform and mobile app together?',
    a: 'Yes, and it usually works better that way, because the API is designed once for every client that will use it instead of being bent later to fit a second one. A mobile app inherits the security obligations of the system behind it, so session handling, audit logging and on-device storage get decided alongside the server, not after it.',
    link: { href: '/services', label: 'All our software development services' },
  },
];

/**
 * Leadership and author profiles.
 * ---------------------------------------------------------------------------
 * ⚠️ CLIENT ACTION REQUIRED — HIGHEST-ROI CHANGE ON THE SITE.
 *
 * These three profiles previously used Unsplash stock photographs of strangers
 * under the real names of the company's CEO, CTO and COO. For a vendor asking a
 * bank to trust it with transaction monitoring, that is the single most
 * damaging credibility error on the site, and it is a Search Quality Rater
 * Guidelines negative signal on top of the commercial cost.
 *
 * They have been replaced with neutral branded monograms, which is honest.
 * Replace them with real photographs (self-hosted WebP/JPEG, square, ≥512px).
 * That is one afternoon of work and it is worth more than everything else in
 * this branch combined.
 *
 * `credentials` is intentionally empty. Populate it only with credentials that
 * can be verified: CAMS, CISSP, AWS certifications, degrees, prior employers.
 * An empty credentials array renders nothing; an invented one is a liability.
 */

/**
 * Contact-page FAQs.
 *
 * Lifted out of the client component so FAQPage JSON-LD can be emitted from the
 * server. The Q&A text was already visible on the page; only its location in
 * the codebase changed, which is what keeps the markup policy-compliant.
 */
export const contactFaqs: FaqItem[] = [
  { q: 'What is the minimum project size NovuLabs works with?', a: 'Typically $15,000 USD for a standalone module or MVP. Full enterprise platforms start from $50,000. We focus on end-to-end delivery, not hourly freelance work.' },
  { q: 'Do you sign NDAs before discussions?', a: 'Yes, mutual NDAs before any substantive technical discussion. Your IP and competitive information are protected from the first call.' },
  { q: 'Can you work alongside our existing in-house team?', a: 'Yes. Staff augmentation, co-development, and full outsourcing. Our engineers adapt to your existing stack, tools, sprint ceremonies, and communication preferences.' },
  { q: 'What compliance frameworks do you work to?', a: 'FATF, FMU Pakistan, SBP, HIPAA, HL7 FHIR, PCI-DSS, ISO 27001, GDPR, and Mastercard/Visa scheme requirements. To be precise about the distinction: we engineer to these standards. Where a framework issues certification, that certificate is held by the entity operating the environment, not by its development vendor.' },
  { q: 'Do you offer fixed-price or time-and-material contracts?', a: 'Both. Fixed-price for well-defined, stable requirements. Time-and-material for evolving enterprise platforms. We recommend a model after the discovery call rather than before it.' },
];

export const teamMembers: TeamMemberProfile[] = [
  {
    slug: 'muneeb-ali-jaffari',
    name: 'Muneeb Ali Jaffari',
    role: 'CEO & Founder',
    img: '/team/muneeb-ali-jaffari.jpg',
    imgAlt: 'Muneeb Ali Jaffari, CEO and Founder of NovuLabs',
    bio: 'Sets the commercial direction and takes the first technical call on most enterprise engagements.',
    longBio:
      'Muneeb founded NovuLabs and leads its enterprise engagements, including the initial architecture conversation on most new work. He writes here on build-versus-buy economics and on why the honest recommendation is frequently to buy.',
    skills: ['Enterprise strategy', 'Build vs buy', 'Delivery models'],
    credentials: [],
    knowsAbout: [
      'Enterprise software strategy',
      'Build versus buy assessment',
      'Total cost of ownership modelling',
    ],
  },
  {
    slug: 'shamroz-ali-zaidi',
    name: 'Shamroz Ali Zaidi',
    role: 'Chief Technology Officer',
    img: '/team/shamroz-ali-zaidi.jpg',
    imgAlt: 'Shamroz Ali Zaidi, Chief Technology Officer of NovuLabs',
    bio: 'Owns platform architecture: multi-tenant systems, cloud, and the security posture underneath both.',
    longBio:
      'Shamroz leads platform architecture at NovuLabs, covering multi-tenant SaaS design, cloud and Kubernetes platform engineering, and the security posture of regulated workloads. He writes here on HIPAA safeguards and HL7 FHIR interoperability.',
    skills: ['Platform architecture', 'Cloud & Kubernetes', 'Security engineering'],
    credentials: [],
    knowsAbout: [
      'Multi-tenant SaaS architecture',
      'HIPAA Security Rule implementation',
      'HL7 FHIR interoperability',
      'Kubernetes platform engineering',
    ],
  },
  {
    slug: 'ali-zaidi',
    name: 'Ali Zaidi',
    role: 'Chief Operating Officer',
    img: '/team/ali-zaidi.jpg',
    imgAlt: 'Ali Zaidi, Chief Operating Officer of NovuLabs',
    bio: 'Runs delivery and the compliance practice, including AML/CFT engagements with SBP-regulated institutions.',
    longBio:
      'Ali runs delivery operations and the compliance practice at NovuLabs, including AML/CFT engagements with SBP-regulated institutions. He writes here on goAML integration, transaction monitoring design, and what regulatory examination asks of a system.',
    skills: ['AML/CFT programmes', 'Delivery operations', 'Regulatory engagement'],
    credentials: [],
    knowsAbout: [
      'AML/CFT compliance programmes',
      'goAML STR and CTR reporting',
      'Transaction monitoring system design',
      'FMU and SBP regulatory requirements',
    ],
  },
];
