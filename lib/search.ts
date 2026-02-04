import Fuse, { type FuseResult, type FuseResultMatch } from 'fuse.js';
import { getPublishedPostsMetadata, getPostData } from './posts';
import { PostMetadata } from './posts';

export interface SearchIndexItem {
  slug: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
  date: string;
}

export type SearchResult = FuseResult<SearchIndexItem>;

export async function generateSearchIndex(): Promise<SearchIndexItem[]> {
  const posts = getPublishedPostsMetadata();
  const searchIndex: SearchIndexItem[] = [];

  for (const post of posts) {
    const postData = await getPostData(post.slug);
    
    // Strip HTML tags from content for searching
    const plainContent = postData.content.replace(/<[^>]*>/g, '');
    
    searchIndex.push({
      slug: post.slug,
      title: post.title,
      description: post.description,
      content: plainContent.substring(0, 5000), // Limit content length for performance
      tags: post.tags,
      date: post.date,
    });
  }

  return searchIndex;
}

export function createSearchEngine(index: SearchIndexItem[]) {
  const options = {
    keys: [
      { name: 'title', weight: 2.0 },
      { name: 'content', weight: 1.0 },
      { name: 'description', weight: 1.5 },
      { name: 'tags', weight: 1.8 },
    ],
    threshold: 0.4,
    includeScore: true,
    includeMatches: true,
    minMatchCharLength: 2,
  };

  return new Fuse(index, options);
}

export function searchPosts(query: string, searchEngine: ReturnType<typeof createSearchEngine>): SearchResult[] {
  if (!query.trim()) {
    return [];
  }

  return searchEngine.search(query);
}

export function getHighlightText(match: readonly FuseResultMatch[] | undefined, item: SearchIndexItem): string {
  if (!match || match.length === 0) {
    return item.description;
  }

  const textMatch = match.find(m => m.key === 'content' || m.key === 'description' || m.key === 'title');
  if (!textMatch || !textMatch.indices || textMatch.indices.length === 0) {
    return item.description;
  }

  const indices = textMatch.indices[0];
  const fieldValue = item[textMatch.key as keyof SearchIndexItem] as string;
  const start = Math.max(0, indices[0] - 50);
  const end = Math.min(fieldValue.length, indices[1] + 50);
  
  let highlighted = fieldValue.substring(start, end);
  highlighted = highlighted.replace(
    new RegExp(`(${textMatch.value})`, 'gi'),
    '<mark>$1</mark>'
  );

  return `...${highlighted}...`;
}