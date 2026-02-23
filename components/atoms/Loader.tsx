import {
  Loader as MantineLoader,
  type LoaderProps as MantineLoaderProps,
} from '@mantine/core';

export type LoaderProps = MantineLoaderProps;

export function Loader({ ...props }: LoaderProps) {
  return <MantineLoader color="gold" {...props} />;
}
