import { ServiceItem, WhyUsItem, IndustryItem, TechStackItem, PortfolioItem, FaqItem, TeamMember } from '../types';

export const services: ServiceItem[] = [
  { icon: 'bi-globe', title: 'Website Development', desc: 'High-performance corporate sites, portals & web apps with SEO-first architecture.', color: 'i-b' },
  { icon: 'bi-cpu-fill', title: 'Enterprise Software', desc: 'Custom multi-tenant SaaS, enterprise middleware, and mission-critical platforms.', color: 'i-v' },
  { icon: 'bi-bank', title: 'Financial Software', desc: 'Core banking, digital wallets, lending systems, and investment management platforms.', color: 'i-t' },
  { icon: 'bi-credit-card-2-front', title: 'Payment Gateways', desc: 'PCI-DSS compliant integrations supporting global payment rails and local acquirers.', color: 'i-c' },
  { icon: 'bi-patch-check-fill', title: 'Mastercard / Visa', desc: 'Certified direct integrations with Mastercard and Visa networks — issuing and acquiring.', color: 'i-o' },
  { icon: 'bi-phone-fill', title: 'Mobile Apps', desc: 'Cross-platform iOS & Android apps built with Flutter and native Swift/Kotlin.', color: 'i-g' },
  { icon: 'bi-heart-pulse-fill', title: 'Healthcare Software', desc: 'HIPAA-compliant EHR, telemedicine, and clinical workflow platforms for providers.', color: 'i-p' },
  { icon: 'bi-clipboard2-pulse-fill', title: 'Medical Billing', desc: 'End-to-end billing with ICD-10/CPT coding, claim management, and payer integration.', color: 'i-c' },
  { icon: 'bi-diagram-3-fill', title: 'ERP Systems', desc: 'Custom ERP integrating finance, HR, supply chain, and procurement in one system.', color: 'i-v' },
  { icon: 'bi-people-fill', title: 'CRM Systems', desc: 'AI-powered CRM with lead scoring, pipeline analytics, and omnichannel engagement.', color: 'i-o' },
  { icon: 'bi-shield-lock-fill', title: 'AML Systems', desc: 'Real-time monitoring, risk scoring, and regulatory reporting for compliant institutions.', color: 'i-t' },
  { icon: 'bi-flag-fill', title: 'CFT Compliance', desc: 'Counter-Financing of Terrorism with PEP screening and automated STR generation.', color: 'i-b' },
  { icon: 'bi-activity', title: 'Transaction Monitoring', desc: 'ML-powered analytics detecting suspicious patterns across millions of transactions.', color: 'i-p' },
  { icon: 'bi-filetype-xml', title: 'XML Schema Integration', desc: 'ISO 20022, SWIFT XML, and HL7 FHIR schema processing for financial messaging.', color: 'i-y' },
  { icon: 'bi-buildings-fill', title: 'Government Portals', desc: 'National identity portals with NADRA/CNIC API, digital signature, and e-gov services.', color: 'i-g' },
  { icon: 'bi-bank2', title: 'FMU Pakistan', desc: 'Full GOAML integration, STR/CTR filing, and SBP regulatory compliance dashboards.', color: 'i-v' },
  { icon: 'bi-plug-fill', title: 'API Development', desc: 'RESTful & GraphQL APIs with enterprise security, rate limiting, and developer portals.', color: 'i-c' },
  { icon: 'bi-cloud-fill', title: 'Cloud Solutions', desc: 'AWS, Azure & GCP architecture, migration, and managed infrastructure for enterprises.', color: 'i-b' },
  { icon: 'bi-robot', title: 'AI Automation', desc: 'ML pipelines, NLP chatbots, document processing, and predictive analytics platforms.', color: 'i-t' },
  { icon: 'bi-layers-fill', title: 'Custom SaaS Platforms', desc: 'Multi-tenant SaaS with subscription billing, white-labeling, and analytics dashboards.', color: 'i-o' },
  { icon: 'bi-apple', title: 'iOS Development', desc: 'Native Swift & SwiftUI apps optimized for performance, security, and App Store approval.', color: 'i-b' },
  { icon: 'bi-android2', title: 'Android Development', desc: 'Kotlin-first apps for diverse device ecosystems and enterprise Play Store deployment.', color: 'i-g' }
];

export const whyUs: WhyUsItem[] = [
  { num: '01', icon: 'bi-shield-check', title: 'Security-First Engineering', desc: 'OWASP, PCI-DSS, ISO 27001, and HIPAA compliance built in from day one — never an afterthought.', color: 'i-t' },
  { num: '02', icon: 'bi-graph-up-arrow', title: 'Infinite Scalability', desc: 'Cloud-native architectures designed to scale from 1,000 to 100 million users without re-platforming.', color: 'i-b' },
  { num: '03', icon: 'bi-award-fill', title: 'Regulatory Expertise', desc: 'Deep knowledge of FATF, FMU Pakistan, SBP, FCA, and global financial compliance — coded precisely.', color: 'i-v' },
  { num: '04', icon: 'bi-lightning-fill', title: 'Rapid Delivery', desc: 'Agile sprints with CI/CD pipelines deliver production-ready features every two weeks, consistently.', color: 'i-o' },
  { num: '05', icon: 'bi-headset', title: '24/7 Dedicated Support', desc: 'Round-the-clock NOC monitoring, SLA-backed support tiers, and dedicated account managers.', color: 'i-c' },
  { num: '06', icon: 'bi-globe2', title: 'Global Delivery Model', desc: 'Office in Islamabad — follow-the-sun development velocity.', color: 'i-t' }
];

export const industries: IndustryItem[] = [
  { icon: 'bi-bank2', title: 'Banking & Fintech', desc: 'Core banking, AML/CFT, payment rails, digital wallets', color: 'i-t' },
  { icon: 'bi-hospital-fill', title: 'Healthcare & MedTech', desc: 'EHR, telemedicine, medical billing, HIPAA solutions', color: 'i-p' },
  { icon: 'bi-buildings-fill', title: 'Government & Public Sector', desc: 'Identity portals, citizen services, e-government', color: 'i-b' },
  { icon: 'bi-cart-fill', title: 'E-Commerce & Retail', desc: 'B2B/B2C platforms, inventory, order processing', color: 'i-o' },
  { icon: 'bi-gear-wide-connected', title: 'Manufacturing & Logistics', desc: 'ERP, supply chain, warehouse automation, IoT', color: 'i-v' },
  { icon: 'bi-mortarboard-fill', title: 'Education & EdTech', desc: 'LMS, virtual classrooms, student management', color: 'i-c' }
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

export const portfolioProjects: PortfolioProject[] = [
  {
    cat: 'fintech',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75',
    tags: 'Fintech · AML · Compliance',
    title: 'CoreBanking AML Suite',
    desc: 'Real-time transaction monitoring and GOAML-integrated compliance for a Tier-1 bank processing 2M+ daily transactions.',
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
    desc: 'Mastercard & Visa certified payment processing — $2.4B annual transactions, 99.99% uptime, &lt;200ms authorization.',
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

export const faqs: FaqItem[] = [
  { q: 'What industries does NovuLabs specialize in?', a: 'Banking & Fintech, Healthcare, Government, Manufacturing, and E-Commerce. Our deepest expertise is in AML, CFT, and FMU Pakistan compliance for regulated financial institutions.' },
  { q: 'How do I start a project with NovuLabs?', a: 'Book a free consultation — a 45-minute discovery call with a senior architect, zero commitment. We listen first, then advise on the right approach for your specific needs.' },
  { q: 'Do you offer post-launch support and maintenance?', a: 'Yes. Tiered SLA packages from standard business-hours support to 24/7 platinum tiers with 4-hour guaranteed response. All enterprise clients get a dedicated account manager.' },
  { q: 'Are your solutions compliant with FMU Pakistan regulations?', a: 'Absolutely. We have live deployments at multiple SBP-regulated institutions — GOAML integration, STR/CTR reporting, AML/CFT screening, all under FMU and FATF frameworks.' },
  { q: 'Can you work alongside our existing team?', a: 'Yes. Staff augmentation, co-development, and full outsourcing — we adapt to your stack, tools, and methodologies. Many clients embed our engineers alongside their in-house teams.' }
];

export interface TeamMemberWithSkills extends TeamMember {
  skills: string[];
}

export const teamMembers: TeamMemberWithSkills[] = [
  {
    name: 'Muneeb Ali Jaffari',
    role: 'CEO & Founder',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
    bio: 'Leading strategic corporate vision, global enterprise relations, and institutional delivery models at NovuLabs.',
    skills: ['Strategy', 'Leadership', 'Compliance']
  },
  {
    name: 'Shamroz Ali Zaidi',
    role: 'CTO',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80',
    bio: 'Directing core software engineering frameworks, multi-tenant cloud architectures, and systems scalability.',
    skills: ['Architecture', 'Cloud Systems', 'Security']
  },
  {
    name: 'Ali Zaidi',
    role: 'COO',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80',
    bio: 'Managing global operations, compliance policies, service delivery pipelines, and corporate scaling.',
    skills: ['Operations', 'Compliance', 'Scaling']
  }
];
