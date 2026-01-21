import { StructuredDataGenerator } from "./StructuredDataGenerator";
import type { BreadcrumbItem } from "./types";

export interface BreadcrumbConfig {
	homeLabel?: string;
	separator?: string;
	showHome?: boolean;
	maxItems?: number;
}

export interface BreadcrumbNavigationProps {
	currentPath: string;
	config?: BreadcrumbConfig;
	customLabels?: Record<string, string>;
}

export class BreadcrumbNavigation {
	private readonly baseUrl: string;
	private readonly structuredDataGenerator: StructuredDataGenerator;

	constructor(baseUrl: string = "https://acevedomiguel.com") {
		this.baseUrl = baseUrl.replace(/\/$/, "");
		this.structuredDataGenerator = new StructuredDataGenerator();
	}

	/**
	 * Generate breadcrumb items from current path
	 */
	generateBreadcrumbs(props: BreadcrumbNavigationProps): BreadcrumbItem[] {
		const { currentPath, config = {}, customLabels = {} } = props;
		const { homeLabel = "Home", showHome = true, maxItems = 5 } = config;

		const breadcrumbs: BreadcrumbItem[] = [];

		// Always include home if enabled
		if (showHome) {
			breadcrumbs.push({
				name: homeLabel,
				url: "/", // Use relative URL
				position: 1,
			});
		}

		// Parse path segments
		const pathSegments = this.parsePathSegments(currentPath);

		if (pathSegments.length === 0) {
			return breadcrumbs; // Home page only
		}

		// Build breadcrumb chain
		let currentUrl = "";
		pathSegments.forEach((segment, index) => {
			currentUrl += `/${segment}`;

			const position = breadcrumbs.length + 1;
			const label = customLabels[segment] || this.formatSegmentLabel(segment);

			breadcrumbs.push({
				name: label,
				url: currentUrl, // Use relative URL
				position,
			});
		});

		// Limit breadcrumbs if needed
		if (breadcrumbs.length > maxItems) {
			const start = breadcrumbs.slice(0, 1); // Keep home
			const end = breadcrumbs.slice(-(maxItems - 1)); // Keep last items
			return [...start, ...end].map((item, index) => ({
				...item,
				position: index + 1,
			}));
		}

		return breadcrumbs;
	}

	/**
	 * Generate structured data for breadcrumbs
	 */
	generateBreadcrumbStructuredData(breadcrumbs: BreadcrumbItem[]): string {
		// Convert relative URLs to absolute URLs for structured data
		const absoluteBreadcrumbs = breadcrumbs.map((breadcrumb) => ({
			...breadcrumb,
			url: breadcrumb.url.startsWith("/")
				? `${this.baseUrl}${breadcrumb.url}`
				: breadcrumb.url,
		}));

		const schema =
			this.structuredDataGenerator.generateBreadcrumbSchema(
				absoluteBreadcrumbs,
			);
		return JSON.stringify(schema);
	}

	/**
	 * Generate breadcrumb navigation HTML
	 */
	generateBreadcrumbHTML(
		breadcrumbs: BreadcrumbItem[],
		separator: string = ">",
	): string {
		if (breadcrumbs.length <= 1) {
			return ""; // Don't show breadcrumbs for home page only
		}

		const breadcrumbItems = breadcrumbs.map((item, index) => {
			const isLast = index === breadcrumbs.length - 1;

			if (isLast) {
				return `<span class="breadcrumb-current" aria-current="page">${item.name}</span>`;
			}

			return `<a href="${item.url}" class="breadcrumb-link">${item.name}</a>`;
		});

		return `
      <nav aria-label="Breadcrumb" class="breadcrumb-navigation">
        <ol class="breadcrumb-list" role="list">
          ${breadcrumbItems
						.map(
							(item, index) => `
            <li class="breadcrumb-item" role="listitem">
              ${item}
              ${index < breadcrumbItems.length - 1 ? `<span class="breadcrumb-separator" aria-hidden="true">${separator}</span>` : ""}
            </li>
          `,
						)
						.join("")}
        </ol>
      </nav>
    `;
	}

	/**
	 * Parse URL path into segments
	 */
	private parsePathSegments(path: string): string[] {
		// Remove leading/trailing slashes and split
		const cleanPath = path.replace(/^\/+|\/+$/g, "");

		if (!cleanPath) {
			return [];
		}

		return cleanPath.split("/").filter((segment) => segment.length > 0);
	}

	/**
	 * Format path segment into readable label
	 */
	private formatSegmentLabel(segment: string): string {
		// Handle common URL patterns
		const labelMappings: Record<string, string> = {
			resume: "Resume",
			contact: "Contact",
			about: "About",
			projects: "Projects",
			blog: "Blog",
			portfolio: "Portfolio",
		};

		if (labelMappings[segment]) {
			return labelMappings[segment];
		}

		// Convert kebab-case or snake_case to title case
		return segment
			.replace(/[-_]/g, " ")
			.replace(/\b\w/g, (l) => l.toUpperCase());
	}

	/**
	 * Get breadcrumb configuration for specific page types
	 */
	getPageBreadcrumbConfig(pageType: string): BreadcrumbConfig {
		const configs: Record<string, BreadcrumbConfig> = {
			home: {
				showHome: false, // Don't show breadcrumbs on home page
				maxItems: 1,
			},
			resume: {
				homeLabel: "Home",
				showHome: true,
				maxItems: 3,
			},
			contact: {
				homeLabel: "Home",
				showHome: true,
				maxItems: 3,
			},
			generic: {
				homeLabel: "Home",
				showHome: true,
				maxItems: 5,
			},
		};

		return configs[pageType] || configs.generic;
	}

	/**
	 * Generate React component props for breadcrumbs
	 */
	generateReactBreadcrumbProps(
		currentPath: string,
		pageType: string = "generic",
	) {
		const config = this.getPageBreadcrumbConfig(pageType);
		const customLabels = this.getCustomLabels();

		const breadcrumbs = this.generateBreadcrumbs({
			currentPath,
			config,
			customLabels,
		});

		const structuredData = this.generateBreadcrumbStructuredData(breadcrumbs);

		return {
			breadcrumbs,
			structuredData,
			showBreadcrumbs: breadcrumbs.length > 1,
			config,
		};
	}

	/**
	 * Get custom labels for common paths
	 */
	private getCustomLabels(): Record<string, string> {
		return {
			resume: "Resume",
			contact: "Contact Me",
			about: "About",
			projects: "Projects",
			blog: "Blog",
			portfolio: "Portfolio",
		};
	}
}
