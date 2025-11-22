import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    description: ''
  });
  const [focusedField, setFocusedField] = useState(null);

  const servicesDropdown = [
    { name: 'Bulk SMS Services', path: '/services/bulk-sms' },
    { name: 'Promotional SMS', path: '/services/promotional-sms' },
    { name: 'Transactional SMS', path: '/services/transactional-sms' },
    { name: 'WhatsApp Bulk Services', path: '/services/whatsapp-bulk' },
    { name: 'IVR Solutions', path: '/services/ivr' },
    { name: 'Voice OBD Services', path: '/services/VoiceOBDPage' },
    { name: 'Virtual Numbers', path: '/services/virtual-number' },
    { name: 'Toll Free Numbers', path: '/services/toll-free-number' },
    { name: 'Hosted Call Center', path: '/services/hosted-call-center' },
    { name: 'RCS Messaging', path: '/services/rcs' },
  ];

  const digitalServices = [
    { name: 'Email Marketing', path: '/digital/email-marketing' },
    { name: 'Social Media Marketing', path: '/digital/social-media' },
    { name: 'SEO Services', path: '/digital/seo' },
    { name: 'PPC Advertising', path: '/digital/ppc' },
    { name: 'Graphic Design', path: '/digital/graphic-design' },
  ];

  const developmentServices = [
    { name: 'Web Development', path: '/development/web' },
    { name: 'Android App Development', path: '/development/android' },
    { name: 'UI/UX Design', path: '/development/ui-ux' },
    { name: 'API Integration', path: '/development/api' },
  ];

  const products = [
    { name: 'WhatsApp API Solutions', path: '/products/whatsapp-api' },
    { name: 'SMS Gateway', path: '/products/sms-gateway' },
    { name: 'CRM Solutions', path: '/products/crm' },
    { name: 'Source Codes', path: '/products/source-codes' },
  ];

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Sign In', path: '/login' },
    { name: 'Dashboard', path: '/client' },
    { name: 'SMS Pricing', path: '/sms-pricing' },
    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
  ];

  const serviceTypes = [
    'Bulk SMS Services',
    'WhatsApp Business API',
    'Email Marketing',
    'Web Development',
    'Mobile App Development',
    'Digital Marketing',
    'IVR Solutions',
    'Virtual Numbers',
    'API Integration',
    'Other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(255 255 255) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 relative">
        {/* Main Content */}
        <div className="py-20 md:py-24">
          <div className="grid lg:grid-cols-3 gap-16 lg:gap-20">
            {/* Left Column - Contact Form */}
            <div className="lg:col-span-1 space-y-8">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-xs tracking-[0.3em] uppercase text-blue-600 font-light">
                    Get in Touch
                  </span>
                  <h3 className="text-3xl md:text-4xl font-light text-white mt-4 tracking-tight">
                    Start Your Project
                  </h3>
                </motion.div>
                <p className="text-gray-400 font-light leading-relaxed">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              {/* Contact Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Name Field */}
                <div className="relative">
                  <motion.div
                    animate={{
                      borderColor: focusedField === 'name' ? 'rgb(37 99 235)' : 'rgb(55 65 81)',
                    }}
                    transition={{ duration: 0.3 }}
                    className="border-b"
                  >
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your Name"
                      required
                      className="w-full bg-transparent py-3 text-white placeholder-gray-500 focus:outline-none font-light"
                    />
                  </motion.div>
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <motion.div
                    animate={{
                      borderColor: focusedField === 'phone' ? 'rgb(37 99 235)' : 'rgb(55 65 81)',
                    }}
                    transition={{ duration: 0.3 }}
                    className="border-b"
                  >
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Phone Number"
                      required
                      className="w-full bg-transparent py-3 text-white placeholder-gray-500 focus:outline-none font-light"
                    />
                  </motion.div>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <motion.div
                    animate={{
                      borderColor: focusedField === 'email' ? 'rgb(37 99 235)' : 'rgb(55 65 81)',
                    }}
                    transition={{ duration: 0.3 }}
                    className="border-b"
                  >
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Email Address"
                      required
                      className="w-full bg-transparent py-3 text-white placeholder-gray-500 focus:outline-none font-light"
                    />
                  </motion.div>
                </div>

                {/* Service Type Dropdown */}
                <div className="relative">
                  <motion.div
                    animate={{
                      borderColor: focusedField === 'service' ? 'rgb(37 99 235)' : 'rgb(55 65 81)',
                    }}
                    transition={{ duration: 0.3 }}
                    className="border-b"
                  >
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('service')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full bg-transparent py-3 text-white focus:outline-none font-light appearance-none cursor-pointer"
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="" className="bg-gray-900">Type of Service</option>
                      {serviceTypes.map((service, idx) => (
                        <option key={idx} value={service} className="bg-gray-900">
                          {service}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                {/* Description Field */}
                <div className="relative">
                  <motion.div
                    animate={{
                      borderColor: focusedField === 'description' ? 'rgb(37 99 235)' : 'rgb(55 65 81)',
                    }}
                    transition={{ duration: 0.3 }}
                    className="border-b"
                  >
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('description')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Project Description"
                      rows={3}
                      required
                      className="w-full bg-transparent py-3 text-white placeholder-gray-500 focus:outline-none font-light resize-none"
                    />
                  </motion.div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group w-full px-6 py-4 bg-blue-600 text-white rounded-sm font-light tracking-wide transition-all duration-300 hover:bg-white hover:text-black flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                </motion.button>
              </motion.form>

              {/* Contact Info */}
              <div className="space-y-4 pt-8 border-t border-gray-800">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm text-gray-400 font-light">Email</p>
                    <a href="mailto:info@duotech.com" className="text-white hover:text-blue-600 transition-colors">
                      info@duotech.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm text-gray-400 font-light">Phone</p>
                    <a href="tel:+1234567890" className="text-white hover:text-blue-600 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Links */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
                {/* Navigation */}
                <div className="space-y-6">
                  <h4 className="text-sm tracking-[0.2em] uppercase text-gray-500 font-light">
                    Navigation
                  </h4>
                  <ul className="space-y-3">
                    {navigation.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                      >
                        <a
                          href={item.path}
                          className="text-gray-400 hover:text-blue-600 transition-colors font-light inline-block hover:translate-x-1 transition-transform duration-300"
                        >
                          {item.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div className="space-y-6">
                  <h4 className="text-sm tracking-[0.2em] uppercase text-gray-500 font-light">
                    Services
                  </h4>
                  <ul className="space-y-3">
                    {servicesDropdown.slice(0, 7).map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                      >
                        <a
                          href={item.path}
                          className="text-gray-400 hover:text-blue-600 transition-colors font-light inline-block hover:translate-x-1 transition-transform duration-300"
                        >
                          {item.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Digital Marketing */}
                <div className="space-y-6">
                  <h4 className="text-sm tracking-[0.2em] uppercase text-gray-500 font-light">
                    Digital
                  </h4>
                  <ul className="space-y-3">
                    {digitalServices.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                      >
                        <a
                          href={item.path}
                          className="text-gray-400 hover:text-blue-600 transition-colors font-light inline-block hover:translate-x-1 transition-transform duration-300"
                        >
                          {item.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                  <h4 className="text-sm tracking-[0.2em] uppercase text-gray-500 font-light pt-4">
                    Development
                  </h4>
                  <ul className="space-y-3">
                    {developmentServices.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                      >
                        <a
                          href={item.path}
                          className="text-gray-400 hover:text-blue-600 transition-colors font-light inline-block hover:translate-x-1 transition-transform duration-300"
                        >
                          {item.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Products */}
                <div className="space-y-6">
                  <h4 className="text-sm tracking-[0.2em] uppercase text-gray-500 font-light">
                    Products
                  </h4>
                  <ul className="space-y-3">
                    {products.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                      >
                        <a
                          href={item.path}
                          className="text-gray-400 hover:text-blue-600 transition-colors font-light inline-block hover:translate-x-1 transition-transform duration-300"
                        >
                          {item.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Company Info */}
            <div className="text-center md:text-left space-y-2">
              <h3 className="text-xl font-light text-white tracking-tight">
                DuoTech Solutions
              </h3>
              <p className="text-sm text-gray-400 font-light">
                Your all-in-one partner for digital communication & technology solutions.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/theduotechsolutions', label: 'Facebook' },
                { icon: Twitter, href: 'https://www.x.com/duotechsolution', label: 'Twitter' },
                { icon: Linkedin, href: 'https://www.linkedin.com/company/duotech-solutions/', label: 'LinkedIn' },
                { icon: Instagram, href: 'https://www.instagram.com/theduotechsolutions', label: 'Instagram' },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:border-blue-600 hover:bg-blue-600/10 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 text-gray-400 group-hover:text-blue-600" strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-500 font-light">
              © {currentYear} DuoTech Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;