import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { WhatsAppMockup } from './WhatsAppMockup';

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-green-600 to-green-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/whatsapp-pattern.png')] opacity-10" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your customer communication?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of businesses using our WhatsApp solutions to boost engagement and drive growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="accent"
                size="lg"
                className="bg-green text-green-700 hover:bg-green-50"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Started Free
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-white hover:bg-white/10"
                icon={<MessageSquare className="w-5 h-5" />}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            
            <WhatsAppMockup 
              title="Get Started Today"
              messages={[
                {
                  id: 1,
                  text: "Welcome! Let's set up your WhatsApp Business account",
                  sender: "bot",
                  time: "Now",
                  buttons: ["Create Account", "Schedule Demo"]
                },
                {
                  id: 2,
                  text: "You'll be able to send messages to customers in minutes!",
                  sender: "bot",
                  time: "Now"
                }
              ]}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};