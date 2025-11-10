import { useState } from 'react';
import { 
  Phone, Users, Heart, Globe, 
  MessageCircle, Headphones, Target, ShieldCheck,
  CheckCircle, ArrowRight, ArrowLeft,
  Play, Clock, Shield, TrendingUp,
  GraduationCap, Truck, Building, Radio
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

// Minimal data structure
const content = {
  hero: {
    title: "Voice That Connects",
    subtitle: "Where technology meets human connection",
    description: "Transform automated calls into meaningful conversations that feel personal at scale.",
    stats: [
      { value: "2.4M", label: "Daily connections" },
      { value: "98%", label: "Satisfaction rate" },
      { value: "45+", label: "Countries served" }
    ]
  },
  features: [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Natural Conversations",
      description: "AI that understands context and responds with authenticity"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Crystal Clear Audio",
      description: "Professional-grade voice quality in every interaction"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Smart Timing",
      description: "Reach your audience when they're most receptive"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level encryption for all communications"
    }
  ],
  useCases: [
    {
      icon: <Heart className="w-7 h-7" />,
      category: "Healthcare",
      title: "Patient Care",
      description: "Automated appointment reminders and follow-ups that show genuine care",
      features: ["HIPAA compliant", "Multilingual support", "Smart scheduling"]
    },
    {
      icon: <GraduationCap className="w-7 h-7" />,
      category: "Education",
      title: "Family Engagement",
      description: "Keep parents informed with personalized updates and announcements",
      features: ["Event notifications", "Progress reports", "Emergency alerts"]
    },
    {
      icon: <Building className="w-7 h-7" />,
      category: "Business",
      title: "Customer Relations",
      description: "Build stronger relationships through thoughtful communication",
      features: ["Order updates", "Service reminders", "Promotional offers"]
    },
    {
      icon: <Truck className="w-7 h-7" />,
      category: "Logistics",
      title: "Delivery Updates",
      description: "Real-time tracking notifications that customers appreciate",
      features: ["Live tracking", "ETA updates", "Delivery confirmation"]
    }
  ],
  process: [
    {
      number: "01",
      title: "Upload Contacts",
      description: "Import your contact list securely"
    },
    {
      number: "02",
      title: "Create Message",
      description: "Design your voice message template"
    },
    {
      number: "03",
      title: "Schedule Campaign",
      description: "Choose optimal delivery times"
    },
    {
      number: "04",
      title: "Track Results",
      description: "Monitor engagement and responses"
    }
  ],
  testimonials: [
    {
      quote: "Our patient engagement increased by 62% within the first month. The platform is intuitive and incredibly effective.",
      author: "Maria Rodriguez",
      role: "Clinic Manager",
      company: "Community Health Partners"
    },
    {
      quote: "The personal touch in delivery notifications has transformed customer satisfaction. Highly recommended.",
      author: "David Chen",
      role: "Operations Director",
      company: "FreshMarket Grocers"
    },
    {
      quote: "Parents feel genuinely connected to their child's education. This tool has been invaluable.",
      author: "Sarah Johnson",
      role: "School Principal",
      company: "Maplewood Elementary"
    }
  ]
};

// Clean, minimal components
const FeatureCard = ({ feature, index }: { feature: typeof content.features[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group"
    >
      <div className="p-8 border-l-2 border-gray-200 hover:border-blue-600 transition-colors duration-300">
        <div className="mb-4 text-blue-600 transition-colors">
          {feature.icon}
        </div>
        <h3 className="text-lg font-normal text-gray-900 mb-2">
          {feature.title}
        </h3>
        <p className="text-gray-600 font-light text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const UseCaseCard = ({ useCase, index }: { useCase: typeof content.useCases[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="bg-white p-8 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300">
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center">
            {useCase.icon}
          </div>
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            {useCase.category}
          </span>
        </div>

        <h3 className="text-xl font-light text-gray-900 mb-3">
          {useCase.title}
        </h3>
        <p className="text-gray-600 font-light text-sm mb-6 leading-relaxed">
          {useCase.description}
        </p>

        <div className="space-y-2 pt-6 border-t border-gray-100">
          {useCase.features.map((feature, i) => (
            <div key={i} className="flex items-center text-gray-700">
              <div className="w-1 h-1 bg-blue-600 rounded-full mr-3" />
              <span className="text-sm font-light">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProcessStep = ({ step, index, isLast }: { step: typeof content.process[0]; index: number; isLast: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 border-2 border-blue-600 flex items-center justify-center">
            <span className="text-sm font-light text-blue-600">{step.number}</span>
          </div>
          {!isLast && (
            <div className="w-0.5 h-24 bg-blue-600/20 ml-8 mt-4" />
          )}
        </div>
        <div className="pt-3">
          <h3 className="text-lg font-normal text-gray-900 mb-2">
            {step.title}
          </h3>
          <p className="text-gray-600 font-light text-sm">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <p className="text-2xl font-light text-gray-900 mb-8 leading-relaxed">
            "{content.testimonials[current].quote}"
          </p>
          <div className="border-t border-blue-600/20 pt-6">
            <p className="text-base font-normal text-gray-900">
              {content.testimonials[current].author}
            </p>
            <p className="text-sm text-gray-600 font-light">
              {content.testimonials[current].role}, {content.testimonials[current].company}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-8 mt-12">
        <button
          onClick={() => setCurrent((prev) => (prev === 0 ? content.testimonials.length - 1 : prev - 1))}
          className="p-2 border border-gray-300 hover:border-blue-600 text-gray-600 hover:text-blue-600 transition-colors"
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        
        <div className="flex gap-2">
          {content.testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 transition-colors ${
                current === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrent((prev) => (prev === content.testimonials.length - 1 ? 0 : prev + 1))}
          className="p-2 border border-gray-300 hover:border-blue-600 text-gray-600 hover:text-blue-600 transition-colors"
          aria-label="Next testimonial"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// Main Page
const VoiceOBDPage = () => {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100/50 relative overflow-hidden">
        {/* Accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
        
        <Container>
          <div className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl lg:text-7xl font-light mb-6 tracking-tight text-gray-900">
                  {content.hero.title}
                </h1>
                <p className="text-xl lg:text-2xl font-light text-gray-600 mb-8">
                  {content.hero.subtitle}
                </p>
                <p className="text-lg text-gray-600 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                  {content.hero.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                  <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                  <Button variant="secondary" size="lg" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Demo
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-8 pt-12 border-t border-blue-600/20">
                  {content.hero.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-light mb-2 text-blue-600">{stat.value}</div>
                      <div className="text-sm text-gray-600 font-light">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-32 bg-white">
        <Container>
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Built for performance
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Enterprise-grade features designed to scale with your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {content.features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Use Cases */}
      <section className="py-32 bg-gradient-to-br from-blue-50 to-blue-100/50">
        <Container>
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Industry solutions
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Tailored communication strategies for every sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.useCases.map((useCase, index) => (
              <UseCaseCard key={index} useCase={useCase} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-32 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Simple process
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                From setup to results in four straightforward steps.
              </p>
            </div>

            <div className="space-y-0">
              {content.process.map((step, index) => (
                <ProcessStep 
                  key={index} 
                  step={step} 
                  index={index} 
                  isLast={index === content.process.length - 1}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gradient-to-br from-blue-50 to-blue-100/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Trusted by leaders
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Organizations worldwide rely on our platform.
            </p>
          </div>

          <TestimonialSlider />
        </Container>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white border-t-2 border-blue-600">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-light mb-8 tracking-tight text-gray-900">
              Ready to transform your communication?
            </h2>
            <p className="text-xl text-gray-600 font-light mb-12 leading-relaxed">
              Join thousands of organizations building better connections.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Start Free Trial
              </Button>
              <Button variant="secondary" size="lg" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                Schedule Demo
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
};

export default VoiceOBDPage;