## Context

Current site is a Next.js portfolio with pages for home, resume, and contact. Uses Tailwind CSS for styling and exports as static files for Cloudflare Pages deployment. No existing content management system or dynamic routing beyond the static pages.

## Goals / Non-Goals

**Goals:**
- Markdown-based content system that works with static site generation
- Client-side search without backend dependencies
- Seamless integration with existing design system
- Tag-based filtering and pagination for better UX
- RSS feed for blog syndication

**Non-Goals:**
- Dynamic server-side content
- Database integration
- Comment system
- User authentication
- Admin interface

## Decisions

**Static Generation Strategy**: Use Next.js static generation with getStaticProps/getStaticPaths for blog posts. This allows markdown processing at build time while maintaining compatibility with Cloudflare Pages.

**Markdown Processing**: Use `gray-matter` for frontmatter parsing and `remark` for markdown processing. These are lightweight and work well with static builds.

**Search Implementation**: Client-side search using Lunr.js or similar lightweight search library. Index generated at build time from post metadata and content.

**File Structure**: Posts stored in `/posts/` directory with `.md` extension. Each post includes frontmatter with title, date, description, tags, and slug (derived from filename).

**Pagination**: Simple pagination implemented with query parameters (e.g., `/posts?page=2`) using getStaticProps to generate paginated pages at build time.

## Risks / Trade-offs

[Build Time Growth] → As post count increases, build time will grow. Mitigation: Limit content processing optimization and consider incremental builds if needed.

[Search Performance] → Client-side search may become slow with many posts. Mitigation: Optimize search index size and consider search result caching.

[Static Generation Limits] → Large number of paginated pages may hit static generation limits. Mitigation: Implement dynamic pagination for very large post counts.

[Tag Management] → Growing number of tags may create navigation complexity. Mitigation: Limit displayed tags and implement tag grouping if needed.