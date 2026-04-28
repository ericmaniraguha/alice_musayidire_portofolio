import { motion } from 'framer-motion';
import { FiDollarSign, FiShield, FiBarChart2, FiGlobe } from 'react-icons/fi';

const focusAreas = [
  {
    icon: <FiDollarSign />,
    title: 'Grant Management',
    desc: 'Expertise in overseeing awards and sub-awards for multi-million RWF projects.',
  },
  {
    icon: <FiShield />,
    title: 'Compliance & Audit',
    desc: 'Ensuring strict adherence to donor regulations (EU, USAID, UNHCR, MCF).',
  },
  {
    icon: <FiBarChart2 />,
    title: 'Financial Analysis',
    desc: 'Driving efficiency through advanced budgeting, forecasting, and data analysis.',
  },
  {
    icon: <FiGlobe />,
    title: 'Multicultural Collaboration',
    desc: 'Fluent in 4 languages with experience in international NGOs and private sectors.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="absolute -top-40 right-0 w-80 h-80 bg-[var(--color-secondary)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-sm font-semibold text-[var(--color-primary)] tracking-widest uppercase mb-3 block">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-family-display)] mb-6">
            Expertise in <span className="gradient-text">Finance & Awards Management</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6 text-base md:text-lg">
              I am a results-driven accounting and financial management professional with over 10 years of experience across the NGO and private sectors. I specialize in managing grants, performing deep financial analysis, ensuring donor compliance, and strategic budgeting.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6 text-base md:text-lg">
              My work focuses on strengthening financial systems for projects funded by major donors including the Mastercard Foundation, European Union, USAID, and the UN. I combine technical expertise with leadership and digital innovation—like fintech integration—to drive organizational growth.
            </p>
            <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
              Currently serving as Awards and Sub-Awards Officer at CARE International in Rwanda. Fluent in English, French, Swahili, and Kinyarwanda.
            </p>
          </motion.div>

          {/* Right - Focus Areas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card p-5 hover-lift group cursor-default"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-lg mb-3 group-hover:bg-[var(--color-primary)]/20 transition-colors">
                  {area.icon}
                </span>
                <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">
                  {area.title}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  {area.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
