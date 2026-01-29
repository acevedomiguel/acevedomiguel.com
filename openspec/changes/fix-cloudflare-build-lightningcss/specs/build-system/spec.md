## ADDED Requirements

### Requirement: Cloudflare Pages builds must succeed with Tailwind CSS v4
The build system SHALL ensure all required native dependencies for Tailwind CSS v4 are properly installed in the Cloudflare Pages build environment.

#### Scenario: Build succeeds with lightningcss dependency
- **WHEN** the project is built in Cloudflare Pages environment
- **THEN** the build completes successfully without missing native binary errors

#### Scenario: Local builds remain functional
- **WHEN** the project is built locally using `npm run build`
- **THEN** the build completes successfully with all Tailwind CSS v4 features working

### Requirement: Native dependencies must be explicitly declared
The package.json SHALL include `lightningcss` as an explicit devDependency to prevent optional dependency installation issues.

#### Scenario: lightningcss package is listed in devDependencies
- **WHEN** package.json is examined
- **THEN** `lightningcss` is present in the devDependencies section

#### Scenario: Native binaries are installed during npm install
- **WHEN** `npm install` is run in a fresh environment
- **THEN** the lightningcss native binary for the platform is downloaded and available
