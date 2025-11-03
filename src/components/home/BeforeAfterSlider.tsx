import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div
        className="relative h-[400px] cursor-ew-resize rounded-xl overflow-hidden"
        onMouseMove={handleMove}
      >
        {/* Before Image */}
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700">
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Before</span>
          </div>
        </div>

        {/* After Image */}
        <div
          className="absolute inset-0 bg-blue-500"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white">After</span>
          </div>
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;