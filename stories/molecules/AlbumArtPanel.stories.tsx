import type { Meta, StoryObj } from '@storybook/react';
import { AlbumArtPanel } from '../../components/molecules/AlbumArtPanel';

const meta: Meta<typeof AlbumArtPanel> = {
  title: 'Molecules/AlbumArtPanel',
  component: AlbumArtPanel,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**What it does:** Vertical mosaic of Ethiopiques album art tiles that flank the main content on wide screens.

**When to use:** On the homepage alongside the ProjectShowcase section. Desktop-only (hidden below 1280px).

**Key Features:**
- Fixed positioning with parallax scroll offset
- Random slight rotations for organic mosaic feel
- Low opacity (35%) to avoid competing with main content
- \`pointer-events: none\` — purely decorative

**Cultural Context:** Ethiopiques is a legendary music compilation series (30+ volumes) showcasing Ethiopian jazz, funk, and soul from the 1960s-70s. The album art panels celebrate this heritage as a visual texture.

**Accessibility:** Fully \`aria-hidden\` — decorative only, invisible to screen readers.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    side: {
      description: 'Which side of the viewport to position the panel',
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlbumArtPanel>;

export const LeftPanel: Story = {
  args: {
    side: 'left',
  },
  parameters: {
    docs: {
      description: {
        story: 'Left-side album art panel with first 5 tiles. Scroll the page to see the parallax effect.',
      },
    },
  },
};

export const RightPanel: Story = {
  args: {
    side: 'right',
  },
  parameters: {
    docs: {
      description: {
        story: 'Right-side panel with tiles 6-10. Scrolls in the opposite direction for visual variety.',
      },
    },
  },
};
