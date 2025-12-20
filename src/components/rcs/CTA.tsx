import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { Link } from 'react-router-dom';

const CTA = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
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
          <Link to="/contact">
            <Button
              variant="accent"
              size="lg"
              className="bg-cyan-400 hover:bg-cyan-500 text-blue-900 px-12"
              icon={<ArrowRight size={20} />}
              aria-label="Get started with RCS messaging now"
            >
              Get Started Now
            </Button>
            </Link>
            <Link to="/contact">
            <Button
              variant="ghost"
              size="lg"
              className="text-white border-white/30 hover:bg-white/10 px-12"
              aria-label="Schedule a demo for RCS messaging"
            >
              Schedule Demo
            </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default CTA;