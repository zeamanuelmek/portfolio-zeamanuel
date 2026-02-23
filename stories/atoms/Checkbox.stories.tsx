import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Box, Text, Group } from '@mantine/core';
import { Checkbox } from '../../components/atoms/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**When to use:**
Use Checkbox for toggling a single boolean option or selecting multiple items from a list. For mutually exclusive choices, use Radio instead. For on/off toggles, consider Switch.

**Ethiopian Design Context:**
Defaults to \`color="gold"\` for brand consistency. Use forest green for success-related selections and rust for destructive confirmations (e.g., "I confirm deletion").

**Common Patterns:**
- Service selection checklists (Branding, Web Design, Mobile App)
- Invoice options (Include VAT 15%, send receipt, enable recurring billing)
- Terms and conditions acceptance
- Filter toggles in project/client dashboards

**Accessibility:**
Each checkbox must have a \`label\`. Use \`description\` for additional context. The \`indeterminate\` state is useful for "select all" parent checkboxes.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Checkbox label text',
      control: 'text',
    },
    description: {
      description: 'Helper text displayed below the label',
      control: 'text',
    },
    color: {
      description: 'Check color from theme palette (defaults to gold)',
      control: 'select',
      options: ['gold', 'rust', 'forest', 'earth', 'gray'],
    },
    size: {
      description: 'Checkbox size (xs | sm | md | lg | xl)',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: {
      description: 'Disables the checkbox',
      control: 'boolean',
    },
    indeterminate: {
      description: 'Shows indeterminate state (neither checked nor unchecked)',
      control: 'boolean',
    },
    error: {
      description: 'Error message displayed below the checkbox',
      control: 'text',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Variants: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Checkbox States</Text>
        <Stack gap="md">
          <Checkbox label="Unchecked" />
          <Checkbox label="Checked" defaultChecked />
          <Checkbox label="Indeterminate" indeterminate />
          <Checkbox label="Disabled" disabled />
          <Checkbox label="Disabled Checked" disabled defaultChecked />
          <Checkbox label="With Description" description="Additional details about this option" />
          <Checkbox label="With Error" error="You must accept the terms" />
        </Stack>

        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" mt="md">Brand Colors</Text>
        <Stack gap="md">
          <Checkbox label="Gold (Default)" defaultChecked color="gold" />
          <Checkbox label="Rust" defaultChecked color="rust" />
          <Checkbox label="Forest" defaultChecked color="forest" />
          <Checkbox label="Earth" defaultChecked color="earth" />
        </Stack>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All checkbox states and brand color variants. Gold is the default, matching the Ethiopian brand palette.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="md">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Checkbox Sizes</Text>
        <Checkbox size="xs" label="Extra small" defaultChecked />
        <Checkbox size="sm" label="Small" defaultChecked />
        <Checkbox size="md" label="Medium (default)" defaultChecked />
        <Checkbox size="lg" label="Large" defaultChecked />
        <Checkbox size="xl" label="Extra large" defaultChecked />
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Five sizes from xs to xl. Use md for standard forms, lg/xl for touch-friendly mobile layouts.',
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
          <Text fw={600} mb="sm">Project Services</Text>
          <Stack gap="xs">
            <Checkbox label="Branding & Identity" defaultChecked />
            <Checkbox label="Web Design & Development" defaultChecked />
            <Checkbox label="Mobile App Development" />
            <Checkbox label="SEO & Digital Marketing" />
            <Checkbox label="Social Media Management" />
          </Stack>
        </div>

        <div>
          <Text fw={600} mb="sm">Invoice Options</Text>
          <Stack gap="xs">
            <Checkbox label="Include VAT (15%)" defaultChecked />
            <Checkbox label="Send receipt via email" defaultChecked />
            <Checkbox label="Enable recurring billing" />
          </Stack>
        </div>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multi-select patterns for Ethiopian SaaS: service selection for project scoping and invoice configuration with VAT options.',
      },
    },
  },
};
