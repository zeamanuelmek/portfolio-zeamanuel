import { Navigation } from '@/components/molecules';
import { WorkPage } from '@/components/blocks/WorkPage';
import { Footer } from '@/components/blocks';

export const metadata = {
  title: 'Work | Zeamanuel',
  description: 'Selected projects spanning mobile apps, e-commerce platforms, web apps, and Framer sites.',
};

export default function Work() {
  return (
    <main style={{ backgroundColor: 'var(--theme-bg-page, #FAF8F3)', overflowX: 'hidden' }}>
      <Navigation />
      <WorkPage />
      <Footer />
    </main>
  );
}
