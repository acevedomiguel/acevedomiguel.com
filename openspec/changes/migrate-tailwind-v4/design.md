## Context

**Current State**: The project has Tailwind CSS v4 packages (`^4.1.18`) installed but is still using v3 configuration format. This results in completely broken styles - all Tailwind classes are missing. The `@tailwind` directives in `styles/index.css` are not recognized by v4, and `tailwind.config.js` uses the outdated CommonJS format.

**Constraints**: 
- Must deploy on Cloudflare Pages using Node.js 24
- Cannot break existing custom CSS classes and component styling
- Need to maintain current visual design while migrating underlying architecture
- Browser support limited to modern browsers (Safari 16.4+, Chrome 111+, Firefox 128+)

**Stakeholders**: Development team (maintainability), end users (visual consistency), deployment pipeline (Cloudflare Pages).

## Goals / Non-Goals

**Goals:**
- Restore all broken Tailwind CSS styles using proper v4 configuration
- Achieve 100x faster incremental builds and improved hot reload performance
- Ensure reliable Cloudflare Pages builds with Node.js 24
- Modernize CSS architecture to leverage CSS-first configuration
- Maintain visual consistency with current design

**Non-Goals:**
- Visual redesign or UI changes
- Adding new styling features beyond migration scope
- Supporting legacy browsers (IE11, older iOS/Android)
- Migrating to other build tools (staying with Next.js + PostCSS)

## Decisions

### **1. CSS-First Configuration over JavaScript Config**
**Decision**: Use Tailwind v4's new `@theme` CSS blocks instead of `tailwind.config.js`
**Rationale**: 
- Eliminates JavaScript from styling pipeline
- Enables runtime CSS variable customization
- Simpler mental model with single language (CSS)
- Better performance with native CSS parsing

**Alternatives Considered**:
- Keep `tailwind.config.js` (not recommended for v4)
- Use mixed approach (complex, less future-proof)

### **2. Direct Migration vs Gradual Transition**
**Decision**: Complete v4 migration in single change
**Rationale**:
- Current styles are completely broken anyway
- Avoids maintaining parallel v3/v4 configurations
- Immediate access to v4 performance benefits
- Cleaner git history with one comprehensive change

**Alternatives Considered**:
- Gradual migration with feature flags (overkill for this scope)
- Back to v3 then forward to v4 (unnecessary double work)

### **3. Cloudflare Pages Node.js Pinning Strategy**
**Decision**: Use `.node-version` file for explicit Node.js 24 specification
**Rationale**:
- Explicit version control over environment variables
- Follows Cloudflare Pages best practices
- Prevents unexpected build environment changes
- Documented in repository for clarity

**Alternatives Considered**:
- Environment variable only (less visible)
- No pinning (risky with future Cloudflare updates)

## Risks / Trade-offs

**[Risk] Browser Compatibility Loss** → Modern CSS features in v4 require newer browsers
**Mitigation**: Document browser requirements clearly; this is acceptable for personal portfolio site

**[Risk] Cloudflare Pages Build Issues** → Known issues with Tailwind v4 on CF Pages
**Mitigation**: Use explicit Node.js 24 pinning, test thoroughly, have rollback plan to v3.4

**[Risk] Custom CSS Integration Complexity** → Custom utility classes may conflict with v4 syntax
**Mitigation**: Audit existing custom CSS, use cascade layers to prevent conflicts, test component by component

**[Risk] Performance Regression During Migration** → Temporary styling issues during development
**Mitigation**: Work in feature branch, comprehensive testing before merge, use browser dev tools for debugging

**Trade-off**: Loss of legacy browser support for significant performance gains and modern CSS features
**Trade-off**: Initial migration complexity for long-term maintainability and build speed improvements

## Migration Plan

### **Phase 1: Configuration Migration**
1. Create `.node-version` file with `24`
2. Update `styles/index.css` to use `@import "tailwindcss"` and `@theme` blocks
3. Convert `tailwind.config.js` theme extensions to CSS `@theme` syntax
4. Update `postcss.config.mjs` for v4 compatibility
5. Remove obsolete `tailwind.config.js` file

### **Phase 2: CSS Syntax Updates**
1. Update any deprecated utility classes (shadow → shadow-sm, etc.)
2. Replace opacity utilities with slash syntax if used
3. Fix variant stacking order changes
4. Update arbitrary CSS variable syntax with parentheses
5. Test all components for visual consistency

### **Phase 3: Build & Deployment Verification**
1. Local build testing with `npm run build`
2. Component-by-component visual regression testing
3. Cloudflare Pages deployment test in staging
4. Performance verification (build times, hot reload)
5. Browser compatibility testing on target browsers

### **Rollback Strategy**
- Keep current `package.json` and configuration files backed up
- Create rollback branch with current v3 configuration
- Document emergency rollback commands to revert to v3.4
- Monitor deployment for 24 hours after production release

## Open Questions

- Are there any third-party Tailwind plugins being used that might not be v4 compatible?
- Does the current build process have any custom PostCSS plugins that could conflict?
- Are there any dynamic theme configurations in JavaScript that need CSS variable conversion?
- What is the current deployment process - automatic on push or manual triggers?