import {
  Divider as MantineDivider,
  type DividerProps as MantineDividerProps,
  Box,
  Stack,
} from '@mantine/core';

export interface DividerProps extends MantineDividerProps {
  /** Use gold gradient line */
  goldGradient?: boolean;
  /** Use Ethiopian flag-inspired triple line (green/gold/red) */
  habesha?: boolean;
  /** Use diamond pattern divider */
  diamond?: boolean;
}

export function Divider({ goldGradient, habesha, diamond, ...props }: DividerProps) {
  if (habesha) {
    return (
      <Stack gap={3}>
        <Box style={{ height: 2, backgroundColor: '#2C5530', borderRadius: 1 }} />
        <Box style={{ height: 2, backgroundColor: '#D4AF37', borderRadius: 1 }} />
        <Box style={{ height: 2, backgroundColor: '#C44536', borderRadius: 1 }} />
      </Stack>
    );
  }

  if (diamond) {
    return (
      <Box style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Box style={{ flex: 1, height: 1, backgroundColor: '#D4AF37', opacity: 0.3 }} />
        <Box style={{ width: 8, height: 8, backgroundColor: '#D4AF37', transform: 'rotate(45deg)' }} />
        <Box style={{ width: 6, height: 6, backgroundColor: '#E8C84A', transform: 'rotate(45deg)' }} />
        <Box style={{ width: 8, height: 8, backgroundColor: '#D4AF37', transform: 'rotate(45deg)' }} />
        <Box style={{ flex: 1, height: 1, backgroundColor: '#D4AF37', opacity: 0.3 }} />
      </Box>
    );
  }

  if (goldGradient) {
    return (
      <Box
        style={{
          height: 2,
          background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
          width: '100%',
        }}
      />
    );
  }

  return <MantineDivider {...props} />;
}
