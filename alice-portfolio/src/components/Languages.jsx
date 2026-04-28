import { motion } from 'framer-motion';
import { languages } from '../utils/data';

export default function Languages() {
  return (
    <section id="languages" className="relative overflow-hidden">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
          <span className="text-sm font-semibold text-[var(--color-primary)] tracking-widest uppercase mb-3 block">Communication</span>
          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-family-display)] mb-6">Language <span className="gradient-text">Proficiency</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mx-auto" />
        </motion.div>
        <div className="max-w-2xl mx-auto space-y-6">
          {languages.map((lang, i) => (
            <motion.div key={lang.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-5 hover-lift">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{lang.flag}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">{lang.name}</h3>
                    <p className="text-xs text-[var(--color-text-muted)]">{lang.level}</p>
                  </div>
                </div>
                <span className="text-sm font-mono text-[var(--color-primary)] font-semibold">{lang.proficiency}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: `${lang.proficiency}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: 'easeOut' }} className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
