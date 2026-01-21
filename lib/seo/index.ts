// Main SEO exports
export { SEOManager } from './SEOManager';
export { StructuredDataGenerator } from './StructuredDataGenerator';
export { MetaTagGeneratorImpl as MetaTagGenerator } from './MetaTagGenerator';
export { SchemaValidator } from './SchemaValidator';
export { BreadcrumbNavigation } from './BreadcrumbNavigation';
export { ContentOptimizer } from './ContentOptimizer';
export { TechnicalSEO } from './TechnicalSEO';
export { SitemapGenerator } from './SitemapGenerator';
export { SemanticHTMLEnhancerImpl as SemanticHTMLEnhancer } from './SemanticHTMLEnhancer';
export { TextTruncator } from './TextTruncator';

// Configuration
export { seoConfig } from './config';

// Types
export type {
  SEOManagerProps,
  MetaTag,
  StructuredDataConfig,
  OpenGraphConfig,
  TwitterCardConfig,
  BasicMetaConfig,
  PersonSchemaData,
  WorkExperienceSchemaData,
  OrganizationSchemaData,
  ContactPointSchemaData,
  BreadcrumbItem,
  SEOConfig,
  PageSEOConfig,
  ValidationResult,
  SemanticElement
} from './types';