
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div className={`container mx-auto px-6 ${className}`}>{children}</div>
);

const Button: React.FC<any> = ({ children, variant, size, onClick, icon, iconPosition }) => (
    <button className={`${variant} ${size}`} onClick={onClick}>
        {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
);

const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const pageData = {
        testimonials: [
            {
                quote: "Our sales team's productivity increased by 40% within the first month of using this CRM. The automation features saved us countless hours.",
                author: "Sarah Johnson",
                role: "Sales Director, TechCorp",
                rating: 5
            },
            {
                quote: "The customer service tools helped us reduce response times and improve our satisfaction ratings significantly. Highly recommended!",
                author: "Michael Chen",
                role: "Customer Support Manager, ServicePro",
                rating: 5
            },
            {
                quote: "Implementation was seamless and the ongoing support has been exceptional. Our customer retention has improved dramatically.",
                author: "Emily Rodriguez",
                role: "Operations Manager, GrowthInc",
                rating: 5
            }
        ]
    };

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % pageData.testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + pageData.testimonials.length) % pageData.testimonials.length);
    };

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-light text-gray-900 mb-6">
                        What Our <span className="text-blue-600 font-normal">Clients Say</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                        Don't just take our word for it - hear from our satisfied clients
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        key={currentTestimonial}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white border border-blue-100 rounded-2xl p-8 shadow-sm"
                    >
                        <div className="flex mb-4">
                            {[...Array(pageData.testimonials[currentTestimonial].rating)].map((_, j) => (
                                <Star key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                            ))}
                        </div>
                        <p className="text-xl text-gray-700 mb-6 font-light leading-relaxed">
                            "{pageData.testimonials[currentTestimonial].quote}"
                        </p>
                        <div className="text-gray-600">
                            <p className="font-normal text-gray-900">{pageData.testimonials[currentTestimonial].author}</p>
                            <p className="text-sm font-light">{pageData.testimonials[currentTestimonial].role}</p>
                        </div>
                    </motion.div>

                    <div className="flex justify-between items-center mt-8">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={prevTestimonial}
                            icon={<ChevronLeft size={20} />}
                        >
                            Previous
                        </Button>
                        <div className="flex gap-2">
                            {pageData.testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentTestimonial(i)}
                                    className={`w-3 h-3 rounded-full transition-colors ${
                                        i === currentTestimonial ? 'bg-blue-600' : 'bg-blue-200'
                                    }`}
                                />
                            ))}
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={nextTestimonial}
                            icon={<ChevronRight size={20} />}
                            iconPosition="right"
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;
