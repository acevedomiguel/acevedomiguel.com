// SEO Configuration Types and Interfaces

export interface MetaTag {
	name?: string;
	property?: string;
	content: string;
	key?: string;
}

export interface SEOManagerProps {
	pageType: "home" | "resume" | "contact" | "generic" | "blog";
	title?: string;
	description?: string;
	canonicalUrl?: string;
	structuredData?: StructuredDataConfig;
	openGraph?: OpenGraphConfig;
	additionalMeta?: MetaTag[];
}

export interface StructuredDataConfig {
	person?: PersonSchemaData;
	workExperience?: WorkExperienceSchemaData[];
	organization?: OrganizationSchemaData[];
	contactPoint?: ContactPointSchemaData;
	breadcrumbs?: BreadcrumbItem[];
}

export interface OpenGraphConfig {
	title: string;
	description: string;
	image?: string;
	url: string;
	type?: "website" | "profile" | "article";
	siteName?: string;
}

export interface TwitterCardConfig {
	card: "summary" | "summary_large_image";
	title: string;
	description: string;
	image?: string;
	creator?: string;
}

export interface BasicMetaConfig {
	title: string;
	description: string;
	keywords?: string[];
	author?: string;
	viewport?: string;
	language?: string;
	locale?: string;
}

// Schema.org Data Types
export interface PersonSchemaData {
	"@type": "Person";
	name: string;
	jobTitle: string;
	description: string;
	url: string;
	image: string;
	email: string;
	telephone?: string;
	address: {
		"@type": "PostalAddress";
		addressLocality: string;
		addressCountry: string;
		addressRegion?: string;
	};
	sameAs: string[];
	knowsAbout: string[];
}

export interface WorkExperienceSchemaData {
	"@type": "WorkExperience";
	name: string;
	description: string;
	startDate: string;
	endDate?: string;
	employer: {
		"@type": "Organization";
		name: string;
		url?: string;
	};
	jobLocation: {
		"@type": "Place";
		address: {
			"@type": "PostalAddress";
			addressLocality: string;
			addressCountry: string;
		};
	};
	skills: string[];
}

export interface OrganizationSchemaData {
	"@type": "Organization";
	name: string;
	url?: string;
	description?: string;
	address?: {
		"@type": "PostalAddress";
		addressLocality: string;
		addressCountry: string;
	};
}

export interface ContactPointSchemaData {
	"@type": "ContactPoint";
	telephone?: string;
	email?: string;
	contactType: string;
	availableLanguage?: string[];
}

export interface BreadcrumbItem {
	name: string;
	url: string;
	position: number;
}

// SEO Configuration Model
export interface SEOConfig {
	site: {
		name: string;
		url: string;
		description: string;
		author: PersonSchemaData;
		social: {
			twitter: string;
			linkedin?: string;
			github?: string;
		};
	};
	pages: {
		[key: string]: PageSEOConfig;
	};
	defaults: {
		titleTemplate: string;
		description: string;
		openGraph: OpenGraphDefaults;
		twitter: TwitterCardDefaults;
	};
}

export interface PageSEOConfig {
	title: string;
	description: string;
	keywords: string[];
	structuredDataTypes: string[];
	canonicalUrl?: string;
	noindex?: boolean;
}

export interface OpenGraphDefaults {
	type: "website" | "profile";
	siteName: string;
	image: string;
}

export interface TwitterCardDefaults {
	card: "summary" | "summary_large_image";
	creator: string;
}

// Validation and Error Types
export interface ValidationResult {
	isValid: boolean;
	errors: string[];
	warnings: string[];
}

export type SemanticElement =
	| "article"
	| "section"
	| "aside"
	| "nav"
	| "main"
	| "header"
	| "footer";

// Resume Data Enhancement
export interface EnhancedResumeData {
	seo: {
		metaDescription: string;
		keywords: string[];
		structuredData: {
			person: PersonSchemaData;
			workExperience: WorkExperienceSchemaData[];
			skills: SkillSchemaData[];
		};
	};
}

export interface SkillSchemaData {
	"@type": "DefinedTerm";
	name: string;
	description?: string;
	inDefinedTermSet?: {
		"@type": "DefinedTermSet";
		name: string;
	};
}
