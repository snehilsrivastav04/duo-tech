import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import GoogleMap from '../components/contact/GoogleMap';

const ContactPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero Section with Minimalist Header */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
            <path 
              d="M0,300 Q600,350 1200,300 L1200,600 L0,600 Z" 
              fill="currentColor" 
              className="text-blue-600"
            />
            <path 
              d="M0,0 Q600,50 1200,0 L1200,300 L0,300 Z" 
              fill="currentColor" 
              className="text-blue-600"
            />
          </svg>
        </div>

        <Container>
          <motion.div 
            className="max-w-3xl mx-auto text-center relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block mb-8">
              <div className="w-20 h-px bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0 mx-auto mb-6"></div>
              <motion.h1
                className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Get in Touch
              </motion.h1>
              <div className="w-20 h-px bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0 mx-auto"></div>
            </div>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Connect with our team to discuss your project, explore solutions, or learn more about our services.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Section with Generous Whitespace */}
      <section className="py-20 bg-gray-50">
        <Container>
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="mb-12">
                <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-4">
                  Send a Message
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  Fill out the form below and we'll respond within 24 hours. All fields marked with * are required.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ContactInfo />
              </motion.div>

              {/* Additional Information Card */}
              <motion.div 
                className="mt-12 p-8 bg-white border border-gray-200 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-normal text-gray-900 mb-2">Response Time</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We typically respond within 2-4 business hours during our operational hours (9AM-7PM IST, Monday-Saturday).
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Location Map Section */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0 mx-auto mb-4"></div>
                <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-4">
                  Our Location
                </h2>
                <div className="w-16 h-px bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0 mx-auto"></div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Visit our office in Noida, or connect with us remotely. Our team is ready to assist you with innovative solutions.
              </p>
            </div>

            {/* Map Container with Clean Border */}
            <motion.div 
              className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-600/0 pointer-events-none z-10"></div>
              <GoogleMap />
              
              {/* Location Badge */}
              <motion.div 
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg border border-gray-200 z-20"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm font-normal text-gray-900">C Block, Sector 63, Noida</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Additional Information */}
            <motion.div 
              className="mt-12 pt-12 border-t border-gray-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {[
                  {
                    title: "Office Hours",
                    description: "Mon - Sat: 9AM - 7PM IST",
                    icon: "🕒"
                  },
                  {
                    title: "Support",
                    description: "Available during business hours",
                    icon: "💬"
                  },
                  {
                    title: "Meeting",
                    description: "Schedule a virtual consultation",
                    icon: "📅"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="p-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-2xl mb-4">{item.icon}</div>
                    <h4 className="font-normal text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-light tracking-tight text-gray-900 mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Let's discuss how our solutions can help you achieve your goals.
              </p>
              <motion.button
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-normal hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Conversation
              </motion.button>
            </div>
          </motion.div>
        </Container>
      </section>
    </MainLayout>
  );
};

export default ContactPage;