import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Group, Box, Text } from '@mantine/core';
import { IconArrowRight, IconDownload, IconPlus } from '@tabler/icons-react';
import { Button } from '../../components/atoms/Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Variants: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Button Variants</Text>
        <Group gap="md" wrap="wrap">
          <Button variant="filled">Filled</Button>
          <Button variant="light">Light</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="subtle">Subtle</Button>
          <Button variant="transparent">Transparent</Button>
          <Button variant="white">White</Button>
        </Group>

        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" mt="md">Brand Colors</Text>
        <Group gap="md" wrap="wrap">
          <Button color="gold">Gold (Primary)</Button>
          <Button color="rust">Rust</Button>
          <Button color="forest">Forest</Button>
          <Button color="earth">Earth</Button>
        </Group>

        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" mt="md">Light Variants by Color</Text>
        <Group gap="md" wrap="wrap">
          <Button color="gold" variant="light">Gold Light</Button>
          <Button color="rust" variant="light">Rust Light</Button>
          <Button color="forest" variant="light">Forest Light</Button>
          <Button color="earth" variant="light">Earth Light</Button>
        </Group>

        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" mt="md">Outline Variants by Color</Text>
        <Group gap="md" wrap="wrap">
          <Button color="gold" variant="outline">Gold Outline</Button>
          <Button color="rust" variant="outline">Rust Outline</Button>
          <Button color="forest" variant="outline">Forest Outline</Button>
          <Button color="earth" variant="outline">Earth Outline</Button>
        </Group>
      </Stack>
    </Box>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Button Sizes</Text>
        <Group gap="md" align="center" wrap="wrap">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium (Default)</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </Group>

        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" mt="md">Compact Sizes</Text>
        <Group gap="md" align="center" wrap="wrap">
          <Button size="compact-xs">Compact XS</Button>
          <Button size="compact-sm">Compact SM</Button>
          <Button size="compact-md">Compact MD</Button>
          <Button size="compact-lg">Compact LG</Button>
          <Button size="compact-xl">Compact XL</Button>
        </Group>
      </Stack>
    </Box>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">With Icons</Text>
        <Group gap="md" wrap="wrap">
          <Button leftSection={<IconPlus size={16} />}>Create Project</Button>
          <Button rightSection={<IconArrowRight size={16} />}>Get Started</Button>
          <Button leftSection={<IconDownload size={16} />} variant="light">Download</Button>
          <Button leftSection={<IconPlus size={16} />} variant="outline">Add Expense</Button>
        </Group>
      </Stack>
    </Box>
  ),
};

export const States: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">States</Text>
        <Group gap="md" wrap="wrap">
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
          <Button loading loaderProps={{ type: 'dots' }}>Processing</Button>
        </Group>

        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" mt="md">Full Width</Text>
        <Button fullWidth>Full Width Button</Button>
        <Button fullWidth variant="outline">Full Width Outline</Button>
      </Stack>
    </Box>
  ),
};

export const OnDarkBackground: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#1A1A1A', borderRadius: 12 }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">On Dark Background</Text>
        <Group gap="md" wrap="wrap">
          <Button>Gold Filled</Button>
          <Button variant="outline" color="gold">Gold Outline</Button>
          <Button variant="white" color="dark">White</Button>
          <Button variant="subtle" color="gold">Subtle Gold</Button>
        </Group>
      </Stack>
    </Box>
  ),
};
