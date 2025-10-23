# Mental Patrol

A mental health companion designed to interrupt rumination loops.

## Core Purpose

When you're ruminating about work situations, you can visit Mental Patrol to get a supportive message that helps ground you, validate your feelings, redirect your thinking, or provide gentle encouragement.

## Visual Design

- The interface features a cute animated pet companion
- User can choose their pet from options: Cat, Dog, Bunny, Bird, Fox
- Each pet has simple features (eyes that blink, ears/tail, friendly expression)
- Use CSS/SVG to create simple, adorable pet illustrations
- When clicked, the pet animates (bounce, wiggle, show sparkles)
- Clean, minimal design with soft purple/blue gradients
- Width: 350px, appropriate height for content

## Pet Selection

- On first use, show a pet selection screen: "Choose your companion!"
- Display 5 pet options with names (e.g., "Luna the Cat", "Max the Dog", "Clover the Bunny", "Pip the Bird", "Foxy the Fox")
- Each pet has a distinct personality reflected in their animation style
- Save the chosen pet using localStorage
- Include a small settings icon/button to change pets later

## Core Functionality

- User visits the Mental Patrol page
- Popup appears showing their chosen buddy pet
- User clicks the buddy pet
- A random supportive message appears with a heart icon
- Track total click count (persist across sessions)
- Pet has idle animation (occasional blinking, ear twitch, tail swish depending on pet)

## Message Categories

Messages rotate randomly from these categories:

### Grounding
- "You're ruminating again. That's okay. Take a breath."
- "Notice it. Don't judge it. Just notice."
- "Your brain is trying to solve an unsolvable puzzle. You can stop."
- "This feeling will pass. It always does."
- "You're safe right now. The meeting is over."

### Redirecting
- "Their motivations don't matter. You're leaving soon."
- "Stop trying to understand why. Start planning what's next."
- "You can't fix them. You can only protect yourself."
- "This is data, not a crisis. What are you learning?"
- "Every day closer to exit is a win."

### Validating
- "What happened was real. You're not making it up."
- "Being gaslit isn't your fault. Recognizing it is strength."
- "You tried. That matters, even if the outcome didn't change."
- "You're not crazy for expecting better. The system was broken."
- "Your hurt is valid. The situation was genuinely bad."

### Forward-thinking
- "What red flags will you watch for next time?"
- "You're learning to spot dysfunction faster now."
- "This experience is making you wiser, not weaker."
- "Future you will thank present you for leaving."
- "You're building immunity to toxic systems."

### Gentle
- "Hey. I see you. You're doing okay."
- "One month. You can do one month."
- "Take it one day at a time. One meeting at a time."
- "Be kind to yourself today."
- "You showed up. That took courage."

## Pet Personality Touches

### Cat (Luna)
- Purrs when clicked
- Stretches occasionally
- Sometimes looks away (aloof but caring)

### Dog (Max)
- Wags tail enthusiastically
- Very enthusiastic animations
- Loyal energy

### Bunny (Clover)
- Gentle nose twitches
- Soft hops
- Gentle demeanor

### Bird (Pip)
- Wing flutters
- Head tilts
- Cheerful chirpy energy

### Fox (Foxy)
- Playful animations
- Clever expressions
- Curious head tilts

## Technical Implementation

- Built with Next.js/React
- Store chosen pet and click count using localStorage
- Self-contained component that can be extracted as Chrome Extension later
- Use CSS/SVG for pet illustrations (no image files needed)
- Matches CarlSings retro pixel aesthetic

## Tone

The tone should be warm, friendly, and genuinely helpful - not corporate or clinical. Messages should feel like a supportive friend gently interrupting a spiral. The pet should feel like a real companion that's there for you.
