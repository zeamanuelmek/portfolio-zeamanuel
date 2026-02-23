import {
  Text as MantineText,
  type TextProps as MantineTextProps,
} from '@mantine/core';
import type { CSSProperties, ReactNode } from 'react';

export interface TextProps extends MantineTextProps {
  /** Text content */
  children: ReactNode;
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

export function Text({ goldGradient, style, children, ...props }: TextProps) {
  return (
    <MantineText
      style={goldGradient ? { ...gradientStyle, ...style } : style}
      {...props}
    >
      {children}
    </MantineText>
  );
}
