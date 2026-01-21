# Homepage and Resume Page Structure Analysis

## Executive Summary

This analysis compares the current homepage and resume page implementations to identify styling differences and create a mapping for transforming the resume page to match the homepage aesthetic. The homepage uses a clean, minimal approach while the resume page employs a complex card-based layout with dark backgrounds and borders.

## Homepage Structure Analysis

### Layout Pattern
- **Container**: Uses `Container` component with `container mx-auto` classes
- **Content Wrapper**: `max-w-3xl` constraint with `p-6` padding
- **Background**: Clean white background, no complex styling
- **Typography**: Consistent `text-md` sizing with `mb-3` and `mb-6` spacing

### Key CSS Classes Used
```css
/* Homepage Layout Classes */
.max-w-3xl        /* Content width constraint */
.mx-auto          /* Center alignment */
.p-6              /* Consistent padding */
.text-md          /* Content text size */
.mb-3             /* Small margin bottom */
.mb-6             /* Large margin bottom */
.font-medium      /* Text weight for emphasis */
```

### Component Structure
```
Layout
├── Nav
└── Container
    └── Content Wrapper (max-w-3xl, p-6)
        └── Text Content (text-md, mb-3/mb-6 spacing)
```

## Resume Page Structure Analysis

### Current Layout Pattern
- **Container**: Same `Container` component as homepage
- **Main Wrapper**: Complex card-based layout with rounded corners
- **Header Section**: Dark slate background (`bg-slate-600`, `bg-slate-700`)
- **Content Sections**: Bordered containers with complex styling
- **Typography**: Mixed sizing and inconsistent spacing

### Problematic CSS Classes
```css
/* Resume Page - Classes to Remove/Replace */
.bg-slate-600     /* Dark header background */
.bg-slate-700     /* Dark contact info background */
.rounded-lg       /* Rounded corners */
.border-x         /* Side borders */
.border-gray-100  /* Border styling */
.overflow-hidden  /* Complex container styling */
.ring-8           /* Complex ring styling */
.bg-blue-200      /* Colored backgrounds */
.dark:bg-blue-900 /* Dark mode styling */
```

### Current Component Structure
```
Layout
├── Nav
└── Container
    └── Resume Component
        ├── Header (slate-600 background, complex styling)
        ├── Contact Info (slate-700 background)
        ├── Work Component (bordered, timeline styling)
        └── Skills Component (bordered, badge styling)
```

## Key Differences Identified

### 1. Background and Color Scheme
- **Homepage**: Clean white background throughout
- **Resume**: Dark slate backgrounds (slate-600, slate-700) with borders

### 2. Layout Approach
- **Homepage**: Simple paragraph-based content flow
- **Resume**: Card-based layout with complex containers and borders

### 3. Typography Consistency
- **Homepage**: Consistent `text-md` sizing with regular spacing
- **Resume**: Mixed text sizes and inconsistent margin patterns

### 4. Visual Complexity
- **Homepage**: Minimal styling, focus on content
- **Resume**: Complex visual elements (borders, rounded corners, colored backgrounds)

## Style Mapping for Resume Redesign

### Container Transformation
```typescript
// Current Resume Container
<div className="rounded-lg overflow-hidden md:my-4 pb-4 my-0">

// Target Homepage Style
<div className="max-w-3xl mx-auto p-6">
```

### Header Section Transformation
```typescript
// Current Header (Complex)
<div className="flex bg-slate-600 text-white font-light">
  <picture>...</picture>
  <div className="p-8">...</div>
</div>

// Target Homepage Style
<div className="mb-6">
  <h1 className="text-2xl font-bold mb-3">Acevedo Miguel</h1>
  <h2 className="text-lg font-medium mb-3">Senior Software Engineer</h2>
  <p className="text-md mb-3">Professional summary...</p>
</div>
```

### Contact Information Transformation
```typescript
// Current Contact (Dark Background)
<div className="bg-slate-700 text-white sm:flex justify-between px-10 py-2 text-sm">

// Target Homepage Style
<div className="mb-6">
  <div className="text-md mb-1">me@acevedomiguel.com</div>
  <div className="text-md mb-1">Hong Kong</div>
  <div className="text-md mb-1">linkedin.com/in/acevedomiguel</div>
</div>
```

### Work Experience Transformation
```typescript
// Current Work (Timeline with borders)
<ol className="relative border-l border-gray-200 dark:border-gray-700 mx-6">

// Target Homepage Style
<div className="mb-6">
  <h2 className="text-xl font-semibold mb-3">Professional Experience</h2>
  <div className="mb-3">
    <h3 className="text-lg font-medium mb-1">Cloud Lead & IoT</h3>
    <div className="text-md text-gray-700 mb-2">Tensor Energy</div>
    <div className="text-sm text-gray-600 mb-2">Jan 2022 - Present</div>
    <p className="text-md mb-3">Job description...</p>
  </div>
</div>
```

### Skills Section Transformation
```typescript
// Current Skills (Badges and complex styling)
<span className="ml-4 mb-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-md bg-gray-100 text-gray-700 border">

// Target Homepage Style
<div className="mb-6">
  <h2 className="text-xl font-semibold mb-3">Areas of Expertise</h2>
  <div className="mb-3">
    <h3 className="text-lg font-medium mb-1">Cloud</h3>
    <p className="text-md">Kubernetes, AWS Lambda, Docker, GitHub Actions</p>
  </div>
</div>
```

## Implementation Strategy

### Phase 1: Container and Layout
1. Replace card-based container with homepage `max-w-3xl mx-auto p-6` pattern
2. Remove all `rounded-lg`, `border-x`, `overflow-hidden` classes
3. Apply consistent white background throughout

### Phase 2: Header and Personal Info
1. Transform dark slate header to clean text-based layout
2. Use homepage typography hierarchy (`text-2xl`, `text-lg`, `text-md`)
3. Apply consistent `mb-3` and `mb-6` spacing patterns

### Phase 3: Content Sections
1. Replace timeline-based work experience with simple text blocks
2. Transform skill badges to clean text lists
3. Ensure all content uses `text-md` sizing consistently

### Phase 4: Typography and Spacing
1. Apply homepage spacing patterns throughout (`mb-3`, `mb-6`)
2. Use consistent font weights (`font-medium`, `font-semibold`)
3. Maintain proper heading hierarchy

## Data Preservation Requirements

### Personal Information
- Name: "Miguel Angel Acevedo"
- Title: "Senior Software Engineer" 
- Email: "me@acevedomiguel.com"
- Phone: "(+852) 6435-6936"
- Location: "Hong Kong"
- LinkedIn: "linkedin.com/in/acevedomiguel"
- Website: "acevedomiguel.com"

### Work Experience (11 positions)
- All job titles, companies, dates, and descriptions must be preserved
- Chronological order (most recent first) must be maintained
- All highlights and technical details must be displayed

### Skills (4 categories)
- Cloud: 17 technologies
- Backend: 5 languages
- Event Driven: 9 technologies  
- Electronics: 6 platforms

### Additional Sections
- Certifications (4 items)
- Languages (3 languages)
- Awards, Publications (if present)

## Success Criteria

### Visual Consistency
- [ ] Resume page uses same `max-w-3xl mx-auto p-6` container as homepage
- [ ] All content uses `text-md` sizing consistently
- [ ] Spacing follows `mb-3` and `mb-6` patterns
- [ ] No dark backgrounds, borders, or rounded corners
- [ ] Clean white background throughout

### Content Preservation
- [ ] All personal information displayed correctly
- [ ] All 11 work positions shown in chronological order
- [ ] All skills and technologies listed
- [ ] Professional summary and contact details preserved

### Professional Appearance
- [ ] Clear visual hierarchy with proper headings
- [ ] Readable typography and appropriate spacing
- [ ] Professional presentation suitable for career purposes
- [ ] Responsive design working on all screen sizes

## Next Steps

1. **Task 2**: Implement new ResumeContainer component with homepage styling
2. **Task 3**: Create PersonalInfo component with clean typography
3. **Task 4**: Redesign WorkExperience component without timeline styling
4. **Task 6**: Implement Skills component with simple text layout
5. **Task 7**: Add proper semantic HTML structure and accessibility
6. **Task 8**: Optimize responsive design and performance