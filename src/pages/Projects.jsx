import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import ImageCarousel from '../components/ImageCarousel';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { MapPin, Building2, Calendar, CheckCircle2 } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const ongoingProjects = [
    {
      name: 'Azure Heights',
      location: 'Downtown District',
      type: 'Residential',
      status: 'Ongoing',
      completion: '75%',
      description: 'Luxury 3 & 4 BHK apartments with world-class amenities',
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070',
      ],
    },
    {
      name: 'TechPark Plaza',
      location: 'IT Corridor',
      type: 'Commercial',
      status: 'Ongoing',
      completion: '60%',
      description: 'Modern commercial complex with Grade A office spaces',
      images: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
        'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2074',
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2096',
      ],
    },
    {
      name: 'Green Valley Villas',
      location: 'Suburban Area',
      type: 'Residential',
      status: 'Ongoing',
      completion: '85%',
      description: 'Eco-friendly independent villas surrounded by nature',
      images: [
        'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
      ],
    },
  ];

  const completedProjects = [
    {
      name: 'Royal Towers',
      location: 'Business Hub',
      type: 'Commercial',
      status: 'Completed',
      completedYear: '2023',
      description: 'Premium commercial towers with state-of-the-art facilities',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070',
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2096',
      ],
    },
    {
      name: 'Skyline Residency',
      location: 'City Center',
      type: 'Residential',
      status: 'Completed',
      completedYear: '2022',
      description: 'Iconic residential towers redefining urban living',
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070',
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2087',
        'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070',
      ],
    },
    {
      name: 'Paradise Mall',
      location: 'Shopping District',
      type: 'Commercial',
      status: 'Completed',
      completedYear: '2021',
      description: 'Upscale shopping and entertainment destination',
      images: [
        'https://images.unsplash.com/photo-1567890168711-0093c8a0cc48?q=80&w=2070',
        'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=2069',
        'https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=2077',
      ],
    },
    {
      name: 'Harmony Gardens',
      location: 'Green Belt Area',
      type: 'Residential',
      status: 'Completed',
      completedYear: '2022',
      description: 'Peaceful residential community with extensive green spaces',
      images: [
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2084',
      ],
    },
    {
      name: 'Elite Business Center',
      location: 'Financial District',
      type: 'Commercial',
      status: 'Completed',
      completedYear: '2020',
      description: 'Premium office spaces with modern infrastructure',
      images: [
        'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2074',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069',
      ],
    },
    {
      name: 'Sunset Apartments',
      location: 'Waterfront',
      type: 'Residential',
      status: 'Completed',
      completedYear: '2021',
      description: 'Luxury waterfront apartments with stunning views',
      images: [
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070',
        'https://images.unsplash.com/photo-1600047509782-20d39509f26d?q=80&w=2084',
        'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070',
      ],
    },
  ];

  const ProjectCard = ({ project, index }) => (
    <motion.div
      variants={fadeIn('up', index * 0.1)}
      whileHover={{ y: -10 }}
      className="relative bg-white rounded-xl shadow-premium hover:shadow-2xl transition-all overflow-hidden group"
    >
      <ImageCarousel images={project.images} projectName={project.name} />
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-primary">{project.name}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            project.status === 'Ongoing' 
              ? 'bg-amber-100 text-amber-800' 
              : 'bg-green-100 text-green-800'
          }`}>
            {project.status}
          </span>
        </div>

        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="space-y-2">
          <div className="flex items-center text-gray-700">
            <MapPin size={18} className="text-accent mr-2 flex-shrink-0" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Building2 size={18} className="text-accent mr-2 flex-shrink-0" />
            <span>{project.type}</span>
          </div>
          {project.status === 'Ongoing' ? (
            <div className="flex items-center text-gray-700">
              <CheckCircle2 size={18} className="text-accent mr-2 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold">Completion</span>
                  <span className="text-sm font-bold text-accent">{project.completion}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-accent h-2 rounded-full transition-all"
                    style={{ width: project.completion }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center text-gray-700">
              <Calendar size={18} className="text-accent mr-2 flex-shrink-0" />
              <span>Completed in {project.completedYear}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <PageTransition>
      <div className="w-full overflow-x-hidden">
        {/* Page Header */}
        <div className="relative bg-gradient-to-r from-primary via-primary-light to-primary-dark py-24 pt-32">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
              alt="Projects"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Our Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200"
            >
              Excellence in Every Build
            </motion.p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  filter === 'all'
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                All Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter('ongoing')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  filter === 'ongoing'
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Ongoing
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter('completed')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  filter === 'completed'
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Completed
              </motion.button>
            </div>
          </div>
        </div>

        {/* Ongoing Projects */}
        {(filter === 'all' || filter === 'ongoing') && (
          <SectionWrapper>
            <SectionTitle
              subtitle="Current Work"
              title="Ongoing Projects"
              description="Our projects currently under construction"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ongoingProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </SectionWrapper>
        )}

        {/* Completed Projects */}
        {(filter === 'all' || filter === 'completed') && (
          <SectionWrapper className={filter === 'all' ? 'bg-gray-50' : ''}>
            <SectionTitle
              subtitle="Success Stories"
              title="Completed Projects"
              description="Our portfolio of successfully delivered projects"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </SectionWrapper>
        )}
      </div>
    </PageTransition>
  );
};

export default Projects;
