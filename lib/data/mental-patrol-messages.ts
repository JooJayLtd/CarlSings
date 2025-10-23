/**
 * Mental Patrol Messages
 * Evidence-based supportive messages grounded in psychology, neuroscience, and mindfulness
 * Designed to interrupt rumination loops using proven therapeutic techniques
 */

import { Message } from '@/lib/types/mental-patrol';

/**
 * Present Moment Awareness (Mindfulness-Based)
 * Based on MBCT (Mindfulness-Based Cognitive Therapy) - helps shift from thinking mode to sensing mode
 * Neuroscience: Activates the Default Mode Network deactivation, reducing self-referential thinking
 */
const presentMomentMessages: Message[] = [
  {
    id: 'present-1',
    text: 'Notice: What are three things you can see right now?',
    category: 'grounding',
  },
  {
    id: 'present-2',
    text: 'Your thoughts are just mental events. They are not facts.',
    category: 'grounding',
  },
  {
    id: 'present-3',
    text: 'Where is your body right now? Feel your feet on the ground.',
    category: 'grounding',
  },
  {
    id: 'present-4',
    text: 'This moment is the only moment that exists. You are here.',
    category: 'grounding',
  },
  {
    id: 'present-5',
    text: 'Take three conscious breaths. Notice the pause between inhale and exhale.',
    category: 'grounding',
  },
  {
    id: 'present-6',
    text: 'Thoughts are like clouds passing through the sky of your mind.',
    category: 'grounding',
  },
];

/**
 * Cognitive Defusion (ACT - Acceptance and Commitment Therapy)
 * Creates distance between you and your thoughts, reducing their emotional impact
 * Neuroscience: Reduces amygdala activation and increases prefrontal cortex engagement
 */
const cognitiveDefusionMessages: Message[] = [
  {
    id: 'defusion-1',
    text: "I'm having the thought that... (notice it's just a thought)",
    category: 'redirecting',
  },
  {
    id: 'defusion-2',
    text: 'Thank your mind for this thought, then gently let it go.',
    category: 'redirecting',
  },
  {
    id: 'defusion-3',
    text: 'What would you tell a friend having this thought?',
    category: 'redirecting',
  },
  {
    id: 'defusion-4',
    text: 'This is your brain trying to protect you. It means well but is overdoing it.',
    category: 'redirecting',
  },
  {
    id: 'defusion-5',
    text: 'You are not your thoughts. You are the observer of your thoughts.',
    category: 'redirecting',
  },
  {
    id: 'defusion-6',
    text: 'Rumination is a mental habit, not a problem-solving tool.',
    category: 'redirecting',
  },
];

/**
 * Self-Compassion (Based on Kristin Neff's research)
 * Counteracts self-criticism which fuels rumination
 * Neuroscience: Activates the caregiving system, releases oxytocin, reduces cortisol
 */
const selfCompassionMessages: Message[] = [
  {
    id: 'compassion-1',
    text: 'May I be kind to myself in this moment.',
    category: 'validating',
  },
  {
    id: 'compassion-2',
    text: 'Everyone struggles with difficult thoughts. You are not alone.',
    category: 'validating',
  },
  {
    id: 'compassion-3',
    text: 'What do I need right now to feel supported?',
    category: 'validating',
  },
  {
    id: 'compassion-4',
    text: 'This is a moment of suffering. Suffering is part of being human.',
    category: 'validating',
  },
  {
    id: 'compassion-5',
    text: 'Place your hand on your heart. Feel your own warmth and care.',
    category: 'validating',
  },
  {
    id: 'compassion-6',
    text: 'You are doing the best you can with the resources you have right now.',
    category: 'validating',
  },
];

/**
 * Values-Based Action (ACT)
 * Shifts focus from rumination to meaningful action
 * Neuroscience: Activates approach motivation circuits, increases dopamine
 */
const valuesActionMessages: Message[] = [
  {
    id: 'values-1',
    text: 'What small action would align with who you want to be?',
    category: 'forward-thinking',
  },
  {
    id: 'values-2',
    text: 'What matters most to you right now? Can you move toward it?',
    category: 'forward-thinking',
  },
  {
    id: 'values-3',
    text: 'What would the person you aspire to be do in this moment?',
    category: 'forward-thinking',
  },
  {
    id: 'values-4',
    text: "You can't control your thoughts, but you can choose your actions.",
    category: 'forward-thinking',
  },
  {
    id: 'values-5',
    text: "What's one tiny thing you can do right now that matters?",
    category: 'forward-thinking',
  },
  {
    id: 'values-6',
    text: 'Living well is the best response to difficult thoughts.',
    category: 'forward-thinking',
  },
];

/**
 * Gentle Interruption (Pattern Interruption)
 * Simple, brief interventions that disrupt rumination cycles
 * Neuroscience: Breaks the neural loop, allows for cognitive flexibility
 */
const gentleInterruptionMessages: Message[] = [
  {
    id: 'gentle-1',
    text: 'Hey. Take a pause. You deserve a break from thinking.',
    category: 'gentle',
  },
  {
    id: 'gentle-2',
    text: "It's okay to put this thought down for now.",
    category: 'gentle',
  },
  {
    id: 'gentle-3',
    text: "You noticed you were ruminating. That's already progress.",
    category: 'gentle',
  },
  {
    id: 'gentle-4',
    text: 'This thought will still be here later if you need it. Rest now.',
    category: 'gentle',
  },
  {
    id: 'gentle-5',
    text: 'Just for this moment, can you be here without solving anything?',
    category: 'gentle',
  },
  {
    id: 'gentle-6',
    text: 'Your brain is tired. Give it permission to rest.',
    category: 'gentle',
  },
];

/**
 * All messages combined
 */
export const allMessages: Message[] = [
  ...presentMomentMessages,
  ...cognitiveDefusionMessages,
  ...selfCompassionMessages,
  ...valuesActionMessages,
  ...gentleInterruptionMessages,
];

/**
 * Get a random message from all categories
 */
export function getRandomMessage(): Message {
  const randomIndex = Math.floor(Math.random() * allMessages.length);
  return allMessages[randomIndex];
}

/**
 * Get messages by category
 */
export function getMessagesByCategory(
  category: Message['category']
): Message[] {
  return allMessages.filter((msg) => msg.category === category);
}

/**
 * Export individual categories for specific use cases
 */
export {
  presentMomentMessages,
  cognitiveDefusionMessages,
  selfCompassionMessages,
  valuesActionMessages,
  gentleInterruptionMessages,
};
