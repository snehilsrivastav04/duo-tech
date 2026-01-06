import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, ChevronDown } from 'lucide-react';

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyFE4hmr8gNj_kO2wvYjMGeR6lFOS4RIz44ZAHN37qN5vIK6L08Bn5n_igfdzT_cyGaoQ/exec";

interface ServiceType {
  [key: string]: string[];
}

const services: ServiceType = {
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

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  subService: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    subService: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: value, 
      ...(name === "subject" ? { subService: "" } : {}) 
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(formData)
      });

      setFormSubmitted(true);

      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          subService: "",
          message: ""
        });
      }, 5000);

    } catch (error) {
      alert("Submission failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-xl border border-gray-200 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="p-10">
        <div className="mb-10 pb-8 border-b border-gray-100">
          <h3 className="text-3xl font-light tracking-tight text-gray-900 mb-3">Send a Message</h3>
          <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
        </div>

        <AnimatePresence mode="wait">
          {formSubmitted ? (
            <motion.div
              key="success"
              className="bg-gray-50 p-8 rounded-lg text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <CheckCircle className="mx-auto mb-6 text-blue-600" size={56} />
              </motion.div>
              <h4 className="text-2xl font-light text-gray-900 mb-3">Message Sent</h4>
              <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. Our team will review your inquiry and respond promptly.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  className="relative"
                  whileFocus={{ scale: 1.005 }}
                >
                  <label htmlFor="name" className="block text-sm font-normal text-gray-700 mb-3 tracking-tight">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600/20 transition-all duration-300 text-gray-900 placeholder-gray-400"
                    placeholder="John Doe"
                  />
                  {focusedField === 'name' && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>

                <motion.div 
                  className="relative"
                  whileFocus={{ scale: 1.005 }}
                >
                  <label htmlFor="email" className="block text-sm font-normal text-gray-700 mb-3 tracking-tight">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600/20 transition-all duration-300 text-gray-900 placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                  {focusedField === 'email' && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </div>

              {/* Phone & Service Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  className="relative"
                  whileFocus={{ scale: 1.005 }}
                >
                  <label htmlFor="phone" className="block text-sm font-normal text-gray-700 mb-3 tracking-tight">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600/20 transition-all duration-300 text-gray-900 placeholder-gray-400"
                    placeholder="+1 (555) 000-0000"
                  />
                  {focusedField === 'phone' && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>

                <motion.div 
                  className="relative"
                  whileFocus={{ scale: 1.005 }}
                >
                  <label htmlFor="subject" className="block text-sm font-normal text-gray-700 mb-3 tracking-tight">
                    Service *
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600/20 transition-all duration-300 appearance-none text-gray-900 cursor-pointer"
                    >
                      <option value="" disabled hidden>Select a service</option>
                      {Object.keys(services).map(service => (
                        <option key={service} value={service} className="py-2">{service}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                  </div>
                  {focusedField === 'subject' && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </div>

              {/* Sub-Service */}
              <AnimatePresence>
                {formData.subject && services[formData.subject]?.length > 0 && (
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    whileFocus={{ scale: 1.005 }}
                  >
                    <label htmlFor="subService" className="block text-sm font-normal text-gray-700 mb-3 tracking-tight">
                      {formData.subject} Options *
                    </label>
                    <div className="relative">
                      <select
                        id="subService"
                        name="subService"
                        value={formData.subService}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subService')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600/20 transition-all duration-300 appearance-none text-gray-900 cursor-pointer"
                      >
                        <option value="" disabled hidden>Select an option</option>
                        {services[formData.subject]?.map((sub: string) => (
                          <option key={sub} value={sub} className="py-2">{sub}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                    </div>
                    {focusedField === 'subService' && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Message */}
              <motion.div 
                className="relative"
                whileFocus={{ scale: 1.005 }}
              >
                <label htmlFor="message" className="block text-sm font-normal text-gray-700 mb-3 tracking-tight">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={4}
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600/20 transition-all duration-300 resize-none text-gray-900 placeholder-gray-400"
                  placeholder="Describe your project or inquiry..."
                />
                {focusedField === 'message' && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-700 text-white rounded-lg font-normal tracking-tight hover:bg-blue-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:ring-offset-2 flex items-center justify-center gap-3 group"
                >
                  <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </button>
              </motion.div>
            </motion.form>
          )}
        </AnimatePresence>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-gray-500 text-sm text-center">
            By submitting this form, you agree to our privacy policy. We never share your information.
          </p>
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.02] pointer-events-none">
        <svg viewBox="0 0 200 200" className="text-blue-700">
          <path d="M100,0 Q200,100 100,200 Q0,100 100,0 Z" fill="currentColor" />
        </svg>
      </div>
    </motion.div>
  );
};

export default ContactForm;
