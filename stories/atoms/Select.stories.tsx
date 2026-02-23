import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Box, Text, Group } from '@mantine/core';
import { Select } from '../../components/atoms/Select';

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**When to use:**
Use Select for choosing one option from a predefined list — service types, payment methods, cities, statuses. For multiple selections, use a checkbox group. For free-text entry with suggestions, use a combobox pattern.

**Ethiopian Design Context:**
Select supports grouped options for organizing Ethiopian service categories (Design, Development, Marketing). The \`searchable\` prop is essential for long lists like Ethiopian cities or bank names.

**Common Patterns:**
- Payment method selection (TeleBirr, Chapa, Bank Transfer, Cash)
- Ethiopian city picker with searchable dropdown
- Service type grouped by category (Design / Development / Marketing)
- Project status updates (Discovery → In Progress → Review → Completed)

**Accessibility:**
Select is keyboard-navigable by default. The \`searchable\` variant filters on type. Use \`clearable\` when selection is optional.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Select label displayed above the field',
      control: 'text',
    },
    placeholder: {
      description: 'Placeholder text shown when no option is selected',
      control: 'text',
    },
    data: {
      description: 'Array of options — strings, objects with `value`/`label`, or grouped items',
    },
    description: {
      description: 'Helper text displayed below the select',
      control: 'text',
    },
    error: {
      description: 'Error message — replaces description when present',
      control: 'text',
    },
    size: {
      description: 'Select size (xs | sm | md | lg | xl)',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    searchable: {
      description: 'Enables type-to-search filtering in the dropdown',
      control: 'boolean',
    },
    clearable: {
      description: 'Shows a clear button when a value is selected',
      control: 'boolean',
    },
    disabled: {
      description: 'Disables the select',
      control: 'boolean',
    },
    withAsterisk: {
      description: 'Shows a required asterisk next to the label',
      control: 'boolean',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Variants: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl" style={{ maxWidth: 400 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Select Variants</Text>

        <Select
          label="Default Select"
          placeholder="Choose an option"
          data={['Option 1', 'Option 2', 'Option 3']}
        />
        <Select
          label="With Description"
          description="Select your preferred option"
          placeholder="Choose..."
          data={['Branding', 'Web Design', 'Mobile App', 'Full Stack']}
        />
        <Select
          label="Required"
          placeholder="Required field"
          withAsterisk
          data={['Active', 'Paused', 'Completed']}
        />
        <Select
          label="With Error"
          placeholder="Select..."
          error="Please select a project type"
          data={['Branding', 'Web Design', 'Mobile App']}
        />
        <Select
          label="Disabled"
          placeholder="Cannot change"
          disabled
          data={['Locked']}
          value="Locked"
        />
        <Select
          label="Searchable"
          placeholder="Search cities..."
          searchable
          data={['Addis Ababa', 'Bahir Dar', 'Hawassa', 'Dire Dawa', 'Mekelle', 'Gondar', 'Jimma', 'Adama']}
        />
        <Select
          label="Clearable"
          placeholder="Select and clear..."
          clearable
          data={['Gold', 'Rust', 'Forest', 'Earth']}
        />
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All select variants: default, with description, required, error, disabled, searchable, and clearable. The searchable variant is ideal for long lists like Ethiopian cities.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="md" style={{ maxWidth: 400 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Select Sizes</Text>
        <Select size="xs" placeholder="Extra small" label="XS" data={['Option A', 'Option B']} />
        <Select size="sm" placeholder="Small" label="SM" data={['Option A', 'Option B']} />
        <Select size="md" placeholder="Medium (default)" label="MD" data={['Option A', 'Option B']} />
        <Select size="lg" placeholder="Large" label="LG" data={['Option A', 'Option B']} />
        <Select size="xl" placeholder="Extra large" label="XL" data={['Option A', 'Option B']} />
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Five size options matching Input sizes for consistent form layouts.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl" style={{ maxWidth: 400 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        <Select
          label="Service Type"
          placeholder="What do you need?"
          withAsterisk
          data={[
            { group: 'Design', items: ['Branding', 'UI/UX Design', 'Print Design'] },
            { group: 'Development', items: ['Web App', 'Mobile App', 'API Development'] },
            { group: 'Marketing', items: ['Social Media', 'SEO', 'Content Strategy'] },
          ]}
        />
        <Select
          label="Payment Method"
          placeholder="Select payment..."
          data={['TeleBirr', 'Chapa', 'Bank Transfer', 'Cash']}
        />
        <Select
          label="Project Status"
          placeholder="Update status"
          data={['Discovery', 'In Progress', 'Review', 'Completed', 'On Hold']}
        />
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Ethiopian SaaS patterns: grouped service types, TeleBirr/Chapa payment methods, and project status workflow.',
      },
    },
  },
};
