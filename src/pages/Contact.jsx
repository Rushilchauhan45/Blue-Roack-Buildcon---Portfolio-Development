import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (connect to backend or email service)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (234) 567-890', '+1 (234) 567-891'],
      link: 'tel:+1234567890',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@bluerockbuildcon.com', 'support@bluerockbuildcon.com'],
      link: 'mailto:info@bluerockbuildcon.com',
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['123 Builder Street', 'Construction City, BC 12345'],
      link: '#',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
      link: '#',
    },
  ];

  const whatsappNumber = '1234567890';

  return (
    <PageTransition>
      <div className="w-full overflow-x-hidden">
        {/* Page Header */}
        <div className="relative bg-gradient-to-r from-primary via-primary-light to-primary-dark py-24 pt-32">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074"
              alt="Contact"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200"
            >
              Let's discuss your next project
            </motion.p>
          </div>
        </div>

        {/* Contact Info Cards */}
        <SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', index * 0.1)}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-premium hover:shadow-2xl transition-all text-center"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Contact Form & Map */}
        <SectionWrapper className="bg-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={fadeIn('right', 0.2)}>
              <SectionTitle
                subtitle="Send Us a Message"
                title="Contact Form"
                center={false}
              />
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors"
                >
                  {submitted ? (
                    <>
                      <MessageSquare size={20} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Map & WhatsApp */}
            <motion.div variants={fadeIn('left', 0.3)} className="space-y-6">
              <div>
                <SectionTitle
                  subtitle="Find Us"
                  title="Our Location"
                  center={false}
                />
                {/* Google Map Placeholder */}
                <div className="rounded-xl overflow-hidden shadow-premium h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />
                </div>
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block bg-green-500 hover:bg-green-600 text-white p-6 rounded-xl shadow-premium hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-4 rounded-full">
                    <MessageSquare size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">Chat on WhatsApp</h3>
                    <p className="text-green-50">Get instant response to your queries</p>
                  </div>
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
              </motion.a>

              {/* Additional Info */}
              <div className="bg-white p-6 rounded-xl shadow-premium">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-gray-600 mb-4">
                  Our team is ready to help you with any queries or concerns you may have.
                  Feel free to reach out through any of the channels above.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>
                  <a
                    href="mailto:info@bluerockbuildcon.com"
                    className="flex items-center justify-center gap-2 bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent-light transition-colors"
                  >
                    <Mail size={18} />
                    Email Us
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>
      </div>
    </PageTransition>
  );
};

export default Contact;
