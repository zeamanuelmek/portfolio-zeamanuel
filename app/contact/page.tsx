import { Navigation } from '@/components/molecules';
import { ContactPage } from '@/components/blocks/ContactPage';
import { Footer } from '@/components/blocks';

export const metadata = {
  title: 'Contact | Zeamanuel Alemu',
  description: 'Get in touch for UX design, design systems, prototyping, or AI integration projects. Based in Addis Ababa, Ethiopia.',
};

export default function Contact() {
  return (
    <main style={{ backgroundColor: 'var(--theme-bg-page, #FAF8F3)', overflowX: 'hidden' }}>
      <Navigation />
      <ContactPage />
      <Footer />
    </main>
  );
}
