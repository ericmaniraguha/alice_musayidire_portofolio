import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiPhone, FiMapPin, FiLinkedin, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { APP_CONFIG } from '../utils/constants';
import { isValidEmail } from '../utils/helpers';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setStatus('error'); return; }
    if (!isValidEmail(form.email)) { setStatus('error'); return; }
    setSending(true);
    // Simulated send
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(null), 4000);
  };

  const contactInfo = [
    { icon: <FiMail />, label: 'Email', value: APP_CONFIG.email },
    { icon: <FiPhone />, label: 'Phone', value: APP_CONFIG.phone },
    { icon: <FiMapPin />, label: 'Location', value: APP_CONFIG.location },
    { icon: <FiLinkedin />, label: 'LinkedIn', value: 'Connect', href: APP_CONFIG.linkedin },
  ];

  const inputClass = "w-full px-4 py-3 rounded-lg bg-[var(--color-translucent-bg)] border border-[var(--color-border)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)]/40 focus:ring-1 focus:ring-[var(--color-primary)]/20 transition-all";

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute -bottom-40 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <span className="text-sm font-semibold text-[var(--color-primary)] tracking-widest uppercase mb-3 block">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-family-display)] mb-6">Let's <span className="gradient-text">Connect</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-2 space-y-4">
            {contactInfo.map((c, i) => (
              <motion.div key={c.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-4 flex items-center gap-4 hover-lift">
                <span className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">{c.icon}</span>
                <div>
                  <p className="text-xs text-[var(--color-text-muted)]">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[var(--color-primary)] hover:underline">{c.value}</a>
                  ) : (
                    <p className="text-sm font-medium text-[var(--color-text-primary)]">{c.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="md:col-span-3 glass-card p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" placeholder="Your Name *" value={form.name} onChange={handleChange} className={inputClass} required />
              <input name="email" type="email" placeholder="Your Email *" value={form.email} onChange={handleChange} className={inputClass} required />
            </div>
            <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} className={inputClass} />
            <textarea name="message" rows={5} placeholder="Your Message *" value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} required />
            <button type="submit" disabled={sending} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[var(--color-primary)]/25 transition-all disabled:opacity-50 cursor-pointer">
              {sending ? 'Sending…' : <><FiSend size={16} /> Send Message</>}
            </button>
            {status === 'success' && <p className="flex items-center gap-2 text-sm text-green-600 font-medium"><FiCheck /> Message sent successfully!</p>}
            {status === 'error' && <p className="flex items-center gap-2 text-sm text-red-600 font-medium"><FiAlertCircle /> Please fill all required fields.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
