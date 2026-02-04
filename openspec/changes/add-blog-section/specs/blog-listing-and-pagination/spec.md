## ADDED Requirements

### Requirement: Blog post listing page
The system SHALL display paginated list of blog posts on /posts page.

#### Scenario: Default listing
- **WHEN** user visits /posts
- **THEN** system shows first page of posts with newest first
- **THEN** system displays post title, date, description, and tags
- **THEN** system limits posts per page (default: 10)

#### Scenario: Empty blog
- **WHEN** no blog posts exist
- **THEN** system displays friendly "No posts yet" message
- **THEN** system provides guidance on creating first post

### Requirement: Pagination navigation
The system SHALL provide navigation between blog post pages.

#### Scenario: Multiple pages
- **WHEN** posts exceed page limit
- **THEN** system shows "Previous" and "Next" navigation buttons
- **THEN** system displays current page indicator
- **THEN** system disables "Previous" on first page and "Next" on last page

#### Scenario: Direct page access
- **WHEN** user visits /posts?page=3
- **THEN** system shows correct page of posts
- **THEN** system returns 404 for invalid page numbers
- **THEN** system validates page parameter exists and is positive integer

### Requirement: Tag filtering
The system SHALL allow filtering blog posts by tags.

#### Scenario: Tag selection
- **WHEN** user clicks on a tag
- **THEN** system filters posts to show only posts with selected tag
- **THEN** system maintains pagination with filtered results
- **THEN** system updates URL to include tag parameter

#### Scenario: Multiple tags
- **WHEN** user selects multiple tags
- **THEN** system filters posts to show posts with any selected tag
- **THEN** system displays active filters with option to remove
- **THEN** system shows "No posts found" if no posts match filters

### Requirement: Posts per page configuration
The system SHALL allow configuration of posts per page limit.

#### Scenario: Configuration change
- **WHEN** posts per page limit is changed in configuration
- **THEN** system adjusts pagination accordingly
- **THEN** system recalculates total pages
- **THEN** system maintains SEO-friendly URLs