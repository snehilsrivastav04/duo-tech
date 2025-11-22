import { FC } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Mail,
  Zap, Shield, Server, Globe
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import LogoCarousel from '../components/home/LogoCarousel';
import CaseStudyCard from '../components/home/CaseStudyCard';
import FAQAccordion from '../components/home/FAQAccordion';
import { homeData } from '../data/homeData.tsx';
import {
  TestimonialCarousel,
  NewsletterForm,
  UseCaseCard,
  ServiceCard,
  DeveloperSection
} from '../pages/HomePageSections';
import ErrorBoundary from '../components/errors/ErrorBoundary';


const HomePage: FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.02]);

  return (
    <ErrorBoundary>
      <ParallaxProvider>
        <MainLayout>
          {/* HERO – REFINED MINIMALIST DESIGN */}
          <section className="relative min-h-screen bg-white dark:bg-gray-950 overflow-hidden flex items-center justify-center">
  {/* Ultra-subtle paper texture */}
  <div
    className="absolute inset-0 opacity-[0.008]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50 L100 0 L100 100 L0 100 L0 0 Z' fill='none' stroke='%23000' stroke-width='0.5' stroke-opacity='0.05'/%3E%3C/svg%3E")`,
    }}
  />

  {/* Minimal geometric elements */}
  <motion.div
    animate={{ 
      rotate: [0, 180, 360],
      scale: [1, 1.02, 1]
    }}
    transition={{ 
      duration: 20, 
      repeat: Infinity, 
      ease: "linear" 
    }}
    className="absolute top-1/4 left-1/4 w-96 h-96 border border-gray-100 dark:border-gray-800 rounded-full opacity-20"
  />
  
  <motion.div
    animate={{ 
      rotate: [360, 180, 0],
      scale: [1.02, 1, 1.02]
    }}
    transition={{ 
      duration: 25, 
      repeat: Infinity, 
      ease: "linear" 
    }}
    className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-gray-100 dark:border-gray-800 rounded-full opacity-15"
  />

  <Container className="relative z-10 px-8">
    <div className="max-w-4xl mx-auto text-center">

      {/* Sophisticated badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="inline-flex items-center gap-3 px-6 py-3 mb-20 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full text-gray-600 dark:text-gray-400 text-sm font-light tracking-wider"
      >
        <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
        <span>Enterprise Communication Platform</span>
      </motion.div>

      {/* Elegant typography */}
      <motion.h1
        className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 dark:text-white leading-[1.15] tracking-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <motion.span
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="block"
        >
          Build <span className="text-blue-600 dark:text-blue-400">connections</span>
        </motion.span>
        <motion.span
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="block mt-4"
        >
          that <span className="text-blue-600 dark:text-blue-400">scale</span> your vision
        </motion.span>
      </motion.h1>

      {/* Refined sub-headline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="mt-16 text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed"
      >
        Real-time SMS, WhatsApp, Voice & Email – secure, compliant, and engineered for global scale
      </motion.p>

      {/* Sophisticated CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.45 }}
        className="mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <Link to="/get-started">
          <Button className="group px-12 py-4 bg-blue-600 dark:bg-blue-500 text-white font-normal text-sm tracking-wide rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 flex items-center gap-3 shadow-sm hover:shadow-md">
            Start Free Trial
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </Link>

        <Link to="/demo">
          <Button className="px-12 py-4 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-normal text-sm tracking-wide rounded-lg bg-transparent hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
            Schedule Demo
          </Button>
        </Link>
      </motion.div>

      {/* Minimal trust indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-24 flex flex-wrap justify-center items-center gap-x-12 gap-y-5 text-sm text-gray-500 dark:text-gray-500 font-light"
      >
        <div className="flex items-center gap-3">
          <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>GDPR & ISO 27001</span>
        </div>
        <div className="w-px h-4 bg-gray-300 dark:bg-gray-700" />
        <div className="flex items-center gap-3">
          <Server className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>99.99% Uptime</span>
        </div>
        <div className="w-px h-4 bg-gray-300 dark:bg-gray-700" />
        <div className="flex items-center gap-3">
          <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>150+ Countries</span>
        </div>
      </motion.div>
    </div>
  </Container>

  {/* Elegant scroll indicator */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.9 }}
    className="absolute bottom-8 left-1/2 -translate-x-1/2"
  >
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="flex flex-col items-center text-xs text-gray-400 dark:text-gray-600 font-light tracking-widest uppercase"
    >
      <span>Explore</span>
      <ArrowRight className="w-4 h-4 mt-3 rotate-90" />
    </motion.div>
  </motion.div>
</section>

          {/* Services Section - Refined */}
          <section id="services" className="py-40 bg-gray-50 relative overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white opacity-50" />

            <Container className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-24"
              >
                <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-8 leading-tight">
                  Powerful solutions for
                  <br />
                  <span className="font-light text-blue-800">your business</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 font-extralight max-w-2xl mx-auto leading-relaxed">
                  Cutting-edge services designed to propel your business forward
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {homeData.services.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: i * 0.08, duration: 0.6 }}
                  >
                    <ServiceCard service={service} />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-20 text-center"
              >
                <Link to="/services">
                  <Button
                    variant="primary"
                    size="lg"
                    className="px-10 py-4 bg-blue-800 hover:bg-blue-900 text-white font-light text-sm tracking-wide rounded-full shadow-sm hover:shadow-md transition-all duration-300 inline-flex items-center gap-2.5"
                  >
                    Explore All Services
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <p className="mt-6 text-sm text-gray-500 font-light">
                  Not sure what you need?{' '}
                  <Link to="/contact" className="text-blue-800 hover:text-blue-900 transition-colors duration-200 border-b border-blue-200 hover:border-blue-300">
                    Get a free consultation
                  </Link>
                </p>
              </motion.div>
            </Container>
          </section>

          {/* Customer Logos - Refined */}
          <section id="customers" className="py-32 bg-white">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
              >
                <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6">
                  Trusted by <span className="font-light text-blue-800">innovative</span> companies
                </h2>
                <p className="text-lg md:text-xl text-gray-600 font-extralight max-w-2xl mx-auto">
                  Join thousands of businesses accelerating their growth with our platform
                </p>
              </motion.div>
              
              <LogoCarousel logos={homeData.customerLogos} />
            </Container>
          </section>

          {/* Case Studies - Refined */}
          <section id="case-studies" className="py-40 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:80px_80px] opacity-[0.015]" />
            
            <Container className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-24"
              >
                <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-8 leading-tight">
                  Real <span className="font-light text-blue-800">success</span> stories
                </h2>
                <p className="text-lg md:text-xl text-gray-600 font-extralight max-w-2xl mx-auto">
                  See how our customers are transforming their businesses
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {homeData.caseStudies.map((caseStudy, i) => (
                  <CaseStudyCard key={i} caseStudy={caseStudy} index={i} />
                ))}
              </div>

              <div className="text-center mt-20">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-10 py-4 border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-white font-light text-sm tracking-wide rounded-full transition-all duration-300"
                >
                  View All Case Studies
                </Button>
              </div>
            </Container>
          </section>

          {/* Use Cases - Refined */}
          <section id="use-cases" className="py-40 bg-white">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-24"
              >
                <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-8 leading-tight">
                  Solutions for <span className="font-light text-blue-800">every team</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 font-extralight max-w-2xl mx-auto">
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

          {/* Testimonials - Refined */}
          <section
            id="testimonials"
            className="py-40 bg-gray-50 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] bg-[size:120px_120px] opacity-[0.01]" />

            <Container className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-24"
              >
                <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-8 leading-tight">
                  What our <span className="font-light text-blue-800">customers</span> say
                </h2>
                <p className="text-lg md:text-xl text-gray-600 font-extralight max-w-2xl mx-auto">
                  Don't just take our word for it – hear from our satisfied customers
                </p>
              </motion.div>

              <TestimonialCarousel testimonials={homeData.testimonials} />
            </Container>
          </section>

          {/* FAQ - Refined */}
          <section id="faq" className="py-40 bg-white">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-24"
              >
                <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-8 leading-tight">
                  Frequently asked <span className="font-light text-blue-800">questions</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 font-extralight max-w-2xl mx-auto">
                  Everything you need to know about our platform
                </p>
              </motion.div>

              <div className="max-w-3xl mx-auto">
                <FAQAccordion faqs={homeData.faqs} />
              </div>
            </Container>
          </section>

          <DeveloperSection />

          {/* Newsletter - Refined */}
          <section className="py-32 bg-gray-50">
            <Container>
              <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-3xl lg:rounded-[3rem] p-12 lg:p-16 shadow-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/images/noise-pattern.png')] opacity-5" />
                <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-700/20 rounded-full blur-3xl" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-4xl lg:text-5xl font-extralight text-white mb-6 leading-tight">
                      Stay <span className="font-light">updated</span>
                    </h2>
                    <p className="text-lg text-blue-100/90 font-light mb-8 leading-relaxed">
                      Subscribe to our newsletter for product updates, technical guides, and industry insights
                    </p>
                    <div className="flex items-center gap-3">
                      <Mail className="w-6 h-6 text-blue-200/80" />
                      <span className="text-sm text-blue-200/80 font-light">
                        No spam, ever. Unsubscribe anytime.
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <NewsletterForm />
                  </motion.div>
                </div>
              </div>
            </Container>
          </section>

          {/* Final CTA - Refined */}
          <section className="py-40 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-700/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-3xl" />
              <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[size:100px_100px] opacity-5" />
            </div>

            <Container>
              <motion.div
                style={{ scale }}
                className="relative z-10 text-center max-w-4xl mx-auto"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-10"
                >
                  <div className="px-6 py-2.5 bg-white/5 rounded-full border border-white/10 text-white text-xs font-light tracking-[0.2em] uppercase backdrop-blur-sm">
                    Ready to get started?
                  </div>
                </motion.div>

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-8 leading-tight">
                  Transform your <span className="font-light text-blue-200">business</span> today
                </h2>
                <p className="text-xl md:text-2xl text-blue-100/90 font-extralight mb-16 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of businesses using our platform to scale their operations
                  and deliver exceptional experiences
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                  <Button
                    variant="accent"
                    size="lg"
                    className="px-12 py-4 bg-blue-100 hover:bg-white text-blue-900 font-light text-sm tracking-wide rounded-full shadow-sm hover:shadow-md transition-all duration-300 inline-flex items-center gap-2.5"
                  >
                    Get Started Now
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="px-12 py-4 text-white border border-white/20 hover:bg-white/5 font-light text-sm tracking-wide rounded-full backdrop-blur-sm transition-all duration-300"
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