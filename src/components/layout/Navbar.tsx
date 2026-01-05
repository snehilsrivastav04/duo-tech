import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Home, Users, Phone,
  Rocket, Megaphone, Code, Box, Smartphone,
  Briefcase, MessageSquare, Mail, Search, ChevronLeft, ArrowUp, BookOpen
} from 'lucide-react';

interface NavItem {
  name: string;
  href?: string;
  icon: React.ReactNode;
  megaMenu: boolean;
}

interface ServiceItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface ServiceCategory {
  category: string;
  items: ServiceItem[];
}

interface ServicesData {
  [key: string]: ServiceCategory[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('');
  const [mobileNavHistory, setMobileNavHistory] = useState<string[]>([]);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setMobileNavHistory([]);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Auto-detect active section based on scroll position
      const sections = document.querySelectorAll('section[id], div[id]');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200) && window.scrollY < (sectionTop + sectionHeight - 200)) {
          const id = section.getAttribute('id');
          if (id) {
            current = id;
          }
        }
      });
      
      setActiveSection(current);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (window.innerWidth >= 1024 && megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
      if (isOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setMobileNavHistory([]);
      }
    };

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setOpenDropdown(null);
        setMobileNavHistory([]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    // Auto-scroll to active section on page load if hash exists
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.getElementById(window.location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  const servicesData: ServicesData = {
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
          { name: 'iOS App Development', href: '/development/ios', icon: <Smartphone className="w-4 h-4" /> },
        ]
      }
    ],
    'Products': [
      {
        category: 'Business Solutions',
        items: [
          { name: 'SMS Gateway', href: '/products/sms-gateway', icon: <Smartphone className="w-4 h-4" /> },
          { name: 'CRM Solutions', href: '/products/crm', icon: <Briefcase className="w-4 h-4" /> },
          { name: 'Source Codes', href: '/products/source-codes', icon: <Code className="w-4 h-4" /> },
        ]
      }
    ]
  };

  const navLinks: NavItem[] = [
    { name: 'Home', href: '/', icon: <Home className="w-4 h-4" />, megaMenu: false },
    { name: 'Services', href: '#', icon: <Rocket className="w-4 h-4" />, megaMenu: true },
    { name: 'Digital Marketing', href: '/digital/digital-marketing', icon: <Megaphone className="w-4 h-4" />, megaMenu: false },
    { name: 'Development', href: '#', icon: <Code className="w-4 h-4" />, megaMenu: true },
    { name: 'Products', href: '#', icon: <Box className="w-4 h-4" />, megaMenu: true },
    { name: 'Blog', href: '/blog', icon: <BookOpen className="w-4 h-4" />, megaMenu: false },
    { name: 'About', href: '/about', icon: <Users className="w-4 h-4" />, megaMenu: false },
    { name: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4" />, megaMenu: false },
  ];

  const handleMobileNavClick = (linkName: string, hasSubmenu = false) => {
    if (hasSubmenu) {
      setMobileNavHistory(prev => [...prev, linkName]);
      setOpenDropdown(linkName);
    }
  };

  const handleMobileNavBack = () => {
    if (mobileNavHistory.length > 0) {
      const newHistory = [...mobileNavHistory];
      newHistory.pop();
      setMobileNavHistory(newHistory);
      
      if (newHistory.length > 0) {
        setOpenDropdown(newHistory[newHistory.length - 1]);
      } else {
        setOpenDropdown(null);
      }
    } else {
      setOpenDropdown(null);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash without reload
      window.history.pushState(null, '', `#${sectionId}`);
      setActiveSection(sectionId);
    }
    setIsOpen(false);
    setOpenDropdown(null);
    setMobileNavHistory([]);
  };

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
                <img src="src/assets/DS logo ( Blue ) SVG.svg" alt="DuoTechno" className="h-10" />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <div key={index} className="relative">
                  {link.megaMenu ? (
                    <button
                      className={`flex items-center gap-2 px-6 py-3 text-sm font-normal transition-colors duration-300 ${
                        openDropdown === link.name 
                          ? 'text-blue-600 bg-blue-50 rounded-lg' 
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg'
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
                      to={link.href || '#'}
                      className={`flex items-center gap-2 px-6 py-3 text-sm font-normal transition-colors duration-300 rounded-lg ${
                        activeSection === link.name.toLowerCase()
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
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
              <button
                onClick={handleScrollToTop}
                className="p-2 text-gray-500 hover:text-blue-600 transition-colors duration-300"
                title="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
              <Link to="/login" className="px-6 py-2.5 text-sm font-normal text-gray-700 hover:text-blue-600 transition-colors duration-300 tracking-wide">
                Sign In
              </Link>
              <Link to="/contact" className="px-8 py-2.5 bg-blue-600 text-white text-sm font-normal rounded-lg hover:bg-blue-700 transition-all duration-300 tracking-wide shadow-sm hover:shadow-md">
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={handleScrollToTop}
                className="p-2 text-gray-500 hover:text-blue-600 transition-colors duration-300"
                title="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
              <button
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
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
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-normal text-gray-900">{openDropdown}</h2>
                  <button
                    onClick={() => setOpenDropdown(null)}
                    className="p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-16 max-w-6xl mx-auto">
                  {servicesData[openDropdown].map((category: ServiceCategory, idx: number) => (
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
                        {category.items.map((item: ServiceItem, itemIdx: number) => (
                          <Link
                            key={itemIdx}
                            to={item.href}
                            className="group w-full flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
                            onClick={() => setOpenDropdown(null)}
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
                    <Link 
                      to="/contact" 
                      className="px-8 py-3 bg-blue-600 text-white text-sm font-normal rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20"
                      onClick={() => setOpenDropdown(null)}
                    >
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
            ref={mobileMenuRef}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-white"
          >
            {/* Mobile Header */}
            <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              {mobileNavHistory.length > 0 ? (
                <button
                  onClick={handleMobileNavBack}
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="font-normal">Back</span>
                </button>
              ) : (
                <div className="flex items-center gap-3">
                  <img src="src/assets/DS logo ( Blue ) SVG.svg" alt="DuoTechno" className="h-8" />
                  <span className="text-lg font-normal text-gray-900">Menu</span>
                </div>
              )}
              
              <button
                onClick={() => {
                  setIsOpen(false);
                  setOpenDropdown(null);
                  setMobileNavHistory([]);
                }}
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="h-full overflow-y-auto pt-6 pb-6 px-6">
              {openDropdown && servicesData[openDropdown] ? (
                // Submenu View
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-8">
                    <h2 className="text-xl font-normal text-gray-900 mb-2">{openDropdown}</h2>
                    <p className="text-gray-600 text-sm">Explore our {openDropdown.toLowerCase()} offerings</p>
                  </div>

                  <div className="space-y-6">
                    {servicesData[openDropdown].map((category: ServiceCategory, catIdx: number) => (
                      <div key={catIdx}>
                        <div className="text-xs tracking-[0.15em] text-blue-600 font-normal uppercase mb-3">
                          {category.category}
                        </div>
                        <div className="space-y-2">
                          {category.items.map((item: ServiceItem, itemIdx: number) => (
                            <Link
                              key={itemIdx}
                              to={item.href}
                              onClick={() => {
                                setIsOpen(false);
                                setOpenDropdown(null);
                                setMobileNavHistory([]);
                              }}
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
              ) : (
                // Main Menu View
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="space-y-1">
                    {navLinks.map((link, index) => (
                      <div key={index}>
                        {link.megaMenu ? (
                          <button
                            onClick={() => handleMobileNavClick(link.name, true)}
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
                        ) : (
                          <Link
                            to={link.href || '#'}
                            onClick={() => {
                              setIsOpen(false);
                              setOpenDropdown(null);
                              setMobileNavHistory([]);
                            }}
                            className="w-full flex items-center gap-3 p-4 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300"
                          >
                            {link.icon}
                            <span className="font-normal">{link.name}</span>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Quick Actions Section */}
                  <div className="mt-12">
                    <h3 className="text-sm font-normal text-gray-500 uppercase tracking-wider mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {['features', 'pricing', 'testimonials', 'faq'].map((section) => (
                        <button
                          key={section}
                          onClick={() => handleScrollToSection(section)}
                          className={`p-3 text-center rounded-lg border transition-all duration-300 ${
                            activeSection === section
                              ? 'border-blue-600 bg-blue-50 text-blue-600'
                              : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50 text-gray-700'
                          }`}
                        >
                          <span className="text-sm font-normal capitalize">{section}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Mobile Actions */}
              <div className="mt-8 pt-8 border-t border-gray-100 space-y-3">
                <Link 
                  to="/login" 
                  onClick={() => {
                    setIsOpen(false);
                    setOpenDropdown(null);
                    setMobileNavHistory([]);
                  }} 
                  className="w-full text-center px-6 py-3 text-sm font-normal text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300"
                >
                  Sign In
                </Link>
                <Link 
                  to="/contact" 
                  onClick={() => {
                    setIsOpen(false);
                    setOpenDropdown(null);
                    setMobileNavHistory([]);
                  }} 
                  className="w-full text-center px-6 py-3 bg-blue-600 text-white text-sm font-normal rounded-lg hover:bg-blue-700 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile Footer Info */}
              <div className="mt-8 text-center">
                <p className="text-xs text-gray-500">
                  © {new Date().getFullYear()} DuoTechno. All rights reserved.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;