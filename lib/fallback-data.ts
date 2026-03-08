// Fallback data used when NOTION_API_KEY is not configured.
// This is the existing hardcoded data from data/projects.ts, transformed
// to match the Notion-based types. Ensures the site always works without Notion.

import { projects as localProjects, albumTiles as localAlbumTiles } from '@/data';
import type { Project } from '@/data';
import type { NotionProject, NotionCaseStudyMoment, NotionAlbumTile } from './notion-data';

function toNotionProject(p: Project): NotionProject {
  return {
    id: p.id,
    title: p.title,
    subtitle: p.subtitle,
    description: p.description,
    thumbnail: p.thumbnail,
    category: p.category,
    tags: p.tags,
    status: p.status,
    duration: p.duration,
    role: p.role,
    team: p.team || '',
    year: p.year,
    featured: p.featured,
    platform: '',
    hasCaseStudy: !!p.caseStudy,
    order: 0,
    notionPageId: '',
  };
}

export const fallbackProjects: NotionProject[] = localProjects.map(toNotionProject);

export const fallbackMoments: NotionCaseStudyMoment[] = [];

export const fallbackAlbumArt = {
  left: localAlbumTiles.map((t, i): NotionAlbumTile => ({
    id: t.id,
    albumName: t.title,
    artist: t.artist,
    coverArt: t.image,
    side: i < 5 ? 'left' : 'right',
    order: i,
    active: true,
  })),
  right: localAlbumTiles.slice(5).map((t, i): NotionAlbumTile => ({
    id: t.id,
    albumName: t.title,
    artist: t.artist,
    coverArt: t.image,
    side: 'right',
    order: i,
    active: true,
  })),
};
