## ADDED Requirements

### Requirement: CSS-first configuration migration
The system SHALL migrate from Tailwind CSS v3 JavaScript configuration to v4 CSS-first configuration using `@theme` blocks.

#### Scenario: Theme configuration conversion
- **WHEN** system processes `tailwind.config.js` theme extensions
- **THEN** system SHALL convert all theme extensions to CSS `@theme` blocks in `styles/index.css`
- **AND** system SHALL maintain identical visual output after migration

#### Scenario: CSS import syntax migration
- **WHEN** system processes Tailwind CSS imports
- **THEN** system SHALL replace `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;` with single `@import "tailwindcss";`
- **AND** system SHALL preserve all existing custom CSS rules

### Requirement: Tailwind v4 syntax compliance
The system SHALL update all Tailwind utility classes and custom CSS to comply with v4 syntax changes.

#### Scenario: Utility class renaming
- **WHEN** system encounters deprecated v3 utility classes
- **THEN** system SHALL update `shadow` to `shadow-sm`, `shadow-sm` to `shadow-xs`, `rounded` to `rounded-sm`, `rounded-sm` to `rounded-xs`
- **AND** system SHALL update `outline-none` to `outline-hidden`, `ring` to `ring-3`

#### Scenario: Opacity utility migration
- **WHEN** system encounters old opacity utilities like `bg-opacity-*` or `text-opacity-*`
- **THEN** system SHALL replace with slash syntax equivalent (e.g., `bg-blue-500/50`)

#### Scenario: CSS variable syntax updates
- **WHEN** system encounters arbitrary CSS variables
- **THEN** system SHALL wrap variable names in parentheses (e.g., `color: var(--my-var)` becomes `color: var(--(my-var))`)

### Requirement: PostCSS configuration compatibility
The system SHALL update PostCSS configuration to be compatible with Tailwind CSS v4.

#### Scenario: PostCSS plugin configuration
- **WHEN** system processes `postcss.config.mjs`
- **THEN** system SHALL ensure `@tailwindcss/postcss` plugin is properly configured for v4
- **AND** system SHALL remove any obsolete PostCSS plugins that are now built into v4

#### Scenario: Build process validation
- **WHEN** system runs `npm run build`
- **THEN** system SHALL complete build without PostCSS errors
- **AND** system SHALL generate CSS with all Tailwind utilities properly included

### Requirement: Visual consistency preservation
The system SHALL maintain exact visual consistency between v3 and v4 implementations.

#### Scenario: Color preservation
- **WHEN** system renders custom colors from theme extensions
- **THEN** system SHALL display identical color values in v4 as v3 implementation
- **AND** system SHALL maintain all opacity and color mixing behaviors

#### Scenario: Typography preservation
- **WHEN** system renders custom font families and sizes
- **THEN** system SHALL display identical typography in v4 as v3 implementation
- **AND** system SHALL maintain all letter spacing and line height configurations

#### Scenario: Spacing preservation
- **WHEN** system renders custom spacing values
- **THEN** system SHALL display identical spacing in v4 as v3 implementation
- **AND** system SHALL maintain all margin, padding, and custom spacing scale values