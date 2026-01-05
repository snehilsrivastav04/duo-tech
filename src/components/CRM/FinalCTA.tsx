
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div className={`container mx-auto px-6 ${className}`}>{children}</div>
);

const Button: React.FC<any> = ({ children, variant, size, className, icon }) => (
    <button className={`${className} ${variant} ${size}`}>
        {children}
        {icon && <span className="ml-2">{icon}</span>}
    </button>
);

const FinalCTA = () => {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <Container>
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
                        <Button
                            variant="primary"
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 min-w-[160px]"
                            icon={<ArrowRight size={20} />}
                        >
                            Get Started
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-blue-600 text-blue-600 hover:bg-blue-50 min-w-[160px]"
                        >
                            View Demo
                        </Button>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default FinalCTA;
