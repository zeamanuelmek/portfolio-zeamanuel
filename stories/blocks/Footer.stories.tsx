import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '../../components/blocks/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Blocks/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**What it does:** Minimal portfolio footer with logo, gold gradient divider, social links, and copyright.

**Composition:** Container, Text, Link, Group, Divider (goldGradient) atoms + ScrollReveal animation.

**Ethiopian Design Context:** Gold circle logo, gold gradient divider line, dimmed social links that highlight gold on hover.

**Accessibility:** All links have descriptive text, footer uses semantic \`<footer>\` element, external links open in new tab.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    logoText: {
      description: 'Letter displayed in the gold circle logo',
      control: 'text',
    },
    copyrightName: {
      description: 'Name shown in the copyright text',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Minimal footer with social links and copyright — used across all pages.',
      },
    },
  },
};
