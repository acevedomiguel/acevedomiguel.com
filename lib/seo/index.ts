// Main SEO exports

export { BreadcrumbNavigation } from "./BreadcrumbNavigation";
export { ContentOptimizer } from "./ContentOptimizer";
// Configuration
export { seoConfig } from "./config";
export { MetaTagGeneratorImpl as MetaTagGenerator } from "./MetaTagGenerator";
export { SchemaValidator } from "./SchemaValidator";
export { SEOManager } from "./SEOManager";
export { SemanticHTMLEnhancerImpl as SemanticHTMLEnhancer } from "./SemanticHTMLEnhancer";
export { SitemapGenerator } from "./SitemapGenerator";
export { StructuredDataGenerator } from "./StructuredDataGenerator";
export { TechnicalSEO } from "./TechnicalSEO";
export { TextTruncator } from "./TextTruncator";

// Types
export type {
	BasicMetaConfig,
	BreadcrumbItem,
	ContactPointSchemaData,
	MetaTag,
	OpenGraphConfig,
	OrganizationSchemaData,
	PageSEOConfig,
	PersonSchemaData,
	SEOConfig,
	SEOManagerProps,
	SemanticElement,
	StructuredDataConfig,
	TwitterCardConfig,
	ValidationResult,
	WorkExperienceSchemaData,
} from "./types";
