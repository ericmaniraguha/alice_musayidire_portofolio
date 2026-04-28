import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { projects } from '../utils/data';

function ProjectCard({ project, index }) {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="glass-card overflow-hidden hover-lift group cursor-pointer"
      onClick={() => navigate(`/project/${project.id}`)}
    >
      <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}88)` }} />
      <div className="p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ color: project.color, backgroundColor: `${project.color}15` }}>{project.category}</span>
        <h3 className="text-lg font-bold font-[var(--font-family-display)] text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">{project.title}</h3>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-5 line-clamp-3">{project.description}</p>
        <div className="grid grid-cols-2 gap-3 mb-5">
          {project.impact.map((m) => (
            <div key={m.metric} className="text-center p-2 rounded-lg bg-[var(--color-translucent-bg)]">
              <div className="text-base font-bold font-[var(--font-family-display)]" style={{ color: project.color }}>{m.value}</div>
              <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wide mt-0.5">{m.metric}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (<span key={tag} className="px-2 py-0.5 rounded-md bg-[var(--color-translucent-bg)] text-[var(--color-text-muted)] text-xs">{tag}</span>))}
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] group-hover:gap-3 transition-all">View Case Study <FiArrowRight /></span>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <span className="text-sm font-semibold text-[var(--color-primary)] tracking-widest uppercase mb-3 block">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-family-display)] mb-6">Featured <span className="gradient-text">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mx-auto" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (<ProjectCard key={project.id} project={project} index={i} />))}
        </div>
      </div>
    </section>
  );
}
