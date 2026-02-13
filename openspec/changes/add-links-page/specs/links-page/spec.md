## ADDED Requirements

### Requirement: Links page displays profile section
The page SHALL display a profile section at the top containing a circular profile picture, full name, and bio text.

#### Scenario: Profile section renders correctly
- **WHEN** a user visits the `/links` page
- **THEN** they SHALL see a circular profile picture with 1:1 aspect ratio
- **AND** they SHALL see the name "Miguel Angel Acevedo" below the picture
- **AND** they SHALL see the bio text: "I'm a software engineer with a passion for IoT and DevOps. I have over 20 years of experience in the field. I love creating innovative solutions that use connected devices and cloud computing. In my free time, I enjoy woodworking and playing with my kids."

#### Scenario: Profile picture uses correct image
- **WHEN** the page loads
- **THEN** the profile picture SHALL display `/profile.webp` (or `/profile.png` as fallback)
- **AND** the image SHALL be styled with `rounded-full` CSS class for circular appearance
- **AND** the image SHALL use `object-cover` to maintain aspect ratio

### Requirement: Links page displays all social links
The page SHALL display buttons for all required social media and professional links.

#### Scenario: All links are displayed
- **WHEN** a user visits the `/links` page
- **THEN** they SHALL see clickable buttons for each of the following:
  - LinkedIn (https://www.linkedin.com/in/acevedomiguel/)
  - GitHub (https://github.com/acevedomiguel)
  - Stack Overflow (https://stackoverflow.com/users/599036/miguel-angel-acevedo)
  - Buy Me a Coffee (https://www.buymeacoffee.com/acevedomiguel)
  - Instagram (https://www.instagram.com/acevedomiguel/)
  - Website (https://acevedomiguel.com)

#### Scenario: Links open in new tab
- **WHEN** a user clicks any link button
- **THEN** the link SHALL open in a new browser tab
- **AND** the link SHALL have `rel="noopener noreferrer"` for security

#### Scenario: Links have accessible labels
- **WHEN** assistive technologies parse the page
- **THEN** each link SHALL have an accessible `aria-label` describing the destination
- **AND** each link SHALL have visible text or icon indicating the platform

### Requirement: Links page is responsive
The page SHALL render correctly on different screen sizes.

#### Scenario: Mobile layout
- **WHEN** the page is viewed on a mobile device (width < 640px)
- **THEN** the content SHALL be centered with appropriate padding
- **AND** buttons SHALL be full-width or appropriately sized for touch targets

#### Scenario: Desktop layout
- **WHEN** the page is viewed on a desktop device (width >= 640px)
- **THEN** the content SHALL be centered with max-width constraint
- **AND** buttons SHALL be arranged in a visually appealing layout

### Requirement: Links page uses consistent styling
The page SHALL match the existing site design system.

#### Scenario: Styling matches site theme
- **WHEN** the page is viewed
- **THEN** colors SHALL match the site's Tailwind color scheme (gray text, hover states)
- **AND** spacing SHALL be consistent with other pages
- **AND** the page SHALL support dark mode if the site has it enabled

#### Scenario: Button styling matches linktree component
- **WHEN** buttons are rendered
- **THEN** they SHALL use the existing `components/linktree/button.tsx` component
- **AND** they SHALL have consistent hover and focus states
</content>