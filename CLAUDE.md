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
  - `themes/createClientTheme.ts` — Real tint/shade color scale generation, 5 Mantine color palettes (brand/gold/rust/forest/earth), heading sizes with Space Grotesk, component defaults (Button/Input radius=lg, Card radius=xl), `theme.other` with goldGradient/creamBg/goldGlow (shadow tokens kept in theme, Card no longer uses goldGlow prop)
  - `app/layout.tsx` — Google Fonts (Space Grotesk, Inter, JetBrains Mono) as CSS variables, cream background (#FAF8F3), Ethiopian gold theme
- [x] **Phase 2: Form Atoms** — DONE (8 components, 27 stories)
  - Components: `Button`, `Input`, `TextArea`, `Select`, `Checkbox`, `Radio` (+ Radio.Group), `Switch`, `Slider`
  - All default to `color="gold"` where applicable
  - Stories show all variants, sizes, states, brand colors, Ethiopian SaaS use cases (TeleBirr/Chapa payments, ETB currency, Ethiopian cities)
- [x] **Phase 3: Display Atoms** — DONE (6 components, 21 stories)
  - Components: `Badge`, `Card` (+ gold border + hover lift + Card.Section), `Avatar` (+ Avatar.Group), `Image`, `Divider` (+ goldGradient/habesha/diamond props), `Icon`
  - Card — 1px gold border, hover lifts 4px with neutral shadow (all cards, no prop needed)
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
  - Custom props documented: `goldGradient` (Heading/Text/Divider), `habesha`/`diamond` (Divider), `semantic` (Alert)
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

- [x] **Phase 14: Animation & Interaction Library (Phase 1)** — DONE (5 components, hooks + MDX remaining)
  - **Dependencies added:** `framer-motion`, `gsap`, `lenis`
  - **New directory:** `components/animations/` with barrel export via `components/animations/index.ts`
  - **New directory:** `stories/animations/`
  - Components built (5/5):
    - `ScrollReveal` — Framer Motion `useInView` + `motion.div`, fades/slides children into view on scroll. Props: direction (up/down/left/right/none), duration, delay, distance, once, threshold, easing. 4 stories.
    - `StaggerGroup` — Framer Motion `variants` + `staggerChildren`, reveals children sequentially. Uses `Children.toArray` to wrap each child in `motion.div`. Props: staggerDelay, direction, duration, distance, once, threshold. 5 stories.
    - `ParallaxLayer` — GSAP + ScrollTrigger (dynamically imported via `await import()`), scroll-speed offset. Uses `gsap.context()` for cleanup. Disabled on mobile (<768px). Props: speed, direction. 3 stories.
    - `AnimatedCounter` — Framer Motion `useMotionValue` + `animate`, counts from start to target on viewport entry. Formats with `Intl`-style separators. Props: target, start, duration, delay, prefix, suffix, decimals, separator, once. 4 stories.
    - `MagneticElement` — Framer Motion `useMotionValue` + `useSpring`, cursor-following hover effect. Disabled on touch devices via `(hover: hover)` media query. Props: strength, radius, springConfig. 4 stories.
  - Remaining: `hooks/useSmoothScroll.ts`, `hooks/useScrollProgress.ts`, `stories/animations/00-Animation-Overview.mdx`, `stories/animations/SmoothScroll.stories.tsx`
  - All animation components are `'use client'` and respect `prefers-reduced-motion`
  - GSAP and Lenis must be dynamically imported (browser-only); Framer Motion can be imported normally
  - Animation stories follow same autodocs pattern: What it does / When to use / Animation Library / Performance / Accessibility
- [x] **Phase 15: Dark/Light Theme Toggle** — DONE
  - **Approach:** CSS custom properties + React context — no Mantine dark mode, no component duplication
  - **New files created:**
    - `components/ThemeContext.tsx` — `ThemeProvider` component + `useTheme()` hook. Stores mode in `localStorage` (`semenawerk-theme` key), applies 20 CSS custom properties (`--theme-*`) to `document.documentElement` via `useEffect`, sets `data-theme` attribute on `<html>`
    - `components/molecules/ThemeToggle.tsx` — Pill-shaped toggle switch (60x30px), sun icon left / moon icon right, gold translucent sliding indicator (350ms spring), `role="switch"` + `aria-checked`, inactive icon dimmed to 35% opacity, uses `@tabler/icons-react` `IconSun`/`IconMoon`
  - **`themes/tokens.ts`** — Added `themeColors` map with `light` and `dark` color sets (20 tokens each: bg, bgPage, text, textSecondary, textDimmed, gold, goldGradientFrom/To, cardBg/Border/Shadow/HoverShadow, tagBg/Border, badgeBorder/Bg, navBg/Border, accentLine). Added `ThemeMode` type export.
  - **`components/blocks/HeroSection.tsx`** — All hardcoded colors replaced with `var(--theme-*)` CSS custom properties. Background changed from `var(--theme-bg)` (white) to `var(--theme-bg-page)` (cream/dark) for unified look with ProjectShowcase. Gold gradient text uses `var(--theme-gold-from)` / `var(--theme-gold-to)`. Padding increased: top `clamp(148px, 14vw, 200px)`, bottom `clamp(64px, 8vh, 100px)`. All color transitions 400ms ease.
  - **`components/blocks/ProjectShowcase.tsx`** — Same CSS var treatment: card backgrounds (`var(--theme-card-bg)`), text colors, tag styles, borders, shadows, hover effects all theme-aware. Gold gradient text uses vars. Image error fallback uses vars.
  - **`components/molecules/Navigation.tsx`** — Added `<ThemeToggle />` after links on desktop, next to hamburger on mobile. Removed unused `keyframes` const.
  - **`app/layout.tsx`** — Wrapped children in `<ThemeProvider>`. Added anti-FOUC inline `<script>` that reads `localStorage` before first paint. Body uses `var(--theme-bg-page, #FAF8F3)` with 400ms transition fallback. Kept `data-mantine-color-scheme="light"` (Mantine stays light-styled).
  - **`app/page.tsx`** — Replaced `designTokens.colors.background.cream` with `var(--theme-bg-page, #FAF8F3)`. Removed `designTokens` import.
  - **`components/molecules/index.ts`** — Added `ThemeToggle` export
  - **CSS Custom Properties set by ThemeProvider:** `--theme-bg`, `--theme-bg-page`, `--theme-text`, `--theme-text-secondary`, `--theme-text-dimmed`, `--theme-gold`, `--theme-gold-from`, `--theme-gold-to`, `--theme-card-bg`, `--theme-card-border`, `--theme-card-shadow`, `--theme-card-hover-shadow`, `--theme-tag-bg`, `--theme-tag-border`, `--theme-badge-border`, `--theme-badge-bg`, `--theme-nav-bg`, `--theme-nav-border`, `--theme-accent-line`
  - **Light mode gold:** `#8B6914` (a11y-safe ~4.9:1 contrast on white) for text, `#8B6914→#B8941F` gradient
  - **Dark mode gold:** `#D4AF37` (original gold pops on dark), `#D4AF37→#E8C84A` gradient
  - **Transition strategy:** All themed elements have `transition: [property] 400ms ease` for smooth toggling. Body and sections have `transition: background-color 400ms ease`.
- [x] **Phase 16: Skills Section** — DONE (1 new block, 2 stories)
  - `components/blocks/SkillsSection.tsx` — Editorial-style capabilities grid with 6 skill cards
  - Section header matches ProjectShowcase pattern: heading with prefix + gold accent word ("What I" + "Bring"), right-aligned tagline with gold accent word
  - 3×2 card grid on desktop (`md: 4` span), 2-column on tablet (`sm: 6`), single column on mobile
  - Each card: Icon atom (gold, light variant) + h3 title + description, using Card atom (gold border + hover lift)
  - All cards uniform style — no featured/dark card variant
  - Uses `var(--theme-*)` CSS custom properties throughout for dark/light theme support
  - ScrollReveal on header + staggered delays on each card (0.08s increments)
  - Same spacing/layout tokens as ProjectShowcase: `clamp` padding, `64rem` max-width, `clamp(2.5rem, 5vh, 4rem)` header gap
  - Icons: `IconStack2` (Design Systems), `IconRobot` (AI-Augmented Dev), `IconCode` (Frontend Dev), `IconBulb` (UX/UI), `IconBolt` (Rapid Prototyping), `IconUsers` (User Research)
  - `stories/blocks/SkillsSection.stories.tsx` — 2 stories (Default, DarkBackground)
  - `app/page.tsx` — Added after ProjectShowcase: Navigation → HeroSection → ProjectShowcase → SkillsSection
- [x] **Phase 17: Contact Section + Footer** — DONE (2 new blocks, 2 stories)
  - `components/blocks/ContactSection.tsx` — CTA contact form with editorial heading, service chips, underline inputs
    - Section header matches ProjectShowcase/SkillsSection pattern: "Say Hi!" in gold gradient + suffix in theme text, right-aligned subtitle
    - Form fields: Name + Email (2-col), Company (full), service chips (multi-select Badge toggles), Message (TextArea), Submit button
    - Underline-style inputs: `variant="unstyled"` with bottom border using `var(--theme-accent-line)`, no border-radius
    - Service chips: Badge atoms wrapped in `<button>` elements (Badge doesn't expose `onClick`), outline→filled gold on selection
    - Gold pill "Send Me →" button (matches hero's "View My Work" style) left-aligned with response time text, wrapped in MagneticElement
    - Static form (`e.preventDefault()`) — ready for Formspree/EmailJS/API route
    - `stories/blocks/ContactSection.stories.tsx` — 1 story (Default)
  - `components/blocks/Footer.tsx` — Minimal footer with gold logo, divider, social links, copyright
    - Gold circle "Z" logo (40px), `Divider goldGradient`, 5 social links (Dribbble/LinkedIn/Instagram/Behance/Upwork)
    - Social links use raw `<a>` tags (Link atom doesn't expose `target` prop), dimmed→gold hover via state, dot separators between links
    - Email link in gold next to copyright
    - Italic tagline right-aligned with logo ("Designing with purpose, building with precision.")
    - Dynamic copyright year via `new Date().getFullYear()`
    - ScrollReveal on logo+tagline row, divider, and links row
    - `stories/blocks/Footer.stories.tsx` — 1 story (Default)
  - **Atom limitations discovered:**
    - Badge atom doesn't expose `onClick` — wrap in `<button style="all:unset">` for clickable chips
    - Button atom doesn't expose `type` — omit `type="submit"` (form uses `onSubmit` on `<form>`)
    - Link atom doesn't expose `target` — use raw `<a>` with inline hover handlers for external links
  - `app/page.tsx` — Navigation → HeroSection → ProjectShowcase → SkillsSection → ContactSection → Footer
- [x] **Phase 18: UX Polish & Bug Fixes** — DONE
  - **ContactSection refinements:**
    - Service chips default state: `variant="default"` with `var(--theme-tag-bg/border)` for darker/more visible unselected chips
    - Submit button: replaced dark Button atom with gold `MantineButton` matching hero's "View My Work" style (pill, `9px 22px` padding, MagneticElement wrapper)
    - Submit row: changed from right-aligned to left-aligned (`justify="flex-start"`)
    - Form labels (Name, Email, Company name, Message): added `labelStyle` with `color: var(--theme-text)` so labels are bright white in dark mode
  - **Mobile navigation overhaul:**
    - Full-screen overlay (`100vh`, `position: fixed`, `inset: 0`) instead of small dropdown
    - Large editorial link text (`clamp(2rem, 8vw, 3.5rem)`) with Space Grotesk heading font, centered vertically
    - Staggered entrance: CSS `@keyframes menuLinkIn` with per-link delays (100ms, 180ms, 260ms, 340ms)
    - Bottom bar: "Available for projects" label + email link pinned to bottom
    - Body + html scroll lock when menu is open
    - Conditionally rendered (`{menuOpen && ...}`) to prevent phantom scrollbar from always-in-DOM fixed overlay
    - **Theme-aware:** uses `useTheme()` hook — dark mode: `#121212` bg, sand text, bright gold hover; light mode: `#FAF8F3` cream bg, `#2C2C2C` dark text, `#8B6914` darker gold hover
  - **Footer improvements:**
    - Added logo + italic tagline row (logo left, tagline right)
    - Dot separators between social links for visual rhythm
    - Added email link (`hello@zeamanuel.com`) in gold next to copyright
    - Social links hover managed via `useState` (not inline handlers) for cleaner state
  - **Bug fixes:**
    - `suppressHydrationWarning` on `<html>` tag to prevent SSR hydration mismatch from anti-FOUC `data-theme` script
    - Moved `overflowX: 'hidden'` from `<main>` to `<body>` in `app/layout.tsx` to fix double scrollbar issue
    - Mobile menu overlay changed from `opacity: 0` always-in-DOM to conditional render to eliminate phantom scrollbar

- [x] **Phase 19: Project Data Layer** — DONE
  - **New directory:** `data/` with barrel export via `data/index.ts`
  - `data/projects.ts` — Typed project data with `Project` interface (id, title, subtitle, description, thumbnail, category, tags, status, duration, role, year, featured, team, caseStudy)
  - 6 projects: DH (iOS task management), OMOC (social commerce), Ablenee (accessibility), Outcast (creative community), Hisab (finance), Ideas Lab (innovation)
  - 5 helper functions: `getProjectById()`, `getAllProjectIds()`, `getProjectsByCategory()`, `getFeaturedProjects()`, `getAdjacentProjects()` (wraps around for prev/next navigation)
  - 4 featured projects: DH, OMOC, Ablenee, Outcast (in that order)
  - Real thumbnail images in `public/images/`: `dh-thumb.jpg`, `omoc-thumb.jpg`, `ablenee-thumb.jpg`, `outcast-thumb.jpg`
  - `ProjectShowcase` updated to import from `data/` via `getFeaturedProjects()` instead of hardcoded placeholder data
- [x] **Phase 20: Work Page (/work)** — DONE (1 new block, 2 stories)
  - `components/blocks/WorkPage.tsx` — All-projects grid with filter bar
    - Header: "Selected Work" (gold gradient accent) + project count in mono font, gold bottom border (15% opacity)
    - Filter bar: 5 category chips (All / Mobile App / E-Commerce / Web App / Framer), `role="tablist"` + `aria-selected`, active = gold filled, inactive = tag style
    - Responsive grid: 1 col mobile → 2 col tablet (640px) → 3 col desktop (1024px) via CSS `@media` in `<style>` tag
    - Cards: 16:10 thumbnail, gold gradient category label, title, tags, description, "View Case Study →" link to `/work/[project.id]`
    - ScrollReveal animations with staggered delays (0.05s increments)
    - All colors via `var(--theme-*)` — fully theme-aware
  - `app/work/page.tsx` — Route with Navigation + WorkPage + Footer, SEO metadata
  - `stories/blocks/WorkPage.stories.tsx` — 2 stories (Default, DarkBackground) with full autodocs
  - Navigation "Work" link updated from `#work` to `/work`
- [x] **Phase 21: Case Study Page (/work/[slug]) — Storytelling Redesign** — DONE (1 block rewritten, 1 new molecule, 5 stories)
  - **Data types rewritten** (`data/projects.ts`): Replaced old `CaseStudy`/`CaseStudySection`/`ProjectImage` with storytelling structure — `CaseStudy` (hook, role, duration, platforms, team, metrics, tags, workflow, moments, resolution), `CaseStudyMoment` (before/after, details, insight, images), `CaseStudyWorkflowStep`, `CaseStudyResolution` (growth, discovery, founderQuote, advice), `CaseStudyImage`
  - **OMOC case study data**: Full storytelling content — hook quote, 4 metrics, 5 tags, 8-step AI workflow, 3 moments (Onboarding, Order Management, Shop Design) each with before/after/details/insight/4 images, resolution with growth arc + founder quote + advice
  - **`components/molecules/ImageSlider.tsx`** — New image carousel molecule:
    - Displays 1 image at a time with crossfade animation (`@keyframes sliderFadeIn`)
    - Left/right arrow buttons + dot indicators (`role="tablist"` + `aria-selected`) + counter badge "2 / 4"
    - Keyboard navigation (ArrowLeft/ArrowRight), touch swipe support (50px threshold)
    - Gold accent on active dot and arrow hover, graceful image error fallback
    - Uses `Image` atom for rendering, `Text` atom for caption
    - Single image mode: hides arrows, dots, and counter
    - Props: `images`, `height` (default 400), `borderRadius` (default xl)
    - `stories/molecules/ImageSlider.stories.tsx` — 3 stories (Default, SingleImage, WithCaptions) with full autodocs
  - **`components/blocks/CaseStudyPage.tsx`** — Complete rewrite with storytelling structure:
    - **ScrollProgress**: Fixed 3px gold gradient bar tracking scroll %, `zIndex: 100`
    - **Hero**: `var(--theme-bg-page)` background (cream light / dark dark — consistent with homepage), inline "← Back to Work" link, `Badge` pills for tags (`size="lg"`, `radius="xl"`, body font, normal case), `Heading` atoms for title/subtitle (subtitle uses `goldGradient`), hook quote with gold left border, 4-col meta grid (Role/Duration/Platform/Team)
    - **Metrics Bar**: `var(--theme-bg)` background, 4-col grid (2-col mobile), `Heading goldGradient` values, mono dimmed labels
    - **Workflow**: `var(--theme-bg-page)` background, gold "PROCESS" mono label, `Card` atoms in responsive grid with step num/label/detail
    - **4 Moment Sections**: Alternating `var(--theme-bg)` / `var(--theme-bg-page)` backgrounds. Each: gold mono "MOMENT 01" label + italic theme, `Heading` title, quoted headline, summary paragraph, Before/After `Card` pair (side-by-side → stacked mobile via `.cs-before-after-grid` media query, rust "BEFORE" / forest "AFTER" labels), `ImageSlider` for screenshots, expandable details with gold dot bullets + insight callout (gold left border + gold-tinted bg), expand/collapse `<button>` with rotating chevron + `aria-expanded`
    - **Resolution**: `var(--theme-bg-page)` background, growth/discovery paragraphs, `Heading goldGradient` italic founder quote, advice `Card` with `var(--theme-card-bg)`
    - **CTA**: `var(--theme-bg)` background, "Let's Talk" gold `MantineButton` → `/contact`, "← Back to Work" outline → `/work`
    - **Next Project**: `var(--theme-bg-page)` background, dimmed "Next Project" label, title link with gold arrow, `Divider habesha` (200px)
    - **Fallback**: Projects without case study get clean hero + description + tags + "coming soon" — all using theme vars
    - **No hardcoded dark sections**: All backgrounds use `var(--theme-*)` — cream in light mode, dark in dark mode. No more forced #1A1A1A hero/resolution in light mode.
    - **No scroll indicator**: Removed "SCROLL" label + bouncing arrow
    - **No redundant footer**: Route already has `<Footer />`, CaseStudyPage component ends with Next Project section
  - `app/work/[slug]/page.tsx` — Dynamic route with `generateStaticParams()` for all 6 slugs, `generateMetadata()` for SEO, 404 via `notFound()`. Removed `overflowX: 'hidden'` from `<main>` (body handles it).
  - `stories/blocks/CaseStudyPage.stories.tsx` — 2 stories (OMOCCaseStudy, NoCaseStudy) with full autodocs
  - `public/images/placeholder-screen.svg` — Dashed-border SVG placeholder with "Figma Screenshot" text, all OMOC images point here until real exports added
  - `public/images/case-studies/omoc/` — Directory created for real Figma exports
- [x] **Phase 22: About Page (/about)** — DONE (1 new block, 2 stories)
  - `components/blocks/AboutPage.tsx` — Personal editorial page with 4 zones:
    - Intro section: Two-column (stacks <768px), profile photo left (280px, gold border + glow, hover lift), bio right with name (gold gradient on "Alemu"), subtitle, bio paragraph (line-height: 1.75), social links (LinkedIn/Dribbble/Behance with dot separators), "Available for projects" forest badge
    - Skills section: Cream bg, "What I Do" heading, 4-col grid (2-col mobile) of 8 skill cards (gold icon + name + description), hover lift
    - Experience section: White bg, timeline layout — gold mono year left, role/company/description right, Divider between entries. 4 entries: OMOC, Ablenee, DH, Outcast
    - Values section: Dark #1A1A1A bg, 3 glassmorphic cards (`backdrop-filter: blur(12px)`), gold icons, white titles, sand descriptions. Human-First Design / Ship Then Iterate / Bridge the Gap
  - `app/about/page.tsx` — Route with Navigation + AboutPage + Footer, SEO metadata
  - `stories/blocks/AboutPage.stories.tsx` — 2 stories (Default, CustomBio) with full autodocs
  - Navigation "About" link updated from `#about` to `/about`
- [x] **Phase 23: Contact Page (/contact)** — DONE (1 new block, 1 story)
  - `components/blocks/ContactPage.tsx` — Two-column conversion-focused contact page
    - Header: "Let's Work Together" (gold gradient accent), dimmed subtitle, "Available for Projects" forest badge
    - Left column (form): Name, Email, Select (project type: UX Design/Design System/Prototyping/AI Integration/Other), TextArea, gold pill submit button (MagneticElement), response time info text
    - Right column (direct channels): 4 channel cards (Email/LinkedIn/GitHub/Upwork) with gold icons + labels + links, habesha divider, working hours text
    - Underline-style inputs matching ContactSection pattern
    - Responsive: stacks single-column on mobile (form first, channels second) at <768px
    - All colors via `var(--theme-*)`, fully theme-aware
  - `app/contact/page.tsx` — Route with Navigation + ContactPage + Footer, SEO metadata
  - `stories/blocks/ContactPage.stories.tsx` — 1 story (Default) with full autodocs
  - Navigation "Contact" link updated from `#contact` to `/contact`

### Component Inventory (24 atoms + 6 molecules + 9 blocks + 5 animations + 1 context)

All atoms in `components/atoms/` with barrel export via `components/atoms/index.ts`:

| Category | Components |
|----------|-----------|
| **Form (8)** | Button, Input, TextArea, Select, Checkbox, Radio, Switch, Slider |
| **Display (6)** | Badge, Card, Avatar, Image, Divider, Icon |
| **Layout (4)** | Container, Stack, Group, Grid |
| **Typography (3)** | Heading, Text, Link |
| **Feedback (2)** | Alert, Loader |
| **Animation (1)** | RotatingText |

Context providers in `components/`:

| Category | Components |
|----------|-----------|
| **Theme (1)** | ThemeContext (ThemeProvider + useTheme hook) |

Molecules in `components/molecules/` with barrel export via `components/molecules/index.ts`:

| Category | Components |
|----------|-----------|
| **Navigation (1)** | Navigation |
| **Theme (1)** | ThemeToggle |
| **Media (2)** | ImageSlider, AlbumArtPanel (disabled — Ethiopiques side panels, Notion-powered, needs album art data) |
| **Interaction (1)** | CustomCursor (custom cursor overlay for project card hover) |
| **Cards (1)** | ProjectCardWide (wide project card with mockup frame, used by ProjectShowcase) |

Blocks in `components/blocks/` with barrel export via `components/blocks/index.ts`:

| Category | Components |
|----------|-----------|
| **Hero (1)** | HeroSection |
| **Showcase (1)** | ProjectShowcase |
| **Skills (1)** | SkillsSection |
| **Contact (2)** | ContactSection, ContactPage |
| **Footer (1)** | Footer |
| **Pages (3)** | WorkPage, CaseStudyPage, AboutPage |

Data layer in `data/` with barrel export via `data/index.ts`:

| Category | Files |
|----------|-------|
| **Projects (1)** | projects.ts (6 projects, 5 helpers, Project + CaseStudy + CaseStudyMoment types) |
| **Album Art (1)** | albumArt.ts (AlbumTile type, static placeholder data — used as fallback when Notion unavailable) |

Notion CMS layer in `lib/`:

| Category | Files |
|----------|-------|
| **Client (1)** | notion.ts (Notion SDK v5 client, uses `NOTION_API_KEY` from env) |
| **Data Fetchers (1)** | notion-data.ts (fetchProjects, fetchFeaturedProjects, fetchProjectBySlug, fetchAllProjectSlugs, fetchCaseStudyMoments, fetchSiteContent, fetchAlbumArt + NotionProject/NotionCaseStudyMoment/SiteSection/NotionAlbumTile types) |

Animations in `components/animations/` with barrel export via `components/animations/index.ts`:

| Category | Components |
|----------|-----------|
| **Scroll (2)** | ScrollReveal, ParallaxLayer |
| **Sequence (1)** | StaggerGroup |
| **Data (1)** | AnimatedCounter |
| **Interaction (1)** | MagneticElement |

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
- **Portfolio page background strategy:** `<main>` and hero section both use `var(--theme-bg-page)` (cream in light, #1A1A1A in dark), ProjectShowcase is transparent on top
- **HeroSection illustration:** Coffee ceremony image is an inline flexbox column (not absolute positioned), responsive via CSS media queries in `<style>` tag
- **ProjectShowcase** uses CSS class `.showcase-grid` for responsive 1→2 column layout (media query at 640px) since inline styles can't do `@media`
- **ScrollReveal** helper in ProjectShowcase uses IntersectionObserver (`threshold: 0.1`) for scroll-triggered fade-in animations
- Project images go in `public/images/projects/` — cards gracefully fall back to gradient placeholders on missing images
- **V1 tagged as `v1`** — dark theme checkpoint
- **V2 tagged as `v2`** — light/cream theme with inline illustration
- **V3 tagged as `v3`** — hero with clear type hierarchy: name (largest) > role (medium heading) > static creative copy (body) > badge+location. Rotating text removed, all phrases woven into flowing description. RotatingText import removed from HeroSection.
- **Animation components** are content-agnostic wrappers — they accept `children` and add animation behavior. Never import atoms inside animation components; only import atoms in their Storybook stories for demo content.
- **GSAP cleanup pattern:** Use `gsap.context()` and call `ctx.revert()` in useEffect cleanup — this kills all ScrollTrigger instances created within the context.
- **ParallaxLayer** calculates offset as `(1 - speed) * 200` with `scrub: true` for frame-perfect scroll sync.
- **MagneticElement** uses `useSpring` wrapping `useMotionValue` for natural spring physics on cursor-following.
- **Card atom updated:** Removed `goldGlow` prop entirely. All cards now have 1px gold border + 4px hover lift with neutral shadow (useState-based, `'use client'`).
- **Dark/Light theme toggle architecture:** CSS custom properties on `:root` + React context (`ThemeProvider` + `useTheme()`). Components use `var(--theme-*)` in inline styles and `<style>` tags. Mantine stays in light mode — our custom theming is a separate layer on top.
- **ThemeToggle** is a pill-shaped switch (60x30px) with `role="switch"`, not a simple icon button. Sun left, moon right, gold sliding pill indicator.
- **Anti-FOUC script** in `app/layout.tsx` `<head>` reads `localStorage('semenawerk-theme')` synchronously before React hydrates, sets `data-theme` attribute to prevent flash of wrong theme.
- **Theme persistence:** `localStorage` key is `semenawerk-theme`, values `'light'` | `'dark'`, defaults to `'light'` if absent.
- **Gold color adaptation:** Light mode uses a11y-safe darker gold (`#8B6914`) for text contrast on cream/white. Dark mode uses original bright gold (`#D4AF37`) which pops on dark backgrounds. Gold gradients similarly adapt via `--theme-gold-from`/`--theme-gold-to`.
- **All themed inline styles** include `transition: [property] 400ms ease` for smooth toggle animation. Body and section backgrounds transition via CSS.
- **SkillsSection** follows ProjectShowcase's section header pattern exactly — heading with prefix + gold accent word, right-aligned tagline. No numbered label bars. Same `clamp` spacing and `64rem` max-width container.
- **SkillsSection cards** use h3 tags directly (not Heading atom) to keep the same inline style pattern as ProjectShowcase's typography. Card titles use `typography.fontFamily.heading`, descriptions use `typography.fontFamily.body`.
- **Page composition** (`app/page.tsx`): Navigation → HeroSection → ProjectShowcase → SkillsSection → ContactSection → Footer
- **ContactSection** uses same `64rem` max-width + `clamp` padding pattern as all other sections. Form is centered within at `max-width: 640px`.
- **Footer** uses raw `<a>` tags for social links (Link atom doesn't support `target`), hover managed via `useState` for hovered link label. Dot separators between links. Email link + copyright on the right.
- **Mobile menu** uses `useTheme()` to adapt colors — conditionally rendered (`{menuOpen && ...}`), body+html scroll locked. CSS `@keyframes menuLinkIn` for staggered entrance. Always dark nav bar pill on top (z-index 51), overlay behind it (z-index 50).
- **`overflowX: 'hidden'`** lives on `<body>` in `app/layout.tsx` (NOT on `<main>`) to prevent double scrollbar. NEVER add `overflowX: 'hidden'` to `<main>` in any page route — it creates a second scrollable container.
- **`suppressHydrationWarning`** on `<html>` tag in `app/layout.tsx` to silence SSR mismatch from anti-FOUC `data-theme` script.
- **ContactSection form labels** use explicit `labelStyle` (`color: var(--theme-text)`) passed via Mantine `styles={{ label: labelStyle }}` to ensure visibility in dark mode.
- **Data layer** lives in `data/` directory with `data/projects.ts` and `data/index.ts` barrel. Import via `import { projects, getFeaturedProjects } from '@/data'`.
- **ProjectShowcase** now imports featured projects from `data/` via `getFeaturedProjects()` — no more hardcoded placeholder data. Maps `Project` type to its internal card format.
- **Real thumbnail images** in `public/images/`: `dh-thumb.jpg`, `omoc-thumb.jpg`, `ablenee-thumb.jpg`, `outcast-thumb.jpg`. Renamed from original files with spaces to kebab-case.
- **Navigation links** are now all page routes: Work → `/work`, About → `/about`, Contact → `/contact`. Only "Upwork" remains as `#upwork` anchor.
- **WorkPage** filter bar uses `useState` for active category, filters projects client-side. Categories derived from project data. Cards link to `/work/[id]`.
- **CaseStudyPage** has two rendering paths: projects with `caseStudy` data get the full storytelling layout (hero → metrics → workflow → 3 moments with before/after + image sliders + expandable details → resolution → CTA → next project); projects without get a graceful fallback (hero + description + tags + "coming soon").
- **CaseStudyPage storytelling data model**: `CaseStudy` has `hook`, `role`, `duration`, `platforms`, `team`, `metrics[]`, `tags[]`, `workflow` (title + description + steps[]), `moments[]` (each with id, number, title, headline, theme, summary, before, after, details[], insight, images[]), `resolution` (growth, discovery, founderQuote, advice). Old `CaseStudySection`/`ProjectImage` types removed.
- **CaseStudyPage theme consistency**: ALL sections use `var(--theme-*)` — NO hardcoded dark backgrounds. Hero uses `var(--theme-bg-page)`, metrics uses `var(--theme-bg)`, moments alternate `var(--theme-bg)` / `var(--theme-bg-page)`. This matches the homepage pattern where dark mode comes from the theme toggle, not forced sections.
- **CaseStudyPage next/prev navigation** uses `getAdjacentProjects()` which wraps around the array for infinite cycling.
- **ImageSlider molecule** (`components/molecules/ImageSlider.tsx`): Horizontal carousel for case study screenshots. 1 image at a time with crossfade, arrow nav, dot indicators, counter badge, keyboard (arrow keys) and touch swipe support. Uses `Image` atom + `Text` atom. Gold accent on active dot/arrow hover. Single image hides all nav controls.
- **CaseStudyPage hero tags**: Use `Badge size="lg" radius="xl"` with body font at `0.8125rem`, normal case, `6px 16px` padding — larger than card-level tags, matching homepage hero badge proportions.
- **CaseStudyPage hero padding**: `clamp(80px, 10vw, 120px)` top padding — tighter gap between nav and "Back to Work" link.
- **CaseStudyPage Notion image integration**: `app/work/[slug]/page.tsx` fetches moment images from Notion via `fetchCaseStudyMoments(project.title)` and replaces placeholder images in order (1-to-1 substitution, keeping static captions/alts and total image count). Falls back to static data on Notion error. Matches moments by `momentNumber` or `title` (case-insensitive).
- **CaseStudyInProgress organism** (`components/organisms/CaseStudyInProgress.tsx`): Shown for non-OMOC projects (no full case study yet). Props: `projectTitle`, `links?` (array of `{label, url, type: 'figma'|'live'|'github'}`), `note?`. Per-project links and notes are defined in the `caseStudyLinks` and `projectNotes` lookups inside `CaseStudyPage.tsx`. Hisab has two Figma links (UI design system + UX research).
- **Project array order** in `data/projects.ts`: omoc → dh → ablenee → outcast → hisab → ideas-lab. Homepage shows featured projects (omoc, dh, ablenee, outcast) in that order.
- **Hero CTA buttons**: Two buttons in a row — primary filled "View selected works" + secondary outline "All projects", both linking to `/work`. Sentence case, `radius={9999}`, `color="gold"`.
- **Social links (real URLs)**: LinkedIn `linkedin.com/in/zeamanuel-ayalew-0280561b5`, Instagram `@semenawerk_`, GitHub `github.com/zeamanuelmek`, Upwork profile. Dribbble and Behance removed everywhere.
- **Contact/footer email**: `zeamekonnen@gmail.com`
- **Footer copyright**: "Zeamanuel Ayalew"
- **Hero label**: "Portfolio 2026"
- **AboutPage** profile photo path: `public/images/profile.jpg` — user must add their own image. Falls back gracefully.
- **AboutPage experience entries** are hardcoded in the component (`experience` array in `AboutPage.tsx`). 6 entries: Rahela Fashion Brand, Hisab, OMOC, DH, IdeasLab, Effoi Pizza. Each has `period`, `title`, `company`, `type`, `description`. `type` values: `'Contract'` (gold badge), `'Own Product'` (green badge), `'Full-time'` (gray badge).
- **AboutPage education entries** are in the `education` array in `AboutPage.tsx`. 3 entries: TUM Digital Product School, AAU BA Economics, Accenture UX Certificate.
- **AboutPage recognition** is in the `recognition` string array — rendered as gold-dot cards.
- **AboutPage name**: Zeamanuel Ayalew (last name "Ayalew" in gold gradient in h1).
- **ContactPage** form is static (`e.preventDefault()`) — ready for Formspree/EmailJS/API route integration. Select uses Mantine `NativeSelect` directly (atom doesn't support `data` prop for simple string arrays).
- **`suppressHydrationWarning`** on both `<html>` and `<body>` tags in `app/layout.tsx` to silence SSR mismatches from anti-FOUC script and browser extensions.
- **Page routes:** `/` (homepage), `/work` (all projects), `/work/[slug]` (case study), `/about`, `/contact`, `/demo` (theme demo)
- **Notion image expiry fix:** Case study page (`app/work/[slug]/page.tsx`) uses `export const revalidate = 1800` (ISR, 30 min) so Notion signed S3 URLs never expire before re-fetch. Direct Notion file uploads expire in ~1hr — always prefer external URLs (Cloudinary) in Notion file properties instead.
- **Cloudinary workflow:** Upload image to Cloudinary → copy URL → paste into Notion `Images` field as "Embed link" (external). `getFiles()` in `notion-data.ts` handles both `f.type === 'file'` (Notion-hosted, expires) and `f.type === 'external'` (Cloudinary, permanent). `res.cloudinary.com` is whitelisted in `next.config.ts` `remotePatterns`.
- **Mobile responsiveness fixes (v5.4):**
  - Hero name: `clamp(2rem, 12vw, 9rem)` (was `3.5rem` min — caused overflow on screens < 467px)
  - Hero mid-row: `flex-wrap: wrap` always-on (not breakpoint-conditional)
  - Hero padding: 16px horizontal on ≤480px screens via media query
  - Section header taglines (ProjectShowcase, SkillsSection, ContactSection): switch to `text-align: left` at ≤600px via CSS classes (`.showcase-tagline`, `.skills-tagline`, `.contact-tagline`)
  - Project cards: `cursor: auto` on touch devices via `@media (hover: none)`
  - Navigation name: `overflow: hidden` + `text-overflow: ellipsis` to prevent overflow into hamburger area; smaller font at ≤400px
- **Navigation fixes (v5.5):**
  - ThemeToggle hidden on mobile nav bar (≤640px) via `.nav-theme-desktop { display: none }` — it's accessible in the mobile menu overlay instead. Mobile nav right now shows only the hamburger button, giving full width to the name.
  - `scrolled` state added to Navigation: `window.scrollY > 8` triggers `.nav-scrolled` class which adds `box-shadow: 0 1px 16px rgba(0,0,0,0.08)` and stronger `border-bottom-color`. Prevents nav from visually blending into the hero (same `var(--theme-bg-page)` background) at page top.
- **Notion CMS integration** (`lib/notion.ts` + `lib/notion-data.ts`): Notion SDK v5.11.1, uses `dataSources.query` (NOT `databases.query` — v5 API). Env vars in `.env.local`: `NOTION_API_KEY`, `NOTION_PROJECTS_DB`, `NOTION_MOMENTS_DB`, `NOTION_CONTENT_DB`, `NOTION_ALBUM_ART_DB`. All fetch functions are async server-side only.
- **AlbumArtPanel** (`components/molecules/AlbumArtPanel.tsx`): Ethiopiques album art mosaic panels flanking content. Fixed position, 35% opacity, parallax scroll, desktop-only (≥1280px via CSS `.album-art-panel` media query in ProjectShowcase styles). Currently **disabled/not rendered** on homepage — needs more album entries in Notion database before enabling. To re-enable: import in `page.tsx`, fetch via `fetchAlbumArt()` server-side, pass tiles as props. Component accepts pre-split `tiles` per side (no longer splits internally).
- **AlbumArtPanel hooks rule**: All hooks (`useRef`, `useState`, `useEffect`) must run before any early return. The empty-tiles guard (`if (displayTiles.length === 0) return <></>`) comes AFTER all hooks.
- **CustomCursor** (`components/molecules/CustomCursor.tsx`): Custom cursor overlay shown on project card hover in ProjectShowcase. Activated via `onHoverStart`/`onHoverEnd` callbacks on `ProjectCardWide`.
- **ProjectCardWide** (`components/molecules/ProjectCardWide.tsx`): Wide-format project card with browser/mobile mockup frame, used by ProjectShowcase. Props: title, subtitle, description, tags, image, href, mockupType, alternate (flips layout), onHoverStart/onHoverEnd.
- **ProjectShowcase** uses `ProjectCardWide` molecule + `CustomCursor` for interactive project cards with varied scroll transition variants (fade-up, slide-left, scale-up, slide-right).

## Future Features (from global CLAUDE.md)

Planned features for Ethiopian SaaS context:
- Offline sync capability
- Receipt capture with camera
- Payment integration (TeleBirr, Chapa)

---

**Last Updated:** 2026-03-09
**Template Version:** 5.5.0 (Navigation mobile fixes: ThemeToggle hidden on mobile nav bar, scroll shadow state)
