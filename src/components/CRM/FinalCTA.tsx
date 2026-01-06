
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <h2 className="text-4xl font-light text-gray-900 mb-6">
                        Ready to Transform
                        <br />
                        <span className="text-blue-600 font-normal">Your Business?</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 font-light leading-relaxed">
                        Join thousands of businesses that trust our CRM solution to drive growth and efficiency.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="group inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 min-w-[180px]"
                        >
                            Get Started
                            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-all duration-300 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 min-w-[180px]"
                        >
                            View Demo
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
