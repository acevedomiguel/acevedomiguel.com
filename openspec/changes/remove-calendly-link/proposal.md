## Why

Remove the external Calendly dependency from the contact page while maintaining the existing design integrity. The Calendly integration adds unnecessary external complexity and potential maintenance overhead for a simple contact functionality.

## What Changes

- Remove the Calendly button component from the contact page
- Remove associated calendar icon import (FaCalendarDay) if unused elsewhere
- Preserve the existing layout and styling of the contact page

## Capabilities

### New Capabilities
None - this is a removal-only change.

### Modified Capabilities
None - this change does not modify any existing specification requirements.

## Impact

- **Affected Code**: `/pages/contact/index.tsx` lines 163-172 (Calendly button)
- **Dependencies**: Potential removal of `react-icons/fa` FaCalendarDay import if unused elsewhere
- **Visual Impact**: The contact page will have one less call-to-action button, but the overall design remains intact with email, phone, resume download, and expertise sections preserved