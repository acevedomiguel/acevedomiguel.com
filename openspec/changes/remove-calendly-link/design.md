## Context

The contact page currently includes a Calendly integration that allows users to schedule meetings. This is implemented as a styled button that opens an external Calendly page in a new tab. The button is part of the contact section alongside email, phone, and resume download options. The site is built with Next.js, TypeScript, and Tailwind CSS.

## Goals / Non-Goals

**Goals:**
- Remove the Calendly button cleanly without breaking the page layout
- Maintain visual consistency and design integrity
- Reduce external dependencies and potential maintenance overhead

**Non-Goals:**
- Replace Calendly with alternative scheduling functionality
- Modify other contact methods (email, phone, resume)
- Redesign the overall contact page layout

## Decisions

**Removal Approach**: Remove the entire button component and associated import
- **Rationale**: This is a straightforward removal that eliminates the external dependency completely
- **Alternatives considered**: 
  - Replace with contact form (too much scope for this change)
  - Replace with simple "Contact Us" button linking to email (redundant with existing email option)

**Import Cleanup**: Remove FaCalendarDay import if unused elsewhere
- **Rationale**: Prevents unused import warnings and keeps the import tree clean
- **Verification**: Will check if the icon is used elsewhere before removal

## Risks / Trade-offs

**Risk**: Removing the scheduling option might reduce user engagement
- **Mitigation**: The email and phone contact methods remain available for users to reach out

**Risk**: Layout might appear unbalanced with one less button
- **Mitigation**: The existing contact section has multiple elements (email, phone, resume) so removing one button should not significantly impact visual balance

**Trade-off**: Users lose the convenience of automated scheduling
- **Benefit**: Simplified maintenance, reduced external dependencies, faster page loading