import {
  Stack as MantineStack,
  type StackProps as MantineStackProps,
} from '@mantine/core';
import type { ReactNode } from 'react';

export interface StackProps extends MantineStackProps {
  /** Stack content */
  children: ReactNode;
}

export function Stack({ ...props }: StackProps) {
  return <MantineStack {...props} />;
}
