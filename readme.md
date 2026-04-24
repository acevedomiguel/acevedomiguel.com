# acevedomiguel.com

Personal portfolio and resume website.

[![Better Stack Badge](https://uptime.betterstack.com/status-badges/v1/monitor/s6ya.svg)](https://uptime.betterstack.com/?utm_source=status_badge)

## Overview

A static, fast, and SEO-friendly personal site built with [Next.js](https://nextjs.org/) and [Tailwind CSS v4](https://tailwindcss.com/). It serves as an online resume and contact hub, hosted on [Cloudflare Pages](https://pages.cloudflare.com/).

## Pages & Features

| Route | Description |
|-------|-------------|
| `/` | Homepage with bio, expertise grid, and navigation |
| `/resume/` | Professional resume with PDF/ODT/DOCX download options |
| `/contact/` | Contact page |
| `/links/` | Social link hub (LinkedIn, GitHub, Twitter/X, Instagram, Buy Me a Coffee) |
| `/es/` | Spanish localized homepage |
| `/es/resume/` | Spanish resume |
| `/es/links/` | Spanish links page |
| `/sitemap` | Custom sitemap page |

- **SEO Optimized:** Auto-generated `sitemap.xml` and `robots.txt` via `next-sitemap`, semantic HTML, and structured data support.
- **Internationalization:** Spanish language variants under `/es/`.
- **Performance:** Bundle analyzer available via `ANALYZE=true`, static HTML export for maximum speed.

## Architecture

| Technology | Purpose |
|------------|---------|
| [Next.js 16](https://nextjs.org/) | React framework using the **Pages Router** |
| [React 19](https://react.dev/) | UI library |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS with CSS-first configuration |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Jest](https://jestjs.io/) + [Testing Library](https://testing-library.com/) | Unit and component testing |
| [next-sitemap](https://www.npmjs.com/package/next-sitemap) | Sitemap and robots.txt generation |

### Build Configuration

The site is configured for **static export** (`next.config.js`):

```js
{
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true }
}
```

This generates a fully static site in the `./out` directory, suitable for static hosting.

## Deployment

**Platform:** [Cloudflare Pages](https://pages.cloudflare.com/)  
**Method:** Native Git integration (connects directly to this GitHub repository). Pushes to the production branch trigger automatic builds and deployments.

The `next-sitemap` configuration automatically detects Cloudflare Pages preview deployments using `CF_PAGES_COMMIT_SHA` and `CF_PAGES_PROJECT_NAME` environment variables.

**Live URL:** [https://acevedomiguel.com](https://acevedomiguel.com)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)

### Install

```bash
git clone https://github.com/acevedomiguel/acevedomiguel.com.git
cd acevedomiguel.com
npm install
```

### Development

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Generate a production static export:

```bash
npm run build
```

The static site will be output to the `./out` directory.

### Testing

Run the test suite:

```bash
npm test
```

Run tests in watch mode during development:

```bash
npm run test:watch
```

### Linting

Check code style and quality:

```bash
npm run lint
```

## Directory Structure

```
├── components/         # React components (layout, nav, footer, resume, etc.)
├── lib/                # Utilities (SEO helpers, web-vitals, data fetching)
├── pages/              # Next.js Pages Router
├── public/             # Static assets (icons, images, resume.pdf, resume.json)
├── styles/             # Global CSS (Tailwind v4 CSS-first config)
├── out/                # Static export output directory
├── .github/workflows/  # CI workflows (CodeQL security scanning)
└── types/              # TypeScript type definitions
```

## License

This is a personal project. All rights reserved.
