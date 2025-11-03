import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Send, CheckCircle } from 'lucide-react';

const services = {
  "Digital Marketing": ["SEO", "Social Media Marketing", "Google Ads", "Email Marketing"],
  "Bulk SMS": ["Transactional SMS", "Promotional SMS", "API Integration"],
  "IVR Solutions": ["Single-Level IVR", "Multi-Level IVR", "Hosted IVR"],
  "WhatsApp Messaging": ["Transactional WhatsApp", "Promotional WhatsApp", "WhatsApp API"],
  "RCS Messaging": ["Transactional RCS", "Promotional RCS"],
  "OBD (Voice Calls)": ["Outbound Campaigns", "Interactive Voice Calls"],
  "Toll-Free Numbers": ["1800 Numbers", "1860 Numbers"],
  "Development": ["Website Development", "App Development", "Custom Software Development", "API Development"],
  "Technical Support": ["Server Setup", "Bug Fixing", "Maintenance"],
  "Partnership": ["Reseller Program", "Business Collaboration"],
  "General Inquiry": []
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    subService: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value, ...(name === "subject" ? { subService: "" } : {}) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        subService: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="bg-white dark:bg-dark-700 rounded-xl shadow-md overflow-hidden">
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Get in Touch
        </h3>

        {formSubmitted ? (
          <motion.div
            className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
            <h4 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-2">
              Message Sent!
            </h4>
            <p className="text-green-600 dark:text-green-400">
              Thank you for contacting us. We'll get back to you shortly.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-600 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-600 dark:text-white"
                />
              </div>
            </div>

            {/* Phone & Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-600 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Service *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-600 dark:text-white"
                >
                  <option value="" disabled>Select a service</option>
                  {Object.keys(services).map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sub-Service (Only if available) */}
            {formData.subject && services[formData.subject].length > 0 && (
              <div className="mb-6">
                <label htmlFor="subService" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {formData.subject} Options *
                </label>
                <select
                  id="subService"
                  name="subService"
                  value={formData.subService}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-600 dark:text-white"
                >
                  <option value="" disabled>Select an option</option>
                  {services[formData.subject].map(sub => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-600 dark:text-white"
              ></textarea>
            </div>

            <Button type="submit" variant="primary" className="w-full" icon={<Send size={16} />}>
              Send Message
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
