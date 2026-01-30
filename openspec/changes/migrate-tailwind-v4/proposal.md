## Why

The current Tailwind CSS v4 installation is completely broken - all styles are missing due to using v3 configuration format with v4 packages. This was caused by an accidental security update recommendation that migrated the project to Tailwind v4 without proper migration. The site needs to be restored to working condition while leveraging Cloudflare Pages' Node.js 24 environment for optimal v4 performance.

## What Changes

- **BREAKING**: Replace v3 configuration format with v4 CSS-first configuration
- **BREAKING**: Convert `@tailwind` directives to `@import "tailwindcss"` syntax  
- **BREAKING**: Migrate `tailwind.config.js` theme extensions to CSS `@theme` blocks
- **BREAKING**: Update PostCSS configuration for v4 compatibility
- Update custom CSS classes and utility usage for v4 syntax changes
- Ensure Cloudflare Pages build compatibility with Node.js 24
- Optimize build configuration for Cloudflare Pages deployment environment
- Add Node.js version pinning for consistent builds

## Capabilities

### New Capabilities
- `tailwind-v4-migration`: Complete migration from Tailwind CSS v3 to v4 with CSS-first configuration
- `cloudflare-pages-build`: Cloudflare Pages build optimization with Node.js 24 support and consistent deployment

### Modified Capabilities
- None (existing styling requirements remain the same, only implementation changes)

## Impact

- **Build System**: PostCSS configuration and Tailwind setup completely restructured
- **CSS Architecture**: Move from JavaScript config to CSS-based theming system  
- **Development**: Hot reload and build performance improvements (100x faster incremental builds)
- **Deployment**: Cloudflare Pages compatibility with Node.js 24 environment
- **Dependencies**: Tailwind packages and PostCSS plugins updated to v4 ecosystem
- **Browser Support**: Modern browser requirements (Safari 16.4+, Chrome 111+, Firefox 128+)