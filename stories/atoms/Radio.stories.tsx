import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Box, Text } from '@mantine/core';
import { Radio } from '../../components/atoms/Radio';

const meta: Meta<typeof Radio> = {
  title: 'Atoms/Radio',
  component: Radio,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**When to use:**
Use Radio for mutually exclusive choices where users must pick exactly one option. For multi-select, use Checkbox. For binary toggles, use Switch.

**Ethiopian Design Context:**
Defaults to \`color="gold"\`. Use \`Radio.Group\` to wrap related options with a shared label and description. Color-code priority levels: rust for urgent, gold for normal, forest for relaxed.

**Common Patterns:**
- Payment method selection (TeleBirr, Chapa, Bank Transfer, Cash)
- Project priority levels with color-coded options
- Billing frequency (Monthly, Quarterly, Annually)
- Service tier selection (Basic, Professional, Enterprise)

**Accessibility:**
Always wrap Radio buttons in a \`Radio.Group\` for proper ARIA grouping. Each Radio needs a \`label\` and \`value\`. Use \`description\` on individual radios for additional context.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Radio button label text',
      control: 'text',
    },
    description: {
      description: 'Helper text displayed below the label',
      control: 'text',
    },
    value: {
      description: 'Radio value used by Radio.Group',
      control: 'text',
    },
    color: {
      description: 'Radio color from theme palette (defaults to gold)',
      control: 'select',
      options: ['gold', 'rust', 'forest', 'earth', 'gray'],
    },
    size: {
      description: 'Radio size (xs | sm | md | lg | xl)',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: {
      description: 'Disables the radio button',
      control: 'boolean',
    },
    error: {
      description: 'Error message displayed below the radio',
      control: 'text',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const Variants: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Radio States</Text>
        <Stack gap="md">
          <Radio label="Unselected" value="1" />
          <Radio label="Selected" value="2" defaultChecked />
          <Radio label="Disabled" value="3" disabled />
          <Radio label="Disabled Selected" value="4" disabled defaultChecked />
          <Radio label="With Description" value="5" description="Additional context for this option" />
          <Radio label="With Error" value="6" error="Please select an option" />
        </Stack>

        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37" mt="md">Brand Colors</Text>
        <Stack gap="md">
          <Radio label="Gold (Default)" value="gold" defaultChecked color="gold" />
          <Radio label="Rust" value="rust" defaultChecked color="rust" />
          <Radio label="Forest" value="forest" defaultChecked color="forest" />
          <Radio label="Earth" value="earth" defaultChecked color="earth" />
        </Stack>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All radio states and brand color variants. Gold is the default. Use color to convey meaning (rust = urgent, forest = success).',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="md">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Radio Sizes</Text>
        <Radio size="xs" label="Extra small" value="xs" defaultChecked />
        <Radio size="sm" label="Small" value="sm" defaultChecked />
        <Radio size="md" label="Medium (default)" value="md" defaultChecked />
        <Radio size="lg" label="Large" value="lg" defaultChecked />
        <Radio size="xl" label="Extra large" value="xl" defaultChecked />
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Five sizes. Use md for forms, lg/xl for card-style selection UIs on mobile.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl">
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        <Radio.Group
          label="Payment Method"
          description="Choose how you want to pay"
          defaultValue="telebirr"
        >
          <Stack gap="xs" mt="xs">
            <Radio value="telebirr" label="TeleBirr" description="Pay via TeleBirr mobile money" />
            <Radio value="chapa" label="Chapa" description="Pay with Chapa payment gateway" />
            <Radio value="bank" label="Bank Transfer" description="Direct bank transfer (CBE, Awash, etc.)" />
            <Radio value="cash" label="Cash" description="Pay in person at the office" />
          </Stack>
        </Radio.Group>

        <Radio.Group
          label="Project Priority"
          defaultValue="normal"
        >
          <Stack gap="xs" mt="xs">
            <Radio value="urgent" label="Urgent" color="rust" description="Delivery within 48 hours" />
            <Radio value="normal" label="Normal" color="gold" description="Standard timeline" />
            <Radio value="relaxed" label="Relaxed" color="forest" description="No rush, best quality" />
          </Stack>
        </Radio.Group>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Radio.Group patterns for Ethiopian SaaS: payment method selection with TeleBirr/Chapa and color-coded project priority levels.',
      },
    },
  },
};
