# TODO - Carl Sings Project (Phase 1 - MVP)

## Phase 1: Project Setup & Dependencies

- [x] [CARLS-1] Initialize Next.js 15 project with TypeScript and App Router
- [x] [CARLS-2] Install and configure Tailwind CSS
- [x] [CARLS-3] Install shadcn/ui CLI and initialize configuration
- [x] [CARLS-4] Install MDX dependencies (@next/mdx, remark-gfm, rehype-prism)
- [x] [CARLS-5] Install Zod for schema validation
- [x] [CARLS-6] Install date-fns for date formatting
- [x] [CARLS-7] Configure next.config.js for MDX support
- [x] [CARLS-8] Configure TypeScript strict mode in tsconfig.json

## Phase 2: Design System & Theme

- [x] [CARLS-9] Add Google Fonts (Inter, JetBrains Mono, Press Start 2P) to app/layout.tsx
- [x] [CARLS-10] Define CSS custom properties for retro color palette in globals.css
- [x] [CARLS-11] Define anxiety level colors in globals.css
- [x] [CARLS-12] Create utility classes for pixel-perfect spacing in globals.css
- [x] [CARLS-13] Create .pixel-card styles in globals.css
- [x] [CARLS-14] Create .pixel-button styles in globals.css
- [x] [CARLS-15] Configure Tailwind theme with custom colors (Tailwind v4 uses CSS)
- [x] [CARLS-16] Add custom font families (configured via CSS variables)

## Phase 3: Core Types & Configuration

- [x] [CARLS-17] Create lib/types/blog.ts with BlogEntry interface (without AI/expert fields)
- [x] [CARLS-18] Create lib/types/category.ts with CategorySlug type and category list
- [x] [CARLS-19] Create lib/config/categories.ts with categoryConfig object
- [x] [CARLS-20] ~~Create components/ui/category-card.tsx for category displays~~ (skipped - using navigation instead)
- [x] [CARLS-21] ~~Update app/page.tsx to display all categories~~ (completed with navigation approach)

## Phase 4: Validation & Constants

- [ ] [CARLS-22] Create lib/schemas/entry.ts with Zod entry validation schema
- [ ] [CARLS-23] Create lib/constants/index.ts for app-wide constants

## Phase 5: More UI Components

- [ ] [CARLS-24] Create components/ui/anxiety-meter.tsx component
- [ ] [CARLS-25] Create components/ui/category-badge.tsx component
- [x] [CARLS-26] Create components/navigation.tsx with PixelNavigation
- [ ] [CARLS-27] Create components/footer.tsx with site footer
- [ ] [CARLS-28] Create components/entry-card.tsx for blog entry previews
- [ ] [CARLS-29] Create components/ui/loading-spinner.tsx component

## Phase 6: Root Layout Enhancement

- [x] [CARLS-30] Update app/layout.tsx with navigation and footer (navigation added)
- [x] [CARLS-31] Add metadata configuration to app/layout.tsx
- [ ] [CARLS-32] Create app/loading.tsx for root loading state
- [ ] [CARLS-33] Create app/error.tsx for root error boundary
- [x] [CARLS-34] Create app/not-found.tsx (completed - cat-themed 404 page)
- [x] [CARLS-35] Create components/music-player.tsx (completed - Spotify embed)

## Phase 7: Categories Pages

- [ ] [CARLS-36] Create app/categories/page.tsx for all categories listing
- [ ] [CARLS-37] Create app/categories/loading.tsx
- [ ] [CARLS-38] Create app/categories/error.tsx
- [ ] [CARLS-39] Create app/categories/[slug]/page.tsx for single category
- [ ] [CARLS-40] Create app/categories/[slug]/loading.tsx
- [ ] [CARLS-41] Create app/categories/[slug]/error.tsx
- [ ] [CARLS-42] Add generateStaticParams to app/categories/[slug]/page.tsx
- [ ] [CARLS-43] Add generateMetadata to app/categories/[slug]/page.tsx

## Phase 8: Entries Pages

- [ ] [CARLS-44] Create app/entries/page.tsx for all entries listing
- [ ] [CARLS-45] Create app/entries/loading.tsx
- [ ] [CARLS-46] Create app/entries/error.tsx
- [ ] [CARLS-47] Create app/entries/[slug]/page.tsx for single entry with MDX rendering
- [ ] [CARLS-48] Create app/entries/[slug]/loading.tsx
- [ ] [CARLS-49] Create app/entries/[slug]/error.tsx
- [ ] [CARLS-50] Add generateStaticParams to app/entries/[slug]/page.tsx
- [ ] [CARLS-51] Add generateMetadata to app/entries/[slug]/page.tsx

## Phase 9: Content System (File-based)

- [ ] [CARLS-52] Create content/ directory for MDX files
- [ ] [CARLS-53] Create content/entries/ subdirectory
- [ ] [CARLS-54] Create lib/content/mdx.ts with MDX file reading utilities
- [ ] [CARLS-55] Add frontmatter parsing to lib/content/mdx.ts
- [ ] [CARLS-56] Create first sample entry MDX: "first-day-anxiety.mdx"
- [ ] [CARLS-57] Create second sample entry MDX: "discovered-usestate.mdx"
- [ ] [CARLS-58] Create third sample entry MDX: "production-bug-nightmare.mdx"

## Phase 10: Data Access Layer (File-based)

- [ ] [CARLS-59] Create lib/data/categories.ts with hardcoded categories array
- [ ] [CARLS-60] Add getCategoryBySlug function to lib/data/categories.ts
- [ ] [CARLS-61] Create lib/data/entries.ts with file-based getEntries function
- [ ] [CARLS-62] Add getEntryBySlug function to lib/data/entries.ts
- [ ] [CARLS-63] Add getEntriesByCategory function to lib/data/entries.ts
- [ ] [CARLS-64] Add getRecentEntries function to lib/data/entries.ts

## Phase 11: Additional Pages

- [x] [CARLS-65] Create app/about/page.tsx with Carl's story
- [ ] [CARLS-66] Create app/about/loading.tsx
- [x] [CARLS-67] Add metadata to app/about/page.tsx

## Phase 12: Testing & Quality

- [ ] [CARLS-68] Install testing dependencies (Jest, @testing-library/react, @testing-library/jest-dom)
- [ ] [CARLS-69] Create jest.config.js with Next.js preset
- [ ] [CARLS-70] Create jest.setup.js for test environment configuration
- [ ] [CARLS-71] Create __tests__/lib/data/categories.test.ts
- [ ] [CARLS-72] Create __tests__/lib/data/entries.test.ts
- [ ] [CARLS-73] Create __tests__/components/ui/anxiety-meter.test.tsx
- [ ] [CARLS-74] Create __tests__/components/ui/category-badge.test.tsx
- [ ] [CARLS-75] Add test script to package.json

## Phase 13: Polish & Basic SEO

- [ ] [CARLS-76] Add sitemap.xml generation
- [ ] [CARLS-77] Add robots.txt configuration
- [ ] [CARLS-78] Optimize images with next/image throughout
- [ ] [CARLS-79] Add loading skeletons for better perceived performance
- [ ] [CARLS-80] Verify mobile responsiveness across all pages
- [ ] [CARLS-81] Update README.md with development instructions

## Phase 14: Future Enhancements

- [ ] [CARLS-82] Add user-submitted traits feature to About page

---

**Total Tasks:** 84
**Current Progress:** 27/84 (32%)