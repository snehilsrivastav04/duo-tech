import React from 'react';
import { motion } from 'framer-motion';

// Floating WhatsApp Particles Component
const WhatsAppParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            scale: Math.random() * 0.5 + 0.5,
            opacity: 0
          }}
          animate={{
            x: [null, Math.random() * 100 - 50],
            y: [null, Math.random() * 100 - 50],
            opacity: [0, 0.8, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          className={`absolute rounded-full ${
            i % 3 === 0 ? 'bg-green-400' : i % 2 === 0 ? 'bg-green-300' : 'bg-white'
          } ${i % 3 === 0 ? 'w-3 h-3' : i % 2 === 0 ? 'w-2 h-2' : 'w-1 h-1'}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  );
};

export default WhatsAppParticles;