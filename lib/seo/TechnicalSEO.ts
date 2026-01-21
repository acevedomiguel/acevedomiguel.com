export interface RobotsTxtConfig {
	userAgents: Array<{
		userAgent: string;
		allow?: string[];
		disallow?: string[];
		crawlDelay?: number;
	}>;
	sitemaps: string[];
	host?: string;
}

export interface PreloadResource {
	href: string;
	as: "script" | "style" | "font" | "image" | "document";
	type?: string;
	crossorigin?: "anonymous" | "use-credentials";
}

export interface HreflangEntry {
	lang: string;
	href: string;
}

export class TechnicalSEO {
	private readonly baseUrl: string;

	constructor(baseUrl: string = "https://www.acevedomiguel.com") {
		this.baseUrl = baseUrl.replace(/\/$/, "");
	}

	/**
	 * Generate optimized robots.txt content
	 */
	generateRobotsTxt(config?: Partial<RobotsTxtConfig>): string {
		const defaultConfig: RobotsTxtConfig = {
			userAgents: [
				{
					userAgent: "*",
					allow: ["/"],
					disallow: ["/api/", "/admin/", "/_next/", "/private/"],
				},
				{
					userAgent: "GPTBot",
					allow: ["/"],
					disallow: [],
				},
				{
					userAgent: "ChatGPT-User",
					allow: ["/"],
					disallow: [],
				},
				{
					userAgent: "CCBot",
					allow: ["/"],
					disallow: [],
				},
				{
					userAgent: "anthropic-ai",
					allow: ["/"],
					disallow: [],
				},
				{
					userAgent: "Claude-Web",
					allow: ["/"],
					disallow: [],
				},
				{
					userAgent: "Baiduspider",
					allow: ["/"],
					disallow: [],
					crawlDelay: 1,
				},
			],
			sitemaps: [`${this.baseUrl}/sitemap.xml`],
			host: this.baseUrl,
		};

		const finalConfig = { ...defaultConfig, ...config };

		let robotsTxt = "";

		// Add user agent rules
		finalConfig.userAgents.forEach((ua) => {
			robotsTxt += `User-agent: ${ua.userAgent}\n`;

			if (ua.allow && ua.allow.length > 0) {
				ua.allow.forEach((path) => {
					robotsTxt += `Allow: ${path}\n`;
				});
			}

			if (ua.disallow && ua.disallow.length > 0) {
				ua.disallow.forEach((path) => {
					robotsTxt += `Disallow: ${path}\n`;
				});
			}

			if (ua.crawlDelay) {
				robotsTxt += `Crawl-delay: ${ua.crawlDelay}\n`;
			}

			robotsTxt += "\n";
		});

		// Add sitemaps
		finalConfig.sitemaps.forEach((sitemap) => {
			robotsTxt += `Sitemap: ${sitemap}\n`;
		});

		// Add host if specified
		if (finalConfig.host) {
			robotsTxt += `\nHost: ${finalConfig.host}\n`;
		}

		return robotsTxt.trim();
	}

	/**
	 * Generate resource preload tags for critical assets
	 */
	generatePreloadTags(resources: PreloadResource[]): string[] {
		return resources.map((resource) => {
			let tag = `<link rel="preload" href="${resource.href}" as="${resource.as}"`;

			if (resource.type) {
				tag += ` type="${resource.type}"`;
			}

			if (resource.crossorigin) {
				tag += ` crossorigin="${resource.crossorigin}"`;
			}

			tag += ">";
			return tag;
		});
	}

	/**
	 * Generate hreflang tags for international content
	 */
	generateHreflangTags(entries: HreflangEntry[]): string[] {
		return entries.map(
			(entry) =>
				`<link rel="alternate" hreflang="${entry.lang}" href="${entry.href}">`,
		);
	}

	/**
	 * Generate structured URL patterns
	 */
	generateStructuredUrls(
		pages: Array<{ path: string; title: string }>,
	): Array<{ url: string; slug: string }> {
		return pages.map((page) => ({
			url: `${this.baseUrl}${page.path}`,
			slug: this.generateSlug(page.title),
		}));
	}

	/**
	 * Generate canonical URL for a given path
	 */
	generateCanonicalUrl(path: string): string {
		const cleanPath = path.startsWith("/") ? path : `/${path}`;
		return `${this.baseUrl}${cleanPath}`;
	}

	/**
	 * Generate security headers for SEO
	 */
	generateSecurityHeaders(): Record<string, string> {
		return {
			"X-Content-Type-Options": "nosniff",
			"X-Frame-Options": "DENY",
			"X-XSS-Protection": "1; mode=block",
			"Referrer-Policy": "strict-origin-when-cross-origin",
			"Content-Security-Policy": this.generateCSP(),
			"Strict-Transport-Security": "max-age=31536000; includeSubDomains",
		};
	}

	/**
	 * Generate Content Security Policy
	 */
	private generateCSP(): string {
		const directives = [
			"default-src 'self'",
			"script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
			"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
			"font-src 'self' https://fonts.gstatic.com",
			"img-src 'self' data: https:",
			"connect-src 'self' https://www.google-analytics.com",
			"frame-ancestors 'none'",
			"base-uri 'self'",
			"form-action 'self'",
		];

		return directives.join("; ");
	}

	/**
	 * Generate slug from title
	 */
	private generateSlug(title: string): string {
		return title
			.toLowerCase()
			.replace(/[^a-z0-9\s-]/g, "") // Remove special characters
			.replace(/\s+/g, "-") // Replace spaces with hyphens
			.replace(/-+/g, "-") // Replace multiple hyphens with single
			.replace(/^-|-$/g, ""); // Remove leading/trailing hyphens
	}

	/**
	 * Get default preload resources for the site
	 */
	getDefaultPreloadResources(): PreloadResource[] {
		return [
			{
				href: "/fonts/inter.woff2",
				as: "font",
				type: "font/woff2",
				crossorigin: "anonymous",
			},
			{
				href: "/profile.png",
				as: "image",
			},
			{
				href: "/styles/index.css",
				as: "style",
			},
		];
	}

	/**
	 * Generate Next.js configuration for technical SEO
	 */
	generateNextConfig(): object {
		return {
			async headers() {
				return [
					{
						source: "/(.*)",
						headers: Object.entries(this.generateSecurityHeaders()).map(
							([key, value]) => ({
								key,
								value,
							}),
						),
					},
				];
			},
			async redirects() {
				return [
					// Add any necessary redirects here
					{
						source: "/cv",
						destination: "/resume",
						permanent: true,
					},
				];
			},
			images: {
				domains: ["www.acevedomiguel.com"],
				formats: ["image/webp", "image/avif"],
			},
			compress: true,
			poweredByHeader: false,
			generateEtags: true,
		};
	}

	/**
	 * Validate URL structure
	 */
	validateUrlStructure(url: string): {
		isValid: boolean;
		issues: string[];
		recommendations: string[];
	} {
		const issues: string[] = [];
		const recommendations: string[] = [];

		try {
			const urlObj = new URL(url);

			// Check for HTTPS
			if (urlObj.protocol !== "https:") {
				issues.push("URL should use HTTPS protocol");
			}

			// Check for trailing slashes
			if (urlObj.pathname.endsWith("/") && urlObj.pathname !== "/") {
				recommendations.push(
					"Consider removing trailing slash for consistency",
				);
			}

			// Check for underscores (prefer hyphens)
			if (urlObj.pathname.includes("_")) {
				recommendations.push(
					"Consider using hyphens instead of underscores in URLs",
				);
			}

			// Check URL length
			if (url.length > 100) {
				recommendations.push(
					"URL is quite long, consider shortening for better usability",
				);
			}

			// Check for uppercase characters
			if (urlObj.pathname !== urlObj.pathname.toLowerCase()) {
				recommendations.push("Consider using lowercase URLs for consistency");
			}
		} catch (error) {
			issues.push("Invalid URL format");
		}

		return {
			isValid: issues.length === 0,
			issues,
			recommendations,
		};
	}
}
