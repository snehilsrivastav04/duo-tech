import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle, Sparkles } from 'lucide-react';
import Container from '../ui/Container';

interface ParallaxSection {
  title: string;
  content: string;
  image: string;
  features: string[];
}

const rcsData = {
  parallaxSections: [
    {
      title: "Branded Messaging",
      content: "Stand out with your logo, colors and verified identity. Unlike SMS, RCS displays your brand prominently so customers immediately recognize your messages.",
      image: "/images/rcs-branded.png",
      features: [
        "Verified business profile",
        "Custom branding colors",
        "Large logo display",
        "Trust indicators"
      ]
    },
    {
      title: "Rich Media Content",
      content: "Send high-quality images, videos, PDFs and more directly in the message thread. No more links to external content - everything appears natively.",
      image: "/images/rcs-media.png",
      features: [
        "3000px wide images",
        "Up to 100MB files",
        "Native video playback",
        "PDF/document sharing"
      ]
    },
    {
      title: "Interactive Experiences",
      content: "Include buttons, quick replies, carousels and suggested actions to drive engagement. Customers can take action without leaving the chat.",
      image: "/images/rcs-interactive.png",
      features: [
        "Clickable call-to-actions",
        "Suggested replies",
        "Product carousels",
        "Calendar integration"
      ]
    },
    {
      title: "Advanced Analytics",
      content: "Track opens, clicks, conversions and ROI with our comprehensive dashboard. See exactly how your messages perform with real-time reporting.",
      image: "/images/rcs-analytics.png",
      features: [
        "Real-time reporting",
        "Conversion tracking",
        "ROI measurement",
        "A/B testing tools"
      ]
    }
  ]
};

const Parallax = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate active index based on scroll progress
  const updateActiveIndex = () => {
    if (!containerRef.current) return;
    
    const containerTop = containerRef.current.getBoundingClientRect().top;
    const containerHeight = containerRef.current.offsetHeight;
    const triggerPoint = containerHeight * 0.4;
    
    let newActiveIndex = 0;
    sectionRefs.current.forEach((section, index) => {
      if (section) {
        const sectionTop = section.getBoundingClientRect().top - containerTop;
        if (sectionTop <= triggerPoint) {
          newActiveIndex = index;
        }
      }
    });
    
    if (newActiveIndex !== activeIndex) {
      setActiveIndex(newActiveIndex);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(updateActiveIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  // Navigation dots handler
  const scrollToSection = (index: number) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <section className="min-h-screen bg-white dark:bg-blue-950 relative overflow-hidden">
      {/* Minimalist background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 dark:bg-blue-900/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 dark:bg-blue-900/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(to right, #1e40af 1px, transparent 1px),
                              linear-gradient(to bottom, #1e40af 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />
        </div>
      </div>

      <Container className="relative">
        <div 
          ref={containerRef}
          className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between py-20 lg:py-0"
        >
          {/* Left column - Scrolling content */}
          <div className="lg:w-1/2 lg:pr-16 mb-16 lg:mb-0">
            <div className="space-y-32 lg:space-y-48">
              {rcsData.parallaxSections.map((section, index) => (
                <div 
                  key={index}
                  ref={el => sectionRefs.current[index] = el}
                  className="parallax-section min-h-[60vh] flex items-center"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className={`relative p-8 bg-transparent rounded-2xl transition-all duration-500 ${
                      index === activeIndex 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-4 opacity-40'
                    }`}
                  >
                    {/* Section indicator line */}
                    <div className={`absolute left-0 top-8 w-1 h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full transition-all duration-500 ${
                      index === activeIndex ? 'opacity-100' : 'opacity-30'
                    }`} />

                    <div className="ml-8">
                      {/* Section number */}
                      <div className="flex items-center mb-8">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-500 ${
                          index === activeIndex 
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30' 
                            : 'border-gray-300 dark:border-gray-700'
                        }`}>
                          <span className={`text-sm font-medium transition-all duration-500 ${
                            index === activeIndex 
                              ? 'text-blue-600 dark:text-blue-400' 
                              : 'text-gray-400 dark:text-gray-600'
                          }`}>
                            {index + 1}
                          </span>
                        </div>
                        <div className={`h-px w-12 ml-4 transition-all duration-500 ${
                          index === activeIndex 
                            ? 'bg-gradient-to-r from-blue-400 to-blue-200' 
                            : 'bg-gray-200 dark:bg-gray-800'
                        }`} />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-light text-gray-900 dark:text-white mb-4 tracking-tight">
                        {section.title}
                      </h3>

                      {/* Content */}
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8 font-light max-w-lg">
                        {section.content}
                      </p>

                      {/* Features list */}
                      <ul className="space-y-3">
                        {section.features.map((feature, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center text-gray-700 dark:text-gray-300"
                          >
                            <CheckCircle className={`w-4 h-4 mr-3 transition-all duration-300 ${
                              index === activeIndex 
                                ? 'text-blue-500' 
                                : 'text-gray-400 dark:text-gray-600'
                            }`} />
                            <span className="font-light">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Sticky image */}
          <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen flex items-center">
            <div className="relative w-full">
              {/* Navigation dots */}
              <div className="absolute left-0 lg:-left-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-6 z-20">
                {rcsData.parallaxSections.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(index)}
                    className="flex items-center justify-center group"
                    aria-label={`Go to section ${index + 1}`}
                  >
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'bg-blue-500 scale-125' 
                        : 'bg-gray-300 dark:bg-gray-700 group-hover:bg-blue-300'
                    }`} />
                    <div className={`h-12 w-px transition-all duration-300 ${
                      index === activeIndex 
                        ? 'bg-gradient-to-b from-blue-500 to-transparent' 
                        : 'bg-gray-200 dark:bg-gray-800'
                    }`} />
                  </button>
                ))}
              </div>

              {/* Image container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  className="relative"
                >
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24">
                    <Sparkles className="w-full h-full text-blue-400/30 animate-pulse" />
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 w-32 h-32">
                    <div className="w-full h-full border-2 border-blue-200/20 rounded-full" />
                  </div>

                  {/* Main image */}
                  <div className="relative overflow-hidden rounded-xl border border-gray-100 dark:border-blue-800/50 shadow-2xl bg-gradient-to-br from-white to-gray-50 dark:from-blue-900/20 dark:to-blue-950/20">
                    {/* Subtle image shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
                    
                    <img 
                      src={rcsData.parallaxSections[activeIndex].image} 
                      alt={rcsData.parallaxSections[activeIndex].title}
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </div>

                  {/* Image caption */}
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                      <span className="text-sm font-light text-blue-600 dark:text-blue-400">
                        {rcsData.parallaxSections[activeIndex].title}
                      </span>
                      <ChevronRight className="w-4 h-4 ml-2 text-blue-400" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block">
          <div className="flex items-center space-x-2 bg-white/80 dark:bg-blue-900/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 dark:border-blue-800">
            {rcsData.parallaxSections.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 bg-blue-500' 
                    : 'bg-gray-300 dark:bg-gray-700 hover:bg-blue-300'
                }`}
                aria-label={`Go to section ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Parallax;