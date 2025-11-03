import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, Handshake, Brain, Rocket, Clock, Users, Shield, 
  MessageCircle, ArrowRight, Sparkles, Heart, X
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const AboutPage = () => {
  const [selectedValue, setSelectedValue] = useState(0);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const values = [
    {
      id: 0,
      icon: <Target className="w-12 h-12" />,
      title: "Purpose-Driven",
      description: "We build solutions that solve real problems for real people",
      fullText: "We build solutions that solve real problems for real people, not just because we can. Every feature, every line of code, every design decision is made with intention and purpose.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
      id: 1,
      icon: <Handshake className="w-12 h-12" />,
      title: "Relationships First",
      description: "Our clients become our partners in success",
      fullText: "Our clients become our partners. Their success is how we measure our own. We believe in building long-term relationships based on trust, transparency, and mutual growth.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
    },
    {
      id: 2,
      icon: <Brain className="w-12 h-12" />,
      title: "Always Learning",
      description: "We stay curious and continuously evolve our craft",
      fullText: "We stay curious, embrace change, and continuously evolve our craft. The digital landscape never stops moving, and neither do we. Learning is embedded in our culture.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
    },
    {
      id: 3,
      icon: <Rocket className="w-12 h-12" />,
      title: "Bold Innovation",
      description: "We take calculated risks to push boundaries",
      fullText: "We take calculated risks to push boundaries and explore what's possible. Innovation isn't just about technology—it's about finding better ways to solve problems and create value.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    }
  ];

  const milestones = [
    { 
      year: '2010', 
      title: 'Humble Beginnings', 
      description: 'Founded as an SMS service provider with a big vision',
      detail: 'Started in a small office with just three people and a mission to make enterprise communication accessible to everyone.'
    },
    { 
      year: '2013', 
      title: 'First Major Client', 
      description: 'Landed our first enterprise client, proving our concept',
      detail: 'Secured our first Fortune 500 client, validating our approach and setting the foundation for sustainable growth.'
    },
    { 
      year: '2016', 
      title: 'Platform Expansion', 
      description: 'Launched our comprehensive communication platform',
      detail: 'Evolved from SMS-only to a full-featured multi-channel communication platform, expanding our service offerings significantly.'
    },
    { 
      year: '2020', 
      title: 'Global Reach', 
      description: 'Expanded to serve clients across 3 continents',
      detail: 'Opened offices in Europe and Asia, establishing a truly global presence while maintaining our commitment to personalized service.'
    },
    { 
      year: '2023', 
      title: 'Innovation Lab', 
      description: 'Established our R&D division for future technologies',
      detail: 'Launched our dedicated research and development division to explore AI, machine learning, and next-generation communication technologies.'
    }
  ];

  const stats = [
    { value: '13+', label: 'Years of craft', icon: <Clock className="w-6 h-6" /> },
    { value: '500+', label: 'Partners', icon: <Users className="w-6 h-6" /> },
    { value: '99.9%', label: 'Reliability', icon: <Shield className="w-6 h-6" /> },
    { value: '24/7', label: 'Support', icon: <MessageCircle className="w-6 h-6" /> }
  ];

  return (
    <MainLayout>
      {/* Hero Section - Minimal */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-black" />
        
        <Container className="relative z-10 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center mb-8 px-4 py-2 bg-blue-50 dark:bg-blue-950/50 rounded-full text-blue-600 dark:text-blue-400 text-sm border border-blue-200 dark:border-blue-900">
              <Sparkles className="w-4 h-4 mr-2" />
              WELCOME TO OUR STORY
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extralight text-black dark:text-white mb-8 leading-[0.95] tracking-tighter">
              We build<br />
              <span className="font-light text-blue-600 dark:text-blue-400">human-centered</span><br />
              digital experiences
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 font-light">
              Since 2010, we've been crafting communication solutions that feel personal, 
              not robotic. Technology should connect people, not just devices.
            </p>
            
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-blue-400 dark:text-blue-600"
            >
              <div className="w-px h-16 mx-auto bg-gradient-to-b from-blue-400 dark:from-blue-600 to-transparent" />
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Stats Section - Minimalist */}
      <section className="py-20 border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4 text-blue-600 dark:text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-4xl font-extralight text-black dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-light">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values Section - Split Screen */}
      <section className="min-h-screen py-32 bg-white dark:bg-black">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl md:text-6xl font-extralight text-black dark:text-white mb-6 tracking-tight">
              Our Beliefs
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
              What guides everything we do
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Side - Typography List */}
            <div className="space-y-8">
              {values.map((value, index) => (
                <motion.button
                  key={value.id}
                  onClick={() => setSelectedValue(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`w-full text-left p-8 border-l-2 transition-all duration-500 ${
                    selectedValue === index
                      ? 'border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-blue-950/20'
                      : 'border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-600'
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <div className={`transition-colors duration-500 ${
                      selectedValue === index
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-400 dark:text-gray-600'
                    }`}>
                      {value.icon}
                    </div>
                    <div>
                      <h3 className={`text-3xl font-light mb-3 transition-colors duration-500 ${
                        selectedValue === index
                          ? 'text-black dark:text-white'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}>
                        {value.title}
                      </h3>
                      <p className={`text-sm font-light transition-colors duration-500 ${
                        selectedValue === index
                          ? 'text-gray-600 dark:text-gray-400'
                          : 'text-gray-500 dark:text-gray-500'
                      }`}>
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Right Side - Dynamic Preview */}
            <div className="lg:sticky lg:top-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedValue}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900">
                    <img
                      src={values[selectedValue].image}
                      alt={values[selectedValue].title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl bg-white dark:bg-black">
                    <div className="flex items-center gap-4 mb-6 text-blue-600 dark:text-blue-400">
                      {values[selectedValue].icon}
                      <h3 className="text-2xl font-light text-black dark:text-white">
                        {values[selectedValue].title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                      {values[selectedValue].fullText}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </section>

      {/* Journey Section - Grid with Context Panel */}
      <section className="py-32 bg-blue-50 dark:bg-blue-950/10 border-y border-gray-200 dark:border-gray-800">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl md:text-6xl font-extralight text-black dark:text-white mb-6 tracking-tight">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
              Milestones that shaped our story
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
                className="group p-8 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl text-left hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300"
              >
                <div className="text-4xl font-extralight text-blue-300 dark:text-blue-700 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-light text-black dark:text-white mb-3">
                  {milestone.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-light mb-4">
                  {milestone.description}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm">
                  <span className="font-light">Read more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section - Minimal */}
      <section className="py-32 bg-white dark:bg-black">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl md:text-6xl font-extralight text-black dark:text-white mb-6 tracking-tight">
              The Humans Behind DuoTech
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
              Meet the passionate people making it all happen
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-12 items-center p-12 border border-gray-200 dark:border-gray-800 rounded-3xl bg-white dark:bg-black">
              <div className="relative flex-shrink-0">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" 
                    alt="Satyam Sharma" 
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-3xl font-light text-black dark:text-white mb-2">
                  Satyam Sharma
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-6 font-light">
                  Founder & CEO
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6 font-light leading-relaxed">
                  Visionary leader with 12+ years of experience in digital communication technologies. 
                  Founded DuoTech Solutions in 2010 with a mission to democratize enterprise-grade 
                  communication tools.
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-500 font-light">
                  <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
                  Coffee enthusiast & amateur astronomer
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-50" />
        
        <Container>
          <div className="max-w-4xl mx-auto text-center text-white relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
                <Sparkles className="w-4 h-4 mr-2" />
                READY TO CREATE TOGETHER?
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extralight mb-8 leading-tight">
                Let's build something meaningful
              </h2>
              
              <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-12 font-light">
                Whether you're a startup with a big idea or an established business looking to innovate, 
                we'd love to hear your story.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-blue-600 border-0 font-light"
                  icon={<MessageCircle className="w-5 h-5" />}
                >
                  Start a Conversation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white/30 hover:bg-white/10 font-light"
                >
                  Explore Our Work
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Slide-in Panel for Milestone Details */}
      <AnimatePresence>
        {isPanelOpen && selectedMilestone && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPanelOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed right-0 top-0 bottom-0 w-full md:w-[500px] bg-white dark:bg-black border-l border-gray-200 dark:border-gray-800 shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-8">
                <button
                  onClick={() => setIsPanelOpen(false)}
                  className="mb-8 p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </button>
                
                <div className="text-5xl font-extralight text-blue-300 dark:text-blue-700 mb-6">
                  {selectedMilestone.year}
                </div>
                
                <h3 className="text-3xl font-light text-black dark:text-white mb-4">
                  {selectedMilestone.title}
                </h3>
                
                <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-6">
                  {selectedMilestone.description}
                </p>
                
                <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-2xl border border-blue-200 dark:border-blue-900">
                  <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                    {selectedMilestone.detail}
                  </p>
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