import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Menu, X, User, ChevronDown, Home, Users, Phone,
  Rocket, Megaphone, Code, Box, Award, Smartphone,
  Briefcase, MessageSquare, Mail, Search
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const megaMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (e) => {
      if (window.innerWidth >= 1024 && megaMenuRef.current && !megaMenuRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const servicesData = {
    'Services': [
      { 
        category: 'Messaging Services',
        items: [
          { name: 'Bulk SMS Services', href: '/services/bulk-sms', icon: <Smartphone className="w-4 h-4" /> },
          { name: 'Promotional SMS', href: '/services/bulk-sms', icon: <Megaphone className="w-4 h-4" /> },
          { name: 'Transactional SMS', href: '/services/transactional-sms', icon: <Briefcase className="w-4 h-4" /> },
          { name: 'WhatsApp Bulk Services', href: '/services/whatsapp-bulk', icon: <MessageSquare className="w-4 h-4" /> },
        ]
      },
      {
        category: 'Voice Solutions',
        items: [
          { name: 'IVR Solutions', href: '/services/ivr', icon: <Phone className="w-4 h-4" /> },
          { name: 'Voice OBD Services', href: '/services/VoiceOBDPage', icon: <Phone className="w-4 h-4" /> },
          { name: 'Virtual Numbers', href: '/services/virtual-number', icon: <Smartphone className="w-4 h-4" /> },
          { name: 'Toll Free Numbers', href: '/services/toll-free-number', icon: <Phone className="w-4 h-4" /> },
          { name: 'Hosted Call Center', href: '/services/hosted-call-center', icon: <Phone className="w-4 h-4" /> },
        ]
      }
    ],
    'Digital Marketing': [
      {
        category: 'Online Marketing',
        items: [
          { name: 'Email Marketing', href: '/digital/email-marketing', icon: <Mail className="w-4 h-4" /> },
          { name: 'Social Media Marketing', href: '/digital/social-media', icon: <Megaphone className="w-4 h-4" /> },
          { name: 'SEO Services', href: '/digital/seo', icon: <Search className="w-4 h-4" /> },
        ]
      }
    ],
    'Development': [
      {
        category: 'Web & Mobile',
        items: [
          { name: 'Web Development', href: '/development/web', icon: <Code className="w-4 h-4" /> },
          { name: 'Android App Development', href: '/development/android', icon: <Smartphone className="w-4 h-4" /> },
          { name: 'iOS App Development', href: '/development/android', icon: <Smartphone className="w-4 h-4" /> },
        ]
      }
    ],
    'Products': [
      {
        category: 'Business Solutions',
        items: [
          { name: 'WhatsApp API Solutions', href: '/products/whatsapp-api', icon: <MessageSquare className="w-4 h-4" /> },
          { name: 'SMS Gateway', href: '/products/sms-gateway', icon: <Smartphone className="w-4 h-4" /> },
          { name: 'CRM Solutions', href: '/products/crm', icon: <Briefcase className="w-4 h-4" /> },
          { name: 'Source Codes', href: '/products/source-codes', icon: <Code className="w-4 h-4" /> },
        ]
      }
    ]
  };

  const navLinks = [
    { name: 'Home', href: '/', icon: <Home className="w-4 h-4" />, megaMenu: false },
    { name: 'Services', icon: <Rocket className="w-4 h-4" />, megaMenu: true },
    { name: 'Digital Marketing', href: '/digital/digital-marketing', icon: <Megaphone className="w-4 h-4" />, megaMenu: false },
    { name: 'Development', icon: <Code className="w-4 h-4" />, megaMenu: true },
    { name: 'Products', icon: <Box className="w-4 h-4" />, megaMenu: true },
    { name: 'About', href: '/about', icon: <Users className="w-4 h-4" />, megaMenu: false },
    { name: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4" />, megaMenu: false },
  ];

  return (
    <>
      <motion.header 
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-sm' 
            : 'bg-white'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Top border accent */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
        
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-light text-xl">D</span>
                </div>
                <span className="text-xl font-light text-gray-900 tracking-tight">
                  DuoTechno
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <div key={index} className="relative">
                  {link.megaMenu ? (
                    <button
                      className={`flex items-center gap-2 px-6 py-3 text-sm font-normal text-gray-700 hover:text-blue-600 transition-colors duration-300 ${
                        openDropdown === link.name ? 'text-blue-600' : ''
                      }`}
                      onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                      onMouseEnter={() => setOpenDropdown(link.name)}
                    >
                      {link.icon}
                      <span className="tracking-wide">{link.name}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                        openDropdown === link.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="flex items-center gap-2 px-6 py-3 text-sm font-normal text-gray-700 hover:text-blue-600 transition-colors duration-300"
                    >
                      {link.icon}
                      <span className="tracking-wide">{link.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right side actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/login" className="px-6 py-2.5 text-sm font-normal text-gray-700 hover:text-blue-600 transition-colors duration-300 tracking-wide">
                Sign In
              </Link>
              <Link to="/contact" className="px-8 py-2.5 bg-blue-600 text-white text-sm font-normal rounded-lg hover:bg-blue-700 transition-all duration-300 tracking-wide shadow-sm hover:shadow-md">
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {openDropdown && servicesData[openDropdown] && (
            <motion.div
              ref={megaMenuRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 right-0 top-full bg-white border-t border-gray-100 shadow-xl"
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-2 gap-16 max-w-6xl mx-auto">
                  {servicesData[openDropdown].map((category, idx) => (
                    <div key={idx}>
                      {/* Category Header */}
                      <div className="mb-8">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-px bg-blue-600" />
                          <h3 className="text-xs tracking-[0.15em] text-blue-600 font-normal uppercase">
                            {category.category}
                          </h3>
                        </div>
                      </div>

                      {/* Category Items */}
                      <div className="space-y-2">
                        {category.items.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            to={item.href}
                            className="group w-full flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
                          >
                            <motion.div
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.2 }}
                                className="w-full flex items-center gap-4"
                            >
                                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <div className="flex-grow text-left">
                                    <div className="text-base font-normal text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                        {item.name}
                                    </div>
                                </div>
                            </motion.div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Section */}
                <div className="max-w-6xl mx-auto mt-12 pt-12 border-t border-gray-100">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-normal text-gray-900 mb-2">
                        Need help choosing?
                      </h3>
                      <p className="text-gray-600 font-light">
                        Our experts are ready to help you find the perfect solution.
                      </p>
                    </div>
                    <Link to="/contact" className="px-8 py-3 bg-blue-600 text-white text-sm font-normal rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20">
                      Contact Sales
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-white"
          >
            <div className="h-full overflow-y-auto pt-24 pb-6 px-6">
              <div className="space-y-2">
                {navLinks.map((link, index) => (
                  <div key={index}>
                    {link.megaMenu ? (
                      <div>
                        <button
                          onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                          className={`w-full flex items-center justify-between p-4 rounded-lg text-left transition-all duration-300 ${
                            openDropdown === link.name
                              ? 'bg-blue-50 text-blue-600'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {link.icon}
                            <span className="font-normal">{link.name}</span>
                          </div>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                            openDropdown === link.name ? 'rotate-180' : ''
                          }`} />
                        </button>

                        <AnimatePresence>
                          {openDropdown === link.name && servicesData[link.name] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-6 pr-4 py-4 space-y-6">
                                {servicesData[link.name].map((category, catIdx) => (
                                  <div key={catIdx}>
                                    <div className="text-xs tracking-[0.15em] text-blue-600 font-normal uppercase mb-3">
                                      {category.category}
                                    </div>
                                    <div className="space-y-2">
                                      {category.items.map((item, itemIdx) => (
                                        <Link
                                          key={itemIdx}
                                          to={item.href}
                                          onClick={() => setIsOpen(false)} 
                                          className="w-full flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                                        >
                                          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                                            {item.icon}
                                          </div>
                                          <span className="text-sm font-normal">{item.name}</span>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="w-full flex items-center gap-3 p-4 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300"
                      >
                        {link.icon}
                        <span className="font-normal">{link.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="mt-8 pt-8 border-t border-gray-100 space-y-3">
                <Link to="/login" onClick={() => setIsOpen(false)} className="w-full text-center px-6 py-3 text-sm font-normal text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300">
                  Sign In
                </Link>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full text-center px-6 py-3 bg-blue-600 text-white text-sm font-normal rounded-lg hover:bg-blue-700 transition-all duration-300">
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header - REMOVED because MainLayout will handle spacing */}
      {/* <div className="h-20" /> */}
    </>
  );
};

export default Navbar;