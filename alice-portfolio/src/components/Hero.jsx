import { motion } from 'framer-motion';
import { FiArrowRight, FiLinkedin, FiEye } from 'react-icons/fi';
import { APP_CONFIG } from '../utils/constants';
import { scrollToSection } from '../utils/helpers';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden executive-bg"
    >
      {/* Enhanced Executive Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-[var(--color-primary)]/[0.04] to-transparent" />
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-[var(--color-secondary)]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--color-surface)] to-transparent" />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-8 bg-[var(--color-secondary)]" />
                <span className="text-[var(--color-secondary)] text-xs font-bold uppercase tracking-[0.3em]">
                  Financial Strategy & Compliance
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-10 leading-[1.05] tracking-tight text-[var(--color-text-primary)]">
                Strategic Finance <br />
                <span className="text-[var(--color-secondary)] italic">Leadership</span>.
              </h1>
              
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-12 max-w-2xl">
                Empowering international NGOs and private sectors through precise financial oversight, 
                regulatory excellence, and data-driven digital transformation.
              </p>

              <div className="flex flex-wrap gap-6 items-center">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-executive cursor-pointer group shadow-xl shadow-[var(--color-primary)]/10"
                >
                  Book Strategic Call
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={() => {
                    scrollToSection('cv');
                    window.dispatchEvent(new CustomEvent('open-cv'));
                  }}
                  className="flex items-center gap-2 px-6 py-4 text-sm font-bold text-[var(--color-text-primary)] hover:text-[var(--color-secondary)] transition-all cursor-pointer border-b border-[var(--color-border)] hover:border-[var(--color-secondary)]"
                >
                  <FiEye size={18} />
                  View Executive Dossier
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-16 pt-12 border-t border-[var(--color-border)] flex flex-wrap items-center gap-x-12 gap-y-6">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-[var(--color-primary)]">$10M+</span>
                  <span className="text-[9px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold">Portfolios Managed</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-[var(--color-primary)]">100%</span>
                  <span className="text-[9px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold">Audit Compliance</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-[var(--color-primary)]">12+</span>
                  <span className="text-[9px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold">Years Experience</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Abstract Executive Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="hidden lg:block relative w-96 h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] transform rotate-3 shadow-2xl" />
            <div className="absolute inset-0 bg-[var(--color-surface-light)] border-2 border-[var(--color-secondary)] transform -rotate-3 p-8 flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-1 bg-[var(--color-secondary)]" />
                <div className="text-3xl font-bold font-[var(--font-family-display)] leading-tight">
                  Driving <br /> Fiscal <br /> Integrity.
                </div>
              </div>
              <div className="text-xs text-[var(--color-text-muted)] font-medium leading-relaxed italic">
                "Financial transparency is the bedrock of donor trust and sustainable social impact."
              </div>
            </div>
            {/* Accents */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[var(--color-secondary)]/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
