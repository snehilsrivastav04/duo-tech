import React, { useState, useRef, useEffect } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { 
  MessageSquare, Smartphone, Phone, Code, Globe, 
  LayoutTemplate, ShoppingCart, BarChart2, PenTool,
  ArrowRight, Mail, ChevronLeft, ChevronRight, Check,
  Zap, Shield, GitBranch, Server, Users, Clock, Globe2, Terminal
} from 'lucide-react';
import { FaWhatsapp, FaGoogle, FaSms, FaRegLightbulb } from 'react-icons/fa';
import { SiR, SiAndroid, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import ParallaxHero from '../components/home/ParallaxHero';
import FeatureGrid from '../components/home/FeatureGrid';
import Button from '../components/ui/Button';
import LogoCarousel from '../components/home/LogoCarousel';
import CaseStudyCard from '../components/home/CaseStudyCard';
import FeatureComparisonTable from '../components/home/FeatureComparisonTable';
import FAQAccordion from '../components/home/FAQAccordion';

// Type definitions for data structure
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  backDescription: string;
  gradient: string;
}

interface Stat {
  value: string;
  label: string;
}

interface CustomerLogo {
  name: string;
  logo: string;
}

interface CaseStudy {
  title: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: string[];
  logo: string;
}

interface UseCase {
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ParallaxSection {
  title: string;
  content: string;
  image: string;
  features: string[];
}

interface RCSData {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
    stats: Stat[];
  };
  features: Feature[];
  customerLogos: CustomerLogo[];
  caseStudies: CaseStudy[];
  useCases: UseCase[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  parallaxSections: ParallaxSection[];
}

// Data file for maintainability
const rcsData: RCSData = {
  hero: {
    title: "Next-Gen Business Messaging with RCS",
    subtitle: "Engage customers with rich, interactive messages that drive results",
    cta: "Get Started",
    secondaryCta: "See How It Works",
    stats: [
      { value: "10x", label: "Higher engagement than SMS" },
      { value: "90%", label: "Open rates" },
      { value: "5x", label: "More conversions" }
    ]
  },
  features: [
    {
      icon: <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Rich Media',
      description: 'Send high-resolution images, videos, GIFs and files',
      backDescription: 'No more compressed media - deliver stunning visuals directly in the message thread',
      gradient: 'from-blue-100 to-blue-50 dark:from-blue-900/50 dark:to-blue-900/30'
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Interactive Buttons',
      description: 'Include clickable CTAs for instant actions',
      backDescription: 'Drive conversions with buttons for purchases, bookings, and more without leaving the chat',
      gradient: 'from-purple-100 to-purple-50 dark:from-purple-900/50 dark:to-purple-900/30'
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Analytics Dashboard',
      description: 'Real-time insights into message performance',
      backDescription: 'Track opens, clicks, conversions and ROI with our comprehensive analytics suite',
      gradient: 'from-cyan-100 to-cyan-50 dark:from-cyan-900/50 dark:to-cyan-900/30'
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Enterprise Security',
      description: 'End-to-end encryption and compliance',
      backDescription: 'Bank-level security with GDPR, HIPAA and PCI compliance built-in',
      gradient: 'from-green-100 to-green-50 dark:from-green-900/50 dark:to-green-900/30'
    }
  ],
  customerLogos: [
    { name: 'RetailChain', logo: '/logos/retailchain.svg' },
    { name: 'BankGlobal', logo: '/logos/bankglobal.svg' },
    { name: 'TravelNow', logo: '/logos/travelnow.svg' },
    { name: 'HealthPlus', logo: '/logos/healthplus.svg' },
    { name: 'AutoDealers', logo: '/logos/autodealers.svg' },
    { name: 'EduTech', logo: '/logos/edutech.svg' }
  ],
  caseStudies: [
    {
      title: 'Retail Chain Boosted Sales',
      challenge: 'National retailer needed to modernize promotional messaging',
      solution: 'Implemented RCS with rich product carousels and buy buttons',
      results: 'Increased conversion rates by 8x compared to traditional SMS',
      metrics: ['8x conversions', '92% open rate', '40% revenue increase'],
      logo: '/logos/retail-case.svg'
    },
    {
      title: 'Bank Reduced Fraud Cases',
      challenge: 'Financial institution needed secure transaction verification',
      solution: 'Deployed RCS with branded authentication flows',
      results: 'Cut fraud by 65% while improving customer experience',
      metrics: ['65% fraud reduction', '90% faster verification', 'CSAT +35%'],
      logo: '/logos/bank-case.svg'
    }
  ],
  useCases: [
    {
      title: 'Retail & E-commerce',
      icon: <ShoppingCart className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Product showcases with instant purchase options',
      features: ['Interactive catalogs', 'Abandoned cart recovery', 'Personalized offers', 'Order tracking']
    },
    {
      title: 'Banking & Finance',
      icon: <BarChart2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Secure transaction verification and alerts',
      features: ['Fraud alerts', 'Balance notifications', 'Payment confirmations', 'Loan approvals']
    },
    {
      title: 'Travel & Hospitality',
      icon: <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Interactive itineraries and booking management',
      features: ['Booking confirmations', 'Check-in reminders', 'Upgrade offers', 'Local experience guides']
    }
  ],
  testimonials: [
    {
      quote: 'RCS transformed our customer engagement. The rich media capabilities and analytics helped us achieve 8x higher conversion rates compared to SMS.',
      author: 'Sarah Johnson',
      role: 'CMO, RetailChain',
      rating: 5,
    },
    {
      quote: 'Implementation was seamless and the results were immediate. Our customers love the interactive experience and we love the measurable ROI.',
      author: 'Michael Chen',
      role: 'Digital Director, BankGlobal',
      rating: 5,
    },
    {
      quote: 'The support team was exceptional throughout our migration from SMS to RCS. They helped us redesign all our messaging flows for maximum impact.',
      author: 'Emma Rodriguez',
      role: 'Head of CX, TravelNow',
      rating: 4,
    },
  ],
  faqs: [
    {
      question: 'How is RCS different from SMS?',
      answer: 'RCS offers rich media, branding, interactivity, and analytics - all within the native messaging app. Unlike SMS, it supports images, videos, buttons, carousels and more.'
    },
    {
      question: 'Do customers need to install an app?',
      answer: 'No, RCS works through the default messaging app on Android devices (which covers 85% of smartphones globally). No additional app installation is needed.'
    },
    {
      question: 'What if a customer doesn\'t have RCS?',
      answer: 'Our platform automatically falls back to SMS when RCS isn\'t available, ensuring all your messages are delivered regardless of the recipient\'s device.'
    },
    {
      question: 'How quickly can we get started?',
      answer: 'Most customers are sending messages within 24 hours. Our onboarding team will guide you through number verification, template approval and campaign setup.'
    }
  ],
  parallaxSections: [
    {
      title: "Branded Messaging",
      content: "Stand out with your logo, colors and verified identity. Unlike SMS, RCS displays your brand prominently so customers immediately recognize your messages.",
      image: "/images/rcs-branded.png",
      features: [
        "Verified business profile",
        "Custom branding colors",
        "Large logo display",
        "Trust indicators"
      ]
    },
    {
      title: "Rich Media Content",
      content: "Send high-quality images, videos, PDFs and more directly in the message thread. No more links to external content - everything appears natively.",
      image: "/images/rcs-media.png",
      features: [
        "3000px wide images",
        "Up to 100MB files",
        "Native video playback",
        "PDF/document sharing"
      ]
    },
    {
      title: "Interactive Experiences",
      content: "Include buttons, quick replies, carousels and suggested actions to drive engagement. Customers can take action without leaving the chat.",
      image: "/images/rcs-interactive.png",
      features: [
        "Clickable call-to-actions",
        "Suggested replies",
        "Product carousels",
        "Calendar integration"
      ]
    },
    {
      title: "Advanced Analytics",
      content: "Track opens, clicks, conversions and ROI with our comprehensive dashboard. See exactly how your messages perform with real-time reporting.",
      image: "/images/rcs-analytics.png",
      features: [
        "Real-time reporting",
        "Conversion tracking",
        "ROI measurement",
        "A/B testing tools"
      ]
    }
  ]
};

// Flip Card Component for Features
const FlipCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="h-80 perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && setIsFlipped(!isFlipped)}
      aria-label={`Toggle ${feature.title} information`}
    >
      <motion.div
        className="relative w-full h-full preserve-3d transition-all duration-500 ease-in-out"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-white dark:bg-blue-900/50 rounded-xl p-6 border border-gray-200 dark:border-blue-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-800 dark:to-blue-900 rounded-lg mb-4 inline-flex">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
          <div className="mt-4 text-sm text-blue-600 dark:text-blue-400 flex items-center">
            Learn more <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden bg-white dark:bg-blue-900 rounded-xl p-6 border border-blue-200 dark:border-blue-700 shadow-md rotate-y-180">
          <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-800 dark:to-blue-900 rounded-lg mb-4 inline-flex">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.backDescription}</p>
          <div className="mt-4 text-sm text-blue-600 dark:text-blue-400 flex items-center">
            Flip back <ArrowRight className="w-4 h-4 ml-1 transform rotate-180" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Parallax Section Switcher Component
const ParallaxSectionSwitcher: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate active index based on scroll progress
  const updateActiveIndex = () => {
    if (!containerRef.current) return;
    const sections = containerRef.current.querySelectorAll('.parallax-section');
    const containerTop = containerRef.current.getBoundingClientRect().top;
    const containerHeight = containerRef.current.offsetHeight;
    
    sections.forEach((section, index) => {
      const sectionTop = section.getBoundingClientRect().top - containerTop;
      if (sectionTop <= containerHeight * 0.3) {
        setActiveIndex(index);
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      updateActiveIndex();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-16 bg-gray-50 dark:bg-blue-950/50 relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            The Power of <span className="text-blue-600 dark:text-blue-400">RCS Messaging</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
            Discover how RCS outperforms traditional SMS in every way
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative" // Removed min-h-[150vh]
        >
          {/* Fixed Image Container */}
          <div className="sticky top-0 h-screen flex items-center justify-center lg:justify-end">
            <div className="w-full lg:w-1/2 lg:pr-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="absolute -left-8 -top-8 w-32 h-32 bg-blue-400/20 rounded-full blur-xl" />
                  <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-blue-500/20 rounded-full blur-xl" />
                  <img 
                    src={rcsData.parallaxSections[activeIndex].image} 
                    alt={rcsData.parallaxSections[activeIndex].title}
                    className="rounded-2xl shadow-2xl border border-gray-200 dark:border-blue-800 w-full max-w-lg mx-auto"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Scrolling Content Sections */}
          <div className="absolute top-0 w-full lg:w-1/2 h-full">
            {rcsData.parallaxSections.map((section, index) => (
              <div 
                key={index}
                className={`parallax-section min-h-screen flex items-center ${
                  index === 0 ? 'pt-16' : ''
                }`}
                // Removed extra padding bottom
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className={`p-8 bg-white dark:bg-blue-900 rounded-2xl shadow-lg border border-gray-100 dark:border-blue-800 ${
                    index === activeIndex ? 'scale-100 opacity-100' : 'scale-90 opacity-70'
                  } transition-all duration-300`}
                >
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {section.content}
                  </p>
                  <ul className="space-y-2">
                    {section.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

// Main HomePage Component
const HomePage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? rcsData.testimonials.length - 1 : prev - 1
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === rcsData.testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <ParallaxProvider>
      <MainLayout>
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[size:100px_100px] opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-800/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          </div>

          <Container className="min-h-screen flex items-center relative z-10 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {rcsData.hero.title}
                </h1>
                <p className="text-xl text-blue-100 mb-10 max-w-lg">
                  {rcsData.hero.subtitle}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-12">
                  <Button
                    variant="accent"
                    size="lg"
                    className="bg-white text-blue-800 hover:bg-blue-100 px-8"
                    icon={<ArrowRight size={20} />}
                    aria-label="Get started with RCS messaging"
                  >
                    {rcsData.hero.cta}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-white border-white hover:bg-white/10 px-8"
                    aria-label="See how RCS messaging works"
                  >
                    {rcsData.hero.secondaryCta}
                  </Button>
                </div>

                <div className="flex flex-wrap gap-8">
                  {rcsData.hero.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 + 0.5 }}
                      className="text-white"
                    >
                      <p className="text-4xl font-bold">{stat.value}</p>
                      <p className="text-blue-200">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl" />
                <img 
                  src="/images/rcs-hero-mockup.png" 
                  alt="RCS Messaging Example" 
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl border-8 border-white/20"
                />
              </motion.div>
            </div>
          </Container>

          <motion.div
            style={{ opacity, y }}
            className="absolute bottom-10 left-0 right-0 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white text-center"
            >
              <p className="mb-2">Scroll to explore</p>
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6 mx-auto rotate-90" />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section with Flip Cards */}
        <section id="features" className="py-32 bg-white dark:bg-blue-950 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
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
                duration: 20,
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
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose <span className="text-blue-600 dark:text-blue-400">RCS</span>?
              </h2>
              <p className="text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                The next evolution of business messaging with unparalleled engagement
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rcsData.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="h-80"
                >
                  <FlipCard feature={feature} />
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Parallax Section Switcher */}
        <ParallaxSectionSwitcher />

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
                Trusted by <span className="text-blue-600 dark:text-blue-400/50">Leading</span> Brands
              </h2>
              <p className="text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                Industry leaders who trust our RCS messaging platform
              </p>
            </motion.div>
            
            <LogoCarousel logos={rcsData.customerLogos} />
          </Container>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="py-32 bg-white dark:bg-blue-950">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Industry <span className="text-blue-600 dark:text-blue-400">Solutions</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                Tailored RCS messaging solutions for your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {rcsData.useCases.map((useCase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-blue-900/50 rounded-xl p-8 border border-gray-200 dark:border-blue-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-lg mr-4">
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-32 bg-gradient-to-br from-blue-900 to-blue-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/noise-pattern.png')] opacity-10" />
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-900/80 to-transparent" />
          <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-700/80 to-transparent" />

          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                What Our <span className="text-cyan-300">Clients</span> Say
              </h2>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                Don't just take our word for it - hear from our customers
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/90 dark:bg-blue-900/90 backdrop-blur-lg p-8 rounded-2xl border border-white/20 dark:border-blue-700 shadow-xl"
                >
                  <div className="flex mb-4">
                    {[...Array(rcsData.testimonials[currentTestimonial].rating)].map((_, i) => (
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
                  <p className="text-xl text-black dark:text-blue-100 mb-6">"{rcsData.testimonials[currentTestimonial].quote}"</p>
                  <div className="text-gray-800 dark:text-blue-200">
                    <p className="font-bold">{rcsData.testimonials[currentTestimonial].author}</p>
                    <p className="text-sm">{rcsData.testimonials[currentTestimonial].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center mt-8 space-x-4">
                <button
                  onClick={handlePrevTestimonial}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={handleNextTestimonial}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
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
                Everything you need to know about RCS messaging
              </p>
            </motion.div>

            <FAQAccordion faqs={rcsData.faqs} />
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0">
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
                Transform Your <span className="text-cyan-300">Customer Engagement</span> Today
              </h2>
              <p className="text-xl text-blue-200 mb-12">
                Join the messaging revolution with RCS and see the difference rich, interactive messages can make.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="accent"
                  size="lg"
                  className="bg-cyan-400 hover:bg-cyan-500 text-blue-900 px-12"
                  icon={<ArrowRight size={20} />}
                  aria-label="Get started with RCS messaging now"
                >
                  Get Started Now
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white border-white/30 hover:bg-white/10 px-12"
                  aria-label="Schedule a demo for RCS messaging"
                >
                  Schedule Demo
                </Button>
              </div>
            </motion.div>
          </Container>
        </section>
      </MainLayout>
    </ParallaxProvider>
  );
};

export default HomePage;