import { motion } from 'framer-motion';
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';
import { blogs } from '../utils/data';

function BlogCard({ blog, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass-card overflow-hidden hover-lift group flex flex-col"
    >
      <div className="relative h-52 overflow-hidden">
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

        <h3 className="text-lg font-bold font-[var(--font-family-display)] text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
          {blog.title}
        </h3>
        
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 line-clamp-3">
          {blog.excerpt}
        </p>

        <div className="mt-auto pt-6 border-t border-[var(--color-border)]">
          <a
            href={blog.url}
            className="inline-flex items-center gap-2 text-xs font-bold text-[var(--color-primary)] hover:gap-3 transition-all uppercase tracking-widest"
          >
            Read Insight <FiArrowRight size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Blogs() {
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
            <BlogCard key={blog.id} blog={blog} index={i} />
          ))}
        </div>

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
