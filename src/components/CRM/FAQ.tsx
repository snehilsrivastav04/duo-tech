
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div className={`container mx-auto px-6 ${className}`}>{children}</div>
);

interface FAQItem {
    question: string;
    answer: string;
}

const FAQAccordion: React.FC<{ faqs: FAQItem[] }> = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                    <button
                        className="flex justify-between items-center w-full text-left py-4"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                        <span className="text-lg font-light text-gray-900">{faq.question}</span>
                        <ChevronDown
                            className={`w-5 h-5 text-blue-600 transition-transform duration-200 ${
                                openIndex === index ? 'rotate-180' : ''
                            }`}
                        />
                    </button>
                    {openIndex === index && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pb-4"
                        >
                            <p className="text-gray-600 font-light leading-relaxed">{faq.answer}</p>
                        </motion.div>
                    )}
                </div>
            ))}
        </div>
    );
};

const FAQ = () => {
    const pageData = {
        faqs: [
            {
                question: "How long does CRM implementation take?",
                answer: "Implementation typically takes 2-6 weeks depending on complexity. We offer rapid deployment for basic setups in as little as 5 business days."
            },
            {
                question: "Can we customize the CRM to our specific needs?",
                answer: "Absolutely! Our CRM is highly customizable with configurable fields, workflows, dashboards, and reports to match your business processes."
            },
            {
                question: "Is training included with CRM implementation?",
                answer: "Yes, we provide comprehensive training for administrators and end-users, along with detailed documentation and video tutorials."
            },
            {
                question: "How secure is our data in your CRM?",
                answer: "We use enterprise-grade security with encryption, regular backups, and role-based access controls. Our systems are SOC 2 Type II compliant."
            },
            {
                question: "Can the CRM integrate with our existing tools?",
                answer: "Yes, our platform offers native integrations with popular business tools and a robust API for custom integrations with your existing systems."
            },
            {
                question: "What ongoing support do you provide?",
                answer: "We offer 24/7 technical support, regular system updates, and dedicated account management to ensure your CRM continues to meet your evolving needs."
            }
        ]
    };

    return (
        <section className="py-32 bg-blue-50 relative overflow-hidden">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-light text-gray-900 mb-6">
                        Frequently Asked <span className="text-blue-600 font-normal">Questions</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                        Everything you need to know about our CRM solutions
                    </p>
                </motion.div>

                <FAQAccordion faqs={pageData.faqs} />
            </Container>
        </section>
    );
};

export default FAQ;
