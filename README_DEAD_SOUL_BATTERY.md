# Dead Soul Battery Tool

A simple, humorous workday energy visualization tool that shows your "soul battery" depleting throughout the work day and recharging overnight.

## Overview

The Dead Soul Battery Tool provides a visual representation of your energy/soul depletion during work hours with animated battery and mood indicators. Perfect for developers who feel their soul slowly draining during meetings and coding sessions.

## Features

### Core Functionality

- **Battery Depletion**: Automatically depletes from 100% (9 AM) to 0% (6 PM) during work hours
- **Overnight Recharge**: Automatically recharges from 0% (midnight) to 100% (9 AM) overnight
- **Real-time Updates**: Battery level updates in real-time based on current time
- **Persistent State**: Battery state persists across browser sessions via localStorage

### Visual Elements

- **Animated Battery**: Lottie animation showing battery filling/depleting with smooth transitions
- **Mood Indicator**: Animated mood changes based on battery level:
  - 100-70%: Happy/energetic
  - 69-40%: Neutral/focused
  - 39-10%: Tired/sad
  - 9-0%: Dead/skull
- **Battery Percentage**: Clear numeric display of current soul battery level
- **Color Coding**: Visual color gradient from green (full) → yellow (medium) → red (empty)

### Messages

Context-aware messages that change based on your current battery level:
- Morning messages: "Fully charged and ready!"
- Midday messages: "Halfway through, you got this"
- Low battery messages: "Almost there, hang in there"
- Dead battery messages: "Time to go home"

## Technical Implementation

### Tech Stack

- **React 19** with TypeScript
- **Next.js 15** App Router
- **lottie-react** for animations
- **localStorage** for state persistence
- **Tailwind CSS** with CarlSings retro pixel theme

### Time Logic

**Work Hours (Depletion):**
- Start: 9:00 AM (100%)
- End: 6:00 PM (0%)
- Duration: 9 hours
- Depletion rate: ~11.11% per hour

**Recharge Hours:**
- Start: 12:00 AM (0%)
- End: 9:00 AM (100%)
- Duration: 9 hours
- Recharge rate: ~11.11% per hour

**Outside Hours:**
- 6 PM - Midnight: Stays at 0%
- Maintains current level when browser is closed

### Data Structure

```typescript
interface BatteryState {
  percentage: number;           // 0-100
  lastUpdated: string;          // ISO timestamp
  workStartHour: number;        // Default: 9
  workEndHour: number;          // Default: 18
  rechargeStartHour: number;    // Default: 0
}

interface BatteryLevel {
  range: [number, number];      // e.g., [70, 100]
  mood: 'happy' | 'neutral' | 'sad' | 'dead';
  color: string;                // Hex color
  message: string[];            // Array of possible messages
}
```

### Component Structure

```
app/tools/soul-battery/
└── page.tsx                    # Main page

components/soul-battery/
├── battery-display.tsx         # Battery Lottie animation + percentage
├── mood-display.tsx            # Mood Lottie animation
└── message-display.tsx         # Contextual messages

lib/hooks/
└── useSoulBattery.ts          # Battery state management + time logic

lib/types/
└── soul-battery.ts            # TypeScript types

lib/data/
└── soul-battery-messages.ts   # Message content by battery level
```

## Design Philosophy

- **Simple & Humorous**: Lighthearted take on work-life energy drain
- **No Configuration**: Works out of the box with sensible defaults
- **Passive Monitoring**: No user interaction required, just observe
- **Retro Aesthetic**: Matches CarlSings pixel-perfect design system

## Future Enhancements

- Chrome Extension version for always-visible battery
- Customizable work hours
- Weekend mode (no depletion on weekends)
- Meeting detection (faster depletion during meetings)
- Break tracking (pause depletion)
- Historical tracking (see your soul depletion patterns over time)

## Portability

Designed to be easily extractable as a standalone Chrome Extension:
- Self-contained components
- No backend dependencies
- localStorage-based (can switch to chrome.storage.local)
- Minimal external dependencies

---

**Note**: This is a humorous tool meant to bring awareness to work-life balance. If you're consistently at 0%, maybe it's time for a real break!
