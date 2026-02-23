import type { MantineThemeOverride, MantineColorsTuple } from '@mantine/core';
import { designTokens, type ClientThemeOverrides } from './tokens';

/**
 * Generate a 10-shade Mantine color tuple from a base hex color.
 * Shades 0-4 are progressively more opaque tints,
 * shade 5 is the base, shades 6-9 are progressively darker.
 */
function generateColorScale(hex: string): MantineColorsTuple {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  const tint = (factor: number) => {
    const tr = Math.round(r + (255 - r) * factor);
    const tg = Math.round(g + (255 - g) * factor);
    const tb = Math.round(b + (255 - b) * factor);
    return `#${tr.toString(16).padStart(2, '0')}${tg.toString(16).padStart(2, '0')}${tb.toString(16).padStart(2, '0')}`;
  };

  const shade = (factor: number) => {
    const sr = Math.round(r * (1 - factor));
    const sg = Math.round(g * (1 - factor));
    const sb = Math.round(b * (1 - factor));
    return `#${sr.toString(16).padStart(2, '0')}${sg.toString(16).padStart(2, '0')}${sb.toString(16).padStart(2, '0')}`;
  };

  return [
    tint(0.9),   // 0 - lightest
    tint(0.75),  // 1
    tint(0.6),   // 2
    tint(0.45),  // 3
    tint(0.3),   // 4
    hex,         // 5 - base
    shade(0.1),  // 6
    shade(0.2),  // 7
    shade(0.35), // 8
    shade(0.5),  // 9 - darkest
  ];
}

export function createClientTheme(
  overrides: ClientThemeOverrides = {}
): MantineThemeOverride {
  const { colors, typography, shadows } = designTokens;
  const brandColor = overrides.brandColor || colors.brand.gold;

  return {
    colors: {
      brand: generateColorScale(brandColor),
      gold: generateColorScale(colors.brand.gold),
      rust: generateColorScale(colors.brand.rust),
      forest: generateColorScale(colors.brand.forest),
      earth: generateColorScale(colors.brand.earth),
    },
    primaryColor: 'gold',
    primaryShade: 5,

    // Typography
    fontFamily: overrides.fontFamily || typography.fontFamily.body,
    headings: {
      fontFamily: typography.fontFamily.heading,
      fontWeight: '700',
      sizes: {
        h1: { fontSize: typography.fontSize['5xl'], lineHeight: String(typography.lineHeight.tight) },
        h2: { fontSize: typography.fontSize['4xl'], lineHeight: String(typography.lineHeight.tight) },
        h3: { fontSize: typography.fontSize['3xl'], lineHeight: String(typography.lineHeight.tight) },
        h4: { fontSize: typography.fontSize['2xl'], lineHeight: String(typography.lineHeight.normal) },
        h5: { fontSize: typography.fontSize.xl, lineHeight: String(typography.lineHeight.normal) },
        h6: { fontSize: typography.fontSize.lg, lineHeight: String(typography.lineHeight.normal) },
      },
    },
    fontSizes: {
      xs: typography.fontSize.xs,
      sm: typography.fontSize.sm,
      md: typography.fontSize.md,
      lg: typography.fontSize.lg,
      xl: typography.fontSize.xl,
    },

    // Spacing
    spacing: {
      xs: designTokens.spacing[2],
      sm: designTokens.spacing[3],
      md: designTokens.spacing[4],
      lg: designTokens.spacing[6],
      xl: designTokens.spacing[8],
    },

    // Border radius
    radius: {
      xs: designTokens.radius.sm,
      sm: designTokens.radius.md,
      md: designTokens.radius.lg,
      lg: designTokens.radius.xl,
      xl: designTokens.radius['2xl'],
    },

    // Shadows
    shadows: {
      xs: shadows.sm,
      sm: shadows.sm,
      md: shadows.md,
      lg: shadows.lg,
      xl: shadows.xl,
    },

    // Custom theme values
    other: {
      goldGradient: `linear-gradient(135deg, ${colors.brand.gold}, ${colors.brand.goldLight})`,
      creamBg: colors.background.cream,
      goldGlow: shadows.goldGlow,
      goldGlowHover: shadows.goldGlowHover,
      fontMono: typography.fontFamily.mono,
    },

    // Component defaults
    components: {
      Button: {
        defaultProps: {
          size: 'md',
          radius: 'lg',
        },
        styles: {
          root: {
            fontWeight: 500,
          },
        },
      },
      Input: {
        defaultProps: {
          size: 'md',
          radius: 'lg',
        },
      },
      Card: {
        defaultProps: {
          shadow: 'sm',
          radius: 'xl',
          withBorder: true,
        },
      },
      Paper: {
        defaultProps: {
          radius: 'xl',
        },
      },
      Title: {
        styles: {
          root: {
            color: colors.text.primary,
          },
        },
      },
      Text: {
        styles: {
          root: {
            color: colors.text.primary,
          },
        },
      },
    },
  };
}
