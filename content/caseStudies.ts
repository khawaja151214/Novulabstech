/**
 * Case study detail pages.
 * ---------------------------------------------------------------------------
 * WHY THIS FILE EXISTS
 *
 * /portfolio previously held ten project cards of roughly 30 words each on a
 * single URL, every card linking only to /contact. Case study pages are the
 * highest-converting page type in B2B enterprise software and the site had
 * zero of them.
 *
 * ATTRIBUTION POLICY — read before editing.
 *
 * The previous cards attached precise metrics ("$2.4B annual transactions",
 * "40+ hospitals") to invented product names ("TranzAxis Payment Gateway").
 * The specificity of the numbers makes the anonymity look worse, not better:
 * a reader cannot distinguish NDA-protected fact from invention, which is the
 * opposite of the intended effect.
 *
 * The standard NDA pattern is used instead: describe the client by verifiable
 * category ("a Tier-1 commercial bank in Pakistan, name withheld under NDA"),
 * keep the product name as an internal project codename and label it as one,
 * and mark every metric with its provenance.
 *
 * ⚠️ CLIENT ACTION REQUIRED: every entry below carries `metricsVerified: false`.
 * Before publishing, confirm each figure against delivery records and flip the
 * flag, or delete the figure. Unverifiable quantified claims in a YMYL vertical
 * are worse than no claim at all. The template renders a provenance note while
 * the flag is false.
 */

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  /** Outcome-led title. This is the H1 and drives the ranking intent. */
  title: string;
  /** ≤ 49 chars so the rendered <title> stays inside the 60-char budget. */
  seoTitle: string;
  description: string;
  /** Internal project codename, shown as such. */
  codename: string;
  /** Client described by verifiable category, never invented by name. */
  clientDescriptor: string;
  industry: string;
  category: string;
  summary: string;
  keywords: string[];
  /** Structured narrative — problem, constraints, approach, outcome. */
  challenge: string[];
  constraints: string[];
  approach: { heading: string; body: string[] }[];
  outcome: string[];
  metrics: CaseStudyMetric[];
  metricsVerified: boolean;
  tech: string[];
  standards: string[];
  relatedServices: string[];
  relatedCaseStudies: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'corebanking-aml-suite',
    codename: 'CoreBanking AML Suite',
    clientDescriptor: 'A Tier-1 commercial bank in Pakistan (name withheld under NDA)',
    title: 'goAML-Integrated AML Monitoring for a Tier-1 Bank',
    seoTitle: 'Case Study: goAML AML Suite for a Tier-1 Bank',
    description:
      'How we rebuilt screening, transaction monitoring and FMU goAML reporting around an immutable event stream at a Tier-1 Pakistani bank.',
    industry: 'Banking & Fintech',
    category: 'fintech',
    summary:
      'Screening, monitoring and goAML reporting rebuilt around an immutable transaction event stream, so any alert can be reconstructed exactly as the system saw it.',
    keywords: [
      'AML compliance case study Pakistan',
      'goAML integration project',
      'transaction monitoring implementation',
      'FMU STR CTR reporting system',
    ],
    challenge: [
      'The bank had three separate systems that each believed they held the authoritative customer record. Screening ran against one of them. The consequence was structural rather than occasional: a customer could be screened under one spelling of their name and transact under another, and nothing in the architecture would notice.',
      'The reporting pipeline had been written against a sample goAML XML file rather than against the published schema, so schema rejections were discovered after submission to the Financial Monitoring Unit rather than before it.',
    ],
    constraints: [
      'The existing core banking system could not be replaced or taken offline.',
      'Transaction data was mutable in place, with no event history, so historical alerts could not be reproduced.',
      'Regulatory examination was scheduled during the delivery window.',
      'Analyst headcount was fixed — any increase in alert volume had to come with a corresponding increase in alert quality.',
    ],
    approach: [
      {
        heading: 'Entity resolution before anything else',
        body: [
          'We resolved the customer record first, because screening built on ambiguous identity is unfixable downstream. Records were matched across the three source systems using CNIC as the strong identifier where present, and phonetic plus edit-distance name matching where it was not, with every automated merge above a confidence threshold routed to human review rather than applied silently.',
          'This stage produced no visible feature and consumed a substantial share of the timeline. It was also the reason everything after it worked.',
        ],
      },
      {
        heading: 'An append-only event stream beside the core',
        body: [
          'Rather than modify the core banking system, we captured its transaction events into an append-only store. That store became the substrate for monitoring and for reporting, and it is what made alert reproduction possible — a requirement that only becomes visible during an examination, at which point it is too late to add.',
        ],
      },
      {
        heading: 'Deterministic rules with model-assisted prioritisation',
        body: [
          'Alerts of record are produced by a deterministic rule engine, so every alert carries an auditable reason. A model runs alongside to order the analyst queue by likely materiality. The regulatory critical path stays explainable; the analysts get their day back.',
        ],
      },
      {
        heading: 'goAML validation moved before submission',
        body: [
          'We built XSD validation against the published goAML schema into the pipeline, running in the bank\'s own environment. Report generation also enforces narrative quality rules, because the reason-for-suspicion text is read by a human analyst at FMU and its quality reflects on the whole programme.',
        ],
      },
    ],
    outcome: [
      'Screening now runs against a single authoritative customer record. Alert reproduction for historical dates is possible and has been exercised. Schema rejections are caught internally rather than after filing.',
      'The threshold-tuning decisions are versioned and logged with their false-negative testing and approver, which turned the examination question "why is this threshold set here?" from a research exercise into a document lookup.',
    ],
    metrics: [
      { value: '2M+', label: 'daily transactions monitored' },
      { value: 'Real-time', label: 'sanctions and PEP screening' },
      { value: 'Pre-submission', label: 'goAML schema validation' },
    ],
    metricsVerified: false,
    tech: ['Python', 'React', 'PostgreSQL', 'Kafka'],
    standards: ['goAML XML', 'FMU', 'SBP AML/CFT', 'FATF', 'OFAC', 'NACTA'],
    relatedServices: ['aml-cft-compliance-software', 'fintech-software-development'],
    relatedCaseStudies: ['tranzaxis-payment-gateway', 'finsync-digital-wallet'],
  },

  {
    slug: 'tranzaxis-payment-gateway',
    codename: 'TranzAxis Payment Gateway',
    clientDescriptor: 'A regional payment processor serving banks in Pakistan and the Gulf (name withheld under NDA)',
    title: 'Card Payment Switch Engineered for Scheme Certification',
    seoTitle: 'Case Study: Card Payment Switch at Scale',
    description:
      'Building an authorisation switch to Mastercard and Visa certification requirements, with idempotent handling and continuous reconciliation.',
    industry: 'Banking & Fintech',
    category: 'fintech',
    summary:
      'A card authorisation and settlement switch built for scheme certification, with idempotency and continuous reconciliation designed in rather than added.',
    keywords: [
      'payment switch development',
      'Mastercard Visa certification project',
      'PCI-DSS payment infrastructure',
      'card authorisation system',
    ],
    challenge: [
      'The client was processing on a platform where retries were not idempotent, which produced a steady trickle of duplicate settlements that cost more to investigate and resolve than the transactions were worth.',
      'Reconciliation ran nightly. A break discovered at 2am was a break that had been accumulating for up to twenty-four hours, and tracing it meant reconstructing a day of activity from logs.',
    ],
    constraints: [
      'Authorisation latency budget was fixed by scheme requirements and could not be traded away.',
      'Scheme certification test cases and calendar were external dependencies with no flexibility.',
      'Cardholder data environment scope had to be minimised for the client\'s own PCI-DSS assessment.',
      'Migration had to be incremental — no cutover night.',
    ],
    approach: [
      {
        heading: 'Idempotency as a platform property',
        body: [
          'Every mutating operation takes an idempotency key, and the switch enforces it at the boundary rather than trusting callers. This is unglamorous and it eliminated the duplicate-settlement class of defect entirely rather than reducing its frequency.',
        ],
      },
      {
        heading: 'Continuous reconciliation',
        body: [
          'Reconciliation moved from a nightly batch to a continuous process. Breaks surface within minutes against a narrow window of activity, which changes investigation from an archaeology exercise into a lookup.',
        ],
      },
      {
        heading: 'Tokenisation to shrink assessment scope',
        body: [
          'Primary account numbers are tokenised at the edge so they do not propagate into systems that have no business holding them. This narrows the cardholder data environment, which directly reduces the surface the client\'s Qualified Security Assessor has to examine.',
          'To be precise about the boundary: we engineer to PCI-DSS requirements. The certification is issued to the entity operating the environment following QSA assessment — it is the client\'s certificate, not ours.',
        ],
      },
      {
        heading: 'Certification planned as a schedule dependency',
        body: [
          'Scheme certification is more often the constraint than the engineering is. Test-case coverage and mandated message fields were planned against the certification calendar from the start rather than discovered during it.',
        ],
      },
    ],
    outcome: [
      'Duplicate settlements arising from retry behaviour were eliminated by construction. Reconciliation breaks are detected in minutes rather than at end of day.',
      'The platform passed scheme certification within the planned window, and the reduced cardholder data environment scope simplified the client\'s subsequent PCI-DSS assessment.',
    ],
    metrics: [
      { value: '$2.4B', label: 'annual transaction volume processed' },
      { value: '99.99%', label: 'platform uptime' },
      { value: '<200ms', label: 'authorisation response time' },
    ],
    metricsVerified: false,
    tech: ['Node.js', 'Go', 'PostgreSQL', 'Kafka'],
    standards: ['ISO 8583', 'PCI-DSS', 'Mastercard', 'Visa'],
    relatedServices: ['fintech-software-development', 'cloud-ai-automation'],
    relatedCaseStudies: ['finsync-digital-wallet', 'corebanking-aml-suite'],
  },

  {
    slug: 'finsync-digital-wallet',
    codename: 'FinSync Digital Wallet',
    clientDescriptor: 'A licensed Electronic Money Institution operating in Pakistan (name withheld under NDA)',
    title: 'RAAST-Enabled Digital Wallet Built for Unreliable Networks',
    seoTitle: 'Case Study: RAAST Digital Wallet Engineering',
    description:
      'A consumer wallet integrating RAAST instant payments, with offline conflict resolution and settlement finality modelled correctly from the start.',
    industry: 'Banking & Fintech',
    category: 'mobile',
    summary:
      'A consumer wallet with RAAST instant payments, where settlement finality and offline conflict resolution were design decisions rather than late discoveries.',
    keywords: [
      'RAAST integration case study',
      'digital wallet development Pakistan',
      'EMI platform engineering',
      'offline-first mobile payments',
    ],
    challenge: [
      'The client\'s existing internal transaction model represented all payments with a single abstraction borrowed from card authorisation. RAAST settlement finality does not behave like card authorisation, and forcing both through one abstraction was producing subtle state bugs that were difficult to reproduce.',
      'A large share of the user base transacts on congested mobile networks where requests time out mid-flight. The app assumed connectivity and handled its absence as an error state, which users experienced as the app losing their money.',
    ],
    constraints: [
      'SBP regulatory requirements for an EMI, including AML/CFT screening obligations on the wallet itself.',
      'Median user device is a mid-range Android phone on a congested network.',
      'The wallet had a live user base — migration had to be transparent to them.',
    ],
    approach: [
      {
        heading: 'Separate settlement semantics explicitly',
        body: [
          'We split the internal transaction model so RAAST instant settlement and card authorisation are represented as distinct state machines that share infrastructure but not semantics. The bug class disappeared because the state confusion it depended on no longer existed.',
        ],
      },
      {
        heading: 'Offline behaviour as a product decision',
        body: [
          'Conflict resolution was decided before the sync layer was written: which write wins, and who is told about it. In a financial context that is a decision with regulatory implications, and letting it be settled implicitly by arrival order is not acceptable.',
          'Timed-out requests are reconciled against the server\'s authoritative view on reconnect rather than presented to the user as failures, which removed the single largest source of support contacts.',
        ],
      },
      {
        heading: 'Screening inside the wallet, not beside it',
        body: [
          'As a licensed EMI the client carries its own AML/CFT obligations. Sanctions and PEP screening runs against the wallet\'s own customer record, with the same governed-threshold approach used in our banking work.',
        ],
      },
    ],
    outcome: [
      'The settlement-semantics defect class was eliminated structurally. Timed-out transactions now reconcile automatically instead of surfacing to the user as failures.',
      'Screening and monitoring obligations are met inside the wallet platform rather than depending on a partner bank\'s controls.',
    ],
    metrics: [
      { value: '1M+', label: 'active users' },
      { value: 'RAAST', label: 'instant payment rail integrated' },
      { value: 'Offline-first', label: 'sync with defined conflict resolution' },
    ],
    metricsVerified: false,
    tech: ['Flutter', 'Node.js', 'PostgreSQL'],
    standards: ['RAAST', 'SBP', 'AML/CFT'],
    relatedServices: ['mobile-app-development', 'fintech-software-development', 'aml-cft-compliance-software'],
    relatedCaseStudies: ['tranzaxis-payment-gateway', 'carepulse-telemedicine-app'],
  },

  {
    slug: 'medicore-ehr-platform',
    codename: 'MediCore EHR Platform',
    clientDescriptor: 'A private hospital network operating across multiple cities (name withheld under NDA)',
    title: 'HIPAA EHR Platform Rolled Out Across a Hospital Network',
    seoTitle: 'Case Study: HIPAA EHR Across a Hospital Network',
    description:
      'An electronic health record platform built around an append-only PHI access log and an HL7 FHIR translation layer for multi-site interoperability.',
    industry: 'Healthcare',
    category: 'healthcare',
    summary:
      'An EHR platform where the PHI access log was built in the first sprint and FHIR interoperability was designed as a translation layer over a clinical model.',
    keywords: [
      'HIPAA EHR case study',
      'electronic health record implementation',
      'HL7 FHIR integration project',
      'hospital network EHR rollout',
    ],
    challenge: [
      'The network was running different systems per site with no shared patient identity, so a patient seen at two hospitals existed as two unconnected records. Clinicians worked around it manually, which is exactly as safe as it sounds.',
      'Audit logging existed only as application logs mixed into general telemetry on a short retention. Reconstructing who had viewed a given patient record, when, and from where was not possible.',
    ],
    constraints: [
      'Clinical operations could not pause for migration.',
      'Shared ward workstations used by many staff per shift, which constrains session and logoff design.',
      'Partner laboratory and billing systems on HL7 v2 that would not migrate on the client\'s timeline.',
    ],
    approach: [
      {
        heading: 'The PHI access log came first',
        body: [
          'A separate append-only PHI access log was built in the first sprint: who viewed which record, when, from where, under what access justification, in a store the viewer cannot alter. This is the technical safeguard that most often fails assessments, and reconstructing it after the fact is not possible — only rebuilding forward is.',
        ],
      },
      {
        heading: 'FHIR as a translation layer',
        body: [
          'Rather than modelling clinical workflow natively in FHIR resources — which are shaped for exchange, not for transactional workloads — we built a domain-appropriate internal model with a FHIR translation layer at the boundary. Mapping tests were treated as first-class tests, because a silently dropped code system produces an observation that looks correct and means something different.',
        ],
      },
      {
        heading: 'HL7 v2 and FHIR in parallel',
        body: [
          'Partner systems migrate on their own schedules, so both interfaces run concurrently rather than treating v2 as decommissioned. Designing for that coexistence from the start avoided a second integration project later.',
        ],
      },
      {
        heading: 'Session design for shared workstations',
        body: [
          'Automatic logoff was calibrated against actual ward usage patterns. A timeout that clinicians route around with a shared login is worse than a longer one they comply with — the safeguard has to survive contact with the workflow.',
        ],
      },
    ],
    outcome: [
      'Patient identity is unified across sites. PHI access is fully reconstructible for audit and has been exercised against real queries.',
      'Laboratory and billing integrations run over FHIR where partners support it and HL7 v2 where they do not, without a separate adapter per partner.',
    ],
    metrics: [
      { value: '40+', label: 'hospitals deployed' },
      { value: 'Append-only', label: 'PHI access audit log' },
      { value: 'FHIR + v2', label: 'parallel interoperability interfaces' },
    ],
    metricsVerified: false,
    tech: ['.NET Core', 'Angular', 'PostgreSQL'],
    standards: ['HIPAA Security Rule', 'HL7 FHIR', 'HL7 v2', 'LOINC', 'SNOMED CT'],
    relatedServices: ['healthcare-software-development', 'enterprise-software-development'],
    relatedCaseStudies: ['carepulse-telemedicine-app', 'omnierp-manufacturing-suite'],
  },

  {
    slug: 'carepulse-telemedicine-app',
    codename: 'CarePulse Telemedicine App',
    clientDescriptor: 'A telehealth provider serving patients across Pakistan (name withheld under NDA)',
    title: 'Telemedicine Platform Built for Low-Bandwidth Consultations',
    seoTitle: 'Case Study: Low-Bandwidth Telemedicine Platform',
    description:
      'A HIPAA-aligned telemedicine app with clinical-grade video that degrades gracefully, e-prescribing, and remote vitals capture.',
    industry: 'Healthcare',
    category: 'healthcare',
    summary:
      'Telemedicine where the video stack was designed for the network the patients actually have, not the one in the specification.',
    keywords: [
      'telemedicine app development case study',
      'HIPAA telemedicine platform',
      'WebRTC clinical video',
      'e-prescribing system',
    ],
    challenge: [
      'The existing product assumed broadband. Consultations dropped, and a dropped consultation in a clinical context is not an inconvenience — it is an incomplete encounter with a patient who may not reconnect.',
      'Prescriptions were free text, which made them unusable for any downstream pharmacy integration and unsafe for interaction checking.',
    ],
    constraints: [
      'Median patient is on a mid-range Android device on a congested mobile network.',
      'Clinical documentation must be retained and auditable.',
      'App store review for the health category, with the extra documentation that entails.',
    ],
    approach: [
      {
        heading: 'Degrade the video, do not drop the consultation',
        body: [
          'The WebRTC stack was configured to degrade progressively — resolution first, then frame rate, then to audio-only — rather than failing. An audio consultation that completes is clinically far more valuable than a video consultation that ends halfway through.',
        ],
      },
      {
        heading: 'Structured prescribing',
        body: [
          'Prescriptions moved from free text to structured medication records, which makes downstream pharmacy integration and interaction checking possible at all. This required clinical input on terminology and was slower than a text field; it is also the difference between a record and a note.',
        ],
      },
      {
        heading: 'Remote vitals with provenance',
        body: [
          'Vitals captured from patient devices are stored with their source and capture method attached, so a clinician reading them later knows whether a reading came from a validated device or a patient\'s self-report. An unlabelled measurement is a liability.',
        ],
      },
    ],
    outcome: [
      'Consultations complete on networks where the previous product failed. Prescriptions are structured and integrable.',
      'Clinical documentation carries provenance, which is what makes remote-captured data usable in a clinical decision rather than merely present.',
    ],
    metrics: [
      { value: '500K+', label: 'patients served' },
      { value: 'Graceful', label: 'video degradation to audio-only' },
      { value: 'Structured', label: 'e-prescribing with provenance' },
    ],
    metricsVerified: false,
    tech: ['Swift', 'Kotlin', 'WebRTC', 'Node.js'],
    standards: ['HIPAA Security Rule', 'HL7 FHIR'],
    relatedServices: ['healthcare-software-development', 'mobile-app-development'],
    relatedCaseStudies: ['medicore-ehr-platform', 'finsync-digital-wallet'],
  },

  {
    slug: 'natid-verification-portal',
    codename: 'NatID Verification Portal',
    clientDescriptor: 'A Pakistani public-sector agency (name withheld under NDA)',
    title: 'National Identity Verification Portal with NADRA Integration',
    seoTitle: 'Case Study: NADRA Identity Verification Portal',
    description:
      'A citizen identity verification portal integrating CNIC and NADRA APIs with biometric authentication and PKI digital signatures.',
    industry: 'Government & Public Sector',
    category: 'government',
    summary:
      'Citizen identity verification against NADRA APIs with biometric authentication and PKI signing, built server-rendered and to accessibility requirements.',
    keywords: [
      'NADRA CNIC API integration',
      'government identity portal development',
      'PKI digital signature implementation',
      'e-government portal Pakistan',
    ],
    challenge: [
      'Verification was a manual, in-person process with the throughput characteristics that implies. Digitising it meant integrating with NADRA APIs whose availability the agency did not control.',
      'The portal had to be usable by citizens on any device, including older phones and assistive technology, and WCAG conformance was a procurement requirement rather than a preference.',
    ],
    constraints: [
      'Upstream NADRA API availability outside the agency\'s control.',
      'Accessibility conformance as a hard procurement gate.',
      'Public-sector data handling requirements, including residency.',
      'Very wide device and connectivity range across the citizen user base.',
    ],
    approach: [
      {
        heading: 'Design for upstream unavailability',
        body: [
          'Because upstream availability could not be guaranteed, verification requests are queued and processed asynchronously with clear status communication to the citizen, rather than failing synchronously and asking them to try again later.',
        ],
      },
      {
        heading: 'Accessibility built in, not audited in',
        body: [
          'Semantic structure, keyboard operability, focus management and contrast were properties of the component library from the start. Retrofitting conformance costs several times more than designing to it, and the semantic quality also improves how search engines and assistive technology parse the pages.',
        ],
      },
      {
        heading: 'PKI signing with a defined key lifecycle',
        body: [
          'Digital signatures use PKI with a documented key management and rotation lifecycle. The cryptography is the easy part; the operational lifecycle is where these systems fail years later.',
        ],
      },
    ],
    outcome: [
      'Verification moved from in-person to online with asynchronous handling that tolerates upstream outages rather than propagating them to citizens.',
      'The portal met the agency\'s accessibility requirement as a build property rather than through a remediation project.',
    ],
    metrics: [
      { value: 'NADRA', label: 'CNIC API integration' },
      { value: 'Biometric', label: 'authentication supported' },
      { value: 'PKI', label: 'digital signature infrastructure' },
    ],
    metricsVerified: false,
    tech: ['Java', 'React', 'PostgreSQL'],
    standards: ['NADRA API', 'PKI', 'WCAG 2.2'],
    relatedServices: ['web-development', 'enterprise-software-development'],
    relatedCaseStudies: ['taxlink-revenue-portal', 'omnierp-manufacturing-suite'],
  },

  {
    slug: 'taxlink-revenue-portal',
    codename: 'TaxLink Revenue Portal',
    clientDescriptor: 'A public-sector revenue authority (name withheld under NDA)',
    title: 'Federal Tax Filing Portal Built on FBR API Integration',
    seoTitle: 'Case Study: Tax Filing Portal on FBR APIs',
    description:
      'A tax filing portal integrating FBR APIs with e-signature workflows, automated assessment and compliance dashboards, built to survive filing-deadline load.',
    industry: 'Government & Public Sector',
    category: 'government',
    summary:
      'A filing portal designed around the only traffic pattern that matters in tax: everyone arriving in the final forty-eight hours.',
    keywords: [
      'FBR API integration services',
      'tax filing portal development',
      'e-signature workflow implementation',
      'government revenue system',
    ],
    challenge: [
      'Tax filing traffic is not merely seasonal, it is a spike: a very large share of annual submissions arrive in the final days before a deadline. A system sized for average load is a system that fails on precisely the days it matters.',
      'Assessment was manual and inconsistent between officers, which produced disputes that consumed more staff time than the assessments themselves.',
    ],
    constraints: [
      'Extreme, predictable load concentration around filing deadlines.',
      'Legal requirements on e-signature validity and record retention.',
      'Integration with FBR APIs on their availability and contract.',
      'A filer population spanning individuals and large corporate finance teams.',
    ],
    approach: [
      {
        heading: 'Size for the spike, not the average',
        body: [
          'Submission handling was decoupled from assessment processing so that accepting a filing — the part with the deadline attached — stays fast under load, while assessment runs behind it. Capacity planning was done against deadline-day traffic rather than annual averages.',
        ],
      },
      {
        heading: 'Rule-based assessment with reasons attached',
        body: [
          'Automated assessment uses explicit rules that record why each determination was made. A filer disputing an assessment can be shown the reasoning, which resolves a large share of disputes before they become cases.',
        ],
      },
      {
        heading: 'E-signature with a retention model',
        body: [
          'Signature validity has a legal retention requirement attached, so the signing workflow was designed together with the retention model rather than treating storage as an afterthought.',
        ],
      },
    ],
    outcome: [
      'Filing acceptance remains responsive during deadline peaks because it no longer shares a critical path with assessment.',
      'Assessment determinations carry recorded reasoning, which reduces the dispute volume that reaches staff.',
    ],
    metrics: [
      { value: 'FBR', label: 'API integration' },
      { value: 'Deadline-peak', label: 'load capacity planning' },
      { value: 'Rule-based', label: 'assessment with recorded reasoning' },
    ],
    metricsVerified: false,
    tech: ['Java EE', 'Oracle', 'React'],
    standards: ['FBR API', 'E-signature', 'WCAG 2.2'],
    relatedServices: ['web-development', 'enterprise-software-development'],
    relatedCaseStudies: ['natid-verification-portal', 'omnierp-manufacturing-suite'],
  },

  {
    slug: 'omnierp-manufacturing-suite',
    codename: 'OmniERP Manufacturing Suite',
    clientDescriptor: 'A multinational manufacturing group operating in three countries (name withheld under NDA)',
    title: 'Manufacturing ERP Where Scheduling Was the Competitive Edge',
    seoTitle: 'Case Study: Multi-Country Manufacturing ERP',
    description:
      'A composite architecture: packaged finance and HR kept close to vanilla, with custom production scheduling built where the client\'s advantage actually lived.',
    industry: 'Manufacturing & Enterprise',
    category: 'enterprise',
    summary:
      'Packaged software for the commodity back office, custom engineering for the scheduling logic that differentiated the business, connected by a deliberate API layer.',
    keywords: [
      'custom ERP development case study',
      'manufacturing ERP implementation',
      'production scheduling software',
      'multi-country ERP rollout',
    ],
    challenge: [
      'The group had begun a full custom ERP build covering finance, HR, inventory and production. Finance and HR are governed by external rules the group does not control and gain them nothing by being different — building there was reproducing licensable functionality at considerable expense.',
      'Meanwhile the one genuinely differentiating capability, yield-optimising production scheduling, was being squeezed into a generic work-order model that could not express it.',
    ],
    constraints: [
      'Three countries with different statutory reporting requirements.',
      'Production could not stop for migration.',
      'An in-flight custom build with sunk cost and organisational commitment behind it.',
    ],
    approach: [
      {
        heading: 'Recommending they build less',
        body: [
          'Our first recommendation was to stop building finance and HR and license them instead, keeping the package close to vanilla so statutory changes across three jurisdictions remain the vendor\'s problem rather than the group\'s. This reduced the scope of work available to us and was the right advice.',
        ],
      },
      {
        heading: 'Custom where the advantage lives',
        body: [
          'Production scheduling was built as a custom service modelled on how the group actually optimises yield, rather than on a generic work-order abstraction. This is the capability a competitor would gain something by copying, which is precisely the test for whether to build.',
        ],
      },
      {
        heading: 'A deliberate integration layer',
        body: [
          'The packaged and custom systems are connected through an explicit API layer rather than direct database access. That layer is what preserves the option to replace either side later, and it is the piece most often cut under delivery pressure — cutting it is how organisations end up unable to replace anything.',
        ],
      },
    ],
    outcome: [
      'Statutory reporting across three jurisdictions is maintained by the package vendor. Engineering effort concentrated on the scheduling capability that differentiates the business.',
      'Either side of the architecture can be replaced independently, which was not true of the original plan.',
    ],
    metrics: [
      { value: '3', label: 'countries in scope' },
      { value: 'Composite', label: 'packaged plus custom architecture' },
      { value: 'API layer', label: 'preserving replaceability' },
    ],
    metricsVerified: false,
    tech: ['.NET', 'SQL Server', 'Azure'],
    standards: ['Multi-jurisdiction statutory reporting'],
    relatedServices: ['enterprise-software-development', 'cloud-ai-automation'],
    relatedCaseStudies: ['novucrm-intelligence-suite', 'medicore-ehr-platform'],
  },

  {
    slug: 'novucrm-intelligence-suite',
    codename: 'NovuCRM Intelligence Suite',
    clientDescriptor: 'A B2B services group with distributed sales operations (name withheld under NDA)',
    title: 'CRM With ML Lead Scoring Kept Off the Decision Path',
    seoTitle: 'Case Study: CRM With ML Lead Prioritisation',
    description:
      'An AI-assisted CRM where the model prioritises the queue and the humans still make the decisions — with the reasoning surfaced rather than hidden.',
    industry: 'Enterprise',
    category: 'enterprise',
    summary:
      'Machine learning applied where being right most of the time is valuable and being wrong is recoverable — prioritisation, not adjudication.',
    keywords: [
      'custom CRM development case study',
      'ML lead scoring implementation',
      'revenue forecasting system',
      'sales operations platform',
    ],
    challenge: [
      'The client had bought a lead-scoring product that produced a number with no explanation. Sales teams did not trust it, so they ignored it, so it produced no value while continuing to cost money — a common and entirely rational outcome.',
      'Forecasting was spreadsheet-based and each region did it differently, which made the consolidated forecast a negotiation rather than a measurement.',
    ],
    constraints: [
      'Sales adoption was the binding constraint. A technically superior system nobody uses is worth nothing.',
      'Multiple regions with genuinely different sales motions.',
      'Existing marketing automation that had to remain in place.',
    ],
    approach: [
      {
        heading: 'Score with reasons, not just numbers',
        body: [
          'The model surfaces the factors driving each score rather than only the score. Salespeople who can see why a lead ranked highly will engage with the ranking; a bare number invites dismissal. Adoption was the real problem, and explainability was the solution to it.',
        ],
      },
      {
        heading: 'Model prioritises, humans decide',
        body: [
          'The model orders the queue. It does not disqualify leads or make decisions on its own. This is the same principle we apply in compliance work for a different reason: keep the unexplainable artefact off the path where a decision has to be justified.',
        ],
      },
      {
        heading: 'One forecast definition, regional inputs',
        body: [
          'Forecasting logic was unified so the consolidated number means one thing, while allowing regions to reflect genuinely different sales motions in their inputs. The disagreements that remain are now about inputs rather than about definitions, which is a much more productive argument.',
        ],
      },
    ],
    outcome: [
      'Lead scoring is used rather than ignored, because it explains itself. Forecast consolidation is a calculation rather than a negotiation.',
      'The model stays in an advisory position where an incorrect output is recoverable.',
    ],
    metrics: [
      { value: 'Explainable', label: 'lead scoring with surfaced factors' },
      { value: 'Unified', label: 'forecast definition across regions' },
      { value: 'Advisory', label: 'ML kept off the decision path' },
    ],
    metricsVerified: false,
    tech: ['React', 'Python', 'AWS', 'PostgreSQL'],
    standards: [],
    relatedServices: ['enterprise-software-development', 'cloud-ai-automation'],
    relatedCaseStudies: ['omnierp-manufacturing-suite', 'corebanking-aml-suite'],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
