// ── Experience Data ──────────────────────────────────────
export const experiences = [
  {
    id: 1,
    role: 'Awards and Sub-Awards Officer',
    company: 'CARE International in Rwanda',
    location: 'Kigali, Rwanda',
    period: 'Sep. 2023 – Present',
    type: 'Full-time',
    description:
      'Lead financial oversight for USAID, EU, and MCF-funded projects ensuring full donor compliance.',
    achievements: [
      'Reduced budget variances by 15% through KPI-driven financial monitoring and analysis.',
      'Manage sub-award lifecycle including agreements, compliance, and partner performance tracking.',
      'Provide financial training and technical support to partners, improving reporting accuracy.',
      'Utilize Oracle PeopleSoft ERP for budgeting, grants tracking, and compliance monitoring.',
    ],
    tags: ['USAID', 'EU', 'MCF', 'Oracle PeopleSoft', 'Compliance'],
  },
  {
    id: 2,
    role: 'UNHCR Project Accountant',
    company: 'Prison Fellowship International',
    location: 'Kigali, Rwanda',
    period: 'Jan. 2023 – Aug. 2023',
    type: 'Full-time',
    description:
      'Prepared financial reports and ensured compliance for UNHCR-funded programs.',
    achievements: [
      'Conducted reconciliations, budget analysis, and supported audit processes.',
      'Maintained accurate financial records and prepared comprehensive statements.',
      'Ensured 100% compliance with financial regulations and internal policies.',
    ],
    tags: ['UNHCR', 'Financial Reporting', 'Reconciliation', 'Audit Support'],
  },
  {
    id: 3,
    role: 'Admin & Finance Assistant',
    company: 'Alight Rwanda',
    location: 'Kigali, Rwanda',
    period: 'Jul. 2021 – Dec. 2022',
    type: 'Full-time',
    description:
      'Managed grants exceeding $2M annually with 98% budget accuracy.',
    achievements: [
      'Monitored expenditures and ensured donor compliance across multiple projects.',
      'Reconciled complex accounts and supported organizational compliance efforts.',
      'Managed administrative functions and HR processes in a high-pressure environment.',
    ],
    tags: ['Grant Management', 'Budget Accuracy', 'Compliance', 'HR Admin'],
  },
  {
    id: 4,
    role: 'WFP Project Accountant',
    company: 'Good Neighbors International',
    location: 'Kigali, Rwanda',
    period: 'May 2021 – Jun. 2021',
    type: 'Full-time',
    description:
      'Prepared financial reports and managed accounts for WFP-funded programs.',
    achievements: [
      'Ensured accurate and timely financial reporting to World Food Programme.',
      'Managed project accounts and maintained financial documentation.',
    ],
    tags: ['WFP', 'Project Accounting', 'Reporting'],
  },
  {
    id: 5,
    role: 'Chief Finance Officer',
    company: 'Dussoft Engineering',
    location: 'Kigali, Rwanda',
    period: 'Aug. 2018 – May 2021',
    type: 'Full-time',
    description:
      'Led financial strategy achieving 40% year-over-year revenue growth.',
    achievements: [
      'Improved operational efficiency by 30% through digital finance systems.',
      'Managed financial reporting, compliance, and a team of 5+ staff.',
      'Spearheaded the introduction of fintech and mobile money solutions.',
    ],
    tags: ['Financial Strategy', 'Growth', 'Efficiency', 'Leadership'],
  },
  {
    id: 6,
    role: 'Finance and Administration Manager',
    company: 'Kivu Constructions Ltd.',
    location: 'Kigali, Rwanda',
    period: 'Aug. 2016 – Apr. 2018',
    type: 'Full-time',
    description:
      'Developed budgets, financial policies, and business plans for construction projects.',
    achievements: [
      'Supervised all financial transactions and administrative operations.',
      'Ensured smooth operational flow through effective budget management.',
    ],
    tags: ['Construction', 'Budgeting', 'Policy Development'],
  },
  {
    id: 7,
    role: 'Accountant',
    company: 'Inyarwanda Ltd.',
    location: 'Kigali, Rwanda',
    period: 'Jan. 2016 – Jul. 2016',
    type: 'Full-time',
    description:
      'Managed payroll and financial reporting for 100+ employees.',
    achievements: [
      'Ensured accurate and timely payroll processing.',
      'Maintained financial records and supported tax compliance.',
    ],
    tags: ['Payroll', 'Reporting', 'Tax Compliance'],
  },
  {
    id: 8,
    role: 'Accountant',
    company: 'Revolution Engineering & Environment Co. Ltd.',
    location: 'Kigali, Rwanda',
    period: 'Jan. 2014 – Jan. 2016',
    type: 'Full-time',
    description:
      'Maintained accounting records and prepared financial reports.',
    achievements: [
      'Managed day-to-day accounting functions.',
      'Prepared monthly and annual financial statements.',
    ],
    tags: ['Accounting Records', 'Financial Statements'],
  },
];

// ── Skills Data ──────────────────────────────────────────
export const skillCategories = [
  {
    id: 'finance',
    title: 'Finance & Accounting',
    icon: '📊',
    skills: [
      { name: 'Grant Management', level: 95 },
      { name: 'Budgeting & Forecasting', level: 95 },
      { name: 'Financial Analysis', level: 95 },
      { name: 'Cost Accounting', level: 80 },
      { name: 'Donor Compliance', level: 95 },
      { name: 'Audit Preparation', level: 90 },
    ],
  },
  {
    id: 'software',
    title: 'Software & Tools',
    icon: '💻',
    skills: [
      { name: 'QuickBooks Online', level: 95 },
      { name: 'Sage Business Cloud', level: 70 },
      { name: 'SAP / ERP Systems', level: 85 },
      { name: 'Advanced Microsoft Excel', level: 95 },
      { name: 'Fintech Solutions', level: 90 },
    ],
  },
  {
    id: 'sector',
    title: 'Sector Expertise',
    icon: '🌍',
    skills: [
      { name: 'Humanitarian Sector', level: 95 },
      { name: 'NGO Management', level: 95 },
      { name: 'Private Sector Finance', level: 90 },
      { name: 'Sub-Award Management', level: 95 },
      { name: 'International Standards', level: 92 },
    ],
  },
  {
    id: 'management',
    title: 'Management & Admin',
    icon: '🎯',
    skills: [
      { name: 'Administration', level: 95 },
      { name: 'HR Management', level: 85 },
      { name: 'Procurement', level: 88 },
      { name: 'Risk Management', level: 85 },
      { name: 'Team Leadership', level: 92 },
    ],
  },
];

// ── Projects Data ────────────────────────────────────────
export const projects = [
  {
    id: 'serve-project',
    title: 'SERVE Project (Mastercard Foundation)',
    category: 'Grant Management',
    description:
      'Overseeing the Awards and Sub-Awards management for the SERVE project funded by the Mastercard Foundation, focusing on financial compliance and partner capacity building.',
    impact: [
      { metric: 'Funding Source', value: 'MCF' },
      { metric: 'Compliance Rate', value: '100%' },
      { metric: 'Partner Support', value: 'High' },
      { metric: 'Budget Size', value: 'Millions' },
    ],
    tags: ['Mastercard Foundation', 'Compliance', 'Reporting'],
    color: '#667eea',
  },
  {
    id: 'kungahara-project',
    title: 'KUNGAHARA Project (European Union)',
    category: 'Financial Oversight',
    description:
      'Ensuring financial oversight and strict donor compliance for the KUNGAHARA project, an EU-funded initiative in Rwanda.',
    impact: [
      { metric: 'Funding Source', value: 'EU' },
      { metric: 'Project Scope', value: 'National' },
      { metric: 'Audit Success', value: '100%' },
      { metric: 'Forecasting', value: 'Quarterly' },
    ],
    tags: ['European Union', 'Sub-Awards', 'EU Compliance'],
    color: '#764ba2',
  },
  {
    id: 'fintech-integration',
    title: 'Fintech Solution Deployment',
    category: 'Digital Innovation',
    description:
      'Spearheaded the adoption of mobile money and fintech solutions at Dussoft Engineering, significantly improving cash flow efficiency and transaction transparency.',
    impact: [
      { metric: 'Efficiency Gain', value: '45%' },
      { metric: 'Cash Flow', value: 'Optimized' },
      { metric: 'Transparency', value: 'High' },
      { metric: 'Adoption', value: 'Company-wide' },
    ],
    tags: ['Fintech', 'Mobile Money', 'Process Optimization'],
    color: '#f093fb',
  },
];

// ── Education Data ───────────────────────────────────────
export const education = [
  {
    id: 1,
    degree: 'Master of Business Administration (MBA)',
    institution: 'University of Kigali',
    location: 'Kigali, Rwanda',
    period: '2025 – 2027',
    description:
      'Status: Ongoing. Specializing in Project Management to enhance strategic planning and organizational leadership.',
    highlights: ['Project Management', 'Ongoing Status'],
  },
  {
    id: 2,
    degree: 'Bachelor of Business Administration',
    institution: 'University of Rwanda',
    location: 'Kigali, Rwanda',
    period: '2012 – 2016',
    description:
      'Major in Accounting. Developed foundational expertise in financial management, auditing, and corporate accounting.',
    highlights: ['Accounting Major', 'Corporate Finance'],
  },
];

export const certifications = [
  {
    name: 'Cost Accounting Certification',
    issuer: 'Professional Body',
    year: 'Certified',
  },
  {
    name: 'Enterprise Risk Management',
    issuer: 'Professional Body',
    year: 'Certified',
  },
  {
    name: 'AML Financial Intelligence',
    issuer: 'Professional Body',
    year: 'Certified',
  },
  {
    name: 'Monitoring & Evaluation (M&E)',
    issuer: 'Professional Body',
    year: 'Certified',
  },
  {
    name: 'Fraud Prevention & Detection',
    issuer: 'Professional Body',
    year: 'Certified',
  },
];

// ── Languages Data ───────────────────────────────────────
export const languages = [
  { name: 'Kinyarwanda', level: 'Native', proficiency: 100, flag: '🇷🇼' },
  { name: 'English', level: 'Fluent', proficiency: 95, flag: '🇬🇧' },
  { name: 'French', level: 'Fluent', proficiency: 90, flag: '🇫🇷' },
  { name: 'Swahili', level: 'Fluent', proficiency: 90, flag: '🇹🇿' },
];

// ── Blogs Data ───────────────────────────────────────────
export const blogs = [
  {
    id: 1,
    title: 'Navigating Donor Compliance in International NGOs',
    excerpt: 'Key strategies for maintaining transparency and ensuring full compliance with USAID and EU funding requirements.',
    date: 'April 15, 2024',
    category: 'Compliance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    readTime: '5 min read',
    content: {
      overview: 'Donor compliance is a cornerstone of financial management in international NGOs. Organizations funded by institutions such as USAID, EU, World Bank, and UN agencies must maintain strict adherence to financial reporting standards, procurement rules, and audit requirements. In my experience managing multi-donor portfolios exceeding USD 10M, compliance is not only a regulatory obligation but also a key mechanism for financial risk control, donor trust, and operational sustainability.',
      points: [
        { title: 'Strengthening Internal Control Systems', description: 'Strong internal controls ensure segregation of duties, approval hierarchies, and fraud prevention mechanisms. Automated ERP systems such as Oracle PeopleSoft significantly improve transparency and traceability.' },
        { title: 'Donor-Specific Financial Reporting', description: 'Each donor has unique requirements (e.g., USAID cost principles, EU eligibility rules). Harmonizing internal reporting systems with donor frameworks ensures accuracy and avoids disallowable costs.' },
        { title: 'Continuous Audit Readiness', description: 'Rather than annual preparation, organizations should adopt continuous audit readiness through monthly reconciliations, documentation tracking, and compliance dashboards.' },
        { title: 'Sub-Award Monitoring & Partner Capacity Building', description: 'Sub-recipients often represent high compliance risk. Continuous training and monitoring improve reporting accuracy and reduce financial irregularities.' },
      ],
      conclusion: 'Effective donor compliance is achieved through systems, discipline, and continuous oversight. It strengthens transparency and ensures long-term funding sustainability.',
      references: [
        { label: 'USAID (2023) – Uniform Administrative Requirements', url: 'https://www.usaid.gov' },
        { label: 'European Commission (2022) – PRAG Procurement Rules', url: 'https://ec.europa.eu' },
        { label: 'World Bank (2021) – FM Practices in Development Projects', url: 'https://www.worldbank.org' },
        { label: 'IFAC – Public Sector Financial Management Guidelines', url: 'https://www.ifac.org' },
      ],
    },
  },
  {
    id: 2,
    title: 'The Future of Digital Finance in Rwanda’s Private Sector',
    excerpt: 'Exploring how fintech and mobile money solutions are transforming operational efficiency for engineering and construction firms.',
    date: 'March 22, 2024',
    category: 'Fintech',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    readTime: '4 min read',
    content: {
      overview: 'Rwanda’s financial ecosystem is rapidly evolving through fintech innovation, mobile money expansion, and digital transformation of financial systems. These changes are reshaping how businesses manage payments, reporting, and financial operations.',
      points: [
        { title: 'Growth of Fintech Ecosystems', description: 'Fintech platforms are enabling faster, cheaper, and more accessible financial services for SMEs and corporates.' },
        { title: 'Mobile Money Integration', description: 'Mobile money systems such as MTN MoMo and Airtel Money have significantly improved liquidity management and cash flow efficiency.' },
        { title: 'Shift to ERP and Cloud-Based Systems', description: 'Organizations are transitioning from manual accounting systems to ERP solutions (SAP, Oracle), improving accuracy, automation, and reporting speed.' },
        { title: 'Data-Driven Financial Decision Making', description: 'Financial analytics tools such as Power BI are enabling real-time dashboards, improving forecasting and strategic planning.' },
      ],
      conclusion: 'Digital finance is a key driver of economic transformation in Rwanda. Organizations that adopt technology-driven financial systems gain significant efficiency and competitiveness advantages.',
      references: [
        { label: 'National Bank of Rwanda (BNR) – Stability Reports', url: 'https://www.bnr.rw' },
        { label: 'World Bank (2023) – Digital Economy for Africa', url: 'https://www.worldbank.org' },
        { label: 'GSMA (2022) – State of Mobile Money in Sub-Saharan Africa', url: 'https://www.gsma.com' },
        { label: 'IMF (2023) – Fintech in Emerging Markets', url: 'https://www.imf.org' },
      ],
    },
  },
  {
    id: 3,
    title: 'Effective Budgeting for Multi-Million Dollar Projects',
    excerpt: 'A deep dive into KPI-driven financial monitoring and variance reduction techniques for large-scale social impact projects.',
    date: 'February 10, 2024',
    category: 'Budgeting',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    readTime: '6 min read',
    content: {
      overview: 'Large-scale development projects require structured financial planning, strong forecasting models, and continuous variance monitoring. Budgeting is not a static process—it is a dynamic system for financial control and decision-making.',
      points: [
        { title: 'Strategic Budget Design', description: 'Budgets must align with project outcomes, donor expectations, and operational realities. Poor design leads to inefficiencies and funding gaps.' },
        { title: 'KPI-Based Monitoring Systems', description: 'Key indicators such as burn rate, cost per output, and variance percentage help identify financial risks early.' },
        { title: 'Variance Analysis & Financial Control', description: 'Regular comparison between planned and actual expenditure ensures early corrective action and financial discipline.' },
        { title: 'Cross-Functional Budget Integration', description: 'Budgeting requires collaboration between finance, procurement, and program teams for accurate forecasting and execution.' },
      ],
      conclusion: 'Effective budgeting is a continuous cycle of planning, monitoring, and adjustment. It is essential for ensuring financial accountability and project success.',
      references: [
        { label: 'IFAC (2022) – Public Sector Budgeting', url: 'https://www.ifac.org' },
        { label: 'OECD (2021) – Budgeting Practices in Projects', url: 'https://www.oecd.org' },
        { label: 'World Bank (2022) – Results-Based Budgeting', url: 'https://www.worldbank.org' },
        { label: 'IMF (2023) – PFM Frameworks', url: 'https://www.imf.org' },
      ],
    },
  },
  {
    id: 4,
    title: 'Data Privacy and Data Governance in Finance',
    excerpt: 'Exploring the intersection of financial management, Rwanda’s Data Protection Law, and GDPR in a digital-first economy.',
    date: 'May 5, 2024',
    category: 'Data Governance',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    readTime: '7 min read',
    content: {
      overview: 'In today’s digital financial ecosystem, data has become one of the most valuable assets in financial management. However, this reliance introduces significant risks related to data privacy, governance, and regulatory compliance. In Rwanda and globally, strong legal frameworks such as the Rwanda Data Protection and Privacy Law (Law No. 058/2021) and the EU GDPR are shaping how financial data must be handled.',
      points: [
        { title: 'Understanding Data Governance', description: 'Policies and standards ensuring financial data is accurate, secure, transparent, and legally compliant. Essential for auditable financial reports and minimizing fraud risks.' },
        { title: 'Legal Frameworks: Rwanda Law & GDPR', description: 'Rwanda’s Law No. 058/2021 and the EU GDPR establish strict principles for data minimization, consent-based processing, and mandatory breach reporting.' },
        { title: 'Governance in Financial Systems', description: 'Applied through centralized ERP systems (Oracle, SAP), internal controls like segregation of duties, and rigorous financial reporting integrity.' },
        { title: 'The Strategic Role of Finance Professionals', description: 'Modern accountants act as data custodians and compliance guardians, ensuring ethical use of data and long-term funding sustainability.' },
      ],
      conclusion: 'Data privacy and governance are now central pillars of financial management. Organizations that prioritize these systems will build lasting trust, transparency, and financial sustainability.',
      references: [
        { label: 'Rwanda Data Protection Law (No. 058/2021)', url: 'https://www.risa.gov.rw/data-protection-and-privacy-law' },
        { label: 'Rwanda Open Data Portal Initiative', url: 'https://www.minict.gov.rw/news-detail/a-rwandan-open-data-portal' },
        { label: 'EU GDPR Official Framework', url: 'https://gdpr-info.eu' },
        { label: 'World Bank – Data Governance in PFM', url: 'https://www.worldbank.org' },
      ],
    },
  },
];

// ── KPI Data ─────────────────────────────────────────────
export const kpiData = [
  { label: 'Years Experience', value: 12, suffix: '+', icon: '📅' },
  { label: 'Donors Managed', value: 6, suffix: '+', icon: '🤝' },
  { label: 'Compliance Rate', value: 100, suffix: '%', icon: '✅' },
  { label: 'Languages', value: 4, suffix: '', icon: '🗣️' },
];
