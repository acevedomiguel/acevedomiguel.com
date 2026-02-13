## Context

The site currently has a footer with social media links but lacks a dedicated LinkTree-style page for easy link sharing. There's an existing `components/linktree/button.tsx` component that was created for this purpose but is not yet used on any page.

Existing assets available:
- Profile images: `/public/profile.webp` and `/public/profile.png`
- Link button component: `components/linktree/button.tsx`
- Footer links (to be reused): LinkedIn, GitHub, Stack Overflow, Buy Me a Coffee, Instagram
- Website URL: acevedomiguel.com

## Goals / Non-Goals

**Goals:**
- Create a clean, centered LinkTree-style page at `/links`
- Display profile picture in circular frame with name and bio
- List all social/professional links as styled buttons
- Responsive design that works on mobile and desktop
- Consistent with existing site styling (Tailwind CSS)
- SEO-friendly with proper meta tags

**Non-Goals:**
- No backend functionality required (static page)
- No user authentication or analytics
- No link click tracking (unless already present)
- No custom domain for this page

## Decisions

**Decision 1: Use Next.js Page Router**
- **Choice**: Create `pages/links/index.tsx` using Next.js pages router
- **Rationale**: Site currently uses Next.js pages router (not app router), so following existing pattern
- **Alternative considered**: App router - rejected to maintain consistency

**Decision 2: Use Existing Link Button Component**
- **Choice**: Reuse `components/linktree/button.tsx` with potential styling updates
- **Rationale**: Component already exists and is purpose-built for this use case
- **Alternative considered**: Create new component - rejected, existing one just needs minor adjustments

**Decision 3: Profile Picture Source**
- **Choice**: Use `/profile.webp` with `/profile.png` as fallback
- **Rationale**: WebP is optimized format, PNG fallback for older browsers
- **Alternative considered**: Use resume.json image field - rejected to keep page self-contained

**Decision 4: Static Links vs Dynamic**
- **Choice**: Static links hardcoded in component (matching footer.tsx pattern)
- **Rationale**: Links rarely change, simpler implementation
- **Alternative considered**: Load from JSON/config - rejected as overkill

**Decision 5: Styling Approach**
- **Choice**: Use Tailwind CSS with existing site color scheme
- **Rationale**: Maintains visual consistency with rest of site
- **Colors**: Gray text on white/light background, dark mode compatible

## Risks / Trade-offs

**Risk**: Button component may need styling updates
- **Mitigation**: Test existing component and update Tailwind classes if needed for LinkTree layout

**Risk**: Profile image aspect ratio
- **Mitigation**: Use `object-cover` CSS property to maintain aspect ratio in circle frame

**Risk**: SEO impact of new page
- **Mitigation**: Add proper meta tags, prevent indexing if not needed (noindex option), add to sitemap

**Trade-off**: Simple vs Feature-rich
- Keeping page simple (no analytics, no custom domains) limits functionality but reduces complexity
</content>