## REMOVED Requirements

### Requirement: Calendly scheduling integration
**Reason**: Remove external dependency and simplify contact functionality
**Migration**: Users should contact via email or phone methods already available on the contact page

#### Scenario: Calendly button removal
- **WHEN** contact page loads
- **THEN** Calendly scheduling button SHALL NOT be displayed
- **AND** page layout SHALL remain intact without the button