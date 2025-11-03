import React, { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, Smartphone, Phone, Code, Globe, 
  LayoutTemplate, ShoppingCart, BarChart2, PenTool,
  ArrowRight, Mail, ChevronLeft, ChevronRight, Check,
  Zap, Shield, GitBranch, Server, Users, Clock, Globe2, Terminal
} from 'lucide-react';
import { FaWhatsapp, FaGoogle, FaSms, FaRegLightbulb } from 'react-icons/fa';
import { SiR, SiAndroid, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { motion, useScroll, useTransform } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import ParallaxHero from '../components/home/ParallaxHero';
import FeatureGrid from '../components/home/FeatureGrid';
import Button from '../components/ui/Button';
import LogoCarousel from '../components/home/LogoCarousel';
import CaseStudyCard from '../components/home/CaseStudyCard';
import FeatureComparisonTable from '../components/home/FeatureComparisonTable';
import FAQAccordion from '../components/home/FAQAccordion';

// Data file for maintainability
const homeData = {
  features: [
    {
      icon: <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Lightning Fast',
      description: 'Optimized for speed with 99.9% uptime guarantee',
      gradient: 'from-blue-500 to-cyan-500 dark:from-blue-900/80 dark:to-cyan-900/60', // updated
      textClass: 'text-yellow-700 dark:text-yellow-300', // new
      descClass: 'text-blue-600 dark:text-blue-200', // new
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Enterprise Security',
      description: 'End-to-end encryption and compliance with global standards',
      gradient: 'from-blue-500 to-cyan-500 dark:from-blue-900/80 dark:to-cyan-900/60', // updated
      textClass: 'text-blue-700 dark:text-blue-300', // new
      descClass: 'text-blue-600 dark:text-blue-200', // new
    },
    {
      icon: <GitBranch className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Seamless Integration',
      description: 'Connect with your existing tools in minutes',
      gradient: 'from-blue-500 to-cyan-500 dark:from-blue-900/80 dark:to-cyan-900/60', // updated
      textClass: 'text-blue-700 dark:text-blue-300', // new
      descClass: 'text-blue-600 dark:text-blue-200', // new
    },
    {
      icon: <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Global Infrastructure',
      description: '150+ countries with local data centers for low latency',
      gradient: 'from-blue-500 to-cyan-500 dark:from-blue-900/80 dark:to-cyan-900/60', // updated
      textClass: 'text-blue-700 dark:text-blue-300', // new
      descClass: 'text-blue-600 dark:text-blue-200', // new
    }
  ],
  customerLogos: [
    { name: 'TechCorp', logo: '/logos/techcorp.svg' },
    { name: 'Innova', logo: '/logos/innova.svg' },
    { name: 'GlobalSoft', logo: '/logos/globalsoft.svg' },
    { name: 'DataSystems', logo: '/logos/datasystems.svg' },
    { name: 'CloudNine', logo: '/logos/cloudnine.svg' },
    { name: 'NextWave', logo: '/logos/nextwave.svg' },
    { name: 'DigitalFirst', logo: '/logos/digitalfirst.svg' }
  ],
  caseStudies: [
    {
      title: 'E-commerce Platform Scaling',
      challenge: 'A leading e-commerce site needed to handle 10x traffic during holiday sales',
      solution: 'Implemented our auto-scaling infrastructure with global CDN',
      results: '300% faster load times, 99.99% uptime during peak',
      metrics: ['3s â†’ 0.8s load time', '99.99% uptime', '40% conversion increase'],
      logo: '/logos/ecom-case.svg'
    },
    {
      title: 'Fintech Compliance Solution',
      challenge: 'Financial startup needed secure global messaging with audit trails',
      solution: 'Deployed our encrypted communication platform with full logging',
      results: 'Achieved regulatory compliance in 12 countries',
      metrics: ['100% audit compliance', '50% cost reduction', '30 markets served'],
      logo: '/logos/fintech-case.svg'
    }
  ],
  featureComparison: {
    headers: ['Feature', 'Starter', 'Professional', 'Enterprise'],
    rows: [
      ['API Requests', '10,000/mo', '50,000/mo', 'Unlimited'],
      ['Support', 'Email', 'Priority', '24/7 Dedicated'],
      ['Uptime SLA', '99.9%', '99.95%', '99.99%'],
      ['Max Users', '10', '50', 'Unlimited'],
      ['Analytics', 'Basic', 'Advanced', 'Custom'],
      ['Security', 'Standard', 'Enhanced', 'Enterprise']
    ],
    competitors: [
      ['Competitor A', '5,000/mo', '25,000/mo', 'Contact'],
      ['Competitor B', 'Unlimited', 'Unlimited', 'Unlimited']
    ]
  },
  faqs: [
    {
      question: 'How quickly can I get started?',
      answer: 'Most customers are up and running in under 15 minutes with our quick-start guides and pre-built templates.'
    },
    {
      question: 'What regions do you support?',
      answer: 'We have data centers in North America, Europe, Asia, and Australia with 150+ points of presence worldwide.'
    },
    {
      question: 'Can I upgrade or downgrade plans?',
      answer: 'Yes, you can change plans at any time with no downtime or service interruption.'
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Absolutely! Our enterprise team can design fully custom solutions tailored to your specific requirements.'
    }
  ],
  useCases: [
    {
      title: 'For Developers',
      icon: <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Powerful APIs and SDKs with comprehensive documentation to integrate in minutes',
      features: ['REST API', 'Webhooks', 'Client SDKs', 'Sandbox Environment']
    },
    {
      title: 'For Product Teams',
      icon: <LayoutTemplate className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Pre-built UI components and templates to accelerate your product development',
      features: ['React Components', 'Design System', 'Templates', 'Custom Themes']
    },
    {
      title: 'For Startups',
      icon: <FaRegLightbulb className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Scalable infrastructure that grows with you from MVP to global scale',
      features: ['Free Tier', 'Pay-as-you-grow', 'Startup Discounts', 'Mentorship']
    }
  ],
  services: [
    {
      title: 'IVR Service',
      icon: <Phone className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Interactive Voice Response solutions for automated customer interactions.',
      features: [
        'Outbound Calls',
        'Custom IVR',
        'Inbound Calls',
        'Survey Calls',
        'Reminder Calls',
        'Missed Calls'
      ]
    },
    {
      title: 'SMS Services',
      icon: <FaSms className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Reliable SMS solutions for promotional and transactional messaging.',
      features: [
        'Promotional SMS',
        'Transactional SMS (OTP\'s related)'
      ]
    },
    {
      title: 'Virtual Numbers',
      icon: <Phone className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Professional virtual numbers for business communications.',
      features: []
    },
    {
      title: 'Toll Free Numbers',
      icon: <Phone className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Toll-free numbers to enhance customer accessibility.',
      features: []
    },
    {
      title: 'Email Marketing',
      icon: <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Effective email campaigns for promotional and transactional purposes.',
      features: [
        'Promotional Emails',
        'Transactional Emails (OTP\'s related)'
      ]
    },
    {
      title: 'WhatsApp Marketing',
      icon: <FaWhatsapp className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Engage customers through powerful WhatsApp marketing solutions.',
      features: [
        'Bulk Messaging: Supports text, images, videos, PDFs',
        'Button Campaigns: Interactive messages with CTAs',
        'DP Campaigns: Branded display pictures',
        'Action Campaigns: Automated messages based on triggers',
        'Broadcast Campaigns: Personalized messaging',
        'WhatsApp Chatbot Integration: 24/7 support automation',
        'Lead Capture & CRM Integration',
        'Real-Time Analytics Dashboard',
        'WhatsApp Business API & Green Tick Support'
      ]
    },
    {
      title: 'Digital Marketing',
      icon: <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Comprehensive digital marketing to boost your online presence.',
      features: [
        'Search Engine Optimization (SEO): Keyword research, on-page/off-page SEO',
        'Content Marketing: Blogs, videos, infographics',
        'Social Media Marketing: Organic and paid campaigns',
        'Video Marketing: YouTube, Instagram Reels, TikTok',
        'Conversion Rate Optimization (CRO): A/B testing, UX improvements'
      ]
    },
    {
      title: 'Website Development',
      icon: <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Custom websites tailored to your business needs.',
      features: [
        'Custom Website Design & Development',
        'Responsive Design: Mobile-friendly layouts',
        'E-commerce Development: Secure payment gateways',
        'CMS Integration: WordPress, Shopify',
        'Web Portal Development'
      ]
    },
    {
      title: 'Android App Development',
      icon: <SiAndroid className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Feature-rich Android apps for your business.',
      features: [
        'Custom Android App Design',
        'Native & Hybrid Development: Kotlin/Java, Flutter',
        'App UI/UX Design',
        'App Deployment & Maintenance'
      ]
    },
    {
      title: 'UI/UX Design Services',
      icon: <PenTool className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Intuitive and visually appealing designs for better user engagement.',
      features: [
        'Wireframing & Prototyping',
        'User Interface (UI) Design',
        'User Experience (UX) Optimization',
        'Design System & Brand Consistency'
      ]
    },
    {
      title: 'Graphic Designing Services',
      icon: <PenTool className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Creative graphic design solutions for branding and marketing.',
      features: [
        'Brand Identity Design: Logo, guidelines, stationery',
        'Marketing & Promotional Design: Brochures, posters, social media graphics',
        'Packaging & Product Design: Labels, mockups',
        'Digital & Web Graphics: Banners, icons, infographics',
        'Custom Design Solutions: Event invitations, presentations'
      ]
    },
    {
      title: 'Products',
      icon: <LayoutTemplate className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Specialized products to streamline your business operations.',
      features: [
        'WhatsApp API and Source Code',
        'CRMs for Every Business Need'
      ]
    }
  ],
  testimonials: [
    {
      quote: 'This platform transformed our business operations. The API integration was seamless and the performance is outstanding.',
      author: 'Vaibhav Jain',
      role: 'CTO',
      rating: 5,
    },
    {
      quote: 'We reduced our operational costs by 40% while improving delivery times. The analytics dashboard is incredibly insightful.',
      author: 'Swapnil Kumar',
      role: 'Product Director',
      rating: 5,
    },
    {
      quote: 'The customer support team is exceptional. They helped us migrate our legacy systems with zero downtime.',
      author: 'Neeraj Laishram',
      role: 'Engineering Lead',
      rating: 4,
    },
  ],

  stats: [
    {
      value: '99.9%',
      label: 'Uptime',
      description: 'Guaranteed reliability for your business',
      icon: <Server className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
    {
      value: '2.5B+',
      label: 'Requests',
      description: 'Processed every month across our network',
      icon: <Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
    {
      value: '150+',
      label: 'Countries',
      description: 'With local infrastructure for low latency',
      icon: <Globe2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
    {
      value: '24/7',
      label: 'Support',
      description: 'Expert help whenever you need it',
      icon: <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
  ],
};

// Interfaces
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient?: string;
  textClass?: string;
  descClass?: string;
}



interface IntegrationFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

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

interface Service {
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
}

// Error Boundary
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <MainLayout>
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-xl text-gray-600 dark:text-gray-300">Something went wrong. Please try again later.</p>
          </div>
        </MainLayout>
      );
    }
    return this.props.children;
  }
}

// Testimonial Carousel Component
const TestimonialCarousel: React.FC = React.memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === homeData.testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? homeData.testimonials.length - 1 : prev - 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
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
          {[...Array(homeData.testimonials[currentIndex].rating)].map((_, i) => (
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
        <p className="text-xl text-black dark:text-blue-100 mb-6">"{homeData.testimonials[currentIndex].quote}"</p>
        <div className="text-gray-800 dark:text-blue-200">
          <p className="font-bold">{homeData.testimonials[currentIndex].author}</p>
          <p className="text-sm">{homeData.testimonials[currentIndex].role}</p>
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
          {homeData.testimonials.map((_, i) => (
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
const StatsGrid: React.FC<{ className?: string }> = React.memo(({ className }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${className ?? ''}`}>
      {homeData.stats.map((stat, i) => (
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
const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
const UseCaseCard: React.FC<{ useCase: any }> = ({ useCase }) => {
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
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
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

// Main HomePage Component
const HomePage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <ErrorBoundary>
      <ParallaxProvider>
        <MainLayout>
          {/* HERO – ORIGINAL WHITE-CANVAS DESIGN */}
<section className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center">
  {/* ---- Subtle “paper-texture” overlay ---- */}
  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%230F172A'/%3E%3C/g%3E%3C/svg%3E")`,
    }}
  />

  {/* ---- Floating geometric “cards” that drift slowly ---- */}
  <motion.div
    animate={{ rotate: [0, 3, 0], x: [-40, 40, -40], y: [-30, 30, -30] }}
    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
    className="absolute top-24 left-12 w-64 h-64 bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-lg opacity-70"
    style={{ transform: "rotate(-12deg)" }}
  />
  <motion.div
    animate={{ rotate: [0, -2, 0], x: [30, -30, 30], y: [20, -40, 20] }}
    transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
    className="absolute bottom-32 right-16 w-56 h-56 bg-gradient-to-tr from-blue-100 to-white rounded-3xl shadow-lg opacity-60"
    style={{ transform: "rotate(8deg)" }}
  />

  <Container className="relative z-10 px-6 md:px-12 lg:px-16">
    <div className="max-w-4xl mx-auto text-center">

      {/* ---- Hand-drawn style badge ---- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="inline-flex items-center gap-3 px-6 py-2 mb-10 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium tracking-wide"
      >
        <Zap className="w-5 h-5" />
        <span className="relative">
          <span className="absolute inset-x-0 bottom-0 h-px bg-blue-300"></span>
          Enterprise-Grade Communication
        </span>
      </motion.div>

      {/* ---- Headline – split into two animated lines ---- */}
      <motion.h1
        className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.span
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="block"
        >
          Build <span className="font-medium text-blue-600">connections</span>
        </motion.span>
        <motion.span
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="block mt-2"
        >
          that <span className="font-medium text-blue-600">scale</span> your vision.
        </motion.span>
      </motion.h1>

      {/* ---- Sub-headline – calm, generous line-height ---- */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-10 text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed"
      >
        Real-time SMS, WhatsApp, Voice & Email – secure, compliant, and ready for
        the next 10 000 businesses.
      </motion.p>

      {/* ---- CTA – soft-shadow, rounded, subtle hover lift ---- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link to="/get-started">
          <Button className="group px-9 py-4 bg-blue-600 text-white font-medium rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3">
            Start Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>

        <Link to="/demo">
          <Button className="px-9 py-4 border border-gray-300 text-gray-800 font-medium rounded-2xl bg-white hover:bg-gray-50 transition-all duration-300">
            Schedule a Demo
          </Button>
        </Link>
      </motion.div>

      {/* ---- Trust bar – tiny icons, soft divider lines ---- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-20 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-gray-500 font-light"
      >
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-blue-600" />
          GDPR & ISO 27001
        </div>
        <span className="hidden sm:inline w-px h-4 bg-gray-300" />
        <div className="flex items-center gap-2">
          <Server className="w-4 h-4 text-blue-600" />
          99.99 % Uptime
        </div>
        <span className="hidden sm:inline w-px h-4 bg-gray-300" />
        <div className="flex items-center gap-2">
          <Globe2 className="w-4 h-4 text-blue-600" />
          150 + Countries
        </div>
      </motion.div>
    </div>
  </Container>

  {/* ---- Scroll hint – minimal, fades in last ---- */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.4 }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
  >
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      className="flex flex-col items-center text-xs font-light tracking-widest"
    >
      <span>Explore</span>
      <ArrowRight className="w-5 h-5 mt-1 rotate-90" />
    </motion.div>
  </motion.div>
</section>

          {/* Services Section */}
          <section id="services" className="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-blue-950/50 dark:to-blue-950 relative overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        x: [0, 100, 0],
        y: [0, -50, 0],
        rotate: [0, 5, 0]
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }}
      className="absolute -left-20 -top-20 w-96 h-96 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl"
    />
    <motion.div
      animate={{
        x: [0, -100, 0],
        y: [0, 50, 0],
        rotate: [0, -5, 0]
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }}
      className="absolute -right-20 -bottom-20 w-96 h-96 bg-cyan-200/20 dark:bg-cyan-800/20 rounded-full blur-3xl"
    />
  </div>

  {/* Floating particles */}
  {[...Array(15)].map((_, i) => (
    <motion.div
      key={i}
      animate={{
        y: [0, Math.random() * 100 - 50],
        x: [0, Math.random() * 100 - 50],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 5 + Math.random() * 10,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      className={`absolute rounded-full bg-blue-400/20 dark:bg-blue-600/20 pointer-events-none ${
        i % 3 === 0 ? 'w-3 h-3' : i % 2 === 0 ? 'w-2 h-2' : 'w-1 h-1'
      }`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }}
    />
  ))}

  <Container>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16 relative"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring" }}
        className="inline-block mb-6"
      >
        <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white text-sm font-bold tracking-wide shadow-lg shadow-blue-400/30 hover:shadow-blue-400/50 transition-all duration-300">
          OUR SERVICES
        </div>
      </motion.div>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
        Powerful Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Your Business</span>
      </h2>
      <p className="text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
        Cutting-edge services designed to propel your business forward
      </p>
    </motion.div>

    {/* Services Grid - New Design */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
      {homeData.services.map((service, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: i * 0.1, type: "spring" }}
          className="relative"
        >
          <ServiceCard service={service} />
        </motion.div>
      ))}
    </div>

    {/* CTA at Bottom */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="mt-16 text-center"
    >
      <Link to="/services">
        <Button
          variant="primary"
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg"
          icon={<ArrowRight className="w-5 h-5" />}
        >
          Explore All Services
        </Button>
      </Link>
      <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">
        Not sure what you need? <Link to="/contact" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">Get a free consultation</Link>
      </p>
    </motion.div>
  </Container>
</section>

          {/* Customer Logos Carousel */}
          <section id="customers" className="py-20 bg-gray-50 dark:bg-blue-950/50">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Trusted by <span className="text-blue-600 dark:text-blue-400">Innovative</span> Companies
                </h2>
                <p className="text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                  Join thousands of businesses accelerating their growth with our platform
                </p>
              </motion.div>
              
              <LogoCarousel logos={homeData.customerLogos} />
            </Container>
          </section>

          {/* Case Studies Section */}
          <section id="case-studies" className="py-32 bg-white dark:bg-blue-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:60px_60px] opacity-5 dark:opacity-[0.02]" />
            
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Real <span className="text-blue-600 dark:text-blue-400">Success</span> Stories
                </h2>
                <p className="text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                  See how our customers are transforming their businesses
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {homeData.caseStudies.map((caseStudy, i) => (
                  <CaseStudyCard key={i} caseStudy={caseStudy} index={i} />
                ))}
              </div>

              <div className="text-center mt-16">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/50"
                >
                  View All Case Studies
                </Button>
              </div>
            </Container>
          </section>

          {/* Use Cases Section */}
          <section id="use-cases" className="py-32 bg-gray-50 dark:bg-blue-950/50">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Solutions for <span className="text-blue-600 dark:text-blue-400">Every Team</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                  Tailored solutions designed for your specific needs
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {homeData.useCases.map((useCase, i) => (
                  <UseCaseCard key={i} useCase={useCase} />
                ))}
              </div>
            </Container>
          </section>

          {/* Integration Section */}
          <section id="integrations" className="py-32 bg-white dark:bg-blue-950 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] bg-[length:60px_60px] opacity-5 dark:opacity-[0.02]" />
            </div>

            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg"
                      whileHover={{ y: -5 }}
                    >
                      <SiNextdotjs className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg"
                      whileHover={{ y: -5 }}
                    >
                      <SiTailwindcss className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg"
                      whileHover={{ y: -5 }}
                    >
                      <SiTypescript className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                  </div>

                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    Seamless{' '}
                    <span className="text-blue-600 dark:text-blue-400">Integration</span>
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-blue-200 mb-8">
                    Connect with your existing systems using our powerful APIs and SDKs.
                    Start building in minutes, not days.
                  </p>

                  <div className="space-y-4 mb-8">
                    {[
                      {
                        icon: <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
                        title: 'Developer Friendly',
                        description: 'Comprehensive documentation and code samples'
                      },
                      {
                        icon: <GitBranch className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
                        title: 'Version Control',
                        description: 'API versioning for backward compatibility'
                      },
                      {
                        icon: <Terminal className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
                        title: 'CLI Tools',
                        description: 'Command line interface for quick setup'
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3 p-4 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                      >
                        <div className="flex-shrink-0 mt-1">{item.icon}</div>
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white">{item.title}</h3>
                          <p className="text-gray-600 dark:text-blue-200">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button
                      variant="primary"
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700"
                      icon={<ArrowRight size={20} />}
                    >
                      View Documentation
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="border-gray-300 dark:border-gray-700"
                    >
                      Contact Sales
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20, rotate: 2 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="relative bg-gradient-to-br from-blue-950 to-blue-900 rounded-2xl p-8 shadow-2xl overflow-hidden">
                    <motion.div
                      animate={{ y: [0, 15, 0] }}
                      transition={{ duration: 8, repeat: Infinity }}
                      className="absolute top-10 left-10 w-8 h-8 bg-blue-500/30 rounded-lg"
                    />
                    <motion.div
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
                      className="absolute bottom-16 right-12 w-6 h-6 bg-cyan-400/30 rounded-full"
                    />

                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl" />

                    <div className="relative z-10">
                      <div className="flex space-x-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>

                      <pre className="font-mono text-sm text-blue-200 overflow-x-auto bg-blue-900/50 rounded-lg p-4">
                        <code>{`
    // Initialize the client
    const client = new DuoTechnoClient({
      apiKey: process.env.API_KEY,
      region: 'us-west-2'
    });

    // Send a message with rich content
    await client.messages.send({
      to: '+1234567890',
      content: 'Hello from DuoTechno',
      attachments: [
        {
          type: 'image',
          url: 'https://example.com/image.jpg'
        }
      ],
      options: {
        priority: 'high',
        deliveryReport: true
      }
    });

    // Batch processing example
    const results = await client.batch.create([
      { type: 'sms', ...message1 },
      { type: 'email', ...message2 }
    ]);
                        `}</code>
                      </pre>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Container>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-32 bg-gray-50 dark:bg-blue-950/50 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
                className="absolute -left-20 -top-20 w-96 h-96 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  x: [0, -100, 0],
                  y: [0, 50, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
                className="absolute -right-20 -bottom-20 w-96 h-96 bg-cyan-200/20 dark:bg-cyan-800/20 rounded-full blur-3xl"
              />
            </div>

            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring" }}
                  className="inline-block mb-6"
                >
                  <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white text-sm font-bold tracking-wide shadow-lg shadow-blue-400/30 hover:shadow-blue-400/50 transition-all duration-300">
                    WHY CHOOSE US
                  </div>
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  What Makes Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Different</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                  We're not just another tech company. We're your partners in digital transformation.
                </p>
              </motion.div>

              {/* Mission & Values Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    icon: <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
                    title: " Trusted Technology",
                    description: "Enterprise-grade security with end-to-end encryption and compliance with global standards. Your data is safe with us.",
                    gradient: "from-blue-500 to-blue-600"
                  },
                  {
                    icon: <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
                    title: " Fast Response Times",
                    description: "Lightning-fast performance with 99.9% uptime guarantee. Your business never stops with our optimized infrastructure.",
                    gradient: "from-cyan-500 to-blue-500"
                  },
                  {
                    icon: <GitBranch className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
                    title: " Customizable for Your Needs",
                    description: "Seamless integration with your existing tools in minutes. We adapt to your workflow, not the other way around.",
                    gradient: "from-purple-500 to-blue-500"
                  },
                  {
                    icon: <Server className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
                    title: " Global Infrastructure",
                    description: "150+ countries with local data centers for low latency. Wherever your customers are, we're there too.",
                    gradient: "from-green-500 to-blue-500"
                  },
                  {
                    icon: <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
                    title: "ðŸ¤ Commitment to Quality",
                    description: "Dedicated support team available 24/7. We're committed to your success, not just your business.",
                    gradient: "from-orange-500 to-blue-500"
                  },
                  {
                    icon: <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
                    title: "ðŸ’¡ Innovation First",
                    description: "Constantly evolving our platform with cutting-edge technologies to keep you ahead of the competition.",
                    gradient: "from-pink-500 to-blue-500"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                    className="relative group"
                  >
                    {/* Card Background */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-blue-900/50 dark:to-blue-950 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-200 dark:border-blue-800/50" />
                    
                    {/* Card Content */}
                    <div className="relative p-8 h-full">
                      {/* Animated Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring" }}
                        className="mb-6 inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-800 dark:to-blue-900 shadow-sm"
                      >
                        {React.cloneElement(item.icon as React.ReactElement, {
                          className: "w-10 h-10 text-blue-600 dark:text-blue-400"
                        })}
                      </motion.div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {item.title}
                        <motion.span
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                          className="block w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2"
                        />
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>

                      {/* Hover Effect Elements */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-bl-2xl rounded-tr-2xl flex items-center justify-center"
                      >
                        <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400 opacity-70" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Founder's Vision Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 shadow-xl overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise-pattern.png')] opacity-10" />
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
                    <p className="text-blue-100 mb-6 text-lg">
                      We started DuoTechno with a simple vision: to democratize powerful business tools 
                      that were previously only available to large enterprises. We believe every business, 
                      regardless of size, deserves access to world-class technology.
                    </p>
                    <p className="text-blue-100 mb-8">
                      What excites us most is seeing our customers transform their businesses and achieve 
                      their dreams. That's why we're committed to continuous innovation and exceptional support.
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-blue-200 font-medium">
                        Trusted by 10,000+ businesses worldwide
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                      <h4 className="text-xl font-bold text-white mb-4">What We're Solving</h4>
                      <div className="space-y-4">
                        {[
                          "Complex integrations that take months to implement",
                          "High costs that exclude small businesses",
                          "Poor customer support when you need it most",
                          "Limited scalability as your business grows"
                        ].map((problem, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start"
                          >
                            <div className="flex-shrink-0 mt-1">
                              <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center"
                              >
                                <div className="w-2 h-2 rounded-full bg-red-400" />
                              </motion.div>
                            </div>
                            <span className="ml-3 text-blue-200">{problem}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-16 text-center"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Join Our Mission
                </Button>
                <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">
                  Ready to transform your business? <a href="#" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">Start your free trial today</a>
                </p>
              </motion.div>
            </Container>
          </section>



          {/* Testimonials Section */}
          <section
            id="testimonials"
            className="py-32 bg-white dark:bg-blue-950 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] bg-[size:100px_100px]" />
            </div>

            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  What Our <span className="text-cyan-700 dark:text-cyan-300">Customers</span> Say
                </h2>
                <p className="text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                  Don't just take our word for it - hear from our satisfied customers
                </p>
              </motion.div>

              <TestimonialCarousel />
            </Container>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-32 bg-gray-50 dark:bg-blue-950/50">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Frequently Asked <span className="text-blue-600 dark:text-blue-400">Questions</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                  Everything you need to know about our platform
                </p>
              </motion.div>

              <FAQAccordion faqs={homeData.faqs} />
            </Container>
          </section>

          {/* Newsletter Section */}
          <section className="py-24 bg-white dark:bg-blue-950">
            <Container>
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 shadow-xl overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise-pattern.png')] opacity-10" />
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
                    <p className="text-blue-100 mb-8">
                      Subscribe to our newsletter for product updates, technical guides, and industry insights.
                    </p>
                    <div className="flex items-center space-x-4">
                      <Mail className="w-8 h-8 text-blue-200" />
                      <span className="text-blue-200 font-medium">
                        No spam, ever. Unsubscribe anytime.
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <NewsletterForm />
                  </motion.div>
                </div>
              </div>
            </Container>
          </section>

          {/* CTA Section */}
          <section className="py-32 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
              <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[size:100px_100px] opacity-10" />
            </div>

            <Container>
              <motion.div
                style={{ scale }}
                className="relative z-10 text-center max-w-3xl mx-auto"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-6"
                >
                  <div className="px-6 py-2 bg-white/10 rounded-full border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
                    READY TO GET STARTED?
                  </div>
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Transform Your <span className="text-cyan-300">Business</span> Today
                </h2>
                <p className="text-xl text-blue-200 mb-12">
                  Join thousands of businesses using our platform to scale their operations
                  and deliver exceptional experiences.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    variant="accent"
                    size="lg"
                    className="bg-cyan-400 hover:bg-cyan-500 text-blue-900 px-12"
                    icon={<ArrowRight size={20} />}
                  >
                    Get Started Now
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-white border-white/30 hover:bg-white/10 px-12"
                  >
                    Schedule Demo
                  </Button>
                </div>
              </motion.div>
            </Container>
          </section>
        </MainLayout>
      </ParallaxProvider>
    </ErrorBoundary>
  );
};

export default HomePage;