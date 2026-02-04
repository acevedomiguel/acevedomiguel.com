import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostData {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  draft?: boolean;
  content: string;
}

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  draft?: boolean;
}

function getSlugFromFileName(fileName: string): string {
  return fileName.replace(/\.md$/, '').replace(/ /g, '-').toLowerCase();
}

export function getAllPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((name) => ({
    params: {
      slug: getSlugFromFileName(name),
    },
  }));
}

export async function getPostData(slug: string): Promise<PostData> {
  const fullSlug = slug.endsWith('.md') ? slug : `${slug}.md`;
  const fullPath = path.join(postsDirectory, fullSlug);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || 'Untitled Post',
    date: data.date || new Date().toISOString(),
    description: data.description || '',
    tags: data.tags || [],
    draft: data.draft || false,
    content: contentHtml,
  };
}

export function getAllPostsMetadata(): PostMetadata[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const slugs = fs.readdirSync(postsDirectory);
  const allPostsData = slugs
    .filter((slug) => slug.endsWith('.md'))
    .map((slug) => {
      const fullPath = path.join(postsDirectory, slug);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      const postSlug = getSlugFromFileName(slug);

      return {
        slug: postSlug,
        title: data.title || 'Untitled Post',
        date: data.date || new Date().toISOString(),
        description: data.description || '',
        tags: data.tags || [],
        draft: data.draft || false,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return allPostsData;
}

export function getPublishedPostsMetadata(): PostMetadata[] {
  return getAllPostsMetadata().filter((post) => !post.draft);
}