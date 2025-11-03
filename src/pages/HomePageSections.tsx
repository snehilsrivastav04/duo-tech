import { useState, FC, memo, KeyboardEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Check,
} from 'lucide-react';

// Prop-type interfaces
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

interface Stat {
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

interface UseCase {
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
}

interface Service {
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
}


// Testimonial Carousel Component
export const TestimonialCarousel: FC<{ testimonials: Testimonial[] }> = memo(({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleKeyDown = (e: KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="bg-white/90 dark:bg-blue-900/90 backdrop-blur-lg p-8 rounded-2xl border border-white/20 dark:border-blue-700 shadow-xl"
        role="region"
        aria-live="polite"
      >
        <div className="flex mb-4">
          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-xl text-black dark:text-blue-100 mb-6">"{testimonials[currentIndex].quote}"</p>
        <div className="text-gray-800 dark:text-blue-200">
          <p className="font-bold">{testimonials[currentIndex].author}</p>
          <p className="text-sm">{testimonials[currentIndex].role}</p>
        </div>
      </motion.div>

      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <div className="flex items-center space-x-2" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className={`w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white ${
                i === currentIndex ? 'bg-white w-4' : 'bg-white/40'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-selected={i === currentIndex}
              role="tab"
            />
          ))}
        </div>
        <button
          onClick={nextTestimonial}
          aria-label="Next testimonial"
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
});

// Stats Grid Component
export const StatsGrid: FC<{ stats: Stat[]; className?: string }> = memo(({ stats, className }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${className ?? ''}`}>
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-white/90 dark:bg-blue-900/90 p-6 rounded-xl border border-white/20 dark:border-blue-700 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center mb-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg mr-3">
              {stat.icon}
            </div>
            <motion.p
              className="text-4xl font-bold text-gray-900 dark:text-white"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
            >
              {stat.value}
            </motion.p>
          </div>
          <p className="text-lg font-medium text-gray-900 dark:text-white mb-1">{stat.label}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">{stat.description}</p>
        </motion.div>
      ))}
    </div>
  );
});

// Newsletter Form Component
export const NewsletterForm: FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Simulate API call (replace with real backend integration)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setEmail('');
      setError('');
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full px-5 py-3 rounded-full bg-white/10 border border-white/30 placeholder-blue-200 text-white focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Email address"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-blue-600 rounded-full p-2 hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Subscribe"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-blue-100 text-sm"
        >
          Thanks for subscribing! We'll be in touch soon.
        </motion.div>
      )}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-red-400 text-sm"
        >
          {error}
        </motion.div>
      )}
      <p className="text-xs text-blue-200/70 text-center">
        We care about your data. Read our{' '}
        <a href="#" className="underline hover:text-white" aria-label="Privacy Policy">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
};

// Use Case Card Component
export const UseCaseCard: FC<{ useCase: UseCase }> = ({ useCase }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-blue-900/50 rounded-xl p-6 border border-gray-200 dark:border-blue-800 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-lg mr-4">
          {useCase.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{useCase.title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{useCase.description}</p>
      <ul className="space-y-2">
        {useCase.features.map((feature: string, i: number) => (
          <li key={i} className="flex items-start">
            <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

// Service Card Component
export const ServiceCard: FC<{ service: Service }> = ({ service }) => {
  // Create route mapping for services
  const getServiceRoute = (title: string) => {
    const routeMap: { [key: string]: string } = {
      'IVR Service': '/services/ivr',
      'SMS Services': '/services/bulk-sms',
      'Virtual Numbers': '/services/virtual-number',
      'Toll Free Numbers': '/services/toll-free-number',
      'Email Marketing': '/digital/email-marketing',
      'WhatsApp Marketing': '/services/whatsapp-bulk',
      'Digital Marketing': '/digital/seo', // Default to SEO, could be made more specific
      'Website Development': '/development/web',
      'Android App Development': '/development/android',
      'UI/UX Design Services': '/development/ui-ux',
      'Graphic Designing Services': '/digital/graphic-design',
      'Products': '/products'
    };
    return routeMap[title] || '/services';
  };

  const serviceRoute = getServiceRoute(service.title);

  return (
    <Link to={serviceRoute} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-blue-900/50 rounded-xl p-6 border border-gray-200 dark:border-blue-800 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group relative overflow-hidden"
      >
        {/* Hover overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {service.title}
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
            {service.description}
          </p>
          {service.features.length > 0 && (
            <ul className="space-y-2">
              {service.features.slice(0, 4).map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          )}
          
          {/* View More Button */}
          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-300">
              Learn More
            </span>
            <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
