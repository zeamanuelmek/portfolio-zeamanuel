'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { designTokens } from '@/themes/tokens';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '@/components/ThemeContext';

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationProps {
  links?: NavLink[];
}

const defaultLinks: NavLink[] = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const { typography } = designTokens;

/* === Styles === */

const navStyles = `
/* ---- Desktop bar ---- */
.nav-bar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 50;
  padding: 0 clamp(0.75rem, 2vw, 1.5rem);
  height: 56px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  border-bottom: 1px solid var(--theme-accent-line);
  background: var(--theme-bg-page);
  transition: background-color 400ms ease, border-color 400ms ease;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.nav-name {
  font-family: ${typography.fontFamily.heading};
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--theme-text);
  text-decoration: none;
  white-space: nowrap;
  transition: color 400ms ease;
}

.nav-title {
  font-family: ${typography.fontFamily.body};
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--theme-text-dimmed);
  white-space: nowrap;
  transition: color 400ms ease;
}

.nav-center {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-link {
  font-family: ${typography.fontFamily.body};
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--theme-text-dimmed);
  transition: color 200ms ease;
  white-space: nowrap;
}
.nav-link:hover { color: var(--theme-text); }
.nav-link-active { color: var(--theme-gold) !important; }

.nav-right {
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: flex-end;
}

.nav-social {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${typography.fontFamily.body};
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--theme-text-dimmed);
  text-decoration: none;
  transition: color 200ms ease;
}
.nav-social:hover { color: var(--theme-text); }

/* ---- Responsive ---- */
@media (max-width: 860px) {
  .nav-title { display: none; }
  .nav-social-label { display: none; }
}

@media (max-width: 640px) {
  .nav-bar {
    grid-template-columns: 1fr auto;
    padding: 0 16px;
    height: 52px;
  }
  .nav-center { display: none !important; }
  .nav-social { display: none !important; }
  .nav-hamburger { display: flex !important; }
}
@media (min-width: 641px) {
  .nav-hamburger { display: none !important; }
}

/* ---- Mobile menu ---- */
@keyframes menuReveal {
  from { clip-path: circle(0% at calc(100% - 40px) 26px); }
  to   { clip-path: circle(150% at calc(100% - 40px) 26px); }
}
@keyframes menuHide {
  from { clip-path: circle(150% at calc(100% - 40px) 26px); }
  to   { clip-path: circle(0% at calc(100% - 40px) 26px); }
}
@keyframes linkReveal {
  from { opacity: 0; transform: translateX(-20px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes lineGrow {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}
`;

/* === Hamburger === */

function Hamburger({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      className="nav-hamburger"
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 8,
        flexDirection: 'column',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 52,
        position: 'relative',
      }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 20,
            height: 1.5,
            backgroundColor: isOpen ? 'var(--theme-text)' : 'var(--theme-text)',
            borderRadius: 1,
            transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
            transformOrigin: 'center',
            display: 'block',
            ...(i === 0 && isOpen ? { transform: 'translateY(6.5px) rotate(45deg)' } : {}),
            ...(i === 1 ? { opacity: isOpen ? 0 : 1 } : {}),
            ...(i === 2 && isOpen ? { transform: 'translateY(-6.5px) rotate(-45deg)' } : {}),
          }}
        />
      ))}
    </button>
  );
}

/* === Component === */

export function Navigation({ links = defaultLinks }: NavigationProps): React.ReactElement {
  const { mode } = useTheme();
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 640);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
      setMenuClosing(false);
    }
  }, [isMobile]);

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
    }, 350);
  };

  const isActive = (href: string) => {
    if (href === '/work') return pathname === '/work' || pathname.startsWith('/work/');
    return pathname === href;
  };

  const mc = mode === 'dark'
    ? { bg: '#0A0A0A', text: '#E8D5B7', dimmed: 'rgba(255,255,255,0.25)', gold: '#D4AF37', line: 'rgba(255,255,255,0.06)' }
    : { bg: '#FAF8F3', text: '#1A1A1A', dimmed: 'rgba(0,0,0,0.3)', gold: '#8B6914', line: 'rgba(0,0,0,0.06)' };

  return (
    <>
      <style>{navStyles}</style>

      <nav className="nav-bar" role="navigation">
        {/* Left */}
        <div className="nav-left">
          <Link href="/" className="nav-name">Zeamanuel Ayalew</Link>
          <span className="nav-title">Design Engineer</span>
        </div>

        {/* Center */}
        <div className="nav-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive(link.href) ? 'nav-link-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="nav-right">
          <a
            href="https://www.linkedin.com/in/zeamanuel-ayalew-0280561b5"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
            <span className="nav-social-label">LinkedIn</span>
          </a>
          <ThemeToggle />
          <Hamburger
            isOpen={menuOpen && !menuClosing}
            onClick={() => {
              if (menuOpen) closeMenu();
              else setMenuOpen(true);
            }}
          />
        </div>
      </nav>

      {/* ---- Mobile fullscreen menu ---- */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 49,
            background: mc.bg,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            animation: menuClosing
              ? 'menuHide 350ms cubic-bezier(0.4, 0, 0.2, 1) forwards'
              : 'menuReveal 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
          }}
        >
          {/* Top spacer for nav bar */}
          <div style={{ height: 52 }} />

          {/* Links — left-aligned, editorial */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '0 32px',
              gap: 0,
            }}
          >
            {links.map((link, i) => (
              <div key={link.href}>
                {/* Divider line */}
                <div
                  style={{
                    height: 1,
                    background: mc.line,
                    transformOrigin: 'left',
                    animation: menuClosing
                      ? 'none'
                      : `lineGrow 500ms ${200 + i * 80}ms both cubic-bezier(0.4, 0, 0.2, 1)`,
                  }}
                />

                <Link
                  href={link.href}
                  onClick={closeMenu}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    padding: '24px 0',
                    textDecoration: 'none',
                    animation: menuClosing
                      ? 'none'
                      : `linkReveal 500ms ${280 + i * 100}ms both cubic-bezier(0.16, 1, 0.3, 1)`,
                  }}
                >
                  {/* Number */}
                  <span
                    style={{
                      fontFamily: typography.fontFamily.mono,
                      fontSize: '0.6875rem',
                      fontWeight: 400,
                      color: mc.dimmed,
                      letterSpacing: '0.02em',
                      minWidth: 24,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Label */}
                  <span
                    style={{
                      fontFamily: typography.fontFamily.heading,
                      fontSize: 'clamp(2.25rem, 10vw, 3.5rem)',
                      fontWeight: 600,
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                      color: isActive(link.href) ? mc.gold : mc.text,
                      transition: 'color 200ms ease',
                    }}
                  >
                    {link.label}
                  </span>

                  {/* Active indicator — gold dot */}
                  {isActive(link.href) && (
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: mc.gold,
                        marginLeft: 'auto',
                        flexShrink: 0,
                      }}
                    />
                  )}
                </Link>
              </div>
            ))}
            {/* Bottom line */}
            <div
              style={{
                height: 1,
                background: mc.line,
                transformOrigin: 'left',
                animation: menuClosing
                  ? 'none'
                  : `lineGrow 500ms ${200 + links.length * 80}ms both cubic-bezier(0.4, 0, 0.2, 1)`,
              }}
            />
          </div>

          {/* Bottom bar — info + social */}
          <div
            style={{
              padding: '20px 32px',
              paddingBottom: 'max(20px, env(safe-area-inset-bottom))',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              animation: menuClosing
                ? 'none'
                : `linkReveal 500ms ${500}ms both cubic-bezier(0.16, 1, 0.3, 1)`,
            }}
          >
            {/* Left — availability */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span
                style={{
                  fontFamily: typography.fontFamily.mono,
                  fontSize: '0.625rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: mc.dimmed,
                }}
              >
                Available for projects
              </span>
              <a
                href="mailto:hello@zeamanuel.com"
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  color: mc.gold,
                  textDecoration: 'none',
                }}
              >
                hello@zeamanuel.com
              </a>
            </div>

            {/* Right — theme toggle */}
            <ThemeToggle />
          </div>
        </div>
      )}
    </>
  );
}
