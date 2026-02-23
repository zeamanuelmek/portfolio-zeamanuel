import {
  Grid as MantineGrid,
  type GridProps as MantineGridProps,
} from '@mantine/core';
import type { ReactNode } from 'react';

export interface GridProps extends MantineGridProps {
  /** Grid content */
  children: ReactNode;
}

export function Grid({ ...props }: GridProps) {
  return <MantineGrid {...props} />;
}

Grid.Col = MantineGrid.Col;
