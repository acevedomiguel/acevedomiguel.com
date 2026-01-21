import {
  PersonSchemaData,
  WorkExperienceSchemaData,
  OrganizationSchemaData,
  ContactPointSchemaData,
  BreadcrumbItem,
  ValidationResult
} from './types';

export interface PersonSchema {
  "@context": "https://schema.org";
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
  worksFor?: Organization[];
  knowsAbout: string[];
}

export interface WorkExperienceSchema {
  "@context": "https://schema.org";
  "@type": "WorkExperience";
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  employer: Organization;
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

export interface Organization {
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

export interface ContactPointSchema {
  "@context": "https://schema.org";
  "@type": "ContactPoint";
  telephone?: string;
  email?: string;
  contactType: string;
  availableLanguage?: string[];
}

export interface WebsiteSchema {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  author: PersonSchema;
}

export interface BreadcrumbListSchema {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

export class StructuredDataGenerator {
  /**
   * Generate Person schema from person data
   */
  generatePersonSchema(personData: PersonSchemaData): PersonSchema {
    if (!personData.name || !personData.jobTitle) {
      throw new Error('Person schema requires name and jobTitle');
    }

    return {
      "@context": "https://schema.org",
      "@type": "Person",
      name: personData.name,
      jobTitle: personData.jobTitle,
      description: personData.description || '',
      url: personData.url || '',
      image: personData.image || '',
      email: personData.email || '',
      telephone: personData.telephone,
      address: personData.address,
      sameAs: personData.sameAs || [],
      knowsAbout: personData.knowsAbout || []
    };
  }

  /**
   * Generate WorkExperience schema array from work data
   */
  generateWorkExperienceSchema(workData: WorkExperienceSchemaData[]): WorkExperienceSchema[] {
    if (!Array.isArray(workData)) {
      return [];
    }

    return workData
      .filter(work => work.name && work.employer?.name)
      .map(work => ({
        "@context": "https://schema.org",
        "@type": "WorkExperience",
        name: work.name,
        description: work.description || '',
        startDate: work.startDate,
        endDate: work.endDate,
        employer: {
          "@type": "Organization",
          name: work.employer.name,
          url: work.employer.url
        },
        jobLocation: work.jobLocation || {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Unknown",
            addressCountry: "Unknown"
          }
        },
        skills: work.skills || []
      }));
  }

  /**
   * Generate Organization schema from organization data
   */
  generateOrganizationSchema(orgData: OrganizationSchemaData): Organization {
    if (!orgData.name) {
      throw new Error('Organization schema requires name');
    }

    return {
      "@type": "Organization",
      name: orgData.name,
      url: orgData.url,
      description: orgData.description,
      address: orgData.address
    };
  }

  /**
   * Generate ContactPoint schema from contact data
   */
  generateContactPointSchema(contactData: ContactPointSchemaData): ContactPointSchema {
    if (!contactData.contactType) {
      throw new Error('ContactPoint schema requires contactType');
    }

    return {
      "@context": "https://schema.org",
      "@type": "ContactPoint",
      telephone: contactData.telephone,
      email: contactData.email,
      contactType: contactData.contactType,
      availableLanguage: contactData.availableLanguage || ['en', 'es']
    };
  }

  /**
   * Generate Website schema from site data
   */
  generateWebsiteSchema(siteData: { name: string; url: string; description: string; author: PersonSchemaData }): WebsiteSchema {
    if (!siteData.name || !siteData.url) {
      throw new Error('Website schema requires name and url');
    }

    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteData.name,
      url: siteData.url,
      description: siteData.description || '',
      author: this.generatePersonSchema(siteData.author)
    };
  }

  /**
   * Generate BreadcrumbList schema from breadcrumb items
   */
  generateBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]): BreadcrumbListSchema {
    if (!Array.isArray(breadcrumbs) || breadcrumbs.length === 0) {
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: []
      };
    }

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map(breadcrumb => ({
        "@type": "ListItem",
        position: breadcrumb.position,
        name: breadcrumb.name,
        item: breadcrumb.url
      }))
    };
  }

  /**
   * Convert resume JSON data to WorkExperience schema data
   */
  convertResumeToWorkExperience(resumeData: any): WorkExperienceSchemaData[] {
    if (!resumeData?.work || !Array.isArray(resumeData.work)) {
      return [];
    }

    return resumeData.work.map((job: any) => ({
      "@type": "WorkExperience",
      name: job.position || 'Unknown Position',
      description: job.summary || job.highlights?.join('. ') || '',
      startDate: job.startDate || '',
      endDate: job.endDate === 'Present' ? undefined : job.endDate,
      employer: {
        "@type": "Organization",
        name: job.name || 'Unknown Company',
        url: job.url
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: job.location || 'Unknown',
          addressCountry: this.extractCountryFromLocation(job.location)
        }
      },
      skills: job.stack || []
    }));
  }

  /**
   * Convert resume JSON data to Person schema data
   */
  convertResumeToPersonSchema(resumeData: any): PersonSchemaData {
    const basics = resumeData?.basics || {};
    
    return {
      "@type": "Person",
      name: basics.name || 'Unknown',
      jobTitle: basics.label || 'Software Engineer',
      description: basics.summary || '',
      url: basics.url || '',
      image: basics.image || '',
      email: basics.email || '',
      telephone: basics.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: basics.location?.city || '',
        addressCountry: basics.location?.countryCode || '',
        addressRegion: basics.location?.region
      },
      sameAs: basics.profiles?.map((profile: any) => profile.url) || [],
      knowsAbout: this.extractSkillsFromResume(resumeData)
    };
  }

  /**
   * Extract skills from resume data
   */
  private extractSkillsFromResume(resumeData: any): string[] {
    const skills: string[] = [];
    
    if (resumeData?.skills && Array.isArray(resumeData.skills)) {
      resumeData.skills.forEach((skillGroup: any) => {
        if (skillGroup.keywords && Array.isArray(skillGroup.keywords)) {
          skills.push(...skillGroup.keywords);
        }
      });
    }

    return Array.from(new Set(skills)); // Remove duplicates
  }

  /**
   * Extract country from location string
   */
  private extractCountryFromLocation(location?: string): string {
    if (!location) return 'Unknown';
    
    const countryMappings: { [key: string]: string } = {
      'Hong Kong': 'HK',
      'Argentina': 'AR',
      'Mexico': 'MX',
      'Japan': 'JP',
      'Spain': 'ES',
      'France': 'FR',
      'Chile': 'CL'
    };

    for (const [country, code] of Object.entries(countryMappings)) {
      if (location.includes(country)) {
        return code;
      }
    }

    return location.split(' ').pop() || 'Unknown';
  }

  /**
   * Validate structured data against basic schema requirements
   */
  validateStructuredData(schema: any): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!schema['@context']) {
      errors.push('Missing @context property');
    }

    if (!schema['@type']) {
      errors.push('Missing @type property');
    }

    if (schema['@type'] === 'Person') {
      if (!schema.name) errors.push('Person schema missing required name property');
      if (!schema.jobTitle) errors.push('Person schema missing required jobTitle property');
      if (!schema.email) warnings.push('Person schema missing email property');
    }

    if (schema['@type'] === 'WorkExperience') {
      if (!schema.name) errors.push('WorkExperience schema missing required name property');
      if (!schema.employer?.name) errors.push('WorkExperience schema missing required employer name');
      if (!schema.startDate) warnings.push('WorkExperience schema missing startDate');
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }
}