import { Client } from '@notionhq/client';

// Initialize Notion client.
// The API key comes from a Notion Integration.
// To set up: https://www.notion.so/my-integrations
// 1. Create a new integration
// 2. Copy the "Internal Integration Secret"
// 3. Paste it as NOTION_API_KEY in .env.local
// 4. In Notion, share each database with the integration
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default notion;
