import { useState, useEffect, useRef } from 'react';
import { animationUtils } from '@/utils/animationUtils';
import { ScrollAnimationProps } from '@/types';
import { motion } from 'framer-motion';

interface UseScrollAnimationProps {
  start: number;
  end: number;
  animationProperties: {
    [key: string]: {
      startValue: number;
      endValue: number;
    };
  };
}

function isValidScrollAnimationProps(
  props: any
): props is UseScrollAnimationProps {
  if (
    typeof props !== 'object' ||
    props === null ||
    typeof props.start !== 'number' ||
    typeof props.end !== 'number' ||
    props.start < 0 ||
    props.start > 1 ||
    props.end < 0 ||
    props.end > 1 ||
    typeof props.animationProperties !== 'object' ||
    props.animationProperties === null
  ) {
    return false;
  }

  return true;
}

const useScrollAnimation = (
  props: UseScrollAnimationProps
): ScrollAnimationProps<motion.CustomStyles> => {
  const [animationValue, setAnimationValue] = useState<motion.CustomStyles>({});
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isValidScrollAnimationProps(props)) {
      console.error(
        'Invalid props provided to useScrollAnimation hook.  Returning default values.'
      );
      return;
    }

    const { start, end, animationProperties } = props;

    const calculateAnimation = () => {
      try {
        const documentHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;
        const scrollY = window.scrollY;
        let scrollProgress = (scrollY) / (documentHeight - viewportHeight);

        if (start > end) {
          scrollProgress = 1 - scrollProgress;
        }

        scrollProgress = Math.max(0, Math.min(1, scrollProgress));

        const clampedProgress = Math.max(
          0,
          Math.min(1, (scrollProgress - start) / (end - start))
        );

        const newAnimationValues: motion.CustomStyles = {};
        for (const property in animationProperties) {
          if (animationProperties.hasOwnProperty(property)) {
            const { startValue, endValue } = animationProperties[property];
            if (
              typeof startValue === 'number' &&
              typeof endValue === 'number'
            ) {
              newAnimationValues[property] = animationUtils.interpolate(
                clampedProgress,
                startValue,
                endValue
              );
            } else {
              console.warn(
                `Skipping animation for property "${property}" due to invalid start or end values.`
              );
            }
          }
        }
        setAnimationValue(newAnimationValues);
      } catch (error) {
        console.error('Error during scroll event handling:', error);
      }
    };

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          calculateAnimation();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    calculateAnimation();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [props]);

  return { animatedValue };
};

export default useScrollAnimation;