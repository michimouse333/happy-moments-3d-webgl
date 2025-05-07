import React from 'react';
import MemoryBox from '@/components/MemoryBox';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import './Hero.css';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const { animatedValue } = useScrollAnimation({
    initialOpacity: 0,
    initialY: 50,
    finalOpacity: 1,
    finalY: 0,
  });

  return (
    <div
      className="hero-container"
      aria-label="Hero Section"
      style={{
        opacity: animatedValue.opacity,
        transform: `translateY(${animatedValue.y}px)`,
      }}
    >
      <MemoryBox />
      <h1
        aria-label="Section Heading"
        style={{
          opacity: animatedValue.opacity,
          transform: `translateY(${animatedValue.y}px)`,
        }}
      >
        Discover Happy Moments Companion
      </h1>
      <p
        aria-label="Section Description"
        style={{
          opacity: animatedValue.opacity,
          transform: `translateY(${animatedValue.y}px)`,
        }}
      >
        A 3D web application designed to share and celebrate your cherished
        memories with loved ones.
      </p>
    </div>
  );
};

export default Hero;