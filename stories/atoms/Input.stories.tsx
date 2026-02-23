import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Box, Text, Group } from '@mantine/core';
import { IconSearch, IconMail, IconLock, IconCurrency } from '@tabler/icons-react';
import { Input } from '../../components/atoms/Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**When to use:**
Use Input for single-line text entry — names, emails, phone numbers, amounts, and search queries. For multi-line text, use TextArea instead.

**Ethiopian Design Context:**
Inputs inherit the theme's \`lg\` border-radius for a modern, rounded feel. Pair with \`leftSection\` icons for contextual cues (e.g., currency icon for ETB amounts, phone icon for TeleBirr numbers).

**Common Patterns:**
- Amount fields with ETB currency icon for expense tracking
- Search inputs for filtering projects, clients, or invoices
- Email/phone fields for client contact forms
- Password inputs for authentication flows

**Accessibility:**
Always provide a \`label\` for screen readers. Use \`description\` for helper text and \`error\` for validation messages — both are announced by assistive technology.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Input label displayed above the field',
      control: 'text',
    },
    placeholder: {
      description: 'Placeholder text shown when the field is empty',
      control: 'text',
    },
    description: {
      description: 'Helper text displayed below the input',
      control: 'text',
    },
    error: {
      description: 'Error message — replaces description when present',
      control: 'text',
    },
    size: {
      description: 'Input size (xs | sm | md | lg | xl)',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: {
      description: 'Disables the input',
      control: 'boolean',
    },
    withAsterisk: {
      description: 'Shows a required asterisk next to the label',
      control: 'boolean',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Variants: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl" style={{ maxWidth: 400 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Input Variants</Text>

        <Input label="Default Input" placeholder="Enter text..." />
        <Input label="With Description" description="This is a helper text" placeholder="Enter text..." />
        <Input label="Required" placeholder="Required field" withAsterisk />
        <Input label="With Error" placeholder="Invalid input" error="This field is required" />
        <Input label="Disabled" placeholder="Cannot edit" disabled />
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All input states: default, with description, required, error, and disabled. Shows how the input adapts to different validation contexts.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="md" style={{ maxWidth: 400 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Input Sizes</Text>
        <Input size="xs" placeholder="Extra small" label="XS" />
        <Input size="sm" placeholder="Small" label="SM" />
        <Input size="md" placeholder="Medium (default)" label="MD" />
        <Input size="lg" placeholder="Large" label="LG" />
        <Input size="xl" placeholder="Extra large" label="XL" />
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Five size options from xs to xl. Use md (default) for most forms, lg for prominent hero inputs, xs/sm for compact data tables.',
      },
    },
  },
};

export const WithIcons: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="md" style={{ maxWidth: 400 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">With Icons</Text>
        <Input leftSection={<IconSearch size={16} />} placeholder="Search projects..." label="Search" />
        <Input leftSection={<IconMail size={16} />} placeholder="you@example.com" label="Email" />
        <Input leftSection={<IconLock size={16} />} placeholder="Enter password" label="Password" type="password" />
        <Input
          leftSection={<IconCurrency size={16} />}
          placeholder="0.00"
          label="Amount (ETB)"
          description="Ethiopian Birr"
        />
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inputs with left icons for contextual cues. Common pattern for ETB currency amounts, search fields, and authentication forms.',
      },
    },
  },
};

export const OnDarkBackground: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#1A1A1A', borderRadius: 12 }}>
      <Stack gap="md" style={{ maxWidth: 400 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">On Dark Background</Text>
        <Input
          label="Project Name"
          placeholder="Enter project name..."
          styles={{
            label: { color: '#E8D5B7' },
            input: { backgroundColor: '#3D3D3D', borderColor: 'rgba(212,175,55,0.3)', color: '#FFFFFF' },
          }}
        />
        <Input
          label="Client Email"
          placeholder="client@example.com"
          leftSection={<IconMail size={16} color="#D4AF37" />}
          styles={{
            label: { color: '#E8D5B7' },
            input: { backgroundColor: '#3D3D3D', borderColor: 'rgba(212,175,55,0.3)', color: '#FFFFFF' },
          }}
        />
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Custom styled inputs for dark backgrounds. Uses sand-colored labels and gold-tinted borders to maintain brand consistency on dark sections.',
      },
    },
  },
};
