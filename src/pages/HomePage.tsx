import { FC } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainLayout from '../components/layout/MainLayout';
import ErrorBoundary from '../components/errors/ErrorBoundary';
import { HeroSection, ServicesSection, StatsSection, FeaturesSection, DeveloperSection, UseCaseCard, NewsletterForm, TestimonialCarousel } from '../components/home/HomePageSections';
import { homeData } from '../data/homeData';
import Container from '../components/ui/Container';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import LogoCarousel from '../components/home/LogoCarousel';
import CaseStudyCard from '../components/home/CaseStudyCard';
import FAQAccordion from '../components/home/FAQAccordion';
import { motion } from 'framer-motion';

const HomePage: FC = () => {

  return (
    <ErrorBoundary>
      <ParallaxProvider>
        <MainLayout>
          <HeroSection />
          <StatsSection />
          <FeaturesSection />
          <ServicesSection />

          {/* CUSTOMER LOGOS */}
          <section id="customers" className="py-32 bg-gray-50 dark:bg-gray-900">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
              >
                <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 dark:text-white mb-6">
                  Trusted by <span className="font-light text-blue-600 dark:text-blue-400">innovative</span> companies
                </h2>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-extralight max-w-2xl mx-auto">
                  Join thousands of businesses accelerating their growth with our platform
                </p>
              </motion.div>
              
              <LogoCarousel logos={homeData.customerLogos} />
            </Container>
          </section>

          {/* CASE STUDIES */}
          <section id="case-studies" className="py-40 bg-white dark:bg-gray-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:80px_80px] opacity-[0.015] dark:opacity-[0.02]" />
            
            <Container className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-24"
              >
                <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 dark:text-white mb-8 leading-tight">
                  Real <span className="font-light text-blue-600 dark:text-blue-400">success</span> stories
                </h2>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-extralight max-w-2xl mx-auto">
                  See how our customers are transforming their businesses
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {homeData.caseStudies.map((caseStudy, i) => (
                  <CaseStudyCard key={i} caseStudy={caseStudy} index={i} />
                ))}
              </div>

              <div className="text-center mt-20">
                <Link to="/case-studies">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-10 py-4 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 font-light text-sm tracking-wide rounded-full transition-all duration-300"
                  >
                    View All Case Studies
                  </Button>
                </Link>
              </div>
            </Container>
          </section>

          {/* USE CASES */}
          <section id="use-cases" className="py-40 bg-gray-50 dark:bg-gray-900">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-24"
              >
                <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 dark:text-white mb-8 leading-tight">
                  Solutions for <span className="font-light text-blue-600 dark:text-blue-400">every team</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-extralight max-w-2xl mx-auto">
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

          {/* TESTIMONIALS */}
          <section id="testimonials" className="py-40 bg-white dark:bg-gray-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] bg-[size:120px_120px] opacity-[0.01] dark:opacity-[0.02]" />

            <Container className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-24"
              >
                <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 dark:text-white mb-8 leading-tight">
                  What our <span className="font-light text-blue-600 dark:text-blue-400">customers</span> say
                </h2>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-extralight max-w-2xl mx-auto">
                  Don't just take our word for it – hear from our satisfied customers
                </p>
              </motion.div>

              <TestimonialCarousel testimonials={homeData.testimonials} />
            </Container>
          </section>

          {/* FAQ */}
          <section id="faq" className="py-40 bg-gray-50 dark:bg-gray-900">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-24"
              >
                <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 dark:text-white mb-8 leading-tight">
                  Frequently asked <span className="font-light text-blue-600 dark:text-blue-400">questions</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-extralight max-w-2xl mx-auto">
                  Everything you need to know about our platform
                </p>
              </motion.div>

              <div className="max-w-3xl mx-auto">
                <FAQAccordion faqs={homeData.faqs} />
              </div>
            </Container>
          </section>

          <DeveloperSection />

          <section className="py-32 bg-white dark:bg-gray-950">
            <Container>
              <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 dark:from-blue-900 dark:via-blue-800 dark:to-blue-900 rounded-3xl lg:rounded-[3rem] p-12 lg:p-16 shadow-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/images/noise-pattern.png')] opacity-5" />
                <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-400/20 dark:bg-blue-700/20 rounded-full blur-3xl" />

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
        </MainLayout>
      </ParallaxProvider>
    </ErrorBoundary>
  );
};

export default HomePage;
