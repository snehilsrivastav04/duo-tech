import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, GitBranch, Server, Users, Clock, ArrowRight, Check } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const whyChooseUsData = {
  reasons: [
    {
      icon: Shield,
      title: "Trusted Technology",
      description: "Enterprise-grade security with end-to-end encryption and compliance with global standards.",
      accentColor: "border-blue-500"
    },
    {
      icon: Zap,
      title: "Fast Response Times",
      description: "Lightning-fast performance with 99.9% uptime guarantee and optimized infrastructure.",
      accentColor: "border-cyan-500"
    },
    {
      icon: GitBranch,
      title: "Customizable for Your Needs",
      description: "Seamless integration with your existing tools. We adapt to your workflow.",
      accentColor: "border-indigo-500"
    },
    {
      icon: Server,
      title: "Global Infrastructure",
      description: "150+ countries with local data centers for low latency performance.",
      accentColor: "border-blue-600"
    },
    {
      icon: Users,
      title: "Commitment to Quality",
      description: "Dedicated support team available 24/7. We're committed to your success.",
      accentColor: "border-blue-400"
    },
    {
      icon: Clock,
      title: "Innovation First",
      description: "Constantly evolving our platform with cutting-edge technologies.",
      accentColor: "border-blue-300"
    }
  ],
  mission: {
    title: "Our Mission",
    description1: "We democratize powerful business tools that were previously only available to large enterprises. We believe every business deserves world-class technology.",
    description2: "What excites us is seeing our customers transform their businesses. That's why we're committed to continuous innovation and exceptional support.",
    stat: "Trusted by 10,000+ businesses worldwide"
  },
  problems: [
    "Complex integrations that take months to implement",
    "High costs that exclude small businesses",
    "Poor customer support when you need it most",
    "Limited scalability as your business grows"
  ]
};

const WhyChooseUs = () => {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 border-r border-b border-blue-100 dark:border-blue-800/30 rounded-br-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-l border-t border-blue-100 dark:border-blue-800/30 rounded-tl-3xl" />
      </div>

      <Container className="relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wider uppercase">
              Why Choose Us
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
            What Makes Us
            <span className="block mt-2 font-normal">Distinctly Different</span>
          </h2>
          
          <div className="w-24 h-px bg-blue-500 mx-auto mb-8" />
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            We're not just another tech company. We're your partners in digital transformation.
          </p>
        </motion.div>

        {/* Reasons Grid - Minimalist Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {whyChooseUsData.reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: i * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                className="relative group"
              >
                {/* Subtle geometric border */}
                <div className={`absolute inset-0 border-l ${item.accentColor} opacity-20 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative pl-8 pt-8 pb-8">
                  {/* Minimal icon treatment */}
                  <div className="mb-8">
                    <div className="inline-flex items-center justify-center">
                      <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>

                  {/* Typography-focused content */}
                  <h3 className="text-xl font-normal text-gray-900 dark:text-white mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm font-light text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Subtle hover indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: 32 }}
                    className="absolute bottom-0 left-8 h-px bg-blue-500 dark:bg-blue-400 transition-all duration-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mission & Problem Statement Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <div className="w-16 h-px bg-blue-500 mb-6" />
              <h3 className="text-3xl font-light text-gray-900 dark:text-white mb-6">
                {whyChooseUsData.mission.title}
              </h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                {whyChooseUsData.mission.description1}
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                {whyChooseUsData.mission.description2}
              </p>
            </div>

            {/* Stat with minimalist styling */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full border border-blue-200 dark:border-blue-800 flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-lg font-normal text-gray-900 dark:text-white">
                  {whyChooseUsData.mission.stat}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Problems We Solve */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <div className="w-16 h-px bg-blue-400 mb-6" />
              <h4 className="text-2xl font-light text-gray-900 dark:text-white">
                What We're Solving
              </h4>
            </div>
            
            <div className="space-y-6">
              {whyChooseUsData.problems.map((problem, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1 mr-4">
                    <div className="w-6 h-6 rounded-full border border-blue-200 dark:border-blue-800 flex items-center justify-center">
                      <Check className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 font-light">
                    {problem}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Geometric divider */}
            <div className="pt-8">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-700 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Minimal CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center">
            <Button
              variant="primary"
              size="lg"
              className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300 px-12 py-4"
              icon={<ArrowRight className="w-5 h-5 ml-2" />}
            >
              Join Our Mission
            </Button>
            
            <p className="mt-8 text-sm text-gray-500 dark:text-gray-500 font-light">
              Ready to transform your business?{' '}
              <a 
                href="#" 
                className="text-blue-600 dark:text-blue-400 font-normal hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
              >
                Start your free trial today
              </a>
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;