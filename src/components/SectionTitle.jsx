import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const SectionTitle = ({ subtitle, title, description, center = true }) => {
  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      {subtitle && (
        <p className="text-accent font-semibold text-sm md:text-base uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
