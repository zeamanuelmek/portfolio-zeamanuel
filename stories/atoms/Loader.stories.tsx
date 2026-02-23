import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Text, Group, Paper, Title } from '@mantine/core';
import { Loader } from '../../components/atoms/Loader';

const meta: Meta<typeof Loader> = {
  title: 'Atoms/Loader',
  component: Loader,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**When to use:**
Loader provides visual feedback during async operations — data fetching, payment processing, file uploads, and sync operations. Use inline with text for contextual progress or centered for full-page loading states.

**Ethiopian Design Context:**
Defaults to gold color for brand consistency. Use \`type="dots"\` inside buttons for processing states, \`type="bars"\` for sync/upload progress, and \`type="oval"\` (default) for general loading. White loaders on gold buttons maintain contrast.

**Common Patterns:**
- Page/dashboard loading with centered lg loader + text
- Button loading state (xs white loader inside gold button)
- Payment processing steps (TeleBirr connecting → verifying → confirmed)
- Offline sync progress (bars type with upload count)

**Accessibility:**
The loader animation indicates busy state. Pair with descriptive text (e.g., "Connecting to TeleBirr...") for screen readers. Use \`aria-busy="true"\` on the parent container during loading.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'Loader animation type (oval | bars | dots)',
      control: 'select',
      options: ['oval', 'bars', 'dots'],
    },
    color: {
      description: 'Loader color from theme palette (defaults to gold)',
      control: 'select',
      options: ['gold', 'rust', 'forest', 'earth', 'white', 'gray'],
    },
    size: {
      description: 'Loader size (xs | sm | md | lg | xl)',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Loader>;

export const Types: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Loader Types</Text>

        <Group gap="xl" wrap="wrap">
          <Stack align="center" gap="xs">
            <Loader type="oval" />
            <Text size="xs" c="dimmed">Oval (default)</Text>
          </Stack>
          <Stack align="center" gap="xs">
            <Loader type="bars" />
            <Text size="xs" c="dimmed">Bars</Text>
          </Stack>
          <Stack align="center" gap="xs">
            <Loader type="dots" />
            <Text size="xs" c="dimmed">Dots</Text>
          </Stack>
        </Group>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Three loader animations: oval for general loading, bars for upload/sync progress, dots for inline button states.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Loader Sizes</Text>

        <Group gap="xl" align="center" wrap="wrap">
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
            <Stack key={size} align="center" gap="xs">
              <Loader size={size} />
              <Text size="xs" c="dimmed">{size}</Text>
            </Stack>
          ))}
        </Group>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Five sizes. Use xs inside buttons, sm for inline indicators, md/lg for section loading, xl for full-page states.',
      },
    },
  },
};

export const BrandColors: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Brand Colors</Text>

        <div>
          <Text fw={500} mb="sm">Oval</Text>
          <Group gap="xl">
            <Stack align="center" gap="xs">
              <Loader color="gold" />
              <Text size="xs" c="dimmed">Gold</Text>
            </Stack>
            <Stack align="center" gap="xs">
              <Loader color="rust" />
              <Text size="xs" c="dimmed">Rust</Text>
            </Stack>
            <Stack align="center" gap="xs">
              <Loader color="forest" />
              <Text size="xs" c="dimmed">Forest</Text>
            </Stack>
            <Stack align="center" gap="xs">
              <Loader color="earth" />
              <Text size="xs" c="dimmed">Earth</Text>
            </Stack>
          </Group>
        </div>

        <div>
          <Text fw={500} mb="sm">Dots</Text>
          <Group gap="xl">
            <Stack align="center" gap="xs">
              <Loader color="gold" type="dots" />
              <Text size="xs" c="dimmed">Gold</Text>
            </Stack>
            <Stack align="center" gap="xs">
              <Loader color="rust" type="dots" />
              <Text size="xs" c="dimmed">Rust</Text>
            </Stack>
            <Stack align="center" gap="xs">
              <Loader color="forest" type="dots" />
              <Text size="xs" c="dimmed">Forest</Text>
            </Stack>
            <Stack align="center" gap="xs">
              <Loader color="earth" type="dots" />
              <Text size="xs" c="dimmed">Earth</Text>
            </Stack>
          </Group>
        </div>

        <div>
          <Text fw={500} mb="sm">Bars</Text>
          <Group gap="xl">
            <Stack align="center" gap="xs">
              <Loader color="gold" type="bars" />
              <Text size="xs" c="dimmed">Gold</Text>
            </Stack>
            <Stack align="center" gap="xs">
              <Loader color="rust" type="bars" />
              <Text size="xs" c="dimmed">Rust</Text>
            </Stack>
            <Stack align="center" gap="xs">
              <Loader color="forest" type="bars" />
              <Text size="xs" c="dimmed">Forest</Text>
            </Stack>
            <Stack align="center" gap="xs">
              <Loader color="earth" type="bars" />
              <Text size="xs" c="dimmed">Earth</Text>
            </Stack>
          </Group>
        </div>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All three loader types across the four brand colors. Gold is the default for most loading states.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl" style={{ maxWidth: 500 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        {/* Page loading */}
        <Paper p="xl" radius="lg" withBorder style={{ textAlign: 'center' }}>
          <Stack align="center" gap="md">
            <Loader size="lg" />
            <Text c="dimmed" size="sm">Loading dashboard...</Text>
          </Stack>
        </Paper>

        {/* Button loading state */}
        <Paper p="lg" radius="lg" withBorder>
          <Text fw={500} mb="md">Button Loading States</Text>
          <Group gap="md">
            <Paper p="sm" px="lg" radius="lg" style={{ backgroundColor: '#D4AF37', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Loader color="white" size="xs" />
              <Text c="white" size="sm" fw={500}>Processing...</Text>
            </Paper>
            <Paper p="sm" px="lg" radius="lg" style={{ border: '1px solid #D4AF37', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Loader color="gold" size="xs" type="dots" />
              <Text c="#D4AF37" size="sm" fw={500}>Saving</Text>
            </Paper>
          </Group>
        </Paper>

        {/* Inline loading */}
        <Paper p="lg" radius="lg" withBorder>
          <Text fw={500} mb="md">Payment Processing</Text>
          <Stack gap="sm">
            <Group gap="sm">
              <Loader size="xs" color="gold" />
              <Text size="sm">Connecting to TeleBirr...</Text>
            </Group>
            <Group gap="sm">
              <Loader size="xs" color="gold" type="dots" />
              <Text size="sm">Verifying payment details...</Text>
            </Group>
            <Group gap="sm">
              <Loader size="xs" color="forest" />
              <Text size="sm" c="#2C5530">Payment confirmed!</Text>
            </Group>
          </Stack>
        </Paper>

        {/* Skeleton-style card loading */}
        <Paper p="lg" radius="lg" withBorder>
          <Text fw={500} mb="md">Data Sync</Text>
          <Group gap="sm">
            <Loader size="sm" type="bars" />
            <div>
              <Text size="sm">Syncing offline expenses...</Text>
              <Text size="xs" c="dimmed">3 of 7 items uploaded</Text>
            </div>
          </Group>
        </Paper>

        {/* On dark */}
        <Box p="xl" style={{ backgroundColor: '#1A1A1A', borderRadius: 12, textAlign: 'center' }}>
          <Stack align="center" gap="md">
            <Loader color="gold" size="lg" />
            <Title order={4} c="white">Loading Projects</Title>
            <Text size="sm" c="#E8D5B7">Fetching your latest data...</Text>
          </Stack>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Loading patterns for Ethiopian SaaS: centered page loading, button processing states, TeleBirr payment progress steps, offline sync with bars, and dark background loading screen.',
      },
    },
  },
};
