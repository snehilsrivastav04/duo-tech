import { motion } from 'framer-motion';
import { Bot, Users, CheckCheck, ArrowUpRight } from 'lucide-react';

const featuresData = [
  {
    id: '01',
    title: 'Automated Workflows',
    tag: 'Intelligence',
    description: 'Build custom chatbot flows to handle customer queries, appointments, and sales without human intervention.',
    icon: <Bot className="w-5 h-5" />,
    messages: [
      { text: "Hi, I'd like to book an appointment", type: 'customer', time: '10:30 AM' },
      { text: "I can help with that. What date are you looking for?", type: 'bot', time: '10:31 AM' }
    ]
  },
  {
    id: '02',
    title: 'Shared Team Inbox',
    tag: 'Collaboration',
    description: 'Collaborate with your team to manage conversations. Assign chats, add private notes, and set agent availability.',
    icon: <Users className="w-5 h-5" />,
    messages: [
      { text: "New lead for the enterprise plan.", type: 'system', time: '11:00 AM' },
      { text: "I'll take it. What are their requirements?", type: 'agent', time: '11:01 AM' }
    ]
  }
];

const FeatureMockup = ({ messages, title }: { messages: { text: string, type: string, time: string }[], title: string }) => (
  <div className="relative w-full max-w-[300px] sm:max-w-[340px] mx-auto">
    <div className="bg-white dark:bg-[#202c33] rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 p-2 overflow-hidden">
      {/* WhatsApp Header Mockup */}
      <div className="bg-[#f0f2f5] dark:bg-[#111b21] p-3 sm:p-4 flex items-center gap-3 border-b border-slate-100 dark:border-slate-800">
        <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-700 flex-shrink-0" />
        <div>
          <p className="text-[11px] font-bold text-slate-800 dark:text-slate-100 leading-none truncate">{title}</p>
          <p className="text-[8px] text-[#128C7E] dark:text-[#25D366] mt-1 font-medium tracking-wide uppercase">online</p>
        </div>
      </div>
      {/* Message Area */}
      <div className="bg-[#efe7de] dark:bg-[#0b141a] p-4 sm:p-6 space-y-4 min-h-[260px] sm:min-h-[300px] flex flex-col justify-end relative">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }} />
        {messages.map((msg: { text: string, type: string, time: string }, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10, x: msg.type === 'customer' ? -5 : 5 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.3 }}
            className={`p-2.5 rounded-lg text-[11px] max-w-[85%] shadow-sm relative z-10 ${
              msg.type === 'customer' 
                ? 'bg-white dark:bg-[#202c33] self-start rounded-tl-none text-slate-700 dark:text-slate-200' 
                : 'bg-[#dcf8c6] dark:bg-[#005c4b] self-end rounded-tr-none text-slate-800 dark:text-slate-100'
            }`}
          >
            {msg.text}
            <div className="flex justify-end gap-1 mt-1">
              <span className="text-[8px] opacity-50">{msg.time}</span>
              {msg.type !== 'customer' && <CheckCheck className="w-2.5 h-2.5 text-blue-500" />}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export const Features = () => {
  return (
    <section className="py-20 sm:py-24 md:py-32 bg-white dark:bg-[#0b141a] transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <motion.span 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#128C7E] dark:text-[#25D366] block mb-6"
          >
            Enterprise Infrastructure
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-slate-900 dark:text-white mb-6 sm:mb-8">
            Built for <span className="italic font-serif text-[#128C7E] dark:text-[#25D366]">modern</span> scale.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed font-light max-w-xl mx-auto">
            Everything you need to build and manage your WhatsApp communication channels with institutional-grade reliability.
          </p>
        </div>

        {/* Features Alternating Grid */}
        <div className="space-y-20 sm:space-y-24 md:space-y-32 lg:space-y-48">
          {featuresData.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-y-12 sm:gap-y-16 gap-x-12 md:gap-24 items-center`}
              >
                {/* Visual Content */}
                <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Modern Decorative Backdrop */}
                  <div className="absolute inset-0 bg-slate-50 dark:bg-white/[0.02] rounded-2xl sm:rounded-[2rem] md:rounded-[3rem] -m-4 sm:-m-6 md:-m-12 rotate-2 pointer-events-none" />
                  <div className="relative z-10">
                    <FeatureMockup messages={feature.messages} title={feature.title} />
                  </div>
                </div>

                {/* Text Content */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-4 mb-6 sm:mb-8">
                    <div className="w-10 h-10 bg-[#128C7E]/10 dark:bg-[#25D366]/10 flex items-center justify-center rounded-xl text-[#128C7E] dark:text-[#25D366] flex-shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 dark:text-slate-500">
                      {feature.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-slate-900 dark:text-white mb-6">
                    {feature.title}
                  </h3>
                  
                  <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-8 sm:mb-10 max-w-lg">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center gap-8 pt-6 sm:pt-8 border-t border-slate-100 dark:border-slate-800/50">
                    <button className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white group flex items-center gap-2">
                      View Documentation 
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;