import { BlogPost } from '../types';

/**
 * Article source.
 * ---------------------------------------------------------------------------
 * Heading rule: article subheadings are <h2>, sub-points are <h3>. Previously
 * every substantive subheading was an <h3> while the only <h2> on the page was
 * the sales CTA, which told search engines and LLM chunkers that the CTA was
 * the article's primary section. That is now fixed — the CTA block below the
 * article no longer uses a heading element at all.
 *
 * Citation rule: any claim about a regulation names the issuing body and links
 * to the primary source. Regulatory content without primary-source links reads
 * as unverified to Google's quality raters and is rarely cited by AI search.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: 'navigating-aml-cft-regulations-pakistan-2026',
    title: 'Navigating AML/CFT Regulations in Pakistan: An Engineering Guide for Fintechs',
    seoTitle: 'AML/CFT Compliance in Pakistan: Fintech Guide',
    description:
      'How SBP and FMU requirements translate into actual system architecture: screening, transaction monitoring, and goAML-conformant STR/CTR reporting.',
    content: `
      <p>Most AML/CFT guidance written for Pakistani fintechs is written by lawyers, for lawyers. It tells you <em>what</em> the State Bank of Pakistan (SBP) and the Financial Monitoring Unit (FMU) require. It rarely tells you what that means when you are the engineer who has to build it, and your product owner wants a delivery date.</p>
      <p>This guide is the other half. It maps the regulatory obligations onto the components you will actually have to design, the failure modes we see most often in production, and the decisions that are expensive to reverse once you have gone live.</p>

      <h2>Who regulates what: SBP and FMU are not the same thing</h2>
      <p>Teams routinely conflate these two bodies, and the conflation produces genuinely bad architecture. They have different mandates and they will hold you to different things.</p>
      <ul>
        <li><strong>The State Bank of Pakistan (SBP)</strong> is your prudential regulator. It licenses you, issues the AML/CFT/CPF Regulations that govern your customer due diligence, risk assessment and internal controls, and inspects you against them.</li>
        <li><strong>The Financial Monitoring Unit (FMU)</strong> is Pakistan's financial intelligence unit, established under the Anti-Money Laundering Act 2010. It does not license you. It <em>receives</em> your reports — Suspicious Transaction Reports (STRs) and Currency Transaction Reports (CTRs) — through the goAML platform, and it sets the schema those reports must conform to.</li>
      </ul>
      <p>The practical consequence: SBP compliance is largely a policy-and-controls problem with an audit trail requirement. FMU compliance is a <em>data engineering</em> problem with a hard schema contract. Teams that treat them as one workstream typically under-build the reporting pipeline, because the policy work is more visible and the schema work looks like plumbing until the first rejection batch comes back.</p>

      <h2>The three pillars, and what each one actually costs you</h2>
      <p>Every compliant transaction architecture we have built or remediated has the same three load-bearing components. What varies is how much pain each one causes.</p>

      <h3>1. Screening: sanctions, PEPs and proscribed persons</h3>
      <p>You must compare customer and counterparty identities against national and international lists — the NACTA Proscribed Persons list, UN Security Council Consolidated List, OFAC SDN, and any list your correspondent banks impose on you contractually.</p>
      <p>The engineering difficulty is not the comparison. It is that names in Pakistan do not match cleanly. Transliteration from Urdu produces multiple valid Roman spellings for the same person; patronymics and honorifics appear inconsistently; and the same CNIC may be attached to differently-spelled name records across your own systems.</p>
      <p>Exact-match screening on this data will miss real hits. Naive fuzzy matching will bury your compliance team in false positives — we have seen a 400-name-per-day alert queue at a mid-size EMI where roughly 3% were worth reviewing. Both outcomes are failures, and the second is the one that gets you in trouble, because an analyst who dismisses 388 alerts a day will eventually dismiss the one that mattered.</p>
      <p>What works: phonetic and edit-distance matching tuned per list, with the threshold treated as a governed parameter — versioned, change-controlled, and with every tuning change logged. When SBP asks why your threshold is 0.82, "that is what the vendor shipped" is not an answer. "Here is the tuning decision, the false-negative testing behind it, and who approved it" is.</p>

      <h3>2. Transaction monitoring: rules first, models later</h3>
      <p>Transaction monitoring detects behaviour rather than identity: structuring (breaking large amounts into sub-threshold deposits to avoid CTR triggers), velocity spikes, dormant accounts that suddenly activate, geographic patterns inconsistent with a stated customer profile, and round-trip flows between related parties.</p>
      <p>There is strong commercial pressure to lead with machine learning here. We would push back on that for most institutions, for one specific reason: <strong>explainability is a regulatory requirement, not a nice-to-have.</strong> When an examiner asks why a transaction was or was not flagged, "the model scored it 0.31" is not a defensible answer. A deterministic rule engine — thresholds, windows, peer-group comparisons — gives you an auditable reason for every decision.</p>
      <p>The mature pattern is layered: deterministic rules produce the alerts of record, and a model runs alongside to <em>prioritise</em> the queue rather than to decide it. You get the analyst-efficiency benefit without putting an unexplainable artefact on the regulatory critical path.</p>

      <h3>3. STR/CTR reporting: the goAML schema is the hard contract</h3>
      <p>This is where projects slip. FMU accepts reports through goAML — the UNODC-developed platform used by financial intelligence units worldwide — and goAML validates submissions against a strict XML schema. Your report is either schema-valid or it is rejected, and a rejected report is a report you did not file.</p>
      <p>The recurring rejection causes we see, in rough order of frequency:</p>
      <ul>
        <li><strong>Party role and identification mismatches.</strong> Every party needs a correctly typed identifier. A CNIC placed in a passport-type field is schema-valid and semantically wrong, which is worse than a hard failure because it passes validation and fails review.</li>
        <li><strong>Missing mandatory conditional fields.</strong> Many goAML fields are required only when another field takes a particular value. Teams model the unconditional required set, pass their own tests, and fail on real cases.</li>
        <li><strong>Date and currency formatting.</strong> Locale-formatted dates and thousands separators are a persistent source of rejections.</li>
        <li><strong>Narrative quality.</strong> Schema-valid but analytically useless. The reason-for-suspicion narrative is read by a human analyst; "unusual activity detected by system" wastes everyone's time and reflects badly on your programme.</li>
      </ul>
      <p>Design implication: build the reporting pipeline against the schema from day one, with a validation stage that runs the same XSD validation FMU runs, before submission. Do not discover the schema during UAT.</p>

      <blockquote>
        Under FATF's recommendations, compliance is not an overlay on transaction routing — it is a structural property of it. Systems designed to have compliance added later almost always need re-architecting instead.
      </blockquote>

      <h2>Three decisions that are expensive to reverse</h2>
      <p>Some choices are cheap to change after launch. These three are not, and they are the ones we most often get called in to unpick.</p>
      <p><strong>Where the customer record lives.</strong> If identity data is scattered across an onboarding service, a core ledger and a support CRM with no authoritative record, screening will be inconsistent by construction — you will screen one spelling and transact under another. Resolve this before you build screening, not after.</p>
      <p><strong>Whether transactions are immutable.</strong> Monitoring and reporting both depend on being able to reconstruct exactly what the system knew at the moment of a decision. If your transaction table is mutable and you keep no event log, you cannot reproduce an alert from six months ago — and reproducing alerts is precisely what an examination asks of you. Append-only event storage is dramatically cheaper to adopt at design time than to retrofit.</p>
      <p><strong>How much time budget screening gets.</strong> Real-time screening inside the authorisation path adds latency to every transaction. Decide early which checks are blocking and which are post-hoc, and make it an explicit, documented risk decision rather than an accident of implementation order.</p>

      <h2>A realistic sequencing</h2>
      <p>For a fintech starting from nothing, the order that has worked best in our engagements is: consolidate the customer record first; then build screening against it; then event-log the transaction stream; then rule-based monitoring on that log; then the goAML reporting pipeline with schema validation; and only then consider model-assisted alert prioritisation. Each stage produces something independently useful to the compliance team, which matters, because a programme that delivers nothing for nine months tends not to survive to month ten.</p>
      <p>At NovuLabs we build these components into core banking, EMI and digital wallet platforms for SBP-regulated institutions. If you are early enough that the three expensive decisions above are still open, that is the best possible time to talk.</p>
    `,
    coverImage: '/blog/aml-cft-pakistan.jpg',
    coverAlt:
      'Transaction monitoring dashboard showing alert queues for AML/CFT screening at a Pakistani financial institution',
    category: 'Compliance',
    date: 'July 15, 2026',
    publishedISO: '2026-07-15T09:00:00+05:00',
    modifiedISO: '2026-08-16T09:00:00+05:00',
    author: 'Ali Zaidi',
    authorSlug: 'ali-zaidi',
    readTime: '11 min read',
    tags: ['AML', 'CFT', 'Fintech', 'FMU Pakistan', 'goAML'],
    related: [
      'scaling-healthcare-software-hipaa-hl7-fhir',
      'why-custom-saas-outperforms-off-the-shelf-erp',
    ],
    relatedServices: [
      { label: 'AML/CFT compliance software development', href: '/services/aml-cft-compliance-software' },
      { label: 'Fintech software development', href: '/services/fintech-software-development' },
    ],
    sources: [
      { label: 'State Bank of Pakistan — AML/CFT/CPF regulatory framework', href: 'https://www.sbp.org.pk/' },
      { label: 'Financial Monitoring Unit (FMU) Pakistan', href: 'https://www.fmu.gov.pk/' },
      { label: 'FATF — The FATF Recommendations', href: 'https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html' },
      { label: 'UNODC goAML platform', href: 'https://unite.un.org/goaml/' },
      { label: 'NACTA — Proscribed Organisations and Persons', href: 'https://nacta.gov.pk/' },
      { label: 'US Treasury OFAC — Specially Designated Nationals list', href: 'https://ofac.treasury.gov/specially-designated-nationals-and-blocked-persons-list-sdn-human-readable-lists' },
    ],
  },
  {
    slug: 'scaling-healthcare-software-hipaa-hl7-fhir',
    title: 'Scaling Healthcare Platforms: HIPAA and HL7 FHIR Without the Rewrite',
    seoTitle: 'HIPAA & HL7 FHIR: Scaling Healthcare Platforms',
    description:
      'Engineering EHR and telemedicine systems that satisfy the HIPAA Security Rule while staying genuinely interoperable through HL7 FHIR resources.',
    content: `
      <p>Healthcare platform teams tend to hit the same wall at the same moment. The product works, the first hospital is live, and then the second hospital asks to exchange data with a lab system, a billing clearinghouse and a patient app — and it becomes clear that the data model was designed for one deployment, not for an ecosystem.</p>
      <p>Retrofitting interoperability is one of the most expensive things you can do to a healthcare product. This piece covers what to get right first, and one claim to stop making.</p>

      <h2>Stop saying "HIPAA certified"</h2>
      <p>Worth clearing up early, because it appears on a great many vendor websites, including — until recently — parts of ours.</p>
      <p><strong>There is no such thing as HIPAA certification.</strong> The US Department of Health and Human Services does not accredit anyone, and no body issues a HIPAA certificate that HHS recognises. Organisations <em>attest</em> to compliance and are assessed against the Security Rule; vendors can be assessed against frameworks like HITRUST CSF or SOC 2, which are real and verifiable, but those are not HIPAA certification either.</p>
      <p>Hospital CIOs know this. A vendor advertising HIPAA certification is telling an experienced buyer that it has not worked seriously in the space. Say what is true instead: which Security Rule safeguards you implement, whether you will sign a Business Associate Agreement, and what independent assessment you have actually undergone.</p>

      <h2>The Security Rule as an architecture spec</h2>
      <p>The HIPAA Security Rule organises safeguards into three families. Read as an engineer, it is a reasonably concrete specification.</p>

      <h3>Technical safeguards</h3>
      <p>Encryption in transit and at rest is the part everyone implements. The parts that fail audits are subtler: unique user identification that survives shared clinical workstations, automatic logoff calibrated so it does not get worked around, and — most commonly — audit controls.</p>
      <p>Audit logging is where healthcare platforms most often fall short, because the requirement is not "log access." It is to record activity in information systems containing protected health information in a way that supports later review. In practice that means: who viewed which patient record, when, from where, under what access justification, in a store the viewer cannot alter. Application logs mixed into general telemetry with a 30-day retention will not satisfy this. A separate append-only PHI access log will.</p>

      <h3>Administrative and physical safeguards</h3>
      <p>These are usually treated as someone else's problem, but two have direct engineering consequences. Access management must be role-based and reviewable, which means your permission model needs to be expressible to a non-engineer during an audit — deeply nested per-user overrides are technically fine and audit-hostile. And workstation security in shared clinical environments drives real UI decisions: session behaviour on a ward terminal used by twelve people per shift is a product problem, not just an infrastructure setting.</p>

      <h2>Why HL7 FHIR changes the integration economics</h2>
      <p>Historically, clinical data exchange meant point-to-point integrations with bespoke message formats — HL7 v2 pipe-delimited messages with site-specific segment conventions, each pair of systems requiring its own adapter. Integration cost grew roughly with the square of the number of connected systems.</p>
      <p>Fast Healthcare Interoperability Resources (FHIR), published by HL7 International, replaces that with a defined set of RESTful resources — Patient, Encounter, Observation, Condition, MedicationRequest, DiagnosticReport and the rest — exchanged over ordinary HTTP with JSON or XML payloads. The resources are versioned, extensible through a defined extension mechanism, and specified precisely enough that two independent implementations can interoperate without a bilateral agreement.</p>

      <h3>Native resources or a translation layer?</h3>
      <p>The decision that matters is whether FHIR resources <em>are</em> your data model or whether you map to them at the boundary.</p>
      <p>Modelling natively gives you the cleanest interoperability story and eliminates a whole class of mapping bugs, but FHIR resources are shaped for exchange rather than for transactional workloads, and forcing your entire clinical workflow through them creates awkward queries and performance work.</p>
      <p>A translation layer over a domain-appropriate internal model is usually the better trade for a platform with substantial clinical workflow. The cost is that mapping is real, ongoing work, and it is where subtle correctness bugs live — a code system silently dropped during mapping produces an observation that looks right and means something different. If you take this path, invest in mapping tests as first-class tests, not as an afterthought.</p>

      <h3>Terminology is the part that is genuinely hard</h3>
      <p>Teams consistently underestimate this. FHIR gives you the transport and the structure; it does not resolve the meaning. LOINC for laboratory observations, SNOMED CT for clinical findings, ICD for diagnoses, RxNorm for medications — if your source system uses local codes, someone has to map them, and that mapping is a clinical judgement, not a data-engineering task. Budget for clinical review time. A platform that exchanges structurally valid FHIR carrying unmapped local codes is interoperable in form and useless in substance.</p>

      <h2>What we would prioritise</h2>
      <p>If you are building now: get the PHI access log right from the first commit, because reconstructing it later is impossible. Decide the native-versus-translation question explicitly and write down why. Budget clinical time for terminology mapping. And be precise in how you describe your compliance posture — in this market, accuracy is a competitive advantage, because so many competitors are not accurate.</p>
    `,
    coverImage: '/blog/hipaa-hl7-fhir.jpg',
    coverAlt:
      'Clinician using a HIPAA-compliant electronic health record system with HL7 FHIR data exchange',
    category: 'Healthcare',
    date: 'June 28, 2026',
    publishedISO: '2026-06-28T09:00:00+05:00',
    modifiedISO: '2026-08-16T09:00:00+05:00',
    author: 'Shamroz Ali Zaidi',
    authorSlug: 'shamroz-ali-zaidi',
    readTime: '10 min read',
    tags: ['Healthcare', 'HIPAA', 'HL7 FHIR', 'EHR', 'Interoperability'],
    related: [
      'navigating-aml-cft-regulations-pakistan-2026',
      'why-custom-saas-outperforms-off-the-shelf-erp',
    ],
    relatedServices: [
      { label: 'Healthcare software development', href: '/services/healthcare-software-development' },
      { label: 'Cloud, AI & automation engineering', href: '/services/cloud-ai-automation' },
    ],
    sources: [
      { label: 'HHS — HIPAA Security Rule', href: 'https://www.hhs.gov/hipaa/for-professionals/security/index.html' },
      { label: 'HL7 International — FHIR specification', href: 'https://www.hl7.org/fhir/' },
      { label: 'LOINC — laboratory and clinical observation codes', href: 'https://loinc.org/' },
      { label: 'SNOMED International — SNOMED CT', href: 'https://www.snomed.org/' },
      { label: 'HITRUST CSF', href: 'https://hitrustalliance.net/' },
    ],
  },
  {
    slug: 'why-custom-saas-outperforms-off-the-shelf-erp',
    title: 'Custom Platform or Off-the-Shelf ERP? An Honest Decision Framework',
    seoTitle: 'Custom Platform vs Off-the-Shelf ERP: A Framework',
    description:
      'When building beats buying, when it does not, and the total-cost model that makes the difference visible before you have committed the budget.',
    content: `
      <p>We build custom enterprise platforms, so treat what follows accordingly. We are also going to spend a good part of it arguing that many organisations should buy rather than build, because the alternative — telling you what you want to hear and delivering a platform you did not need — is a worse outcome for both of us.</p>
      <p>Build-versus-buy is not a question with a general answer. It is a question with a decision framework.</p>

      <h2>Buy when the process is not your advantage</h2>
      <p>General ledger. Payroll. Statutory tax filing. Standard procurement. These are solved problems, governed by external rules you do not control, and executing them differently than your competitors gains you exactly nothing. Established ERP vendors have absorbed decades of regulatory edge cases you have never heard of and will not anticipate.</p>
      <p>Building here is a category error. You will spend two years reproducing functionality you could have licensed, and then spend every subsequent year maintaining your reproduction against regulatory changes that the vendor would have handled.</p>
      <p>The honest heuristic: <strong>if a process is a cost of doing business rather than a reason customers choose you, buy it.</strong></p>

      <h2>Build when the process is the product</h2>
      <p>The opposite case is equally clear. Where your workflow <em>is</em> your differentiation — a lender's underwriting logic, a manufacturer's yield-optimising production scheduling, a logistics operator's routing — forcing it into a package means either abandoning the advantage or paying to customise the package until it is a bespoke system with someone else's licence attached and someone else's upgrade cycle imposed.</p>
      <p>The tell is heavy customisation of a single module. If eighty percent of the package fits and one module needs to be rebuilt, you are not buying software; you are buying a constraint and paying consultants to work around it.</p>

      <h2>The total cost model people skip</h2>
      <p>Most build-versus-buy comparisons compare licence cost to development cost and stop. That comparison is wrong in both directions and reliably produces bad decisions. Over a realistic seven-year horizon, both sides carry costs that are invisible at signature.</p>
      <p><strong>Buy-side costs that are routinely omitted:</strong> per-seat licences that scale with headcount rather than value; implementation consulting, which frequently exceeds year-one licence cost; the customisation work needed to make the package fit; forced upgrade cycles that re-break those customisations; integration middleware; and the cost of workflow compromise, which is real, ongoing, and never appears in a spreadsheet because nobody bills you for it.</p>
      <p><strong>Build-side costs that are routinely omitted:</strong> maintenance, which typically runs 15–20% of the original build annually and never stops; the key-person risk of a small team owning critical logic; security patching across your whole dependency tree; the true cost of the internal capability required to keep the thing alive; and the opportunity cost of engineers building an internal system rather than the product your customers pay for.</p>
      <p>Compare those two lists and the answer is frequently different from what the licence-versus-build-cost comparison suggested — sometimes in favour of building, often not.</p>

      <h2>The composite pattern, which is what most mature organisations actually do</h2>
      <p>The framing as a binary is itself the most common mistake. In practice, the durable architecture for most mid-to-large organisations is neither pure build nor pure buy:</p>
      <ul>
        <li>License a proven package for commodity back-office functions — finance, HR, statutory reporting — and take it close to vanilla, resisting customisation.</li>
        <li>Build custom services for the two or three workflows that constitute your competitive advantage.</li>
        <li>Integrate through a deliberate API layer rather than through direct database access, so either side can be replaced without the other having to be.</li>
      </ul>
      <p>This gets you vendor-maintained compliance where compliance is generic, full control where control matters, and — critically — the option to change your mind later. The integration layer is what buys that option, and it is the piece most often skipped under delivery pressure. Skipping it is how organisations end up unable to replace either system.</p>

      <h2>Questions worth answering before you commit</h2>
      <p>Would a competitor gain anything by running this exact process? If not, buy it. Can you describe your differentiating workflow precisely enough to specify it? If not, you are not ready to build it. Do you have — or will you fund — the engineering capability to maintain a custom platform for the next seven years? If not, the build will be delivered and then decay. And if you built this and it worked, what would change for the business? A vague answer to that last one is the strongest available signal that the honest recommendation is to buy.</p>
      <p>We take on custom builds where the answers point that way, and we say so when they do not. The conversation is more useful than the pitch.</p>
    `,
    coverImage: '/blog/custom-vs-erp.jpg',
    coverAlt:
      'Enterprise architecture diagram comparing a custom-built platform with an off-the-shelf ERP deployment',
    category: 'Enterprise',
    date: 'May 10, 2026',
    publishedISO: '2026-05-10T09:00:00+05:00',
    modifiedISO: '2026-08-16T09:00:00+05:00',
    author: 'Muneeb Ali Jaffari',
    authorSlug: 'muneeb-ali-jaffari',
    readTime: '9 min read',
    tags: ['Enterprise Software', 'ERP', 'SaaS', 'Cloud Architecture', 'Build vs Buy'],
    related: [
      'navigating-aml-cft-regulations-pakistan-2026',
      'scaling-healthcare-software-hipaa-hl7-fhir',
    ],
    relatedServices: [
      { label: 'Enterprise software development', href: '/services/enterprise-software-development' },
      { label: 'Cloud, AI & automation engineering', href: '/services/cloud-ai-automation' },
    ],
    sources: [],
  },
];

/** Lookup helper so pages never re-implement the find. */
export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
