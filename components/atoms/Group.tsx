import {
  Group as MantineGroup,
  type GroupProps as MantineGroupProps,
} from '@mantine/core';
import type { ReactNode } from 'react';

export interface GroupProps extends MantineGroupProps {
  /** Group content */
  children: ReactNode;
}

export function Group({ ...props }: GroupProps) {
  return <MantineGroup {...props} />;
}
