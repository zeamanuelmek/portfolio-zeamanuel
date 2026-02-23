import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Box, Text, Group } from '@mantine/core';
import { Switch } from '../../components/atoms/Switch';

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**When to use:**
Use Switch for binary on/off toggles that take effect immediately — feature flags, notification preferences, and settings. For form selections that submit later, prefer Checkbox.

**Ethiopian Design Context:**
Defaults to \`color="gold"\` for the active state. Switches are ideal for settings panels in Ethiopian SaaS apps: offline mode, SMS via TeleBirr, auto-invoicing, and client portal access.

**Common Patterns:**
- Notification preferences (email, SMS via TeleBirr, push)
- Feature toggles (offline mode, auto-generate invoices)
- Privacy and access controls (enable client portal)
- Project settings (time tracking, recurring billing)

**Accessibility:**
Switch includes a built-in label association. Use \`description\` for additional context about what the toggle controls. The switch is keyboard-accessible via Space/Enter.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Switch label text',
      control: 'text',
    },
    description: {
      description: 'Helper text displayed below the label',
      control: 'text',
    },
    color: {
      description: 'Active state color from theme palette (defaults to gold)',
      control: 'select',
      options: ['gold', 'rust', 'forest', 'earth', 'gray'],
    },
    size: {
      description: 'Switch size (xs | sm | md | lg | xl)',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: {
      description: 'Disables the switch',
      control: 'boolean',
    },
    error: {
      description: 'Error message displayed below the switch',
      control: 'text',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Variants: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Switch States</Text>
        <Stack gap="md">
          <Switch label="Off" />
          <Switch label="On" defaultChecked />
          <Switch label="Disabled Off" disabled />
          <Switch label="Disabled On" disabled defaultChecked />
          <Switch label="With Description" description="Enable this feature" />
          <Switch label="With Error" error="Cannot toggle while processing" />
        </Stack>

        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" mt="md">Brand Colors</Text>
        <Stack gap="md">
          <Switch label="Gold (Default)" defaultChecked color="gold" />
          <Switch label="Rust" defaultChecked color="rust" />
          <Switch label="Forest" defaultChecked color="forest" />
          <Switch label="Earth" defaultChecked color="earth" />
        </Stack>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All switch states and brand colors. Gold active state is the default. Use forest for positive toggles, rust for destructive ones.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="md">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Switch Sizes</Text>
        <Switch size="xs" label="Extra small" defaultChecked />
        <Switch size="sm" label="Small" defaultChecked />
        <Switch size="md" label="Medium (default)" defaultChecked />
        <Switch size="lg" label="Large" defaultChecked />
        <Switch size="xl" label="Extra large" defaultChecked />
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Five sizes. Use md for settings panels, lg/xl for prominent feature toggles.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        <div>
          <Text fw={600} mb="sm">Notification Preferences</Text>
          <Stack gap="xs">
            <Switch label="Email notifications" defaultChecked />
            <Switch label="SMS notifications (TeleBirr)" defaultChecked />
            <Switch label="Push notifications" />
            <Switch label="Weekly digest" defaultChecked />
          </Stack>
        </div>

        <div>
          <Text fw={600} mb="sm">Project Settings</Text>
          <Stack gap="xs">
            <Switch label="Auto-generate invoices" defaultChecked />
            <Switch label="Enable client portal" defaultChecked />
            <Switch label="Track time automatically" />
            <Switch label="Offline mode" description="Sync data when connection is restored" />
          </Stack>
        </div>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Settings panel patterns: notification preferences with TeleBirr SMS and project feature toggles including offline sync mode.',
      },
    },
  },
};
