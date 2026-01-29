## 1. Revert to Tailwind CSS v3

- [x] 1.1 Remove @tailwindcss/postcss from package.json
- [x] 1.2 Add tailwindcss v3 and required plugins to devDependencies  
- [x] 1.3 Create tailwind.config.js with content paths and theme config
- [x] 1.4 Update postcss.config.mjs to use tailwindcss v3
- [x] 1.5 Update styles/index.css to use v3 directives (@tailwind base/components/utilities)
- [x] 1.6 Remove .npmrc file (no longer needed)
- [x] 1.7 Run npm install to update dependencies

## 2. Verify builds

- [x] 2.1 Run local build with `npm run build` to verify no regressions
- [x] 2.2 Verify all pages render correctly with v3
- [x] 2.3 Commit and push changes to trigger Cloudflare Pages build
- [x] 2.4 Verify Cloudflare Pages build succeeds
