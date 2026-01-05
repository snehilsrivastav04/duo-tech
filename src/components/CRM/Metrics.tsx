
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Clock, CreditCard, Heart } from 'lucide-react';

const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div className={`container mx-auto px-6 ${className}`}>{children}</div>
);

const Metrics = () => {
    const pageData = {
        metrics: [
            {
                value: "45%",
                label: "Increase in Sales",
                icon: <BarChart2 className="w-6 h-6 text-blue-600" />
            },
            {
                value: "30%",
                label: "Faster Response Time",
                icon: <Clock className="w-6 h-6 text-blue-600" />
            },
            {
                value: "3.5x",
                label: "ROI on Marketing",
                icon: <CreditCard className="w-6 h-6 text-blue-600" />
            },
            {
                value: "95%",
                label: "Customer Satisfaction",
                icon: <Heart className="w-6 h-6 text-blue-600" />
            }
        ]
    };

    return (
        <section className="py-32 lg:py-40 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <Container>
                {/* Optional header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 lg:mb-24"
                >
                    <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                        Trusted by <span className="font-normal text-blue-600">thousands</span>
                    </h2>
                    <p className="text-xl text-gray-500 font-light">Results that speak for themselves</p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto relative z-10">
                    {pageData.metrics.map((metric, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.15, duration: 0.7 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="text-center group cursor-default"
                        >
                            {/* Icon */}
                            <motion.div
                                whileHover={{ scale: 1.15, rotate: 360 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg"
                            >
                                {metric.icon}
                            </motion.div>

                            {/* Value */}
                            <motion.p
                                className="text-5xl lg:text-6xl font-light text-gray-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-300"
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 + 0.3, duration: 0.6 }}
                            >
                                {metric.value}
                            </motion.p>

                            {/* Label */}
                            <p className="text-base lg:text-lg text-gray-500 font-light group-hover:text-gray-700 transition-colors">
                                {metric.label}
                            </p>

                            {/* Subtle bottom accent */}
                            <div className="w-12 h-0.5 bg-blue-600 mx-auto mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Metrics;
