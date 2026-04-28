import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiMapPin, FiBriefcase } from 'react-icons/fi';
import { experiences } from '../utils/data';

function ExperienceCard({ exp, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] border-4 border-[var(--color-surface)] z-10 hidden md:block" />

      {/* Card */}
      <div
        className={`md:w-[calc(50%-2rem)] ${
          index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
        }`}
      >
        <div className="glass-card p-6 hover-lift">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div>
              <span className="text-xs font-semibold text-[var(--color-primary)] tracking-wide uppercase">
                {exp.period}
              </span>
              <h3 className="text-lg font-bold font-[var(--font-family-display)] text-[var(--color-text-primary)] mt-1">
                {exp.role}
              </h3>
            </div>
            <span className="shrink-0 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-medium">
              {exp.type}
            </span>
          </div>

          {/* Company & Location */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--color-text-muted)] mb-4">
            <span className="inline-flex items-center gap-1">
              <FiBriefcase size={14} /> {exp.company}
            </span>
            <span className="inline-flex items-center gap-1">
              <FiMapPin size={14} /> {exp.location}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
            {exp.description}
          </p>

          {/* Expand button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors cursor-pointer"
          >
            {expanded ? 'Show Less' : 'Key Achievements'}
            <FiChevronDown
              className={`transition-transform duration-200 ${
                expanded ? 'rotate-180' : ''
              }`}
              size={14}
            />
          </button>

          {/* Achievements */}
          <AnimatePresence>
            {expanded && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 space-y-2 overflow-hidden"
              >
                {exp.achievements.map((a, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                    {a}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-[var(--color-translucent-bg)] text-[var(--color-text-muted)] text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold text-[var(--color-primary)] tracking-widest uppercase mb-3 block">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-family-display)] mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary)]/30 via-[var(--color-accent)]/30 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
