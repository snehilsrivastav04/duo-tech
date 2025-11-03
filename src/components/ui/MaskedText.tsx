import React from 'react';

type MaskedTextProps = {
  text: string;
  className?: string;
  backgroundImage?: string;
};

const MaskedText: React.FC<MaskedTextProps> = ({
  text,
  className = '',
  backgroundImage = '/images/hero-bg-space.jpg',
}) => {
  return (
    <span
      className={`relative inline-block ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
      }}
    >
      {text}
    </span>
  );
};

export default MaskedText;


