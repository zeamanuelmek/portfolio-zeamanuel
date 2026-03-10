import { Navigation } from '@/components/molecules';
import { AboutPage } from '@/components/blocks/AboutPage';
import { Footer } from '@/components/blocks';

export const metadata = {
  title: 'About | Zeamanuel Alemu',
  description: 'UX Systems Designer based in Addis Ababa, Ethiopia. Building design systems, interactive prototypes, and AI-augmented products.',
};

export default function About() {
  return (
    <main style={{ backgroundColor: 'var(--theme-bg-page, #FAF8F3)', overflowX: 'hidden' }}>
      <Navigation />
      <AboutPage />
      <Footer />
    </main>
  );
}
