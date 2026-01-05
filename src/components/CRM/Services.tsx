
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Mail, MessageSquare, BarChart2, Truck, Layers, Check, ChevronDown } from 'lucide-react';

const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div className={`container mx-auto px-6 ${className}`}>{children}</div>
);

const Services = () => {
    const [expandedService, setExpandedService] = useState<number | null>(null);

    const pageData = {
        services: [
            {
                title: "Sales CRM",
                icon: <Briefcase className="w-6 h-6 text-blue-600" />,
                description: "Manage your sales pipeline and close deals faster with intelligent automation",
                features: [
                    "Lead & Opportunity Tracking",
                    "Sales Forecasting",
                    "Pipeline Management",
                    "AI-Powered Recommendations"
                ],
                process: [
                    "Initial consultation to understand sales workflow",
                    "Custom pipeline configuration",
                    "Sales team training and onboarding",
                    "Performance monitoring and optimization"
                ]
            },
            {
                title: "Marketing Automation",
                icon: <Mail className="w-6 h-6 text-blue-600" />,
                description: "Create targeted campaigns that convert with our marketing tools",
                features: [
                    "Email Campaigns",
                    "Lead Nurturing",
                    "Customer Segmentation",
                    "ROI Tracking"
                ],
                process: [
                    "Audience analysis and segmentation",
                    "Campaign strategy development",
                    "Automation workflow setup",
                    "Performance analytics implementation"
                ]
            },
            {
                title: "Customer Service",
                icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
                description: "Deliver exceptional service with omnichannel support tools",
                features: [
                    "Ticket Management",
                    "Live Chat",
                    "Knowledge Base",
                    "Customer Satisfaction Tracking"
                ],
                process: [
                    "Support channel integration",
                    "Response template creation",
                    "Team training and guidelines",
                    "Quality assurance setup"
                ]
            },
            {
                title: "Analytics & Reporting",
                icon: <BarChart2 className="w-6 h-6 text-blue-600" />,
                description: "Get actionable insights with real-time dashboards and reports",
                features: [
                    "Custom Dashboards",
                    "Sales Performance",
                    "Marketing ROI",
                    "Forecasting Models"
                ],
                process: [
                    "Data source integration",
                    "Custom metric definition",
                    "Dashboard design and development",
                    "Report automation setup"
                ]
            },
            {
                title: "Field Service",
                icon: <Truck className="w-6 h-6 text-blue-600" />,
                description: "Optimize your field operations with mobile workforce tools",
                features: [
                    "Job Scheduling",
                    "Route Optimization",
                    "Mobile Workforce",
                    "Inventory Tracking"
                ],
                process: [
                    "Field team assessment",
                    "Mobile app configuration",
                    "Route optimization setup",
                    "Real-time tracking implementation"
                ]
            },
            {
                title: "Project Management",
                icon: <Layers className="w-6 h-6 text-blue-600" />,
                description: "Collaborate effectively and deliver projects on time",
                features: [
                    "Task Management",
                    "Team Collaboration",
                    "Time Tracking",
                    "Resource Allocation"
                ],
                process: [
                    "Project workflow analysis",
                    "Team collaboration setup",
                    "Time tracking configuration",
                    "Resource management implementation"
                ]
            }
        ]
    };

    return (
        <section className="py-40 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-32"
                >
                    <h2 className="text-6xl font-light text-gray-900 mb-8 tracking-tight">
                        Our <span className="font-normal text-blue-600">Services</span>
                    </h2>
                    <p className="text-2xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
                        Comprehensive CRM solutions tailored to your business needs
                    </p>
                </motion.div>

                {/* Services List */}
                <div className="max-w-5xl mx-auto space-y-6">
                    {pageData.services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.15, duration: 0.7 }}
                            className="group relative"
                        >
                            {/* Subtle side indicator */}
                            <div className={`absolute left-0 top-0 bottom-0 w-0.5 bg-blue-600 transition-all duration-500 ${
                                expandedService === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'
                            }`} />

                            <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100 transition-all duration-500 hover:border-blue-200 hover:bg-white">
                                <button
                                    onClick={() => setExpandedService(expandedService === index ? null : index)}
                                    className="w-full px-12 py-10 text-left flex items-start justify-between group"
                                >
                                    <div className="flex items-start space-x-8 flex-1">
                                        {/* Icon */}
                                        <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center text-blue-600 transition-transform duration-500 group-hover:scale-110">
                                            {service.icon}
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="flex-1 pt-1">
                                            <h3 className="text-3xl font-light text-gray-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                                                {service.title}
                                            </h3>
                                            <p className="text-lg text-gray-500 font-light leading-relaxed max-w-3xl">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Expand indicator */}
                                    <div className="flex-shrink-0 ml-8 pt-2">
                                        <div className={`w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-500 group-hover:border-blue-600 ${
                                            expandedService === index ? 'bg-blue-600 border-blue-600 rotate-180' : ''
                                        }`}>
                                            <ChevronDown className={`w-5 h-5 transition-colors duration-500 ${
                                                expandedService === index ? 'text-white' : 'text-gray-400 group-hover:text-blue-600'
                                            }`} />
                                        </div>
                                    </div>
                                </button>

                                {/* Expanded content */}
                                {expandedService === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                                        className="border-t border-gray-100 overflow-hidden"
                                    >
                                        <div className="px-12 py-12">
                                            <div className="grid md:grid-cols-2 gap-16 max-w-4xl">
                                                {/* Features */}
                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.2, duration: 0.5 }}
                                                >
                                                    <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-8 font-medium">
                                                        Key Features
                                                    </h4>
                                                    <ul className="space-y-5">
                                                        {service.features.map((feature, i) => (
                                                            <motion.li
                                                                key={i}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                                                                className="flex items-start text-gray-700 group/item"
                                                            >
                                                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-blue-100 transition-colors">
                                                                    <Check className="w-3 h-3 text-blue-600" />
                                                                </div>
                                                                <span className="text-lg font-light leading-relaxed">{feature}</span>
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </motion.div>

                                                {/* Process */}
                                                <motion.div
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.2, duration: 0.5 }}
                                                >
                                                    <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-8 font-medium">
                                                        Implementation Process
                                                    </h4>
                                                    <ul className="space-y-6">
                                                        {service.process.map((step, i) => (
                                                            <motion.li
                                                                key={i}
                                                                initial={{ opacity: 0, x: 10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                                                                className="flex items-start text-gray-700 group/item"
                                                            >
                                                                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-blue-200 bg-white flex items-center justify-center mt-0.5 mr-4 group-hover/item:border-blue-600 group-hover/item:bg-blue-50 transition-all">
                                                                    <span className="text-sm text-blue-600 font-normal">{i + 1}</span>
                                                                </div>
                                                                <span className="text-lg font-light leading-relaxed pt-0.5">{step}</span>
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Services;
