import {
  fetchProjects,
  fetchFeaturedProjects,
  fetchProjectBySlug,
  fetchAllProjectSlugs,
  fetchCaseStudyMoments,
  fetchSiteContent,
  fetchAlbumArt,
} from './notion-data';
import { fallbackProjects, fallbackMoments, fallbackAlbumArt } from './fallback-data';
import type { NotionProject, NotionCaseStudyMoment, SiteSection, NotionAlbumTile } from './notion-data';

const isNotionConfigured = !!process.env.NOTION_API_KEY;

// ═══ PROJECTS ═══

export async function getProjects(): Promise<NotionProject[]> {
  if (!isNotionConfigured) return fallbackProjects;
  try {
    return await fetchProjects();
  } catch (error) {
    console.error('Failed to fetch projects from Notion:', error);
    return fallbackProjects;
  }
}

export async function getFeaturedProjects(): Promise<NotionProject[]> {
  if (!isNotionConfigured) return fallbackProjects.filter((p) => p.featured);
  try {
    return await fetchFeaturedProjects();
  } catch (error) {
    console.error('Failed to fetch featured projects:', error);
    return fallbackProjects.filter((p) => p.featured);
  }
}

export async function getProjectBySlug(slug: string): Promise<NotionProject | null> {
  if (!isNotionConfigured) return fallbackProjects.find((p) => p.id === slug) || null;
  try {
    return await fetchProjectBySlug(slug);
  } catch (error) {
    console.error('Failed to fetch project:', error);
    return fallbackProjects.find((p) => p.id === slug) || null;
  }
}

export async function getAllProjectSlugs(): Promise<string[]> {
  if (!isNotionConfigured) return fallbackProjects.map((p) => p.id);
  try {
    return await fetchAllProjectSlugs();
  } catch (error) {
    console.error('Failed to fetch slugs:', error);
    return fallbackProjects.map((p) => p.id);
  }
}

// ═══ CASE STUDY MOMENTS ═══

export async function getCaseStudyMoments(projectName: string): Promise<NotionCaseStudyMoment[]> {
  if (!isNotionConfigured) return fallbackMoments.filter((m) => m.project === projectName);
  try {
    return await fetchCaseStudyMoments(projectName);
  } catch (error) {
    console.error('Failed to fetch moments:', error);
    return fallbackMoments.filter((m) => m.project === projectName);
  }
}

// ═══ SITE CONTENT ═══

export async function getSiteContent(pageName: string): Promise<SiteSection[]> {
  if (!isNotionConfigured) return [];
  try {
    return await fetchSiteContent(pageName);
  } catch (error) {
    console.error('Failed to fetch site content:', error);
    return [];
  }
}

// ═══ ALBUM ART ═══

export async function getAlbumArt(): Promise<{ left: NotionAlbumTile[]; right: NotionAlbumTile[] }> {
  if (!isNotionConfigured) return fallbackAlbumArt;
  try {
    return await fetchAlbumArt();
  } catch (error) {
    console.error('Failed to fetch album art:', error);
    return fallbackAlbumArt;
  }
}

// Re-export types
export type { NotionProject, NotionCaseStudyMoment, SiteSection, NotionAlbumTile };
