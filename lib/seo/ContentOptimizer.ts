export interface ContentSection {
  id: string;
  title: string;
  content: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  keywords?: string[];
  summary?: string;
}

export interface OptimizedContent {
  sections: ContentSection[];
  summary: string;
  keywords: string[];
  readingTime: number;
  headingStructure: HeadingStructure[];
}

export interface HeadingStructure {
  level: number;
  text: string;
  id: string;
  children?: HeadingStructure[];
}

export interface DateFormatOptions {
  format: 'short' | 'long' | 'iso' | 'relative';
  includeTime?: boolean;
}

export class ContentOptimizer {
  private readonly abbreviations: Record<string, string> = {
    'AWS': 'Amazon Web Services',
    'IoT': 'Internet of Things',
    'CI/CD': 'Continuous Integration/Continuous Deployment',
    'API': 'Application Programming Interface',
    'UI/UX': 'User Interface/User Experience',
    'DevOps': 'Development Operations',
    'SaaS': 'Software as a Service',
    'PaaS': 'Platform as a Service',
    'IaaS': 'Infrastructure as a Service',
    'ML': 'Machine Learning',
    'AI': 'Artificial Intelligence',
    'CRM': 'Customer Relationship Management',
    'ERP': 'Enterprise Resource Planning',
    'REST': 'Representational State Transfer',
    'GraphQL': 'Graph Query Language',
    'SQL': 'Structured Query Language',
    'NoSQL': 'Not Only SQL',
    'MQTT': 'Message Queuing Telemetry Transport',
    'HTTP': 'HyperText Transfer Protocol',
    'HTTPS': 'HyperText Transfer Protocol Secure',
    'SSL': 'Secure Sockets Layer',
    'TLS': 'Transport Layer Security',
    'JWT': 'JSON Web Token',
    'OAuth': 'Open Authorization',
    'GDPR': 'General Data Protection Regulation',
    'SEO': 'Search Engine Optimization'
  };

  private readonly skillCategories: Record<string, string[]> = {
    'Cloud Platforms': ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean'],
    'Container Technologies': ['Docker', 'Kubernetes', 'Docker Compose'],
    'Programming Languages': ['JavaScript', 'TypeScript', 'Python', 'Go', 'Java', 'C++'],
    'Databases': ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Cassandra'],
    'Message Queues': ['Kafka', 'RabbitMQ', 'AWS SQS', 'MQTT'],
    'Monitoring': ['Grafana', 'Prometheus', 'ELK Stack', 'Datadog'],
    'CI/CD Tools': ['Jenkins', 'GitHub Actions', 'GitLab CI', 'AWS CodePipeline']
  };

  /**
   * Organize resume content into logical sections with clear headings
   */
  organizeResumeContent(resumeData: any): OptimizedContent {
    const sections: ContentSection[] = [];

    // Professional Summary Section
    if (resumeData.basics?.summary) {
      sections.push({
        id: 'professional-summary',
        title: 'Professional Summary',
        content: this.enhanceContentWithContext(resumeData.basics.summary),
        level: 2,
        summary: this.generateSummary(resumeData.basics.summary),
        keywords: this.extractKeywords(resumeData.basics.summary)
      });
    }

    // Work Experience Section
    if (resumeData.work && resumeData.work.length > 0) {
      const workContent = this.organizeWorkExperience(resumeData.work);
      sections.push({
        id: 'work-experience',
        title: 'Professional Experience',
        content: workContent,
        level: 2,
        summary: `${resumeData.work.length} positions spanning ${this.calculateExperienceYears(resumeData.work)} years`,
        keywords: this.extractWorkKeywords(resumeData.work)
      });
    }

    // Skills Section
    if (resumeData.skills && resumeData.skills.length > 0) {
      const skillsContent = this.organizeSkills(resumeData.skills);
      sections.push({
        id: 'technical-skills',
        title: 'Technical Skills',
        content: skillsContent,
        level: 2,
        summary: this.generateSkillsSummary(resumeData.skills),
        keywords: this.extractSkillKeywords(resumeData.skills)
      });
    }

    // Languages Section
    if (resumeData.languages && resumeData.languages.length > 0) {
      const languagesContent = this.organizeLanguages(resumeData.languages);
      sections.push({
        id: 'languages',
        title: 'Languages',
        content: languagesContent,
        level: 2,
        summary: `Fluent in ${resumeData.languages.length} languages`,
        keywords: resumeData.languages.map((lang: any) => lang.language)
      });
    }

    const allKeywords = sections.flatMap(section => section.keywords || []);
    const overallSummary = this.generateOverallSummary(sections);

    return {
      sections,
      summary: overallSummary,
      keywords: Array.from(new Set(allKeywords)),
      readingTime: this.calculateReadingTime(sections),
      headingStructure: this.generateHeadingStructure(sections)
    };
  }

  /**
   * Format dates consistently across the resume
   */
  formatDate(dateString: string, options: DateFormatOptions = { format: 'short' }): string {
    if (!dateString || dateString.toLowerCase() === 'present') {
      return 'Present';
    }

    try {
      const date = new Date(dateString);
      
      switch (options.format) {
        case 'short':
          return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short' 
          });
        case 'long':
          return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long',
            day: 'numeric'
          });
        case 'iso':
          return date.toISOString().split('T')[0];
        case 'relative':
          return this.getRelativeTime(date);
        default:
          return dateString;
      }
    } catch (error) {
      return dateString; // Return original if parsing fails
    }
  }

  /**
   * Format location consistently
   */
  formatLocation(location: string): string {
    if (!location) return '';
    
    // Standardize common location formats
    const locationMappings: Record<string, string> = {
      'HK': 'Hong Kong',
      'AR': 'Argentina',
      'MX': 'Mexico',
      'JP': 'Japan'
    };

    // Check if location is just a country code
    if (locationMappings[location]) {
      return locationMappings[location];
    }

    return location;
  }

  /**
   * Enhance content with context for abbreviations and technical terms
   */
  enhanceContentWithContext(content: string): string {
    let enhancedContent = content;

    // Add context for abbreviations
    Object.entries(this.abbreviations).forEach(([abbr, full]) => {
      const regex = new RegExp(`\\b${abbr}\\b`, 'g');
      const replacement = `${abbr} (${full})`;
      
      // Only replace first occurrence to avoid repetition
      if (enhancedContent.includes(abbr) && !enhancedContent.includes(replacement)) {
        enhancedContent = enhancedContent.replace(regex, replacement);
      }
    });

    return enhancedContent;
  }

  /**
   * Organize work experience with clear structure
   */
  private organizeWorkExperience(workData: any[]): string {
    return workData.map((job, index) => {
      const duration = this.calculateJobDuration(job.startDate, job.endDate);
      const location = this.formatLocation(job.location);
      
      let jobContent = `### ${job.position} at ${job.name}\n`;
      jobContent += `**Duration:** ${this.formatDate(job.startDate)} - ${this.formatDate(job.endDate)} (${duration})\n`;
      
      if (location) {
        jobContent += `**Location:** ${location}\n`;
      }
      
      if (job.summary) {
        jobContent += `\n${this.enhanceContentWithContext(job.summary)}\n`;
      }
      
      if (job.highlights && job.highlights.length > 0) {
        jobContent += '\n**Key Achievements:**\n';
        job.highlights.forEach((highlight: string) => {
          jobContent += `- ${this.enhanceContentWithContext(highlight)}\n`;
        });
      }
      
      if (job.stack && job.stack.length > 0) {
        jobContent += `\n**Technologies Used:** ${job.stack.join(', ')}\n`;
      }
      
      return jobContent;
    }).join('\n\n');
  }

  /**
   * Organize skills by category
   */
  private organizeSkills(skillsData: any[]): string {
    let skillsContent = '';
    
    skillsData.forEach(skillGroup => {
      if (skillGroup.name && skillGroup.keywords) {
        skillsContent += `### ${skillGroup.name}\n`;
        skillsContent += skillGroup.keywords.map((skill: string) => 
          `- **${skill}**${this.getSkillContext(skill)}`
        ).join('\n') + '\n\n';
      }
    });
    
    return skillsContent;
  }

  /**
   * Organize languages with proficiency levels
   */
  private organizeLanguages(languagesData: any[]): string {
    return languagesData.map(lang => 
      `- **${lang.language}**: ${lang.fluency || 'Proficient'}`
    ).join('\n');
  }

  /**
   * Get additional context for skills
   */
  private getSkillContext(skill: string): string {
    // Find which category this skill belongs to
    for (const [category, skills] of Object.entries(this.skillCategories)) {
      if (skills.some(s => s.toLowerCase() === skill.toLowerCase())) {
        return ` (${category})`;
      }
    }
    
    // Check if it's an abbreviation
    if (this.abbreviations[skill]) {
      return ` (${this.abbreviations[skill]})`;
    }
    
    return '';
  }
  /**
   * Calculate job duration in human-readable format
   */
  private calculateJobDuration(startDate: string, endDate?: string): string {
    const start = new Date(startDate);
    const end = endDate && endDate.toLowerCase() !== 'present' ? new Date(endDate) : new Date();
    
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffMonths / 12);
    const remainingMonths = diffMonths % 12;
    
    if (diffYears > 0) {
      if (remainingMonths > 0) {
        return `${diffYears} year${diffYears > 1 ? 's' : ''}, ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
      }
      return `${diffYears} year${diffYears > 1 ? 's' : ''}`;
    }
    
    return `${diffMonths} month${diffMonths > 1 ? 's' : ''}`;
  }

  /**
   * Calculate total years of experience
   */
  private calculateExperienceYears(workData: any[]): number {
    if (!workData.length) return 0;
    
    const startDate = new Date(workData[workData.length - 1].startDate);
    const endDate = new Date();
    
    return Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365));
  }

  /**
   * Extract keywords from content
   */
  private extractKeywords(content: string): string[] {
    const keywords: string[] = [];
    
    // Extract technical terms and abbreviations
    Object.keys(this.abbreviations).forEach(abbr => {
      if (content.includes(abbr)) {
        keywords.push(abbr);
      }
    });
    
    // Extract skill-related keywords
    Object.values(this.skillCategories).flat().forEach(skill => {
      if (content.toLowerCase().includes(skill.toLowerCase())) {
        keywords.push(skill);
      }
    });
    
    return Array.from(new Set(keywords));
  }

  /**
   * Extract keywords from work experience
   */
  private extractWorkKeywords(workData: any[]): string[] {
    const keywords: string[] = [];
    
    workData.forEach(job => {
      if (job.stack) {
        keywords.push(...job.stack);
      }
      
      if (job.highlights) {
        job.highlights.forEach((highlight: string) => {
          keywords.push(...this.extractKeywords(highlight));
        });
      }
    });
    
    return Array.from(new Set(keywords));
  }

  /**
   * Extract keywords from skills
   */
  private extractSkillKeywords(skillsData: any[]): string[] {
    const keywords: string[] = [];
    
    skillsData.forEach(skillGroup => {
      if (skillGroup.keywords) {
        keywords.push(...skillGroup.keywords);
      }
    });
    
    return Array.from(new Set(keywords));
  }

  /**
   * Generate summary for content section
   */
  private generateSummary(content: string): string {
    const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
    return sentences[0]?.trim() + (sentences.length > 1 ? '...' : '');
  }

  /**
   * Generate skills summary
   */
  private generateSkillsSummary(skillsData: any[]): string {
    const totalSkills = skillsData.reduce((total, group) => 
      total + (group.keywords?.length || 0), 0
    );
    
    const categories = skillsData.map(group => group.name).join(', ');
    
    return `${totalSkills} technical skills across ${categories}`;
  }

  /**
   * Generate overall summary
   */
  private generateOverallSummary(sections: ContentSection[]): string {
    const summaries = sections.map(section => section.summary).filter(Boolean);
    return summaries.join('. ') + '.';
  }

  /**
   * Calculate reading time
   */
  private calculateReadingTime(sections: ContentSection[]): number {
    const totalWords = sections.reduce((total, section) => {
      const wordCount = section.content.split(/\s+/).length;
      return total + wordCount;
    }, 0);
    
    // Average reading speed: 200 words per minute
    return Math.ceil(totalWords / 200);
  }

  /**
   * Generate heading structure for navigation
   */
  private generateHeadingStructure(sections: ContentSection[]): HeadingStructure[] {
    return sections.map(section => ({
      level: section.level,
      text: section.title,
      id: section.id,
      children: this.extractSubheadings(section.content)
    }));
  }

  /**
   * Extract subheadings from content
   */
  private extractSubheadings(content: string): HeadingStructure[] {
    const headingRegex = /^#{3,6}\s+(.+)$/gm;
    const headings: HeadingStructure[] = [];
    let match;
    
    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[0].indexOf(' '); // Count # characters
      const text = match[1].trim();
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      
      headings.push({
        level,
        text,
        id
      });
    }
    
    return headings;
  }

  /**
   * Get relative time description
   */
  private getRelativeTime(date: Date): string {
    const now = new Date();
    const diffTime = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffMonths / 12);
    
    if (diffYears > 0) {
      return `${diffYears} year${diffYears > 1 ? 's' : ''} ago`;
    } else if (diffMonths > 0) {
      return `${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`;
    } else if (diffDays > 0) {
      return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    } else {
      return 'Today';
    }
  }

  /**
   * Normalize skill names for consistency
   */
  normalizeSkillName(skill: string): string {
    const normalizations: Record<string, string> = {
      'javascript': 'JavaScript',
      'typescript': 'TypeScript',
      'nodejs': 'Node.js',
      'node.js': 'Node.js',
      'reactjs': 'React',
      'react.js': 'React',
      'vuejs': 'Vue.js',
      'vue.js': 'Vue.js',
      'angularjs': 'Angular',
      'postgresql': 'PostgreSQL',
      'mysql': 'MySQL',
      'mongodb': 'MongoDB',
      'aws': 'AWS',
      'amazon web services': 'AWS',
      'google cloud platform': 'Google Cloud',
      'gcp': 'Google Cloud'
    };
    
    return normalizations[skill.toLowerCase()] || skill;
  }

  /**
   * Generate content freshness indicators
   */
  generateFreshnessIndicators(lastModified: Date): {
    indicator: string;
    isRecent: boolean;
    daysSinceUpdate: number;
  } {
    const now = new Date();
    const diffTime = now.getTime() - lastModified.getTime();
    const daysSinceUpdate = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    let indicator = '';
    let isRecent = false;
    
    if (daysSinceUpdate === 0) {
      indicator = 'Updated today';
      isRecent = true;
    } else if (daysSinceUpdate === 1) {
      indicator = 'Updated yesterday';
      isRecent = true;
    } else if (daysSinceUpdate < 7) {
      indicator = `Updated ${daysSinceUpdate} days ago`;
      isRecent = true;
    } else if (daysSinceUpdate < 30) {
      const weeks = Math.floor(daysSinceUpdate / 7);
      indicator = `Updated ${weeks} week${weeks > 1 ? 's' : ''} ago`;
      isRecent = false;
    } else if (daysSinceUpdate < 365) {
      const months = Math.floor(daysSinceUpdate / 30);
      indicator = `Updated ${months} month${months > 1 ? 's' : ''} ago`;
      isRecent = false;
    } else {
      const years = Math.floor(daysSinceUpdate / 365);
      indicator = `Updated ${years} year${years > 1 ? 's' : ''} ago`;
      isRecent = false;
    }
    
    return {
      indicator,
      isRecent,
      daysSinceUpdate
    };
  }
}