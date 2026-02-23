import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Box, Text } from '@mantine/core';
import { Slider } from '../../components/atoms/Slider';

const meta: Meta<typeof Slider> = {
  title: 'Atoms/Slider',
  component: Slider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**When to use:**
Use Slider for selecting a numeric value within a range — budgets, progress, ratings, and resource allocation. For precise number entry, pair with an Input field.

**Ethiopian Design Context:**
Defaults to \`color="gold"\` for the track and thumb. Use \`marks\` with ETB-formatted labels for budget sliders. Color-code by context: gold for budgets, forest for progress, earth for team allocation.

**Common Patterns:**
- Project budget selection in ETB (5K–500K range with step formatting)
- Project completion progress with milestone marks (Design → Dev → Test → Launch)
- Team allocation slider (1–8 developers)
- Rating or satisfaction scales

**Accessibility:**
Slider is keyboard-accessible via arrow keys. Use \`label\` prop (render function) to show the current value on hover/drag. Add \`marks\` for visual reference points.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'Track and thumb color from theme palette (defaults to gold)',
      control: 'select',
      options: ['gold', 'rust', 'forest', 'earth', 'gray'],
    },
    size: {
      description: 'Slider track size (xs | sm | md | lg | xl)',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    min: {
      description: 'Minimum slider value',
      control: 'number',
    },
    max: {
      description: 'Maximum slider value',
      control: 'number',
    },
    step: {
      description: 'Step increment between values',
      control: 'number',
    },
    disabled: {
      description: 'Disables the slider',
      control: 'boolean',
    },
    defaultValue: {
      description: 'Initial slider value (uncontrolled)',
      control: 'number',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const Variants: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Stack gap="xl" style={{ maxWidth: 500 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Slider Variants</Text>

        <div>
          <Text fw={500} mb="xs">Default</Text>
          <Slider defaultValue={40} />
        </div>

        <div>
          <Text fw={500} mb="xs">With Marks</Text>
          <Slider
            defaultValue={50}
            marks={[
              { value: 0, label: '0%' },
              { value: 25, label: '25%' },
              { value: 50, label: '50%' },
              { value: 75, label: '75%' },
              { value: 100, label: '100%' },
            ]}
            mb="xl"
          />
        </div>

        <div>
          <Text fw={500} mb="xs">Step Slider</Text>
          <Slider defaultValue={3} min={1} max={10} step={1} />
        </div>

        <div>
          <Text fw={500} mb="xs">Disabled</Text>
          <Slider defaultValue={60} disabled />
        </div>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Core slider variants: default continuous, with labeled marks, discrete steps, and disabled state.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl" style={{ maxWidth: 500 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Slider Sizes</Text>
        <div>
          <Text size="xs" mb="xs">XS</Text>
          <Slider size="xs" defaultValue={30} />
        </div>
        <div>
          <Text size="xs" mb="xs">SM</Text>
          <Slider size="sm" defaultValue={40} />
        </div>
        <div>
          <Text size="xs" mb="xs">MD (default)</Text>
          <Slider size="md" defaultValue={50} />
        </div>
        <div>
          <Text size="xs" mb="xs">LG</Text>
          <Slider size="lg" defaultValue={60} />
        </div>
        <div>
          <Text size="xs" mb="xs">XL</Text>
          <Slider size="xl" defaultValue={70} />
        </div>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Five track sizes. Use sm/md for compact forms, lg/xl for prominent budget or progress sliders.',
      },
    },
  },
};

export const BrandColors: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl" style={{ maxWidth: 500 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Brand Colors</Text>
        <div>
          <Text size="sm" mb="xs">Gold</Text>
          <Slider color="gold" defaultValue={50} />
        </div>
        <div>
          <Text size="sm" mb="xs">Rust</Text>
          <Slider color="rust" defaultValue={50} />
        </div>
        <div>
          <Text size="sm" mb="xs">Forest</Text>
          <Slider color="forest" defaultValue={50} />
        </div>
        <div>
          <Text size="sm" mb="xs">Earth</Text>
          <Slider color="earth" defaultValue={50} />
        </div>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All four brand colors. Use gold for budgets, forest for progress, earth for allocation, rust for urgency.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Box p="xl" style={{ backgroundColor: '#FAF8F3' }}>
      <Stack gap="xl" style={{ maxWidth: 500 }}>
        <Text size="xs" tt="uppercase" fw={600} c="#D4AF37">Ethiopian SaaS Use Cases</Text>

        <div>
          <Text fw={500} mb="xs">Project Budget (ETB)</Text>
          <Slider
            defaultValue={50000}
            min={5000}
            max={500000}
            step={5000}
            label={(val) => `${(val / 1000).toFixed(0)}K ETB`}
            marks={[
              { value: 5000, label: '5K' },
              { value: 100000, label: '100K' },
              { value: 250000, label: '250K' },
              { value: 500000, label: '500K' },
            ]}
            mb="xl"
          />
        </div>

        <div>
          <Text fw={500} mb="xs">Project Completion</Text>
          <Slider
            color="forest"
            defaultValue={65}
            marks={[
              { value: 0, label: 'Start' },
              { value: 25, label: 'Design' },
              { value: 50, label: 'Dev' },
              { value: 75, label: 'Test' },
              { value: 100, label: 'Launch' },
            ]}
            mb="xl"
          />
        </div>

        <div>
          <Text fw={500} mb="xs">Team Allocation</Text>
          <Slider
            color="earth"
            defaultValue={3}
            min={1}
            max={8}
            step={1}
            label={(val) => `${val} devs`}
            marks={[
              { value: 1, label: '1' },
              { value: 4, label: '4' },
              { value: 8, label: '8' },
            ]}
            mb="xl"
          />
        </div>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Ethiopian SaaS patterns: ETB budget range with formatted labels, project milestone progress tracker, and team size allocation.',
      },
    },
  },
};
