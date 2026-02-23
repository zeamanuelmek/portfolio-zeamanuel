import {
  Card as MantineCard,
  type CardProps as MantineCardProps,
} from '@mantine/core';
import type { ReactNode } from 'react';

export interface CardProps extends MantineCardProps {
  /** Card content */
  children: ReactNode;
  /** Enable gold glow shadow on hover */
  goldGlow?: boolean;
}

export function Card({ children, goldGlow, style, ...props }: CardProps) {
  const glowStyles = goldGlow
    ? {
        transition: 'box-shadow 300ms ease, transform 200ms ease',
        cursor: 'pointer',
        ...style,
      }
    : style;

  return (
    <MantineCard
      style={glowStyles}
      onMouseEnter={
        goldGlow
          ? (e) => {
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(212,175,55,0.5)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }
          : undefined
      }
      onMouseLeave={
        goldGlow
          ? (e) => {
              e.currentTarget.style.boxShadow = '';
              e.currentTarget.style.transform = 'translateY(0)';
            }
          : undefined
      }
      {...props}
    >
      {children}
    </MantineCard>
  );
}

Card.Section = MantineCard.Section;
