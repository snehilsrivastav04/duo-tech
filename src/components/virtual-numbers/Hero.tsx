import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Plus, Phone, BarChart3, Users, Clock, MapPin, Shield, Play, Pause, ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const [activeNumber, setActiveNumber] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [callStats, setCallStats] = useState({
    activeCalls: 42,
    totalToday: 1248,
    avgWaitTime: '0:28'
  });

  const heroData = {
    title: 'India Toll-Free Numbers for Business Growth',
    subtitle: 'Establish trusted customer communication with premium 1800 numbers. Build credibility and increase customer engagement across India.',
    features: [
      'Instant 1800 number activation',
      'Pan-India toll-free coverage',
      'Advanced call routing & IVR',
      'Real-time analytics dashboard',
      '99.95% uptime guarantee',
      'No setup fees or contracts'
    ],
    numbers: [
      { 
        number: '1800-267-9001', 
        type: 'Premium Business', 
        features: ['Unlimited calls', 'IVR setup', 'Call recording'],
        popular: true
      },
      { 
        number: '1800-267-9002', 
        type: 'Enterprise', 
        features: ['Multi-level IVR', 'CRM integration', 'Advanced analytics'],
        popular: false
      },
      { 
        number: '1800-267-9003', 
        type: 'Startup', 
        features: ['Basic IVR', '1000 mins free', 'Mobile app'],
        popular: false
      }
    ]
  };

  // Auto-rotate through numbers
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveNumber((prev) => (prev + 1) % heroData.numbers.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPlaying, heroData.numbers.length]);

  // Simulate live call stats
  useEffect(() => {
    const interval = setInterval(() => {
      setCallStats(prev => ({
        activeCalls: Math.max(35, Math.min(55, prev.activeCalls + Math.floor(Math.random() * 3) - 1)),
        totalToday: prev.totalToday + Math.floor(Math.random() * 8),
        avgWaitTime: `0:${Math.max(15, Math.min(45, parseInt(prev.avgWaitTime.split(':')[1]) + Math.floor(Math.random() * 3) - 1))}`
      }));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-950 overflow-hidden">
      {/* Enhanced Geometric Background */}
      <div className="absolute inset-0">
        {/* Main grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Animated orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute rounded-full bg-blue-600/5 dark:bg-blue-400/5 ${
              i % 3 === 0 ? 'w-32 h-32' : i % 2 === 0 ? 'w-20 h-20' : 'w-16 h-16'
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`
            }}
          />
        ))}

        {/* India map outline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/2 right-1/4 transform -translate-y-1/2 w-64 h-64 opacity-[0.02]"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600">
            <path
              d="M20,30 L40,25 L60,35 L70,50 L65,70 L45,80 L25,75 L15,60 Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>
      </div>

      <Container className="h-full flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center py-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:pr-12"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center mb-12 px-6 py-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/30"
            >
             
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 dark:text-white mb-8 leading-tight tracking-tight"
            >
              India{' '}
              <span className="font-normal bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Toll-Free
              </span>
              {' '}Numbers
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl text-gray-600 dark:text-gray-300 mb-16 leading-relaxed max-w-2xl font-light"
            >
              {heroData.subtitle}
            </motion.p>

            {/* Interactive Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16"
            >
              {heroData.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center mr-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm group-hover:shadow-md transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-lg text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 font-light">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-6"
            >
              <Button
                variant="primary"
                size="xl"
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-2xl font-normal text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                icon={<Phone className="w-6 h-6" />}
              >
                Get Your 1800 Number
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 px-12 py-6 rounded-2xl font-normal text-lg transition-all duration-300"
                icon={<ArrowRight className="w-6 h-6" />}
              >
                View Features
              </Button>
            </motion.div>
          </motion.div>

          {/* Interactive Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              {/* Main dashboard container */}
              <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-800">
                {/* Header with controls */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex items-center text-blue-600 dark:text-blue-400">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">India</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                </div>

                {/* Animated Number Showcase */}
                <div className="mb-8">
                  <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-6">Available Numbers</h3>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeNumber}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <div className={`p-6 rounded-2xl border-2 transition-all duration-500 ${
                        heroData.numbers[activeNumber].popular 
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                          : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50'
                      }`}>
                        {heroData.numbers[activeNumber].popular && (
                          <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                            Most Popular
                          </div>
                        )}
                        
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            {heroData.numbers[activeNumber].number}
                          </div>
                          <div className="text-lg text-gray-600 dark:text-gray-400">
                            {heroData.numbers[activeNumber].type}
                          </div>
                        </div>
                        
                        <div className="flex justify-center space-x-2">
                          {heroData.numbers[activeNumber].features.map((feature, i) => (
                            <span key={i} className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Number selector dots */}
                  <div className="flex justify-center space-x-2 mt-6">
                    {heroData.numbers.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setActiveNumber(index);
                          setIsPlaying(false);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === activeNumber 
                            ? 'bg-blue-600 w-8' 
                            : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Live Call Stats */}
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                    Live Call Statistics
                  </h4>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <motion.div 
                      className="text-center p-3 bg-white dark:bg-gray-800 rounded-xl"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Users className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                      <div className="text-2xl font-light text-gray-900 dark:text-white">
                        {callStats.activeCalls}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Active Calls</div>
                    </motion.div>
                    
                    <motion.div 
                      className="text-center p-3 bg-white dark:bg-gray-800 rounded-xl"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Phone className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
                      <div className="text-2xl font-light text-gray-900 dark:text-white">
                        {callStats.totalToday}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Today</div>
                    </motion.div>
                    
                    <motion.div 
                      className="text-center p-3 bg-white dark:bg-gray-800 rounded-xl"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                      <div className="text-2xl font-light text-gray-900 dark:text-white">
                        {callStats.avgWaitTime}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Avg Wait</div>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-blue-600/10 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-600/5 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-16 bg-gradient-to-b from-blue-600 to-transparent rounded-full"
        />
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-sm text-gray-500 dark:text-gray-400 mt-4 font-light tracking-wide"
        >
          Explore Features
        </motion.span>
      </motion.div>
    </section>
  );
};

export default Hero;