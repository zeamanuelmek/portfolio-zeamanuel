import {
  Title,
  type TitleProps,
} from '@mantine/core';
import type { CSSProperties } from 'react';

export interface HeadingProps extends TitleProps {
  /** Apply gold gradient text effect */
  goldGradient?: boolean;
}

const gradientStyle: CSSProperties = {
  backgroundImage: 'linear-gradient(135deg, #D4AF37, #E8C84A)',
  backgroundColor: 'transparent',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

export function Heading({ goldGradient, style, ...props }: HeadingProps) {
  return (
    <Title
      style={goldGradient ? { ...gradientStyle, ...style } : style}
      {...props}
    />
  );
}
