import {
  Textarea as MantineTextarea,
  type TextareaProps as MantineTextareaProps,
} from '@mantine/core';

export interface TextAreaProps extends MantineTextareaProps {
  /** Textarea label */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
}

export function TextArea({ ...props }: TextAreaProps) {
  return <MantineTextarea {...props} />;
}
