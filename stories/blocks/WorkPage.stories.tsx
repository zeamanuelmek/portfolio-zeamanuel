import type { Meta, StoryObj } from '@storybook/react';
import { WorkPage } from '../../components/blocks/WorkPage';

const meta: Meta<typeof WorkPage> = {
  title: 'Blocks/WorkPage',
  component: WorkPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**What it does:** Full work/portfolio page section with a header, category filter bar, and responsive project grid (1→2→3 columns).

**When to use:** Standalone \`/work\` route to display all projects with filtering. Shares the same card styling as the homepage ProjectShowcase but shows every project and adds filter controls.

**Ethiopian Design Context:** Gold gradient accent on heading, gold-filled active filter chips, gold border hover on cards, category labels in gold gradient uppercase. Same editorial typography (Space Grotesk headings, Inter body) and \`var(--theme-*)\` CSS custom properties for dark/light theming.

**Accessibility:** \`role="tablist"\` on filter bar with \`aria-selected\` on active tab. Semantic \`role="list"\` on grid. All cards are \`<a>\` links to case study pages. Focus-visible ring on filter chips.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    heading: {
      description: 'Plain prefix of the page heading',
      control: 'text',
    },
    headingAccent: {
      description: 'Gold-accented word in the page heading',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof WorkPage>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Full work page with all projects and category filter bar.',
      },
    },
  },
};

export const DarkBackground: Story = {
  decorators: [
    (Story) => (
      <div style={{ background: '#1A1A1A' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Work page on a dark background — verifying card contrast and filter chip visibility.',
      },
    },
  },
};
