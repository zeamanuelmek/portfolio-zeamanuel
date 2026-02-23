'use client';

import { useState, useEffect, useCallback } from 'react';
import { designTokens } from '@/themes/tokens';

export interface NavLink {
  label: string;
  href: string;
  dimmed?: boolean;
}

export interface NavigationProps {
  /** Navigation links to display */
  links?: NavLink[];
}

const defaultLinks: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Upwork', href: '#upwork', dimmed: true },
];

const styles = {
  nav: {
    position: 'fixed' as const,
    top: 16,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 50,
    background: 'rgba(30, 30, 30, 0.7)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 9999,
    padding: '10px 24px',
    display: 'flex',
    alignItems: 'center',
    gap: 32,
  },
  navMobile: {
    position: 'fixed' as const,
    top: 16,
    left: 16,
    right: 16,
    zIndex: 50,
    background: 'rgba(30, 30, 30, 0.7)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 9999,
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 34,
    height: 34,
    borderRadius: '50%',
    backgroundColor: designTokens.colors.brand.gold,
    color: designTokens.colors.background.dark,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: designTokens.typography.fontFamily.heading,
    fontWeight: 700,
    fontSize: 16,
    flexShrink: 0,
    textDecoration: 'none',
  },
  linksContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 28,
  },
  link: {
    color: designTokens.colors.text.sand,
    textDecoration: 'none',
    fontSize: 14,
    fontFamily: designTokens.typography.fontFamily.body,
    fontWeight: 400,
    transition: 'color 200ms ease',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
  },
  linkDimmed: {
    color: '#9A9A9A',
  },
  dropdown: {
    position: 'fixed' as const,
    top: 72,
    left: 16,
    right: 16,
    zIndex: 49,
    background: 'rgba(30, 30, 30, 0.85)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 20,
    padding: '20px 24px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 16,
    transition: 'opacity 300ms ease, transform 300ms ease',
  },
  dropdownLink: {
    color: designTokens.colors.text.sand,
    textDecoration: 'none',
    fontSize: 16,
    fontFamily: designTokens.typography.fontFamily.body,
    fontWeight: 400,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    textAlign: 'left' as const,
  },
};

const keyframes = `
@keyframes navHamburgerLine1Open {
  to { transform: translateY(7px) rotate(45deg); }
}
@keyframes navHamburgerLine3Open {
  to { transform: translateY(-7px) rotate(-45deg); }
}
`;

function HamburgerIcon({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  const lineStyle = {
    width: 22,
    height: 2,
    backgroundColor: designTokens.colors.text.sand,
    borderRadius: 1,
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    transformOrigin: 'center',
  };

  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={isOpen}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          ...lineStyle,
          transform: isOpen ? 'translateY(7px) rotate(45deg)' : 'none',
        }}
      />
      <span
        style={{
          ...lineStyle,
          opacity: isOpen ? 0 : 1,
        }}
      />
      <span
        style={{
          ...lineStyle,
          transform: isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
        }}
      />
    </button>
  );
}

export function Navigation({ links = defaultLinks }: NavigationProps): React.ReactElement {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // Close menu on resize to desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  if (isMobile) {
    return (
      <>
        <style>{keyframes}</style>
        <nav role="navigation" style={styles.navMobile}>
          <a href="#" style={styles.logo}>Z</a>
          <HamburgerIcon isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
        </nav>
        {menuOpen && (
          <div style={styles.dropdown}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  ...styles.dropdownLink,
                  ...(link.dimmed ? styles.linkDimmed : {}),
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </>
    );
  }

  return (
    <nav role="navigation" style={styles.nav}>
      <a href="#" style={styles.logo}>Z</a>
      <div style={styles.linksContainer}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              ...styles.link,
              ...(link.dimmed ? styles.linkDimmed : {}),
              ...(hoveredLink === link.href ? { color: designTokens.colors.brand.gold } : {}),
            }}
            onMouseEnter={() => setHoveredLink(link.href)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
