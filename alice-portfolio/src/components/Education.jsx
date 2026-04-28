import { motion } from 'framer-motion';
import { FiAward, FiBookOpen } from 'react-icons/fi';
import { education, certifications } from '../utils/data';

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden">
      <div className="absolute -bottom-20 left-0 w-80 h-80 bg-[var(--color-secondary)]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <span className="text-sm font-semibold text-[var(--color-primary)] tracking-widest uppercase mb-3 block">Background</span>
          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-family-display)] mb-6">Education & <span className="gradient-text">Certifications</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mx-auto" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Degrees */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--color-text-primary)] mb-6"><FiBookOpen className="text-[var(--color-primary)]" /> Academic Degrees</h3>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div key={edu.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="glass-card p-5 hover-lift">
                  <span className="text-xs font-semibold text-[var(--color-primary)] tracking-wide">{edu.period}</span>
                  <h4 className="text-base font-bold text-[var(--color-text-primary)] mt-1 mb-1 font-[var(--font-family-display)]">{edu.degree}</h4>
                  <p className="text-sm text-[var(--color-text-muted)] mb-3">{edu.institution} — {edu.location}</p>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((h) => (<span key={h} className="px-2.5 py-1 rounded-md bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-medium">{h}</span>))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Certifications */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--color-text-primary)] mb-6"><FiAward className="text-[var(--color-accent)]" /> Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div key={cert.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-4 flex items-center gap-4 hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-primary)] shrink-0"><FiAward size={20} /></div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-[var(--color-text-primary)] truncate">{cert.name}</h4>
                    <p className="text-xs text-[var(--color-text-muted)]">{cert.issuer} · {cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
