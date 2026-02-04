## ADDED Requirements

### Requirement: Client-side search interface
The system SHALL provide search functionality for blog posts.

#### Scenario: Search input
- **WHEN** user types in search box
- **THEN** system filters results in real-time
- **THEN** system displays matching posts as user types
- **THEN** system highlights search terms in results

#### Scenario: Search submission
- **WHEN** user submits search form or presses Enter
- **THEN** system navigates to search results page
- **THEN** system displays all matching posts
- **THEN** system includes search query in URL

### Requirement: Search result ranking
The system SHALL rank search results by relevance.

#### Scenario: Title matches
- **WHEN** search term matches post title exactly
- **THEN** system ranks these results highest
- **THEN** system highlights title matches in results

#### Scenario: Content matches
- **WHEN** search term appears in post content
- **THEN** system ranks by frequency and position of matches
- **THEN** system includes snippet with highlighted term

#### Scenario: Tag matches
- **WHEN** search term matches post tags
- **THEN** system includes posts with matching tags
- **THEN** system ranks tag matches below content matches

### Requirement: Search index generation
The system SHALL generate search index at build time.

#### Scenario: Index creation
- **WHEN** build process runs
- **THEN** system creates search index from all blog posts
- **THEN** system includes title, content, tags, and description
- **THEN** system excludes HTML tags from searchable content

#### Scenario: Index updates
- **WHEN** blog posts are added, modified, or removed
- **THEN** system regenerates search index on next build
- **THEN** system maintains search performance with growing content

### Requirement: Search result display
The system SHALL display search results in user-friendly format.

#### Scenario: Multiple results
- **WHEN** search returns multiple results
- **THEN** system displays results in order of relevance
- **THEN** system shows post title, date, description snippet
- **THEN** system highlights matched terms in snippets

#### Scenario: No results
- **WHEN** search returns no results
- **THEN** system displays "No results found" message
- **THEN** system suggests checking spelling or trying different terms
- **THEN** system provides link to browse all posts

### Requirement: Search URL parameters
The system SHALL maintain search state in URL parameters.

#### Scenario: Search navigation
- **WHEN** user performs search
- **THEN** system updates URL with ?q=search-term parameter
- **THEN** system maintains search query when sharing links
- **THEN** system restores search state on page reload