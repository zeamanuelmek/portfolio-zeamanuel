import {
  TextInput,
  type TextInputProps,
} from '@mantine/core';

export interface InputProps extends TextInputProps {
  /** Input label */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
}

export function Input({ ...props }: InputProps) {
  return <TextInput {...props} />;
}
