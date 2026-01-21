import { ValidationResult } from './types';

export interface SchemaValidationOptions {
  strict?: boolean;
  allowWarnings?: boolean;
  validateUrls?: boolean;
}

export class SchemaValidator {
  private readonly schemaOrgTypes = new Set([
    'Person',
    'WorkExperience', 
    'Organization',
    'ContactPoint',
    'WebSite',
    'BreadcrumbList',
    'ListItem',
    'Place',
    'PostalAddress',
    'DefinedTerm',
    'DefinedTermSet'
  ]);

  private readonly requiredFields: { [key: string]: string[] } = {
    Person: ['name', 'jobTitle'],
    WorkExperience: ['name', 'employer'],
    Organization: ['name'],
    ContactPoint: ['contactType'],
    WebSite: ['name', 'url'],
    BreadcrumbList: ['itemListElement'],
    PostalAddress: ['addressLocality', 'addressCountry']
  };

  private readonly recommendedFields: { [key: string]: string[] } = {
    Person: ['email', 'url', 'description', 'image'],
    WorkExperience: ['startDate', 'description', 'jobLocation'],
    Organization: ['url', 'description'],
    ContactPoint: ['email', 'telephone'],
    WebSite: ['description', 'author']
  };

  /**
   * Validate structured data against Schema.org specifications
   */
  validateSchema(schema: any, options: SchemaValidationOptions = {}): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    try {
      // Basic structure validation
      this.validateBasicStructure(schema, errors);
      
      // Type-specific validation
      if (schema['@type']) {
        this.validateSchemaType(schema, errors, warnings);
        this.validateRequiredFields(schema, errors);
        this.validateRecommendedFields(schema, warnings);
      }

      // URL validation if enabled
      if (options.validateUrls) {
        this.validateUrls(schema, warnings);
      }

      // Nested schema validation
      this.validateNestedSchemas(schema, errors, warnings, options);

    } catch (error) {
      errors.push(`Validation error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings: options.allowWarnings === false ? [] : warnings
    };
  }

  /**
   * Validate multiple schemas at once
   */
  validateMultipleSchemas(schemas: any[], options: SchemaValidationOptions = {}): ValidationResult {
    const allErrors: string[] = [];
    const allWarnings: string[] = [];

    schemas.forEach((schema, index) => {
      const result = this.validateSchema(schema, options);
      
      result.errors.forEach(error => {
        allErrors.push(`Schema ${index + 1}: ${error}`);
      });
      
      result.warnings.forEach(warning => {
        allWarnings.push(`Schema ${index + 1}: ${warning}`);
      });
    });

    return {
      isValid: allErrors.length === 0,
      errors: allErrors,
      warnings: allWarnings
    };
  }

  /**
   * Validate basic schema structure
   */
  private validateBasicStructure(schema: any, errors: string[]): void {
    if (typeof schema !== 'object' || schema === null) {
      errors.push('Schema must be an object');
      return;
    }

    if (!schema['@context']) {
      errors.push('Missing required @context property');
    } else if (schema['@context'] !== 'https://schema.org') {
      errors.push('Invalid @context value. Expected "https://schema.org"');
    }

    if (!schema['@type']) {
      errors.push('Missing required @type property');
    }
  }

  /**
   * Validate schema type against known Schema.org types
   */
  private validateSchemaType(schema: any, errors: string[], warnings: string[]): void {
    const schemaType = schema['@type'];
    
    if (!this.schemaOrgTypes.has(schemaType)) {
      warnings.push(`Unknown schema type: ${schemaType}. Verify against Schema.org documentation.`);
    }
  }

  /**
   * Validate required fields for specific schema types
   */
  private validateRequiredFields(schema: any, errors: string[]): void {
    const schemaType = schema['@type'];
    const required = this.requiredFields[schemaType];

    if (!required) return;

    required.forEach(field => {
      if (!this.hasValidValue(schema, field)) {
        errors.push(`Missing required field "${field}" for ${schemaType} schema`);
      }
    });

    // Special validations
    this.validateSpecialRequirements(schema, errors);
  }

  /**
   * Validate recommended fields for better SEO
   */
  private validateRecommendedFields(schema: any, warnings: string[]): void {
    const schemaType = schema['@type'];
    const recommended = this.recommendedFields[schemaType];

    if (!recommended) return;

    recommended.forEach(field => {
      if (!this.hasValidValue(schema, field)) {
        warnings.push(`Missing recommended field "${field}" for ${schemaType} schema`);
      }
    });
  }

  /**
   * Validate URLs in schema
   */
  private validateUrls(schema: any, warnings: string[]): void {
    const urlFields = ['url', 'image', 'sameAs'];
    
    urlFields.forEach(field => {
      const value = schema[field];
      if (value) {
        if (Array.isArray(value)) {
          value.forEach((url, index) => {
            if (!this.isValidUrl(url)) {
              warnings.push(`Invalid URL in ${field}[${index}]: ${url}`);
            }
          });
        } else if (!this.isValidUrl(value)) {
          warnings.push(`Invalid URL in ${field}: ${value}`);
        }
      }
    });
  }

  /**
   * Validate nested schemas recursively
   */
  private validateNestedSchemas(schema: any, errors: string[], warnings: string[], options: SchemaValidationOptions): void {
    Object.keys(schema).forEach(key => {
      const value = schema[key];
      
      if (this.isNestedSchema(value)) {
        const nestedResult = this.validateSchema(value, options);
        nestedResult.errors.forEach(error => {
          errors.push(`Nested schema "${key}": ${error}`);
        });
        nestedResult.warnings.forEach(warning => {
          warnings.push(`Nested schema "${key}": ${warning}`);
        });
      } else if (Array.isArray(value)) {
        value.forEach((item, index) => {
          if (this.isNestedSchema(item)) {
            const nestedResult = this.validateSchema(item, options);
            nestedResult.errors.forEach(error => {
              errors.push(`Nested schema "${key}[${index}]": ${error}`);
            });
            nestedResult.warnings.forEach(warning => {
              warnings.push(`Nested schema "${key}[${index}]": ${warning}`);
            });
          }
        });
      }
    });
  }

  /**
   * Special validation requirements for specific schema types
   */
  private validateSpecialRequirements(schema: any, errors: string[]): void {
    const schemaType = schema['@type'];

    switch (schemaType) {
      case 'Person':
        if (schema.email && !this.isValidEmail(schema.email)) {
          errors.push('Invalid email format in Person schema');
        }
        break;

      case 'WorkExperience':
        if (schema.startDate && schema.endDate) {
          if (!this.isValidDateRange(schema.startDate, schema.endDate)) {
            errors.push('Invalid date range: endDate must be after startDate');
          }
        }
        break;

      case 'BreadcrumbList':
        if (schema.itemListElement && Array.isArray(schema.itemListElement)) {
          const positions = schema.itemListElement.map((item: any) => item.position);
          if (!this.isSequentialPositions(positions)) {
            errors.push('BreadcrumbList positions must be sequential starting from 1');
          }
        }
        break;
    }
  }

  /**
   * Check if a field has a valid value
   */
  private hasValidValue(obj: any, field: string): boolean {
    const value = obj[field];
    return value !== undefined && value !== null && value !== '';
  }

  /**
   * Check if value is a nested schema object
   */
  private isNestedSchema(value: any): boolean {
    return typeof value === 'object' && 
           value !== null && 
           value['@type'] && 
           !Array.isArray(value);
  }

  /**
   * Validate URL format
   */
  private isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Validate email format
   */
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validate date range
   */
  private isValidDateRange(startDate: string, endDate: string): boolean {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return start <= end;
  }

  /**
   * Check if positions are sequential starting from 1
   */
  private isSequentialPositions(positions: number[]): boolean {
    const sorted = [...positions].sort((a, b) => a - b);
    return sorted.every((pos, index) => pos === index + 1);
  }

  /**
   * Create fallback schema when validation fails
   */
  createFallbackSchema(originalSchema: any, schemaType: string): any {
    const fallbacks: { [key: string]: any } = {
      Person: {
        "@context": "https://schema.org",
        "@type": "Person",
        name: originalSchema?.name || "Unknown Person",
        jobTitle: originalSchema?.jobTitle || "Professional"
      },
      Organization: {
        "@context": "https://schema.org", 
        "@type": "Organization",
        name: originalSchema?.name || "Unknown Organization"
      },
      WorkExperience: {
        "@context": "https://schema.org",
        "@type": "WorkExperience", 
        name: originalSchema?.name || "Work Experience",
        employer: {
          "@type": "Organization",
          name: originalSchema?.employer?.name || "Unknown Company"
        }
      }
    };

    return fallbacks[schemaType] || {
      "@context": "https://schema.org",
      "@type": schemaType
    };
  }
}