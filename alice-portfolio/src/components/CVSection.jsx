import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFileText, FiDownload, FiMaximize, FiEye, FiEyeOff, FiChevronDown } from 'react-icons/fi';

export default function CVSection() {
  const cvPath = '/cv.pdf';
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsExpanded(true);
    window.addEventListener('open-cv', handleOpen);
    return () => window.removeEventListener('open-cv', handleOpen);
  }, []);

  return (
    <section id="cv" className="relative overflow-hidden bg-[var(--color-translucent-bg)]/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-semibold text-[var(--color-primary)] tracking-widest uppercase mb-3 block">
            Professional Profile
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-family-display)] mb-6">
            Curriculum <span className="gradient-text">Vitae</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden border-[var(--color-primary)]/10"
          >
            {/* Header / Toolbar */}
            <div className="bg-[var(--color-translucent-bg)] border-b border-[var(--color-border)] p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)]">
                  {isExpanded ? <FiEye size={20} /> : <FiFileText size={20} />}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--color-text-primary)]">Interactive Resume Viewer</h3>
                  <p className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">Alice_Musayidire_CV.pdf</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-xs transition-all cursor-pointer ${
                    isExpanded 
                    ? 'bg-[var(--color-text-primary)]/10 text-[var(--color-text-primary)] border border-[var(--color-border)] hover:bg-[var(--color-text-primary)]/20' 
                    : 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-lg shadow-[var(--color-primary)]/20'
                  }`}
                >
                  {isExpanded ? <><FiEyeOff size={14} /> Hide CV</> : <><FiEye size={14} /> Read CV</>}
                </button>
                
                <a
                  href={cvPath}
                  download="Alice_Musayidire_CV.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--color-translucent-bg)] border border-[var(--color-border)] text-[var(--color-text-secondary)] text-xs font-semibold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/30 transition-all"
                >
                  <FiDownload size={14} />
                  Download
                </a>
              </div>
            </div>

            {/* Reading Area with Animation */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="relative bg-[#1a1932]/5 shadow-inner overflow-hidden"
                >
                  <div className="p-4 md:p-6 bg-[var(--color-surface-light)]/50 border-b border-[var(--color-border)] flex items-center justify-between">
                    <span className="text-[10px] text-[var(--color-text-muted)] font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                      Document Ready
                    </span>
                    <a
                      href={cvPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-bold text-[var(--color-primary)] hover:underline flex items-center gap-1"
                    >
                      <FiMaximize size={10} /> Full Screen Mode
                    </a>
                  </div>

                  {/* Desktop/Tablet Viewer */}
                  <div className="hidden md:block w-full h-[800px]">
                    <iframe
                      src={`${cvPath}#view=FitH&scrollbar=1&toolbar=1&navpanes=0`}
                      title="Alice Musayidire CV"
                      className="w-full h-full border-none"
                    />
                  </div>

                  {/* Mobile Fallback */}
                  <div className="md:hidden p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                    <FiFileText size={64} className="text-[var(--color-text-muted)] mb-6 opacity-20" />
                    <h4 className="text-lg font-bold mb-2">Ready to read?</h4>
                    <p className="text-sm text-[var(--color-text-muted)] mb-8 max-w-[280px]">
                      For the best reading experience on mobile, please open the document in full view or download it.
                    </p>
                    <div className="flex flex-col w-full gap-3">
                      <a
                        href={cvPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 rounded-xl bg-[var(--color-primary)] text-white font-bold text-sm"
                      >
                        Open Full Screen
                      </a>
                    </div>
                  </div>

                  {/* Close button at bottom of reader */}
                  <div className="p-4 border-t border-[var(--color-border)] bg-white/[0.02] text-center">
                    <button 
                      onClick={() => setIsExpanded(false)}
                      className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] text-xs font-semibold flex items-center gap-1 mx-auto transition-colors cursor-pointer"
                    >
                      <FiChevronDown className="rotate-180" /> Collapse Viewer
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {!isExpanded && (
              <div className="p-12 text-center bg-white/[0.01]">
                <p className="text-sm text-[var(--color-text-muted)] mb-0 italic">
                  Click "Read CV" to view the full document details.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
