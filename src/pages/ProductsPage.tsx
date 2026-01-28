import React, { useState, useEffect as useReactEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import { setAdvancedMetaTags, setJsonLD, createBreadcrumbJsonLD } from '../lib/meta';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const ServicesPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const { scrollYProgress } = useScroll();
  
  useReactEffect(() => {
    setAdvancedMetaTags({
      title: 'Products | Duotech Solutions | SMS Gateway, WhatsApp API, CRM, Ready-Made Code',
      description: 'Discover Duotech Solutions\' product suite including SMS gateway, WhatsApp Business API, CRM software, and ready-made source codes. Production-ready solutions for your business.',
      keywords: 'duotech products, sms gateway, whatsapp api, crm software, ready made source code, communication tools, business software',
      image: 'https://www.duotechsolutions.in/images/duotech-og-image.jpg',
      url: window.location.href,
      canonical: 'https://www.duotechsolutions.in/products',
      author: 'Duotech Solutions',
      type: 'website'
    });

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.id = 'products-breadcrumb-json-ld';
    const breadcrumbData = createBreadcrumbJsonLD([
      { name: 'Home', url: 'https://www.duotechsolutions.in/' },
      { name: 'Products', url: window.location.href }
    ]);
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(breadcrumbScript);

    return () => {
      const scripts = document.querySelectorAll('#products-breadcrumb-json-ld');
      scripts.forEach(script => script.remove());
    };
  }, []);
  
  const services = [
    {
      id: 1,
      number: '01',
      title: 'Strategic Consulting',
      subtitle: 'Transform your vision into actionable strategy',
      description: 'We partner with you to understand your business landscape, identify opportunities, and craft strategies that drive meaningful growth.',
      capabilities: [
        'Business model innovation',
        'Digital transformation roadmaps',
        'Market analysis and positioning',
        'Technology stack evaluation'
      ],
      color: 'from-blue-500 to-cyan-500',
      accentColor: 'blue'
    },
    {
      id: 2,
      number: '02',
      title: 'Product Design',
      subtitle: 'Create experiences that resonate',
      description: 'From concept to launch, we design products that solve real problems and delight users through thoughtful interaction and visual design.',
      capabilities: [
        'User research and personas',
        'Experience mapping',
        'Interface design systems',
        'Prototyping and testing'
      ],
      color: 'from-purple-500 to-pink-500',
      accentColor: 'purple'
    },
    {
      id: 3,
      number: '03',
      title: 'Engineering Excellence',
      subtitle: 'Build robust, scalable solutions',
      description: 'Our engineering team crafts high-performance systems using modern architectures and best practices that stand the test of time.',
      capabilities: [
        'Full-stack development',
        'Cloud-native architecture',
        'API design and integration',
        'Performance optimization'
      ],
      color: 'from-emerald-500 to-teal-500',
      accentColor: 'emerald'
    },
    {
      id: 4,
      number: '04',
      title: 'Growth & Analytics',
      subtitle: 'Data-driven decisions for sustainable growth',
      description: 'Leverage data intelligence to optimize your operations, understand your customers, and accelerate business growth.',
      capabilities: [
        'Analytics implementation',
        'Growth experimentation',
        'Conversion optimization',
        'Predictive modeling'
      ],
      color: 'from-orange-500 to-red-500',
      accentColor: 'orange'
    }
  ];

  return (
    <MainLayout>
      {/* Immersive Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, #8b5cf6 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, #06b6d4 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 30h60M30 0v60'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium tracking-wide">WHAT WE DO</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 leading-[0.9] tracking-tight"
            >
              We craft
              <br />
              <span className="font-normal bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                digital excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto mb-12"
            >
              From strategy to execution, we bring together design, technology, and data to create transformative digital experiences
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-black hover:bg-gray-100 px-10 py-5 text-lg font-normal"
              >
                Explore Our Work
              </Button>
            </motion.div>
          </motion.div>
        </Container>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Scroll Experience */}
      <section className="bg-white dark:bg-dark-900">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="min-h-screen flex items-center relative"
          >
            <Container>
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center py-20">
                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}
                >
                  <div className="inline-block mb-6">
                    <span className={`text-8xl md:text-9xl font-light bg-gradient-to-br ${service.color} bg-clip-text text-transparent opacity-20`}>
                      {service.number}
                    </span>
                  </div>

                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-2xl md:text-3xl text-gray-500 dark:text-gray-400 font-light mb-8 leading-relaxed">
                    {service.subtitle}
                  </p>

                  <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light mb-12 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Capabilities - Minimal List */}
                  <div className="space-y-6 mb-12">
                    {service.capabilities.map((capability, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="flex items-center gap-4 group"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} group-hover:scale-150 transition-transform duration-300`}></div>
                        <span className="text-lg text-gray-700 dark:text-gray-300 font-light group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          {capability}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <button className="inline-flex items-center gap-3 text-lg font-normal text-gray-900 dark:text-white group">
                      <span>Learn more</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </motion.div>
                </motion.div>

                {/* Visual Side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}
                >
                  <div className="relative aspect-square">
                    {/* Abstract visual representation */}
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-full opacity-20 blur-3xl`}
                    ></motion.div>

                    <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-800 dark:to-dark-700 border border-gray-200 dark:border-dark-600 overflow-hidden">
                      {/* Decorative elements */}
                      <div className="absolute inset-0 p-12">
                        {/* Grid pattern */}
                        <div className="w-full h-full relative">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`absolute h-px bg-gradient-to-r ${service.color} opacity-20`}
                              style={{ top: `${(i + 1) * 16.66}%`, left: 0, right: 0 }}
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1, duration: 0.8 }}
                            />
                          ))}
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`absolute w-px bg-gradient-to-b ${service.color} opacity-20`}
                              style={{ left: `${(i + 1) * 16.66}%`, top: 0, bottom: 0 }}
                              initial={{ scaleY: 0 }}
                              whileInView={{ scaleY: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1, duration: 0.8 }}
                            />
                          ))}
                        </div>

                        {/* Floating elements */}
                        <motion.div
                          animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, 0]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className={`absolute top-1/4 right-1/4 w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} opacity-60`}
                        />
                        <motion.div
                          animate={{
                            y: [0, 20, 0],
                            rotate: [0, -5, 0]
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                          }}
                          className={`absolute bottom-1/4 left-1/4 w-16 h-16 rounded-full bg-gradient-to-br ${service.color} opacity-40`}
                        />
                      </div>

                      {/* Service number overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className={`text-9xl font-light bg-gradient-to-br ${service.color} bg-clip-text text-transparent opacity-10`}>
                          {service.number}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Container>
          </div>
        ))}
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 dark:from-dark-900 dark:to-dark-800">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white mb-12 text-center tracking-tight">
              Our <span className="font-normal text-blue-600">Philosophy</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: 'Human-Centered',
                  description: 'We start with people, their needs, and their context. Technology is a means, not an end.'
                },
                {
                  title: 'Quality-Driven',
                  description: 'Excellence in craft, attention to detail, and commitment to doing things right.'
                },
                {
                  title: 'Future-Ready',
                  description: 'Building with tomorrow in mind, creating solutions that evolve and scale.'
                }
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="text-center"
                >
                  <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA Section - Immersive */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        {/* Animated shapes */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight tracking-tight">
              Ready to start
              <br />
              <span className="font-normal">something amazing?</span>
            </h2>

            <p className="text-2xl md:text-3xl text-white/80 font-light mb-16 leading-relaxed">
              Let's explore how we can help transform your vision into reality
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-5 text-lg font-normal"
                >
                  Start a Conversation
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10 px-10 py-5 text-lg font-normal"
                >
                  View Case Studies
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>
    </MainLayout>
  );
};

export default ServicesPage;