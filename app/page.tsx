import { Navigation } from '@/components/molecules';
import { HeroSection, ProjectShowcase } from '@/components/blocks';

export default function HomePage() {
  return (
    <main style={{ backgroundColor: '#1A1A1A' }}>
      <Navigation />
      <HeroSection profileImageSrc="/images/profile.jpg" />
      <ProjectShowcase />
    </main>
  );
}
