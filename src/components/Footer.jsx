import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { fadeIn } from '../utils/motion';

const Footer = () => {
  const quickLinks = [
    { name: 'Home +', path: '/' },
    { name: 'About Us +', path: '/about' },
    { name: 'Projects +', path: '/projects' },
    { name: 'Services +', path: '/services' },
    { name: 'Contact +', path: '/contact' },
  ];

  const services = [
    'Residential Construction',
    'Commercial Projects',
    'Redevelopment',
    'Interior Design',
    'Architecture & Planning',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden w-full">
      {/* Aesthetic Background */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-gray-900 to-accent/20"></div>
        
        {/* Hexagon pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L93.3 25v50L50 100 6.7 75V25z' fill='none' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}
        />
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent animate-shimmer"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Blue Rock Buildcon
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Building dreams with excellence and integrity. Your trusted partner
              in premium construction and real estate development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-accent transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  123 Builder Street, Construction City, BC 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-accent flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-accent flex-shrink-0" />
                <a href="mailto:info@bluerockbuildcon.com" className="text-gray-300 hover:text-accent transition-colors">
                  info@bluerockbuildcon.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Blue Rock Buildcon. All rights reserved. Built with excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
