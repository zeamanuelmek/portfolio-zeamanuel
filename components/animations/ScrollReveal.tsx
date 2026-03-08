'use client';

import { type ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

export interface ScrollRevealProps {
  children: ReactNode;
  /** Direction the element slides in from */
  direction?: RevealDirection;
  /** Animation duration in seconds */
  duration?: number;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** How far the element travels (px) */
  distance?: number;
  /** If true, only animates the first time it enters view */
  once?: boolean;
  /** How much of the element must be visible to trigger (0-1) */
  threshold?: number;
  /** Cubic bezier easing array [x1, y1, x2, y2] */
  easing?: [number, number, number, number];
  className?: string;
  style?: React.CSSProperties;
}

function getOffset(direction: RevealDirection, distance: number) {
  switch (direction) {
    case 'up':
      return { x: 0, y: distance };
    case 'down':
      return { x: 0, y: -distance };
    case 'left':
      return { x: distance, y: 0 };
    case 'right':
      return { x: -distance, y: 0 };
    case 'none':
      return { x: 0, y: 0 };
  }
}

export function ScrollReveal({
  children,
  direction = 'up',
  duration = 0.6,
  delay = 0,
  distance = 40,
  once = true,
  threshold = 0.2,
  easing = [0.25, 0.1, 0.25, 1],
  className,
  style,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const offset = getOffset(direction, distance);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ width: '100%', ...style }}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: offset.x, y: offset.y }
      }
      transition={{
        duration,
        delay,
        ease: easing,
      }}
    >
      {children}
    </motion.div>
  );
}
