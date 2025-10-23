# TODO - Mental Patrol

A mental health companion tool for interrupting rumination loops. See **README_MENTAL_PATROL.md** for full specifications.

## Phase 1: Project Setup & Structure

- [x] [CARLS-MT-1] Create app/tools directory structure
- [x] [CARLS-MT-2] Create app/tools/mental-patrol directory
- [x] [CARLS-MT-3] Create app/tools/mental-patrol/page.tsx (main Mental Patrol page)
- [x] [CARLS-MT-4] Create components/mental-patrol directory for tool components

## Phase 2: Core Data & Types

- [x] [CARLS-MT-5] Create lib/types/mental-patrol.ts with Pet, Message, and PetPersonality types
- [x] [CARLS-MT-6] Create lib/data/mental-patrol-messages.ts with all 5 message categories
- [x] [CARLS-MT-7] Create lib/data/mental-patrol-pets.ts with pet configurations (names, personalities)
- [x] [CARLS-MT-8] Create lib/hooks/useMentalPatrol.ts for localStorage management

## Phase 3: Pet Components & Animations

- [ ] [CARLS-MT-9] Create components/mental-patrol/pet-cat.tsx with Luna animations
- [ ] [CARLS-MT-10] Create components/mental-patrol/pet-dog.tsx with Max animations
- [ ] [CARLS-MT-11] Create components/mental-patrol/pet-bunny.tsx with Clover animations
- [ ] [CARLS-MT-12] Create components/mental-patrol/pet-bird.tsx with Pip animations
- [ ] [CARLS-MT-13] Create components/mental-patrol/pet-fox.tsx with Foxy animations
- [ ] [CARLS-MT-14] Create lib/styles/mental-patrol-animations.css for shared pet animations
- [ ] [CARLS-MT-15] Add idle animations (blinking, ear twitches, tail swishes) to each pet
- [ ] [CARLS-MT-16] Add click animations (bounce, wiggle, sparkles) to each pet

## Phase 4: Pet Selection UI

- [ ] [CARLS-MT-17] Create components/mental-patrol/pet-selection.tsx (first-time selection screen)
- [ ] [CARLS-MT-18] Add pet preview cards with hover effects to pet-selection.tsx
- [ ] [CARLS-MT-19] Create components/mental-patrol/pet-settings.tsx (settings button to change pets)
- [ ] [CARLS-MT-20] Wire up pet selection to localStorage persistence

## Phase 5: Message System

- [ ] [CARLS-MT-21] Create components/mental-patrol/message-display.tsx for showing supportive messages
- [ ] [CARLS-MT-22] Add random message selection logic from 5 categories
- [ ] [CARLS-MT-23] Add heart icon animation when message appears
- [ ] [CARLS-MT-24] Add fade-in/slide-up animation for message display
- [ ] [CARLS-MT-25] Create click counter component with localStorage persistence

## Phase 6: Main Interface

- [ ] [CARLS-MT-26] Build main Mental Patrol layout with chosen pet display
- [ ] [CARLS-MT-27] Add click handler for pet to trigger message display
- [ ] [CARLS-MT-28] Add stats display (total clicks, pet name)
- [ ] [CARLS-MT-29] Apply retro pixel aesthetic matching CarlSings design system
- [ ] [CARLS-MT-30] Add purple/blue gradients to background

## Phase 7: Navigation Integration

- [ ] [CARLS-MT-31] Add "Tools" section to navigation component
- [ ] [CARLS-MT-32] Add Mental Patrol link to Tools navigation section
- [ ] [CARLS-MT-33] Create tools landing page at app/tools/page.tsx (optional)
- [ ] [CARLS-MT-34] Add appropriate icons for Tools navigation

## Phase 8: Polish & Accessibility

- [ ] [CARLS-MT-35] Add keyboard navigation support (Space/Enter to click pet)
- [ ] [CARLS-MT-36] Add ARIA labels for screen readers
- [ ] [CARLS-MT-37] Ensure high contrast for all text
- [ ] [CARLS-MT-38] Add responsive design for mobile devices
- [ ] [CARLS-MT-39] Test localStorage fallback if disabled
- [ ] [CARLS-MT-40] Add loading states for initial pet selection

## Phase 9: Testing & Documentation

- [ ] [CARLS-MT-41] Add test cases to infra/TEST_PLAN.md for Mental Patrol
- [ ] [CARLS-MT-42] Test all 5 pets and their animations
- [ ] [CARLS-MT-43] Test message randomization from all categories
- [ ] [CARLS-MT-44] Test localStorage persistence across sessions
- [ ] [CARLS-MT-45] Test pet switching functionality

## Phase 10: Future Enhancements

- [ ] [CARLS-MT-46] Extract as standalone Chrome Extension
- [ ] [CARLS-MT-47] Create Mac Widget version
- [ ] [CARLS-MT-48] Add sound effects for pet interactions (optional)
- [ ] [CARLS-MT-49] Add more pet options (Turtle, Owl, Axolotl, etc.)
- [ ] [CARLS-MT-50] Add customizable message categories (user can add their own)

---

**Total Tasks:** 50
**Current Progress:** 8/50 (16%)
