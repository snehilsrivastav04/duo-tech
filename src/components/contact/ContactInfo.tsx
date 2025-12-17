import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const contactItems = [
    {
      icon: <MapPin size={22} className="text-white" />,
      title: 'Location',
      details: 'C30, C Block, Sector 63, Noida, UP, 201301'
    },
    {
      icon: <Phone size={22} className="text-white" />,
      title: 'Phone',
      details: [
        { label: '+91 8800722190', link: 'tel:+918800722190' },
        { label: '+91 8800707381', link: 'tel:+918800707381' }
      ]
    },
    {
      icon: <Mail size={22} className="text-white" />,
      title: 'Email',
      details: [{ label: 'info@duotechsolutions.in', link: 'mailto:info@duotechsolutions.in' }]
    },
    {
      icon: <Clock size={22} className="text-white" />,
      title: 'Hours',
      details: 'Mon - Sat: 9AM - 7PM (IST)'
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/theduotechsolutions',
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: 'https://x.com/duotechsolution',
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/duotech-solutions/',
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/theduotechsolutions',
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    }
  ];

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-8">
        <div className="mb-8 pb-6 border-b border-gray-100">
          <h3 className="text-2xl font-light tracking-tight text-gray-900 mb-2">Contact Information</h3>
          <p className="text-gray-500 text-sm">Reach out to us through any channel</p>
        </div>
        
        <div className="space-y-8">
          {contactItems.map((item, index) => (
            <motion.div 
              key={index}
              className="group flex items-start cursor-default"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ x: 4 }}
            >
              <div className="flex-shrink-0 mr-5">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-700 rounded-lg group-hover:bg-blue-800 transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-normal text-gray-900 tracking-tight mb-1">{item.title}</h4>
                
                {Array.isArray(item.details) ? (
                  <div className="space-y-1">
                    {item.details.map((d, i) => (
                      <a
                        key={i}
                        href={d.link}
                        className="block text-gray-600 hover:text-blue-700 transition-colors duration-300 hover:underline underline-offset-2"
                      >
                        {d.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 leading-relaxed">{item.details}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="mb-5">
            <h4 className="font-normal text-gray-900 tracking-tight mb-2">Connect With Us</h4>
            <p className="text-gray-500 text-sm">Follow our journey across platforms</p>
          </div>
          <div className="flex space-x-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.name}
                className="w-11 h-11 flex items-center justify-center bg-gray-50 hover:bg-blue-700 text-gray-600 hover:text-white rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative geometric element */}
      <div className="absolute bottom-0 right-0 w-20 h-20 opacity-5">
        <svg viewBox="0 0 100 100" className="text-blue-700">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </motion.div>
  );
};

export default ContactInfo;