import {
  Select as MantineSelect,
  type SelectProps as MantineSelectProps,
} from '@mantine/core';

export interface SelectProps extends MantineSelectProps {
  /** Select label */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
}

export function Select({ ...props }: SelectProps) {
  return <MantineSelect {...props} />;
}
