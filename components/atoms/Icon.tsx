import { ThemeIcon, type ThemeIconProps } from '@mantine/core';
import type { ReactNode } from 'react';

export interface IconProps extends ThemeIconProps {
  /** Icon element (e.g. from @tabler/icons-react) */
  children: ReactNode;
}

export function Icon({ children, ...props }: IconProps) {
  return (
    <ThemeIcon color="gold" variant="light" radius="lg" {...props}>
      {children}
    </ThemeIcon>
  );
}
