'use client';

import { useState, useEffect, type CSSProperties } from 'react';
import { designTokens } from '@/themes/tokens';

export interface RotatingTextProps {
  /** Array of phrases to cycle through */
  phrases: string[];
  /** Interval between phrase changes in milliseconds */
  interval?: number;
  /** Additional CSS class name */
  className?: string;
}

const goldGradientStyle: CSSProperties = {
  backgroundImage: `linear-gradient(135deg, ${designTokens.colors.brand.gold}, ${designTokens.colors.brand.goldLight})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontStyle: 'italic',
  fontWeight: 600,
  display: 'inline-block',
};

const keyframesStyle = `
@keyframes rotatingTextSlideUp {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
}

@keyframes rotatingTextSlideIn {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

export function RotatingText({
  phrases,
  interval = 3000,
  className,
}: RotatingTextProps): React.ReactElement {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (phrases.length <= 1) return;

    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsAnimating(false);
      }, 400);
    }, interval);

    return () => clearInterval(timer);
  }, [phrases, interval]);

  const animationStyle: CSSProperties = isAnimating
    ? {
        animation: 'rotatingTextSlideUp 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
      }
    : {
        animation: 'rotatingTextSlideIn 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
      };

  return (
    <>
      <style>{keyframesStyle}</style>
      <span
        className={className}
        style={{
          ...goldGradientStyle,
          ...animationStyle,
        }}
      >
        {phrases[currentIndex]}
      </span>
    </>
  );
}
