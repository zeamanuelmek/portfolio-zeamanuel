/**
 * SemEnaWerk Design Tokens
 * Ethiopian-inspired brand system by Zeamanuel
 * Gold/Rust/Forest palette with warm earth tones
 */

export const designTokens = {
  // ═══ COLORS ═══
  colors: {
    // Brand palette
    brand: {
      gold: '#D4AF37',
      goldLight: '#E8C84A',
      rust: '#C44536',
      forest: '#2C5530',
      earth: '#8B4513',
    },

    // Text
    text: {
      primary: '#2C2C2C',
      secondary: '#6B6B6B',
      onDark: '#FFFFFF',
      sand: '#E8D5B7',
    },

    // Backgrounds
    background: {
      cream: '#FAF8F3',
      white: '#FFFFFF',
      dark: '#1A1A1A',
      darkMid: '#3D3D3D',
      sand: '#E8D5B7',
    },

    // Semantic
    semantic: {
      success: '#2C5530',
      error: '#C44536',
      warning: '#E8C84A',
      info: '#D4AF37',
    },
  },

  // ═══ TYPOGRAPHY ═══
  typography: {
    fontFamily: {
      heading: "'Space Grotesk', 'Inter', sans-serif",
      body: "'Inter', system-ui, sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', monospace",
    },
    fontSize: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      md: '1rem',        // 16px (base)
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.625,
    },
  },

  // ═══ SPACING ═══
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
  },

  // ═══ RADIUS ═══
  radius: {
    sm: '0.25rem',    // 4px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    '2xl': '1.5rem',  // 24px
    full: '9999px',
  },

  // ═══ SHADOWS ═══
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',

    // Brand glow shadows
    goldGlow: '0 4px 20px rgba(212,175,55,0.3)',
    goldGlowHover: '0 8px 30px rgba(212,175,55,0.5)',
  },
} as const;

// ═══ THEME COLOR MAPS (light / dark) ═══

export const themeColors = {
  light: {
    bg: '#FFFFFF',
    bgPage: '#FAF8F3',
    text: '#2C2C2C',
    textSecondary: '#6B6B6B',
    textDimmed: '#6B6B6B',
    gold: '#8B6914',
    goldGradientFrom: '#8B6914',
    goldGradientTo: '#B8941F',
    cardBg: '#FFFFFF',
    cardBorder: 'rgba(0,0,0,0.06)',
    cardShadow: '0 2px 12px rgba(0,0,0,0.06)',
    cardHoverShadow: '0 16px 40px rgba(139,69,19,0.1)',
    tagBg: 'rgba(0,0,0,0.04)',
    tagBorder: 'rgba(0,0,0,0.08)',
    badgeBorder: 'rgba(212,175,55,0.35)',
    badgeBg: 'rgba(212,175,55,0.06)',
    navBg: 'rgba(30, 30, 30, 0.7)',
    navBorder: 'rgba(255,255,255,0.08)',
    accentLine: 'rgba(212,175,55,0.25)',
  },
  dark: {
    bg: '#1A1A1A',
    bgPage: '#1A1A1A',
    text: 'rgba(255,255,255,0.88)',
    textSecondary: 'rgba(255,255,255,0.5)',
    textDimmed: 'rgba(255,255,255,0.4)',
    gold: '#D4AF37',
    goldGradientFrom: '#D4AF37',
    goldGradientTo: '#E8C84A',
    cardBg: '#242424',
    cardBorder: 'rgba(255,255,255,0.06)',
    cardShadow: '0 2px 12px rgba(0,0,0,0.3)',
    cardHoverShadow: '0 16px 40px rgba(0,0,0,0.5)',
    tagBg: 'rgba(212,175,55,0.04)',
    tagBorder: 'rgba(212,175,55,0.1)',
    badgeBorder: 'rgba(212,175,55,0.25)',
    badgeBg: 'rgba(212,175,55,0.06)',
    navBg: 'rgba(30, 30, 30, 0.7)',
    navBorder: 'rgba(255,255,255,0.08)',
    accentLine: 'rgba(212,175,55,0.15)',
  },
} as const;

export type ThemeMode = 'light' | 'dark';

export type ClientThemeOverrides = {
  brandColor?: string;
  fontFamily?: string;
};
