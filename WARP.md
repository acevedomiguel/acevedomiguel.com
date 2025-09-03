# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a personal portfolio/resume website for acevedomiguel.com, built with Next.js, TypeScript, and Tailwind CSS. It's configured as a static export site with automatic sitemap generation.

## Common Development Commands

### Development Server
```bash
npm run dev
```
Starts the Next.js development server on http://localhost:3000 with hot reload.

### Building
```bash
npm run build
```
Creates a production build and exports static files to the `out/` directory. Automatically runs sitemap generation after build.

### Linting
```bash
npm run lint
```
Runs ESLint with Next.js core web vitals configuration.

### Production Server
```bash
npm run start
```
Serves the production build (requires `npm run build` first).

### Installation
```bash
npm i
```

## Architecture Overview

### Project Structure
- **Static Export**: Configured in `next.config.js` with `output: 'export'` for static hosting
- **Resume Data**: Dynamic resume content loaded from `/public/resume.json` via client-side fetch
- **Component-Based**: React components in `/components/` with page-specific directories
- **TypeScript**: Strongly typed with custom types in `/types/`
- **Styling**: Tailwind CSS with custom configuration and theme extensions

### Key Directories
- `/pages/` - Next.js pages (index, resume)
- `/components/` - Reusable React components organized by feature
- `/components/resume/` - Resume-specific components (work experience, skills)
- `/lib/` - Utility functions (data fetching)
- `/types/` - TypeScript type definitions
- `/public/` - Static assets including resume files and icons
- `/styles/` - Global CSS with Tailwind imports

### Data Flow
1. Resume data stored as JSON in `/public/resume.json`
2. `getData()` utility fetches resume data client-side
3. Resume components render data using TypeScript interfaces
4. Layout components provide consistent page structure

### Styling Architecture
- **Tailwind CSS**: Primary styling framework with custom theme in `tailwind.config.js`
- **Custom Colors**: Resume-specific color palette (resume-bg, resume-name, etc.)
- **Icon Integration**: React Icons for social links and UI elements
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Build Configuration
- **Static Export**: Generates static files for hosting on CDNs
- **Sitemap Generation**: Automatic sitemap creation via `next-sitemap`
- **Image Handling**: Comprehensive favicon and app icon setup
- **ESLint**: Custom rules disabling img element and HTML link warnings for static export

## Development Notes

### Resume Updates
Resume content is managed in `/public/resume.json` following the ResumeData type schema. Updates to resume content only require editing the JSON file - no code changes needed.

### Adding New Pages
New pages should follow the existing pattern:
1. Create page component in `/pages/`
2. Use Layout component for consistent structure
3. Include Nav component for navigation
4. Wrap content in Container component

### Component Development
- Components export as default functions
- Use TypeScript interfaces for props
- Follow existing naming conventions (PascalCase for components)
- Maintain responsive design patterns established in existing components
