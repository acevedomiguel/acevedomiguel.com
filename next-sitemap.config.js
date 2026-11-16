// Enhanced next-sitemap configuration with SEO optimizations

const commit_sha = process.env.CF_PAGES_COMMIT_SHA;
const project = process.env.CF_PAGES_PROJECT_NAME;
const previewUrl =
	commit_sha && project
		? `https://${commit_sha}.${project}.pages.dev`
		: undefined;

const siteUrl = previewUrl || "https://acevedomiguel.com";

module.exports = {
	siteUrl,
	generateRobotsTxt: false,
	outDir: "out",
	sitemapSize: 7000,
	changefreq: "monthly",
	priority: 0.7,
	exclude: ["/api/*", "/admin/*", "/_next/*", "/404", "/500"],
	additionalPaths: async (config) => {
		const now = new Date().toISOString();

		return [
			{
				loc: "/",
				changefreq: "monthly",
				priority: 1.0,
				lastmod: now,
			},
			{
				loc: "/resume",
				changefreq: "monthly",
				priority: 0.9,
				lastmod: now,
			},
			{
				loc: "/contact",
				changefreq: "yearly",
				priority: 0.7,
				lastmod: now,
			},
			{
				loc: "/sitemap",
				changefreq: "yearly",
				priority: 0.5,
				lastmod: now,
			},
		];
	},
	transform: async (config, path) => {
		// Custom transform for specific pages
		const customPriorities = {
			"/": 1.0,
			"/resume": 0.9,
			"/contact": 0.7,
			"/sitemap": 0.5,
		};

		const customChangeFreq = {
			"/": "monthly",
			"/resume": "monthly",
			"/contact": "yearly",
			"/sitemap": "yearly",
		};

		return {
			loc: path,
			changefreq: customChangeFreq[path] || config.changefreq,
			priority: customPriorities[path] || config.priority,
			lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
		};
	},
};
