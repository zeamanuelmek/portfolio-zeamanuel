import type { Meta, StoryObj } from '@storybook/react';
import { ProjectCardWide } from '../../components/molecules/ProjectCardWide';

const meta: Meta<typeof ProjectCardWide> = {
  title: 'Molecules/ProjectCardWide',
  component: ProjectCardWide,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**What it does:** Full-width project card with browser/mobile mockup frame, 3D perspective tilt on hover, and content section with title, description, tags, and CTA.

**When to use:** In the homepage ProjectShowcase section for featured project cards.

**Key Features:**
- Browser chrome (traffic light dots + URL bar) or mobile phone frame
- 3D perspective tilt following mouse position
- Alternating layout: content-left/mockup-right or vice versa
- Responsive: stacks vertically on mobile, side-by-side on tablet+

**Accessibility:** Link wraps the entire card for keyboard navigation. Tags use \`role="list"\`. Image has descriptive alt text. CTA arrow is \`aria-hidden\`.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    mockupType: {
      description: 'Frame style: browser window or mobile phone',
      control: { type: 'radio' },
      options: ['browser', 'mobile'],
    },
    alternate: {
      description: 'Flip layout (mockup left, content right)',
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProjectCardWide>;

export const BrowserMockup: Story = {
  args: {
    title: 'OMOC',
    subtitle: 'Social Commerce Platform',
    description: 'Redesigning buyer and seller experiences for a complex two-sided marketplace over 16 months of continuous design work.',
    tags: ['UX Research', 'Mobile Design', 'Design Systems', 'E-commerce'],
    image: '/images/omoc-thumb.jpg',
    href: '/work/omoc',
    mockupType: 'browser',
  },
  parameters: {
    docs: {
      description: {
        story: 'Card with browser chrome mockup frame showing traffic light dots and URL bar.',
      },
    },
  },
};

export const MobileMockup: Story = {
  args: {
    title: 'DH',
    subtitle: 'Task Management iOS App',
    description: 'Enhancing an iOS task management app with intuitive task flows, team collaboration features, and effective communication.',
    tags: ['iOS Design', 'UI Design', 'Task Management'],
    image: '/images/dh-thumb.jpg',
    href: '/work/dh',
    mockupType: 'mobile',
  },
  parameters: {
    docs: {
      description: {
        story: 'Card with mobile phone mockup frame including notch and home indicator.',
      },
    },
  },
};

export const AlternateLayout: Story = {
  args: {
    title: 'Ablenee',
    subtitle: 'Accessibility Platform',
    description: 'Designing an inclusive platform that connects people with disabilities to accessible services and opportunities.',
    tags: ['Accessibility', 'Web App', 'User Research', 'Inclusive Design'],
    image: '/images/ablenee-thumb.jpg',
    href: '/work/ablenee',
    mockupType: 'browser',
    alternate: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Alternate layout with mockup on the left and content on the right — used for even-indexed cards.',
      },
    },
  },
};
