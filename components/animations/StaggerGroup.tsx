'use client';

import { type ReactNode, useRef, Children } from 'react';
import { motion, useInView } from 'framer-motion';

export interface StaggerGroupProps {
  children: ReactNode;
  /** Seconds between each child's animation start */
  staggerDelay?: number;
  /** Direction each child slides in from */
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  /** Animation duration per child in seconds */
  duration?: number;
  /** How far each child travels (px) */
  distance?: number;
  /** If true, only animates the first time the group enters view */
  once?: boolean;
  /** How much of the group must be visible to trigger (0-1) */
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
}

function getOffset(direction: StaggerGroupProps['direction'], distance: number) {
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
    default:
      return { x: 0, y: 0 };
  }
}

export function StaggerGroup({
  children,
  staggerDelay = 0.1,
  direction = 'up',
  duration = 0.5,
  distance = 30,
  once = true,
  threshold = 0.1,
  className,
  style,
}: StaggerGroupProps) {
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  const items = Children.toArray(children);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {items.map((child, i) => (
        <motion.div key={i} variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
