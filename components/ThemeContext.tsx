'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react';
import { themeColors, type ThemeMode } from '@/themes/tokens';

interface ThemeContextValue {
  mode: ThemeMode;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const CSS_VAR_MAP: Record<string, keyof (typeof themeColors)['light']> = {
  '--theme-bg': 'bg',
  '--theme-bg-page': 'bgPage',
  '--theme-text': 'text',
  '--theme-text-secondary': 'textSecondary',
  '--theme-text-dimmed': 'textDimmed',
  '--theme-gold': 'gold',
  '--theme-gold-from': 'goldGradientFrom',
  '--theme-gold-to': 'goldGradientTo',
  '--theme-card-bg': 'cardBg',
  '--theme-card-border': 'cardBorder',
  '--theme-card-shadow': 'cardShadow',
  '--theme-card-hover-shadow': 'cardHoverShadow',
  '--theme-tag-bg': 'tagBg',
  '--theme-tag-border': 'tagBorder',
  '--theme-badge-border': 'badgeBorder',
  '--theme-badge-bg': 'badgeBg',
  '--theme-nav-bg': 'navBg',
  '--theme-nav-border': 'navBorder',
  '--theme-accent-line': 'accentLine',
};

function applyThemeVars(mode: ThemeMode): void {
  const root = document.documentElement;
  const colors = themeColors[mode];
  for (const [varName, key] of Object.entries(CSS_VAR_MAP)) {
    root.style.setProperty(varName, colors[key]);
  }
  root.setAttribute('data-theme', mode);
}

const STORAGE_KEY = 'semenawerk-theme';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('light');
  const [mounted, setMounted] = useState(false);

  // Read saved preference on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    const initial = saved === 'dark' ? 'dark' : 'light';
    setMode(initial);
    applyThemeVars(initial);
    setMounted(true);
  }, []);

  // Apply vars whenever mode changes (after mount)
  useEffect(() => {
    if (!mounted) return;
    applyThemeVars(mode);
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode, mounted]);

  const toggle = useCallback(() => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}
