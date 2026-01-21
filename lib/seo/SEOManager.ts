import { BreadcrumbNavigation } from "./BreadcrumbNavigation";
import { ContentOptimizer } from "./ContentOptimizer";
import { seoConfig } from "./config";
import { MetaTagGeneratorImpl } from "./MetaTagGenerator";
import { SchemaValidator } from "./SchemaValidator";
import { StructuredDataGenerator } from "./StructuredDataGenerator";
import { TechnicalSEO } from "./TechnicalSEO";
import type {
	BreadcrumbItem,
	MetaTag,
	SEOManagerProps,
	ValidationResult,
} from "./types";

export interface SEOResult {
	metaTags: MetaTag[];
	structuredData: string;
	breadcrumbs?: BreadcrumbItem[];
	canonicalUrl: string;
	validation: ValidationResult;
}

export interface PageSEOData {
	title: string;
	description: string;
	keywords: string[];
	path: string;
	lastModified?: Date;
	content?: any;
}

export class SEOManager {
	private readonly structuredDataGenerator: StructuredDataGenerator;
	private readonly metaTagGenerator: MetaTagGeneratorImpl;
	private readonly schemaValidator: SchemaValidator;
	private readonly breadcrumbNavigation: BreadcrumbNavigation;
	private readonly contentOptimizer: ContentOptimizer;
	private readonly technicalSEO: TechnicalSEO;
	private readonly baseUrl: string;

	constructor(baseUrl?: string) {
		this.baseUrl = baseUrl || seoConfig.site.url;
		this.structuredDataGenerator = new StructuredDataGenerator();
		this.metaTagGenerator = new MetaTagGeneratorImpl(this.baseUrl);
		this.schemaValidator = new SchemaValidator();
		this.breadcrumbNavigation = new BreadcrumbNavigation(this.baseUrl);
		this.contentOptimizer = new ContentOptimizer();
		this.technicalSEO = new TechnicalSEO(this.baseUrl);
	}

	/**
	 * Generate complete SEO data for a page
	 */
	generatePageSEO(props: SEOManagerProps): SEOResult {
		const pageConfig = seoConfig.pages[props.pageType] || seoConfig.pages.home;

		// Generate meta tags
		const metaTags = this.generateMetaTags(props, pageConfig);

		// Generate structured data
		const structuredData = this.generateStructuredData(props);

		// Generate breadcrumbs (if not home page)
		const breadcrumbs =
			props.pageType !== "home"
				? this.generateBreadcrumbs(props.canonicalUrl || "")
				: undefined;

		// Generate canonical URL
		const canonicalUrl =
			props.canonicalUrl ||
			this.metaTagGenerator.generateCanonicalUrl(props.pageType);

		// Validate generated data
		const validation = this.validateSEOData(structuredData, metaTags);

		return {
			metaTags,
			structuredData,
			breadcrumbs,
			canonicalUrl,
			validation,
		};
	}

	/**
	 * Generate meta tags for a page
	 */
	generateMetaTags(props: SEOManagerProps, pageConfig?: any): MetaTag[] {
		const config = pageConfig || seoConfig.pages[props.pageType];

		const basicMeta = this.metaTagGenerator.generateBasicMeta({
			title: props.title || config.title,
			description: props.description || config.description,
			keywords: config.keywords,
			author: seoConfig.site.author.name,
			language: "en",
			locale: "en_US",
		});

		const openGraphMeta = this.metaTagGenerator.generateOpenGraphMeta({
			title: props.title || config.title,
			description: props.description || config.description,
			url: props.canonicalUrl || `${this.baseUrl}/${props.pageType}`,
			type: props.pageType === "home" ? "website" : "profile",
			siteName: seoConfig.site.name,
			image: seoConfig.defaults.openGraph.image,
		});

		const twitterMeta = this.metaTagGenerator.generateTwitterCardMeta({
			card: seoConfig.defaults.twitter.card,
			title: props.title || config.title,
			description: props.description || config.description,
			image: seoConfig.defaults.openGraph.image,
			creator: seoConfig.defaults.twitter.creator,
		});

		return [
			...basicMeta,
			...openGraphMeta,
			...twitterMeta,
			...(props.additionalMeta || []),
		];
	}

	/**
	 * Generate structured data for a page
	 */
	generateStructuredData(props: SEOManagerProps): string {
		const schemas: any[] = [];

		// Always include Person schema
		const personSchema = this.structuredDataGenerator.generatePersonSchema(
			seoConfig.site.author,
		);
		schemas.push(personSchema);

		// Add page-specific schemas
		if (props.structuredData) {
			if (props.structuredData.workExperience) {
				const workSchemas =
					this.structuredDataGenerator.generateWorkExperienceSchema(
						props.structuredData.workExperience,
					);
				schemas.push(...workSchemas);
			}

			if (props.structuredData.organization) {
				props.structuredData.organization.forEach((org) => {
					const orgSchema =
						this.structuredDataGenerator.generateOrganizationSchema(org);
					schemas.push(orgSchema);
				});
			}

			if (props.structuredData.contactPoint) {
				const contactSchema =
					this.structuredDataGenerator.generateContactPointSchema(
						props.structuredData.contactPoint,
					);
				schemas.push(contactSchema);
			}

			if (props.structuredData.breadcrumbs) {
				const breadcrumbSchema =
					this.structuredDataGenerator.generateBreadcrumbSchema(
						props.structuredData.breadcrumbs,
					);
				schemas.push(breadcrumbSchema);
			}
		}

		// Add Website schema for home page
		if (props.pageType === "home") {
			const websiteSchema = this.structuredDataGenerator.generateWebsiteSchema({
				name: seoConfig.site.name,
				url: seoConfig.site.url,
				description: seoConfig.site.description,
				author: seoConfig.site.author,
			});
			schemas.push(websiteSchema);
		}

		return JSON.stringify(schemas.length === 1 ? schemas[0] : schemas, null, 2);
	}
	/**
	 * Generate breadcrumbs for a page
	 */
	generateBreadcrumbs(path: string): BreadcrumbItem[] {
		const breadcrumbProps =
			this.breadcrumbNavigation.generateReactBreadcrumbProps(path);
		return breadcrumbProps.breadcrumbs;
	}

	/**
	 * Validate SEO configuration
	 */
	validateSEOConfig(props: SEOManagerProps): ValidationResult {
		const errors: string[] = [];
		const warnings: string[] = [];

		// Validate required fields
		if (!props.pageType) {
			errors.push("Page type is required");
		}

		// Validate title length
		if (props.title && props.title.length > 60) {
			warnings.push("Title exceeds recommended 60 character limit");
		}

		// Validate description length
		if (props.description && props.description.length > 160) {
			warnings.push("Description exceeds recommended 160 character limit");
		}

		return {
			isValid: errors.length === 0,
			errors,
			warnings,
		};
	}

	/**
	 * Validate generated SEO data
	 */
	private validateSEOData(
		structuredData: string,
		metaTags: MetaTag[],
	): ValidationResult {
		const errors: string[] = [];
		const warnings: string[] = [];

		try {
			// Validate structured data
			const schemas = JSON.parse(structuredData);
			const schemasArray = Array.isArray(schemas) ? schemas : [schemas];

			const schemaValidation =
				this.schemaValidator.validateMultipleSchemas(schemasArray);
			errors.push(...schemaValidation.errors);
			warnings.push(...schemaValidation.warnings);

			// Validate meta tags
			const requiredMetaTags = [
				"description",
				"og:title",
				"og:description",
				"twitter:card",
			];
			requiredMetaTags.forEach((required) => {
				const hasTag = metaTags.some(
					(tag) => tag.name === required || tag.property === required,
				);
				if (!hasTag) {
					warnings.push(`Missing recommended meta tag: ${required}`);
				}
			});
		} catch (error) {
			errors.push("Invalid structured data JSON");
		}

		return {
			isValid: errors.length === 0,
			errors,
			warnings,
		};
	}

	/**
	 * Generate SEO data for resume page with work experience
	 */
	generateResumeSEO(resumeData: any, path: string = "/resume"): SEOResult {
		// Optimize resume content
		const optimizedContent =
			this.contentOptimizer.organizeResumeContent(resumeData);

		// Convert resume data to structured data
		const workExperience =
			this.structuredDataGenerator.convertResumeToWorkExperience(resumeData);
		const personData =
			this.structuredDataGenerator.convertResumeToPersonSchema(resumeData);

		const props: SEOManagerProps = {
			pageType: "resume",
			title: seoConfig.pages.resume.title,
			description: seoConfig.pages.resume.description,
			canonicalUrl: `${this.baseUrl}${path}`,
			structuredData: {
				person: personData,
				workExperience: workExperience,
			},
		};

		return this.generatePageSEO(props);
	}

	/**
	 * Generate SEO data for contact page
	 */
	generateContactSEO(path: string = "/contact"): SEOResult {
		const props: SEOManagerProps = {
			pageType: "contact",
			title: seoConfig.pages.contact.title,
			description: seoConfig.pages.contact.description,
			canonicalUrl: `${this.baseUrl}${path}`,
			structuredData: {
				person: seoConfig.site.author,
				contactPoint: {
					"@type": "ContactPoint",
					telephone: seoConfig.site.author.telephone,
					email: seoConfig.site.author.email,
					contactType: "Professional",
					availableLanguage: ["en", "es"],
				},
			},
		};

		return this.generatePageSEO(props);
	}

	/**
	 * Generate SEO data for home page
	 */
	generateHomeSEO(path: string = "/"): SEOResult {
		const props: SEOManagerProps = {
			pageType: "home",
			title: seoConfig.pages.home.title,
			description: seoConfig.pages.home.description,
			canonicalUrl: this.baseUrl,
			structuredData: {
				person: seoConfig.site.author,
			},
		};

		return this.generatePageSEO(props);
	}

	/**
	 * Maintain data consistency across updates
	 */
	maintainDataConsistency(
		oldData: any,
		newData: any,
	): {
		isConsistent: boolean;
		inconsistencies: string[];
		recommendations: string[];
	} {
		const inconsistencies: string[] = [];
		const recommendations: string[] = [];

		// Check for changes in critical data
		if (oldData.name !== newData.name) {
			inconsistencies.push("Name has changed - update all references");
		}

		if (oldData.email !== newData.email) {
			inconsistencies.push("Email has changed - update contact information");
		}

		if (oldData.jobTitle !== newData.jobTitle) {
			recommendations.push(
				"Job title changed - consider updating meta descriptions",
			);
		}

		// Check for new work experience
		if (newData.work && oldData.work) {
			if (newData.work.length > oldData.work.length) {
				recommendations.push(
					"New work experience added - update structured data",
				);
			}
		}

		return {
			isConsistent: inconsistencies.length === 0,
			inconsistencies,
			recommendations,
		};
	}

	/**
	 * Generate content freshness indicators
	 */
	generateContentFreshness(lastModified: Date): {
		indicator: string;
		isRecent: boolean;
		shouldUpdate: boolean;
	} {
		const freshness =
			this.contentOptimizer.generateFreshnessIndicators(lastModified);

		return {
			indicator: freshness.indicator,
			isRecent: freshness.isRecent,
			shouldUpdate: freshness.daysSinceUpdate > 90, // Recommend update after 3 months
		};
	}

	/**
	 * Add appropriate rel attributes to external links
	 */
	processExternalLinks(content: string): string {
		// Add rel="noopener noreferrer" to external links
		const externalLinkRegex =
			/<a\s+href="https?:\/\/(?!www\.acevedomiguel\.com)[^"]*"[^>]*>/gi;

		return content.replace(externalLinkRegex, (match) => {
			if (!match.includes("rel=")) {
				const lastGtIndex = match.lastIndexOf(">");
				if (lastGtIndex === -1) {
					return match;
				}
				return (
					match.slice(0, lastGtIndex) +
					' rel="noopener noreferrer"' +
					match.slice(lastGtIndex)
				);
			}
			return match;
		});
	}

	/**
	 * Generate robots.txt content
	 */
	generateRobotsTxt(): string {
		return this.technicalSEO.generateRobotsTxt();
	}

	/**
	 * Generate sitemap configuration for next-sitemap
	 */
	generateSitemapConfig(): object {
		return {
			siteUrl: this.baseUrl,
			generateRobotsTxt: true,
			sitemapSize: 7000,
			changefreq: "monthly",
			priority: 0.7,
			exclude: ["/api/*", "/admin/*"],
			additionalPaths: async () => [
				{
					loc: "/",
					changefreq: "monthly",
					priority: 1.0,
					lastmod: new Date().toISOString(),
				},
				{
					loc: "/resume",
					changefreq: "monthly",
					priority: 0.9,
					lastmod: new Date().toISOString(),
				},
				{
					loc: "/contact",
					changefreq: "yearly",
					priority: 0.7,
					lastmod: new Date().toISOString(),
				},
			],
			robotsTxtOptions: {
				policies: [
					{
						userAgent: "*",
						allow: "/",
						disallow: ["/api/", "/admin/"],
					},
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
				],
				additionalSitemaps: [`${this.baseUrl}/sitemap.xml`],
			},
		};
	}

	/**
	 * Get SEO recommendations for a page
	 */
	getSEORecommendations(pageData: PageSEOData): string[] {
		const recommendations: string[] = [];

		// Title recommendations
		if (!pageData.title) {
			recommendations.push("Add a page title");
		} else if (pageData.title.length < 30) {
			recommendations.push(
				"Consider making the title longer (30-60 characters)",
			);
		} else if (pageData.title.length > 60) {
			recommendations.push(
				"Consider shortening the title (under 60 characters)",
			);
		}

		// Description recommendations
		if (!pageData.description) {
			recommendations.push("Add a meta description");
		} else if (pageData.description.length < 120) {
			recommendations.push(
				"Consider making the description longer (120-160 characters)",
			);
		} else if (pageData.description.length > 160) {
			recommendations.push(
				"Consider shortening the description (under 160 characters)",
			);
		}

		// Keywords recommendations
		if (!pageData.keywords || pageData.keywords.length === 0) {
			recommendations.push("Add relevant keywords");
		} else if (pageData.keywords.length > 10) {
			recommendations.push(
				"Consider reducing the number of keywords (focus on 5-10 most relevant)",
			);
		}

		// Content freshness
		if (pageData.lastModified) {
			const freshness = this.generateContentFreshness(pageData.lastModified);
			if (freshness.shouldUpdate) {
				recommendations.push(
					"Consider updating content - it has been more than 3 months since last update",
				);
			}
		}

		return recommendations;
	}
}
