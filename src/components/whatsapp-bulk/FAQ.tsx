import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowUpRight } from 'lucide-react';

const faqsData = [
  {
    id: '01',
    question: 'Is this an official WhatsApp Business API?',
    answer:
      'Yes, we are an official WhatsApp Business Solution Provider (BSP). We provide you with access to the official WhatsApp Business API, ensuring reliability and scalability.'
  },
  {
    id: '02',
    question: 'What kind of messages can I send?',
    answer:
      'You can send both template messages and session messages. Template messages are pre-approved messages for outbound notifications, while session messages are for customer support within a 24-hour window.'
  },
  {
    id: '03',
    question: 'Can I integrate it with my CRM?',
    answer:
      'Absolutely. We offer integrations with popular CRMs like Salesforce, HubSpot, and Zoho. You can also use our API to build custom integrations.'
  },
  {
    id: '04',
    question: "What's the pricing model?",
    answer:
      'Our pricing is based on a monthly subscription and conversation-based fees charged by WhatsApp. We offer different plans to suit businesses of all sizes.'
  }
];

export const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-white dark:bg-[#0b141a] transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-16 md:gap-20">
          
          {/* Sidebar Header Section */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-24"
            >
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#128C7E] dark:text-[#25D366] block mb-6">
                Knowledge Base
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 dark:text-white mb-6 sm:mb-8 leading-[1.1]">
                Frequently <br />
                <span className="italic font-serif text-[#128C7E] dark:text-[#25D366]">asked</span> questions.
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-light mb-8 sm:mb-10 max-w-xs">
                A comprehensive guide to integrating and scaling your business communication with the official WhatsApp API.
              </p>
              
              <div className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white cursor-pointer">
                <span className="border-b border-slate-900 dark:border-white pb-1">Contact Support</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </motion.div>
          </div>

          {/* Minimalist Accordion List */}
          <div className="lg:col-span-8 border-t border-slate-100 dark:border-slate-800/50">
            {faqsData.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className={`group border-b border-slate-100 dark:border-slate-800/50 transition-colors duration-500 ${isOpen ? 'bg-slate-50/30 dark:bg-white/[0.01]' : ''}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full py-6 sm:py-8 md:py-10 flex items-start gap-4 sm:gap-8 text-left transition-all outline-none"
                  >
                    <span className="text-[10px] font-mono text-slate-300 dark:text-slate-600 mt-2">
                      {faq.id}
                    </span>
                    <div className="flex-1 flex justify-between items-start gap-4 sm:gap-6">
                      <h3 className={`text-base sm:text-lg md:text-xl font-light tracking-tight transition-colors duration-300 ${isOpen ? 'text-[#128C7E] dark:text-[#25D366]' : 'text-slate-800 dark:text-slate-200 group-hover:text-[#128C7E] dark:group-hover:text-[#25D366]'}`}>
                        {faq.question}
                      </h3>
                      <div className={`mt-1 p-1 rounded-full border transition-all duration-500 ${isOpen ? 'rotate-45 border-[#128C7E] bg-[#128C7E] text-white' : 'border-slate-200 dark:border-slate-700 text-slate-400'}`}>
                        <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pl-10 sm:pl-16 pr-6 sm:pr-12 pb-8 sm:pb-10">
                          <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light max-w-2xl">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;