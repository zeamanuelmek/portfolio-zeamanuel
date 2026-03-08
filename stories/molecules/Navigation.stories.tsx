import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from '../../components/molecules/Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Molecules/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: `
**When to use:**
Glassmorphic sticky navigation bar for portfolio and landing pages. Appears as a centered pill-shaped bar on desktop and a full-width bar with hamburger menu on mobile.

**Ethiopian Design Context:**
Features a gold "Z" logo circle (#D4AF37 background) as the brand mark. Links use sand color (#E8D5B7) with gold hover states. The glassmorphic effect (backdrop-blur + semi-transparent dark bg) creates depth while maintaining readability over dark hero sections.

**Common Patterns:**
- Portfolio navigation with section anchors (Work, About, Contact)
- External links (Upwork, LinkedIn) rendered with dimmed styling
- Mobile hamburger menu with animated line-to-X transition

**Accessibility:**
Uses \`role="navigation"\` on the nav element. Hamburger button has \`aria-label\` and \`aria-expanded\` for screen readers. Mobile menu closes on link click for single-page navigation.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    links: {
      description: 'Array of navigation links with label, href, and optional dimmed flag',
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Default navigation with Work, About, Contact, and Upwork links.',
      },
    },
  },
};

export const WithCustomLinks: Story = {
  args: {
    links: [
      { label: 'Projects', href: '#projects' },
      { label: 'Services', href: '#services' },
      { label: 'Blog', href: '#blog' },
      { label: 'GitHub', href: '#github' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation with custom link set for a different page layout.',
      },
    },
  },
};

export const MobileView: Story = {
  args: {},
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story: 'Mobile viewport showing the hamburger menu layout. Click the hamburger to see the dropdown.',
      },
    },
  },
};
