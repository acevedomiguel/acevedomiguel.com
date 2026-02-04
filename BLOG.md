# Blog Documentation

This blog system is built with Next.js static generation and supports the following features:

## Features

- **Static Generation**: All blog pages are pre-rendered at build time
- **Markdown Support**: Write posts in Markdown with frontmatter
- **Draft Posts**: Work on posts privately before publishing
- **Tag System**: Organize and filter content by tags
- **Search**: Client-side search with highlighting
- **RSS Feed**: Automatic RSS feed generation
- **SEO Optimized**: Meta tags, structured data, and sitemap integration

## File Structure

```
├── posts/                    # Markdown blog posts
├── pages/
│   └── posts/
│       ├── index.tsx          # Blog listing page
│       └── [slug].tsx        # Individual post pages
├── components/
│   ├── blog-post-card.tsx     # Post card for listings
│   ├── blog-post-header.tsx    # Post metadata header
│   ├── code-block.tsx          # Syntax highlighting
│   ├── pagination.tsx          # Pagination navigation
│   ├── post-navigation.tsx      # Next/previous post links
│   ├── search-box.tsx          # Search interface
│   └── tag-filter.tsx          # Tag filtering
└── lib/
    ├── posts.ts                # Post parsing utilities
    ├── search.ts               # Search functionality
    └── rss.ts                 # RSS feed generation
```

## Frontmatter Schema

Each blog post must include frontmatter with these fields:

### Required Fields

```yaml
---
title: "Your Post Title"
date: "2024-01-15"
description: "Brief description for SEO and previews"
---
```

### Optional Fields

```yaml
---
tags: ["tag1", "tag2"]    # For categorization
draft: true/false            # Control publication status
---
```

## Frontmatter Field Details

- **title**: String, required. The post title displayed in headers and listings.
- **date**: String, required. Publication date in YYYY-MM-DD format.
- **description**: String, required. SEO description (under 160 characters recommended).
- **tags**: Array of strings, optional. Tags for categorization and filtering.
- **draft**: Boolean, optional. `true` posts are accessible but not listed.

## Draft Post Workflow

1. **Create Draft**: Set `draft: true` in frontmatter
2. **Develop**: Access post directly via `/posts/slug` URL
3. **Preview**: Draft posts show "Draft" indicator and have `noindex` meta tags
4. **Publish**: Set `draft: false` or remove field entirely

Draft posts will:
- ✅ Render normally at their URL
- ❌ Not appear in blog listings
- ❌ Not be included in RSS feed
- ❌ Not be indexed by search engines
- ✅ Show "Draft" badge on the page

## URL Structure

- **Blog Listing**: `/posts`
- **Individual Post**: `/posts/[slug]`
- **Tag Filtering**: `/posts?tag=[tag-name]`
- **RSS Feed**: `/rss.xml`

## Search Features

- **Real-time Search**: Results update as you type
- **Multiple Fields**: Searches title, content, description, and tags
- **Highlighting**: Matched terms are highlighted in results
- **Client-side**: Works with static export (no backend required)
- **Server-side**: Optional Cloudflare Function integration available

## Cloudflare Functions Integration

For enhanced search with better performance, you can enable server-side search:

1. **Remove Static Export**: Update `next.config.js` to remove `output: "export"`
2. **Enable Functions**: Deploy `pages/api/search.ts` as Cloudflare Function
3. **Update SearchBox**: Modify to call `/api/search` endpoint
4. **Benefits**: 
   - Smaller client bundle
   - Better search performance
   - Advanced search features

### Server-side Search API

The `pages/api/search.ts` provides:
- **Full-text search** across all content
- **Weighted scoring** (title > description > content > tags)
- **Fast response** with Fuse.js on server
- **Free tier** compatible with Cloudflare Functions

To enable:
1. Comment out static export in `next.config.js`
2. Update build command to `npm run build` (without RSS script)
3. Deploy with Cloudflare Pages Functions enabled

## Build Process

1. **Markdown Parsing**: Frontmatter extraction and HTML conversion
2. **Static Generation**: All pages pre-rendered at build time
3. **Search Index**: Client-side search index created
4. **RSS Generation**: RSS feed generated to `/public/rss.xml`
5. **Sitemap**: Blog posts included in automatic sitemap

## Development Workflow

1. **Add Post**: Create new `.md` file in `posts/` directory
2. **Write Content**: Use Markdown with frontmatter
3. **Test Locally**: `npm run dev` to preview
4. **Build**: `npm run build` to generate static files
5. **Deploy**: Upload to Cloudflare Pages

## Styling Guidelines

- **Consistent Design**: Uses existing Tailwind CSS classes
- **Responsive**: Mobile-friendly layouts
- **Accessible**: Proper ARIA labels and semantic HTML
- **Performance**: Optimized images and minimal JavaScript

## SEO Best Practices

- **Meta Tags**: Automatic generation for all posts
- **Structured Data**: Schema.org markup for articles
- **Open Graph**: Social media sharing optimization
- **Canonical URLs**: Proper URL canonicalization
- **RSS Feed**: For content syndication

## Performance Considerations

- **Static Generation**: Fast page loads
- **Image Optimization**: Responsive images with proper formats
- **Minimal JavaScript**: Client-side search is lightweight
- **CDN Ready**: Static files optimized for CDN delivery

## Deployment (Cloudflare Pages)

The blog is optimized for static deployment on Cloudflare Pages:

1. **Build Command**: `npm run build`
2. **Output Directory**: `out`
3. **Environment**: No server-side requirements
4. **Performance**: Static generation ensures fast edge delivery

## Content Guidelines

1. **Quality over Quantity**: Focus on valuable technical content
2. **Technical Accuracy**: Ensure code examples work
3. **SEO Friendly**: Use descriptive titles and descriptions
4. **Accessibility**: Add alt text and use semantic markup
5. **Consistency**: Follow established writing style