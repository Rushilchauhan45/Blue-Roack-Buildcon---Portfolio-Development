import Hero from '../components/Hero';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import PageTransition from '../components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, scaleIn } from '../utils/motion';
import { useCountUp } from '../hooks/useCountUp';
import { useState, useEffect } from 'react';
import {
  Building2,
  HardHat,
  Ruler,
  Home as HomeIcon,
  Award,
  Users,
  CheckCircle2,
  TrendingUp,
  Shield,
  Clock,
  Star,
  ArrowRight,
  Quote,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const services = [
    {
      icon: HomeIcon,
      title: 'Residential Construction',
      description: 'Premium homes designed for modern living with superior quality and craftsmanship.',
    },
    {
      icon: Building2,
      title: 'Commercial Projects',
      description: 'State-of-the-art commercial spaces that drive business success.',
    },
    {
      icon: HardHat,
      title: 'Redevelopment',
      description: 'Transform old structures into modern masterpieces with expert redevelopment.',
    },
    {
      icon: Ruler,
      title: 'Interior Design',
      description: 'Elegant interiors that blend aesthetics with functionality perfectly.',
    },
  ];

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075',
      title: 'Skyline Residency',
      type: 'Residential',
      location: 'Downtown District',
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
      title: 'Royal Towers',
      type: 'Commercial',
      location: 'Business Hub',
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070',
      title: 'Green Valley Villas',
      type: 'Residential',
      location: 'Suburban Area',
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: '10+ Years Experience',
      description: 'Two decades of excellence in construction and real estate development.',
    },
    {
      icon: CheckCircle2,
      title: 'Quality Assured',
      description: 'Premium materials and superior craftsmanship in every project.',
    },
    {
      icon: Shield,
      title: 'Trusted Partner',
      description: 'Building long-lasting relationships based on trust and transparency.',
    },
    {
      icon: TrendingUp,
      title: 'On-Time Delivery',
      description: 'Committed to completing projects within the promised timeline.',
    },
  ];

  const stats = [
    { number: 10, label: 'Years Experience', suffix: '+', icon: Award },
    { number: 50, label: 'Projects Completed', suffix: '+', icon: Building2 },
    { number: 200, label: 'Happy Clients', suffix: '+', icon: Users },
    { number: 50, label: 'Expert Team', suffix: '+', icon: HardHat },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
      text: 'Blue Rock Buildcon transformed our dream into reality. The quality of construction and attention to detail is exceptional. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
      text: 'Professional team, excellent work quality, and timely delivery. Our commercial space exceeded all expectations. Thank you, Blue Rock!',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'Property Investor',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200',
      text: 'Working with Blue Rock has been a pleasure. Their expertise in redevelopment is unmatched. Every project is a masterpiece.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'Villa Owner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200',
      text: 'Outstanding service from start to finish! Our villa was completed on time and exceeded our expectations in every way.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Corporate Client',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200',
      text: 'Blue Rock delivered a world-class office space that has impressed all our clients. True professionals in every sense.',
      rating: 5,
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <PageTransition>
      <div className="w-full overflow-x-hidden">
        {/* Hero Section */}
        <Hero />

        {/* About Us Short */}
        <SectionWrapper id="about">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            <motion.div variants={fadeIn('right', 0.2)}>
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076"
                alt="About Us"
                className="rounded-2xl shadow-premium"
              />
            </motion.div>
            <motion.div variants={fadeIn('left', 0.3)}>
              <SectionTitle
                subtitle="About Us"
                title="Building Excellence Since 2003"
                center={false}
              />
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Blue Rock Buildcon is a premier construction and real estate development
                company committed to delivering exceptional quality and value. With over
                20 years of experience, we specialize in residential, commercial, and
                redevelopment projects.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our team of expert engineers, architects, and craftsmen work together
                to transform your vision into reality, ensuring every project meets the
                highest standards of quality, safety, and design.
              </p>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-primary text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-primary-dark transition-colors"
                >
                  Learn More
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Services */}
        <SectionWrapper id="services" className="bg-gray-50">
          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-5 opacity-5">
              <svg width="150" height="150" viewBox="0 0 150 150">
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" fill="#1e3a8a"/>
                </pattern>
                <rect width="150" height="150" fill="url(#dots)"/>
              </svg>
            </div>
            <div className="absolute top-1/2 right-10 opacity-10 text-5xl text-green-500">+</div>
            <div className="absolute bottom-10 right-1/4 opacity-10">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <rect x="10" y="10" width="60" height="60" fill="none" stroke="#0ea5e9" strokeWidth="2" transform="rotate(45 40 40)"/>
              </svg>
            </div>
          </div>
          
          <SectionTitle
            subtitle="Our Services"
            title="What We Offer"
            description="Comprehensive construction and real estate solutions tailored to your needs"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="relative group cursor-pointer h-[420px]"
              >
                <motion.div
                  variants={{
                    rest: { y: 0, scale: 1 },
                    hover: { y: -8, scale: 1.02 }
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative h-full rounded-2xl overflow-hidden shadow-xl"
                >
                  {/* Background Image with Zoom Effect */}
                  <motion.div 
                    className="absolute inset-0"
                    variants={{
                      rest: { scale: 1 },
                      hover: { scale: 1.1 }
                    }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  >
                    <img
                      src={
                        index === 0 ? 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200' :
                        index === 1 ? 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200' :
                        index === 2 ? 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200' :
                        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200'
                      }
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Base gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-primary/30 to-transparent"></div>
                  </motion.div>

                  {/* Dark Gradient Overlay - Slides up from bottom on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent"
                    variants={{
                      rest: { y: '100%', opacity: 0 },
                      hover: { y: 0, opacity: 1 }
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />

                  {/* Content Container */}
                  <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                    {/* Service Icon - Always visible */}
                    <motion.div
                      variants={{
                        rest: { y: 0, opacity: 1 },
                        hover: { y: 0, opacity: 1 }
                      }}
                      transition={{ delay: 0.1, duration: 0.4, ease: 'easeOut' }}
                      className="mb-6"
                    >
                      <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/50 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                        <service.icon className="text-white" size={40} strokeWidth={2} />
                      </div>
                    </motion.div>

                    {/* Service Title - Always visible */}
                    <motion.h3
                      variants={{
                        rest: { y: 0, opacity: 1 },
                        hover: { y: 0, opacity: 1 }
                      }}
                      transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
                      className="text-2xl font-bold text-white mb-4 drop-shadow-lg"
                    >
                      {service.title}
                    </motion.h3>

                    {/* Service Description - Only visible on hover */}
                    <motion.p
                      variants={{
                        rest: { y: 20, opacity: 0 },
                        hover: { y: 0, opacity: 1 }
                      }}
                      transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
                      className="text-white/90 text-sm leading-relaxed max-w-xs"
                    >
                      {service.description}
                    </motion.p>
                  </div>

                  {/* Enhanced shadow on hover */}
                  <motion.div
                    className="absolute inset-0 shadow-2xl pointer-events-none"
                    variants={{
                      rest: { opacity: 0 },
                      hover: { opacity: 1 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                View All Services
              </motion.button>
            </Link>
          </div>
        </SectionWrapper>

        {/* Projects Showcase */}
        <SectionWrapper id="projects">
          <SectionTitle
            subtitle="Our Projects"
            title="Featured Projects"
            description="Discover our portfolio of exceptional construction projects"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={scaleIn(index * 0.1)}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-xl shadow-premium hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="relative h-80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-accent-light text-sm font-semibold mb-2">{project.type}</p>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-200">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                View All Projects
              </motion.button>
            </Link>
          </div>
        </SectionWrapper>

        {/* Why Choose Us */}
        <SectionWrapper id="why-choose-us" className="bg-gradient-to-br from-gray-50 via-white to-gray-50">
          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-5 left-10 opacity-5">
              <svg width="200" height="100" viewBox="0 0 200 100">
                <pattern id="zigzag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 20 L10 0 L20 20 L30 0 L40 20" stroke="#1e3a8a" strokeWidth="2" fill="none"/>
                </pattern>
                <rect width="200" height="100" fill="url(#zigzag)"/>
              </svg>
            </div>
            <div className="absolute bottom-10 right-16 opacity-10">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="30" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="10,5"/>
              </svg>
            </div>
            <div className="absolute top-1/3 right-1/4 opacity-10 text-4xl text-accent">+</div>
          </div>
          
          <SectionTitle
            subtitle="Why Choose Us"
            title="Your Trusted Construction Partner"
            description="Experience the difference of working with industry leaders"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', index * 0.1)}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                {/* Card with gradient border effect */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="absolute inset-[2px] bg-white rounded-2xl"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with gradient background */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-20 h-20 mx-auto mb-6"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-sm group-hover:blur-md transition-all"></div>
                      <div className="relative bg-gradient-to-br from-primary to-accent w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg">
                        <item.icon className="text-white" size={36} />
                      </div>
                    </motion.div>
                    
                    {/* Title with gradient on hover */}
                    <h3 className="text-xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Company Stats */}
        <SectionWrapper id="stats">
          <SectionTitle
            title="Our Achievements"
            subtitle="Numbers that speak for themselves"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const { count, ref } = useCountUp(stat.number, 2000);
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  variants={scaleIn(index * 0.1)}
                  className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="text-5xl font-bold text-primary mb-2">
                    {count}{stat.suffix}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </SectionWrapper>

        {/* Testimonials */}
        <SectionWrapper id="testimonials">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-10 right-1/4 opacity-5">
              <svg width="100" height="100" viewBox="0 0 100 100">
                <polygon points="50,10 90,35 75,80 25,80 10,35" fill="none" stroke="#1e3a8a" strokeWidth="2"/>
                <polygon points="50,25 75,42 65,70 35,70 25,42" fill="none" stroke="#0ea5e9" strokeWidth="2"/>
              </svg>
            </div>
            <div className="absolute bottom-10 left-1/4 opacity-5">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <rect x="10" y="10" width="60" height="60" fill="none" stroke="#10b981" strokeWidth="2" transform="rotate(45 40 40)"/>
                <rect x="22" y="22" width="36" height="36" fill="none" stroke="#0ea5e9" strokeWidth="2" transform="rotate(45 40 40)"/>
              </svg>
            </div>
          </div>
          <SectionTitle
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it - hear from our satisfied clients"
          />
          
          {/* Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="bg-white p-8 md:p-12 rounded-2xl shadow-premium relative"
                >
                  <Quote className="text-accent/20 absolute top-6 right-6" size={60} />
                  
                  {/* Testimonial Content */}
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-20 h-20 rounded-full object-cover mr-4 border-4 border-accent/20"
                      />
                      <div>
                        <h4 className="font-bold text-2xl text-primary">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-gray-600 text-lg">
                          {testimonials[currentTestimonial].role}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={24} />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed italic">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </motion.button>

              {/* Pagination Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentTestimonial
                        ? 'w-8 h-3 bg-primary'
                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </SectionWrapper>

        {/* Call To Action */}
        <SectionWrapper id="cta" className="bg-gradient-to-r from-primary via-primary-light to-primary-dark text-white rounded-t-3xl">
          <motion.div
            variants={fadeIn('up', 0.2)}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Dream Project?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Let's bring your vision to life with our expertise and dedication to excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </motion.button>
              </Link>
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  View Our Work
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </SectionWrapper>
      </div>
    </PageTransition>
  );
};

export default Home;
