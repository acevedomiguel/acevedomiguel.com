import {
	cloneElement,
	isValidElement,
	ReactElement,
	type ReactNode,
} from "react";
import type { SemanticElement } from "./types";

export interface ContentSection {
	id: string;
	title: string;
	level: 1 | 2 | 3 | 4 | 5 | 6;
	content: ReactNode;
	children?: ContentSection[];
}

export interface AccessibilityOptions {
	includeSkipLinks?: boolean;
	addLandmarkRoles?: boolean;
	enhanceHeadings?: boolean;
	addAltText?: boolean;
}

export interface SemanticHTMLEnhancer {
	wrapWithSemanticElements(
		content: ReactNode,
		elementType: SemanticElement,
	): ReactNode;
	generateHeadingHierarchy(content: ContentSection[]): ReactNode;
	addLandmarkRoles(component: ReactNode): ReactNode;
	enhanceAccessibility(component: ReactNode): ReactNode;
}

export class SemanticHTMLEnhancerImpl implements SemanticHTMLEnhancer {
	/**
	 * Wrap content with appropriate semantic HTML5 elements
	 */
	wrapWithSemanticElements(
		content: ReactNode,
		elementType: SemanticElement,
	): ReactNode {
		const semanticProps = this.getSemanticElementProps(elementType);

		// Return configuration object instead of JSX for server-side usage
		return {
			type: elementType,
			props: semanticProps,
			children: content,
		} as any;
	}

	/**
	 * Generate proper heading hierarchy from content sections
	 */
	generateHeadingHierarchy(content: ContentSection[]): ReactNode {
		// Return configuration object for server-side usage
		return {
			type: "div",
			props: { className: "heading-hierarchy" },
			children: content.map((section) => this.renderContentSection(section)),
		} as any;
	}

	/**
	 * Add landmark roles for better accessibility and SEO
	 */
	addLandmarkRoles(component: ReactNode): ReactNode {
		if (!isValidElement(component)) {
			return component;
		}

		const elementType = component.type as string;
		const landmarkRole = this.getLandmarkRole(elementType);

		if (landmarkRole) {
			const existingProps = (component.props as Record<string, any>) || {};
			const newProps = Object.assign({}, existingProps, {
				role: landmarkRole,
				"aria-label": this.getAriaLabel(elementType),
			});

			return cloneElement(component, newProps);
		}

		return component;
	}

	/**
	 * Enhance component with comprehensive accessibility features
	 */
	enhanceAccessibility(
		component: ReactNode,
		options: AccessibilityOptions = {},
	): ReactNode {
		const {
			includeSkipLinks = true,
			addLandmarkRoles = true,
			enhanceHeadings = true,
			addAltText = true,
		} = options;

		let enhancedComponent = component;

		// Add skip navigation links
		if (includeSkipLinks) {
			enhancedComponent = this.addSkipNavigationLinks(enhancedComponent);
		}

		// Add landmark roles
		if (addLandmarkRoles) {
			enhancedComponent = this.addLandmarkRoles(enhancedComponent);
		}

		// Enhance headings with proper structure
		if (enhanceHeadings) {
			enhancedComponent = this.enhanceHeadingStructure(enhancedComponent);
		}

		// Add alt text to images
		if (addAltText) {
			enhancedComponent = this.enhanceImageAltText(enhancedComponent);
		}

		return enhancedComponent;
	}
	/**
	 * Generate appropriate list markup (ul, ol, dl)
	 */
	generateListMarkup(items: any[], listType: "ul" | "ol" | "dl" = "ul"): any {
		if (listType === "dl") {
			return this.generateDescriptionList(items);
		}

		return {
			type: listType,
			props: { role: "list" },
			children: items.map((item, index) => ({
				type: "li",
				props: { key: index, role: "listitem" },
				children: typeof item === "string" ? item : item.content || item,
			})),
		};
	}

	/**
	 * Add skip navigation links for accessibility
	 */
	private addSkipNavigationLinks(content: ReactNode): ReactNode {
		// Return configuration object for server-side usage
		return {
			type: "div",
			props: {},
			children: [
				{
					type: "nav",
					props: { className: "skip-links", "aria-label": "Skip navigation" },
					children: [
						{
							type: "a",
							props: { href: "#main-content", className: "skip-link" },
							children: "Skip to main content",
						},
						{
							type: "a",
							props: { href: "#navigation", className: "skip-link" },
							children: "Skip to navigation",
						},
					],
				},
				content,
			],
		} as any;
	}

	/**
	 * Render individual content section with proper heading hierarchy
	 */
	private renderContentSection(section: ContentSection): any {
		// Return configuration object for server-side usage
		return {
			type: "section",
			props: {
				id: section.id,
				"aria-labelledby": `${section.id}-heading`,
			},
			children: [
				{
					type: `h${section.level}`,
					props: { id: `${section.id}-heading` },
					children: section.title,
				},
				section.content,
				...(section.children
					? section.children.map((child) => this.renderContentSection(child))
					: []),
			],
		};
	}

	/**
	 * Get semantic element properties
	 */
	private getSemanticElementProps(
		elementType: SemanticElement,
	): Record<string, any> {
		const propsMap: Record<SemanticElement, Record<string, any>> = {
			article: { role: "article" },
			section: { role: "region" },
			aside: { role: "complementary" },
			nav: { role: "navigation" },
			main: { role: "main", id: "main-content" },
			header: { role: "banner" },
			footer: { role: "contentinfo" },
		};

		return propsMap[elementType] || {};
	}

	/**
	 * Get appropriate landmark role for element type
	 */
	private getLandmarkRole(elementType: string): string | undefined {
		const roleMap: Record<string, string> = {
			nav: "navigation",
			main: "main",
			header: "banner",
			footer: "contentinfo",
			aside: "complementary",
			section: "region",
			article: "article",
		};

		return roleMap[elementType];
	}

	/**
	 * Get appropriate aria-label for element type
	 */
	private getAriaLabel(elementType: string): string | undefined {
		const labelMap: Record<string, string> = {
			nav: "Main navigation",
			main: "Main content",
			header: "Site header",
			footer: "Site footer",
			aside: "Sidebar content",
			section: "Content section",
		};

		return labelMap[elementType];
	}
	/**
	 * Generate description list markup
	 */
	private generateDescriptionList(
		items: Array<{ term: string; description: string }>,
	): any {
		return {
			type: "dl",
			props: { role: "list" },
			children: items.map((item, index) => ({
				type: "div",
				props: { key: index },
				children: [
					{
						type: "dt",
						props: {},
						children: item.term,
					},
					{
						type: "dd",
						props: {},
						children: item.description,
					},
				],
			})),
		};
	}

	/**
	 * Enhance heading structure for better accessibility
	 */
	private enhanceHeadingStructure(component: ReactNode): ReactNode {
		// This would typically involve traversing the React tree and ensuring
		// proper heading hierarchy. For now, return as-is.
		return component;
	}

	/**
	 * Enhance images with descriptive alt text
	 */
	private enhanceImageAltText(component: ReactNode): ReactNode {
		if (!isValidElement(component)) {
			return component;
		}

		if (component.type === "img") {
			const existingProps = (component.props as Record<string, any>) || {};
			const { alt, src, ...otherProps } = existingProps;

			// Generate alt text if missing
			const enhancedAlt = alt || this.generateAltTextFromSrc(src);

			const newProps = Object.assign({}, otherProps, {
				alt: enhancedAlt,
				src,
			});

			return cloneElement(component, newProps);
		}

		return component;
	}

	/**
	 * Generate alt text from image source filename
	 */
	private generateAltTextFromSrc(src: string): string {
		if (!src) return "Image";

		// Extract filename without extension
		const filename = src.split("/").pop()?.split(".")[0] || "image";

		// Convert kebab-case or snake_case to readable text
		return filename
			.replace(/[-_]/g, " ")
			.replace(/\b\w/g, (l) => l.toUpperCase());
	}

	/**
	 * Create semantic wrapper for resume sections
	 */
	createResumeSection(
		title: string,
		content: ReactNode,
		level: 2 | 3 = 2,
	): any {
		const sectionId = title.toLowerCase().replace(/\s+/g, "-");

		return {
			type: "section",
			props: {
				id: sectionId,
				"aria-labelledby": `${sectionId}-heading`,
			},
			children: [
				{
					type: `h${level}`,
					props: { id: `${sectionId}-heading` },
					children: title,
				},
				content,
			],
		};
	}

	/**
	 * Create semantic wrapper for work experience
	 */
	createWorkExperienceItem(job: any): any {
		return {
			type: "article",
			props: {
				className: "work-experience-item",
				itemScope: true,
				itemType: "https://schema.org/WorkExperience",
			},
			children: [
				{
					type: "header",
					props: {},
					children: [
						{
							type: "h3",
							props: { itemProp: "name" },
							children: job.position,
						},
						{
							type: "div",
							props: { className: "company-info" },
							children: [
								{
									type: "span",
									props: {
										itemProp: "employer",
										itemScope: true,
										itemType: "https://schema.org/Organization",
									},
									children: {
										type: "span",
										props: { itemProp: "name" },
										children: job.name,
									},
								},
								job.location && {
									type: "span",
									props: {
										className: "location",
										itemProp: "jobLocation",
									},
									children: job.location,
								},
							].filter(Boolean),
						},
						{
							type: "time",
							props: { className: "duration" },
							children: [
								{
									type: "span",
									props: { itemProp: "startDate" },
									children: job.startDate,
								},
								job.endDate && " - ",
								job.endDate && {
									type: "span",
									props: { itemProp: "endDate" },
									children: job.endDate,
								},
							].filter(Boolean),
						},
					],
				},
				job.summary && {
					type: "p",
					props: {
						className: "summary",
						itemProp: "description",
					},
					children: job.summary,
				},
				job.highlights &&
					job.highlights.length > 0 && {
						type: "ul",
						props: {
							className: "highlights",
							role: "list",
						},
						children: job.highlights.map(
							(highlight: string, index: number) => ({
								type: "li",
								props: { key: index, role: "listitem" },
								children: highlight,
							}),
						),
					},
				job.stack &&
					job.stack.length > 0 && {
						type: "div",
						props: { className: "skills" },
						children: [
							{
								type: "h4",
								props: {},
								children: "Technologies Used:",
							},
							{
								type: "ul",
								props: {
									className: "skills-list",
									role: "list",
								},
								children: job.stack.map((skill: string, index: number) => ({
									type: "li",
									props: {
										key: index,
										role: "listitem",
										itemProp: "skills",
									},
									children: skill,
								})),
							},
						],
					},
			].filter(Boolean),
		};
	}
}
