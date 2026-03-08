import type { Meta, StoryObj } from '@storybook/react';
import { CustomCursor } from '../../components/molecules/CustomCursor';

const meta: Meta<typeof CustomCursor> = {
  title: 'Molecules/CustomCursor',
  component: CustomCursor,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**What it does:** Floating gold pill cursor that follows the mouse with spring-like lerp smoothing.

**When to use:** On project cards or interactive elements where you want a custom "Click to Open" prompt instead of the default cursor.

**Key Features:** RequestAnimationFrame-driven position lerp (0.15), scales in/out on activation, only renders on devices with fine pointer (no touch).

**Accessibility:** Fully \`aria-hidden\`, does not interfere with keyboard navigation. The underlying element should still have a proper \`cursor\` style as fallback.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    active: {
      description: 'Whether the cursor pill is visible and tracking',
      control: 'boolean',
    },
    label: {
      description: 'Text inside the cursor pill',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CustomCursor>;

export const Active: Story = {
  args: {
    active: true,
    label: 'Click to Open',
  },
  parameters: {
    docs: {
      description: {
        story: 'Move your mouse around the canvas to see the gold pill cursor following with smooth interpolation.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, sans-serif', color: 'var(--theme-text-secondary, #6B6B6B)' }}>
        <Story />
        <p>Move your mouse around this area</p>
      </div>
    ),
  ],
};

export const Inactive: Story = {
  args: {
    active: false,
    label: 'Click to Open',
  },
  parameters: {
    docs: {
      description: {
        story: 'Cursor pill in inactive state — invisible, ready to appear when `active` becomes true.',
      },
    },
  },
};
