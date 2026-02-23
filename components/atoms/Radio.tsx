import {
  Radio as MantineRadio,
  type RadioProps as MantineRadioProps,
  type RadioGroupProps as MantineRadioGroupProps,
} from '@mantine/core';

export interface RadioProps extends MantineRadioProps {
  /** Radio label */
  label?: string;
}

export interface RadioGroupProps extends MantineRadioGroupProps {
  /** Group label */
  label?: string;
}

export function Radio({ ...props }: RadioProps) {
  return <MantineRadio color="gold" {...props} />;
}

Radio.Group = MantineRadio.Group;
