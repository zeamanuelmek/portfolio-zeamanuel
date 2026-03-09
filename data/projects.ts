/**
 * @deprecated This file is kept as a reference and fallback data source.
 * All data now comes from Notion CMS via lib/get-data.ts
 * To update content, edit the Notion databases:
 * - Portfolio CMS (projects): ae9c7922-9266-40a0-a1b4-e4d6609c1798
 * - Case Study Moments: ead443e3-b63b-46ab-8df1-7fc3f6e49ec9
 * - Site Content: 66b18b6a-16bc-4c08-9a65-269d8144c2cb
 * - Ethiopiques Album Art: 3f69d0dc-73a7-4c35-855a-013331fe9120
 */
// data/projects.ts

export interface CaseStudyImage {
  url: string;
  caption: string;
  alt: string;
}

export interface CaseStudyMoment {
  id: string;
  number: string;
  title: string;
  headline: string;
  theme: string;
  summary: string;
  before: string;
  after: string;
  details: string[];
  insight: string;
  images: CaseStudyImage[];
}

export interface CaseStudyWorkflowStep {
  num: string;
  label: string;
  detail: string;
}

export interface CaseStudyResolution {
  growth: string;
  discovery: string;
  founderQuote: string;
  advice: string;
}

export interface CaseStudy {
  hook: string;
  role: string;
  duration: string;
  platforms: string;
  team: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  workflow: {
    title: string;
    description: string;
    steps: CaseStudyWorkflowStep[];
  };
  moments: CaseStudyMoment[];
  resolution: CaseStudyResolution;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  category: 'e-commerce' | 'mobile-app' | 'web-app' | 'framer';
  tags: string[];
  status: 'featured' | 'live' | 'in-development';
  duration: string;
  role: string;
  team?: string;
  year: number;
  featured: boolean;
  liveUrl?: string;
  caseStudy?: CaseStudy;
}

export const projects: Project[] = [
  {
    id: 'omoc',
    title: 'OMOC',
    subtitle: 'Social Commerce Platform',
    description:
      'Redesigning buyer and seller experiences for a complex two-sided marketplace over 16 months of continuous design work.',
    thumbnail: '/images/omoc-thumb.jpg',
    category: 'e-commerce',
    tags: ['UX Research', 'Mobile Design', 'Design Systems', 'E-commerce'],
    status: 'featured',
    duration: 'Jan 2024 - Jan 2026 (16 months)',
    role: 'Lead Product Designer',
    team: 'Founder, 2 Developers, Me',
    year: 2024,
    featured: true,
    caseStudy: {
      hook: "I applied to redesign a few screens. Nine months later, I'd designed both sides of a social commerce platform.",
      role: 'UX/UI Designer (Freelance)',
      duration: 'April \u2013 December 2025',
      platforms: 'Web (Seller) + Mobile (Buyer)',
      team: 'Founder, 2 Developers, Me',
      metrics: [
        { value: '9', label: 'Months' },
        { value: '100+', label: 'Screens' },
        { value: '6', label: 'Feature Areas' },
        { value: '2', label: 'Platforms' },
      ],
      tags: ['UX Design', 'Systems Design', 'Mobile', 'Desktop', 'E-Commerce'],
      workflow: {
        title: 'My UX Workflow \u2014 AI as a Design Thinking Tool',
        description:
          "Claude didn't replace my design thinking \u2014 it let me validate UX decisions faster. The research, the 'why,' the system mapping \u2014 that's me. The rapid prototyping \u2014 that's where AI accelerated the process.",
        steps: [
          { num: '01', label: 'Receive task', detail: 'From founder via WhatsApp' },
          { num: '02', label: 'Clarify', detail: 'Discuss with Claude if unclear' },
          { num: '03', label: 'Research', detail: 'Etsy, Shopify, Instagram patterns' },
          { num: '04', label: 'Prototype', detail: 'Build full flow in Claude artifacts' },
          { num: '05', label: 'Present', detail: 'Screenshot artifact \u2192 founder feedback' },
          { num: '06', label: 'Iterate', detail: 'Refine artifact based on discussion' },
          { num: '07', label: 'Design', detail: 'Move to Figma with OMOC design system' },
          { num: '08', label: 'Polish', detail: 'Final iterations in Figma with founder' },
        ],
      },
      moments: [
        {
          id: 'onboarding',
          number: '01',
          title: 'Seller Onboarding',
          headline: 'A signup form became a compliance system',
          theme: 'Navigating ambiguity when requirements fundamentally change',
          summary:
            'What started as a 4-step signup became a 7-step EU compliance system spanning three entity types. The founder sent a PDF that transformed everything.',
          before:
            "4 generic steps \u2014 email, OTP, store name, profile picture. Wrong input components that didn't match the design system. No compliance handling.",
          after:
            '7 contextual steps with entity-type classification (individual / sole proprietor / company), progressive disclosure per type, real-time VIES validation with 3 states, and design-system-consistent components.',
          details: [
            "Used the founder's PDF spec as a starting point, then built complete flows in Claude artifacts before touching Figma",
            'Applied progressive disclosure \u2014 classify the seller first, then surface only relevant fields per entity type (individual vs. sole proprietor vs. company)',
            'Designed a country selector component from scratch and added it to the design system \u2014 reused the dropdown pattern',
            'Created three VIES validation states: validating (spinner), success (checkmark), error with recovery path',
            "Fixed accessibility issues with input fields the previous design had wrong \u2014 went beyond the brief",
          ],
          insight:
            "I can take ambiguous, expanding requirements and create structured, logical flows. I fix what's broken even when it's not in the brief.",
          images: [
            { url: 'https://res.cloudinary.com/domn0kmbs/image/upload/v1773063308/Frame_1_ife315.png', caption: 'Original 4-step signup', alt: 'OMOC original onboarding flow with basic signup fields' },
            { url: 'https://res.cloudinary.com/domn0kmbs/image/upload/v1773063309/Frame_3_ikypb6.png', caption: 'Entity type classification', alt: 'Seller classification step showing individual, sole proprietor, company options' },
            { url: 'https://res.cloudinary.com/domn0kmbs/image/upload/v1773063489/Frame_5_xfyi0s.png', caption: 'VIES validation states', alt: 'Three validation states: validating, success, and error with recovery' },
            { url: 'https://res.cloudinary.com/domn0kmbs/image/upload/v1773063307/Frame_6_u66laf.png', caption: 'Final 7-step flow', alt: 'Complete onboarding flow overview showing all 7 steps' },
          ],
        },
        {
          id: 'order-management',
          number: '02',
          title: 'Order Management',
          headline: 'Designing how orders flow between two sides of a marketplace',
          theme: 'Systems thinking \u2014 every screen on one side has consequences on the other',
          summary:
            'The biggest piece of work in the project. Nothing existed \u2014 I designed the seller dashboard with 11+ statuses AND the buyer-side cancel/return/complain flows, simultaneously.',
          before:
            'No order management system at all. No dashboard, no status tracking, no buyer-side order actions.',
          after:
            'Full seller dashboard with 11+ order statuses, buyer item-level selection for cancel/return/complain, and chat-based complaint resolution.',
          details: [
            'Deeply researched how Etsy and Shopify handle every order status from both seller and buyer perspectives',
            "Designed the seller dashboard first \u2014 all statuses and flows \u2014 then mapped how each buyer action creates a seller-side status change",
            "For buyer cancellation: created item-by-item selection (not abstract 'full vs partial'), made it clear you're requesting \u2014 not cancelling \u2014 since sellers may have started preparing",
            'Introduced chat-based complaint resolution instead of forms \u2014 based on patterns from Etsy, Binance, AliExpress. Founder loved it, devs confirmed feasibility',
            'Clear communication with founder played a huge role \u2014 we learned what flows were needed as we designed them',
          ],
          insight:
            "I can design complex systems that work across platforms and user types. I think about how one user's action affects another user's experience.",
          images: [
            { url: 'https://res.cloudinary.com/domn0kmbs/image/upload/v1773063699/Frame_7_fyy43n.png', caption: 'Seller order dashboard with 11+ statuses', alt: 'OMOC seller dashboard showing all order statuses' },
            { url: 'https://res.cloudinary.com/domn0kmbs/image/upload/v1773063774/Frame_8_rbpzyp.png', caption: 'Buyer item selection for cancellation', alt: 'Buyer-side item-by-item selection for order cancellation' },
            { url: 'https://res.cloudinary.com/domn0kmbs/image/upload/v1773063811/Frame_9_u2qfnj.png', caption: 'Chat-based complaint resolution', alt: 'Complaint flow with chat-based resolution between buyer and support' },
            { url: 'https://res.cloudinary.com/domn0kmbs/image/upload/v1773063849/Frame_10_qlfuse.png', caption: 'Full order flow mapping', alt: 'Overview of all order management flows across buyer and seller' },
          ],
        },
        {
          id: 'shop-design',
          number: '03',
          title: 'Shop & Store Design',
          headline: 'I designed the builder AND adapted when engineering said no',
          theme: 'Collaboration, pragmatism, and cross-platform design',
          summary:
            'Two connected features: how sellers build their shop (desktop) and how buyers experience it as a store (mobile). Designed buyer-side first, then worked backwards to the builder.',
          before:
            'No shop building tools for sellers. Buyer store view existed but needed redesign.',
          after:
            'Full shop builder with form-based editing, redesigned buyer store with categories, product grid, policies. Live preview editing was cut after dev feedback \u2014 adapted without losing user value.',
          details: [
            'Designed the buyer-facing store first \u2014 what the end result looks like \u2014 then worked backwards to what the builder needs to produce',
            'Store template structure (categories, product grid, policies, color/size selectors) came from my research with Claude, inspired by e-commerce UI kits',
            'Original vision included live preview editing \u2014 devs said too complex to implement',
            'Adapted: kept live preview for viewing, removed editing in preview. Full-width form + separate preview page. Core user value preserved.',
            'Used expanded/condensed design approach for description, reviews, and store policies sections',
          ],
          insight:
            "I handle dev constraints without ego \u2014 I adapt the design while preserving user value. Whenever developers say something can't be done, I understand and find another way.",
          images: [
            { url: 'https://res.cloudinary.com/domn0kmbs/image/upload/v1773063913/Frame_11_fa6wys.png', caption: 'Buyer-facing store template', alt: 'How buyers see a seller\'s shop on mobile' },
            { url: 'https://res.cloudinary.com/domn0kmbs/image/upload/v1773063952/Frame_12_t5ggts.png', caption: 'Seller shop builder form', alt: 'Desktop shop builder with form-based editing' },
            { url: 'https://res.cloudinary.com/domn0kmbs/image/upload/v1773063983/Frame_13_a7zj0v.png', caption: 'Category and product grid', alt: 'Store categories dropdown and product grid layout' },
            { url: 'https://res.cloudinary.com/domn0kmbs/image/upload/v1773064051/Frame_14_y2t0yh.png', caption: 'Store policies section', alt: 'Expandable store policies with shipping, returns, terms' },
          ],
        },
      ],
      resolution: {
        growth:
          "Before OMOC, my UX/UI education was YouTube courses and copying Dribbble designs. I could use Figma, but I had no idea how to create components, work within a design system, or think at a platform level.",
        discovery:
          "My biggest skill isn't designing fancy marketing pages. It's systems thinking \u2014 attention to detail, thinking about the whole workflow, understanding how pieces connect. The founder confirmed this repeatedly.",
        founderQuote: 'I appreciate your attention to detail',
        advice:
          'Keep learning. Research how others have done it. Use AI not to skip thinking but to think faster \u2014 worry about user flows, how users feel, how to solve the real problem instead of wasting time on pixel-level iterations. With practice and continuous learning, you can handle any scope.',
      },
    },
  },
  {
    id: 'dh',
    title: 'DH',
    subtitle: 'iOS B2B Task Management & Communication',
    description:
      'Redesigned and extended a B2B iOS app for small teams who need project management without the complexity of Jira or Asana. Joined mid-project with 40+ screens, combining redesign work with entirely new features including team messaging, workflow management, and a Suite Admin permission system.',
    thumbnail: '/images/dh-thumb.jpg',
    category: 'mobile-app',
    tags: ['iOS Design', 'B2B SaaS', 'Task Management', 'Design Systems'],
    status: 'in-development',
    duration: '2025 – Present',
    role: 'UX/UI Designer',
    year: 2025,
    featured: true,
  },
  {
    id: 'ablenee',
    title: 'Ablenee',
    subtitle: 'Smart Waste Collection for Ethiopian Farmers',
    description:
      'Designed and shipped a 0-to-1 progressive web app for Ethiopian farmers after taking the brief directly from the founder. Started in Figma, then used Figma Make and Claude Code to build and publish it as a live PWA. The app connects farmers with waste collection services in rural Ethiopia.',
    thumbnail: '/images/ablenee-thumb.jpg',
    category: 'web-app',
    tags: ['0→1 Design', 'PWA', 'React', 'Ethiopian Market'],
    status: 'live',
    duration: '2025',
    role: 'UX/UI Designer & Developer',
    year: 2025,
    featured: true,
    liveUrl: 'https://lambagro.vercel.app',
  },
  {
    id: 'outcast',
    title: 'Outcast',
    subtitle: 'Music Collective Website',
    description:
      'Built a complete website from the ground up for Outcast, an Ethiopian artists group. Integrated Supabase as the backend and YouTube as the video layer. Built end-to-end with Claude Code. Currently in final stages, launching soon.',
    thumbnail: '/images/outcast-thumb.jpg',
    category: 'web-app',
    tags: ['Web Development', 'Supabase', 'Music', 'Claude Code'],
    status: 'in-development',
    duration: '2025 – Present',
    role: 'Designer & Developer',
    year: 2025,
    featured: true,
  },
  {
    id: 'hisab',
    title: 'Hisab',
    subtitle: 'Personal Finance App for the Ethiopian Market',
    description:
      'Personal finance management concept app designed for the Ethiopian market, supporting local currency (ETB), TeleBirr and Chapa payment methods, and Ethiopian spending categories.',
    thumbnail: '/images/hisab-thumb.jpg',
    category: 'mobile-app',
    tags: ['Fintech', 'Ethiopian Market', 'Mobile App', 'Concept'],
    status: 'in-development',
    duration: '2025',
    role: 'UX/UI Designer',
    year: 2025,
    featured: false,
  },
  {
    id: 'ideas-lab',
    title: 'Ideas Lab',
    subtitle: 'Article Reading & Learning App',
    description:
      'Designed a 0-to-1 iOS and Android reading and learning app after taking the brief directly from the founder. Complete Figma designs done — covering onboarding, content discovery, reading experience, and progress tracking. Not yet published.',
    thumbnail: '/images/ideas-lab-thumb.jpg',
    category: 'mobile-app',
    tags: ['iOS', 'Android', '0→1 Design', 'EdTech'],
    status: 'in-development',
    duration: '2025',
    role: 'UX/UI Designer',
    year: 2025,
    featured: false,
  },
];

// Helper functions for pages

/** Get a single project by ID */
export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

/** Get all project IDs (for static params generation in Next.js) */
export function getAllProjectIds(): string[] {
  return projects.map((p) => p.id);
}

/** Get projects filtered by category */
export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return projects;
  return projects.filter((p) => p.category === category);
}

/** Get featured projects only */
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

/** Get next/previous project for navigation */
export function getAdjacentProjects(currentId: string): {
  prev: Project;
  next: Project;
} {
  const index = projects.findIndex((p) => p.id === currentId);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { prev, next };
}
