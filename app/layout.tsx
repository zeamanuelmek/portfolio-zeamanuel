import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import { createClientTheme } from '@/themes/createClientTheme';
import { ThemeProvider } from '@/components/ThemeContext';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

const theme = createClientTheme();

export const metadata = {
  title: 'SemEnaWerk Design System',
  description: 'Ethiopian-inspired design system by Zeamanuel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      data-mantine-color-scheme="light"
      suppressHydrationWarning
    >
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var mode = localStorage.getItem('semenawerk-theme');
                  if (mode === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning style={{ margin: 0, backgroundColor: 'var(--theme-bg-page, #FAF8F3)', overflowX: 'hidden', transition: 'background-color 400ms ease' }}>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
