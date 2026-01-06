
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Mail, MessageSquare, BarChart2, Truck, Layers, ArrowUpRight } from 'lucide-react';

const Services = () => {
    const pageData = {
        services: [
            {
                title: "Sales CRM",
                icon: <Briefcase className="w-6 h-6 text-blue-600" />,
                description: "Manage your sales pipeline and close deals faster with intelligent automation",
            },
            {
                title: "Marketing Automation",
                icon: <Mail className="w-6 h-6 text-blue-600" />,
                description: "Create targeted campaigns that convert with our marketing tools",
            },
            {
                title: "Customer Service",
                icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
                description: "Deliver exceptional service with omnichannel support tools",
            },
            {
                title: "Analytics & Reporting",
                icon: <BarChart2 className="w-6 h-6 text-blue-600" />,
                description: "Get actionable insights with real-time dashboards and reports",
            },
            {
                title: "Field Service",
                icon: <Truck className="w-6 h-6 text-blue-600" />,
                description: "Optimize your field operations with mobile workforce tools",
            },
            {
                title: "Project Management",
                icon: <Layers className="w-6 h-6 text-blue-600" />,
                description: "Collaborate effectively and deliver projects on time",
            }
        ]
    };

    return (
        <section className="py-40 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
            <div className="container mx-auto px-6">
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
                        <motion.a
                            key={index}
                            href="/contact"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.7 }}
                            className="group relative block"
                        >
                            {/* Subtle side indicator */}
                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-600 opacity-0 group-hover:opacity-30 transition-all duration-500" />

                            <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100 transition-all duration-500 hover:border-blue-200 hover:bg-white px-12 py-10">
                                <div className="w-full text-left flex items-start justify-between">
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

                                    {/* Link indicator */}
                                    <div className="flex-shrink-0 ml-8 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-gray-50 group-hover:border-blue-600">
                                            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
