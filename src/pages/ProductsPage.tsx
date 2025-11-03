import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, Smartphone, Code, Star, ArrowRight, CheckCircle, Zap, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const ProductsPage: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "WhatsApp Business API",
      tagline: "Connect. Engage. Convert.",
      description: "Seamlessly integrate WhatsApp messaging into your business workflow with our powerful API solution. Reach billions of users worldwide.",
      icon: MessageCircle,
      gradient: "from-green-400 via-green-500 to-green-600",
      features: ["Bulk Messaging", "Rich Media Support", "Template Management", "Analytics Dashboard", "Auto-replies", "Multi-agent Support"],
      stats: { users: "2B+", delivery: "98%", response: "5x" },
      price: "",
      popular: true
    },
    {
      id: 2,
      name: "Smart CRM System",
      tagline: "Relationships. Automated.",
      description: "Transform your customer relationships with our AI-powered CRM that learns, adapts, and grows with your business needs.",
      icon: Users,
      gradient: "from-blue-400 via-blue-500 to-blue-600",
      features: ["Lead Management", "Sales Pipeline", "Customer Analytics", "Task Automation", "Email Integration", "Mobile App"],
      stats: { efficiency: "40%", sales: "25%", retention: "60%" },
      price: ""
    },
    {
      id: 3,
      name: "SMS Gateway Pro",
      tagline: "Instant. Global. Reliable.",
      description: "Deliver messages worldwide with our ultra-reliable SMS gateway. Perfect for OTP, marketing campaigns, and notifications.",
      icon: Smartphone,
      gradient: "from-purple-400 via-purple-500 to-purple-600",
      features: ["Global Coverage", "OTP Services", "Bulk SMS", "Two-way Messaging", "API Integration", "Real-time Reports"],
      stats: { countries: "190+", delivery: "99.9%", speed: "<3s" },
      price: ""
    },
    {
      id: 4,
      name: "Premium Source Code",
      tagline: "Build. Customize. Deploy.",
      description: "Get complete source code access to our solutions. Full customization rights with comprehensive documentation and support.",
      icon: Code,
      gradient: "from-orange-400 via-orange-500 to-orange-600",
      features: ["Full Source Access", "Commercial License", "Documentation", "Priority Support", "Updates Included", "No Restrictions"],
      stats: { projects: "500+", satisfaction: "99%", support: "24/7" },
      price: ""
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-blue-100 via-purple-100 to-pink-100 rounded-full blur-3xl opacity-20 animate-spin" style={{ animationDuration: '20s' }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/20 rounded-full px-6 py-2 mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Next-Generation Solutions
                </span>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent dark:from-white dark:via-blue-200 dark:to-purple-200">
                  Transform Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Digital Experience
                </span>
              </h1>

              <motion.p 
                className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Cutting-edge solutions designed to revolutionize how you connect, manage, and grow your business in the digital age.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  Explore Products
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/80 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl border border-gray-200/50 hover:bg-white transition-all duration-300">
                  Request Demo
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Product Links Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            to="/products/whatsapp-api"
            className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200 transition"
          >
            WhatsApp API
          </Link>
          <Link
            to="/products/sms-gateway"
            className="px-5 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold hover:bg-purple-200 transition"
          >
            SMS Gateway
          </Link>
          <Link
            to="/products/source-codes"
            className="px-5 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold hover:bg-orange-200 transition"
          >
            Source Codes
          </Link>
          <Link
            to="/products/crm"
            className="px-5 py-2 rounded-full bg-green-100 text-green-700 font-semibold hover:bg-green-200 transition"
          >
            CRM
          </Link>
        </nav>

        {/* Products Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
                Our Product Suite
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Powerful, scalable solutions built for the modern enterprise
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {products.map((product, index) => {
                const Icon = product.icon;
                return (
                  <motion.div
                    key={product.id}
                    className={`group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 ${
                      activeProduct === product.id ? 'scale-105' : ''
                    }`}
                    variants={itemVariants}
                    onHoverStart={() => setActiveProduct(product.id)}
                    onHoverEnd={() => setActiveProduct(null)}
                    whileHover={{ y: -8 }}
                  >
                    {/* Popular Badge */}
                    {product.popular && (
                      <div className="absolute -top-4 left-8">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          Most Popular
                        </div>
                      </div>
                    )}

                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-4 rounded-2xl bg-gradient-to-r ${product.gradient} shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {product.name}
                          </h3>
                          <p className={`text-sm font-medium bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                            {product.tagline}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50/50 dark:bg-gray-700/50 rounded-2xl">
                      {Object.entries(product.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <div className="grid grid-cols-2 gap-2">
                        {product.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                      {product.features.length > 4 && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                          +{product.features.length - 4} more features
                        </p>
                      )}
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {product.price}
                        </div>
                      </div>
                      <button className={`group bg-gradient-to-r ${product.gradient} text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                        Get Started
                        <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
                Why Choose Our Solutions?
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "Bank-grade security with end-to-end encryption and compliance certifications."
                },
                {
                  icon: TrendingUp,
                  title: "Scalable Growth",
                  description: "Solutions that grow with your business, from startup to enterprise scale."
                },
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Optimized performance with 99.9% uptime and sub-second response times."
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of companies already using our solutions to drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ProductsPage;