---
title: "Draft Post - Cloudflare Pages Deployment"
date: "2024-01-25"
description: "This is a draft post that won't appear in listings but can be accessed directly."
tags: ["Cloudflare", "Deployment", "Draft"]
draft: true
---

# Draft Post: Cloudflare Pages Deployment

This is a draft post to demonstrate the draft functionality. This post:

- ✅ Will render if accessed directly at its URL
- ❌ Will not appear in the blog listing
- ❌ Will not be included in the RSS feed
- ❌ Will not be indexed by search engines

## How Draft Posts Work

Draft posts are marked with `draft: true` in the frontmatter. The system handles them specially:

1. **Direct Access**: You can still access draft posts by going directly to their URL
2. **Exclusion from Listings**: Draft posts are filtered out from blog listings
3. **No Indexing**: Draft posts include `noindex` meta tags
4. **Visual Indicator**: Draft posts show a "Draft" badge when rendered

## Publishing a Draft Post

To publish a draft post, simply change the frontmatter:

```yaml
# Before
draft: true

# After
draft: false
# Or remove the field entirely
```

## Use Cases

Draft posts are perfect for:

- **Work in Progress**: Articles you're still writing
- **Review Process**: Posts that need editorial review
- **Scheduled Content**: Posts not ready for publication
- **Testing**: Trying out new content formats

This post demonstrates that even though it's a draft, it renders normally when accessed directly.