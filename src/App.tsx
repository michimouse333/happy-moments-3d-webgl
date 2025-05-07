import React from 'react';
import Hero from '@/components/Hero';
import StorySection from '@/components/StorySection';
import HobbiesSection from '@/components/HobbiesSection';
import FutureSection from '@/components/FutureSection';
import CTASection from '@/components/CTASection';
import './styles/index.css';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const VITE_APP_TITLE = process.env.VITE_APP_TITLE || 'Happy Moments Companion';
  console.log(`App Title: ${VITE_APP_TITLE}`);

  return (
    <>
      <div className="app-container" aria-label="Application Container">
        <Hero />
      </div>
      <div className="app-container" aria-label="Story Section">
        <StorySection />
      </div>
      <div className="app-container" aria-label="Hobbies Section">
        <HobbiesSection />
      </div>
      <div className="app-container" aria-label="Future Section">
        <FutureSection />
      </div>
      <div className="app-container" aria-label="Call to Action Section">
        <CTASection />
      </div>
    </>
  );
};

export default App;