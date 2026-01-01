import PageTransition from '../components/PageTransition';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { fadeIn, scaleIn } from '../utils/motion';
import {
  Target,
  Eye,
  Award,
  CheckCircle2,
  Users,
  TrendingUp,
} from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2003', title: 'Company Founded', description: 'Started with a vision to transform construction' },
    { year: '2008', title: '50+ Projects', description: 'Reached significant milestone in project delivery' },
    { year: '2015', title: 'Industry Recognition', description: 'Awarded Best Builder of the Year' },
    { year: '2020', title: 'Expansion', description: 'Expanded operations to multiple cities' },
    { year: '2023', title: '150+ Projects', description: 'Completed 150+ successful projects' },
    { year: '2024', title: 'Innovation Leader', description: 'Pioneering sustainable construction practices' },
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management' },
    { name: 'ISO 14001:2015', description: 'Environmental Management' },
    { name: 'OHSAS 18001', description: 'Occupational Health & Safety' },
    { name: 'RERA Certified', description: 'Real Estate Regulatory Authority' },
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering superior quality in every project',
    },
    {
      icon: CheckCircle2,
      title: 'Integrity',
      description: 'Building trust through transparency and honest practices',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our highest priority',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Embracing modern technology and sustainable practices',
    },
  ];

  return (
    <PageTransition>
      <div className="w-full overflow-x-hidden">
        {/* Page Header */}
        <div className="relative bg-gradient-to-r from-primary via-primary-light to-primary-dark py-24 pt-32">
          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
            <div className="absolute top-10 left-10 opacity-20">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="35" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="5,5"/>
              </svg>
            </div>
            <div className="absolute top-20 right-16 opacity-20">
              <svg width="60" height="30" viewBox="0 0 60 30">
                <path d="M0 15 L10 0 L20 15 L30 0 L40 15 L50 0 L60 15" stroke="#ffffff" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="absolute bottom-10 right-1/4 opacity-20 text-4xl text-white">+</div>
            <div className="absolute bottom-20 left-1/3 opacity-20">
              <svg width="50" height="50" viewBox="0 0 50 50">
                <rect x="10" y="10" width="30" height="30" fill="none" stroke="#ffffff" strokeWidth="2" transform="rotate(45 25 25)"/>
              </svg>
            </div>
          </div>
          
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
              alt="About Us"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              About Blue Rock Buildcon
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200"
            >
              Building Excellence, Creating Legacies
            </motion.p>
          </div>
        </div>

        {/* Company Story */}
        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn('right', 0.2)}>
              <SectionTitle
                subtitle="Our Story"
                title="Two Decades of Excellence"
                center={false}
              />
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 2003, Blue Rock Buildcon emerged from a vision to revolutionize
                  the construction and real estate industry. What started as a small venture
                  has grown into one of the region's most trusted names in premium construction.
                </p>
                <p>
                  Over the past 20 years, we've completed more than 150 projects, ranging from
                  luxury residential complexes to state-of-the-art commercial spaces. Our journey
                  has been marked by unwavering commitment to quality, innovation, and customer
                  satisfaction.
                </p>
                <p>
                  Today, Blue Rock Buildcon stands as a testament to what dedication, expertise,
                  and integrity can achieve. Every project we undertake is a reflection of our
                  core values and our promise to deliver excellence.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn('left', 0.3)}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600"
                alt="Building 1"
                className="rounded-xl shadow-premium h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600"
                alt="Building 2"
                className="rounded-xl shadow-premium h-64 object-cover mt-8"
              />
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Vision & Mission */}
        <SectionWrapper className="bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 opacity-5 pointer-events-none">
              <svg width="100" height="100" viewBox="0 0 100 100">
                <circle cx="20" cy="20" r="15" fill="none" stroke="#1e3a8a" strokeWidth="2"/>
                <circle cx="50" cy="50" r="15" fill="none" stroke="#0ea5e9" strokeWidth="2"/>
                <circle cx="80" cy="80" r="15" fill="none" stroke="#10b981" strokeWidth="2"/>
              </svg>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <path d="M10 40 L25 10 L55 10 L70 40 L55 70 L25 70 Z" fill="none" stroke="#0ea5e9" strokeWidth="2"/>
              </svg>
            </div>
            <motion.div
              variants={fadeIn('right', 0.2)}
              className="bg-white p-6 rounded-xl shadow-premium relative group"
            >              {/* Card Decorative Elements */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <svg width="30" height="30" viewBox="0 0 30 30">
                  <circle cx="5" cy="5" r="2" fill="#0ea5e9"/>
                  <circle cx="15" cy="5" r="2" fill="#0ea5e9"/>
                  <circle cx="25" cy="5" r="2" fill="#0ea5e9"/>
                  <circle cx="5" cy="15" r="2" fill="#10b981"/>
                  <circle cx="25" cy="15" r="2" fill="#10b981"/>
                  <circle cx="5" cy="25" r="2" fill="#1e3a8a"/>
                  <circle cx="15" cy="25" r="2" fill="#1e3a8a"/>
                  <circle cx="25" cy="25" r="2" fill="#1e3a8a"/>
                </svg>
              </div>              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Eye className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Our Vision</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                To be the most trusted and innovative construction company, setting new
                benchmarks in quality, sustainability, and customer satisfaction. We envision
                creating landmarks that stand as symbols of excellence for generations to come.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn('left', 0.3)}
              className="bg-white p-6 rounded-xl shadow-premium"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Our Mission</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                To deliver exceptional construction solutions that exceed expectations through
                innovative design, superior craftsmanship, and sustainable practices. We are
                committed to building spaces that enhance lives and create lasting value.
              </p>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Core Values */}
        <SectionWrapper>
          <SectionTitle
            subtitle="Our Values"
            title="What We Stand For"
            description="The principles that guide everything we do"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={scaleIn(index * 0.1)}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <value.icon className="text-white" size={36} />
                </motion.div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Founder Message */}
        <SectionWrapper className="bg-gradient-to-r from-primary to-primary-light text-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
              <motion.div variants={fadeIn('right', 0.2)} className="lg:col-span-1">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600"
                    alt="Founder"
                    className="rounded-xl shadow-2xl w-full h-64 lg:h-80 object-cover mx-auto max-w-sm"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent rounded-xl" />
                </div>
              </motion.div>
              <motion.div variants={fadeIn('left', 0.3)} className="lg:col-span-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 lg:p-6 border border-white/20">
                  <h3 className="text-accent-light text-xs lg:text-sm font-semibold mb-2 uppercase tracking-wider">Message from the Founder</h3>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4">Mr. Rakesh Mehta</h2>
                  <div className="space-y-3">
                    <p className="text-gray-100 text-sm leading-relaxed">
                      "When I founded Blue Rock Buildcon in 2003, I had a simple vision – to build
                      structures that would stand the test of time, not just in terms of physical
                      strength, but also in the value they provide to people's lives."
                    </p>
                    <p className="text-gray-100 text-sm leading-relaxed">
                      "Over these 20 years, we've stayed true to that vision. Every brick we lay,
                      every beam we erect, and every space we create is a testament to our commitment
                      to excellence and our respect for the trust our clients place in us."
                    </p>
                    <p className="text-gray-100 text-sm leading-relaxed">
                      "As we look to the future, we remain dedicated to innovation, sustainability,
                      and most importantly, to making your dreams come true."
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/20">
                    <p className="text-accent-light font-semibold text-sm lg:text-base">- Rakesh Mehta, Founder & CEO</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>

        {/* Certifications */}
        <SectionWrapper>
          <SectionTitle
            subtitle="Certifications"
            title="Industry Recognition"
            description="Certified and trusted by leading industry bodies"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={scaleIn(index * 0.1)}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-premium text-center hover:shadow-2xl transition-all"
              >
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary" size={40} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Timeline */}
        <SectionWrapper className="bg-gray-50">
          <SectionTitle
            subtitle="Our Journey"
            title="Milestones & Achievements"
            description="A timeline of our growth and success"
          />
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn(index % 2 === 0 ? 'right' : 'left', 0.2)}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="bg-white p-6 rounded-xl shadow-premium">
                      <span className="text-accent font-bold text-2xl">{milestone.year}</span>
                      <h3 className="text-2xl font-bold text-primary mt-2 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </PageTransition>
  );
};

export default About;
