import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Text, Title, Box, Group, Paper } from '@mantine/core';

const meta: Meta = {
  title: 'Design System/Shadows',
  parameters: {
    layout: 'padded',
  },
};
export default meta;

export const StandardShadows: StoryObj = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <div>
          <Title order={2} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Shadow System
          </Title>
          <Text c="#6B6B6B" mt="xs">Elevation hierarchy for depth and visual layering.</Text>
        </div>

        <div>
          <Title order={3} size="h4" mb="md" c="#2C2C2C">Standard Shadows</Title>
          <Group gap="xl" wrap="wrap">
            {[
              { name: 'sm', value: '0 1px 2px 0 rgb(0 0 0 / 0.05)', usage: 'Subtle cards, inputs' },
              { name: 'md', value: '0 4px 6px -1px rgb(0 0 0 / 0.1)', usage: 'Elevated cards, dropdowns' },
              { name: 'lg', value: '0 10px 15px -3px rgb(0 0 0 / 0.1)', usage: 'Modals, popovers' },
              { name: 'xl', value: '0 20px 25px -5px rgb(0 0 0 / 0.1)', usage: 'Hero cards, featured' },
            ].map(({ name, value, usage }) => (
              <Stack key={name} align="center" gap="sm">
                <Paper
                  p="xl"
                  radius="lg"
                  style={{
                    width: 160,
                    height: 160,
                    boxShadow: value,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  <Text fw={700} size="lg" c="#2C2C2C">{name}</Text>
                </Paper>
                <Text size="xs" c="#6B6B6B" ta="center" style={{ maxWidth: 160 }}>{usage}</Text>
              </Stack>
            ))}
          </Group>
        </div>
      </Stack>
    </Box>
  ),
};

export const GoldGlowShadows: StoryObj = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <div>
          <Title order={2} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Gold Glow Effects
          </Title>
          <Text c="#6B6B6B" mt="xs">Brand-specific glow shadows for premium feel. Hover to see interactive state.</Text>
        </div>

        <Group gap="xl" wrap="wrap">
          <Stack align="center" gap="sm">
            <Paper
              p="xl"
              radius="lg"
              style={{
                width: 200,
                height: 200,
                boxShadow: '0 4px 20px rgba(212,175,55,0.3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                transition: 'box-shadow 300ms ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(212,175,55,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(212,175,55,0.3)';
              }}
            >
              <Text fw={700} size="lg" c="#D4AF37">Gold Glow</Text>
              <Text size="xs" c="#6B6B6B" mt="xs" ta="center">Hover for stronger glow</Text>
            </Paper>
            <Text size="xs" ff="monospace" c="#6B6B6B" ta="center">
              0 4px 20px rgba(212,175,55,0.3)
            </Text>
          </Stack>

          <Stack align="center" gap="sm">
            <Paper
              p="xl"
              radius="lg"
              style={{
                width: 200,
                height: 200,
                boxShadow: '0 8px 30px rgba(212,175,55,0.5)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
              }}
            >
              <Text fw={700} size="lg" c="#D4AF37">Gold Glow Hover</Text>
              <Text size="xs" c="#6B6B6B" mt="xs" ta="center">Active / hover state</Text>
            </Paper>
            <Text size="xs" ff="monospace" c="#6B6B6B" ta="center">
              0 8px 30px rgba(212,175,55,0.5)
            </Text>
          </Stack>

          <Stack align="center" gap="sm">
            <Paper
              p="xl"
              radius="lg"
              style={{
                width: 200,
                height: 200,
                boxShadow: '0 4px 20px rgba(196,69,54,0.3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                transition: 'box-shadow 300ms ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(196,69,54,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(196,69,54,0.3)';
              }}
            >
              <Text fw={700} size="lg" c="#C44536">Rust Glow</Text>
              <Text size="xs" c="#6B6B6B" mt="xs" ta="center">Innovation accent</Text>
            </Paper>
            <Text size="xs" ff="monospace" c="#6B6B6B" ta="center">
              0 4px 20px rgba(196,69,54,0.3)
            </Text>
          </Stack>
        </Group>

        <div>
          <Title order={3} size="h4" mb="md" c="#2C2C2C">On Dark Backgrounds</Title>
          <Box p="xl" style={{ backgroundColor: '#1A1A1A', borderRadius: 12 }}>
            <Group gap="xl" wrap="wrap">
              <Paper
                p="xl"
                radius="lg"
                style={{
                  width: 200,
                  height: 160,
                  boxShadow: '0 4px 20px rgba(212,175,55,0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#3D3D3D',
                  border: '1px solid rgba(212,175,55,0.2)',
                }}
              >
                <Text fw={700} size="lg" c="#D4AF37">Dark + Gold</Text>
                <Text size="xs" c="#E8D5B7" mt="xs" ta="center">Premium dark cards</Text>
              </Paper>

              <Paper
                p="xl"
                radius="lg"
                style={{
                  width: 200,
                  height: 160,
                  boxShadow: '0 0 40px rgba(212,175,55,0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#3D3D3D',
                  border: '1px solid rgba(212,175,55,0.1)',
                }}
              >
                <Text fw={700} size="lg" c="#E8D5B7">Subtle Glow</Text>
                <Text size="xs" c="#E8D5B7" mt="xs" ta="center" style={{ opacity: 0.7 }}>Ambient brand light</Text>
              </Paper>
            </Group>
          </Box>
        </div>
      </Stack>
    </Box>
  ),
};
