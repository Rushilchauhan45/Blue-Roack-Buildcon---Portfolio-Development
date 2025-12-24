import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeIn, textVariant } from '../utils/motion';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[100vh] lg:min-h-[110vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentImageIndex]}
              alt="Modern Building"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/80 to-primary-dark/90 z-[1]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-24 lg:pt-32">
        <motion.div
          variants={textVariant(0.2)}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.p
            variants={fadeIn('down', 0.3)}
            className="text-accent-light text-lg md:text-xl font-semibold tracking-wider uppercase drop-shadow-lg"
          >
            Premium Builder & Real Estate Developer
          </motion.p>
          
          <motion.h1
            variants={textVariant(0.4)}
            className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight drop-shadow-2xl"
          >
            Building Your Dreams
            <br />
            <span className="text-accent-light">With Excellence</span>
          </motion.h1>
          
          <motion.p
            variants={fadeIn('up', 0.5)}
            className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-lg"
          >
            Transforming spaces into extraordinary living experiences with
            world-class construction and architectural excellence
          </motion.p>
          
          <motion.div
            variants={fadeIn('up', 0.6)}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 shadow-xl transition-all"
              >
                Explore Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                Get Free Consultation
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="hidden md:block absolute bottom-6 md:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white rounded-full flex justify-center opacity-80 hover:opacity-100 transition-opacity">
          <div className="w-1 h-2 md:h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
