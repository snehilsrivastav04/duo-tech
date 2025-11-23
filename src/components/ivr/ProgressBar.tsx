
import React from 'react';

interface ProgressBarProps {
  scrollProgress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ scrollProgress }) => {
  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
      <div
        className="h-full bg-blue-900 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
