import { notFound } from 'next/navigation';
import { Navigation } from '@/components/molecules';
import { CaseStudyPage } from '@/components/blocks/CaseStudyPage';
import { Footer } from '@/components/blocks';
import { getProjectById, getAllProjectIds, getAdjacentProjects } from '@/data';

export function generateStaticParams() {
  return getAllProjectIds().map((id) => ({ slug: id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectById(slug);
  if (!project) return { title: 'Not Found' };

  return {
    title: `${project.title} — ${project.subtitle} | Zeamanuel`,
    description: project.description,
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) notFound();

  const { next } = getAdjacentProjects(project.id);

  return (
    <main style={{ backgroundColor: 'var(--theme-bg-page, #FAF8F3)', transition: 'background-color 400ms ease' }}>
      <Navigation />
      <CaseStudyPage project={project} nextProject={next} />
      <Footer />
    </main>
  );
}
