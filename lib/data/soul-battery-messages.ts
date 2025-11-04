import { MoodType } from '@/lib/types/soul-battery';

interface BatteryMessage {
  mood: MoodType;
  messages: string[];
}

export const BATTERY_MESSAGES: BatteryMessage[] = [
  {
    mood: 'happy',
    messages: [
      "Look at you, being all functional and stuff!",
      "Charged up like a motivational poster.",
      "Ready to pretend you enjoy meetings.",
      "Optimism level: dangerously high.",
      "Fully charged and ready to disappoint yourself!",
      "Maximum energy. Minimum motivation to use it.",
      "Fresh out of bed and already lying to yourself about productivity.",
      "Your soul is fully charged. Let's see how long that lasts.",
      "Peak performance achieved. The only way is down.",
      "Behold! A functional human!",
    ],
  },
  {
    mood: 'neutral',
    messages: [
      "The light at the end of the tunnel is probably a meeting.",
      "Soul battery status: meh.",
      "Existing. That counts as productivity, right?",
      "The existential dread is manageable.",
      "You are neither alive nor dead.",
      "The void is staring back, but politely.",
      "Energy level: adequate for minimal participation.",
      "Coasting on autopilot and yesterday's coffee.",
      "Not great, not terrible.",
      "Your soul is buffering. Please wait."
    ],
  },
  {
    mood: 'sad',
    messages: [
      "Is it Friday yet?",
      "Your soul is on life support.",
      "Achievement unlocked: Barely hanging on.",
      "If you listen closely, you can hear your soul crying.",
      "Have you tried turning yourself off and on again?",
      "Running on fumes and false hope.",
      "It's fine. I'm fine. EVERYTHING is fine.",
      "Your soul called in sick. You showed up anyway.",
      "Coffee low. Spirits lower.",
      "One email away from becoming the office legend."
    ],
  },
  {
    mood: 'dead',
    messages: [
      "Your soul has left the building.",
      "Error 404: Soul not found.",
      "You are now operating on pure spite.",
      "Achievement unlocked: Maximum depletion.",
      "Congratulations, you're a zombie now.",
      "Soul.exe has stopped responding.",
      "Out of office. Out of energy. Out of hope.",
      "Expired. Like that yogurt in the office fridge.",
      "You've reached your destination: Rock bottom.",
      "Flatlined. Please insert beer to restart."
    ],
  },
];

/**
 * Get a random message for the current mood
 */
export function getRandomMessage(mood: MoodType): string {
  const moodMessages = BATTERY_MESSAGES.find((m) => m.mood === mood);
  if (!moodMessages || moodMessages.messages.length === 0) {
    return "Soul battery status unknown.";
  }

  const randomIndex = Math.floor(Math.random() * moodMessages.messages.length);
  return moodMessages.messages[randomIndex];
}
