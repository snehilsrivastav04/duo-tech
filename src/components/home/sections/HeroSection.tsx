import { FC } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import Container from '../../ui/Container';
import Button from '../../ui/Button';

const HeroSection: FC = () => (
  <section id="hero" className="relative bg-gray-950 text-white min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-grid-white/[0.05]" />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent" />

    <Parallax y={[-20, 20]} tagOuter="div">
      <Container className="relative text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-extralight mb-8 leading-tight tracking-tighter">
            Next-gen cloud solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto mb-12">
            We provide cutting-edge, scalable, and secure cloud infrastructure to power your applications
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button size="lg" variant="solid" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-all transform hover:scale-105">
              Get Started for Free
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800 text-gray-300 font-semibold rounded-full transition-all transform hover:scale-105">
              Request a Demo
            </Button>
          </div>
        </motion.div>
      </Container>
    </Parallax>

    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[300px] bg-blue-500/20 rounded-t-full blur-3xl opacity-50" />
  </section>
);

export default HeroSection;