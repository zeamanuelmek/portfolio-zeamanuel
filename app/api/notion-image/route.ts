import { type NextRequest, NextResponse } from 'next/server';
import notion from '@/lib/notion';
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

/**
 * GET /api/notion-image?pageId=XXX&prop=Images&index=0
 *
 * Fetches a fresh signed Notion file URL and streams the image back.
 * Notion-hosted S3 URLs expire in ~1 hour; this proxy always gets a
 * current URL on each request so images never break.
 *
 * Cache-Control: private, max-age=3300 (~55 min). Safe to cache on
 * the client just under the 1-hour Notion expiry window.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const pageId = searchParams.get('pageId');
  const prop = searchParams.get('prop') || 'Images';
  const index = parseInt(searchParams.get('index') || '0', 10);

  if (!pageId) {
    return NextResponse.json({ error: 'Missing pageId' }, { status: 400 });
  }

  let freshUrl: string;
  try {
    const page = await notion.pages.retrieve({ page_id: pageId }) as PageObjectResponse;
    const filesProperty = page.properties[prop];

    if (!filesProperty || filesProperty.type !== 'files' || filesProperty.files.length === 0) {
      return NextResponse.json({ error: 'No files found' }, { status: 404 });
    }

    const file = filesProperty.files[index];
    if (!file) {
      return NextResponse.json({ error: 'Index out of range' }, { status: 404 });
    }

    freshUrl = file.type === 'file' ? file.file.url : file.external.url;
  } catch (err) {
    console.error('[notion-image] Failed to retrieve page:', err);
    return NextResponse.json({ error: 'Notion fetch failed' }, { status: 502 });
  }

  // Stream the image from Notion/S3 to the client
  try {
    const upstream = await fetch(freshUrl);
    if (!upstream.ok) {
      return NextResponse.json({ error: 'Image fetch failed' }, { status: 502 });
    }

    const contentType = upstream.headers.get('content-type') ?? 'image/jpeg';
    const buffer = await upstream.arrayBuffer();

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        // Cache on client for 55 minutes, safely under Notion's ~1hr expiry
        'Cache-Control': 'private, max-age=3300',
      },
    });
  } catch (err) {
    console.error('[notion-image] Failed to stream image:', err);
    return NextResponse.json({ error: 'Stream failed' }, { status: 502 });
  }
}
