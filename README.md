# SemEnaWerk Design System

A production-ready, Ethiopian-inspired design system built on **Next.js 16**, **Mantine UI 7**, and **Storybook 10**. White-label SaaS template with multi-tenant theming.

## Brand Identity

| Token | Value | Usage |
|-------|-------|-------|
| Primary Gold | `#D4AF37` | Main accent, CTAs, highlights |
| Gold Light | `#E8C84A` | Hover states, gradients |
| Rust | `#C44536` | AI/innovation accent |
| Forest | `#2C5530` | Success, availability |
| Earth | `#8B4513` | Warm accent |
| Page BG | `#FAF8F3` | Cream background |
| Dark | `#1A1A1A` | Hero sections |

**Typography:** Space Grotesk (headings) | Inter (body) | JetBrains Mono (code)

## Quick Start

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Storybook (http://localhost:6006)
npm run storybook

# Theme demo page
# Visit http://localhost:3000/demo
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Next.js dev server (port 3000) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint |
| `npm run storybook` | Storybook dev (port 6006) |
| `npm run build-storybook` | Build static Storybook |

## Project Structure

```
semenawerk-master-template/
├── app/
│   ├── layout.tsx              # Root layout (MantineProvider, fonts, cream bg)
│   ├── page.tsx                # Home page
│   └── demo/page.tsx           # Theme demo with live switcher
├── components/
│   └── atoms/                  # 23 atomic components
│       ├── index.ts            # Barrel export
│       ├── Button.tsx          # Form atoms...
│       ├── Badge.tsx           # Display atoms...
│       ├── Container.tsx       # Layout atoms...
│       ├── Heading.tsx         # Typography atoms...
│       └── Alert.tsx           # Feedback atoms...
├── themes/
│   ├── tokens.ts               # Design tokens (colors, typography, spacing, shadows)
│   ├── createClientTheme.ts    # Theme factory (generates Mantine theme from overrides)
│   └── clients/                # Client-specific theme configs
│       ├── default.ts          # Gold (default)
│       ├── green.ts            # Forest Green
│       └── rust.ts             # Rust Red
├── stories/
│   ├── design-system/          # Visual docs (colors, typography, spacing, shadows, effects)
│   └── atoms/                  # Component stories (all variants + use cases)
└── .storybook/
    ├── main.ts                 # Storybook config
    └── preview.tsx             # MantineProvider decorator
```

## Component Library (23 Atoms)

### Form Atoms
`Button` `Input` `TextArea` `Select` `Checkbox` `Radio` `Switch` `Slider`

### Display Atoms
`Badge` `Card` `Avatar` `Image` `Divider` `Icon`

### Layout Atoms
`Container` `Stack` `Group` `Grid`

### Typography Atoms
`Heading` `Text` `Link`

### Feedback Atoms
`Alert` `Loader`

All components are in `components/atoms/` with a barrel export:

```typescript
import { Button, Card, Heading, Alert } from '@/components/atoms';
```

## Theme Customization

Create a new client theme by passing overrides to `createClientTheme()`:

```typescript
import { createClientTheme } from '@/themes/createClientTheme';

// Default Ethiopian Gold theme
const theme = createClientTheme();

// Custom client theme
const clientTheme = createClientTheme({
  brandColor: '#2C5530',  // Forest Green as primary
  fontFamily: 'Poppins',  // Optional font override
});
```

Wrap your app with the theme:

```tsx
<MantineProvider theme={clientTheme}>
  <App />
</MantineProvider>
```

The theme factory generates:
- 10-shade color scale from any hex color (proper tint/shade, not opacity)
- 5 named palettes: `brand`, `gold`, `rust`, `forest`, `earth`
- Typography with Space Grotesk headings (h1=48px to h6=18px)
- Spacing scale (4px base unit)
- Border radius (default lg=12px for inputs, xl=24px for cards)
- Gold glow shadows in `theme.other`

## Special Component Features

### Gold Gradient Text
```tsx
<Heading goldGradient>Shimmering Headline</Heading>
<Text goldGradient fw={600}>Gradient body text</Text>
```

### Card with Gold Glow
```tsx
<Card goldGlow>Hover for gold glow effect</Card>
```

### Ethiopian Dividers
```tsx
<Divider goldGradient />    {/* Fade-in/out gold line */}
<Divider habesha />          {/* Ethiopian flag triple line (green/gold/red) */}
<Divider diamond />          {/* Habesha textile diamond pattern */}
```

### Semantic Alerts
```tsx
<Alert semantic="success">Forest green with check icon</Alert>
<Alert semantic="error">Rust red with X icon</Alert>
<Alert semantic="warning">Gold with warning icon</Alert>
<Alert semantic="info">Gold with info icon</Alert>
```

## Design Tokens

All tokens live in `themes/tokens.ts`. Components should never hardcode colors or spacing — always reference tokens through the Mantine theme.

```typescript
import { designTokens } from '@/themes/tokens';

designTokens.colors.brand.gold       // '#D4AF37'
designTokens.colors.background.cream  // '#FAF8F3'
designTokens.typography.fontFamily.heading  // "'Space Grotesk', 'Inter', sans-serif"
designTokens.shadows.goldGlow         // '0 4px 20px rgba(212,175,55,0.3)'
```

## Stack

- **Next.js 16.1.6** (App Router, Turbopack)
- **React 19.2.3**
- **TypeScript 5**
- **Mantine UI 7.17.8**
- **Tailwind CSS 4** (layout utilities only)
- **Storybook 10.2.10**
- **Vitest 4 + Playwright** (testing)
- **Tabler Icons** (icon library)

---

Built by **Zeamanuel** | Ethiopian-inspired design for the digital future
