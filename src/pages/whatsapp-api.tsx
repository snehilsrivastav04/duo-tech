
import React from 'react';
import { motion } from 'framer-motion';
import { whatsappData, whatsappColors } from '../data/whatsapp-data';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Hero from '../components/whatsapp/Hero';
import CapabilityGrid from '../components/whatsapp/CapabilityGrid';
import UseCasesTabs from '../components/whatsapp/UseCasesTabs';
import IntegrationGrid from '../components/whatsapp/IntegrationGrid';
import HowItWorks from '../components/whatsapp/HowItWorks';
import Metrics from '../components/whatsapp/Metrics';
import FeaturesChecklist from '../components/whatsapp/FeaturesChecklist';
import WhatsAppTestimonials from '../components/whatsapp/WhatsAppTestimonials';
import Pricing from '../components/whatsapp/Pricing';
import FAQAccordion from '../components/home/FAQAccordion';
import CTASection from '../components/whatsapp/CTASection';

const WhatsAppAPIPage = () => {
  return (
    <MainLayout>
      <Hero />
      
      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <motion.div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What You Can Do With <span className="text-green-500">WhatsApp API</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Powerful features to automate customer conversations at scale
            </p>
          </motion.div>
          
          <CapabilityGrid />
        </Container>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Supported <span className="text-green-500">Use Cases</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tailored solutions for your industry needs
            </p>
          </motion.div>
          
          <UseCasesTabs />
        </Container>
      </section>
      
      {/* Integrations Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Seamless <span className="text-green-500">Integrations</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Connect with your existing tech stack in minutes
            </p>
          </motion.div>
          
          <IntegrationGrid />
        </Container>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It <span className="text-green-500">Works</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get started with WhatsApp Business API in 5 simple steps
            </p>
          </motion.div>
          
          <HowItWorks />
        </Container>
      </section>
      
      {/* Metrics Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Results That <span className="text-green-500">Matter</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Proven metrics from our existing customers
            </p>
          </motion.div>
          
          <Metrics />
        </Container>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete <span className="text-green-500">Features</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need for successful WhatsApp automation
            </p>
          </motion.div>
          
          <FeaturesChecklist />
        </Container>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our <span className="text-green-500">Clients</span> Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </motion.div>
          
          <WhatsAppTestimonials />
        </Container>
      </section>
      
      {/* Pricing Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple, <span className="text-green-500">Transparent</span> Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Plans that scale with your business needs
            </p>
          </motion.div>
          
          <Pricing />
        </Container>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked <span className="text-green-500">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about WhatsApp Business API
            </p>
          </motion.div>
          
          <FAQAccordion faqs={whatsappData.faqs} />
        </Container>
      </section>
      
      <CTASection />
    </MainLayout>
  );
};

export default WhatsAppAPIPage;
