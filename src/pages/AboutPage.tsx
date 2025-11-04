import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, Handshake, Brain, Rocket, Clock, Users, Shield, 
  MessageCircle, ArrowRight, Sparkles, Heart, X
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

// Define types for our data structures
interface Value {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  fullText: string;
  gradient: string;
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
  color: keyof typeof colorMap;
  detail: string;
}

const colorMap = {
  blue: 'from-blue-500 to-cyan-500',
  violet: 'from-violet-500 to-purple-500',
  emerald: 'from-emerald-500 to-teal-500',
  orange: 'from-orange-500 to-red-500'
} as const;

const AboutPage = () => {
  const [selectedValue, setSelectedValue] = useState(0);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const values: Value[] = [
    {
      id: 0,
      icon: <Target className="w-12 h-12" />,
      title: "Purpose-Driven",
      description: "Building meaningful solutions that create real impact",
      fullText: "Every feature, every line of code, every design decision is made with clear intention. We build technology that serves humanity, not the other way around. Our purpose is to create tools that genuinely improve how people communicate and connect.",
      gradient: "from-blue-500 via-blue-600 to-indigo-600"
    },
    {
      id: 1,
      icon: <Handshake className="w-12 h-12" />,
      title: "Partnership Mindset",
      description: "Your success fuels our growth and innovation",
      fullText: "We don't just deliver projects—we build lasting partnerships. When you win, we win. This mindset drives us to go beyond expectations, to truly understand your challenges, and to celebrate your victories as our own.",
      gradient: "from-violet-500 via-purple-600 to-fuchsia-600"
    },
    {
      id: 2,
      icon: <Brain className="w-12 h-12" />,
      title: "Continuous Evolution",
      description: "Learning, adapting, and staying ahead of the curve",
      fullText: "The digital world never stands still, and neither do we. We invest heavily in learning, experimentation, and staying at the forefront of technology. Our team thrives on curiosity and the pursuit of mastery.",
      gradient: "from-emerald-500 via-teal-600 to-cyan-600"
    },
    {
      id: 3,
      icon: <Rocket className="w-12 h-12" />,
      title: "Bold Innovation",
      description: "Challenging conventions to discover better ways",
      fullText: "We take calculated risks to push boundaries and explore what's possible. Innovation isn't just about adopting the latest tech—it's about fundamentally rethinking how we solve problems and create value for our partners.",
      gradient: "from-orange-500 via-red-600 to-pink-600"
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
      description: 'Investing in tomorrow\'s technologies', // Fixed apostrophe issue
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
      icon: <Clock className="w-6 h-6" />,
      color: 'blue',
      detail: 'Consistently delivering innovation since 2010'
    },
    { 
      value: '500', 
      suffix: '+',
      label: 'Global Partners', 
      icon: <Users className="w-6 h-6" />,
      color: 'violet',
      detail: 'Trusted by enterprises across 40+ countries'
    },
    { 
      value: '99.9', 
      suffix: '%',
      label: 'Uptime SLA', 
      icon: <Shield className="w-6 h-6" />,
      color: 'emerald',
      detail: 'Industry-leading reliability guarantee'
    },
    { 
      value: '24', 
      suffix: '/7',
      label: 'Support', 
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'orange',
      detail: 'Always here when you need us'
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section - Immersive */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <Container className="relative z-10 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center mb-8 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full text-white text-sm border border-white/20 shadow-2xl"
            >
              <Sparkles className="w-4 h-4 mr-2 text-blue-300" />
              <span className="font-light tracking-wide">WELCOME TO OUR UNIVERSE</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-violet-200 mb-8 leading-[0.9] tracking-tighter">
              Building the<br />
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text">future of</span><br />
              connection
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
            >
              For over 15 years, we've crafted communication solutions that feel human, 
              intuitive, and powerful. Technology that brings people closer together.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              <Button
                variant="primary"
                size="lg"
                className="bg-white hover:bg-blue-50 text-blue-950 border-0 font-medium shadow-2xl shadow-blue-500/50"
                icon={<Heart className="w-5 h-5" />}
              >
                Our Story
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10 backdrop-blur-sm font-light"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Meet the Team
              </Button>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-blue-300"
            >
              <div className="w-px h-20 mx-auto bg-gradient-to-b from-blue-400 via-violet-400 to-transparent" />
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Stats Section - Dynamic Cards */}
      <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-950/20 dark:to-slate-950" />
        
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                onMouseEnter={() => setHoveredStat(i)}
                onMouseLeave={() => setHoveredStat(null)}
                className="relative group"
              >
                <div className={`p-8 rounded-3xl bg-gradient-to-br ${colorMap[stat.color]} transition-all duration-500 ${
                  hoveredStat === i ? 'shadow-2xl scale-105' : 'shadow-lg'
                }`}>
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-white/80">
                      {stat.icon}
                    </div>
                    <motion.div
                      animate={{ rotate: hoveredStat === i ? 360 : 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Sparkles className="w-5 h-5 text-white/60" />
                    </motion.div>
                  </div>
                  
                  <div className="text-5xl font-bold text-white mb-2">
                    {stat.value}<span className="text-3xl font-light">{stat.suffix}</span>
                  </div>
                  
                  <div className="text-sm text-white/90 font-medium mb-3">
                    {stat.label}
                  </div>
                  
                  <div className={`text-xs text-white/70 font-light transition-all duration-300 ${
                    hoveredStat === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}>
                    {stat.detail}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values Section - Tabs with Gradient Cards */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center mb-6 px-4 py-2 bg-blue-100 dark:bg-blue-950/50 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium">
              <Heart className="w-4 h-4 mr-2" />
              CORE VALUES
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              What Drives Us
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light">
              The principles that guide every decision we make
            </p>
          </motion.div>

          {/* Value Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {values.map((value, index) => (
              <motion.button
                key={value.id}
                onClick={() => setSelectedValue(index)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedValue === index
                    ? 'bg-gradient-to-r ' + value.gradient + ' text-white shadow-lg'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
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
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto"
            >
              <div className={`relative p-12 rounded-3xl bg-gradient-to-br ${values[selectedValue].gradient} overflow-hidden shadow-2xl`}>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8 text-white">
                    <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                      {values[selectedValue].icon}
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold mb-2">
                        {values[selectedValue].title}
                      </h3>
                      <p className="text-white/90 text-lg font-light">
                        {values[selectedValue].description}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-xl text-white/95 font-light leading-relaxed">
                    {values[selectedValue].fullText}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>

      {/* Journey Timeline */}
      <section className="py-32 bg-slate-900 dark:bg-black text-white relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <div className="inline-flex items-center mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-400 text-sm font-medium">
              <Rocket className="w-4 h-4 mr-2" />
              OUR JOURNEY
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              15 Years of Impact
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
              Key moments that shaped who we are today
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((milestone, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setSelectedMilestone(milestone);
                    setIsPanelOpen(true);
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl text-left hover:border-blue-500 hover:bg-slate-800/80 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-violet-600/0 to-purple-600/0 group-hover:from-blue-600/20 group-hover:via-violet-600/20 group-hover:to-purple-600/20 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <div className="text-5xl font-bold text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-400 font-light mb-4 leading-relaxed">
                      {milestone.description}
                    </p>
                    <div className="flex items-center text-blue-400 text-sm font-medium">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section - Feature Card */}
      <section className="py-32 bg-gradient-to-b from-white to-blue-50 dark:from-slate-950 dark:to-blue-950/20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center mb-6 px-4 py-2 bg-blue-100 dark:bg-blue-950/50 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium">
              <Users className="w-4 h-4 mr-2" />
              LEADERSHIP
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              Meet Our Founder
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light">
              The visionary behind DuoTech Solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative p-12 md:p-16 bg-gradient-to-br from-slate-900 to-blue-900 dark:from-slate-950 dark:to-blue-950 rounded-3xl overflow-hidden shadow-2xl">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl" />
              
              <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-shrink-0">
                  <div className="relative w-48 h-48 md:w-56 md:h-56">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full blur-xl opacity-50" />
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" 
                      alt="Satyam Sharma" 
                      className="relative w-full h-full object-cover rounded-full border-4 border-white/20"
                    />
                  </div>
                </div>
                
                <div className="flex-1 text-white">
                  <h3 className="text-4xl font-bold mb-2">
                    Satyam Sharma
                  </h3>
                  <p className="text-blue-300 text-lg mb-6 font-light">
                    Founder & Chief Executive Officer
                  </p>
                  <p className="text-white/90 text-lg mb-6 font-light leading-relaxed">
                    With over 15 years of pioneering experience in digital communication, 
                    Satyam founded DuoTech in 2010 with a singular mission: to make enterprise-grade 
                    communication tools accessible to everyone. His vision has transformed how 
                    thousands of businesses connect with their customers.
                  </p>
                  <div className="flex flex-wrap gap-6 text-sm text-white/80">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-400" />
                      <span>Tech Visionary</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-violet-400" />
                      <span>People Champion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Rocket className="w-4 h-4 text-purple-400" />
                      <span>Innovation Driver</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA Section - Bold */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-violet-600 to-purple-600 dark:from-blue-900 dark:via-violet-900 dark:to-purple-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center mb-8 px-6 py-3 bg-white/20 backdrop-blur-xl rounded-full text-sm font-medium border border-white/30"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                LET'S CREATE MAGIC TOGETHER
              </motion.div>
              
              <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Ready to Transform<br />Your Communication?
              </h2>
              
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                Join hundreds of innovative companies who trust DuoTech to power 
                their most critical communications. Your success story starts here.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-blue-600 border-0 font-semibold shadow-2xl text-lg px-8 py-4"
                  icon={<MessageCircle className="w-5 h-5" />}
                >
                  Schedule a Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white/40 hover:bg-white/10 backdrop-blur-sm font-medium text-lg px-8 py-4"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  View Case Studies
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
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
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-full md:w-[600px] bg-slate-900 dark:bg-black border-l border-slate-700 dark:border-slate-800 shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-8 md:p-12">
                <button
                  onClick={() => setIsPanelOpen(false)}
                  className="mb-8 p-3 hover:bg-slate-800 rounded-xl transition-colors group"
                >
                  <X className="w-6 h-6 text-slate-400 group-hover:text-white" />
                </button>
                
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-8">
                  {selectedMilestone.year}
                </div>
                
                <h3 className="text-4xl font-bold text-white mb-4">
                  {selectedMilestone.title}
                </h3>
                
                <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
                  {selectedMilestone.description}
                </p>
                
                <div className="p-8 bg-gradient-to-br from-blue-600/20 to-violet-600/20 rounded-2xl border border-blue-500/30 mb-8 backdrop-blur-sm">
                  <p className="text-slate-200 font-light leading-relaxed text-lg">
                    {selectedMilestone.detail}
                  </p>
                </div>

                <div className="flex items-center gap-3 p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Impact</div>
                    <div className="text-lg font-semibold text-white">{selectedMilestone.impact}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </MainLayout>
  );
};

export default AboutPage;