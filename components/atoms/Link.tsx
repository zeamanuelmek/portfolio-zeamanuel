import {
  Anchor,
  type AnchorProps,
} from '@mantine/core';
import type { ReactNode } from 'react';

export interface LinkProps extends AnchorProps {
  /** Link content */
  children: ReactNode;
  /** URL */
  href?: string;
}

export function Link({ children, ...props }: LinkProps) {
  return (
    <Anchor c="gold" underline="hover" {...props}>
      {children}
    </Anchor>
  );
}
