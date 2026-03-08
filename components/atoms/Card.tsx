'use client';

import { useState } from 'react';
import {
  Card as MantineCard,
  type CardProps as MantineCardProps,
} from '@mantine/core';
import { designTokens } from '@/themes/tokens';

export type CardProps = MantineCardProps;

export function Card({ style, ...props }: CardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <MantineCard
      radius="lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${designTokens.colors.brand.gold}`,
        transition: 'transform 200ms ease, box-shadow 200ms ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 8px 24px rgba(0, 0, 0, 0.08)' : 'none',
        ...style,
      }}
      {...props}
    />
  );
}

Card.Section = MantineCard.Section;
