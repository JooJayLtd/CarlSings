# TODO - Dead Soul Battery Tool

A simple workday energy visualization tool showing your "soul battery" depleting during work hours with mood animations.

## Phase 1: Setup & Structure

- [ ] [CARLS-DSB-1] Create README_DEAD_SOUL_BATTERY.md with tool specification
- [ ] [CARLS-DSB-2] Create app/tools/soul-battery directory and page.tsx
- [ ] [CARLS-DSB-3] Create components/soul-battery directory
- [ ] [CARLS-DSB-4] Install lottie-react package
- [ ] [CARLS-DSB-5] Download battery and mood Lottie animations from LottieFiles

## Phase 2: Core Logic & Types

- [ ] [CARLS-DSB-6] Create lib/types/soul-battery.ts (BatteryState type)
- [ ] [CARLS-DSB-7] Create lib/hooks/useSoulBattery.ts for battery state + localStorage
- [ ] [CARLS-DSB-8] Implement depletion logic (100% at 9 AM → 0% at 6 PM)
- [ ] [CARLS-DSB-9] Implement recharge logic (0% at midnight → 100% at 9 AM)

## Phase 3: Battery Display

- [ ] [CARLS-DSB-10] Create components/soul-battery/battery-display.tsx
- [ ] [CARLS-DSB-11] Integrate Lottie battery animation
- [ ] [CARLS-DSB-12] Add battery percentage display
- [ ] [CARLS-DSB-13] Add color gradient based on level (green → yellow → red)

## Phase 4: Mood Animation

- [ ] [CARLS-DSB-14] Create components/soul-battery/mood-display.tsx
- [ ] [CARLS-DSB-15] Integrate Lottie mood animations (happy/neutral/sad/dead)
- [ ] [CARLS-DSB-16] Switch mood animation based on battery level

## Phase 5: Messages

- [ ] [CARLS-DSB-17] Create lib/data/soul-battery-messages.ts with contextual messages
- [ ] [CARLS-DSB-18] Display messages based on current battery level

## Phase 6: Polish & Integration

- [ ] [CARLS-DSB-19] Apply CarlSings retro pixel aesthetic
- [ ] [CARLS-DSB-20] Add to Tools navigation section
- [ ] [CARLS-DSB-21] Make responsive for mobile

## Phase 7: Chrome Extension (Future)

- [ ] [CARLS-DSB-22] Extract as standalone React app
- [ ] [CARLS-DSB-23] Create manifest.json for Chrome Extension
- [ ] [CARLS-DSB-24] Bundle and test extension

---

**Total Tasks:** 24
**Current Progress:** 0/24 (0%)
