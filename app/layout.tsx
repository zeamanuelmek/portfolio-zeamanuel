import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import { createClientTheme } from '@/themes/createClientTheme';

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
    >
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body style={{ backgroundColor: '#FAF8F3', margin: 0 }}>
        <MantineProvider theme={theme} defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
