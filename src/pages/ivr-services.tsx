import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
import { Phone, ArrowRight, Mail, ChevronLeft, ShoppingCart, ChevronRight, Check, Zap, Shield, Clock, Users, Headphones, Voicemail, Mic, Menu, MessageSquare, Bell, Calendar, HelpCircle, Database, Globe, PieChart, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { ivrData } from '../data/ivr-data';

// Interfaces (unchanged)
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

// Error Boundary (unchanged)
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
            <p className="text-xl text-gray-500">Something went wrong. Please try again later.</p>
          </div>
        </MainLayout>
      );
    }
    return this.props.children;
  }
}

// Pinned Image Component - Refined Design
const PinnedImage: React.FC<{ features: Feature[]; activeIndex: number }> = ({ features, activeIndex }) => {
  const { ref } = useParallax({ speed: -10 });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="sticky top-20 h-[600px] rounded-lg overflow-hidden lg:block hidden border border-gray-100" aria-hidden="true">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full h-full relative"
        >
          <img
            src={features[activeIndex].image}
            alt={features[activeIndex].title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-start mb-6"
            >
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-lg mr-5 border border-white/20">
                {features[activeIndex].icon}
              </div>
              <h3 className="text-2xl font-light tracking-wide">{features[activeIndex].title}</h3>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, staggerChildren: 0.1 }}
              className="space-y-3"
            >
              {features[activeIndex].benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start text-sm"
                >
                  <Check className="w-4 h-4 text-white mt-0.5 mr-3 flex-shrink-0 opacity-70" aria-hidden="true" />
                  <span className="font-light">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Why Choose Card - Refined Design
const WhyChooseCard: React.FC<{ whyChoose: WhyChoose }> = ({ whyChoose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group p-8 rounded-lg bg-white border border-gray-100 hover:border-blue-900/20 transition-all duration-300"
      role="region"
      aria-labelledby={whyChoose.id}
    >
      <div className="flex items-start mb-5">
        <div className="p-3 bg-blue-50 rounded-lg mr-4 group-hover:bg-blue-100 transition-colors duration-300">
          {whyChoose.icon}
        </div>
      </div>
      <h3 id={whyChoose.id} className="text-xl font-light text-blue-950 mb-3 tracking-wide">{whyChoose.title}</h3>
      <p className="text-gray-600 font-light leading-relaxed">{whyChoose.description}</p>
    </motion.div>
  );
};

// Use Case Card - Refined Design
const UseCaseCard: React.FC<{ useCase: UseCase }> = ({ useCase }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-lg p-8 border border-gray-100 hover:border-blue-900/20 transition-all duration-300"
      role="region"
      aria-labelledby={useCase.id}
    >
      <div className="flex items-start mb-6">
        <div className="p-3 bg-blue-50 rounded-lg mr-4 group-hover:bg-blue-100 transition-colors duration-300">
          {useCase.icon}
        </div>
      </div>
      <h3 id={useCase.id} className="text-xl font-light text-blue-950 mb-4 tracking-wide">{useCase.title}</h3>
      <p className="text-gray-600 font-light leading-relaxed mb-8">{useCase.description}</p>
      <div className="mb-8">
        <h4 className="text-sm font-normal text-blue-950 mb-4 tracking-wider uppercase">Key Features</h4>
        <ul className="space-y-3">
          {useCase.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="w-4 h-4 text-blue-900 mt-1 mr-3 flex-shrink-0 opacity-60" aria-hidden="true" />
              <span className="text-gray-600 font-light text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-normal text-blue-950 mb-4 tracking-wider uppercase">Ideal For</h4>
        <div className="flex flex-wrap gap-2">
          {useCase.industries.map((industry, i) => (
            <span key={i} className="px-4 py-1.5 bg-gray-50 text-gray-700 rounded-full text-xs font-light tracking-wide border border-gray-100">
              {industry}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Flowchart - Refined Design
const Flowchart: React.FC<{ steps: FlowchartStep[] }> = ({ steps }) => {
  return (
    <div className="relative" role="list">
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200" aria-hidden="true" />
      {steps.map((step, i) => (
        <motion.div
          key={step.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
          className="flex items-start mb-16 last:mb-0 group"
          role="listitem"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center font-light text-lg mr-6 relative z-10 group-hover:scale-105 transition-transform duration-300">
            {step.step.split('.')[0]}
          </div>
          <div className="pt-2">
            <h3 id={step.id} className="text-lg font-light text-blue-950 mb-3 tracking-wide">{step.step}</h3>
            <p className="text-gray-600 font-light leading-relaxed">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Testimonial - Refined Design
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-lg p-10 border border-gray-100"
      role="region"
      aria-labelledby={testimonial.id}
    >
      <div className="flex items-center mb-8">
        <img
          src={testimonial.avatar}
          alt={`${testimonial.author}'s avatar`}
          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gray-100"
          loading="lazy"
        />
        <div>
          <h4 id={testimonial.id} className="font-light text-blue-950 tracking-wide">{testimonial.author}</h4>
          <p className="text-gray-500 text-sm font-light">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">"{testimonial.quote}"</p>
      <div className="flex space-x-1" aria-label="5 star rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-4 h-4 text-blue-900 opacity-40" fill="currentColor" aria-hidden="true" />
        ))}
      </div>
    </motion.div>
  );
};

// Case Study - Refined Design
const CaseStudyCard: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-lg p-8 border border-gray-100 hover:border-blue-900/20 transition-all duration-300"
      role="region"
      aria-labelledby={caseStudy.id}
    >
      <div className="flex items-center mb-6">
        <img
          src={caseStudy.logo}
          alt={`${caseStudy.title} logo`}
          className="w-12 h-12 object-contain mr-4"
          loading="lazy"
        />
        <h3 id={caseStudy.id} className="text-xl font-light text-blue-950 tracking-wide">{caseStudy.title}</h3>
      </div>
      <p className="text-gray-600 font-light mb-4"><span className="text-blue-950 font-normal">Industry:</span> {caseStudy.industry}</p>
      <p className="text-gray-600 font-light mb-4"><span className="text-blue-950 font-normal">Challenge:</span> {caseStudy.challenge}</p>
      <p className="text-gray-600 font-light mb-6"><span className="text-blue-950 font-normal">Solution:</span> {caseStudy.solution}</p>
      <div className="mb-8">
        <h4 className="text-sm font-normal text-blue-950 mb-4 tracking-wider uppercase">Results</h4>
        <ul className="space-y-3">
          {caseStudy.results.map((result, i) => (
            <li key={i} className="flex items-start">
              <Check className="w-4 h-4 text-blue-900 mt-1 mr-3 flex-shrink-0 opacity-60" aria-hidden="true" />
              <span className="text-gray-600 font-light text-sm">{result}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-gray-700 font-light italic mb-4 leading-relaxed">"{caseStudy.quote}"</p>
      <p className="text-gray-500 text-sm font-light">{caseStudy.author}</p>
    </motion.div>
  );
};

// Main Component
const IVRServicePage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

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
          {/* Hero Section - Refined */}
          <section className="relative min-h-[90vh] bg-gradient-to-b from-blue-950 to-blue-900 flex items-center" aria-labelledby="hero-title">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
            </div>
            <Container className="relative z-10 py-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center text-white max-w-5xl mx-auto"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-10"
                >
                  <div className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white text-xs font-light tracking-widest uppercase">
                    Enterprise IVR Solutions
                  </div>
                </motion.div>
                <h1 id="hero-title" className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight mb-8 leading-[1.1] tracking-tight">
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
                    className="block text-white/90"
                  >
                    Response Systems
                  </motion.span>
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-lg sm:text-xl md:text-2xl text-white/70 mb-14 font-light max-w-3xl mx-auto leading-relaxed"
                >
                  {ivrData.hero.subtitle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex flex-wrap justify-center gap-5"
                >
                  <Button
                    variant="primary"
                    size="lg"
                    className="bg-white hover:bg-gray-50 text-blue-950 px-10 py-4 rounded-lg font-light tracking-wide transition-all duration-300 border border-white/20"
                    icon={<ArrowRight size={18} />}
                    onClick={() => window.location.href = '/contact'}
                    aria-label="Get Started with IVR"
                  >
                    {ivrData.hero.cta}
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-white border border-white/30 hover:bg-white/10 px-10 py-4 rounded-lg font-light tracking-wide transition-all duration-300"
                    onClick={() => window.location.href = '/demo'}
                    aria-label="Schedule a Demo"
                  >
                    {ivrData.hero.demo}
                  </Button>
                </motion.div>
              </motion.div>
            </Container>
          </section>

          {/* Stats Section - Refined */}
          <section id="stats" className="py-24 bg-white relative overflow-hidden border-b border-gray-100" aria-labelledby="stats-title">
            <Container>
              <h2 id="stats-title" className="sr-only">IVR Service Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                {ivrData.stats.map((stat: any, index: number) => (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                    className="text-center"
                    role="region"
                    aria-labelledby={stat.id}
                  >
                    <div id={stat.id} className="text-5xl md:text-6xl font-extralight text-blue-900 mb-3">
                      {stat.value}
                    </div>
                    <div className="text-gray-500 font-light tracking-wide">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>

          {/* Why Choose Section - Refined */}
          <section id="why-choose" className="py-32 bg-gray-50 relative overflow-hidden" aria-labelledby="why-choose-title">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-20"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-8"
                >
                  <div className="px-6 py-2 bg-blue-900 rounded-full text-white text-xs font-light tracking-widest uppercase">
                    Why Choose Us
                  </div>
                </motion.div>
                <h2 id="why-choose-title" className="text-4xl sm:text-5xl md:text-6xl font-extralight text-blue-950 mb-6 tracking-tight">
                  Why Our <span className="text-blue-900">IVR Service</span> Stands Out
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                  Discover the benefits of our cutting-edge IVR solutions designed for modern businesses.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {ivrData.whyChoose.map((item: WhyChoose) => (
                  <WhyChooseCard key={item.id} whyChoose={item} />
                ))}
              </div>
            </Container>
          </section>

          {/* Features Section - Refined */}
          <section id="features" className="py-32 bg-white relative overflow-hidden border-t border-gray-100" aria-labelledby="features-title">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-20"
              >
                <h2 id="features-title" className="text-4xl sm:text-5xl font-extralight text-blue-950 mb-6 tracking-tight">
                  Advanced IVR <span className="text-blue-900">Features</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                  Comprehensive features to streamline your customer interactions and reduce operational costs.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                  {ivrData.features.map((feature: Feature, i: number) => (
                    <motion.div
                      key={feature.id}
                      ref={(el) => (featureRefs.current[i] = el)}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                      className="mb-20 last:mb-0"
                      role="region"
                      aria-labelledby={feature.id}
                    >
                      <div className="flex items-start mb-6">
                        <div className="p-3 bg-blue-50 rounded-lg mr-5">
                          {feature.icon}
                        </div>
                      </div>
                      <h3 id={feature.id} className="text-2xl sm:text-3xl font-light text-blue-950 mb-4 tracking-wide">{feature.title}</h3>
                      <p className="text-gray-600 font-light leading-relaxed mb-8">{feature.description}</p>
                      <ul className="space-y-3">
                        {feature.benefits.map((benefit: string, j: number) => (
                          <li key={j} className="flex items-start">
                            <Check className="w-4 h-4 text-blue-900 mt-1 mr-3 flex-shrink-0 opacity-60" aria-hidden="true" />
                            <span className="text-gray-600 font-light text-sm">{benefit}</span>
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

          {/* Advanced Features Section - Refined */}
          <section id="advanced-features" className="py-32 bg-gray-50 relative overflow-hidden" aria-labelledby="advanced-features-title">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-20"
              >
                <h2 id="advanced-features-title" className="text-4xl sm:text-5xl font-extralight text-blue-950 mb-6 tracking-tight">
                  Enterprise <span className="text-blue-900">Capabilities</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                  Powerful features designed for large-scale operations and mission-critical communications.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ivrData.advancedFeatures.map((feature: any) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ y: -4 }}
                    className="group bg-white rounded-lg p-10 border border-gray-100 hover:border-blue-900/20 transition-all duration-300"
                    role="region"
                    aria-labelledby={feature.id}
                  >
                    <div className="flex items-start mb-6">
                      <div className="p-3 bg-blue-50 rounded-lg mr-4 group-hover:bg-blue-100 transition-colors duration-300">{feature.icon}</div>
                    </div>
                    <h3 id={feature.id} className="text-xl font-light text-blue-950 mb-4 tracking-wide">{feature.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed mb-8">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit: string, j: number) => (
                        <li key={j} className="flex items-start">
                          <Check className="w-4 h-4 text-blue-900 mt-1 mr-3 flex-shrink-0 opacity-60" aria-hidden="true" />
                          <span className="text-gray-600 font-light text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>

          {/* Use Cases Section - Refined */}
          <section id="use-cases" className="py-32 bg-white relative overflow-hidden border-t border-gray-100" aria-labelledby="use-cases-title">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-20"
              >
                <h2 id="use-cases-title" className="text-4xl sm:text-5xl font-extralight text-blue-950 mb-6 tracking-tight">
                  IVR <span className="text-blue-900">Use Cases</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                  Tailored IVR solutions for various industries and business needs.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ivrData.useCases.map((useCase: UseCase) => (
                  <UseCaseCard key={useCase.id} useCase={useCase} />
                ))}
              </div>
            </Container>
          </section>

          {/* Case Studies Section - Refined */}
          <section id="case-studies" className="py-32 bg-gray-50 relative overflow-hidden" aria-labelledby="case-studies-title">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-20"
              >
                <h2 id="case-studies-title" className="text-4xl sm:text-5xl font-extralight text-blue-950 mb-6 tracking-tight">
                  Success <span className="text-blue-900">Stories</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                  Real-world examples of how our IVR solutions drive business success.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ivrData.caseStudies.map((caseStudy: CaseStudy) => (
                  <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
                ))}
              </div>
            </Container>
          </section>

          {/* Flowchart Section - Refined */}
          <section id="flowchart" className="py-32 bg-white relative overflow-hidden border-t border-gray-100" aria-labelledby="flowchart-title">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-20"
              >
                <h2 id="flowchart-title" className="text-4xl sm:text-5xl font-extralight text-blue-950 mb-6 tracking-tight">
                  How Our <span className="text-blue-900">IVR</span> Works
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                  A seamless process to deliver exceptional customer experiences.
                </p>
              </motion.div>
              <div className="max-w-3xl mx-auto">
                <Flowchart steps={ivrData.flowchart.steps} />
              </div>
            </Container>
          </section>

          {/* Testimonials Section - Refined */}
          <section id="testimonials" className="py-32 bg-gray-50 relative overflow-hidden" aria-labelledby="testimonials-title">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-20"
              >
                <h2 id="testimonials-title" className="text-4xl sm:text-5xl font-extralight text-blue-950 mb-6 tracking-tight">
                  What Our <span className="text-blue-900">Clients</span> Say
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                  Trusted by businesses of all sizes across industries.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ivrData.testimonials.map((testimonial: Testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </Container>
          </section>

          {/* CTA Section - Refined */}
          <section id="cta" className="py-32 bg-gradient-to-b from-blue-950 to-blue-900 relative overflow-hidden" aria-labelledby="cta-title">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
            </div>
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 text-center max-w-4xl mx-auto"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-8"
                >
                  <div className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white text-xs font-light tracking-widest uppercase">
                    Ready to Transform
                  </div>
                </motion.div>
                <h2 id="cta-title" className="text-4xl sm:text-5xl md:text-6xl font-extralight text-white mb-8 tracking-tight">
                  Elevate Your <span className="text-white/90">Customer Experience</span> Today
                </h2>
                <p className="text-lg sm:text-xl text-white/70 mb-14 font-light max-w-2xl mx-auto leading-relaxed">
                  Join thousands of businesses using our IVR solutions to enhance customer satisfaction and reduce costs.
                </p>
                <div className="flex flex-wrap justify-center gap-5">
                  <Button
                    variant="primary"
                    size="lg"
                    className="bg-white hover:bg-gray-50 text-blue-950 px-10 py-4 rounded-lg font-light tracking-wide transition-all duration-300 border border-white/20"
                    icon={<ArrowRight size={18} />}
                    onClick={() => window.location.href = '/contact'}
                    aria-label="Get Started with IVR"
                  >
                    Get Started Now
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-white border border-white/30 hover:bg-white/10 px-10 py-4 rounded-lg font-light tracking-wide transition-all duration-300"
                    onClick={() => window.location.href = '/demo'}
                    aria-label="Schedule a Demo"
                  >
                    Schedule Demo
                  </Button>
                </div>
              </motion.div>
            </Container>
          </section>

          {/* Newsletter Section - Refined */}
          <section id="newsletter" className="py-24 bg-white border-t border-gray-100" aria-labelledby="newsletter-title">
            <Container>
              <div className="max-w-5xl mx-auto bg-gray-50 rounded-lg p-12 md:p-16 border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 id="newsletter-title" className="text-3xl font-light text-blue-950 mb-4 tracking-wide">Stay Updated</h3>
                    <p className="text-gray-600 font-light leading-relaxed mb-8">
                      Subscribe to our newsletter for the latest IVR features and industry insights.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" aria-label="Newsletter subscription">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-grow px-5 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-900 transition-colors duration-300 font-light text-blue-950 bg-white"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        aria-label="Email address"
                      />
                      <Button
                        type="submit"
                        variant="primary"
                        className="bg-blue-900 hover:bg-blue-950 text-white px-8 py-3.5 rounded-lg font-light tracking-wide transition-all duration-300"
                        aria-label="Subscribe to newsletter"
                      >
                        Subscribe
                      </Button>
                    </form>
                    {isSubmitted && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 text-blue-900 font-light"
                        role="alert"
                      >
                        Thank you for subscribing!
                      </motion.div>
                    )}
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 bg-blue-900/5 rounded-full" aria-hidden="true" />
                      <div className="absolute inset-4 bg-blue-900/10 rounded-full" aria-hidden="true" />
                      <div className="absolute inset-8 bg-blue-900/15 rounded-full" aria-hidden="true" />
                      <div className="absolute inset-12 bg-blue-900/20 rounded-full flex items-center justify-center">
                        <Mail className="w-12 h-12 text-blue-900" aria-hidden="true" />
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