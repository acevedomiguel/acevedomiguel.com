## Context

The project recently upgraded to Tailwind CSS v4 (`@tailwindcss/postcss` v4.1.18), which depends on `lightningcss` for CSS processing. The `lightningcss` package includes native binaries (`.node` files) distributed as optional dependencies for different platforms.

In the Cloudflare Pages build environment (Linux x64), the required `lightningcss.linux-x64-gnu.node` binary is not being installed, causing builds to fail with:
```
Error: Cannot find module '../lightningcss.linux-x64-gnu.node'
```

**Attempted Solutions:**
1. Adding `lightningcss` as explicit dependency → Failed, binaries still not installed
2. Creating `.npmrc` with `include=optional` → Failed, binaries still not installed
3. Creating `.npmrc` with `node-linker=hoisted` → Failed, binaries still not installed

The root cause is that Cloudflare Pages' build environment has an issue with how it handles npm optional dependencies for native modules. While Tailwind CSS v4 is designed to work with Cloudflare, this specific issue blocks deployment.

## Goals / Non-Goals

**Goals:**
- Ensure Cloudflare Pages builds succeed immediately
- Maintain all current styling and functionality  
- Use a stable, production-ready CSS framework

**Non-Goals:**
- Waiting for upstream fixes to Tailwind CSS v4 or Cloudflare Pages
- Creating custom workarounds or build scripts
- Maintaining bleeding-edge packages at the cost of deployment reliability

## Decisions

### Decision 1: Revert to Tailwind CSS v3

**Choice:** Downgrade from `@tailwindcss/postcss` v4 to `tailwindcss` v3

**Rationale:**
- **Multiple attempted fixes failed:** Tried explicit dependencies, `.npmrc` configurations - none resolved the native binary installation issue
- Tailwind CSS v3 is mature, stable, and proven to work in Cloudflare Pages without issues
- v4 is still relatively new (released late 2024) and has known compatibility issues with certain build environments
- Our codebase uses only standard Tailwind utilities - no v4-specific features
- v3 provides all functionality we currently use
- We can migrate back to v4 when the ecosystem matures and the compatibility issues are resolved

**Alternatives considered:**
- Wait for v4 fixes → Blocks deployment indefinitely
- File bug reports with Tailwind/Cloudflare → Won't solve the immediate problem
- Use a different CSS framework → Too invasive, unnecessary
- Continue trying workarounds → Already exhausted reasonable options

### Decision 2: Use traditional Tailwind CSS v3 configuration

**Choice:** Create `tailwind.config.js` and update PostCSS config for v3

**Rationale:**
- Tailwind CSS v3 uses the traditional, well-documented configuration approach
- Requires minimal changes to existing code
- Configuration is straightforward and reliable

## Risks / Trade-offs

**Risk:** Losing v4 performance improvements
→ **Mitigation:** v3 is highly optimized and performance difference is negligible for our small site

**Risk:** Future need to migrate to v4
→ **Mitigation:** Migration path is well-documented; can upgrade when v4 ecosystem is more mature

**Risk:** Missing out on v4's CSS-first configuration
→ **Mitigation:** v3's JavaScript config works perfectly fine and is more widely understood

**Trade-off:** Pragmatism over cutting-edge
→ **Benefit:** Reliable builds and deployments trump having the latest version
