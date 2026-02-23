# CLAUDE.md - Project Instructions

## Project Overview

This is a **Semenawerk Master Template** - a Next.js-based white-label SaaS platform template with multi-tenant theming capabilities.

**Stack:**
- Next.js 16.1.6 (App Router)
- React 19.2.3
- TypeScript 5
- Mantine UI 7.17.8 (component library)
- Tailwind CSS 4 (utility-first styling)
- Storybook 10.2.10 (component development)
- Vitest 4.0.18 + Playwright (testing)

## Architecture & Patterns

### Component Organization

Follow the **Atomic Design** pattern:

```
components/
├── atoms/          # Basic building blocks (Button, Input, etc.)
├── molecules/      # Simple component groups
├── organisms/      # Complex component combinations
└── blocks/         # Full page sections (HeroSection, etc.)
```

**Rules:**
- Atoms contain NO other custom components
- Molecules combine atoms
- Organisms combine molecules and atoms
- Blocks are layout-focused sections for page composition

### Theming System

**Multi-tenant theming** via Mantine's theme override system:

```typescript
// themes/createClientTheme.ts
createClientTheme({
  brandColor: '#D4AF37',  // Client's primary color (default: Ethiopian Gold)
  fontFamily: 'Inter'      // Optional font override
})
```

**Design tokens** are centralized in `themes/tokens.ts`:
- Colors (brand, neutral, semantic)
- Typography (font families, sizes, weights)
- Spacing scale
- Border radius
- Shadows

**IMPORTANT:** All theme customization happens through `createClientTheme()`. Never hardcode colors or spacing values directly in components.

### Storybook Setup

**Configuration:**
- `.storybook/preview.tsx` wraps all stories in MantineProvider
- Must use `createClientTheme()` in preview for consistent theming
- Stories go in `stories/` directory

**Running Storybook:**
```bash
npm run storybook        # Dev server on port 6006
npm run build-storybook  # Build static version
```

### Styling Guidelines

**Prefer Mantine components** over custom Tailwind components:
- Use `<Button>` from `@mantine/core` instead of custom buttons
- Use Mantine's theming props (e.g., `c="brand"`, `size="md"`)
- Only use Tailwind for layout utilities (flexbox, grid, spacing)

**Component styling priority:**
1. Mantine theme props (size, variant, color)
2. Mantine sx prop for one-off styles
3. Tailwind classes for layout only
4. CSS modules as last resort

### TypeScript Conventions

- Use `type` for object shapes, `interface` for extending
- Prefer explicit return types on exported functions
- Use strict mode (enabled by default)
- Component props should be typed: `ComponentProps` pattern

## Development Workflow

### Creating New Components

1. **Create component file:**
   ```typescript
   // components/atoms/MyButton.tsx
   import { Button, ButtonProps } from '@mantine/core';

   export interface MyButtonProps extends ButtonProps {
     customProp?: string;
   }

   export function MyButton({ customProp, ...props }: MyButtonProps) {
     return <Button {...props}>Content</Button>;
   }
   ```

2. **Create Storybook story with autodocs:**
   ```typescript
   // stories/atoms/MyButton.stories.tsx
   import type { Meta, StoryObj } from '@storybook/react';
   import { MyButton } from '../../components/atoms/MyButton';

   const meta: Meta<typeof MyButton> = {
     title: 'Atoms/MyButton',
     component: MyButton,
     parameters: {
       layout: 'padded',
       docs: {
         description: {
           component: `
   **When to use:** [Clear guidance]
   **Ethiopian Design Context:** [How it fits gold/rust/forest brand]
   **Common Patterns:** [Real-world Ethiopian SaaS examples]
   **Accessibility:** [A11y considerations]
           `,
         },
       },
     },
     tags: ['autodocs'], // Enables auto props table in Docs tab
     argTypes: {
       customProp: {
         description: 'Description of this prop',
         control: 'text',
       },
     },
   };
   export default meta;

   type Story = StoryObj<typeof MyButton>;
   export const Default: Story = {
     args: { children: 'Click me' },
     parameters: {
       docs: {
         description: {
           story: 'One-sentence description of what this story demonstrates.',
         },
       },
     },
   };
   ```

3. **Test in Storybook:**
   ```bash
   npm run storybook
   ```

### File Naming Conventions

- Components: PascalCase (`Button.tsx`, `HeroSection.tsx`)
- Stories: `ComponentName.stories.tsx`
- Types: `types.ts` or inline with component
- Utils: camelCase (`createClientTheme.ts`)

### Import Organization

```typescript
// 1. External dependencies
import { Button } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

// 2. Internal absolute imports
import { createClientTheme } from '@/themes/createClientTheme';

// 3. Relative imports
import { MyComponent } from './MyComponent';

// 4. Types
import type { MyProps } from './types';
```

## Key Files & Directories

- `app/` - Next.js App Router pages
- `components/` - Reusable components (atomic design)
- `themes/` - Theming system and design tokens
- `stories/` - Storybook stories
- `.storybook/` - Storybook configuration
  - `preview.tsx` - Global decorators (MantineProvider setup)
  - `main.ts` - Storybook core config

## Common Issues & Solutions

### MantineProvider Error in Storybook

**Error:** "MantineProvider was not found in component tree"

**Solution:** Ensure `.storybook/preview.tsx` (not `.ts`) wraps stories:
```tsx
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { createClientTheme } from '../themes/createClientTheme';

const preview: Preview = {
  decorators: [
    (Story) => (
      <MantineProvider theme={createClientTheme()}>
        <Story />
      </MantineProvider>
    ),
  ],
};
```

### Theme Not Applying

Check that:
1. MantineProvider is in root layout (`app/layout.tsx`)
2. Theme is passed: `<MantineProvider theme={createClientTheme()}>`
3. Mantine styles are imported: `import '@mantine/core/styles.css'`

## Scripts

```bash
npm run dev              # Next.js dev server (port 3000)
npm run build            # Production build
npm run start            # Start production server
npm run lint             # ESLint
npm run storybook        # Storybook dev (port 6006)
npm run build-storybook  # Build Storybook
```

## Testing

- **Vitest:** Unit/component tests
- **Playwright:** Browser/E2E tests
- **Storybook:** Visual testing and component documentation

## Do's and Don'ts

### DO:
✅ Use Mantine components as base building blocks
✅ Leverage the theming system for all colors and spacing
✅ Create Storybook stories for all reusable components
✅ Include `tags: ['autodocs']`, component description, argTypes, and story descriptions in all stories
✅ Follow atomic design principles
✅ Use TypeScript strictly
✅ Keep components focused and single-purpose

### DON'T:
❌ Hardcode colors or spacing values
❌ Create custom components when Mantine provides equivalent
❌ Skip Storybook stories for public components
❌ Skip autodocs metadata (tags, descriptions, argTypes) on new stories
❌ Mix component hierarchy levels incorrectly
❌ Use inline styles except through Mantine's sx prop
❌ Bypass the theme system with direct CSS

## Design System Build Progress

### Brand Identity
- **Palette:** Ethiopian-inspired Gold/Rust/Forest with warm earth tones
- **Primary Gold:** #D4AF37 | **Rust:** #C44536 | **Forest:** #2C5530 | **Earth:** #8B4513
- **Page BG:** #FAF8F3 (cream) | **Dark:** #1A1A1A | **Sand:** #E8D5B7
- **Heading Font:** Space Grotesk | **Body:** Inter | **Mono:** JetBrains Mono

### Phase Completion Status

- [x] **Phase 0: Design System Documentation in Storybook** — DONE
  - `stories/design-system/Colors.stories.tsx` — BrandColors, GoldGradients
  - `stories/design-system/Typography.stories.tsx` — FontFamilies, HeadingScale, BodyTextScale, FontWeights
  - `stories/design-system/Spacing.stories.tsx` — SpacingScale, MantineMapping, BorderRadius
  - `stories/design-system/Shadows.stories.tsx` — StandardShadows, GoldGlowShadows
  - `stories/design-system/Effects.stories.tsx` — GoldTextGradient, GlassMorphism, HabeshaDivider, BrandPatterns
- [x] **Phase 1: Token System** — DONE
  - `themes/tokens.ts` — Ethiopian brand colors (gold/rust/forest/earth), text/bg/semantic colors, Space Grotesk + Inter + JetBrains Mono fonts, gold glow shadows
  - `themes/createClientTheme.ts` — Real tint/shade color scale generation, 5 Mantine color palettes (brand/gold/rust/forest/earth), heading sizes with Space Grotesk, component defaults (Button/Input radius=lg, Card radius=xl), `theme.other` with goldGradient/creamBg/goldGlow
  - `app/layout.tsx` — Google Fonts (Space Grotesk, Inter, JetBrains Mono) as CSS variables, cream background (#FAF8F3), Ethiopian gold theme
- [x] **Phase 2: Form Atoms** — DONE (8 components, 27 stories)
  - Components: `Button`, `Input`, `TextArea`, `Select`, `Checkbox`, `Radio` (+ Radio.Group), `Switch`, `Slider`
  - All default to `color="gold"` where applicable
  - Stories show all variants, sizes, states, brand colors, Ethiopian SaaS use cases (TeleBirr/Chapa payments, ETB currency, Ethiopian cities)
- [x] **Phase 3: Display Atoms** — DONE (6 components, 21 stories)
  - Components: `Badge`, `Card` (+ goldGlow prop + Card.Section), `Avatar` (+ Avatar.Group), `Image`, `Divider` (+ goldGradient/habesha/diamond props), `Icon`
  - Card `goldGlow` — hover adds gold box-shadow + lift
  - Divider `habesha` — Ethiopian flag triple line (green/gold/red)
  - Divider `diamond` — Habesha textile-inspired motif
- [x] **Phase 4: Layout Atoms** — DONE (4 components, 14 stories)
  - Components: `Container` (default 56rem/896px), `Stack`, `Group`, `Grid` (+ Grid.Col)
  - Stories show responsive breakpoints, dashboard stats grid, sidebar layouts
- [x] **Phase 5: Typography Atoms** — DONE (3 components, 15 stories)
  - Components: `Heading` (+ goldGradient prop), `Text` (+ goldGradient prop), `Link` (default gold, underline on hover)
  - Gold gradient: `linear-gradient(135deg, #D4AF37, #E8C84A)` as text fill
- [x] **Phase 6: Feedback Atoms** — DONE (2 components, 10 stories)
  - Components: `Alert` (+ semantic prop: success/error/warning/info with auto color+icon), `Loader` (default gold)
  - Alert semantic mapping: success=forest, error=rust, warning=gold, info=gold
- [x] **Phase 7: Theme Testing** — DONE
  - `themes/clients/` — 3 client theme configs: default (gold #D4AF37), green (forest #2C5530), rust (#C44536) + barrel export
  - `app/demo/page.tsx` — Live demo page with SegmentedControl theme switcher (Gold/Forest/Rust/Earth), shows all 23 atoms
  - Visit `http://localhost:3000/demo` to test
  - Note: `data-mantine-color-scheme="light"` must be on `<html>` tag to avoid hydration mismatch; use `backgroundImage` not `background` shorthand with `backgroundClip`
- [x] **Phase 8: Documentation** — DONE
  - `README.md` — Project overview, quick start, structure, theme customization, special features
  - `ATOMS.md` — Full reference for all 23 atoms with code examples, use cases, Ethiopian design patterns
- [x] **Phase 9: Storybook Autodocs** — DONE (22 components enhanced, Button already had docs)
  - All 22 atom story files enhanced with `tags: ['autodocs']` for auto-generated props tables
  - Component-level descriptions: When to use, Ethiopian Design Context, Common Patterns, Accessibility
  - `argTypes` with descriptions and controls for key props on every component
  - Story-level descriptions explaining what each story demonstrates
  - Custom props documented: `goldGlow` (Card), `goldGradient` (Heading/Text/Divider), `habesha`/`diamond` (Divider), `semantic` (Alert)
  - Storybook build verified — all stories compile and render correctly
- [x] **Phase 10: Storybook Portfolio Pages** — DONE (3 MDX documentation pages)
  - `stories/00-Introduction.mdx` — Welcome/landing page with brand overview, quick navigation, color swatches, "Built For" section
  - `stories/01-Design-Principles.mdx` — Ethiopian cultural elements (gold heritage, habesha patterns, earth tones), interaction patterns (gold glow, glass morphism), typography philosophy, component philosophy, accessibility commitments
  - `stories/02-Theme-Customization.mdx` — Step-by-step theming guide, `createClientTheme` API reference, pre-built theme cards, multi-tenant runtime example, workflow comparison (3 weeks vs half a day), new client checklist
  - MDX files use `import { Meta } from '@storybook/addon-docs/blocks'` (Storybook 10 compatible — NOT `@storybook/blocks`)
  - Numbered prefixes (00-, 01-, 02-) control sidebar ordering — appear before Design System and Atoms sections
- [x] **Phase 11: Portfolio Hero Section** — DONE (3 new components, 8 stories)
  - `components/atoms/RotatingText.tsx` — CSS keyframe animated text cycler with gold gradient, slide-up/fade transitions (400ms cubic-bezier), no Framer Motion
  - `components/molecules/Navigation.tsx` — Glassmorphic sticky nav bar, pill-shaped desktop, hamburger-to-X mobile, `backdrop-filter: blur(20px)`, gold Z logo
  - `components/blocks/HeroSection.tsx` — Full-viewport dark hero with inline profile image between text, rotating taglines, availability badge, dual CTAs, staggered fade-in entry animations (0-700ms)
  - `app/page.tsx` — Updated to render Navigation + HeroSection as portfolio homepage
  - `stories/atoms/RotatingText.stories.tsx` — 3 stories (Default, CustomPhrases, FastInterval)
  - `stories/molecules/Navigation.stories.tsx` — 3 stories (Default, WithCustomLinks, MobileView)
  - `stories/blocks/HeroSection.stories.tsx` — 2 stories (Default, WithoutProfileImage)
  - Profile image path: `public/images/profile.jpg` (user must add their own image)
  - Note: CTA buttons use `MantineButton` directly (not the custom `Button` atom) because the atom's `ButtonProps` doesn't expose the polymorphic `component` prop needed for `component="a"`
  - Responsive heading uses `clamp(2.125rem, 5vw + 1rem, 5rem)` for fluid sizing
  - Image sizes: 64px desktop → 56px tablet → 40px mobile via `clamp(40px, 5vw + 8px, 64px)`
- [x] **Phase 12: Portfolio Page Redesign (V1)** — DONE (Hero v2 + Project Showcase, dark theme)
  - Tagged as `v1` — dark theme with `#1A1A1A` background, gold radial glows
  - HeroSection v2: editorial left-aligned layout, section counters, staggered animations
  - ProjectShowcase: 2-column grid, ScrollReveal, hover effects, Load More button
  - See `git show v1` for full dark theme state
- [x] **Phase 13: Light Theme Redesign (V2)** — DONE
  - **Theme switch:** Dark (#1A1A1A) → Light/Cream (#FAF8F3) across entire site
  - **HeroSection v3** — Two-column layout with inline illustration:
    - Cream background (#FAF8F3), all text colors adapted for light bg
    - "Hello, I'm" in dimmed gray (#ACACAC), "Zeamanuel!" gold gradient, bold text in dark (#2C2C2C)
    - Subtitle dimmed parts (#ACACAC), "UX Systems Designer" gold gradient, RotatingText gold
    - Two-column flexbox: text content left (~60%), coffee ceremony illustration right (~40%)
    - Illustration: inline content element (not absolute positioned), rounded corners (`clamp(16px, 2vw, 28px)`), earth-tone shadow
    - Responsive: stacks vertically at ≤860px, illustration centers below text
    - "Open to collaboration" badge with gold border + forest green dot
    - Location text, CTA button, description in bottom group
    - Profile image: 72px with gold border, hover glow effect
    - CSS media queries in `<style>` tag for `.hero-layout` and `.hero-illustration-col` responsive behavior
  - **ProjectShowcase v2** — Light theme adaptation:
    - Transparent bg (sits on cream `<main>`)
    - Text: primary #2C2C2C for titles, secondary from tokens for descriptions/tags
    - Thumbnail: cream placeholder (#F0EDE6), light border (`rgba(0,0,0,0.06)`), subtle shadow
    - Hover: earth-tone shadow (`rgba(139,69,19,0.1)`), gold border glow, title turns gold (#B8941F)
    - Tags: light bg (`rgba(0,0,0,0.03)`), subtle border, secondary text color
    - Section header: dimmed labels (`rgba(0,0,0,0.2)`), gold accent line at 25% opacity
    - Load More button: gold outline variant
    - Image error fallback: cream-to-gold gradient instead of dark gradient
  - **Page composition** (`app/page.tsx`):
    - `<main style={{ backgroundColor: '#FAF8F3', overflowX: 'hidden' }}>` — cream base
    - Navigation → HeroSection → ProjectShowcase
  - **Illustration:** `public/images/coffee-ceremony.jpg` — Ethiopian coffee ceremony (two hands passing sini cup), warm golden/brown tones

### Component Inventory (24 atoms + 1 molecule + 2 blocks)

All atoms in `components/atoms/` with barrel export via `components/atoms/index.ts`:

| Category | Components |
|----------|-----------|
| **Form (8)** | Button, Input, TextArea, Select, Checkbox, Radio, Switch, Slider |
| **Display (6)** | Badge, Card, Avatar, Image, Divider, Icon |
| **Layout (4)** | Container, Stack, Group, Grid |
| **Typography (3)** | Heading, Text, Link |
| **Feedback (2)** | Alert, Loader |
| **Animation (1)** | RotatingText |

Molecules in `components/molecules/` with barrel export via `components/molecules/index.ts`:

| Category | Components |
|----------|-----------|
| **Navigation (1)** | Navigation |

Blocks in `components/blocks/` with barrel export via `components/blocks/index.ts`:

| Category | Components |
|----------|-----------|
| **Hero (1)** | HeroSection |
| **Showcase (1)** | ProjectShowcase |

### Storybook Documentation Pattern
All atom stories follow a consistent autodocs pattern:
- `tags: ['autodocs']` on meta — generates Docs tab with auto props table
- `parameters.docs.description.component` — 4-section markdown (When to use / Ethiopian Design Context / Common Patterns / Accessibility)
- `argTypes` with `description` and `control` for key props
- `parameters.docs.description.story` on each story — one-sentence explanation
- See any story in `stories/atoms/` as reference (e.g., `Badge.stories.tsx`)

### Important Notes for Next Session
- Token system is COMPLETE — `themes/tokens.ts` has all Ethiopian brand colors
- `createClientTheme()` generates real tint/shade scales (not opacity hacks)
- All atoms use Mantine as base with brand defaults (gold color, lg radius)
- Storybook preview wraps with MantineProvider via `.storybook/preview.tsx`
- Design system stories (Phase 0) use hardcoded hex values (they're docs) — actual components use theme tokens
- Stories organized: `stories/design-system/` for docs, `stories/atoms/` for components
- All 23 atom stories have autodocs with props tables, descriptions, and Ethiopian context
- MDX documentation pages use `@storybook/addon-docs/blocks` for `Meta` import (NOT `@storybook/blocks` which is incompatible with Storybook 10)
- Storybook sidebar order: Introduction → Design Principles → Theme Customization → Design System → Atoms → Molecules → Blocks
- New directories: `components/molecules/`, `components/blocks/`, `stories/molecules/`, `stories/blocks/`
- RotatingText is a pure CSS animation atom (no Mantine base) — uses `@keyframes` + `useState`/`useEffect`
- Navigation uses `window.innerWidth` + resize listener for mobile detection (no Mantine `useMediaQuery` — keeps it dependency-light)
- HeroSection uses `'use client'` directive for animations and RotatingText state
- For polymorphic Mantine components (e.g., Button as `<a>`), use `MantineButton` directly instead of the custom atom wrapper
- **Portfolio page background strategy:** `<main>` has `backgroundColor: '#FAF8F3'` (cream), sections are transparent on top
- **HeroSection illustration:** Coffee ceremony image is an inline flexbox column (not absolute positioned), responsive via CSS media queries in `<style>` tag
- **ProjectShowcase** uses CSS class `.showcase-grid` for responsive 1→2 column layout (media query at 640px) since inline styles can't do `@media`
- **ScrollReveal** helper in ProjectShowcase uses IntersectionObserver (`threshold: 0.1`) for scroll-triggered fade-in animations
- Project images go in `public/images/projects/` — cards gracefully fall back to gradient placeholders on missing images
- **V1 tagged as `v1`** — dark theme checkpoint
- **V2 tagged as `v2`** — light/cream theme with inline illustration
- **V3 tagged as `v3`** — hero text restructured into 4 lines, availability badge moved inline

## Future Features (from global CLAUDE.md)

Planned features for Ethiopian SaaS context:
- Offline sync capability
- Receipt capture with camera
- Payment integration (TeleBirr, Chapa)

---

**Last Updated:** 2026-02-23
**Template Version:** 3.0.0 (V3 — Hero Text Restructured into 4 Lines)
