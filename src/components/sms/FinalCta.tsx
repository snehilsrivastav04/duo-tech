
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const FinalCta = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section className="py-32 bg-white dark:bg-gray-900">
      <Container>
        <motion.div
          style={{ scale }}
          className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 shadow-2xl overflow-hidden relative text-center"
        >
          <div className="absolute inset-0 bg-[url('/images/noise-pattern.png')] opacity-10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Boost Your Business with SMS?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Start sending messages in minutes with our reliable SMS gateway platform.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="accent"
                size="lg"
                className="bg-blue text-blue-700 hover:bg-gray-100 px-8"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white/10 px-8"
                icon={<MessageSquare className="w-5 h-5" />}
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FinalCta;
