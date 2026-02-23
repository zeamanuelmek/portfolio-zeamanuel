import {
  Alert as MantineAlert,
  type AlertProps as MantineAlertProps,
} from '@mantine/core';
import {
  IconCheck,
  IconAlertTriangle,
  IconX,
  IconInfoCircle,
} from '@tabler/icons-react';
import type { ReactNode } from 'react';

export interface AlertProps extends MantineAlertProps {
  /** Alert content */
  children: ReactNode;
  /** Semantic variant with pre-configured color and icon */
  semantic?: 'success' | 'error' | 'warning' | 'info';
}

const semanticConfig = {
  success: { color: 'forest' as const, icon: <IconCheck size={20} /> },
  error: { color: 'rust' as const, icon: <IconX size={20} /> },
  warning: { color: 'gold' as const, icon: <IconAlertTriangle size={20} /> },
  info: { color: 'gold' as const, icon: <IconInfoCircle size={20} /> },
};

export function Alert({ semantic, children, ...props }: AlertProps) {
  const config = semantic ? semanticConfig[semantic] : undefined;

  return (
    <MantineAlert
      color={config?.color ?? 'gold'}
      icon={config?.icon}
      radius="lg"
      {...props}
    >
      {children}
    </MantineAlert>
  );
}
