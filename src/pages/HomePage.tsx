import { FC } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Mail,
  Zap, Shield, Server, Globe2
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
  ServiceCard
} from './HomePageSections';
import ErrorBoundary from '../components/errors/ErrorBoundary';


const HomePage: FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

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
                  >
                    Explore All Services
                    <ArrowRight className="w-5 h-5" />
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

              <TestimonialCarousel testimonials={homeData.testimonials} />
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
                  >
                    Get Started Now
                    <ArrowRight size={20} />
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
