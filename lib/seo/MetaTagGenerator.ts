import type {
	BasicMetaConfig,
	MetaTag,
	OpenGraphConfig,
	TwitterCardConfig,
} from "./types";

export interface MetaTagGenerator {
	generateBasicMeta(config: BasicMetaConfig): MetaTag[];
	generateOpenGraphMeta(config: OpenGraphConfig): MetaTag[];
	generateTwitterCardMeta(config: TwitterCardConfig): MetaTag[];
	generateCanonicalUrl(path: string): string;
}

export class MetaTagGeneratorImpl implements MetaTagGenerator {
	private readonly baseUrl: string;

	constructor(baseUrl: string = "https://acevedomiguel.com") {
		this.baseUrl = baseUrl.replace(/\/$/, ""); // Remove trailing slash
	}

	/**
	 * Generate basic meta tags (title, description, keywords, etc.)
	 */
	generateBasicMeta(config: BasicMetaConfig): MetaTag[] {
		const tags: MetaTag[] = [];

		// Title is handled by Next.js Head component separately

		// Description
		if (config.description) {
			tags.push({
				name: "description",
				content: this.truncateDescription(config.description),
				key: "description",
			});
		}

		// Keywords
		if (config.keywords && config.keywords.length > 0) {
			tags.push({
				name: "keywords",
				content: config.keywords.join(", "),
				key: "keywords",
			});
		}

		// Author
		if (config.author) {
			tags.push({
				name: "author",
				content: config.author,
				key: "author",
			});
		}

		// Viewport (mobile optimization)
		tags.push({
			name: "viewport",
			content: config.viewport || "width=device-width, initial-scale=1",
			key: "viewport",
		});

		// Language and locale
		if (config.language) {
			tags.push({
				name: "language",
				content: config.language,
				key: "language",
			});
		}

		if (config.locale) {
			tags.push({
				name: "locale",
				content: config.locale,
				key: "locale",
			});
		}

		// Additional SEO meta tags
		tags.push(
			{
				name: "robots",
				content: "index, follow",
				key: "robots",
			},
			{
				name: "googlebot",
				content: "index, follow",
				key: "googlebot",
			},
		);

		return tags;
	}
	/**
	 * Generate Open Graph meta tags for social media sharing
	 */
	generateOpenGraphMeta(config: OpenGraphConfig): MetaTag[] {
		const tags: MetaTag[] = [];

		// Required Open Graph tags
		tags.push(
			{
				property: "og:title",
				content: this.truncateTitle(config.title),
				key: "og:title",
			},
			{
				property: "og:description",
				content: this.truncateDescription(config.description),
				key: "og:description",
			},
			{
				property: "og:url",
				content: config.url,
				key: "og:url",
			},
			{
				property: "og:type",
				content: config.type || "website",
				key: "og:type",
			},
		);

		// Optional Open Graph tags
		if (config.image) {
			tags.push(
				{
					property: "og:image",
					content: config.image,
					key: "og:image",
				},
				{
					property: "og:image:width",
					content: "192",
					key: "og:image:width",
				},
				{
					property: "og:image:height",
					content: "192",
					key: "og:image:height",
				},
				{
					property: "og:image:type",
					content: "image/png",
					key: "og:image:type",
				},
			);
		}

		if (config.siteName) {
			tags.push({
				property: "og:site_name",
				content: config.siteName,
				key: "og:site_name",
			});
		}

		// Additional Open Graph tags for better social sharing
		tags.push(
			{
				property: "og:locale",
				content: "en_US",
				key: "og:locale",
			},
			{
				property: "fb:app_id",
				content: "966242223397117", // Default Facebook app ID for better attribution
				key: "fb:app_id",
			},
		);

		return tags;
	}

	/**
	 * Generate Twitter Card meta tags
	 */
	generateTwitterCardMeta(config: TwitterCardConfig): MetaTag[] {
		const tags: MetaTag[] = [];

		// Required Twitter Card tags
		tags.push(
			{
				name: "twitter:card",
				content: config.card,
				key: "twitter:card",
			},
			{
				name: "twitter:title",
				content: this.truncateTitle(config.title),
				key: "twitter:title",
			},
			{
				name: "twitter:description",
				content: this.truncateDescription(config.description),
				key: "twitter:description",
			},
		);

		// Optional Twitter Card tags
		if (config.image) {
			tags.push({
				name: "twitter:image",
				content: config.image,
				key: "twitter:image",
			});
		}

		if (config.creator) {
			tags.push({
				name: "twitter:creator",
				content: config.creator,
				key: "twitter:creator",
			});
		}

		return tags;
	}
	/**
	 * Generate canonical URL for the given path
	 */
	generateCanonicalUrl(path: string): string {
		// Remove leading slash if present
		const cleanPath = path.startsWith("/") ? path.slice(1) : path;

		// Handle home page
		if (!cleanPath || cleanPath === "index") {
			return this.baseUrl;
		}

		return `${this.baseUrl}/${cleanPath}`;
	}

	/**
	 * Generate all meta tags for a page
	 */
	generateAllMetaTags(config: {
		basic: BasicMetaConfig;
		openGraph: OpenGraphConfig;
		twitter: TwitterCardConfig;
		canonicalPath: string;
	}): MetaTag[] {
		const allTags: MetaTag[] = [];

		// Add basic meta tags
		allTags.push(...this.generateBasicMeta(config.basic));

		// Add Open Graph tags
		allTags.push(...this.generateOpenGraphMeta(config.openGraph));

		// Add Twitter Card tags
		allTags.push(...this.generateTwitterCardMeta(config.twitter));

		// Add canonical URL
		allTags.push({
			name: "canonical",
			content: this.generateCanonicalUrl(config.canonicalPath),
			key: "canonical",
		});

		return allTags;
	}

	/**
	 * Truncate title to SEO best practices (60 characters max)
	 */
	private truncateTitle(title: string): string {
		if (title.length <= 60) {
			return title;
		}

		// Find the last space before the 57th character to avoid cutting words
		const truncated = title.substring(0, 57);
		const lastSpace = truncated.lastIndexOf(" ");

		if (lastSpace > 40) {
			// Only truncate at word boundary if it's not too short
			return truncated.substring(0, lastSpace) + "...";
		}

		return truncated + "...";
	}

	/**
	 * Truncate description to SEO best practices (150-160 characters)
	 */
	private truncateDescription(description: string): string {
		if (description.length <= 160) {
			return description;
		}

		// Find the last space before the 157th character to avoid cutting words
		const truncated = description.substring(0, 157);
		const lastSpace = truncated.lastIndexOf(" ");

		if (lastSpace > 120) {
			// Only truncate at word boundary if it's not too short
			return truncated.substring(0, lastSpace) + "...";
		}

		return truncated + "...";
	}
}
