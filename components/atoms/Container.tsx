import {
  Container as MantineContainer,
  type ContainerProps as MantineContainerProps,
} from '@mantine/core';
import type { ReactNode } from 'react';

export interface ContainerProps extends MantineContainerProps {
  /** Container content */
  children: ReactNode;
}

export function Container({ ...props }: ContainerProps) {
  return <MantineContainer size="56rem" {...props} />;
}
