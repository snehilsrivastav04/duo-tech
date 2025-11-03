import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, ArrowRight, X } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="bg-gray-50 dark:bg-dark-800 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary-600 dark:text-primary-400">DuoTech Solutions</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your all-in-one partner for digital communication & technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="www.facebook.com/theduotechsolutions" aria-label="Facebook" className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                <Facebook size={20} />
              </a>
              <a href="www.x.com/duotechsolution" aria-label="Twitter" className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                <X size={20} />
              </a>
              <a href="https://www.linkedin.com/company/duotech-solutions/" aria-label="LinkedIn" className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                <Linkedin size={20} />
              </a>
              <a href="www.instagram.com/theduotechsolutions" aria-label="Instagram" className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Main Navigation */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/client" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/client-side" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
                  Client Side
                </Link>
              </li>
              <li>
                <Link to="/sms-pricing" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
                  SMS Pricing
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Dropdown */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {servicesDropdown.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Digital Marketing Dropdown */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Digital Marketing</h3>
            <ul className="space-y-2">
              {digitalServices.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Development & Products Dropdown */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Development</h3>
            <ul className="space-y-2 mb-4">
              {developmentServices.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Products</h3>
            <ul className="space-y-2">
              {products.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Stay Updated</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 dark:border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-700 dark:text-white"
              required
            />
            <Button
              type="submit"
              variant="primary"
              className="rounded-l-none"
              aria-label="Subscribe"
            >
              <ArrowRight size={18} />
            </Button>
          </form>
        </div>
      </Container>

      <div className="border-t border-gray-200 dark:border-dark-600 mt-12 pt-8 text-center text-gray-500 dark:text-gray-400">
        <p>&copy; {currentYear} DuoTech Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;