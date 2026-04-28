import { FiHeart, FiLinkedin, FiMail, FiGithub, FiArrowUp } from 'react-icons/fi';
import { APP_CONFIG, NAV_LINKS } from '../utils/constants';
import { scrollToSection } from '../utils/helpers';

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)]">
      <div className="section-container !py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white font-bold text-sm">A</span>
              <span className="text-lg font-semibold font-[var(--font-family-display)]">Alice<span className="gradient-text">.M</span></span>
            </div>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-xs">Strategic Manager & Impact-Driven Professional based in {APP_CONFIG.location}.</p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors text-left cursor-pointer">{link.label}</button>
              ))}
            </div>
          </div>
          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4">Connect</h4>
            <div className="flex items-center gap-3">
              {[
                { icon: <FiLinkedin />, href: APP_CONFIG.linkedin },
                { icon: <FiMail />, href: `mailto:${APP_CONFIG.email}` },
                { icon: <FiGithub />, href: APP_CONFIG.github },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[var(--color-text-muted)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-all">{s.icon}</a>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)] flex items-center gap-1">© {new Date().getFullYear()} Alice Musayidire. Made with <FiHeart className="text-[var(--color-accent-warm)]" size={12} /></p>
          <button onClick={() => scrollToSection('home')} className="inline-flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors cursor-pointer"><FiArrowUp size={14} /> Back to top</button>
        </div>
      </div>
    </footer>
  );
}
