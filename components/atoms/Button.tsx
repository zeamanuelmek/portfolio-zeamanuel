import {
  Button as MantineButton,
  type ButtonProps as MantineButtonProps,
} from '@mantine/core';
import type { ReactNode } from 'react';

export interface ButtonProps extends MantineButtonProps {
  /** Button content */
  children: ReactNode;
  /** Click handler */
  onClick?: () => void;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <MantineButton color="gold" {...props}>
      {children}
    </MantineButton>
  );
}
