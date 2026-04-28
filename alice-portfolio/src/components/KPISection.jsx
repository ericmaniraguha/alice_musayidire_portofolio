import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { kpiData } from '../utils/data';

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function KPISection() {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {kpiData.map((kpi, i) => (
        <motion.div
          key={kpi.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="glass-card p-5 md:p-6 text-center hover-lift group"
        >
          <span className="text-2xl md:text-3xl mb-2 block group-hover:scale-110 transition-transform">
            {kpi.icon}
          </span>
          <div className="text-2xl md:text-3xl font-bold font-[var(--font-family-display)] gradient-text mb-1">
            <AnimatedCounter target={kpi.value} suffix={kpi.suffix} />
          </div>
          <div className="text-xs md:text-sm text-[var(--color-text-muted)] font-medium">
            {kpi.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
