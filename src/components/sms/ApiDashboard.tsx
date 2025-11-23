import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, BarChart2, Check, Download, Zap, Cpu, Database, Shield, ArrowRight, Copy, Terminal, Activity } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import CodeSnippet from './CodeSnippet';

interface ApiFeature {
  title: string;
  description: string;
  icon: React.ReactElement;
}

interface ApiDashboardProps {
  apiFeatures: ApiFeature[];
  dashboardFeatures: string[];
}

const ApiDashboard: React.FC<ApiDashboardProps> = ({ apiFeatures, dashboardFeatures }) => {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const [activeView, setActiveView] = useState<'overview' | 'details'>('overview');

  return (
    <section className="relative bg-white dark:bg-gray-950">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(30 58 138) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <Container>
        {/* Minimalist Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="pt-32 pb-20 relative"
        >
          <div className="max-w-4xl">
            {/* Subtle Label */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <div className="h-px w-12 bg-blue-900 dark:bg-blue-400" />
              <span className="text-sm tracking-wider uppercase text-gray-600 dark:text-gray-400 font-light">
                Developer Platform
              </span>
            </motion.div>

            {/* Large Typography */}
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 dark:text-white mb-8 leading-[0.95] tracking-tight">
              Build with
              <br />
              <span className="font-normal text-blue-900 dark:text-blue-400">precision</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-2xl">
              A comprehensive API and analytics platform designed for developers who value clarity and performance.
            </p>
          </div>
        </motion.div>

        {/* Linear Feature List */}
        <div className="pb-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column - Feature List */}
            <div className="lg:col-span-5">
              {/* Section Label */}
              <div className="flex items-center gap-3 mb-12">
                <Terminal className="w-5 h-5 text-blue-900 dark:text-blue-400" />
                <h3 className="text-sm tracking-wider uppercase text-gray-600 dark:text-gray-400 font-light">
                  API Features
                </h3>
              </div>

              {/* Feature List */}
              <div className="space-y-1">
                {apiFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    onHoverStart={() => setExpandedFeature(i)}
                    onHoverEnd={() => setExpandedFeature(null)}
                    className="group cursor-pointer"
                  >
                    {/* Feature Item */}
                    <div className="relative py-6 px-6 -mx-6">
                      {/* Hover Background */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: expandedFeature === i ? 1 : 0 }}
                        className="absolute inset-0 bg-gray-50 dark:bg-gray-900/50"
                      />

                      {/* Content */}
                      <div className="relative flex items-start gap-4">
                        <motion.div
                          animate={{ 
                            scale: expandedFeature === i ? 1.1 : 1,
                            rotate: expandedFeature === i ? 360 : 0
                          }}
                          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                          className="flex-shrink-0 mt-1"
                        >
                          {React.cloneElement(feature.icon, { 
                            className: "w-5 h-5 text-blue-900 dark:text-blue-400",
                            strokeWidth: 1.5
                          })}
                        </motion.div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-xl font-normal text-gray-900 dark:text-white">
                              {feature.title}
                            </h4>
                            <motion.div
                              animate={{ 
                                x: expandedFeature === i ? 0 : -8,
                                opacity: expandedFeature === i ? 1 : 0
                              }}
                            >
                              <ArrowRight className="w-4 h-4 text-blue-900 dark:text-blue-400" strokeWidth={1.5} />
                            </motion.div>
                          </div>

                          <AnimatePresence>
                            {expandedFeature === i && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-gray-500 dark:text-gray-400 leading-relaxed font-light"
                              >
                                {feature.description}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Bottom Border */}
                      {i < apiFeatures.length - 1 && (
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200 dark:bg-gray-800" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Sticky Code Example */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:sticky lg:top-24"
              >
                {/* Code Window */}
                <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden">
                  {/* Window Header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full border border-gray-300 dark:border-gray-700" />
                        <div className="w-2.5 h-2.5 rounded-full border border-gray-300 dark:border-gray-700" />
                        <div className="w-2.5 h-2.5 rounded-full border border-gray-300 dark:border-gray-700" />
                      </div>
                      <span className="text-xs text-gray-400 font-light tracking-wide">
                        index.js
                      </span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      <Copy className="w-4 h-4" strokeWidth={1.5} />
                    </motion.button>
                  </div>

                  {/* Code Content */}
                  <div className="p-6">
                    <CodeSnippet />
                  </div>
                </div>

                {/* Info Card Below */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 p-6 bg-gray-50 dark:bg-gray-900/50 border-l-2 border-blue-900 dark:border-blue-400"
                >
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                    Get started in minutes with our RESTful API. Authentication, rate limiting, and comprehensive error handling included by default.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Dashboard Section - Clean Divider */}
        <div className="relative py-32">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left - Dashboard Preview */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:sticky lg:top-24"
              >
                {/* Dashboard Window */}
                <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden">
                  {/* Window Header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full border border-gray-300 dark:border-gray-700" />
                        <div className="w-2.5 h-2.5 rounded-full border border-gray-300 dark:border-gray-700" />
                        <div className="w-2.5 h-2.5 rounded-full border border-gray-300 dark:border-gray-700" />
                      </div>
                      <span className="text-xs text-gray-400 font-light tracking-wide">
                        dashboard.app
                      </span>
                    </div>
                    <Activity className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-8 space-y-8">
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-6">
                      {[
                        { label: 'Requests', value: '2.4M', trend: '+12%' },
                        { label: 'Latency', value: '45ms', trend: '-8%' },
                        { label: 'Success', value: '99.9%', trend: '+0.1%' }
                      ].map((metric, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="space-y-2"
                        >
                          <div className="text-xs text-gray-400 font-light tracking-wide uppercase">
                            {metric.label}
                          </div>
                          <div className="text-3xl font-light text-gray-900 dark:text-white">
                            {metric.value}
                          </div>
                          <div className="text-xs text-blue-900 dark:text-blue-400 font-light">
                            {metric.trend}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Chart */}
                    <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                      <div className="h-32 flex items-end gap-2">
                        {[32, 45, 38, 52, 48, 41, 58, 51, 47, 55, 49, 60].map((height, i) => (
                          <motion.div
                            key={i}
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.05, duration: 0.6 }}
                            className="flex-1 bg-gray-100 dark:bg-gray-800 origin-bottom hover:bg-blue-900 dark:hover:bg-blue-400 transition-colors duration-300"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                      <div className="mt-4 text-xs text-gray-400 font-light text-center">
                        Last 12 hours
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right - Dashboard Features */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-12">
                <BarChart2 className="w-5 h-5 text-blue-900 dark:text-blue-400" strokeWidth={1.5} />
                <h3 className="text-sm tracking-wider uppercase text-gray-600 dark:text-gray-400 font-light">
                  Analytics Dashboard
                </h3>
              </div>

              <div className="space-y-8 mb-12">
                {dashboardFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-blue-900 dark:bg-blue-400 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="p-6 bg-gray-50 dark:bg-gray-900/50 border-l-2 border-blue-900 dark:border-blue-400"
              >
                <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                  Monitor performance, track usage patterns, and gain insights with real-time analytics designed for clarity.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Minimal CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pb-32"
        >
          <div className="relative py-20 overflow-hidden">
            {/* Top Border */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <Shield className="w-8 h-8 text-blue-900 dark:text-blue-400 mx-auto" strokeWidth={1.5} />
              </motion.div>

              <h3 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 leading-tight">
                Start building today
              </h3>

              <p className="text-lg text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                Access comprehensive documentation and start integrating our API in minutes
              </p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-blue-900 dark:bg-blue-400 text-white dark:text-gray-900 hover:bg-blue-800 dark:hover:bg-blue-300 px-8 py-4 font-light tracking-wide transition-colors duration-300"
                  icon={<Download className="w-4 h-4" strokeWidth={1.5} />}
                >
                  Documentation
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ApiDashboard;