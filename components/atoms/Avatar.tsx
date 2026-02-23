import {
  Avatar as MantineAvatar,
  type AvatarProps as MantineAvatarProps,
} from '@mantine/core';

export interface AvatarProps extends MantineAvatarProps {
  /** Image source URL */
  src?: string | null;
  /** Alt text for the image */
  alt?: string;
  /** Initials to display when no image */
  children?: React.ReactNode;
}

export function Avatar({ ...props }: AvatarProps) {
  return <MantineAvatar color="gold" {...props} />;
}

Avatar.Group = MantineAvatar.Group;
