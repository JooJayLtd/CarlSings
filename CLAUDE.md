# CLAUDE.md

This file provides guidance to Basil (Claude Code at claude.ai/code) when working with code in this repository.

## Project Overview

**Carl Sings** is a Next.js 15 blog application for documenting a developer's journey navigating dev life. The project features:
- Pixel-perfect retro aesthetic, clean modern design
- Category-based content system ("Carl Discovered", "Carl Cried", etc.)
- Three-perspective blog format with distinct voices
- AI integrations for content analysis and recommendations
- Mental health awareness focus in tech culture

### Writing Style Guide

Blog posts use a three-perspective format, each with a distinct voice:

**Carl's Voice** (The hero on a journey):
- Third-person narrative, short punchy sentences
- Show Carl trying, struggling, learning
- Repetition of "Carl" creates rhythm and observational distance
- Strip away explanation. Show behavior, not introspection.
- Very concise - Carl's section should be the shortest
- Example: "Carl wanted to write. Carl researched instead. Zero posts written."

**Basil's Voice** (The teacher with references):
- Clear, concise technical guidance
- Links to authoritative sources: Martin Fowler, Kent Beck, industry patterns
- Uses established terms and principles (YAGNI, premature optimization, etc.)
- Structured: rules, patterns, actionable steps
- Educational without being preachy

**Lucy's Voice** (The validating therapist):
- Names psychological/neuroscience concepts with links to research
- Validates Carl's experience: "You're not alone"
- Identifies defense mechanisms and patterns
- Compassionate but professional
- Uses proper terms: productive procrastination, imposter syndrome, analysis paralysis

**General writing rules:**
- No emojis or icons in content (use text instead: "(done)" not "✅")
- External links open in new tabs automatically
- Keep all sections concise and impactful

## Tech Stack

- **Next.js 15** with App Router and Server Components
- **React 19** with modern patterns
- **TypeScript** for type safety
- **Shadcn/ui** with retro theme customization
- **Tailwind CSS** with custom retro color palette
- **MDX** for blog content
- **Vercel AI SDK** for AI integrations
- **Prisma + PostgreSQL** for database

## Development Commands

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Content management (when implemented)
npm run content:new      # Create new blog entry
npm run content:build    # Process MDX files
npm run ai:analyze       # Run AI analysis on entries

# Testing (when implemented)
npm run test             # Run all tests
npm run test:content     # Validate content structure
npm run test:ai          # Test AI integrations
npm run test:a11y        # Accessibility testing
```

## Architecture

### Project Structure

```
app/
├── (auth)/              # Auth route group
├── api/                 # API routes
├── categories/          # Blog categories
│   ├── [slug]/         # Dynamic category pages
│   └── page.tsx        # All categories listing
├── entries/            # Blog entries
│   ├── [slug]/         # Dynamic entry pages
│   └── page.tsx        # All entries listing
├── layout.tsx          # Root layout
├── page.tsx            # Home page
└── globals.css         # Global styles with retro theme

components/             # Reusable React components
lib/                   # Utilities and configurations
```

### Content Categories

The blog is organized into 6 core categories, each with specific visual styling:

- **Carl Discovered** 💡 - Learning moments (blue theme)
- **Carl Cried** 😢 - Debugging disasters (red theme)
- **Carl Debugged** 🔧 - Problem-solving victories (green theme)
- **Carl Celebrated** 🎉 - Wins and deployments (orange theme)
- **Carl Overthought** 🤔 - Analysis paralysis (purple theme)
- **Carl Connected** 🤝 - Networking and mentorship (yellow theme)

### Blog Entry Data Structure

```typescript
interface BlogEntry {
  id: string;
  title: string;
  category: CategorySlug;
  content: string;              // MDX content
  anxietyLevel: 1 | 2 | 3 | 4 | 5;
  lessonsLearned: string[];
  tags: string[];
  createdAt: Date;
  aiInsights?: {
    sentiment: number;
    themes: string[];
    recommendations: string[];
  };
  expertFeedback?: {
    source: 'neuroscientist' | 'psychologist' | 'therapist';
    feedback: string;
    helpful: boolean;
  }[];
}
```

## Design System

### Color Palette

The retro theme uses specific pixel-perfect colors:
- Primary: `#4785ff` (pixel-blue)
- Secondary: `#6366f1` (pixel-purple)
- Success: `#10b981` (pixel-green)
- Warning: `#f59e0b` (pixel-yellow)
- Error: `#ef4444` (pixel-red)
- Accent: `#f97316` (pixel-orange)

### Typography

- **Primary**: Inter (clean, modern sans-serif)
- **Monospace**: JetBrains Mono (code and technical content)
- **Pixel**: Press Start 2P (headers and branding, use sparingly)

### Component Patterns

- Use `pixel-card` class for content cards with hover effects
- Use `pixel-button` class for interactive elements
- Anxiety meters visualize stress levels (1-5 scale)
- Category badges use icon + color coding

## AI Integration

### Content Analysis

AI analysis runs on blog entries to provide:
- Sentiment analysis (-1 to 1 scale)
- Anxiety indicators extraction
- Growth moment identification
- Psychological theme detection
- Resource recommendations

Use the Vercel AI SDK with structured outputs (Zod schemas) for type-safe AI responses.

### Expert Feedback System

Future integration for professional feedback from mental health experts. Requests specify entry ID, category, and expert type.

## Accessibility Requirements

- High contrast ratios for all text
- Keyboard navigation for all interactive elements
- Semantic HTML throughout
- ARIA labels for anxiety meters and category indicators
- Screen reader friendly structure
- Never rely on color alone for meaning

## Content Validation

All blog entries must validate against the entry schema:
- Title: 1-100 characters
- Category: One of the 6 defined categories
- Content: Minimum 50 characters
- Anxiety level: 1-5
- At least one lesson learned
- Tags array (can be empty)

Use Zod for runtime validation of content structure.

## Development Notes

- Prefer Server Components by default; use Client Components only when needed
- Keep UI consistent with retro theme across all pages
- All new components should follow the pixel-perfect design system
- MDX content goes in the appropriate content directory
- Use TypeScript strictly - no `any` types
- Environment variables for all API keys and secrets
- Follow the tasks in TODO.md and implement tasks one by one. Mark them complete as you go.
- ELI5 short explanation for each task
- When asked to create tasks in TODO.md, create small, manageable tasks. Prioritise core functionality first. Use WYSIWYG task descriptions.
- Use shadcn/ui components as much as possible, customizing styles via Tailwind and CSS variables. Use shadcn/ui for icons.
- branch names should be `feature/<CARLS-no>-description` or `fix/<CARLS-no>-description` (eg. `feature/CARLS-22-zod-entry-schema`, `fix/CARLS-8-strict-tsconfig`)

## Pull Request Guidelines

### Branch naming
- `feature/<CARLS-no>-description` or `fix/<CARLS-no>-description`
- Examples: `feature/CARLS-MT-1-8-mental-patrol-foundation`, `fix/CARLS-8-strict-tsconfig`

### Commit message structure
- No emoji or Claude references in commit message
- Title line: `<CARLS-no>: <Concise description of change>`
- Only include `Co-Authored-By: Basil <noreply@anthropic.com>` at the end
- When creating commits or PRs, use this structure:

```markdown
## Summary

<1-2 sentence description of what this PR accomplishes>

## Related Issue

Closes #<issue-number>
Closes #<issue-number>
...

## Changes

<Organize by phase/category if multiple phases>

### <Phase/Category Name> (CARLS-X through CARLS-Y)
- <Specific change 1>
- <Specific change 2>
- <Nested details if needed>
  - Sub-point 1
  - Sub-point 2

## <Optional: Architecture Notes / Technical Details / Progress>

<Any important context about implementation decisions, future plans, or progress tracking>

---

Co-Authored-By: Basil <noreply@anthropic.com>
```

**Guidelines:**
- Do NOT include a Test Plan section - CI/CD handles automated checks (build, lint, type-checking)
- Manual testing is assumed to be completed before creating the PR
- Keep Summary concise (1-2 sentences)

## Testing Strategy

- **infra/TEST_PLAN.md** tracks what automated tests should be written for each feature
- When completing a task, add test cases to TEST_PLAN.md for that CARLS number
- Actual test implementation happens in Phase 12 (CARLS-68+)
- Use TEST_PLAN.md as a checklist when writing tests later

## Tools

Carl Sings includes interactive tools to support mental health and well-being:

### Mental Patrol

A mental health companion designed to interrupt rumination loops. See **README_MENTAL_PATROL.md** for full documentation.

**Key Features:**
- Interactive pet companion (Cat, Dog, Bunny, Bird, Fox)
- Supportive messages across 5 categories (Grounding, Redirecting, Validating, Forward-thinking, Gentle)
- Persistent pet selection and click tracking via localStorage
- CSS/SVG-based pet animations
- Designed to be portable (can be extracted as Chrome Extension later)

**Implementation Notes:**
- Lives in `app/tools/mental-patrol/`
- Uses Client Component for interactivity
- Follows CarlSings retro pixel aesthetic
- Self-contained and can be accessed via Tools navigation section