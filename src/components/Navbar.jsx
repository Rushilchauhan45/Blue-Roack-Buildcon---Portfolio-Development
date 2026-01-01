import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-6'
      }`}
    >
      {/* Modern Pill-Shaped Container */}
      <div className="w-full max-w-[95%] lg:max-w-7xl mx-auto px-2 sm:px-0">
        <div className="bg-white/95 backdrop-blur-md rounded-full border border-white/20 shadow-xl overflow-hidden">
          <div className="px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 lg:h-18">
              {/* Logo */}
              <Link to="/" className="flex items-center group flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="h-10 lg:h-12 flex items-center"
                >
                  {/* Logo SVG - Blue Rock Buildcon */}
                  <svg 
                    className="h-full w-auto" 
                    viewBox="0 0 500 150" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* BLUEROCK text */}
                    <text 
                      x="250" 
                      y="75" 
                      fontSize="70" 
                      fontWeight="900" 
                      fill="#1e3a8a" 
                      textAnchor="middle" 
                      fontFamily="Arial, sans-serif"
                      letterSpacing="2"
                    >
                      BLUEROCK
                    </text>
                    {/* BUILDCON text */}
                    <text 
                      x="250" 
                      y="125" 
                      fontSize="32" 
                      fontWeight="600" 
                      fill="#1e3a8a" 
                      textAnchor="middle" 
                      fontFamily="Arial, sans-serif"
                      letterSpacing="8"
                    >
                      BUILDCON
                    </text>
                    {/* Decorative lines */}
                    <line x1="30" y1="105" x2="100" y2="105" stroke="#1e3a8a" strokeWidth="2"/>
                    <line x1="30" y1="110" x2="100" y2="110" stroke="#1e3a8a" strokeWidth="2"/>
                    <line x1="30" y1="115" x2="100" y2="115" stroke="#1e3a8a" strokeWidth="2"/>
                    <line x1="400" y1="105" x2="470" y2="105" stroke="#1e3a8a" strokeWidth="2"/>
                    <line x1="400" y1="110" x2="470" y2="110" stroke="#1e3a8a" strokeWidth="2"/>
                    <line x1="400" y1="115" x2="470" y2="115" stroke="#1e3a8a" strokeWidth="2"/>
                  </svg>
                </motion.div>
              </Link>

              {/* Desktop Navigation - Center */}
              <div className="hidden lg:flex items-center justify-center flex-1 px-8">
                <div className="flex items-center gap-8">
                  {navLinks.map((link) => (
                    <Link key={link.name} to={link.path} className="relative group">
                      <motion.span
                        whileHover={{ y: -2 }}
                        className={`text-sm font-semibold transition-colors ${
                          location.pathname === link.path
                            ? 'text-primary'
                            : 'text-gray-700 hover:text-primary'
                        }`}
                      >
                        {link.name}
                      </motion.span>
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                          location.pathname === link.path
                            ? 'w-full'
                            : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Desktop Contact Info & CTA - Right */}
              <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
                {/* Phone */}
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-1.5 text-gray-600 hover:text-primary transition-colors group"
                >
                  <Phone size={15} className="text-primary" />
                  <span className="text-xs font-medium">+1 234 567 890</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@bluerockbuildcon.com"
                  className="flex items-center gap-1.5 text-gray-600 hover:text-primary transition-colors group"
                >
                  <Mail size={15} className="text-primary" />
                  <span className="text-xs font-medium">info@bluerockbuildcon.com</span>
                </a>

                {/* Divider */}
                <div className="w-px h-6 bg-gray-300" />

                {/* Get Quote Button */}
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Get Quote
                  </motion.button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-700"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden mt-2 overflow-hidden"
            >
              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-6">
                {/* Mobile Navigation Links */}
                <div className="space-y-3 mb-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-xl font-semibold transition-all ${
                          location.pathname === link.path
                            ? 'bg-primary text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Contact Info */}
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
                  >
                    <Phone size={18} className="text-primary" />
                    <span className="text-sm font-medium">+1 (234) 567-890</span>
                  </a>
                  <a
                    href="mailto:info@bluerockbuildcon.com"
                    className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
                  >
                    <Mail size={18} className="text-primary" />
                    <span className="text-sm font-medium">info@bluerockbuildcon.com</span>
                  </a>
                </div>

                {/* Mobile CTA Button */}
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-4 bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-md"
                  >
                    Get Quote
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Navbar;
