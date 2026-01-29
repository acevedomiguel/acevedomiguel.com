## Context

The project recently upgraded to Tailwind CSS v4 (`@tailwindcss/postcss` v4.1.18), which depends on `lightningcss` for CSS processing. The `lightningcss` package includes native binaries (`.node` files) distributed as optional dependencies for different platforms.

In the Cloudflare Pages build environment (Linux x64), npm's handling of optional dependencies can fail to install the required `lightningcss.linux-x64-gnu.node` binary, causing builds to fail with:
```
Error: Cannot find module '../lightningcss.linux-x64-gnu.node'
```

The local development environment (macOS) works fine because the macOS binary is installed, but CI/CD environments may have different behaviors with optional dependencies.

## Goals / Non-Goals

**Goals:**
- Ensure Cloudflare Pages builds succeed with Tailwind CSS v4
- Make lightningcss installation explicit and reliable across all environments
- Maintain compatibility with local development workflows

**Non-Goals:**
- Changing the Tailwind CSS configuration or moving away from v4
- Modifying the Cloudflare Pages build configuration
- Creating custom build scripts or workarounds

## Decisions

### Decision 1: Add lightningcss as explicit devDependency

**Choice:** Add `lightningcss` to the `devDependencies` section of package.json

**Rationale:**
- The native binary is already being pulled in transitively through `@tailwindcss/postcss`
- Making it explicit forces npm to properly install the platform-specific optional dependency
- This is the recommended approach in the Tailwind CSS v4 documentation for build environments
- No version conflicts since we'll use the same version range that `@tailwindcss/postcss` requires

**Alternatives considered:**
- Using `--include=optional` in npm install → Would require modifying Cloudflare's build command
- Switching back to Tailwind CSS v3 → Unnecessary regression, loses v4 benefits
- Using a different CSS processor → Too invasive for this issue

### Decision 2: Use compatible version range

**Choice:** Install `lightningcss` with `^` version range matching the peer dependency requirement

**Rationale:**
- Ensures compatibility with `@tailwindcss/postcss`
- Allows patch updates for bug fixes
- Prevents version conflicts

## Risks / Trade-offs

**Risk:** Additional dependency in package.json
→ **Mitigation:** The package is already being used transitively, so bundle size unchanged

**Risk:** Version conflicts if Tailwind CSS updates lightningcss requirement
→ **Mitigation:** Using semver range allows compatible updates; dependabot will catch conflicts

**Risk:** Different binary needed for different platforms
→ **Mitigation:** npm automatically installs the correct platform-specific optional dependency
