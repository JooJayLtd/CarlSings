# Carl's Soul Battery - Chrome Extension

A humorous Chrome extension that tracks your soul battery depletion during work hours with animated mood indicators and sarcastic messages.

## Features

- **Real-time battery depletion**: 100% at 9 AM → 0% at 6 PM
- **Animated mood indicators**: Bee (happy), Giraffe (neutral), Frog (sad), Cat (dead)
- **40 sarcastic messages**: Different messages based on battery level
- **No tracking**: All calculations happen locally based on time
- **Lightweight**: No background processes or permissions required

## Building from Source

This extension reuses code from the main CarlSings project.

1. **Navigate to the project root** (not the extension folder):
   ```bash
   cd /path/to/CarlSings
   ```

2. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

3. **Install extension dependencies:**
   ```bash
   cd chrome-extension/soul-battery
   npm install
   ```

4. **Build the extension:**
   ```bash
   npm run build
   ```
   This will:
   - Bundle the React code from the main project
   - Copy animations from `public/animations`
   - Create a `dist` folder with the packaged extension

5. **Load in Chrome:**
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked"
   - Select the `dist` folder from `chrome-extension/soul-battery/`

6. **Use it:**
   - Click the extension icon in your toolbar
   - Watch your soul battery deplete throughout the day
   - Get a new sarcastic message each time you open it

## Development

```bash
# Watch mode for development
npm run dev

# Build for production
npm run build
```

## How It Works

The extension calculates your battery percentage based on the current time:

- **9 AM - 6 PM**: Battery depletes from 100% to 0%
- **Outside work hours**: Battery stays at 0% (you're dead)
- **Mood changes** based on battery level:
  - 100-70%: Happy (Bee)
  - 69-40%: Neutral (Giraffe)
  - 39-10%: Sad (Frog)
  - 9-0%: Dead (Cat)

## Tech Stack

- React 18
- TypeScript
- Lottie React (for animations)
- Webpack (bundling)
- Manifest V3

## Icons Needed

Before publishing, you need to create icon files:

- `public/icons/icon16.png` (16×16)
- `public/icons/icon48.png` (48×48)
- `public/icons/icon128.png` (128×128)

These should represent a battery icon in the CarlSings pixel aesthetic.

## License

Part of the CarlSings project.

## Credits

Animations from LottieFiles (free animations with Lottie Simple License).
