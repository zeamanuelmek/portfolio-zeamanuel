import { notFound } from 'next/navigation';
import { Navigation } from '@/components/molecules';
import { CaseStudyPage } from '@/components/blocks/CaseStudyPage';
import { Footer } from '@/components/blocks';
import { getProjectById, getAllProjectIds, getAdjacentProjects } from '@/data';
import type { Project } from '@/data/projects';
import { fetchCaseStudyMoments } from '@/lib/notion-data';

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

/**
 * Merge Notion moment images into static project data.
 * Matches by moment number (e.g. "01", "02") and replaces
 * placeholder images with real ones from Notion.
 */
function mergeNotionMoments(project: Project, notionMoments: Awaited<ReturnType<typeof fetchCaseStudyMoments>>): Project {
  if (!project.caseStudy || notionMoments.length === 0) return project;

  const merged = { ...project, caseStudy: { ...project.caseStudy, moments: [...project.caseStudy.moments] } };

  for (let i = 0; i < merged.caseStudy.moments.length; i++) {
    const staticMoment = merged.caseStudy.moments[i];
    const notionMoment = notionMoments.find(
      (nm) => nm.momentNumber === staticMoment.number || nm.title.toLowerCase() === staticMoment.title.toLowerCase()
    );

    if (notionMoment && notionMoment.images.length > 0) {
      // Replace placeholders with Notion images in order, keeping total count
      const updatedImages = staticMoment.images.map((staticImg, idx) => {
        if (idx < notionMoment.images.length) {
          return { ...staticImg, url: notionMoment.images[idx] };
        }
        return staticImg;
      });
      merged.caseStudy.moments[i] = {
        ...staticMoment,
        images: updatedImages,
      };
    }
  }

  return merged;
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) notFound();

  // Fetch moment images from Notion, fall back to static data on error
  let enrichedProject = project;
  try {
    const notionMoments = await fetchCaseStudyMoments(project.title);
    enrichedProject = mergeNotionMoments(project, notionMoments);
  } catch (e) {
    console.warn(`[CaseStudy] Failed to fetch Notion moments for "${project.title}", using static data:`, e);
  }

  const { next } = getAdjacentProjects(project.id);

  return (
    <main style={{ backgroundColor: 'var(--theme-bg-page, #FAF8F3)', transition: 'background-color 400ms ease' }}>
      <Navigation />
      <CaseStudyPage project={enrichedProject} nextProject={next} />
      <Footer />
    </main>
  );
}
