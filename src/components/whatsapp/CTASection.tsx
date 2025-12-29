import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { whatsappColors } from '../../data/whatsapp-data';
import Button from '../ui/Button';
import WhatsAppParticles from './WhatsAppParticles';
import Container from '../ui/Container';

const CTASection = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: whatsappColors.dark }}
    >
      <WhatsAppParticles />
      
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
            <div 
              className="px-6 py-2 rounded-full text-white text-sm font-medium backdrop-blur-sm border border-white/20"
            >
              READY TO GET STARTED?
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Your Customer Engagement with <span className="text-green-300">WhatsApp</span>
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of businesses using our WhatsApp API solutions to automate conversations and boost sales.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="accent"
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 px-12"
              icon={<ArrowRight size={20} />}
            >
              Get Started Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white/30 hover:bg-white/10 px-12"
            >
              Schedule Demo
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTASection;