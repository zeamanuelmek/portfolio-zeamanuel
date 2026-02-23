import type { Meta, StoryObj } from '@storybook/react';
import { RotatingText } from '../../components/atoms/RotatingText';

const meta: Meta<typeof RotatingText> = {
  title: 'Atoms/RotatingText',
  component: RotatingText,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: `
**When to use:**
Animated text that cycles through a list of phrases with a slide-up transition. Use for hero sections, taglines, or any place where rotating copy adds visual interest.

**Ethiopian Design Context:**
Displays in the brand gold gradient (linear-gradient #D4AF37 → #E8C84A) with italic semibold styling. Pairs well with dimmed lead-in text like "who ships" or "we build".

**Common Patterns:**
- Hero section rotating taglines
- Service descriptions cycling through offerings
- Feature highlights on landing pages

**Accessibility:**
Screen readers will read the current visible phrase. The animation is CSS-only (no JS layout thrashing). Consider \`prefers-reduced-motion\` for users who disable animations.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    phrases: {
      description: 'Array of strings to cycle through',
      control: 'object',
    },
    interval: {
      description: 'Time in milliseconds between phrase changes (default: 3000)',
      control: { type: 'number', min: 500, max: 10000, step: 500 },
    },
    className: {
      description: 'Additional CSS class name for custom styling',
      control: 'text',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ fontSize: 24, fontFamily: "'Inter', sans-serif", color: '#9A9A9A' }}>
        who ships <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RotatingText>;

export const Default: Story = {
  args: {
    phrases: [
      'working prototypes',
      'functional products',
      'AI-augmented solutions',
      'complete experiences',
    ],
    interval: 3000,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default rotating text with portfolio hero phrases, cycling every 3 seconds.',
      },
    },
  },
};

export const CustomPhrases: Story = {
  args: {
    phrases: ['branding', 'web apps', 'mobile apps', 'design systems'],
    interval: 3000,
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom phrases for a service offerings context.',
      },
    },
  },
};

export const FastInterval: Story = {
  args: {
    phrases: ['fast', 'smooth', 'polished'],
    interval: 1000,
  },
  parameters: {
    docs: {
      description: {
        story: 'Faster 1-second interval for high-energy contexts.',
      },
    },
  },
};
