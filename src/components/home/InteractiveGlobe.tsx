import React from 'react';
import { motion } from 'framer-motion';

interface InteractiveGlobeProps {
  withMarkers?: boolean;
}

const InteractiveGlobe: React.FC<InteractiveGlobeProps> = ({ withMarkers = false }) => {
  return (
    <div className="relative w-full h-full min-h-[300px]">
      <motion.div
        animate={{ 
          rotate: 360,
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-2xl"
      />
      <div className="absolute inset-0 rounded-full border-2 border-blue-500/20" />
      {withMarkers && (
        <>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.5,
            }}
            className="absolute top-1/2 right-1/3 w-2 h-2 bg-cyan-500 rounded-full"
          />
        </>
      )}
    </div>
  );
};

export default InteractiveGlobe;