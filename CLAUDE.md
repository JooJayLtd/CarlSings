# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Carl Sings** is a Next.js 15 blog application for documenting an anxious software developer's journey. The project features:
- Pixel-perfect retro aesthetic inspired by Codecademy's clean, modern design
- Category-based content system ("Carl Discovered", "Carl Cried", etc.)
- AI integrations for content analysis and recommendations
- Future expert feedback from neuroscientists and psychologists
- Mental health awareness focus in tech culture

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