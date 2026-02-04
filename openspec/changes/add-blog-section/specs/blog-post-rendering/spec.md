## ADDED Requirements

### Requirement: Dynamic blog post routing
The system SHALL render individual blog posts at /posts/[slug] URLs.

#### Scenario: Valid slug access
- **WHEN** user visits /posts/valid-post-slug
- **THEN** system renders corresponding blog post content
- **THEN** system displays post title, date, tags, and description
- **THEN** system includes metadata in page head for SEO

#### Scenario: Invalid slug access
- **WHEN** user visits /posts/non-existent-post
- **THEN** system returns 404 page
- **THEN** system logs 404 for analytics

#### Scenario: Slug generation
- **WHEN** markdown file exists without explicit slug
- **THEN** system generates slug from filename (convert spaces to hyphens, lowercase)
- **THEN** system removes file extension from slug

### Requirement: Blog post metadata rendering
The system SHALL display post metadata in consistent format.

#### Scenario: Post header display
- **WHEN** blog post is rendered
- **THEN** system shows author name (hardcoded as "Acevedo Miguel")
- **THEN** system displays publication date in readable format
- **THEN** system shows post tags as clickable links
- **THEN** system includes estimated reading time

#### Scenario: Social metadata
- **WHEN** blog post is rendered
- **THEN** system includes Open Graph meta tags for social sharing
- **THEN** system includes Twitter Card meta tags
- **THEN** system sets appropriate page title with post name

### Requirement: Blog post navigation
The system SHALL provide navigation between related blog posts.

#### Scenario: Next/Previous links
- **WHEN** viewing a blog post
- **THEN** system shows "Previous Post" link if earlier post exists
- **THEN** system shows "Next Post" link if newer post exists
- **THEN** system uses post titles as link text
- **THEN** system maintains chronological order

#### Scenario: Back to listing
- **WHEN** user clicks "Back to Posts" link
- **THEN** system navigates to /posts page
- **THEN** system maintains any active filters

### Requirement: Code syntax highlighting
The system SHALL provide syntax highlighting for code blocks.

#### Scenario: Code block rendering
- **WHEN** markdown contains fenced code blocks
- **THEN** system applies appropriate syntax highlighting
- **THEN** system includes copy-to-clipboard functionality
- **THEN** system displays language label when specified

#### Scenario: Inline code
- **WHEN** markdown contains inline code
- **THEN** system renders code with appropriate styling
- **THEN** system maintains code formatting and spacing