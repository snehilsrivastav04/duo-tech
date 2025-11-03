import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, X, User, ChevronDown, Home, Users, Phone,
  Rocket, Megaphone, Code, Box, Award, Smartphone,
  Briefcase, MessageSquare, Mail, Search
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import Container from '../ui/Container';
import ThemeToggle from '../ui/ThemeToggle';
import Button from '../ui/Button';

const logoSvgBlue = "https://duotechsolutions.in/DS%20logo%20(%20Blue%20)%20SVG-D-GAioW7.svg";
const logoSvgWhite = "https://duotechsolutions.in/DS%20logo%20(%20White%20)%20SVG-CENA7_kp.svg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuthStore();
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (e: MouseEvent) => {
      // Only handle click outside for desktop mega menu
      if (window.innerWidth >= 1024 && megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
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

  useEffect(() => {
    closeMenu();
  }, [location]);

  // Add touch event handler for mobile
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      // Only close if we're on mobile and touching outside the navbar and mobile menu
      const target = e.target as Node;
      const navbar = document.querySelector('header');
      
      if (
        navbar && 
        !navbar.contains(target) && 
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        (isOpen || openDropdown) &&
        window.innerWidth < 1024 // Only on mobile/tablet
      ) {
        closeMenu();
      }
    };

    // Handle scroll events for auto-closing (less aggressive)
    const handleScrollClose = () => {
      // Only close on significant scroll and only on mobile
      if ((isOpen || openDropdown) && window.innerWidth < 1024) {
        const scrollY = window.scrollY;
        if (scrollY > 100) { // Only close after scrolling down significantly
          closeMenu();
        }
      }
    };

    // Add event listeners
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('scroll', handleScrollClose, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('scroll', handleScrollClose);
    };
  }, [isOpen, openDropdown]);

  // Services data
  type ServicesDataKey = 'Services' | 'Digital Marketing' | 'Development' | 'Products';
  
  const servicesData = {
    'Services': [
      { 
        category: 'Messaging Services',
        items: [
          { name: 'Bulk SMS Services', path: '/services/bulk-sms', icon: <Smartphone size={16} /> },
          { name: 'Promotional SMS', path: '/services/promotional-sms', icon: <Megaphone size={16} /> },
          { name: 'Transactional SMS', path: '/services/transactional-sms', icon: <Briefcase size={16} /> },
          { name: 'WhatsApp Bulk Services', path: '/services/whatsapp-bulk', icon: <MessageSquare size={16} /> },
        ]
      },
      {
        category: 'Voice Solutions',
        items: [
          { name: 'IVR Solutions', path: '/services/ivr', icon: <Phone size={16} /> },
          { name: 'Voice OBD Services', path: '/services/VoiceOBDPage', icon: <Phone size={16} /> },
          { name: 'Virtual Numbers', path: '/services/virtual-number', icon: <Smartphone size={16} /> },
          { name: 'Toll Free Numbers', path: '/services/toll-free-number', icon: <Phone size={16} /> },
          { name: 'Hosted Call Center', path: '/services/hosted-call-center', icon: <Phone size={16} /> },
        ]
      }
    ],
    'Digital Marketing': [
      {
        category: 'Online Marketing',
        items: [
          { name: 'Email Marketing', path: '/digital/email-marketing', icon: <Mail size={16} /> },
          { name: 'Social Media Marketing', path: '/digital/social-media', icon: <Megaphone size={16} /> },
          { name: 'SEO Services', path: '/digital/seo', icon: <Search size={16} /> },
        ]
      }
    ],
    'Development': [
      {
        category: 'Web & Mobile',
        items: [
          { name: 'Web Development', path: '/development/web', icon: <Code size={16} /> },
          { name: 'Android App Development', path: '/development/android', icon: <Smartphone size={16} /> },
          { name: 'iOS App Development', path: '/development/ios', icon: <Smartphone size={16} /> },
        ]
      }
    ],
    'Products': [
      {
        category: 'Business Solutions',
        items: [
          { name: 'WhatsApp API Solutions', path: '/products/whatsapp-api', icon: <MessageSquare size={16} /> },
          { name: 'SMS Gateway', path: '/products/sms-gateway', icon: <Smartphone size={16} /> },
          { name: 'CRM Solutions', path: '/products/crm', icon: <Briefcase size={16} /> },
          { name: 'Source Codes', path: '/products/source-codes', icon: <Code size={16} /> },
        ]
      }
    ]
  };

  const navLinks = [
    { 
      name: 'Home', 
      path: '/', 
      icon: <Home size={16} />,
      megaMenu: false
    },
    { 
      name: 'Services', 
      path: '/services',
      icon: <Rocket size={16} />,
      megaMenu: true
    },
    { 
      name: 'Digital Marketing', 
      path: '/digital-marketing',
      icon: <Megaphone size={16} />,
      megaMenu: true
    },
    { 
      name: 'Development', 
      path: '/development',
      icon: <Code size={16} />,
      megaMenu: true
    },
    { 
      name: 'Products', 
      path: '/products',
      icon: <Box size={16} />,
      megaMenu: true
    },
    { 
      name: 'About', 
      path: '/about', 
      icon: <Users size={16} />,
      megaMenu: false
    },
    { 
      name: 'Contact', 
      path: '/contact', 
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

  // Update the navClasses to include transition
  const navClasses = `fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${
    scrolled
      ? 'bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-md translate-y-0'
      : 'bg-blue-900 dark:bg-gray-900'
  }`;

  // Update mobile menu classes to include animation
  const mobileMenuClasses = `lg:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 
    transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 block' : 'opacity-0 -translate-y-2 hidden'}`;

  // Update mega menu classes to include animation
  const megaMenuClasses = `absolute left-0 right-0 top-full mt-1 w-full bg-white dark:bg-gray-800 
    border border-gray-200 dark:border-gray-700 shadow-lg rounded-b-md
    transition-all duration-200 ease-in-out
    ${openDropdown ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`;

  return (
    <header className={navClasses}>
      <Container>
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={scrolled ? (document.documentElement.classList.contains('dark') ? logoSvgWhite : logoSvgBlue) : logoSvgWhite}
                alt="DuoTechno Logo"
                className="h-10 w-auto"
              />
              <span className={`text-xl font-bold ${scrolled ? 'text-gray-800 dark:text-white' : 'text-white'}`}>
                
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                {link.megaMenu ? (
                  <>
                    <button
                      className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        scrolled
                          ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                          : 'text-white hover:text-blue-200'
                      } ${
                        location.pathname.startsWith(link.path) || openDropdown === link.name
                          ? 'text-blue-600 dark:text-blue-400'
                          : ''
                      }`}
                      onClick={() => toggleDropdown(link.name)}
                    >
                      <span className="mr-1">{link.icon}</span>
                      {link.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      scrolled
                        ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                        : 'text-white hover:text-blue-200'
                    } ${
                      location.pathname === link.path
                        ? 'text-blue-600 dark:text-blue-400'
                        : ''
                    }`}
                  >
                    <span className="mr-1">{link.icon}</span>
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mega Menu Dropdown */}
          {openDropdown && servicesData[openDropdown as ServicesDataKey] && (
            <div
              ref={megaMenuRef}
              className={megaMenuClasses}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div className="p-6 grid grid-cols-2 gap-8 max-w-6xl mx-auto">
                {servicesData[openDropdown as ServicesDataKey].map((category, categoryIndex) => (
                  <div key={categoryIndex} className="group">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                      <span className="bg-blue-500 p-1 rounded-md mr-2">
                        <Award size={14} className="text-white" />
                      </span>
                      {category.category}
                    </h3>
                    <div className="space-y-3">
                      {category.items.map((item) => (
                        <div
                          key={item.path}
                          className="flex items-start p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                          <div className="flex-shrink-0 mt-1 bg-blue-100 dark:bg-blue-900 p-2 rounded-md text-blue-600 dark:text-blue-400">
                            {item.icon}
                          </div>
                          <div className="ml-3">
                            <Link
                              to={item.path}
                              className="block text-sm font-medium text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                              onClick={closeMenu}
                            >
                              {item.name}
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                
                {/* CTA Section */}
                <div className="col-span-2 bg-gray-50 dark:bg-gray-700 p-4 rounded-md border border-gray-200 dark:border-gray-600 mt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        Need help choosing?
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        Our experts are ready to help you.
                      </p>
                    </div>
                    <Button 
                      variant="primary" 
                      onClick={() => {
                        navigate('/contact');
                        closeMenu();
                      }}
                    >
                      Contact Sales
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Right side controls */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <Link to={getDashboardLink()}>
                  <Button 
                    variant="outline" 
                    size="sm"
                    icon={<User size={16} />}
                  >
                    Dashboard
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button 
                  variant="primary" 
                  size="sm"
                  icon={<User size={16} />}
                >
                  Sign In
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-3 lg:hidden">
            <ThemeToggle />
            <button
              className={`p-2 rounded-md ${
                scrolled
                  ? 'text-gray-700 dark:text-gray-300'
                  : 'text-white'
              }`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Navigation Menu */}
      <div ref={mobileMenuRef} className={mobileMenuClasses}>
        {isOpen && (
          <Container>
            <div className="py-4">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <div key={link.path} className="relative">
                    {link.megaMenu ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(link.name)}
                          className={`flex justify-between items-center w-full py-3 px-4 text-base font-medium rounded-md ${
                            openDropdown === link.name
                              ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                          }`}
                        >
                          <span className="flex items-center">
                            <span className="mr-2">{link.icon}</span>
                            {link.name}
                          </span>
                          <ChevronDown className={`h-5 w-5 transition-transform ${
                            openDropdown === link.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        {openDropdown === link.name && servicesData[link.name as ServicesDataKey] && (
                          <div className="pl-6 mt-1">
                            {servicesData[link.name as ServicesDataKey].map((category, categoryIndex) => (
                              <div key={categoryIndex} className="my-3">
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                  {category.category}
                                </h4>
                                <div className="space-y-2">
                                  {category.items.map((item) => (
                                    <Link
                                      key={item.path}
                                      to={item.path}
                                      className="flex items-center py-2 px-4 text-sm rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                                      onClick={closeMenu}
                                    >
                                      <span className="mr-3">{item.icon}</span>
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className={`flex items-center py-3 px-4 text-base font-medium rounded-md ${
                          location.pathname === link.path
                            ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                        onClick={closeMenu}
                      >
                        <span className="mr-2">{link.icon}</span>
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 px-4 space-y-3 border-t border-gray-200 dark:border-gray-700 mt-4">
                  {isAuthenticated ? (
                    <>
                      <Link to={getDashboardLink()}>
                        <Button 
                          variant="primary" 
                          className="w-full"
                          icon={<User size={16} />}
                          onClick={closeMenu}
                        >
                          Dashboard
                        </Button>
                      </Link>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => {
                          handleLogout();
                          closeMenu();
                        }}
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <Link to="/login">
                      <Button 
                        variant="primary" 
                        className="w-full"
                        icon={<User size={16} />}
                        onClick={closeMenu}
                      >
                        Sign In
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Container>
        )}
      </div>
    </header>
  );
};

export default Navbar;
