'use client';

import { useTheme } from '@/components/ThemeContext';
import { IconSun, IconMoon } from '@tabler/icons-react';

const toggleStyles = `
.theme-toggle {
  position: relative;
  width: 60px;
  height: 30px;
  border-radius: 9999px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.06);
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: border-color 300ms ease, box-shadow 300ms ease;
}
.theme-toggle:hover {
  border-color: rgba(212,175,55,0.4);
  box-shadow: 0 0 12px rgba(212,175,55,0.12);
}

/* Sliding pill indicator */
.theme-toggle-pill {
  position: absolute;
  top: 2px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(212,175,55,0.18);
  transition: left 350ms cubic-bezier(0.16, 1, 0.3, 1);
}
.theme-toggle-pill--light {
  left: 2px;
}
.theme-toggle-pill--dark {
  left: 32px;
}

/* Icon containers */
.theme-toggle-icons {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
}
.theme-toggle-icon-wrap {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transition: opacity 300ms ease;
}
.theme-toggle-icon-wrap--active {
  opacity: 1;
}
.theme-toggle-icon-wrap--inactive {
  opacity: 0.35;
}
`;

export function ThemeToggle(): React.ReactElement {
  const { mode, toggle } = useTheme();
  const isDark = mode === 'dark';

  return (
    <>
      <style>{toggleStyles}</style>
      <button
        className="theme-toggle"
        onClick={toggle}
        role="switch"
        aria-checked={isDark}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <span className={`theme-toggle-pill ${isDark ? 'theme-toggle-pill--dark' : 'theme-toggle-pill--light'}`} />
        <span className="theme-toggle-icons">
          <span className={`theme-toggle-icon-wrap ${!isDark ? 'theme-toggle-icon-wrap--active' : 'theme-toggle-icon-wrap--inactive'}`}>
            <IconSun size={14} color="#D4AF37" stroke={2} />
          </span>
          <span className={`theme-toggle-icon-wrap ${isDark ? 'theme-toggle-icon-wrap--active' : 'theme-toggle-icon-wrap--inactive'}`}>
            <IconMoon size={14} color="#D4AF37" stroke={2} />
          </span>
        </span>
      </button>
    </>
  );
}
