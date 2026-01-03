import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Duo Tech */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Duo Tech</h3>
            <p className="font-light text-gray-400 leading-relaxed">
              Your all-in-one partner for communication, marketing, and development solutions designed to accelerate business growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-normal mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3 font-light">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-normal mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4 font-light">
              <li className="flex items-start gap-3">
                <Smartphone size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+91 12345 67890 (WhatsApp Available)</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                <a href="mailto:support@duotech.com" className="text-gray-400 hover:text-white transition-colors">support@duotech.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Tech Park, Innovation Hub, Bangalore, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/Lead Capture */}
          <div>
            <h4 className="text-lg font-normal mb-6 tracking-wide">Stay Updated</h4>
            <p className="font-light text-gray-400 mb-4">Get the latest insights on business growth directly in your inbox.</p>
            <form className="flex items-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full py-3 px-4 bg-gray-800 border-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
              <button type="submit" className="bg-blue-800 hover:bg-blue-700 py-3 px-4 rounded-r-md transition-colors">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm font-light text-gray-500">
            &copy; {new Date().getFullYear()} Duo Tech. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <Link to="/privacy-policy" className="text-sm font-light text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-sm font-light text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
