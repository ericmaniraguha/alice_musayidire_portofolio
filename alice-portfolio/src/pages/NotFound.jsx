import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <h1 className="text-8xl font-bold gradient-text font-[var(--font-family-display)] mb-4">404</h1>
        <p className="text-xl text-[var(--color-text-secondary)] mb-2">Page Not Found</p>
        <p className="text-sm text-[var(--color-text-muted)] mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <button onClick={() => navigate('/')} className="px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[var(--color-primary)]/25 transition-all cursor-pointer">
          Go Back Home
        </button>
      </motion.div>
    </div>
  );
}
