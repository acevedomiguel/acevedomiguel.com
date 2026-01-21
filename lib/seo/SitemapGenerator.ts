export interface SitemapEntry {
  url: string;
  lastModified?: Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export interface InternalLink {
  href: string;
  text: string;
  title?: string;
  rel?: string;
}

export class SitemapGenerator {
  private readonly baseUrl: string;
  private readonly defaultChangeFreq: SitemapEntry['changeFrequency'] = 'monthly';
  private readonly defaultPriority: number = 0.5;

  constructor(baseUrl: string = 'https://www.acevedomiguel.com') {
    this.baseUrl = baseUrl.replace(/\/$/, '');
  }

  /**
   * Generate sitemap entries for the website
   */
  generateSitemapEntries(): SitemapEntry[] {
    const entries: SitemapEntry[] = [];

    // Home page - highest priority, changes monthly
    entries.push({
      url: this.baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0
    });

    // Resume page - high priority, changes quarterly
    entries.push({
      url: `${this.baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9
    });

    // Contact page - medium priority, rarely changes
    entries.push({
      url: `${this.baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7
    });

    return entries;
  }

  /**
   * Generate XML sitemap content
   */
  generateXMLSitemap(): string {
    const entries = this.generateSitemapEntries();
    
    const xmlEntries = entries.map(entry => {
      const lastmod = entry.lastModified ? 
        `    <lastmod>${entry.lastModified.toISOString().split('T')[0]}</lastmod>` : '';
      const changefreq = entry.changeFrequency ? 
        `    <changefreq>${entry.changeFrequency}</changefreq>` : '';
      const priority = entry.priority !== undefined ? 
        `    <priority>${entry.priority.toFixed(1)}</priority>` : '';

      return `  <url>
    <loc>${entry.url}</loc>${lastmod}${changefreq}${priority}
  </url>`;
    }).join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>`;
  }

  /**
   * Generate HTML sitemap for user navigation
   */
  generateHTMLSitemap(): string {
    const entries = this.generateSitemapEntries();
    
    const htmlEntries = entries.map(entry => {
      const url = new URL(entry.url);
      const path = url.pathname || '/';
      const title = this.getPageTitle(path);
      
      return `    <li><a href="${entry.url}" title="${title}">${title}</a></li>`;
    }).join('\n');

    return `<div class="html-sitemap">
  <h2>Site Map</h2>
  <nav aria-label="Site map">
    <ul role="list">
${htmlEntries}
    </ul>
  </nav>
</div>`;
  }

  /**
   * Generate internal linking suggestions
   */
  generateInternalLinks(currentPath: string): InternalLink[] {
    const links: InternalLink[] = [];
    const entries = this.generateSitemapEntries();

    entries.forEach(entry => {
      const url = new URL(entry.url);
      const path = url.pathname || '/';
      
      // Don't link to current page
      if (path === currentPath) {
        return;
      }

      const title = this.getPageTitle(path);
      const linkText = this.getLinkText(path);
      
      links.push({
        href: entry.url,
        text: linkText,
        title: `Visit ${title}`,
        rel: this.getLinkRel(path)
      });
    });

    return links;
  }

  /**
   * Generate contextual internal links based on content
   */
  generateContextualLinks(currentPath: string, content: string): InternalLink[] {
    const links: InternalLink[] = [];
    
    // Define contextual linking rules
    const linkingRules: Array<{
      trigger: RegExp;
      targetPath: string;
      linkText: string;
      title: string;
    }> = [
      {
        trigger: /resume|cv|experience|work history/i,
        targetPath: '/resume',
        linkText: 'view my resume',
        title: 'View my complete professional resume'
      },
      {
        trigger: /contact|get in touch|reach out|email/i,
        targetPath: '/contact',
        linkText: 'contact me',
        title: 'Get in touch with me'
      },
      {
        trigger: /home|main page|about me/i,
        targetPath: '/',
        linkText: 'learn more about me',
        title: 'Return to homepage'
      }
    ];

    linkingRules.forEach(rule => {
      if (rule.trigger.test(content) && rule.targetPath !== currentPath) {
        links.push({
          href: `${this.baseUrl}${rule.targetPath}`,
          text: rule.linkText,
          title: rule.title,
          rel: 'internal'
        });
      }
    });

    return links;
  }

  /**
   * Get page title from path
   */
  private getPageTitle(path: string): string {
    const titleMap: Record<string, string> = {
      '/': 'Home - Acevedo Miguel',
      '/resume': 'Resume - Acevedo Miguel',
      '/contact': 'Contact - Acevedo Miguel'
    };

    return titleMap[path] || 'Acevedo Miguel';
  }

  /**
   * Get link text from path
   */
  private getLinkText(path: string): string {
    const textMap: Record<string, string> = {
      '/': 'Home',
      '/resume': 'Resume',
      '/contact': 'Contact'
    };

    return textMap[path] || path.replace('/', '').replace(/[-_]/g, ' ');
  }

  /**
   * Get appropriate rel attribute for link
   */
  private getLinkRel(path: string): string {
    // All internal links
    return 'internal';
  }

  /**
   * Generate next-sitemap configuration
   */
  generateNextSitemapConfig(): object {
    return {
      siteUrl: this.baseUrl,
      generateRobotsTxt: true,
      sitemapSize: 7000,
      changefreq: this.defaultChangeFreq,
      priority: this.defaultPriority,
      exclude: [
        '/api/*',
        '/admin/*',
        '/_next/*'
      ],
      additionalPaths: async () => {
        const entries = this.generateSitemapEntries();
        return entries.map(entry => ({
          loc: entry.url.replace(this.baseUrl, ''),
          changefreq: entry.changeFrequency,
          priority: entry.priority,
          lastmod: entry.lastModified?.toISOString()
        }));
      },
      robotsTxtOptions: {
        policies: [
          {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/', '/_next/']
          },
          {
            userAgent: 'GPTBot',
            allow: '/'
          },
          {
            userAgent: 'ChatGPT-User',
            allow: '/'
          },
          {
            userAgent: 'CCBot',
            allow: '/'
          },
          {
            userAgent: 'anthropic-ai',
            allow: '/'
          },
          {
            userAgent: 'Claude-Web',
            allow: '/'
          }
        ],
        additionalSitemaps: [
          `${this.baseUrl}/sitemap.xml`
        ]
      }
    };
  }
}