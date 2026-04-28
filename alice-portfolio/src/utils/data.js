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

// ── KPI Data ─────────────────────────────────────────────
export const kpiData = [
  { label: 'Years Experience', value: 12, suffix: '+', icon: '📅' },
  { label: 'Donors Managed', value: 6, suffix: '+', icon: '🤝' },
  { label: 'Compliance Rate', value: 100, suffix: '%', icon: '✅' },
  { label: 'Languages', value: 4, suffix: '', icon: '🗣️' },
];
