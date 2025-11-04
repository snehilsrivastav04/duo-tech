import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
import { Phone, ArrowRight, Mail, ChevronLeft, ShoppingCart, ChevronRight, Check, Zap, Shield, Clock, Users, Headphones, Voicemail, Mic, Menu, MessageSquare, Bell, Calendar, HelpCircle, Database, Globe, PieChart, Star } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import ivrData from '../data/ivr-data';

// Interfaces
interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  benefits: string[];
}

interface WhyChoose {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

interface UseCase {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  industries: string[];
}

interface FlowchartStep {
  id: string;
  step: string;
  description: string;
}

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  logo: string;
  quote: string;
  author: string;
}

// Error Boundary
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error?: Error }> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <MainLayout>
          <div className="min-h-screen flex items-center justify-center" role="alert">
            <p className="text-xl text-gray-600 dark:text-gray-300">Something went wrong. Please try again later.</p>
          </div>
        </MainLayout>
      );
    }
    return this.props.children;
  }
}

// Pinned Image Component with Optimized Parallax
const PinnedImage: React.FC<{ features: Feature[]; activeIndex: number }> = ({ features, activeIndex }) => {
  const { ref } = useParallax({ speed: -10 });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="sticky top-20 h-[600px] rounded-2xl overflow-hidden shadow-xl lg:block hidden" aria-hidden="true">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full relative"
        >
          <img
            src={features[activeIndex].image}
            alt={features[activeIndex].title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-start mb-4"
            >
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg mr-4">
                {features[activeIndex].icon}
              </div>
              <h3 className="text-2xl font-bold">{features[activeIndex].title}</h3>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              className="space-y-2"
            >
              {features[activeIndex].benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  className="flex items-start"
                >
                  <Check className="w-5 h-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Why Choose Card Component
const WhyChooseCard: React.FC<{ whyChoose: WhyChoose }> = ({ whyChoose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`p-6 rounded-xl bg-gradient-to-br ${whyChoose.gradient} shadow-md hover:shadow-lg transition-all`}
      role="region"
      aria-labelledby={whyChoose.id}
    >
      <div className="flex items-center mb-4">
        <div className="p-2 bg-white/50 dark:bg-blue-800/50 rounded-lg mr-3 shadow-sm">
          {whyChoose.icon}
        </div>
        <h3 id={whyChoose.id} className="text-xl font-bold text-gray-900 dark:text-white">{whyChoose.title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{whyChoose.description}</p>
    </motion.div>
  );
};

// Use Case Card Component
const UseCaseCard: React.FC<{ useCase: UseCase }> = ({ useCase }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-blue-900/50 rounded-xl p-6 border border-gray-200 dark:border-blue-800 shadow-sm hover:shadow-md transition-all"
      role="region"
      aria-labelledby={useCase.id}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-lg mr-4 shadow-sm">
          {useCase.icon}
        </div>
        <h3 id={useCase.id} className="text-xl font-bold text-gray-900 dark:text-white">{useCase.title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{useCase.description}</p>
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Features:</h4>
        <ul className="space-y-2">
          {useCase.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Ideal For:</h4>
        <div className="flex flex-wrap gap-2">
          {useCase.industries.map((industry, i) => (
            <span key={i} className="px-3 py-1 bg-blue-100/50 dark:bg-blue-800/50 text-blue-800 dark:text-blue-200 rounded-full text-sm">
              {industry}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Flowchart Component with Enhanced Animation
const Flowchart: React.FC<{ steps: FlowchartStep[] }> = ({ steps }) => {
  return (
    <div className="relative" role="list">
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600/30 to-blue-600 dark:from-blue-400/30 dark:to-blue-400" aria-hidden="true" />
      {steps.map((step, i) => (
        <motion.div
          key={step.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: i * 0.1 }}
          className="flex items-start mb-12 last:mb-0 group"
          role="listitem"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold text-lg mr-4 shadow-lg group-hover:scale-110 transition-transform">
            {step.step.split('.')[0]}
          </div>
          <div className="pt-1">
            <h3 id={step.id} className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.step}</h3>
            <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Testimonial Component
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-blue-900/50 rounded-xl p-8 border border-gray-200 dark:border-blue-800 shadow-sm"
      role="region"
      aria-labelledby={testimonial.id}
    >
      <div className="flex items-center mb-6">
        <img
          src={testimonial.avatar}
          alt={`${testimonial.author}'s avatar`}
          className="w-12 h-12 rounded-full object-cover mr-4"
          loading="lazy"
        />
        <div>
          <h4 id={testimonial.id} className="font-bold text-gray-900 dark:text-white">{testimonial.author}</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 italic mb-6">"{testimonial.quote}"</p>
      <div className="flex space-x-1" aria-label="5 star rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" aria-hidden="true" />
        ))}
      </div>
    </motion.div>
  );
};

// Case Study Component
const CaseStudyCard: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-blue-900/50 rounded-xl p-6 border border-gray-200 dark:border-blue-800 shadow-sm hover:shadow-md transition-all"
      role="region"
      aria-labelledby={caseStudy.id}
    >
      <div className="flex items-center mb-4">
        <img
          src={caseStudy.logo}
          alt={`${caseStudy.title} logo`}
          className="w-12 h-12 object-contain mr-4"
          loading="lazy"
        />
        <h3 id={caseStudy.id} className="text-xl font-bold text-gray-900 dark:text-white">{caseStudy.title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Industry:</strong> {caseStudy.industry}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Challenge:</strong> {caseStudy.challenge}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Solution:</strong> {caseStudy.solution}</p>
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Results:</h4>
        <ul className="space-y-2">
          {caseStudy.results.map((result, i) => (
            <li key={i} className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
              <span className="text-gray-700 dark:text-gray-300">{result}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-gray-700 dark:text-gray-300 italic mb-4">"{caseStudy.quote}"</p>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{caseStudy.author}</p>
    </motion.div>
  );
};

// Main IVRServicePage Component
const IVRServicePage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted email:', email);
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  }, [email]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = featureRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { threshold: 0.5, rootMargin: '-100px' }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <ErrorBoundary>
      <ParallaxProvider>
        <MainLayout>
          {/* Hero Section with Enhanced Parallax */}
          <section className="relative min-h-[800px] bg-gradient-to-b from-blue-900 to-blue-700" aria-labelledby="hero-title">
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[size:60px_60px] opacity-10" aria-hidden="true" />
            <Parallax
              style={{ height: '800px' }}
              layers={[
                {
                  speed: -20,
                  children: (
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
                      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
                      <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-purple-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob" />
                    </div>
                  ),
                },
                {
                  speed: -10,
                  expanded: false,
                  children: (
                    <video
                      className="absolute inset-0 w-full h-full object-cover opacity-20"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster="/images/ivr/hero-poster.jpg"
                      aria-hidden="true"
                    >
                      <source src={ivrData.hero.video} type="video/mp4" />
                    </video>
                  ),
                },
              ]}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Container className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-white max-w-4xl px-4 mx-auto"
                  >
                    <motion.div
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring' }}
                      className="inline-block mb-8"
                    >
                      <div className="px-6 py-2 bg-white/10 rounded-full border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
                        ENTERPRISE-GRADE IVR SOLUTIONS
                      </div>
                    </motion.div>
                    <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="block"
                      >
                        Intelligent Voice
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="block text-cyan-300"
                      >
                        Response Systems
                      </motion.span>
                    </h1>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-lg sm:text-xl md:text-2xl text-blue-200 mb-12"
                    >
                      {ivrData.hero.subtitle}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="flex flex-wrap justify-center gap-4"
                    >
                      <Button
                        variant="accent"
                        size="lg"
                        className="bg-cyan-400 hover:bg-cyan-500 text-blue-900 px-8 sm:px-12 shadow-lg hover:shadow-cyan-500/20 transition-all"
                        icon={<ArrowRight size={20} />}
                        onClick={() => window.location.href = '/contact'}
                        aria-label="Get Started with IVR"
                      >
                        {ivrData.hero.cta}
                      </Button>
                      <Button
                        variant="ghost"
                        size="lg"
                        className="text-white border-white/30 hover:bg-white/10 px-8 sm:px-12 shadow-lg hover:shadow-white/10 transition-all"
                        onClick={() => window.location.href = '/demo'}
                        aria-label="Schedule a Demo"
                      >
                        {ivrData.hero.demo}
                      </Button>
                    </motion.div>
                  </motion.div>
                </Container>
              </div>
            </Parallax>
          </section>

          {/* Stats Section */}
          <section id="stats" className="py-16 bg-white dark:bg-blue-950 relative overflow-hidden" aria-labelledby="stats-title">
            <Container>
              <h2 id="stats-title" className="sr-only">IVR Service Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {ivrData.stats.map((stat) => (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                    role="region"
                    aria-labelledby={stat.id}
                  >
                    <div id={stat.id} className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>

          {/* Why Choose IVR Section */}
          <section id="why-choose" className="py-32 bg-gray-50 dark:bg-blue-950/50 relative overflow-hidden" aria-labelledby="why-choose-title">
            <motion.div
              initial={{ y: 0, x: -100 }}
              animate={{ y: -40, x: 100 }}
              transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-10 dark:opacity-5 rounded-full blur-3xl"
              aria-hidden="true"
            />
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
                  transition={{ type: 'spring' }}
                  className="inline-block mb-6"
                >
                  <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white text-sm font-bold tracking-wide shadow-lg">
                    WHY CHOOSE US
                  </div>
                </motion.div>
                <h2 id="why-choose-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Why Our <span className="text-blue-600 dark:text-blue-400">IVR Service</span> Stands Out
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                  Discover the benefits of our cutting-edge IVR solutions designed for modern businesses.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ivrData.whyChoose.map((item) => (
                  <WhyChooseCard key={item.id} whyChoose={item} />
                ))}
              </div>
            </Container>
          </section>

          {/* IVR Features Section with Pinned Image */}
          <section id="features" className="py-32 bg-white dark:bg-blue-950 relative overflow-hidden" aria-labelledby="features-title">
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:60px_60px] opacity-5 dark:opacity-[0.02]" aria-hidden="true" />
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 id="features-title" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Advanced IVR <span className="text-blue-600 dark:text-blue-400">Features</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                  Comprehensive features to streamline your customer interactions and reduce operational costs.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  {ivrData.features.map((feature, i) => (
                    <motion.div
                      key={feature.id}
                      ref={(el) => (featureRefs.current[i] = el)}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ delay: i * 0.1 }}
                      className="mb-16 last:mb-0 group"
                      role="region"
                      aria-labelledby={feature.id}
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-lg mr-4 shadow-sm group-hover:bg-blue-200 dark:group-hover:bg-blue-700 transition-colors">
                          {feature.icon}
                        </div>
                        <h3 id={feature.id} className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, j) => (
                          <li key={j} className="flex items-start">
                            <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                            <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
                <PinnedImage features={ivrData.features} activeIndex={activeIndex} />
              </div>
            </Container>
          </section>

          {/* Advanced Features Section */}
          <section id="advanced-features" className="py-32 bg-gray-50 dark:bg-blue-950/50 relative overflow-hidden" aria-labelledby="advanced-features-title">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 id="advanced-features-title" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Enterprise <span className="text-blue-600 dark:text-blue-400">Capabilities</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                  Powerful features designed for large-scale operations and mission-critical communications.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ivrData.advancedFeatures.map((feature) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-blue-900/50 rounded-xl p-8 border border-gray-200 dark:border-blue-800 shadow-sm hover:shadow-md transition-all"
                    role="region"
                    aria-labelledby={feature.id}
                  >
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-lg mr-4">{feature.icon}</div>
                      <h3 id={feature.id} className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, j) => (
                        <li key={j} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                          <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>

          {/* Use Cases Section */}
          <section id="use-cases" className="py-32 bg-white dark:bg-blue-950 relative overflow-hidden" aria-labelledby="use-cases-title">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 id="use-cases-title" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  IVR <span className="text-blue-600 dark:text-blue-400">Use Cases</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                  Tailored IVR solutions for various industries and business needs.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ivrData.useCases.map((useCase) => (
                  <UseCaseCard key={useCase.id} useCase={useCase} />
                ))}
              </div>
            </Container>
          </section>

          {/* Case Studies Section */}
          <section id="case-studies" className="py-32 bg-gray-50 dark:bg-blue-950/50 relative overflow-hidden" aria-labelledby="case-studies-title">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 id="case-studies-title" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Success <span className="text-blue-600 dark:text-blue-400">Stories</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                  Real-world examples of how our IVR solutions drive business success.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ivrData.caseStudies.map((caseStudy) => (
                  <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
                ))}
              </div>
            </Container>
          </section>

          {/* Flowchart Section */}
          <section id="flowchart" className="py-32 bg-gray-50 dark:bg-blue-950/50 relative overflow-hidden" aria-labelledby="flowchart-title">
            <div className="absolute inset-0 bg-[url('/images/dot-pattern.svg')] bg-[size:20px_20px] opacity-10 dark:opacity-5" aria-hidden="true" />
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 id="flowchart-title" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  How Our <span className="text-blue-600 dark:text-blue-400">IVR</span> Works
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                  A seamless process to deliver exceptional customer experiences.
                </p>
              </motion.div>
              <div className="max-w-2xl mx-auto">
                <Flowchart steps={ivrData.flowchart.steps} />
              </div>
            </Container>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="py-32 bg-gray-50 dark:bg-blue-950/50 relative overflow-hidden" aria-labelledby="testimonials-title">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 id="testimonials-title" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  What Our <span className="text-blue-600 dark:text-blue-400">Clients</span> Say
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                  Trusted by businesses of all sizes across industries.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ivrData.testimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </Container>
          </section>

          {/* CTA Section */}
          <section id="cta" className="py-32 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden" aria-labelledby="cta-title">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" aria-hidden="true" />
              <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[size:100px_100px] opacity-10" aria-hidden="true" />
            </div>
            <Container>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative z-10 text-center max-w-3xl mx-auto"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-6"
                >
                  <div className="px-6 py-2 bg-white/10 rounded-full border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
                    READY TO TRANSFORM YOUR COMMUNICATIONS?
                  </div>
                </motion.div>
                <h2 id="cta-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
                  Elevate Your <span className="text-cyan-300">Customer Experience</span> Today
                </h2>
                <p className="text-lg sm:text-xl text-blue-200 mb-12">
                  Join thousands of businesses using our IVR solutions to enhance customer satisfaction and reduce costs.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    variant="accent"
                    size="lg"
                    className="bg-cyan-400 hover:bg-cyan-500 text-blue-900 px-8 sm:px-12 shadow-lg hover:shadow-cyan-500/20 transition-all"
                    icon={<ArrowRight size={20} />}
                    onClick={() => window.location.href = '/contact'}
                    aria-label="Get Started with IVR"
                  >
                    Get Started Now
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-white border-white/30 hover:bg-white/10 px-8 sm:px-12 shadow-lg hover:shadow-white/10 transition-all"
                    onClick={() => window.location.href = '/demo'}
                    aria-label="Schedule a Demo"
                  >
                    Schedule Demo
                  </Button>
                </div>
              </motion.div>
            </Container>
          </section>

          {/* Newsletter Section */}
          <section id="newsletter" className="py-16 bg-white dark:bg-blue-950 border-t border-gray-200 dark:border-blue-900" aria-labelledby="newsletter-title">
            <Container>
              <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl p-8 md:p-12 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 id="newsletter-title" className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Stay Updated</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Subscribe to our newsletter for the latest IVR features and industry insights.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" aria-label="Newsletter subscription">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-900/50 dark:text-white"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        aria-label="Email address"
                      />
                      <Button
                        type="submit"
                        variant="primary"
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                        aria-label="Subscribe to newsletter"
                      >
                        Subscribe
                      </Button>
                    </form>
                    {isSubmitted && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 text-green-600 dark:text-green-400"
                        role="alert"
                      >
                        Thank you for subscribing!
                      </motion.div>
                    )}
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-pulse" aria-hidden="true" />
                      <div className="absolute inset-4 bg-blue-500/20 rounded-full animate-pulse delay-100" aria-hidden="true" />
                      <div className="absolute inset-8 bg-blue-500/30 rounded-full animate-pulse delay-200" aria-hidden="true" />
                      <div className="absolute inset-12 bg-blue-500/40 rounded-full flex items-center justify-center">
                        <Mail className="w-12 h-12 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </MainLayout>
      </ParallaxProvider>
    </ErrorBoundary>
  );
};

export default IVRServicePage;