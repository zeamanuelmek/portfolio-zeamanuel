import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Group, Paper, Text, Title, Box } from '@mantine/core';

const meta: Meta = {
  title: 'Design System/Colors',
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'cream' },
  },
};
export default meta;

function ColorSwatch({ name, hex, usage, dark = false }: { name: string; hex: string; usage: string; dark?: boolean }) {
  return (
    <Paper
      p="xl"
      radius="lg"
      style={{
        backgroundColor: hex,
        minWidth: 180,
        cursor: 'pointer',
        border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.08)',
        transition: 'transform 150ms ease, box-shadow 150ms ease',
      }}
      onClick={() => navigator.clipboard.writeText(hex)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <Text c={dark ? 'white' : '#2C2C2C'} fw={600} size="sm">{name}</Text>
      <Text c={dark ? 'white' : '#2C2C2C'} size="xs" mt={4} ff="monospace">{hex}</Text>
      <Text c={dark ? '#E8D5B7' : '#6B6B6B'} size="xs" mt={8}>{usage}</Text>
    </Paper>
  );
}

export const BrandColors: StoryObj = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <div>
          <Title order={2} mb="xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Ethiopian-Inspired Brand Palette
          </Title>
          <Text c="#6B6B6B" mb="xl">
            Click any swatch to copy its hex code. Gold/Rust/Forest palette with warm earth tones.
          </Text>
        </div>

        <div>
          <Title order={3} size="h4" mb="md" c="#2C2C2C">Primary Brand Colors</Title>
          <Group gap="md" wrap="wrap">
            <ColorSwatch name="Gold" hex="#D4AF37" usage="Main accent, CTAs, highlights" />
            <ColorSwatch name="Gold Light" hex="#E8C84A" usage="Hover states, gradients" />
            <ColorSwatch name="Rust" hex="#C44536" usage="AI/innovation accent" />
            <ColorSwatch name="Forest" hex="#2C5530" usage="Success, availability" dark />
            <ColorSwatch name="Earth" hex="#8B4513" usage="Prototyping, warm accent" dark />
          </Group>
        </div>

        <div>
          <Title order={3} size="h4" mb="md" c="#2C2C2C">Text Colors</Title>
          <Group gap="md" wrap="wrap">
            <ColorSwatch name="Primary Text" hex="#2C2C2C" usage="Headings, body text" dark />
            <ColorSwatch name="Secondary Text" hex="#6B6B6B" usage="Muted text, descriptions" />
            <ColorSwatch name="On Dark" hex="#FFFFFF" usage="Text on dark backgrounds" />
            <ColorSwatch name="Sand" hex="#E8D5B7" usage="Subtle text on dark" />
          </Group>
        </div>

        <div>
          <Title order={3} size="h4" mb="md" c="#2C2C2C">Backgrounds</Title>
          <Group gap="md" wrap="wrap">
            <ColorSwatch name="Page (Cream)" hex="#FAF8F3" usage="Main page background" />
            <ColorSwatch name="Card" hex="#FFFFFF" usage="Card backgrounds" />
            <ColorSwatch name="Dark" hex="#1A1A1A" usage="Hero, dark sections" dark />
            <ColorSwatch name="Dark Mid" hex="#3D3D3D" usage="Secondary dark surfaces" dark />
          </Group>
        </div>

        <div>
          <Title order={3} size="h4" mb="md" c="#2C2C2C">Semantic Colors</Title>
          <Group gap="md" wrap="wrap">
            <ColorSwatch name="Success" hex="#2C5530" usage="Forest green for success states" dark />
            <ColorSwatch name="Error" hex="#C44536" usage="Rust red for errors" dark />
            <ColorSwatch name="Warning" hex="#E8C84A" usage="Gold light for warnings" />
            <ColorSwatch name="Info" hex="#D4AF37" usage="Gold for informational" />
          </Group>
        </div>
      </Stack>
    </Box>
  ),
};

export const GoldGradients: StoryObj = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <Title order={2} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Brand Gradients
        </Title>

        <Group gap="md" wrap="wrap">
          <Paper
            p="xl"
            radius="lg"
            style={{
              background: 'linear-gradient(135deg, #D4AF37, #E8C84A)',
              minWidth: 240,
              minHeight: 120,
            }}
          >
            <Text c="white" fw={700} size="lg">Gold Gradient</Text>
            <Text c="white" size="xs" mt={4} ff="monospace">135deg, #D4AF37 → #E8C84A</Text>
          </Paper>

          <Paper
            p="xl"
            radius="lg"
            style={{
              background: 'linear-gradient(135deg, #1A1A1A, #3D3D3D)',
              minWidth: 240,
              minHeight: 120,
            }}
          >
            <Text c="white" fw={700} size="lg">Dark Gradient</Text>
            <Text c="#E8D5B7" size="xs" mt={4} ff="monospace">135deg, #1A1A1A → #3D3D3D</Text>
          </Paper>

          <Paper
            p="xl"
            radius="lg"
            style={{
              background: 'linear-gradient(135deg, #C44536, #D4AF37)',
              minWidth: 240,
              minHeight: 120,
            }}
          >
            <Text c="white" fw={700} size="lg">Rust → Gold</Text>
            <Text c="white" size="xs" mt={4} ff="monospace">135deg, #C44536 → #D4AF37</Text>
          </Paper>

          <Paper
            p="xl"
            radius="lg"
            style={{
              background: 'linear-gradient(135deg, #2C5530, #D4AF37)',
              minWidth: 240,
              minHeight: 120,
            }}
          >
            <Text c="white" fw={700} size="lg">Forest → Gold</Text>
            <Text c="white" size="xs" mt={4} ff="monospace">135deg, #2C5530 → #D4AF37</Text>
          </Paper>
        </Group>
      </Stack>
    </Box>
  ),
};
