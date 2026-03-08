import notion from './notion';
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

// ═══ TYPE HELPERS ═══
// Notion SDK v5 uses dataSources.query (not databases.query)

function getTitle(page: PageObjectResponse, prop: string): string {
  const p = page.properties[prop];
  if (p?.type === 'title') return p.title.map((t) => t.plain_text).join('');
  return '';
}

function getRichText(page: PageObjectResponse, prop: string): string {
  const p = page.properties[prop];
  if (p?.type === 'rich_text') return p.rich_text.map((t) => t.plain_text).join('');
  return '';
}

function getSelect(page: PageObjectResponse, prop: string): string {
  const p = page.properties[prop];
  if (p?.type === 'select' && p.select) return p.select.name;
  return '';
}

function getMultiSelect(page: PageObjectResponse, prop: string): string[] {
  const p = page.properties[prop];
  if (p?.type === 'multi_select') return p.multi_select.map((s) => s.name);
  return [];
}

function getCheckbox(page: PageObjectResponse, prop: string): boolean {
  const p = page.properties[prop];
  if (p?.type === 'checkbox') return p.checkbox;
  return false;
}

function getNumber(page: PageObjectResponse, prop: string): number {
  const p = page.properties[prop];
  if (p?.type === 'number' && p.number !== null) return p.number;
  return 0;
}

function getUrl(page: PageObjectResponse, prop: string): string {
  const p = page.properties[prop];
  if (p?.type === 'url' && p.url) return p.url;
  return '';
}

function getFiles(page: PageObjectResponse, prop: string): string[] {
  const p = page.properties[prop];
  if (p?.type === 'files') {
    return p.files
      .map((f) => {
        if (f.type === 'file') return f.file.url;
        if (f.type === 'external') return f.external.url;
        return '';
      })
      .filter(Boolean);
  }
  return [];
}

// Helper to filter page results
function isPage(result: { object: string }): result is PageObjectResponse {
  return 'properties' in result;
}

// ═══ EXPORTED TYPES ═══

export interface NotionProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  category: string;
  tags: string[];
  status: string;
  duration: string;
  role: string;
  team: string;
  year: number;
  featured: boolean;
  platform: string;
  hasCaseStudy: boolean;
  order: number;
  notionPageId: string;
}

export interface NotionCaseStudyMoment {
  id: string;
  project: string;
  momentNumber: string;
  title: string;
  headline: string;
  theme: string;
  summary: string;
  before: string;
  after: string;
  insight: string;
  images: string[];
  order: number;
}

export interface SiteSection {
  id: string;
  sectionName: string;
  page: string;
  heading: string;
  subheading: string;
  bodyText: string;
  ctaText: string;
  ctaLink: string;
  images: string[];
  order: number;
  visible: boolean;
}

export interface NotionAlbumTile {
  id: string;
  albumName: string;
  artist: string;
  coverArt: string;
  side: 'left' | 'right' | 'both';
  order: number;
  active: boolean;
}

// ═══ FETCH FUNCTIONS ═══

function mapPageToProject(page: PageObjectResponse): NotionProject {
  return {
    id: getRichText(page, 'Slug') || page.id,
    title: getTitle(page, 'Project Name'),
    subtitle: getRichText(page, 'Subtitle'),
    description: getRichText(page, 'Description'),
    thumbnail: getFiles(page, 'Thumbnail')[0] || '/images/placeholder-screen.svg',
    category: getSelect(page, 'Category'),
    tags: getMultiSelect(page, 'Tags'),
    status: getSelect(page, 'Status'),
    duration: getRichText(page, 'Duration'),
    role: getRichText(page, 'Role'),
    team: getRichText(page, 'Team'),
    year: getNumber(page, 'Year'),
    featured: getCheckbox(page, 'Featured'),
    platform: getRichText(page, 'Platform'),
    hasCaseStudy: getCheckbox(page, 'Has Case Study'),
    order: getNumber(page, 'Order'),
    notionPageId: page.id,
  };
}

export async function fetchProjects(): Promise<NotionProject[]> {
  const dbId = process.env.NOTION_PROJECTS_DB;
  if (!dbId) throw new Error('NOTION_PROJECTS_DB not set');

  const response = await notion.dataSources.query({
    data_source_id: dbId,
    sorts: [{ property: 'Order', direction: 'ascending' }],
  });

  return response.results.filter(isPage).map(mapPageToProject);
}

export async function fetchFeaturedProjects(): Promise<NotionProject[]> {
  const dbId = process.env.NOTION_PROJECTS_DB;
  if (!dbId) throw new Error('NOTION_PROJECTS_DB not set');

  const response = await notion.dataSources.query({
    data_source_id: dbId,
    filter: { property: 'Featured', checkbox: { equals: true } },
    sorts: [{ property: 'Order', direction: 'ascending' }],
  });

  return response.results.filter(isPage).map(mapPageToProject);
}

export async function fetchProjectBySlug(slug: string): Promise<NotionProject | null> {
  const dbId = process.env.NOTION_PROJECTS_DB;
  if (!dbId) throw new Error('NOTION_PROJECTS_DB not set');

  const response = await notion.dataSources.query({
    data_source_id: dbId,
    filter: { property: 'Slug', rich_text: { equals: slug } },
  });

  const page = response.results.filter(isPage)[0];
  if (!page) return null;

  return mapPageToProject(page);
}

export async function fetchAllProjectSlugs(): Promise<string[]> {
  const projects = await fetchProjects();
  return projects.map((p) => p.id).filter(Boolean);
}

export async function fetchCaseStudyMoments(projectName: string): Promise<NotionCaseStudyMoment[]> {
  const dbId = process.env.NOTION_MOMENTS_DB;
  if (!dbId) throw new Error('NOTION_MOMENTS_DB not set');

  const response = await notion.dataSources.query({
    data_source_id: dbId,
    filter: { property: 'Project', rich_text: { equals: projectName } },
    sorts: [{ property: 'Order', direction: 'ascending' }],
  });

  return response.results.filter(isPage).map((page) => ({
    id: page.id,
    project: getRichText(page, 'Project'),
    momentNumber: getRichText(page, 'Moment Number'),
    title: getTitle(page, 'Moment Title'),
    headline: getRichText(page, 'Headline'),
    theme: getRichText(page, 'Theme'),
    summary: getRichText(page, 'Summary'),
    before: getRichText(page, 'Before'),
    after: getRichText(page, 'After'),
    insight: getRichText(page, 'Insight'),
    images: getFiles(page, 'Images'),
    order: getNumber(page, 'Order'),
  }));
}

export async function fetchSiteContent(pageName: string): Promise<SiteSection[]> {
  const dbId = process.env.NOTION_CONTENT_DB;
  if (!dbId) throw new Error('NOTION_CONTENT_DB not set');

  const response = await notion.dataSources.query({
    data_source_id: dbId,
    filter: {
      and: [
        { property: 'Page', select: { equals: pageName } },
        { property: 'Visible', checkbox: { equals: true } },
      ],
    },
    sorts: [{ property: 'Order', direction: 'ascending' }],
  });

  return response.results.filter(isPage).map((page) => ({
    id: page.id,
    sectionName: getTitle(page, 'Section Name'),
    page: getSelect(page, 'Page'),
    heading: getRichText(page, 'Heading'),
    subheading: getRichText(page, 'Subheading'),
    bodyText: getRichText(page, 'Body Text'),
    ctaText: getRichText(page, 'CTA Text'),
    ctaLink: getUrl(page, 'CTA Link'),
    images: getFiles(page, 'Images'),
    order: getNumber(page, 'Order'),
    visible: getCheckbox(page, 'Visible'),
  }));
}

export async function fetchAlbumArt(): Promise<{ left: NotionAlbumTile[]; right: NotionAlbumTile[] }> {
  const dbId = process.env.NOTION_ALBUM_ART_DB;
  if (!dbId) throw new Error('NOTION_ALBUM_ART_DB not set');

  const response = await notion.dataSources.query({
    data_source_id: dbId,
    filter: { property: 'Active', checkbox: { equals: true } },
    sorts: [{ property: 'Order', direction: 'ascending' }],
  });

  const tiles: NotionAlbumTile[] = response.results.filter(isPage).map((page) => ({
    id: page.id,
    albumName: getTitle(page, 'Album Name'),
    artist: getRichText(page, 'Artist'),
    coverArt: getFiles(page, 'Cover Art')[0] || '/images/ethiopiques/placeholder.svg',
    side: getSelect(page, 'Side') as 'left' | 'right' | 'both',
    order: getNumber(page, 'Order'),
    active: getCheckbox(page, 'Active'),
  }));

  const left = tiles.filter((t) => t.side === 'left' || t.side === 'both');
  const right = tiles.filter((t) => t.side === 'right' || t.side === 'both');

  return { left, right };
}
