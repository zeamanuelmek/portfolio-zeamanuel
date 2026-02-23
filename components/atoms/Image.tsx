import {
  Image as MantineImage,
  type ImageProps as MantineImageProps,
} from '@mantine/core';

export interface ImageProps extends MantineImageProps {
  /** Image source URL */
  src?: string | null;
  /** Alt text */
  alt?: string;
}

export function Image({ ...props }: ImageProps) {
  return <MantineImage radius="lg" {...props} />;
}
