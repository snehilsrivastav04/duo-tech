import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { 
  Target, Handshake, Brain, Rocket, Clock, Users, Shield, 
  MessageCircle, ArrowRight, Heart, X
} from 'lucide-react';

// Define types for our data structures
interface Value {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  fullText: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
  detail: string;
  impact: string;
}

interface Stat {
  value: string;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  detail: string;
}

const AboutPage = () => {
  const [selectedValue, setSelectedValue] = useState(0);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const values: Value[] = [
    {
      id: 0,
      icon: <Target className="w-8 h-8" />,
      title: "Purpose-Driven",
      description: "Building meaningful solutions that create real impact",
      fullText: "Every feature, every line of code, every design decision is made with clear intention. We build technology that serves humanity, not the other way around. Our purpose is to create tools that genuinely improve how people communicate and connect."
    },
    {
      id: 1,
      icon: <Handshake className="w-8 h-8" />,
      title: "Partnership Mindset",
      description: "Your success fuels our growth and innovation",
      fullText: "We don't just deliver projects—we build lasting partnerships. When you win, we win. This mindset drives us to go beyond expectations, to truly understand your challenges, and to celebrate your victories as our own."
    },
    {
      id: 2,
      icon: <Brain className="w-8 h-8" />,
      title: "Continuous Evolution",
      description: "Learning, adapting, and staying ahead of the curve",
      fullText: "The digital world never stands still, and neither do we. We invest heavily in learning, experimentation, and staying at the forefront of technology. Our team thrives on curiosity and the pursuit of mastery."
    },
    {
      id: 3,
      icon: <Rocket className="w-8 h-8" />,
      title: "Bold Innovation",
      description: "Challenging conventions to discover better ways",
      fullText: "We take calculated risks to push boundaries and explore what's possible. Innovation isn't just about adopting the latest tech—it's about fundamentally rethinking how we solve problems and create value for our partners."
    }
  ];

  const milestones: Milestone[] = [
    { 
      year: '2010', 
      title: 'The Beginning', 
      description: 'A small team with an ambitious vision',
      detail: 'Founded in a modest office with three passionate individuals and a dream to democratize enterprise communication. We started with SMS services and a commitment to excellence that would define our journey.',
      impact: 'Launched with 5 pilot clients'
    },
    { 
      year: '2013', 
      title: 'Breaking Through', 
      description: 'Our first Fortune 500 partnership',
      detail: 'Secured our breakthrough contract that validated our approach and opened doors to enterprise-scale opportunities. This milestone proved that quality and dedication could compete with established giants.',
      impact: 'Scaled to 50+ enterprise clients'
    },
    { 
      year: '2016', 
      title: 'Platform Evolution', 
      description: 'From SMS to multi-channel powerhouse',
      detail: 'Launched our comprehensive communication platform, expanding from SMS-only to email, voice, push notifications, and more. This transformation positioned us as a complete communication solution provider.',
      impact: 'Processed 100M+ messages monthly'
    },
    { 
      year: '2020', 
      title: 'Global Expansion', 
      description: 'Reaching three continents, staying personal',
      detail: 'Opened offices in London and Singapore, establishing a truly global presence. Despite our growth, we maintained our commitment to personalized service and treating every client like family.',
      impact: 'Serving 500+ partners worldwide'
    },
    { 
      year: '2023', 
      title: 'Innovation Lab', 
      description: 'Investing in tomorrow\'s technologies',
      detail: 'Launched our dedicated R&D division to explore AI, machine learning, blockchain, and next-generation communication technologies. This investment ensures we stay ahead of industry trends.',
      impact: 'Filed 12 technology patents'
    },
    { 
      year: '2025', 
      title: 'Future Forward', 
      description: 'Shaping the next decade of communication',
      detail: 'Today we stand at the forefront of digital communication innovation, powered by a team of over 200 specialists and driven by the same passion that started it all 15 years ago.',
      impact: '99.9% platform reliability'
    }
  ];

  const stats: Stat[] = [
    { 
      value: '15', 
      suffix: 'Years',
      label: 'Of Excellence', 
      icon: <Clock className="w-5 h-5" />,
      detail: 'Consistently delivering innovation since 2010'
    },
    { 
      value: '500', 
      suffix: '+',
      label: 'Global Partners', 
      icon: <Users className="w-5 h-5" />,
      detail: 'Trusted by enterprises across 40+ countries'
    },
    { 
      value: '99.9', 
      suffix: '%',
      label: 'Uptime SLA', 
      icon: <Shield className="w-5 h-5" />,
      detail: 'Industry-leading reliability guarantee'
    },
    { 
      value: '24', 
      suffix: '/7',
      label: 'Support', 
      icon: <MessageCircle className="w-5 h-5" />,
      detail: 'Always here when you need us'
    }
  ];

  return (
    <MainLayout>
      <div className="bg-white text-slate-900">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-6 py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-8 px-4 py-1.5 border border-slate-200 rounded-full text-slate-600 text-sm font-light tracking-wide"
              >
                WELCOME
              </motion.div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-slate-900 mb-8 leading-tight tracking-tight">
                Building the<br />
                <span className="font-normal text-blue-900">future of</span><br />
                connection
              </h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
              >
                For over 15 years, we've crafted communication solutions that feel human, 
                intuitive, and powerful. Technology that brings people closer together.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <button className="px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white font-light rounded transition-colors duration-300">
                  Our Story
                </button>
                <button className="px-8 py-3 border border-slate-300 hover:border-blue-900 text-slate-700 hover:text-blue-900 font-light rounded transition-all duration-300">
                  Meet the Team
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  onMouseEnter={() => setHoveredStat(i)}
                  onMouseLeave={() => setHoveredStat(null)}
                  className="group"
                >
                  <div className="p-8 bg-white border border-slate-200 hover:border-blue-900 rounded transition-all duration-300">
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-slate-400 group-hover:text-blue-900 transition-colors duration-300">
                        {stat.icon}
                      </div>
                    </div>
                    
                    <div className="text-4xl font-light text-slate-900 mb-2">
                      {stat.value}<span className="text-2xl text-slate-600">{stat.suffix}</span>
                    </div>
                    
                    <div className="text-sm text-slate-600 font-light mb-3">
                      {stat.label}
                    </div>
                    
                    <div className={`text-xs text-slate-500 font-light transition-all duration-300 ${
                      hoveredStat === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                      {stat.detail}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <div className="inline-block mb-6 px-4 py-1.5 border border-slate-200 rounded-full text-slate-600 text-sm font-light tracking-wide">
                CORE VALUES
              </div>
              <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
                What Drives Us
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
                The principles that guide every decision we make
              </p>
            </motion.div>

            {/* Value Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {values.map((value, index) => (
                <motion.button
                  key={value.id}
                  onClick={() => setSelectedValue(index)}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`px-6 py-2.5 rounded-full font-light transition-all duration-300 ${
                    selectedValue === index
                      ? 'bg-blue-900 text-white'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {value.title}
                </motion.button>
              ))}
            </div>

            {/* Value Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedValue}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-4xl mx-auto"
              >
                <div className="p-12 bg-slate-50 border border-slate-200 rounded">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="p-4 bg-white border border-slate-200 rounded">
                      <div className="text-blue-900">
                        {values[selectedValue].icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-light text-slate-900 mb-2">
                        {values[selectedValue].title}
                      </h3>
                      <p className="text-slate-600 font-light">
                        {values[selectedValue].description}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-slate-700 font-light leading-relaxed">
                    {values[selectedValue].fullText}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-32 bg-slate-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20 text-center"
            >
              <div className="inline-block mb-6 px-4 py-1.5 border border-slate-200 rounded-full text-slate-600 text-sm font-light tracking-wide">
                OUR JOURNEY
              </div>
              <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
                15 Years of Impact
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
                Key moments that shaped who we are today
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((milestone, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setSelectedMilestone(milestone);
                    setIsPanelOpen(true);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-8 bg-white border border-slate-200 hover:border-blue-900 rounded text-left transition-all duration-300"
                >
                  <div className="text-4xl font-light text-blue-900 mb-4">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-normal text-slate-900 mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-slate-600 font-light mb-4 leading-relaxed">
                    {milestone.description}
                  </p>
                  <div className="flex items-center text-blue-900 text-sm font-light">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <div className="inline-block mb-6 px-4 py-1.5 border border-slate-200 rounded-full text-slate-600 text-sm font-light tracking-wide">
                LEADERSHIP
              </div>
              <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
                Meet Our Founder
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
                The visionary behind DuoTech Solutions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="p-12 bg-slate-50 border border-slate-200 rounded">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-48 h-48 md:w-56 md:h-56">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" 
                        alt="Satyam Sharma" 
                        className="w-full h-full object-cover rounded border border-slate-200"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-3xl font-light text-slate-900 mb-2">
                      Satyam Sharma
                    </h3>
                    <p className="text-blue-900 mb-6 font-light">
                      Founder & Chief Executive Officer
                    </p>
                    <p className="text-slate-700 font-light leading-relaxed mb-6">
                      With over 15 years of pioneering experience in digital communication, 
                      Satyam founded DuoTech in 2010 with a singular mission: to make enterprise-grade 
                      communication tools accessible to everyone. His vision has transformed how 
                      thousands of businesses connect with their customers.
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm text-slate-600 font-light">
                      <div>Tech Visionary</div>
                      <div>People Champion</div>
                      <div>Innovation Driver</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-blue-900 border-t border-blue-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-block mb-8 px-4 py-1.5 border border-blue-700 rounded-full text-sm font-light tracking-wide">
                  LET'S WORK TOGETHER
                </div>
                
                <h2 className="text-5xl md:text-6xl font-light mb-8 leading-tight">
                  Ready to Transform<br />Your Communication?
                </h2>
                
                <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                  Join hundreds of innovative companies who trust DuoTech to power 
                  their most critical communications. Your success story starts here.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="px-8 py-3 bg-white hover:bg-blue-50 text-blue-900 font-light rounded transition-colors duration-300">
                    Schedule a Demo
                  </button>
                  <button className="px-8 py-3 border border-blue-700 hover:border-blue-600 text-white font-light rounded transition-colors duration-300">
                    View Case Studies
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Milestone Detail Panel */}
        <AnimatePresence>
          {isPanelOpen && selectedMilestone && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsPanelOpen(false)}
                className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40"
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="fixed right-0 top-0 bottom-0 w-full md:w-[600px] bg-white border-l border-slate-200 shadow-2xl z-50 overflow-y-auto"
              >
                <div className="p-12">
                  <button
                    onClick={() => setIsPanelOpen(false)}
                    className="mb-8 p-2 hover:bg-slate-50 rounded transition-colors"
                  >
                    <X className="w-6 h-6 text-slate-400" />
                  </button>
                  
                  <div className="text-5xl font-light text-blue-900 mb-8">
                    {selectedMilestone.year}
                  </div>
                  
                  <h3 className="text-3xl font-light text-slate-900 mb-4">
                    {selectedMilestone.title}
                  </h3>
                  
                  <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                    {selectedMilestone.description}
                  </p>
                  
                  <div className="p-8 bg-slate-50 border border-slate-200 rounded mb-8">
                    <p className="text-slate-700 font-light leading-relaxed">
                      {selectedMilestone.detail}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 p-6 bg-slate-50 border border-slate-200 rounded">
                    <div className="p-3 bg-blue-900 rounded">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 font-light mb-1">Impact</div>
                      <div className="text-slate-900 font-light">{selectedMilestone.impact}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </MainLayout>
  );
};

export default AboutPage;