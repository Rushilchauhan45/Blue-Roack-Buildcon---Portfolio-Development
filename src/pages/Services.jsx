import PageTransition from '../components/PageTransition';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { fadeIn, scaleIn } from '../utils/motion';
import {
  Home as HomeIcon,
  Building2,
  RefreshCcw,
  PaintBucket,
  Ruler,
  HardHat,
  Wrench,
  Shield,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: HomeIcon,
      title: 'Residential Construction',
      description: 'Build your dream home with our comprehensive residential construction services. From luxury villas to modern apartments, we create living spaces that combine comfort, style, and functionality.',
      features: [
        'Custom Home Design',
        'Luxury Apartments',
        'Villa Construction',
        'Duplex & Triplex Homes',
      ],
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600',
    },
    {
      icon: Building2,
      title: 'Commercial Projects',
      description: 'State-of-the-art commercial spaces designed to drive business success. We specialize in office buildings, retail spaces, and mixed-use developments that meet modern business needs.',
      features: [
        'Office Buildings',
        'Shopping Malls',
        'Retail Spaces',
        'Mixed-Use Developments',
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600',
    },
    {
      icon: RefreshCcw,
      title: 'Redevelopment',
      description: 'Transform old structures into modern masterpieces. Our redevelopment services breathe new life into aging buildings while preserving their character and maximizing their potential.',
      features: [
        'Building Restoration',
        'Property Modernization',
        'Structural Upgrades',
        'Heritage Conservation',
      ],
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=600',
    },
    {
      icon: PaintBucket,
      title: 'Interior Design & Turnkey',
      description: 'Complete interior solutions that blend aesthetics with functionality. From concept to completion, we handle every aspect of your interior design and execution.',
      features: [
        'Complete Interior Design',
        'Modular Kitchens',
        'Custom Furniture',
        'Lighting Solutions',
      ],
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600',
    },
    {
      icon: Ruler,
      title: 'Architecture & Planning',
      description: 'Innovative architectural designs that stand the test of time. Our expert architects create spaces that are both beautiful and functional, tailored to your specific needs.',
      features: [
        'Architectural Design',
        'Space Planning',
        '3D Visualization',
        'Structural Engineering',
      ],
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600',
    },
    {
      icon: HardHat,
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely delivery and quality execution. We handle all aspects of construction management with transparency and efficiency.',
      features: [
        'Timeline Management',
        'Quality Control',
        'Budget Management',
        'Resource Coordination',
      ],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Understanding your vision, requirements, and budget',
    },
    {
      step: '02',
      title: 'Planning & Design',
      description: 'Creating detailed plans and architectural designs',
    },
    {
      step: '03',
      title: 'Approval & Documentation',
      description: 'Handling all legal and regulatory approvals',
    },
    {
      step: '04',
      title: 'Construction',
      description: 'Executing the project with precision and quality',
    },
    {
      step: '05',
      title: 'Quality Check',
      description: 'Rigorous quality inspection at every stage',
    },
    {
      step: '06',
      title: 'Handover',
      description: 'Final delivery and post-completion support',
    },
  ];

  const whyChoose = [
    {
      icon: Shield,
      title: 'Quality Materials',
      description: 'We use only premium materials from trusted suppliers',
    },
    {
      icon: CheckCircle2,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to excellence',
    },
    {
      icon: Wrench,
      title: 'Modern Technology',
      description: 'Latest construction techniques and equipment',
    },
    {
      icon: ArrowRight,
      title: 'Timely Delivery',
      description: 'Projects completed within promised timelines',
    },
  ];

  return (
    <PageTransition>
      <div className="w-full overflow-x-hidden">
        {/* Page Header */}
        <div className="relative bg-gradient-to-r from-primary via-primary-light to-primary-dark py-24 pt-32">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076"
              alt="Services"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200"
            >
              Comprehensive Construction Solutions
            </motion.p>
          </div>
        </div>

        {/* Services Grid */}
        <SectionWrapper>
          <SectionTitle
            subtitle="What We Offer"
            title="Complete Construction Services"
            description="From concept to completion, we provide end-to-end construction solutions"
          />
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn('up', 0.2)}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <motion.div
                  variants={scaleIn(0.3)}
                  className={index % 2 === 1 ? 'lg:col-start-2' : ''}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl shadow-premium w-full h-64 lg:h-72 object-cover"
                  />
                </motion.div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-base lg:text-lg mb-5 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 className="text-accent mt-1 mr-2 flex-shrink-0" size={16} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group bg-primary text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 hover:bg-primary-dark transition-colors text-sm"
                    >
                      Get Quote
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Our Process */}
        <SectionWrapper className="bg-gray-50">
          <SectionTitle
            subtitle="Our Process"
            title="How We Work"
            description="A systematic approach to deliver excellence"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', index * 0.1)}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-premium hover:shadow-2xl transition-all relative"
              >
                <div className="text-6xl font-bold text-primary/10 absolute top-4 right-4">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Why Choose Our Services */}
        <SectionWrapper>
          <SectionTitle
            subtitle="Our Commitment"
            title="Why Choose Our Services"
            description="Experience the Blue Rock Buildcon difference"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn(index * 0.1)}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <item.icon className="text-white" size={36} />
                </motion.div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* CTA Section */}
        <SectionWrapper className="bg-gradient-to-r from-primary to-primary-light text-white rounded-t-3xl">
          <motion.div
            variants={fadeIn('up', 0.2)}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Contact us today for a free consultation and quote
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </motion.button>
            </Link>
          </motion.div>
        </SectionWrapper>
      </div>
    </PageTransition>
  );
};

export default Services;
