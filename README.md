# Carl Sings 🎵

A developer blog documenting the journey of an anxious software developer - the highs, lows, and everything in between.

## About

Carl Sings is a personal blog built with Next.js 15, featuring a retro pixel-perfect design. The blog chronicles the real experiences of a developer navigating through anxiety, bugs, breakthroughs, and celebrations in the software development world.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui + Lucide React icons
- **Content:** MDX with frontmatter
- **Validation:** Zod
- **Fonts:** Inter, JetBrains Mono, Press Start 2P

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Available Scripts

- `npm run dev` - Start development server (with Turbopack)
- `npm run build` - Build for production (with Turbopack)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Blog Categories

- **Carl Discovered** - New tools, frameworks, and concepts
- **Carl Cried** - Bugs, frustrations, and difficult moments
- **Carl Debugged** - Problem-solving victories
- **Carl Celebrated** - Achievements and milestones
- **Carl Overthought** - Architecture decisions and analysis paralysis

## Project Structure

```
/app                 # Next.js App Router pages
/components          # React components
  /ui               # Reusable UI components
/lib                # Utility functions and configs
  /types           # TypeScript type definitions
  /config          # Configuration files
/content            # MDX blog entries (coming soon)
```

## Development Notes

See [CLAUDE.md](./CLAUDE.md) for detailed development guidance and architecture notes.

See [TODO.md](./TODO.md) for current project tasks and progress (25/83 tasks complete - 30%).

## Design System

The blog features a retro pixel-perfect aesthetic with:
- Custom color palette (pixel-blue, pixel-red, pixel-green, pixel-yellow)
- Anxiety level indicators (5 levels with distinct colors)
- Pixel-perfect buttons and cards with box shadows
- Monospace fonts for code and retro elements

## License

MIT
