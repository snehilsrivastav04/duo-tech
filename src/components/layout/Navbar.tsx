import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronRight, Home, Users, Phone,
  Rocket, Megaphone, Code, Box, Smartphone,
  Briefcase, MessageSquare, Mail, Search, ArrowUpRight
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const servicesData = {
    'Services': [
      { 
        category: 'Messaging',
        items: [
          { name: 'Bulk SMS', href: '/services/bulk-sms', icon: <Smartphone className="w-4 h-4" /> },
          { name: 'Promotional SMS', href: '/services/promotional-sms', icon: <Megaphone className="w-4 h-4" /> },
          { name: 'Transactional SMS', href: '/services/transactional-sms', icon: <Briefcase className="w-4 h-4" /> },
          { name: 'WhatsApp Bulk', href: '/services/whatsapp-bulk', icon: <MessageSquare className="w-4 h-4" /> },
        ]
      },
      {
        category: 'Voice',
        items: [
          { name: 'IVR Solutions', href: '/services/ivr', icon: <Phone className="w-4 h-4" /> },
          { name: 'Voice OBD', href: '/services/voice-obd', icon: <Phone className="w-4 h-4" /> },
          { name: 'Virtual Numbers', href: '/services/virtual-number', icon: <Smartphone className="w-4 h-4" /> },
          { name: 'Toll Free', href: '/services/toll-free', icon: <Phone className="w-4 h-4" /> },
        ]
      }
    ],
    'Development': [
      {
        category: 'Web & Mobile',
        items: [
          { name: 'Web Development', href: '/dev/web', icon: <Code className="w-4 h-4" /> },
          { name: 'Android Apps', href: '/dev/android', icon: <Smartphone className="w-4 h-4" /> },
          { name: 'iOS Apps', href: '/dev/ios', icon: <Smartphone className="w-4 h-4" /> },
        ]
      }
    ],
    'Products': [
      {
        category: 'Solutions',
        items: [
          { name: 'WhatsApp API', href: '/products/whatsapp-api', icon: <MessageSquare className="w-4 h-4" /> },
          { name: 'SMS Gateway', href: '/products/sms-gateway', icon: <Smartphone className="w-4 h-4" /> },
          { name: 'CRM Solutions', href: '/products/crm', icon: <Briefcase className="w-4 h-4" /> },
        ]
      }
    ]
  };

  const navLinks = [
    { name: 'Home', href: '/', hasMenu: false },
    { name: 'Services', hasMenu: true },
    { name: 'Digital Marketing', href: '/digital-marketing', hasMenu: false },
    { name: 'Development', hasMenu: true },
    { name: 'Products', hasMenu: true },
    { name: 'About', href: '/about', hasMenu: false },
    { name: 'Contact', href: '/contact', hasMenu: false },
  ];

  return (
    <>
      {/* Main Navbar */}
      <motion.header 
        className={`fixed w-full top-0 z-50 transition-all duration-700 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-sm' 
            : 'bg-white'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
            <nav className="flex items-center justify-between h-24">
              {/* Logo */}
              <a href="/" className="relative z-10">
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <div className="w-11 h-11 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20">
                      <span className="text-white font-light text-2xl tracking-tight">D</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                  </div>
                  <div>
                    <span className="text-2xl font-extralight text-gray-900 tracking-tight block leading-none">
                      DuoTechno
                    </span>
                    <span className="text-[10px] text-gray-400 tracking-widest uppercase">
                      Innovation
                    </span>
                  </div>
                </motion.div>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-2">
                {navLinks.map((link, index) => (
                  <div 
                    key={index} 
                    className="relative"
                    onMouseEnter={() => link.hasMenu && handleMouseEnter(link.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {link.hasMenu ? (
                      <button
                        className={`group relative px-5 py-2.5 text-[13px] font-light tracking-wide transition-colors duration-300 ${
                          activeMenu === link.name ? 'text-blue-900' : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {link.name}
                        <motion.div
                          className="absolute bottom-0 left-1/2 w-0 h-px bg-blue-900"
                          animate={{
                            width: activeMenu === link.name ? '60%' : '0%',
                            x: '-50%'
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="group relative px-5 py-2.5 text-[13px] font-light text-gray-600 hover:text-gray-900 tracking-wide transition-colors duration-300"
                      >
                        {link.name}
                        <motion.div
                          className="absolute bottom-0 left-1/2 w-0 h-px bg-blue-900 -translate-x-1/2 group-hover:w-[60%] transition-all duration-300"
                        />
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Actions */}
              <div className="hidden lg:flex items-center gap-4">
                <button 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2.5 text-gray-500 hover:text-blue-900 transition-colors duration-300"
                >
                  <Search className="w-5 h-5" />
                </button>
                
                <div className="w-px h-6 bg-gray-200" />
                
                <a 
                  href="/login" 
                  className="text-[13px] font-light text-gray-600 hover:text-blue-900 tracking-wide transition-colors duration-300"
                >
                  Sign In
                </a>
                
                <a 
                  href="/contact"
                  className="group relative px-6 py-2.5 bg-blue-900 text-white text-[13px] font-light tracking-wide rounded-full overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-blue-800"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-700"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </nav>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-b border-gray-100 bg-white"
            >
              <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-6">
                <div className="relative max-w-2xl">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services, products..."
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-light focus:outline-none focus:border-blue-900 focus:bg-white transition-all duration-300"
                    autoFocus
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mega Menu */}
        <AnimatePresence>
          {activeMenu && servicesData[activeMenu] && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 right-0 top-full bg-white border-b border-gray-100 shadow-xl"
              onMouseEnter={() => handleMouseEnter(activeMenu)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-12">
                <div className="grid grid-cols-3 gap-12">
                  {/* Services Grid */}
                  {servicesData[activeMenu].map((category, idx) => (
                    <div key={idx}>
                      <div className="mb-6">
                        <h3 className="text-[10px] tracking-[0.2em] text-blue-900 font-light uppercase mb-1">
                          {category.category}
                        </h3>
                        <div className="w-12 h-px bg-blue-900/20" />
                      </div>

                      <div className="space-y-1">
                        {category.items.map((item, itemIdx) => (
                          <a
                            key={itemIdx}
                            href={item.href}
                            className="group flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300"
                          >
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300">
                              {item.icon}
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-light text-gray-900 group-hover:text-blue-900 transition-colors duration-300 flex items-center gap-2">
                                {item.name}
                                <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Featured CTA */}
                  <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-900 mb-6 shadow-sm">
                        <Phone className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-light text-gray-900 mb-2">
                        Need Guidance?
                      </h3>
                      <p className="text-sm text-gray-600 font-light leading-relaxed mb-6">
                        Our specialists are here to help you choose the perfect solution for your business.
                      </p>
                    </div>
                    <a 
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-light text-blue-900 hover:gap-3 transition-all duration-300"
                    >
                      Talk to an Expert
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl"
            >
              <div className="h-full overflow-y-auto">
                {/* Mobile Header */}
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                  <span className="text-lg font-light text-gray-900">Menu</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Nav */}
                <div className="p-6 space-y-2">
                  {navLinks.map((link, index) => (
                    <div key={index}>
                      {link.hasMenu ? (
                        <div>
                          <button
                            onClick={() => setActiveMenu(activeMenu === link.name ? null : link.name)}
                            className={`w-full flex items-center justify-between p-4 rounded-xl text-left transition-all duration-300 ${
                              activeMenu === link.name
                                ? 'bg-blue-50 text-blue-900'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            <span className="font-light">{link.name}</span>
                            <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                              activeMenu === link.name ? 'rotate-90' : ''
                            }`} />
                          </button>

                          <AnimatePresence>
                            {activeMenu === link.name && servicesData[link.name] && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 pr-2 py-3 space-y-4">
                                  {servicesData[link.name].map((category, catIdx) => (
                                    <div key={catIdx}>
                                      <div className="text-[10px] tracking-[0.2em] text-blue-900 font-light uppercase mb-2 pl-4">
                                        {category.category}
                                      </div>
                                      <div className="space-y-1">
                                        {category.items.map((item, itemIdx) => (
                                          <a
                                            key={itemIdx}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                                          >
                                            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                                              {item.icon}
                                            </div>
                                            <span className="text-sm font-light">{item.name}</span>
                                          </a>
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
                        <a
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center p-4 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-300"
                        >
                          <span className="font-light">{link.name}</span>
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Actions */}
                <div className="p-6 border-t border-gray-100 space-y-3">
                  <a 
                    href="/login" 
                    onClick={() => setIsOpen(false)}
                    className="block text-center px-6 py-3.5 text-sm font-light text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
                  >
                    Sign In
                  </a>
                  <a 
                    href="/contact" 
                    onClick={() => setIsOpen(false)}
                    className="block text-center px-6 py-3.5 bg-blue-900 text-white text-sm font-light rounded-xl hover:bg-blue-800 transition-all"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-24" />
    </>
  );
};

export default Navbar;