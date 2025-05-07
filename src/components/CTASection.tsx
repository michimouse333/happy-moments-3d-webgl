import React from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import './CTASection.css';

interface CTASectionProps {}

const CTASection: React.FC<CTASectionProps> = () => {
  const { animatedValue } = useScrollAnimation({
    initialOpacity: 0,
    initialY: 50,
    finalOpacity: 1,
    finalY: 0,
  });

  const handleClick = () => {
    try {
      window.location.href = '/new-memory';
    } catch (error) {
      console.error('Navigation failed:', error);
    }
  };

  return (
    <div
      className="cta-section-container"
      aria-label="Call to Action Section"
      style={{
        opacity: animatedValue.opacity,
        transform: `translateY(${animatedValue.y}px)`,
      }}
    >
      <button
        className="cta-button"
        aria-label="Share a memory and celebrate your relationship"
        onClick={handleClick}
        tabIndex={0}
      >
        Share a Memory
      </button>
    </div>
  );
};

export default CTASection;