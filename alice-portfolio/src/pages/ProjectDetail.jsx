import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { projects } from '../utils/data';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <button onClick={() => navigate('/')} className="text-[var(--color-primary)] hover:underline cursor-pointer">← Back Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="section-container !py-12">
        <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} onClick={() => navigate('/')} className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors mb-8 cursor-pointer">
          <FiArrowLeft /> Back to Portfolio
        </motion.button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ color: project.color, backgroundColor: `${project.color}15` }}>{project.category}</span>
          <h1 className="text-3xl md:text-5xl font-bold font-[var(--font-family-display)] mb-6">{project.title}</h1>
          <div className="h-1 w-24 rounded-full mb-8" style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}66)` }} />
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mb-12">
          {project.description}
        </motion.p>

        {/* Impact */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {project.impact.map((m, i) => (
            <motion.div key={m.metric} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 + i * 0.1 }} className="glass-card p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold font-[var(--font-family-display)] mb-1" style={{ color: project.color }}>{m.value}</div>
              <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wide">{m.metric}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tags */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-lg bg-white/5 text-[var(--color-text-muted)] text-sm font-medium">{tag}</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
