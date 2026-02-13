## Why

Create a dedicated `/links` page similar to LinkTree to provide a centralized location for all social media and professional links. This gives visitors an easy-to-share single URL that contains all relevant links, improving accessibility and user experience for profile sharing.

## What Changes

- Create new page route `/links` that displays a LinkTree-style page
- Display circular profile picture (existing `/profile.webp` or `/profile.png`)
- Display name "Miguel Angel Acevedo"
- Display bio: "I'm a software engineer with a passion for IoT and DevOps. I have over 20 years of experience in the field. I love creating innovative solutions that use connected devices and cloud computing. In my free time, I enjoy woodworking and playing with my kids."
- Include all links from footer plus website link:
  - LinkedIn profile
  - GitHub profile
  - Stack Overflow profile
  - Buy Me a Coffee
  - Instagram
  - Website (acevedomiguel.com)
- Style buttons using existing `components/linktree/button.tsx` component
- Responsive design matching site aesthetic

## Capabilities

### New Capabilities
- `links-page`: LinkTree-style page for centralized link sharing

### Modified Capabilities
<!-- None - this is a new feature that doesn't modify existing spec behavior -->

## Impact

- New page file: `pages/links/index.tsx`
- Reuses existing `components/linktree/button.tsx`
- Reuses existing profile image assets
- Adds new route to site navigation
- No breaking changes to existing pages
- May need SEO configuration for the new page
</content>