
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Bell, TrendingUp, Calendar, Users } from 'lucide-react';

const Hero = () => {
    const pageData = {
        hero: {
            title: "Transform Your Business with Intelligent CRM",
            subtitle: "Our all-in-one CRM platform helps you build better relationships, streamline processes, and improve profitability",
            ctas: [
                { text: "Get Free Demo", variant: "primary" as const },
                { text: "See Pricing", variant: "outline" as const }
            ],
            features: [
                "360° Customer View",
                "Sales Automation",
                "Marketing Tools",
                "AI-Powered Insights"
            ]
        }
    };

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            </div>

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative pt-32 pb-20 lg:pt-40">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        {/* Main heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-[1.1] tracking-tight">
                            Customer
                            <br />
                            <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Relationship
                            </span>
                            <br />
                            Management
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-light max-w-xl">
                            Streamline your customer interactions with our elegant, powerful CRM solution built for modern teams
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                            {pageData.hero.ctas.map((cta, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <button
                                        className={`min-w-[180px] text-base rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                                            i === 0 
                                                ? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600 shadow-lg shadow-blue-600/30' 
                                                : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                                        }`}
                                    >
                                        {cta.text}
                                    </button>
                                </motion.div>
                            ))}
                        </div>

                        {/* Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8"
                        >
                            {pageData.hero.features.map((feature, i) => (
                                <div key={i} className="flex items-center text-gray-600 group cursor-default">
                                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mr-2 group-hover:bg-blue-100 transition-colors">
                                        <Check className="w-3 h-3 text-blue-600" />
                                    </div>
                                    <span className="text-base font-light group-hover:text-gray-900 transition-colors">{feature}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* Social proof */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-500"
                        >
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border-2 border-white"></div>
                                    ))}
                                </div>
                                <span className="font-light">10,000+ happy users</span>
                            </div>
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                ))}
                                <span className="ml-2 font-light">4.9/5 rating</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right side - CRM Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        {/* Main dashboard mockup */}
                        <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                            {/* Browser chrome */}
                            <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="flex-1 ml-4 px-4 py-1 bg-white rounded-md text-xs text-gray-500 font-light">
                                    app.duotechsolutions.com/dashboard
                                </div>
                            </div>

                            {/* Dashboard content */}
                            <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">Dashboard</h3>
                                        <p className="text-sm text-gray-500 font-light">Welcome back, Alex</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                                            <Bell className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-medium">
                                            A
                                        </div>
                                    </div>
                                </div>

                                {/* Stats cards */}
                                <div className="grid grid-cols-3 gap-3 mb-6">
                                    {[
                                        { label: 'Total Leads', value: '2,847', trend: '+12%', color: 'blue' },
                                        { label: 'Active Deals', value: '184', trend: '+8%', color: 'green' },
                                        { label: 'Revenue', value: '$45.2K', trend: '+24%', color: 'purple' }
                                    ].map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                                            whileHover={{ y: -4 }}
                                            className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-default"
                                        >
                                            <p className="text-xs text-gray-500 font-light mb-1">{stat.label}</p>
                                            <p className="text-xl font-semibold text-gray-900 mb-1">{stat.value}</p>
                                            <p className={`text-xs font-medium text-${stat.color}-600`}>{stat.trend}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Chart mockup */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9, duration: 0.5 }}
                                    className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm mb-4"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="text-sm font-semibold text-gray-900">Sales Pipeline</h4>
                                        <div className="text-xs text-gray-500 font-light">Last 7 days</div>
                                    </div>
                                    <div className="flex items-end justify-between h-32 gap-2">
                                        {[65, 85, 45, 95, 75, 55, 88].map((height, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                animate={{ height: `${height}%` }}
                                                transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                                                className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg hover:from-blue-600 hover:to-blue-500 transition-all cursor-pointer"
                                            />
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Recent activity */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.1, duration: 0.5 }}
                                    className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
                                >
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Recent Activity</h4>
                                    <div className="space-y-3">
                                        {[
                                            { name: 'New lead from website', time: '2m ago', icon: Users },
                                            { name: 'Deal closed: Acme Corp', time: '1h ago', icon: TrendingUp },
                                            { name: 'Meeting scheduled', time: '3h ago', icon: Calendar }
                                        ].map((activity, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 1.4 + i * 0.1, duration: 0.4 }}
                                                className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors cursor-pointer"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                                    <activity.icon className="w-4 h-4 text-blue-600" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm text-gray-900 font-light truncate">{activity.name}</p>
                                                    <p className="text-xs text-gray-500 font-light">{activity.time}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Floating notification card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, x: -20 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ delay: 1.6, duration: 0.5 }}
                            className="absolute -left-6 top-1/4 bg-white rounded-xl shadow-xl border border-gray-200 p-4 max-w-[200px] hidden lg:block"
                        >
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900 mb-1">Deal Closed!</p>
                                    <p className="text-xs text-gray-600 font-light">TechCorp - $12,500</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating user card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, x: 20 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ delay: 1.8, duration: 0.5 }}
                            className="absolute -right-6 bottom-1/4 bg-white rounded-xl shadow-xl border border-gray-200 p-4 max-w-[180px] hidden lg:block"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500"></div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Snehil</p>
                                    <p className="text-xs text-gray-500 font-light">just signed up</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-gray-400 font-light">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-2"
                >
                    <div className="w-1 h-2 bg-gray-400 rounded-full"></div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
