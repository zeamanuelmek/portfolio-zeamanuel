import { Navigation } from '@/components/molecules';
import { HeroSection, ProjectShowcase } from '@/components/blocks';

export default function HomePage() {
  return (
    <main style={{ backgroundColor: '#FAF8F3', overflowX: 'hidden' }}>
      <Navigation />
      <HeroSection profileImageSrc="/images/profile.jpg" />
      <ProjectShowcase />
    </main>
  );
}
