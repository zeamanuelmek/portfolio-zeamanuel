import {
  Checkbox as MantineCheckbox,
  type CheckboxProps as MantineCheckboxProps,
} from '@mantine/core';

export interface CheckboxProps extends MantineCheckboxProps {
  /** Checkbox label */
  label?: string;
}

export function Checkbox({ ...props }: CheckboxProps) {
  return <MantineCheckbox color="gold" {...props} />;
}
