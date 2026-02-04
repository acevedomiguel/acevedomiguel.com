import { getPublishedPostsMetadata } from '../lib/posts';
import { PostMetadata } from '../lib/posts';

interface RSSItem {
  title: string;
  description: string;
  link: string;
  guid: string;
  pubDate: string;
  categories: string[];
}

export function generateRSSFeed(): string {
  const posts = getPublishedPostsMetadata();
  const siteUrl = 'https://acevedomiguel.com';
  const currentDate = new Date().toUTCString();

  const items = posts.map((post: PostMetadata): RSSItem => ({
    title: post.title,
    description: post.description,
    link: `${siteUrl}/posts/${post.slug}`,
    guid: `${siteUrl}/posts/${post.slug}`,
    pubDate: new Date(post.date).toUTCString(),
    categories: post.tags,
  }));

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
    xmlns:atom="http://www.w3.org/2005/Atom"
    xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Acevedo Miguel - Blog</title>
    <description>Technical blog posts by Acevedo Miguel covering DevOps, cloud computing, and software engineering.</description>
    <link>${siteUrl}</link>
    <language>en-us</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <managingEditor>acevedomiguel@example.com (Acevedo Miguel)</managingEditor>
    <webMaster>acevedomiguel@example.com (Acevedo Miguel)</webMaster>
    <generator>Acevedo Miguel Blog Generator</generator>
    <docs>https://www.rssboard.org/rss-specification</docs>
    
    ${items.map((item) => `
    <item>
      <title><![CDATA[${escapeXml(item.title)}]]></title>
      <description><![CDATA[${escapeXml(item.description)}]]></description>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.guid}</guid>
      <pubDate>${item.pubDate}</pubDate>
      ${item.categories.map((category) => `<category><![CDATA[${escapeXml(category)}]]></category>`).join('')}
    </item>`).join('')}
  </channel>
</rss>`;
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Export for use in API route or build script
export default generateRSSFeed;