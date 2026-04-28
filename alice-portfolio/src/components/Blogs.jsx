import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCalendar, FiClock, FiX, FiExternalLink, FiBookOpen } from 'react-icons/fi';
import { blogs } from '../utils/data';

function BlogModal({ blog, onClose }) {
  // Close on Escape
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-[var(--color-surface)] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="relative h-64 md:h-80 shrink-0">
          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors backdrop-blur-md"
          >
            <FiX size={24} />
          </button>
          <div className="absolute bottom-6 left-6 right-6">
            <span className="px-3 py-1 rounded-full bg-[var(--color-primary)] text-white text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">
              {blog.category}
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-[var(--font-family-display)] text-[var(--color-text-primary)]">
              {blog.title}
            </h2>
          </div>
        </div>

        {/* Content Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
          <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--color-text-muted)] mb-8 pb-6 border-b border-[var(--color-border)]">
            <span className="flex items-center gap-2"><FiCalendar className="text-[var(--color-primary)]" /> {blog.date}</span>
            <span className="flex items-center gap-2"><FiClock className="text-[var(--color-primary)]" /> {blog.readTime}</span>
            <span className="flex items-center gap-2"><FiBookOpen className="text-[var(--color-primary)]" /> Alice Musayidire</span>
          </div>

          <div className="space-y-8">
            {/* Overview */}
            <section>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[var(--color-primary)] rounded-full" /> Overview
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
                {blog.content.overview}
              </p>
            </section>

            {/* Key Points */}
            <section className="grid sm:grid-cols-2 gap-6">
              {blog.content.points.map((point, i) => (
                <div key={i} className="p-5 rounded-xl bg-[var(--color-translucent-bg)] border border-[var(--color-border)]">
                  <h4 className="font-bold text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
                    <span className="text-[var(--color-primary)] font-mono text-sm">0{i+1}.</span> {point.title}
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </section>

            {/* Conclusion */}
            <section className="p-6 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent border-l-4 border-[var(--color-primary)]">
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">Conclusion</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed italic">
                {blog.content.conclusion}
              </p>
            </section>

            {/* References */}
            <section className="pt-8 border-t border-[var(--color-border)]">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4">References & Resources</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {blog.content.references.map((ref, i) => (
                  <a
                    key={i}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/5 transition-all group"
                  >
                    <span className="text-xs font-medium text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]">{ref.label}</span>
                    <FiExternalLink size={14} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)]" />
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[var(--color-surface-light)] border-t border-[var(--color-border)] text-center">
          <button onClick={onClose} className="text-sm font-bold text-[var(--color-primary)] hover:underline uppercase tracking-widest">
            Close Journal
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function BlogCard({ blog, index, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass-card overflow-hidden hover-lift group flex flex-col"
    >
      <div className="relative h-52 overflow-hidden cursor-pointer" onClick={onOpen}>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[var(--color-primary)] text-white text-[10px] font-bold uppercase tracking-wider shadow-lg">
          {blog.category}
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-4 text-[10px] text-[var(--color-text-muted)] font-medium mb-3">
          <span className="flex items-center gap-1">
            <FiCalendar size={12} /> {blog.date}
          </span>
          <span className="flex items-center gap-1">
            <FiClock size={12} /> {blog.readTime}
          </span>
        </div>

        <h3 
          className="text-lg font-bold font-[var(--font-family-display)] text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2 cursor-pointer"
          onClick={onOpen}
        >
          {blog.title}
        </h3>
        
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 line-clamp-3">
          {blog.excerpt}
        </p>

        <div className="mt-auto pt-6 border-t border-[var(--color-border)]">
          <button
            onClick={onOpen}
            className="inline-flex items-center gap-2 text-xs font-bold text-[var(--color-primary)] hover:gap-3 transition-all uppercase tracking-widest cursor-pointer"
          >
            Read Insight <FiArrowRight size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section id="blogs" className="relative overflow-hidden bg-[var(--color-translucent-bg)]/20">
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[var(--color-secondary)]/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold text-[var(--color-primary)] tracking-widest uppercase mb-3 block">
            Latest Insights
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-family-display)] mb-6">
            Professional <span className="gradient-text">Journal</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[var(--color-text-muted)] text-sm">
            Expert perspectives on finance, NGO compliance, and strategic management in the modern humanitarian landscape.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <BlogCard 
              key={blog.id} 
              blog={blog} 
              index={i} 
              onOpen={() => setSelectedBlog(blog)} 
            />
          ))}
        </div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedBlog && (
            <BlogModal 
              blog={selectedBlog} 
              onClose={() => setSelectedBlog(null)} 
            />
          )}
        </AnimatePresence>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 rounded-xl border border-[var(--color-border)] text-sm font-bold text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-translucent-bg)] transition-all cursor-pointer">
            Explore All Insights
          </button>
        </motion.div>
      </div>
    </section>
  );
}
