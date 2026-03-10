import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Zeamanuel Ayalew — UX/UI Designer',
  description:
    'Portfolio of Zeamanuel Ayalew, a UX/UI Designer based in Addis Ababa. Product design, design systems, and AI-augmented workflows.',
  openGraph: {
    title: 'Zeamanuel Ayalew — UX/UI Designer',
    description:
      'Product design, design systems, and AI-augmented workflows. Based in Addis Ababa.',
    url: 'https://portfolio-zeamanuel.vercel.app',
    siteName: 'Zeamanuel Ayalew',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Zeamanuel Ayalew — UX/UI Designer',
    description:
      'Product design, design systems, and AI-augmented workflows. Based in Addis Ababa.',
  },
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
