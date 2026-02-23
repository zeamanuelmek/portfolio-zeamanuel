import {
  Badge as MantineBadge,
  type BadgeProps as MantineBadgeProps,
} from '@mantine/core';
import type { ReactNode } from 'react';

export interface BadgeProps extends MantineBadgeProps {
  /** Badge content */
  children: ReactNode;
}

export function Badge({ children, ...props }: BadgeProps) {
  return (
    <MantineBadge color="gold" {...props}>
      {children}
    </MantineBadge>
  );
}
