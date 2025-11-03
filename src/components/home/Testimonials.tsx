import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const testimonials = [
  {
    id: '1',
    quote: "Kurodermi's bulk SMS service transformed how we connect with our customers. Their delivery rates and analytics are exceptional.",
    author: "Sarah Johnson",
    position: "Marketing Director, TechCorp",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: '2',
    quote: "The WhatsApp API integration was seamless. Our customer engagement metrics improved by 45% within the first month.",
    author: "Michael Chen",
    position: "CTO, InnovateCo",
    image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: '3',
    quote: "Their development team delivered our app ahead of schedule and their ongoing support has been invaluable.",
    author: "Priya Patel",
    position: "Product Owner, FinServe",
    image: "https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
      <Container>
        <SectionTitle 
          title="What Our Clients Say" 
          subtitle="Trusted by industry leaders across the globe"
          centered
          className="text-white"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.667 18.667C10.667 20.876 8.87598 22.667 6.66699 22.667C4.458 22.667 2.66699 20.876 2.66699 18.667C2.66699 16.458 4.458 14.667 6.66699 14.667C6.66699 10.248 10.248 6.66699 14.667 6.66699V10.667C12.458 10.667 10.667 12.458 10.667 14.667V18.667ZM26.667 14.667C26.667 10.248 23.086 6.66699 18.667 6.66699V10.667C20.876 10.667 22.667 12.458 22.667 14.667V18.667C22.667 20.876 20.876 22.667 18.667 22.667C16.458 22.667 14.667 20.876 14.667 18.667H10.667C10.667 23.086 14.248 26.667 18.667 26.667C23.086 26.667 26.667 23.086 26.667 18.667V14.667Z" fill="white"/>
                </svg>
              </div>
              <p className="text-lg mb-6 italic text-gray-100">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-300">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;