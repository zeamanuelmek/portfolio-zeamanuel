import {
  Switch as MantineSwitch,
  type SwitchProps as MantineSwitchProps,
} from '@mantine/core';

export interface SwitchProps extends MantineSwitchProps {
  /** Switch label */
  label?: string;
}

export function Switch({ ...props }: SwitchProps) {
  return <MantineSwitch color="gold" {...props} />;
}
