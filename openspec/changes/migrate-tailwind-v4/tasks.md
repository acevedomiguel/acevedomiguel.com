## 1. Environment Setup

- [x] 1.1 Create `.node-version` file specifying Node.js 24
- [x] 1.2 Verify current Tailwind dependencies are v4 compatible
- [x] 1.3 Backup current configuration files for rollback safety
- [x] 1.4 Create feature branch for migration work

## 2. CSS Configuration Migration

- [x] 2.1 Update `styles/index.css` - replace `@tailwind` directives with `@import "tailwindcss"`
- [x] 2.2 Convert `tailwind.config.js` theme extensions to CSS `@theme` blocks
- [x] 2.3 Migrate custom colors to CSS variables in `@theme` block
- [x] 2.4 Migrate custom font families to CSS variables in `@theme` block
- [x] 2.5 Migrate custom spacing values to CSS variables in `@theme` block
- [x] 2.6 Migrate custom typography settings to CSS variables in `@theme` block
- [x] 2.7 Migrate custom box shadows to CSS variables in `@theme` block
- [x] 2.8 Remove obsolete `tailwind.config.js` file

## 3. PostCSS Configuration Update

- [x] 3.1 Verify `postcss.config.mjs` uses `@tailwindcss/postcss` correctly
- [x] 3.2 Remove any obsolete PostCSS plugins now built into v4
- [x] 3.3 Test PostCSS configuration with simple build

## 4. Syntax Compliance Updates

- [x] 4.1 Audit components for deprecated utility classes (shadow, rounded, outline-none, ring)
- [x] 4.2 Update deprecated utility classes to v4 equivalents
- [x] 4.3 Replace old opacity utilities with slash syntax if found
- [x] 4.4 Update arbitrary CSS variable syntax with parentheses if needed
- [x] 4.5 Verify variant stacking order compliance

## 5. Build System Testing

- [x] 5.1 Run `npm run build` and verify no PostCSS errors
- [x] 5.2 Check generated CSS files contain all Tailwind utilities
- [x] 5.3 Test development server with `npm run dev`
- [x] 5.4 Verify hot reload performance improvements
- [x] 5.5 Validate all custom CSS classes still work

## 6. Visual Regression Testing

- [x] 6.1 Test homepage visual consistency against current design
- [x] 6.2 Test resume page layout and styling
- [x] 6.3 Test contact page form and button styles
- [x] 6.4 Test navigation component hover states and transitions
- [x] 6.5 Test responsive design on mobile breakpoints
- [x] 6.6 Test custom utility classes and linktree button styles

## 7. Cloudflare Pages Deployment Preparation

- [ ] 7.1 Commit all changes to feature branch
- [ ] 7.2 Test build in simulated Cloudflare environment
- [ ] 7.3 Verify package-lock.json is in sync with package.json
- [ ] 7.4 Create pull request with detailed migration notes

## 8. Production Deployment

- [ ] 8.1 Merge to main branch and trigger Cloudflare Pages build
- [ ] 8.2 Monitor deployment logs for any errors
- [ ] 8.3 Verify live site has working styles
- [ ] 8.4 Test browser compatibility on target browsers
- [ ] 8.5 Monitor performance improvements (build times, page load)

## 9. Documentation and Cleanup

- [ ] 9.1 Update any documentation referencing Tailwind v3 configuration
- [ ] 9.2 Document migration changes for future reference
- [ ] 9.3 Remove any rollback backup files once migration is confirmed successful
- [ ] 9.4 Archive OpenSpec change documentation