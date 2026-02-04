## ADDED Requirements

### Requirement: Draft post handling
The system SHALL support draft posts that are accessible but not listed.

#### Scenario: Draft post access
- **WHEN** markdown file frontmatter includes `draft: true`
- **THEN** system renders post at its slug URL
- **THEN** system excludes post from listing pages
- **THEN** system excludes post from RSS feed
- **THEN** system excludes post from sitemap

#### Scenario: Draft post metadata
- **WHEN** draft post is rendered
- **THEN** system displays "Draft" indicator prominently
- **THEN** system prevents indexing via robots meta tag
- **THEN** system excludes from search index
- **THEN** system maintains SEO noindex directive

### Requirement: Draft post workflow
The system SHALL support draft-to-published workflow.

#### Scenario: Publishing draft
- **WHEN** draft post's `draft: true` is removed or set to false
- **THEN** system includes post in next build's listing
- **THEN** system adds post to RSS feed
- **THEN** system includes post in sitemap
- **THEN** system makes post searchable

#### Scenario: Converting to draft
- **WHEN** published post's frontmatter adds `draft: true`
- **THEN** system removes from listing pages
- **THEN** system excludes from RSS feed
- **THEN** system removes from sitemap
- **THEN** system keeps URL accessible

### Requirement: Draft post validation
The system SHALL validate draft post configuration.

#### Scenario: Invalid draft configuration
- **WHEN** frontmatter has invalid draft value
- **THEN** system treats non-boolean values as draft: false
- **THEN** system logs warning about configuration
- **THEN** system continues processing with default behavior

#### Scenario: Draft preview access
- **WHEN** accessing draft post URL
- **THEN** system renders full content normally
- **THEN** system includes preview styling if desired
- **THEN** system shows "Draft Status" to content editors