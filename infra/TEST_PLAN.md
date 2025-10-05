# Test Plan

This document tracks what automated tests should be implemented for each feature. Tests will be written during Phase 12 (CARLS-68+).

---

## Phase 1: Project Setup & Dependencies

### CARLS-1: Next.js 15 Project
- [ ] App starts in development mode
- [ ] App builds successfully for production
- [ ] TypeScript compilation succeeds

### CARLS-2: Tailwind CSS
- [ ] Tailwind classes are processed
- [ ] Custom Tailwind config is applied

### CARLS-5: Zod
- [ ] Zod is importable and functional

### CARLS-8: TypeScript Strict Mode
- [ ] Strict mode is enabled in tsconfig.json
- [ ] No implicit any errors in codebase

---

## Phase 2: Design System & Theme

### CARLS-9: Google Fonts
- [ ] Inter font loads correctly
- [ ] JetBrains Mono font loads correctly
- [ ] Press Start 2P font loads correctly

### CARLS-10-14: CSS Custom Properties & Styles
- [ ] CSS custom properties are defined
- [ ] .pixel-card class applies correct styles
- [ ] .pixel-button class applies correct styles
- [ ] Retro color palette variables exist

---

## Phase 3: Core Types & Configuration

### CARLS-17: BlogEntry Interface
- [ ] BlogEntry type is correctly defined
- [ ] Required fields are enforced by TypeScript

### CARLS-18: Category Types
- [ ] CategorySlug type includes all 5 categories
- [ ] Category list is exported correctly

### CARLS-19: Category Config
- [ ] categoryConfig object has all 5 categories
- [ ] Each category has name, description, emoji, color

---

## Phase 5: UI Components

### CARLS-26: Navigation Component
- [ ] Navigation renders all 5 category links
- [ ] Navigation is sticky on scroll
- [ ] Active route is highlighted
- [ ] Mobile responsive menu works
- [ ] Links navigate to correct routes

### CARLS-34: 404 Page
- [ ] 404 page renders at invalid routes
- [ ] Cat (Lulu) ASCII art displays
- [ ] Back to home link works
- [ ] Page has correct metadata

### CARLS-35: Music Player
- [ ] Spotify embed renders correctly
- [ ] iFrame has correct src URL
- [ ] Component accepts spotifyTrackId prop
- [ ] Fallback for invalid track ID

---

## Phase 6: Root Layout Enhancement

### CARLS-30: Root Layout with Navigation
- [ ] Navigation appears on all pages
- [ ] Layout wraps all routes correctly

### CARLS-31: Root Layout Metadata
- [ ] Default title is set
- [ ] Default description is set
- [ ] OpenGraph metadata is present
- [ ] Favicon loads

---

## Phase 11: About Page

### CARLS-65: About Page Structure
- [ ] Page renders at /about route
- [ ] $whoAmI section displays
- [ ] $whoIsBasil section displays
- [ ] $ping section displays
- [ ] Footer quote displays
- [ ] Back button navigates to home
- [ ] Claude Code link opens in new tab
- [ ] Responsive design works on mobile/tablet/desktop

### CARLS-67: About Page Metadata
- [ ] Page title includes "About Carl"
- [ ] Page description is set correctly
- [ ] OpenGraph tags are present
- [ ] OpenGraph title and description match

---

## Future Tests (To be added as features are implemented)

### Navigation & Routing
- [ ] All navigation links work
- [ ] Active route highlighting
- [ ] 404 handling for invalid routes

### Content System
- [ ] MDX files are parsed correctly
- [ ] Frontmatter is extracted
- [ ] Blog entries validate against schema

### Category Pages
- [ ] Each category page renders
- [ ] Category filtering works
- [ ] Empty state for categories with no entries

### Entry Pages
- [ ] Individual entry pages render
- [ ] MDX content is rendered
- [ ] Anxiety meter displays correctly
- [ ] Category badge displays

### Accessibility
- [ ] All pages pass WCAG AA standards
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Color contrast ratios meet requirements

---

**Note:** This is a living document. Update it as new features are added.
