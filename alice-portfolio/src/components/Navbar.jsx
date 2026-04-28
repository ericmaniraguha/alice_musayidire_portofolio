import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { NAV_LINKS } from '../utils/constants';
import { useTheme } from '../context/ThemeContext';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { scrollToSection } from '../utils/helpers';

const sectionIds = NAV_LINKS.map(link => link.id);

export default function Navbar() {
  const { activeSection, isScrolled } = useScrollPosition(sectionIds);
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-4 bg-[var(--color-surface)]/80 backdrop-blur-xl border-b border-[var(--color-border)]' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="group flex flex-col cursor-pointer"
          >
            <span className="text-xl md:text-2xl font-bold font-[var(--font-family-display)] tracking-tight text-[var(--color-text-primary)]">
              ALICE <span className="text-[var(--color-secondary)]">M.</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-text-muted)] font-bold group-hover:text-[var(--color-primary)] transition-colors">
              Finance Executive
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-xs font-bold uppercase tracking-[0.15em] transition-all relative py-2 cursor-pointer ${
                  activeSection === link.id 
                    ? 'text-[var(--color-secondary)]' 
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-secondary)]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 border border-[var(--color-primary)] text-[var(--color-primary)] text-[10px] font-bold uppercase tracking-widest hover:bg-[var(--color-primary)] hover:text-white transition-all cursor-pointer"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Toggle Group */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-[var(--color-text-muted)] cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-[var(--color-text-primary)] cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[72px] bg-[var(--color-surface)] z-40 md:hidden p-8 flex flex-col"
          >
            <div className="flex flex-col gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    scrollToSection(link.id);
                    setMobileOpen(false);
                  }}
                  className={`text-2xl font-bold font-[var(--font-family-display)] text-left ${
                    activeSection === link.id ? 'text-[var(--color-secondary)]' : 'text-[var(--color-text-primary)]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            
            <div className="mt-auto pb-12">
              <button
                onClick={() => {
                  scrollToSection('contact');
                  setMobileOpen(false);
                }}
                className="w-full py-4 bg-[var(--color-primary)] text-white font-bold uppercase tracking-widest"
              >
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
