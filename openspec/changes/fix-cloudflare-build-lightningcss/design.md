## Context

The project recently upgraded to Tailwind CSS v4 (`@tailwindcss/postcss` v4.1.18), which depends on `lightningcss` for CSS processing. The `lightningcss` package includes native binaries (`.node` files) distributed as optional dependencies for different platforms.

In the Cloudflare Pages build environment (Linux x64), npm's handling of optional dependencies can fail to install the required `lightningcss.linux-x64-gnu.node` binary, causing builds to fail with:
```
Error: Cannot find module '../lightningcss.linux-x64-gnu.node'
```

Tailwind CSS v4 with its Oxide engine is designed to work with Cloudflare Pages and offers significant performance benefits. The issue is specifically with npm's optional dependency installation behavior in CI/CD environments, not with Tailwind v4 itself.

## Goals / Non-Goals

**Goals:**
- Ensure Cloudflare Pages builds succeed with Tailwind CSS v4
- Force proper installation of optional dependencies in CI/CD environments
- Maintain v4's performance benefits and modern features

**Non-Goals:**
- Reverting to Tailwind CSS v3 (v4 is compatible with Cloudflare, just needs proper setup)
- Modifying Cloudflare Pages build commands
- Using workarounds that bypass the root cause

## Decisions

### Decision 1: Configure npm to include optional dependencies via .npmrc

**Choice:** Create `.npmrc` file with `optional=true` to force installation of optional dependencies

**Rationale:**
- npm by default may skip optional dependencies in some CI/CD environments to speed up installs
- Cloudflare Pages uses `npm clean-install` which can be more aggressive about skipping optionals
- Adding `.npmrc` with `optional=true` explicitly tells npm to install optional dependencies
- This is the recommended solution for projects using packages with platform-specific binaries
- Solves the root cause rather than working around it

**Alternatives considered:**
- Adding `lightningcss` as explicit dependency → **TRIED AND FAILED** - doesn't force optional binaries to install
- Reverting to Tailwind CSS v3 → Unnecessary; v4 works fine with proper npm configuration
- Adding platform-specific binary directly → Creates platform conflicts for local development
- Modifying Cloudflare build command → Not accessible in Cloudflare Pages interface

### Decision 2: Keep Tailwind CSS v4 and its benefits

**Choice:** Maintain the v4 upgrade with proper npm configuration

**Rationale:**
- Tailwind v4's Oxide engine (Rust + Lightning CSS) provides significant performance improvements
- v4 is designed for modern deployment platforms including Cloudflare Pages/Workers
- CSS-first configuration is simpler and more maintainable
- Automatic content detection eliminates manual path configuration
- The issue is npm configuration, not Tailwind v4 compatibility

## Risks / Trade-offs

**Risk:** `.npmrc` settings might affect other dependencies
→ **Mitigation:** The `optional=true` setting is safe and only ensures optionals are installed when needed

**Risk:** Slightly longer install times in CI due to installing all optional dependencies
→ **Mitigation:** The performance gain from Tailwind v4's Oxide engine far outweighs minimal install time increase

**Risk:** Other CI/CD platforms might behave differently
→ **Mitigation:** `.npmrc` is a standard npm configuration file respected across all platforms
