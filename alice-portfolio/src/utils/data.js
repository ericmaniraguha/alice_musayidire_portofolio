// ── Experience Data ──────────────────────────────────────
export const experiences = [
  {
    id: 1,
    role: 'Awards and Sub-Awards Officer',
    company: 'CARE International in Rwanda',
    location: 'Kigali, Rwanda',
    period: 'Sept 2023 – Present',
    type: 'Full-time',
    description:
      'Providing financial oversight and compliance for SERVE (Mastercard Foundation-funded) and KUNGAHARA (EU-funded) projects. Managing multi-million RWF budgets and strengthening partner financial systems.',
    achievements: [
      'Oversee sub-recipient performance through site visits and rigorous financial reporting.',
      'Manage contract compliance in line with CARE policies and donor requirements.',
      'Prepare quarterly cash forecasts and track budget variances (over/under-spending).',
      'Deliver financial capacity building and technical support to partners.',
    ],
    tags: ['Grant Management', 'Compliance', 'Budgeting', 'Partner Capacity Building'],
  },
  {
    id: 2,
    role: 'UNHCR Project Accountant',
    company: 'Prison Fellowship International - Rwanda',
    location: 'Kigali, Rwanda',
    period: 'Jan 2023 – Aug 2023',
    type: 'Full-time',
    description:
      'Managed financial records and reporting for UNHCR-funded projects, ensuring strict adherence to humanitarian financial regulations.',
    achievements: [
      'Maintained accurate financial records and prepared comprehensive statements.',
      'Conducted budget analysis and account reconciliations for large-scale funding.',
      'Ensured 100% compliance with financial regulations and internal policies.',
    ],
    tags: ['UNHCR', 'Project Accounting', 'Reporting', 'Reconciliation'],
  },
  {
    id: 3,
    role: 'Administration and Finance Assistant (AFA)',
    company: 'Alight - Rwanda',
    location: 'Mahama Refugee Camp / Kigali',
    period: 'July 2021 – Dec 2022',
    type: 'Full-time',
    description:
      'Managed multi-donor grants from BPRM, UNFPA, UNHCR, and KOICA while supervising HR administration for over 80 employees.',
    achievements: [
      'Successfully processed expenses and verified financial data for multiple international donors.',
      'Reconciled complex accounts and supported organizational compliance efforts.',
      'Managed administrative functions and HR processes in a high-pressure humanitarian environment.',
    ],
    tags: ['Multi-donor Grants', 'HR Admin', 'Humanitarian', 'Financial Verification'],
  },
  {
    id: 4,
    role: 'Chief Finance Officer (CFO)',
    company: 'Dussoft Engineering',
    location: 'Kigali, Rwanda',
    period: 'Aug 2018 – May 2021',
    type: 'Full-time',
    description:
      'Directed financial planning and spearheaded the adoption of fintech solutions to drive organizational growth.',
    achievements: [
      'Spearheaded the introduction of fintech and mobile money solutions, improving transaction efficiency.',
      'Oversaw procurement processes and contract negotiations.',
      'Strengthened cash flow management and ensured compliance with reporting standards.',
    ],
    tags: ['Fintech', 'Financial Planning', 'Procurement', 'Leadership'],
  },
  {
    id: 5,
    role: 'Finance and Administration Manager',
    company: 'Kivu Construction Limited',
    location: 'Rwanda',
    period: 'Aug 2016 – April 2018',
    type: 'Full-time',
    description:
      'Developed financial policies and managed day-to-day operations for a growing construction firm.',
    achievements: [
      'Developed comprehensive financial policies and business plans.',
      'Supervised all financial transactions and administrative operations.',
      'Ensured smooth operational flow through effective budget management.',
    ],
    tags: ['Business Planning', 'Policy Development', 'Administration'],
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
    period: '2025 – 2026 (In Progress)',
    description:
      'Focusing on Project Management and advanced business practices to drive organizational growth and large-scale project success.',
    highlights: ['Project Management Focus', 'Strategic Leadership'],
  },
  {
    id: 2,
    degree: 'Bachelor of Business Administration (BBA)',
    institution: 'University of Rwanda',
    location: 'Rwanda',
    period: '2012 – 2016',
    description:
      'Concentration in Accounting. Gained strong foundational knowledge in accounting principles, financial reporting, and business operations.',
    highlights: ['Second Class Honours', 'Accounting Specialization'],
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

// ── KPI Data ─────────────────────────────────────────────
export const kpiData = [
  { label: 'Years Experience', value: 10, suffix: '+', icon: '📅' },
  { label: 'Donors Managed', value: 6, suffix: '+', icon: '🤝' },
  { label: 'Compliance Rate', value: 100, suffix: '%', icon: '✅' },
  { label: 'Languages', value: 4, suffix: '', icon: '🗣️' },
];
