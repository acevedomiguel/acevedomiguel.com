// Enhanced next-sitemap configuration with SEO optimizations

const commit_sha = process.env.CF_PAGES_COMMIT_SHA;
const project = process.env.CF_PAGES_PROJECT_NAME;
const previewUrl =
	commit_sha && project
		? `https://${commit_sha}.${project}.pages.dev`
		: undefined;

const siteUrl = previewUrl || "https://www.acevedomiguel.com";

module.exports = {
	siteUrl,
	generateRobotsTxt: true,
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
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/api/", "/admin/", "/_next/", "/404", "/500"],
			},
			// AI-friendly crawlers
			{
				userAgent: "GPTBot",
				allow: "/",
			},
			{
				userAgent: "ChatGPT-User",
				allow: "/",
			},
			{
				userAgent: "CCBot",
				allow: "/",
			},
			{
				userAgent: "anthropic-ai",
				allow: "/",
			},
			{
				userAgent: "Claude-Web",
				allow: "/",
			},
			// Search engine crawlers with specific rules
			{
				userAgent: "Googlebot",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
			{
				userAgent: "Bingbot",
				allow: "/",
				disallow: ["/api/", "/admin/"],
				crawlDelay: 1,
			},
		],
		additionalSitemaps: [`${siteUrl}/sitemap.xml`],
		host: siteUrl,
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
