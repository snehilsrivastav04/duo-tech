import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, X, User, ChevronDown, ChevronUp, Sparkles, Zap,
  Smartphone, Megaphone, Briefcase, MessageSquare, Phone, Volume2, Hash, Lightbulb,
  Mail, Share2, Search, DollarSign, Palette,
  Code, Smartphone as Android, Layers, Link2,
  MessageCircle, Globe, Bolt, BarChart2, Rocket, Crown, Star,
  Home, Users, Box, Wrench, Award, BookOpen, HelpCircle, ShoppingBag
} from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useAuthStore } from '../../store/authStore';
import Container from '../ui/Container';
import ThemeToggle from '../ui/ThemeToggle';
import Button from '../ui/Button';
import logoSvgBlue from '../../assets/DS logo ( Blue ) SVG.svg';
import logoSvgWhite from '../../assets/DS logo ( White ) SVG.svg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuthStore();
  const megaMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
    setActivePanel(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    setActivePanel(dropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
        setActivePanel(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  // Enhanced services with categories
  const servicesData: Record<string, Array<{
    category: string;
    items: Array<{
      name: string;
      path: string;
      icon: React.ReactElement;
      description: string;
    }>;
  }>> = {
    'Services': [
      { 
        category: 'Messaging Services',
        items: [
          { name: 'Bulk SMS Services', path: '/services/bulk-sms', icon: <Smartphone size={18} />, description: 'Reach thousands with our reliable SMS platform' },
          { name: 'Promotional SMS', path: '/services/promotional-sms', icon: <Megaphone size={18} />, description: 'Promote your business with targeted messages' },
          { name: 'Transactional SMS', path: '/services/transactional-sms', icon: <Briefcase size={18} />, description: 'Send important updates and alerts' },
          { name: 'WhatsApp Bulk Services', path: '/services/whatsapp-bulk', icon: <MessageSquare size={18} />, description: 'Engage customers on WhatsApp at scale' },
        ]
      },
      {
        category: 'Voice Solutions',
        items: [
          { name: 'IVR Solutions', path: '/services/ivr', icon: <Phone size={18} />, description: 'Interactive voice response systems' },
          { name: 'Voice OBD Services', path: '/services/VoiceOBDPage', icon: <Volume2 size={18} />, description: 'Outbound dialing solutions' },
          { name: 'Virtual Numbers', path: '/services/virtual-numbers', icon: <Hash size={18} />, description: 'Get virtual numbers for your business' },
          { name: 'RCS Messaging', path: '/services/rcs', icon: <Lightbulb size={18} />, description: 'Rich Communication Services' },
        ]
      }
    ],
    'Digital Marketing': [
      {
        category: 'Online Marketing',
        items: [
          { name: 'Email Marketing', path: '/digital/email-marketing', icon: <Mail size={18} />, description: 'Create effective email campaigns' },
          { name: 'Social Media Marketing', path: '/digital/social-media', icon: <Share2 size={18} />, description: 'Boost your social media presence' },
          { name: 'SEO Services', path: '/digital/seo', icon: <Search size={18} />, description: 'Improve your search engine rankings' },
          { name: 'PPC Advertising', path: '/digital/ppc', icon: <DollarSign size={18} />, description: 'Pay-per-click advertising solutions' },
        ]
      },
      {
        category: 'Creative Services',
        items: [
          { name: 'Graphic Design', path: '/digital/graphic-design', icon: <Palette size={18} />, description: 'Professional design for your brand' },
          { name: 'Content Marketing', path: '/digital/content', icon: <BookOpen size={18} />, description: 'Create engaging content' },
          { name: 'Video Marketing', path: '/digital/video', icon: <Box size={18} />, description: 'Engage audiences with video' },
        ]
      }
    ],
    'Development': [
      {
        category: 'Web & Mobile',
        items: [
          { name: 'Web Development', path: '/development/web', icon: <Code size={18} />, description: 'Custom websites and web applications' },
          { name: 'Android App Development', path: '/development/android', icon: <Android size={18} />, description: 'Native Android applications' },
          { name: 'iOS App Development', path: '/development/ios', icon: <Smartphone size={18} />, description: 'Native iOS applications' },
        ]
      },
      {
        category: 'Design & Integration',
        items: [
          { name: 'UI/UX Design', path: '/development/ui-ux', icon: <Layers size={18} />, description: 'User-centered design solutions' },
          { name: 'API Integration', path: '/development/api', icon: <Link2 size={18} />, description: 'Connect your systems with APIs' },
          { name: 'E-commerce Solutions', path: '/development/ecommerce', icon: <ShoppingBag size={18} />, description: 'Online store development' },
        ]
      }
    ],
    'Products': [
      {
        category: 'Business Solutions',
        items: [
          { name: 'WhatsApp API Solutions', path: '/products/whatsapp-api', icon: <MessageCircle size={18} />, description: 'Integrate WhatsApp into your business' },
          { name: 'SMS Gateway', path: '/products/sms-gateway', icon: <Globe size={18} />, description: 'Reliable SMS gateway services' },
          { name: 'CRM Solutions', path: '/products/crm', icon: <BarChart2 size={18} />, description: 'Customer relationship management' },
        ]
      },
      {
        category: 'Development Tools',
        items: [
          { name: 'Source Codes', path: '/products/source-codes', icon: <Bolt size={18} />, description: 'Ready-to-use code solutions' },
          { name: 'API Libraries', path: '/products/api-libs', icon: <Wrench size={18} />, description: 'Developer tools and libraries' },
          { name: 'Plugins & Extensions', path: '/products/plugins', icon: <Box size={18} />, description: 'Enhance your applications' },
        ]
      }
    ]
  };

  const navLinks = [
    { 
      name: 'Home', 
      path: '/', 
      gradient: 'from-blue-400 to-purple-500', 
      icon: <Home size={16} />,
      megaMenu: false
    },
    { 
      name: 'Services', 
      path: '/services',
      gradient: 'from-green-400 to-blue-500',
      icon: <Rocket size={16} />,
      megaMenu: true
    },
    { 
      name: 'Digital Marketing', 
      path: '/digital-marketing',
      gradient: 'from-pink-400 to-red-500',
      icon: <Megaphone size={16} />,
      megaMenu: true
    },
    { 
      name: 'Development', 
      path: '/development',
      gradient: 'from-purple-400 to-pink-500',
      icon: <Code size={16} />,
      megaMenu: true
    },
    { 
      name: 'Products', 
      path: '/products',
      gradient: 'from-yellow-400 to-orange-500',
      icon: <Box size={16} />,
      megaMenu: true
    },
    { 
      name: 'About', 
      path: '/about', 
      gradient: 'from-indigo-400 to-purple-500', 
      icon: <Users size={16} />,
      megaMenu: false
    },
    { 
      name: 'Contact', 
      path: '/contact', 
      gradient: 'from-teal-400 to-blue-500', 
      icon: <Phone size={16} />,
      megaMenu: false
    },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getDashboardLink = () => {
    if (!isAuthenticated) return '/login';
    return user?.role === 'admin' ? '/admin' : '/client';
  };

  const navClasses = `fixed w-full top-0 z-50 transition-all duration-500 ${
    scrolled
      ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border-b border-gray-200/30 dark:border-gray-700/30 shadow-2xl'
      : 'bg-gradient-to-r from-blue-900/80 via-black/40 to-purple-900/80 backdrop-blur-xl'
  }`;

  // Enhanced animations
  const logoVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.3,
        rotate: {
          repeat: Infinity,
          duration: 2,
        }
      }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const megaMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        when: "afterChildren"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        staggerChildren: 0.05,
        when: "beforeChildren"
      }
    }
  };

  const megaMenuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  // Animated cursor effect for mega menu
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const rotateX = useTransform(cursorYSpring, [0, 600], [15, -15]);
  const rotateY = useTransform(cursorXSpring, [0, 800], [-15, 15]);

  const handleMegaMenuHover = (e: React.MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  return (
    <>
      {/* Enhanced animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-40">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          style={{
            left: "10%",
            top: "-10%",
          }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-pink-400/15 to-orange-600/15 blur-3xl"
          animate={{
            x: mousePosition.x * -0.015,
            y: mousePosition.y * 0.03,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 25 }}
          style={{
            right: "15%",
            top: "-5%",
          }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-teal-400/10 to-emerald-600/10 blur-3xl"
          animate={{
            x: mousePosition.x * 0.025,
            y: mousePosition.y * -0.02,
          }}
          transition={{ type: "spring", stiffness: 40, damping: 22 }}
          style={{
            left: "20%",
            bottom: "-15%",
          }}
        />
      </div>

      <motion.header 
        className={navClasses}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Container>
          <nav className="flex items-center justify-between py-3">
            {/* Enhanced Logo with glow effect */}
            <motion.div
              variants={logoVariants}
              whileHover="hover"
              className="relative"
            >
              <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-md opacity-40"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    whileHover={{
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <img
                      src={scrolled ? (document.documentElement.classList.contains('dark') ? logoSvgWhite : logoSvgBlue) : logoSvgWhite}
                      alt="DuoTechno Logo"
                      className="h-10 w-auto relative z-10 transition-all duration-300 drop-shadow-lg"
                    />
                  </motion.div>
                </div>
                <motion.div 
                  className="hidden md:block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className={`text-xl font-bold bg-gradient-to-r ${scrolled ? 'from-gray-800 to-gray-600 dark:from-white dark:to-gray-300' : 'from-white to-gray-200'} bg-clip-text text-transparent`}>
                    
                  </span>
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop Navigation with enhanced hover effects */}
            <div className="hidden lg:flex lg:items-center lg:space-x-1">
              {navLinks.map((link, index) => (
                <motion.div 
                  key={link.path} 
                  className="relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  onHoverStart={() => setHoveredItem(link.name)}
                  onHoverEnd={() => {
                    if (openDropdown !== link.name) {
                      setHoveredItem(null);
                    }
                  }}
                >
                  {link.megaMenu ? (
                    <>
                      <motion.button
                        variants={linkVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className={`group relative flex items-center px-4 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl overflow-hidden ${
                          scrolled
                            ? 'text-gray-700 dark:text-gray-300'
                            : 'text-gray-200'
                        } ${
                          location.pathname.startsWith(link.path) || openDropdown === link.name
                            ? 'text-white shadow-lg'
                            : ''
                        }`}
                        onClick={() => toggleDropdown(link.name)}
                        onMouseEnter={() => setHoveredItem(link.name)}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                        <span className="relative z-10 flex items-center">
                          <span className="mr-1.5">{link.icon}</span>
                          {link.name}
                          <motion.div
                            animate={{ rotate: openDropdown === link.name ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-1"
                          >
                            <ChevronDown className="h-4 w-4" />
                          </motion.div>
                        </span>
                        
                        {/* Animated underline */}
                        <motion.div 
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white to-transparent"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.button>
                    </>
                  ) : (
                    <motion.div
                      variants={linkVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Link
                        to={link.path}
                        className={`group relative flex items-center px-4 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl overflow-hidden ${
                          scrolled
                            ? 'text-gray-700 dark:text-gray-300'
                            : 'text-gray-200'
                        } ${
                          location.pathname === link.path
                            ? 'text-white shadow-lg'
                            : ''
                        }`}
                        onMouseEnter={() => setHoveredItem(link.name)}
                        onMouseLeave={() => {
                          if (openDropdown !== link.name) {
                            setHoveredItem(null);
                          }
                        }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                        <span className="relative z-10 flex items-center">
                          <span className="mr-1.5">{link.icon}</span>
                          {link.name}
                        </span>
                        
                        {/* Animated underline */}
                        <motion.div 
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white to-transparent"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {openDropdown && servicesData[openDropdown] && (
                <motion.div
                  ref={megaMenuRef}
                  className="absolute left-0 right-0 top-full mt-2 w-full origin-top"
                  variants={megaMenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  onMouseMove={handleMegaMenuHover}
                  onMouseLeave={() => setOpenDropdown(null)}
                  style={{
                    perspective: "1000px"
                  }}
                >
                  <motion.div 
                    className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-2xl mx-auto max-w-6xl overflow-hidden"
                    style={{
                      rotateX,
                      rotateY,
                      transformStyle: "preserve-3d"
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                    <div className="relative p-8 grid grid-cols-2 gap-8">
                      {servicesData[openDropdown].map((category, categoryIndex) => (
                        <motion.div 
                          key={categoryIndex}
                          variants={megaMenuItemVariants}
                          className="group"
                        >
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                            <span className="bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-md mr-2">
                              <Award size={16} className="text-white" />
                            </span>
                            {category.category}
                          </h3>
                          <div className="space-y-3">
                            {category.items.map((item, itemIndex) => (
                              <motion.div
                                key={item.path}
                                whileHover={{ x: 5 }}
                                transition={{ delay: itemIndex * 0.05 }}
                                className="flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                              >
                                <div className="flex-shrink-0 mt-1 bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-md text-white">
                                  {item.icon}
                                </div>
                                <div className="ml-4">
                                  <Link
                                    to={item.path}
                                    className="block text-sm font-medium text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                    onClick={closeMenu}
                                  >
                                    {item.name}
                                  </Link>
                                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                    {item.description}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                      
                      {/* CTA Section */}
                      <motion.div 
                        variants={megaMenuItemVariants}
                        className="col-span-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-6 rounded-xl border border-white/20 mt-4"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                              Need help choosing the right solution?
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                              Our experts are ready to help you find the perfect solution for your business.
                            </p>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button 
                              variant="accent" 
                              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                              onClick={() => {
                                navigate('/contact');
                                closeMenu();
                              }}
                            >
                              Contact Sales
                            </Button>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Right side controls with enhanced styling */}
            <div className="hidden lg:flex items-center space-x-3">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ThemeToggle />
              </motion.div>
              
              {isAuthenticated ? (
                <motion.div 
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <Link to={getDashboardLink()}>
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -2 }} 
                      whileTap={{ scale: 0.95 }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-0 hover:opacity-30 transition-opacity duration-300" />
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 relative z-10"
                        icon={<User size={16} />}
                      >
                        Dashboard
                      </Button>
                    </motion.div>
                  </Link>
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -2 }} 
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg blur opacity-0 hover:opacity-30 transition-opacity duration-300" />
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={handleLogout}
                      className="hover:bg-red-500/20 hover:text-red-400 transition-all duration-300 relative z-10"
                    >
                      Logout
                    </Button>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-0 hover:opacity-30 transition-opacity duration-300" />
                  <Link to="/login">
                    <Button 
                      variant="accent" 
                      size="sm"
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform transition-all duration-300 relative z-10"
                      icon={<Sparkles size={16} />}
                    >
                      Sign In
                    </Button>
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Mobile Navigation Toggle with enhanced animation */}
            <div className="flex items-center space-x-3 lg:hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ThemeToggle />
              </motion.div>
              <motion.button
                className={`relative p-2 transition-all duration-300 rounded-lg ${
                  scrolled
                    ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    : 'text-gray-200 hover:bg-white/10'
                }`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </nav>
        </Container>

        {/* Enhanced Mobile Navigation Menu with glass morphism */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <Container>
                <motion.div 
                  className="py-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-b-2xl border-t border-white/10 shadow-2xl"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-2 max-h-[70vh] overflow-y-auto">
                    {navLinks.map((link, index) => (
                      <motion.div 
                        key={link.path}
                        variants={mobileItemVariants}
                        className="relative"
                      >
                        {link.megaMenu ? (
                          <>
                            <motion.button
                              onClick={() => toggleDropdown(link.name)}
                              className={`flex justify-between items-center w-full py-3 px-4 text-base font-semibold rounded-xl transition-all duration-300 relative overflow-hidden ${
                                location.pathname.startsWith(link.path) || openDropdown === link.name
                                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                              }`}
                              whileHover={{ scale: 1.02, x: 5 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 hover:opacity-100 transition-opacity duration-300`} />
                              <span className="relative z-10 flex items-center">
                                <span className="mr-2">{link.icon}</span>
                                {link.name}
                              </span>
                              <motion.div
                                animate={{ rotate: openDropdown === link.name ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="relative z-10"
                              >
                                <ChevronDown className="h-5 w-5" />
                              </motion.div>
                            </motion.button>
                            <AnimatePresence>
                              {openDropdown === link.name && servicesData[link.name] && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="pl-6 overflow-hidden"
                                >
                                  {servicesData[link.name].map((category, categoryIndex) => (
                                    <div key={categoryIndex} className="my-3">
                                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-md mr-2">
                                          <Award size={14} className="text-white" />
                                        </span>
                                        {category.category}
                                      </h4>
                                      <div className="space-y-2">
                                        {category.items.map((item, itemIndex) => (
                                          <motion.div
                                            key={item.path}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: itemIndex * 0.05 }}
                                            whileHover={{ x: 5 }}
                                          >
                                            <Link
                                              to={item.path}
                                              className={`flex items-center py-2.5 px-4 text-sm rounded-lg transition-all duration-200 my-1 ${
                                                location.pathname === item.path
                                                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                                                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                                              }`}
                                              onClick={closeMenu}
                                            >
                                              <span className="text-gray-500 dark:text-gray-400 mr-3">{item.icon}</span>
                                              <div>
                                                <div className="font-medium">{item.name}</div>
                                                <div className="text-xs opacity-70">{item.description}</div>
                                              </div>
                                            </Link>
                                          </motion.div>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <motion.div
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Link
                              to={link.path}
                              className={`flex items-center py-3 px-4 text-base font-semibold rounded-xl transition-all duration-300 relative overflow-hidden ${
                                location.pathname === link.path
                                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                              }`}
                              onClick={closeMenu}
                            >
                              <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 hover:opacity-100 transition-opacity duration-300`} />
                              <span className="relative z-10 flex items-center">
                                <span className="mr-2">{link.icon}</span>
                                {link.name}
                              </span>
                            </Link>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                    
                    <motion.div 
                      className="pt-4 px-4 space-y-3"
                      variants={mobileItemVariants}
                    >
                      {isAuthenticated ? (
                        <>
                          <Link to={getDashboardLink()}>
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="relative"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-0 hover:opacity-30 transition-opacity duration-300" />
                              <Button 
                                variant="accent" 
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform transition-all duration-300 relative z-10"
                                icon={<User size={16} />}
                                onClick={closeMenu}
                              >
                                Dashboard
                              </Button>
                            </motion.div>
                          </Link>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg blur opacity-0 hover:opacity-30 transition-opacity duration-300" />
                            <Button 
                              variant="outline" 
                              className="w-full hover:bg-red-500/20 hover:text-red-400 transition-all duration-300 relative z-10"
                              onClick={() => {
                                handleLogout();
                                closeMenu();
                              }}
                            >
                              Logout
                            </Button>
                          </motion.div>
                        </>
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-0 hover:opacity-30 transition-opacity duration-300" />
                          <Link to="/login">
                            <Button 
                              variant="accent" 
                              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform transition-all duration-300 relative z-10"
                              icon={<Sparkles size={16} />}
                              onClick={closeMenu}
                            >
                              Sign In
                            </Button>
                          </Link>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navbar;