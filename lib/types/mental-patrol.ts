/**
 * Mental Patrol Types
 * Types for the Mental Patrol tool - a mental health companion to interrupt rumination loops
 */

/**
 * Available pet types
 */
export type PetType = 'cat' | 'dog' | 'bunny' | 'bird' | 'fox';

/**
 * Message categories for supportive messages
 */
export type MessageCategory =
  | 'grounding'
  | 'redirecting'
  | 'validating'
  | 'forward-thinking'
  | 'gentle';

/**
 * Pet personality traits that affect animations and behavior
 */
export interface PetPersonality {
  /** How energetic the pet's animations are (1-5) */
  energy: 1 | 2 | 3 | 4 | 5;
  /** How affectionate the pet appears */
  affection: 'aloof' | 'moderate' | 'enthusiastic';
  /** Special behavior traits */
  traits: string[];
}

/**
 * Pet configuration
 */
export interface Pet {
  /** Unique identifier for the pet type */
  id: PetType;
  /** Display name of the pet */
  name: string;
  /** Description of the pet's personality */
  description: string;
  /** Personality configuration */
  personality: PetPersonality;
  /** Emoji or icon representation (optional) */
  emoji?: string;
}

/**
 * Supportive message structure
 */
export interface Message {
  /** Unique identifier for the message */
  id: string;
  /** The message text to display */
  text: string;
  /** Category of the message */
  category: MessageCategory;
}

/**
 * User's Mental Patrol state stored in localStorage
 */
export interface MentalPatrolState {
  /** Currently selected pet */
  selectedPet: PetType | null;
  /** Total number of times the pet has been clicked */
  clickCount: number;
  /** Timestamp of when pet was first selected */
  firstUsedAt?: string;
  /** Timestamp of last interaction */
  lastUsedAt?: string;
}
