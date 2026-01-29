## Why

The Cloudflare Pages build is failing due to a missing native binary dependency (`lightningcss.linux-x64-gnu.node`) required by `@tailwindcss/postcss` v4. The recent upgrade to Tailwind CSS v4 introduced this dependency, but it's not being properly installed in the Cloudflare build environment due to how optional dependencies are handled.

## What Changes

- Add explicit `lightningcss` dependency to ensure the native binary is installed
- Update package.json to include `lightningcss` as a direct devDependency
- Verify the build works both locally and in Cloudflare Pages environment

## Capabilities

### New Capabilities
<!-- None - this is a build configuration fix -->

### Modified Capabilities
- `build-system`: Ensure Cloudflare Pages builds succeed with Tailwind CSS v4 dependencies

## Impact

- `package.json`: Add `lightningcss` as an explicit devDependency
- Cloudflare Pages build pipeline: Build should succeed after adding the dependency
- No impact on runtime behavior or user-facing features
