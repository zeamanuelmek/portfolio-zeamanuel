import { Navigation } from '@/components/molecules';
import { HeroSection, ProjectShowcase, SkillsSection, ContactSection, Footer } from '@/components/blocks';

export default function HomePage() {
  return (
    <main style={{ backgroundColor: 'var(--theme-bg-page, #FAF8F3)', transition: 'background-color 400ms ease' }}>
      <Navigation />
      <HeroSection />
      <ProjectShowcase />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
