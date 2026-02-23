import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Box, Text } from '@mantine/core';
import { TextArea } from '../../components/atoms/TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Atoms/TextArea',
  component: TextArea,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**When to use:**
Use TextArea for multi-line text entry — project descriptions, invoice notes, expense details, and feedback forms. For single-line input, use Input instead.

**Ethiopian Design Context:**
TextArea shares the rounded \`lg\` radius from the theme. Use \`autosize\` with \`minRows\`/\`maxRows\` to keep forms compact while allowing room to type — especially useful for mobile views common in Ethiopian markets.

**Common Patterns:**
- Project briefs with autosize for flexible content length
- Invoice and expense notes for financial record-keeping
- Client feedback forms and support messages
- Description fields in quote/proposal generators

**Accessibility:**
Always provide a \`label\`. Use \`autosize\` to prevent unnecessary scrolling. The \`maxRows\` prop ensures the textarea doesn't overwhelm the page layout.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Textarea label displayed above the field',
      control: 'text',
    },
    placeholder: {
      description: 'Placeholder text shown when the field is empty',
      control: 'text',
    },
    description: {
      description: 'Helper text displayed below the textarea',
      control: 'text',
    },
    error: {
      description: 'Error message — replaces description when present',
      control: 'text',
    },
    size: {
      description: 'Textarea size (xs | sm | md | lg | xl)',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    autosize: {
      description: 'Auto-resize textarea height based on content',
      control: 'boolean',
    },
    minRows: {
      description: 'Minimum number of visible rows (requires autosize)',
      control: 'number',
    },
    maxRows: {
      description: 'Maximum number of visible rows before scrolling (requires autosize)',
      control: 'number',
    },
    disabled: {
      description: 'Disables the textarea',
      control: 'boolean',
    },
    withAsterisk: {
      description: 'Shows a required asterisk next to the label',
      control: 'boolean',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Variants: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl" style={{ maxWidth: 500 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">TextArea Variants</Text>

        <TextArea label="Default" placeholder="Write something..." />
        <TextArea label="With Description" description="Brief project description" placeholder="Describe your project..." />
        <TextArea label="Required" placeholder="Required field" withAsterisk />
        <TextArea label="With Error" placeholder="Too short" error="Description must be at least 20 characters" />
        <TextArea label="Disabled" placeholder="Cannot edit" disabled value="This content is locked" />
        <TextArea label="Auto-resize" placeholder="This textarea grows as you type..." autosize minRows={3} maxRows={8} />
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All textarea states including auto-resize. The autosize variant grows with content up to maxRows, keeping forms tidy.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="md" style={{ maxWidth: 500 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">TextArea Sizes</Text>
        <TextArea size="xs" placeholder="Extra small" label="XS" />
        <TextArea size="sm" placeholder="Small" label="SM" />
        <TextArea size="md" placeholder="Medium (default)" label="MD" />
        <TextArea size="lg" placeholder="Large" label="LG" />
        <TextArea size="xl" placeholder="Extra large" label="XL" />
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Five size options. Use md for standard forms, lg for prominent fields like project briefs.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl" style={{ maxWidth: 500 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        <TextArea
          label="Project Brief"
          placeholder="Describe the project scope, deliverables, and timeline..."
          description="Be as detailed as possible for accurate quoting"
          autosize
          minRows={4}
          withAsterisk
        />
        <TextArea
          label="Invoice Notes"
          placeholder="Additional notes for the client..."
          autosize
          minRows={2}
        />
        <TextArea
          label="Expense Description"
          placeholder="What was this expense for?"
          description="Include receipt details if available"
          autosize
          minRows={2}
        />
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world patterns for Ethiopian SaaS: project briefs for quoting, invoice notes, and expense tracking descriptions.',
      },
    },
  },
};
