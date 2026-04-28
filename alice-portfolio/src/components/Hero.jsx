import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiLinkedin, FiEye } from 'react-icons/fi';
import { APP_CONFIG } from '../utils/constants';
import { scrollToSection } from '../utils/helpers';
import KPISection from './KPISection';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--color-primary)]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--color-secondary)]/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent)]/10 rounded-full blur-[160px]" />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[var(--color-primary)]/30"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center flex flex-col items-center pt-24 pb-12">
        {/* Tag line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 text-[var(--color-primary)] text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
          Available for Strategic Roles
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold font-[var(--font-family-display)] leading-tight mb-6"
        >
          Hi, I'm{' '}
          <span className="gradient-text">{APP_CONFIG.name.split(' ')[0]}</span>
          <br />
          <span className="text-[var(--color-text-secondary)] text-2xl sm:text-3xl md:text-4xl font-light mt-2 block">
            {APP_CONFIG.title}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mb-10"
        >
          Ensuring financial prosperity through the right vision. Expert in grant management, 
          donor compliance, and strategic budgeting for international NGOs and private sectors 
          with over 10 years of proven impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[var(--color-primary)]/25 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            Get In Touch
            <FiArrowDown className="group-hover:translate-y-0.5 transition-transform" />
          </button>
          <button
            onClick={() => {
              scrollToSection('cv');
              window.dispatchEvent(new CustomEvent('open-cv'));
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[var(--color-border)] text-[var(--color-text-secondary)] font-semibold text-sm hover:bg-[var(--color-translucent-bg)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-primary)]/30 transition-all duration-300 cursor-pointer"
          >
            <FiEye size={16} />
            View Resume
          </button>
          <a
            href={APP_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[var(--color-border)] text-[var(--color-text-secondary)] font-semibold text-sm hover:bg-[var(--color-translucent-bg)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-primary)]/30 transition-all duration-300"
          >
            <FiLinkedin size={16} />
            LinkedIn
          </a>
        </motion.div>

        {/* KPI Highlights */}
        <KPISection />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[var(--color-text-muted)]/30 rounded-full flex items-start justify-center p-1"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
